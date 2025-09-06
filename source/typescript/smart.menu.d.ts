import  {BaseElement, Animation} from "./smart.element"

export interface MenuProperties {
  /**
   * Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled and the element remains static. Otherwise, animations will be enabled according to the specified mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the delay, in milliseconds, before the Menu dropdown is closed after the mouse cursor leaves the Menu area. This setting is only effective when the selectionMode property is set to 'mouseenter'. Adjusting this value can help prevent the dropdown from closing too quickly when the mouse briefly leaves the Menu.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * If set to true, the element will automatically receive focus when the user's mouse pointer enters (hovers over) it, triggering a mouseenter event. This allows keyboard interactions or focus styles to activate without requiring a manual click or tab action from the user.
   * Default value: false
   */
  autoFocusOnMouseenter?: boolean;
  /**
   * Enables checkboxes for top-level menu items (the direct children of the main Menu component), allowing users to select or deselect these items. To make submenu items (nested within menu groups) checkable, set the checkable property individually on the corresponding smart-menu-items-group elements. This allows for granular control over which menu levels support checkable states.
   * Default value: false
   */
  checkable?: boolean;
  /**
   * Controls whether checkboxes and radio buttons can be shown within the Menu component. This property applies exclusively to the main Menu, not to its subitems (i.e., smart-menu-item or smart-menu-items-group). Use this property to enable or disable the display of selectable options directly in the Menu.  For further customization of individual items, refer to the checkable property.
   * Default value: false
   */
  checkboxes?: boolean;
  /**
   * Sets the selection mode (check mode) for the top-level Menu items, which are the immediate children of the Menu component. The 'checkMode' property determines how these menu items can be toggled or selected:- Possible values for 'checkMode' are:    - ''checkbox'': Menu items can be checked and unchecked independently (multiple selections allowed).    - ''radioButton'': Menu items are mutually exclusive (only one can be selected at a time, like radio buttons).    - ''none'': Menu items have no checkable or selectable state.You can also assign a comma-separated list of these values (for example, ''checkbox, radioButton, none, checkbox''). If a list is provided, each value corresponds to a group of top-level menu items. These groups are separated by menu separators (special items acting as visual dividers). The first value in the list applies to the first group of menu items, the second value to the next group (after the first separator), and so on. When a separator is encountered, it signals the start of a new checkMode context, applying the next value in the list to subsequent items.Note: This 'checkMode' property only affects the top-level menu items. To control check modes for submenus or nested groups, set the 'checkMode' property individually on each smart-menu-items-group (the group component representing submenu levels).
   * Default value: checkbox
   */
  checkMode?: MenuCheckMode | string;
  /**
   * Defines the document-level event that triggers the closure of all open menu dropdowns, or the entire menu if the mode property is set to 'dropDown'. This event ensures that any active menu or submenu is properly closed when the specified user interaction occurs (e.g., clicking outside the menu).
   * Default value: up
   */
  closeAction?: MenuCloseAction | string;
  /**
   * Specifies the data source for the Menu component. The data source should be provided as an array of objects, where each object represents a menu item with the following properties:- 'label': *(string, required)* — The text displayed for the menu item.- 'value': *(any, required)* — The unique value associated with the menu item, used for identification or selection.- 'shortcut': *(string, optional)* — A keyboard shortcut hint displayed alongside the menu item, helping users discover quick access keys.- 'items': *(array, optional)* — An array of objects representing sub-menu items, allowing for nested menus and hierarchical structures. Each sub-menu item follows the same structure as a top-level menu item.By configuring the data source in this format, you enable dynamic and flexible rendering of complex menu structures.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Controls whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When disabled, users cannot interact with the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies which field in the data source should be used as the item's label. This determines the text value displayed for each item in the UI by mapping it to the corresponding property from your data.
   * Default value: "label"
   */
  displayMember?: string;
  /**
   * Here is a revised and enhanced version of your description:Specifies a custom outer container to which all dropdown containers will be appended. By default, dropdown elements are appended inside the menu itself. You can assign this property an HTML element directly, or provide the id of an existing HTML element (as a string).When the menu is in mode 'dropDown', the dropDownAppendTo property not only determines where the dropdowns are appended, but also controls the parent container of the entire menu. Note that the open method will open the menu relative to its original position within the DOM, regardless of the value of dropDownAppendTo.Use this property to customize the DOM structure, for example, to ensure that dropdowns are rendered within a specific container for layout, styling, or layering purposes.
   * Default value: null
   */
  dropDownAppendTo?: string | HTMLElement;
  /**
   * When this property is enabled, opening an element’s dropdown will display a transparent overlay that covers the area between the dropdown and the rest of the page. This overlay prevents interaction with other page elements while the dropdown is open, helping to focus the user’s attention on the dropdown content.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * When this property is set and the Menu is in drop-down mode, the Menu's position will be anchored to the ID set by this property.
   * Default value: ""
   */
  dropDownAnchor?: string;
  /**
   * Specifies the direction in which the menu dropdown will appear when opened (e.g., above, below, left, or right relative to the triggering element), allowing customization of dropdown placement to enhance user interface layout and usability.
   * Default value: auto
   */
  dropDownPosition?: MenuDropDownPosition | string;
  /**
   * A getter method that retrieves and returns an array containing all current Menu item objects, allowing access to the complete list of menu entries managed by the application.
   * Default value: 
   */
  items?: any;
  /**
   * Specifies the field name in the data source that contains the collection of subitems associated with each item group. This property allows the component to identify and retrieve subitems for each group by referencing the appropriate data field.
   * Default value: "items"
   */
  itemsMember?: string;
  /**
   * Retrieves or assigns the unlockKey, a unique code required to activate and access the product's full features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting for the component. This property determines which language is used when displaying text from the messages property, allowing for dynamic localization and internationalization of the user interface. When the language is changed, the corresponding localized messages are retrieved from the messages object.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify how localized strings are generated or displayed, such as adjusting placeholders, applying additional formatting, or handling special localization rules before the message is returned.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies or retrieves an object containing the set of strings used within the widget interface that can be localized for different languages. This property works together with the locale property to enable internationalization by allowing developers to customize or translate UI text according to the user's language preferences.
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
   * Loads a custom minimize icon from an HTMLTemplateElement selected by its ID. The element’s inner HTML is used as the icon’s template, allowing for flexible and reusable icon customization within the application.
   * Default value: "null"
   */
  minimizeIconTemplate?: string;
  /**
   * Specifies the minimum width (in pixels) at which the Menu transitions from its normal (expanded) state to a minimized (collapsed) mode. When the Menu’s container width falls below this threshold, the minimized mode is automatically activated. If set to null, the Menu will remain in its normal state regardless of width and will not minimize automatically.
   * Default value: null
   */
  minimizeWidth?: number;
  /**
   * Specifies how the menu is visually presented to users, such as in a horizontal, vertical, dropdown, or collapsible format. Adjusting this setting allows customization of the menu’s layout and interaction style.
   * Default value: horizontal
   */
  mode?: MenuMode | string;
  /**
   * Toggles the menu’s visibility when it is set to 'dropDown' mode, allowing users to open or close the menu as needed.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Defines how the menu's scroll buttons behave when navigating through its items. This property is effective only if dropDownAppendTo is set to a value other than null. If dropDownAppendTo is null, the scroll button behavior setting is ignored.
   * Default value: auto
   */
  overflow?: Overflow | string;
  /**
   * If set to true, the Menu and its dropdowns will remain open when a Menu item is checked or unchecked, rather than automatically closing upon selection. This allows users to make multiple selections without the Menu closing each time an item is toggled.
   * Default value: false
   */
  preventCloseOnCheck?: boolean;
  /**
   * When the element is set to "readonly," users can view its content but are unable to modify or edit the value. However, users may still interact with the element in limited ways, such as selecting and copying its content. The element remains focusable, but any attempts to change its data will be ignored.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Specifies or retrieves whether the element’s alignment is configured to support locales that use right-to-left (RTL) text direction, such as Arabic or Hebrew. When enabled, the element’s content and layout are adjusted for proper display in RTL languages.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies how users can select items within the menu, such as allowing single selection, multiple selections, or no selection.
   * Default value: click
   */
  selectionMode?: MenuSelectionMode | string;
  /**
   * Specifies the theme to be applied. The selected theme controls the visual appearance and styling of the element, including colors, fonts, spacing, and other design aspects.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, the element is removed from the tab order and cannot be focused using keyboard navigation or script.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies which field in the data source should be used as the value for each item. This property maps a particular key or column from your data to represent the item's value in the component, enabling proper identification, selection, and data binding.
   * Default value: "value"
   */
  valueMember?: string;
}
/**
 Horizontal, Vertical and Popup Menu. Popup Menus appear when a user taps an interactive UI element such as an icon, button, action, or content, such as selected items or text.
*/
export interface Menu extends BaseElement, MenuProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the menu is closed by the user. It is only fired when the component is operating in <em>'dropDown'</em> <strong>mode</strong>; other modes do not emit this event. Use this event to perform actions or cleanup tasks when the drop-down menu is dismissed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is dispatched immediately before the menu begins to close, providing an opportunity to intercept the closing operation. By invoking event.preventDefault() within the event handler, you can cancel the menu’s closure, allowing for custom logic or validation before the menu actually closes. Note that this event is only fired when the menu is operating in <em>'dropDown'</em> <strong>mode</strong>; it does not apply to other display modes.
	* @param event. The custom event. Custom data event was created with: ev.detail(trigger)
   *  trigger - Indicates whether the event was called from inside the element or programatically.
   */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a jqx-menu-items-group is collapsed, indicating that a previously expanded group of menu items within the jqxMenu component has been closed by the user or through a programmatic action. Use this event to perform custom actions or UI updates in response to the group collapsing.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that was collapsed.
   *  label - The label of the toggled item that was collapsed.
   *  value - The value of the toggled item that was collapsed.
   *  path - The path of the toggled item that was collapsed, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that was collapsed.
   */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately before a jqx-menu-items-group begins to collapse, allowing developers to execute custom logic or prevent the group from collapsing if necessary. It provides an opportunity to handle user interactions or update the user interface in response to the group collapsing action.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that is going to be collapsed.
   *  label - The label of the toggled item that is going to be collapsed.
   *  value - The value of the toggled item that is going to be collapsed.
   *  path - The path of the toggled item that is going to be collapsed, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that is going to be collapsed.
   */
  onCollapsing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a jqx-menu-items-group component is expanded by the user, either through a click or programmatic action. It allows you to execute custom logic in response to a menu group opening.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that was expanded.
   *  label - The label of the toggled item that was expanded.
   *  value - The value of the toggled item that was expanded.
   *  path - The path of the toggled item that was expanded, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that was expanded.
   */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired immediately before a jqx-menu-items-group begins to expand, allowing you to execute custom logic or cancel the expansion operation if needed. Use this event to intervene right before the menu group becomes visible to the user.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, path, children)
   *  item - The menu item that is going to be expanded.
   *  label - The label of the toggled item that is going to be expanded.
   *  value - The value of the toggled item that is going to be expanded.
   *  path - The path of the toggled item that is going to be expanded, e.g. '0.1', '1.1.2'.
   *  children - The children items of the toggled item that is going to be expanded.
   */
  onExpanding?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the checked or unchecked state of a menu item is changed by the user or programmatically. It provides details about which menu item was affected and the new check state, allowing developers to respond to the change accordingly, such as updating the UI or processing the selected option.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value, checked)
   *  item - The menu item which state was changed.
   *  label - The label of the item which state was changed.
   *  value - The value of the item which state was changed.
   *  checked - The checked state of the toggled item. If false the item is not toggled.
   */
  onItemCheckChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user clicks on a menu item. It provides information about the selected menu item, allowing you to handle user interactions, perform actions based on the item selected, or update the interface accordingly.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, label, value)
   *  item - The menu item that is toggled.
   *  label - The label of the toggled item.
   *  value - The value of the toggled item.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the menu is opened by the user. It is only fired when the component is operating in <em>'dropDown'</em> <strong>mode</strong>; in all other modes, this event will not be triggered. Use this event to perform actions when the drop-down menu becomes visible.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately before the menu is opened, giving you the opportunity to intervene before the menu becomes visible. Within your event handler, you can prevent the menu from opening by calling event.preventDefault(). Note that this event is only emitted when the menu is operating in <em>'dropDown'</em> <strong>mode</strong>; it will not be fired in any other mode.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a new item to the menu by appending the specified entry, including its label, action, and any associated properties, to the existing menu structure. This allows dynamic expansion of the menu options displayed to users.
   * @param {HTMLElement} Item. A smart-menu-item to add to the Menu.
   * @param {HTMLElement | string} Parent?. The smart-menu-items-group or its id or numeric path to add the item to.
   */
  addItem(Item: HTMLElement, Parent?: HTMLElement | string): void;
  /**
   * Marks the specified item as checked or selected, updating its status to indicate it is active, enabled, or chosen.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
   */
  checkItem(item: HTMLElement | string): void;
  /**
   * Removes all existing items from the Menu, resulting in an empty Menu with no selectable options.
   */
  clear(): void;
  /**
   * Simulates a user click event on a specified item programmatically, triggering any associated event handlers or actions as if the item were clicked manually by the user.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
   */
  clickItem(item: HTMLElement | string): void;
  /**
   * Automatically closes the Menu when the <strong>mode</strong> property is set to <em>'dropDown'</em>, ensuring that the menu is dismissed upon selection or when clicking outside the menu area. This behavior provides a streamlined user experience consistent with standard dropdown functionality.
   */
  close(): void;
  /**
   * Collapses a currently expanded item, hiding its content from view and displaying only the header or summary. This is typically used in expandable/collapsible components such as accordions or dropdown menus.
   * @param {HTMLElement | string} item?. smart-menu-item/smart-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
   * @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
   */
  collapseItem(item?: HTMLElement | string, animation?: boolean): void;
  /**
   * Displays the detailed content or additional information of an item by expanding its view, typically used in accordions, dropdowns, or collapsible sections.
   * @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
   * @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
   */
  expandItem(item: HTMLElement | string, animation?: boolean): void;
  /**
   * Retrieves a specific item using either its unique identifier (ID) or a numeric path value. This allows you to access an item directly by providing its assigned ID or by specifying its position within a structured path.
   * @param {string} id. The id or numeric path of an item
   * @returns {HTMLElement}
   */
  getItem(id: string): HTMLElement;
  /**
   * Expands the menu to display all available options, maximizing its visibility and accessibility for the user.
   */
  maximize(): void;
  /**
   * Collapses the navigation menu to its minimized or compact state, reducing its visible size to save screen space while still providing access to essential menu options.
   */
  minimize(): void;
  /**
   * Opens the Menu component only when the <strong>mode</strong> property is set to <em>'dropDown'</em>. In this mode, the Menu will become visible in a dropdown format, allowing users to interact with its items. If <strong>mode</strong> is set to any other value, the Menu will not open.
   * @param {number} left. Horizontal position
   * @param {number} top. Vertical position
   */
  open(left: number, top: number): void;
  /**
   * Removes a specified item from the menu, updating the menu structure to reflect the change. This action ensures the targeted menu item is no longer displayed or accessible within the menu interface.
   * @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group or its id or numeric path to remove.
   */
  removeItem(item: HTMLElement | string): void;
  /**
   * Unselects or removes the checkmark from a selected item, indicating that it is no longer active, chosen, or included in the current selection.
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

/**Sets the selection mode (check mode) for the top-level Menu items, which are the immediate children of the Menu component. The 'checkMode' property determines how these menu items can be toggled or selected:<br/><br/>- Possible values for 'checkMode' are:  <br/>  - ''checkbox'': Menu items can be checked and unchecked independently (multiple selections allowed).  <br/>  - ''radioButton'': Menu items are mutually exclusive (only one can be selected at a time, like radio buttons).  <br/>  - ''none'': Menu items have no checkable or selectable state.<br/><br/>You can also assign a comma-separated list of these values (for example, ''checkbox, radioButton, none, checkbox''). If a list is provided, each value corresponds to a group of top-level menu items. These groups are separated by menu separators (special items acting as visual dividers). The first value in the list applies to the first group of menu items, the second value to the next group (after the first separator), and so on. When a separator is encountered, it signals the start of a new checkMode context, applying the next value in the list to subsequent items.<br/><br/>Note: This 'checkMode' property only affects the top-level menu items. To control check modes for submenus or nested groups, set the 'checkMode' property individually on each jqx-menu-items-group (the group component representing submenu levels). */
export declare type MenuCheckMode = 'checkbox' | 'radioButton';
/**Defines the document-level event that triggers the closure of all open menu dropdowns, or the entire menu if the mode property is set to 'dropDown'. This event ensures that any active menu or submenu is properly closed when the specified user interaction occurs (e.g., clicking outside the menu). */
export declare type MenuCloseAction = 'down' | 'up' | 'none';
/**Specifies the direction in which the menu dropdown will appear when opened (e.g., above, below, left, or right relative to the triggering element), allowing customization of dropdown placement to enhance user interface layout and usability. */
export declare type MenuDropDownPosition = 'auto' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'overlay-left' | 'overlay-right';
/**Specifies how the menu is visually presented to users, such as in a horizontal, vertical, dropdown, or collapsible format. Adjusting this setting allows customization of the menu’s layout and interaction style. */
export declare type MenuMode = 'horizontal' | 'vertical' | 'dropDown' | 'tree';
/**Defines how the menu's scroll buttons behave when navigating through its items. This property is effective only if dropDownAppendTo is set to a value other than null. If dropDownAppendTo is null, the scroll button behavior setting is ignored. */
export declare type Overflow = 'auto' | 'hidden' | 'scroll';
/**Specifies how users can select items within the menu, such as allowing single selection, multiple selections, or no selection. */
export declare type MenuSelectionMode = 'click' | 'mouseenter';
export interface MenuItemProperties {
  /**
   * 
   * Default value: true
   */
  checked?: boolean;
  /**
   * Controls whether the element is enabled or disabled. When set to true, the element is interactive and can receive user input; when set to false, the element is disabled, preventing user interaction and applying a disabled appearance as appropriate.
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
/**
 Defines a menu item.
*/
export interface MenuItem extends BaseElement, MenuItemProperties {

  /* Get a member by its name */
  [name: string]: any;
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

export interface MenuItemsGroupProperties {
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
  checkMode?: MenuCheckMode | string;
  /**
   * Specifies whether the element is enabled or disabled. When set to true, the element is disabled and cannot be interacted with by the user; when set to false, the element remains enabled and fully interactive.
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
/**
 Defines a group of menu items.
*/
export interface MenuItemsGroup extends BaseElement, MenuItemsGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
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

