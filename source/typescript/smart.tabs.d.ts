import  {BaseElement, Animation} from "./smart.element"

export interface TabItemProperties {
  /**
   *   "Represents the visual and interactive state of the close button within a tab item. This can include states such as default, hovered, focused, active (pressed), or disabled, and determines how the close button appears and responds to user actions."
   * Default value: false
   */
  closeButtonHidden?: boolean;
  /**
   * Prevents the Tab item from being interacted with or selected by the user. When disabled, the Tab item appears visually inactive and cannot be activated through mouse, touch, or keyboard navigation.
   * Default value: false
   */
  disabled?: boolean;
  /**
   *   "Indicates the numerical position of an individual tab item within a tabbed navigation component, starting from zero. Used to identify, activate, or manage specific tabs based on their sequence in the tab list."
   * Default value: null
   */
  index?: number;
  /**
   * Indicates the visual state and styling applied to a tab item when it is currently selected or active, signaling to users which tab is in focus and displaying its associated content.
   * Default value: false
   */
  selected?: boolean;
  /**
   * Label text displayed on a navigation tab within a tabbed interface. Used to identify and differentiate each tab for the user.
   * Default value: ""
   */
  label?: string;
  /**
   * Content displayed within a tab panel, representing the information or elements associated with a specific tab item in a tabbed interface.
   * Default value: 
   */
  content?: any;
  /**
   * Specifies the font size of the label text displayed on each tab item.
   * Default value: null
   */
  labelSize?: number;
}
/**
 Defines a tab item.
*/
export interface TabItem extends BaseElement, TabItemProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tab-item"): TabItem;
        querySelector(selectors: "smart-tab-item"): TabItem | null;
        querySelectorAll(selectors: "smart-tab-item"): NodeListOf<TabItem>;
        getElementsByTagName(qualifiedName: "smart-tab-item"): HTMLCollectionOf<TabItem>;
        getElementsByName(elementName: "smart-tab-item"): NodeListOf<TabItem>;
    }
}

export interface TabItemsGroupProperties {
  /**
   * 
   * Default value: ""
   */
  label?: string;
  /**
   * 
   * Default value: null
   */
  labelSize?: number;
}
/**
 Defines a group of tab items.
*/
export interface TabItemsGroup extends BaseElement, TabItemsGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tab-items-group"): TabItemsGroup;
        querySelector(selectors: "smart-tab-items-group"): TabItemsGroup | null;
        querySelectorAll(selectors: "smart-tab-items-group"): NodeListOf<TabItemsGroup>;
        getElementsByTagName(qualifiedName: "smart-tab-items-group"): HTMLCollectionOf<TabItemsGroup>;
        getElementsByName(elementName: "smart-tab-items-group"): NodeListOf<TabItemsGroup>;
    }
}

export interface TabsProperties {
  /**
   * Determines whether the "Add new tab" button (typically represented by a plus sign "+") is visible in the user interface. When set to true, the button is displayed, allowing users to add new tabs; when set to false, the button is hidden. This property can be used to both retrieve the current visibility status or control the display of the button.
   * Default value: false
   */
  addNewTab?: boolean;
  /**
   * Enables toggle functionality for tab selection. When set to true, the selectedIndex property can be assigned a value of null, indicating that no tab is currently selected. This allows users to deselect any active tab, leaving the tab interface with no selected tab.
   * Default value: false
   */
  allowToggle?: boolean;
  /**
   * Configures or retrieves the current animation mode. When set to 'none', all animations are disabled, resulting in immediate transitions without animation effects. Use other valid values to enable or customize animation behavior as needed.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Configures or retrieves the display mode of the close button. This property determines how the close button appears or behaves within the user interface, such as being always visible, visible on hover, or hidden.
   * Default value: default
   */
  closeButtonMode?: TabsCloseButtonMode | string;
  /**
   * Controls whether close buttons are shown in the user interface. Setting this property to true will display close buttons; setting it to false will hide them. You can also retrieve the current state to determine if close buttons are visible.
   * Default value: false
   */
  closeButtons?: boolean;
  /**
   * Determines whether the content section of the Tabs component is expanded or collapsed. When set to 'true', the content section is hidden (collapsed); when set to 'false', the content is visible (expanded). This property can be used to programmatically control or retrieve the collapsed state of the Tabs content.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * Controls whether the collapsible functionality is active, allowing content sections to expand or collapse when enabled. When disabled, all content sections remain fully expanded and cannot be collapsed.
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Specifies the data source from which the content for each tab will be retrieved and displayed. This property defines what data will populate the individual tabs when the Tabs component is rendered.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element becomes non-interactive and typically appears visually muted to indicate its inactive state.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Allows users to scroll horizontally through tab labels in the tab strip using the mouse wheel when the tabs exceed the visible area (i.e., when the tab strip overflows). Enabling this option lets users navigate through hidden tabs by scrolling, while disabling it prevents mouse wheel scrolling in the tab strip.
   * Default value: false
   */
  enableMouseWheelAction?: boolean;
  /**
   * Sets or retrieves the 'unlockKey' value, a unique key or code required to unlock and gain access to the product’s features or content.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current locale setting, which determines language and regional formatting. This property works together with the messages property to display localized content or translations based on the selected locale.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically invoked during processes such as language selection, text translation, or locale updates to handle localization-specific behavior.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or retrieves an object containing key-value pairs of strings used throughout the widget’s interface. These strings can be customized for different languages, enabling localization of the widget’s text content. This property is typically used alongside the locale property to display the widget’s labels, messages, and prompts in the selected language.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "htmlTemplateNotSuported": ": Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "ambiguousIndexes": "jqx-tabs: Initially set jqx-tab-item indexes are ambiguous and are ignored in favour of the HTML structure.",
   *     "detailsObjectRequired": "jqx-tabs: The method \"insert\" requires a details Object to be passed as a second argument.",
   *     "invalidIndex": "jqx-tabs: '' method accepts an index of type number.",
   *     "referenceNodeNotChild": "jqx-tabs: Passed  is not part of this jqx-tabs element.",
   *     "tabItemRequired": "jqx-tabs: The method '' requires a \"jqx-tab-item\" element to be passed as an argument."
   *   }
   * }
   */
  messages?: any;
  /**
   * Gets the current name of the widget, or assigns a new name to the widget when provided a value. The name uniquely identifies the widget instance within the application.
   * Default value: """"
   */
  name?: string;
  /**
   * Specifies or retrieves the behavior of the scroll buttons for the Tabs component. This property is relevant only when the tabLayout is set to 'scroll', allowing navigation through tab items that exceed the visible area. Use this option to control how scroll buttons appear and function when there are more tabs than can be displayed at once.
   * Default value: auto
   */
  overflow?: Overflow | string;
  /**
   * Prevents all user interactions with the element, making it unresponsive to mouse, keyboard, and touch events such as clicking, dragging, or typing. This means the element cannot be activated, focused, or interacted with in any way by the user.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Controls whether the tab reordering feature is enabled or disabled. When enabled, users can rearrange the tabs by dragging a tab and dropping it onto a new position within the tab list. This allows for dynamic reordering of tabs based on the user's preference. When disabled, tabs remain in their original order and cannot be moved by the user.
   * Default value: false
   */
  reorder?: boolean;
  /**
   * Determines whether users can resize tab labels by clicking and dragging them with the mouse. When enabled, this allows tab labels to be adjusted interactively by the user. When disabled, tab label sizes remain fixed and cannot be changed through mouse actions. This setting can be used to either retrieve the current resizability state or update it.
   * Default value: false
   */
  resize?: boolean;
  /**
   * Gets or sets a value that determines whether the element’s text direction is set to right-to-left (RTL) alignment, ensuring proper display and support for languages and locales that read from right to left, such as Arabic or Hebrew.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Configures or retrieves the position of the scroll buttons within the component, allowing you to specify where the scroll controls appear (for example, at the start, end, or both ends of the scrollable area). This property enables precise placement of navigation controls for improved user experience.
   * Default value: both
   */
  scrollButtonsPosition?: LayoutPosition | string;
  /**
   * Specifies or retrieves how the tab strip responds when users interact with the scroll buttons. Determines the scrolling behavior—such as the distance the tab strip moves or whether scrolling is smooth or immediate—when the left or right scroll buttons are clicked.
   * Default value: paging
   */
  scrollMode?: TabsScrollMode | string;
  /**
   * Gets the index or identifier of the currently selected tab, or allows you to specify which tab should be selected.
   * Default value: null
   */
  selectedIndex?: number | null;
  /**
   * Specifies how users can navigate or switch between different tabs, such as by clicking, keyboard shortcuts, or swipe gestures. This setting defines the interaction method for moving from one tab to another within the tabbed interface.
   * Default value: click
   */
  selectionMode?: TabSelectionMode | string;
  /**
   * Determines how the component handles situations where the element’s width is insufficient to display all tab labels. Offers four configurable behaviors for managing tab overflow, such as scrolling, collapsing, fading, or displaying an overflow menu.
   * Default value: scroll
   */
  tabLayout?: TabsTabLayout | string;
  /**
   * Specifies or retrieves the position of the tab strip within the user interface, determining where the tab strip is displayed (e.g., top, bottom, left, or right) relative to the main content area.
   * Default value: top
   */
  tabPosition?: TabPosition | string;
  /**
   * Specifies or retrieves the direction in which the text is displayed within the tabs, such as horizontal or vertical orientation. This property allows you to control whether tab labels are arranged from left to right, top to bottom, or in another supported direction.
   * Default value: horizontal
   */
  tabTextOrientation?: Orientation | string;
  /**
   * Specifies the theme to be applied, which controls the visual style, color scheme, and overall appearance of the element. The selected theme determines how the element is displayed to users.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to interact with it using tab navigation or other focus-related actions.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Tabs organize content across different screens, data sets, and other interactions. Tabs can be paired with components like top app bars. Tabs can be displayed horizontally or vertically.
*/
export interface Tabs extends BaseElement, TabsProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when the addNewTab feature is enabled and the corresponding button or interface element is clicked by the user.
	* @param event. The custom event.    */
  onAddNewTabClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user selects a different tab, indicating that the active tab has changed. It allows you to respond to tab selection changes, such as updating content or executing specific logic based on the newly selected tab.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, oldIndex)
   *  index - The tab's index.
   *  oldIndex - The tab's old index.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever a user closes a browser tab. It allows you to execute custom actions or clean up resources associated with that tab right before it is removed from the browser. The event provides details about the closed tab, such as its identifier and any relevant data, enabling you to manage your application's state accordingly.
	* @param event. The custom event. Custom data event was created with: ev.detail(index)
   *  index - The tab's index.
   */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is dispatched immediately before a tab is closed, giving you an opportunity to intercept the closure. By calling event.preventDefault() within the event handler, you can cancel the default close action and prevent the tab from closing. This allows you to perform actions such as prompting the user to save changes or confirming the close operation before proceeding.
	* @param event. The custom event. Custom data event was created with: ev.detail(index)
   *  index - The tab's index.
   */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user completes a drag operation, signaling that the dragged element has been released and the drag sequence has finished. It allows you to perform cleanup actions, update UI elements, or handle any final logic after dragging is concluded.
	* @param event. The custom event. Custom data event was created with: ev.detail(left, top, index, label)
   *  left - The tab's left position.
   *  top - The tab's top position.
   *  index - The tab's index.
   *  label - The tab's label.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * This event is fired when a user initiates a drag operation, typically by clicking and beginning to move a draggable element. It marks the beginning of the drag-and-drop sequence, allowing you to set up any necessary data or visual feedback for the dragged item.
	* @param event. The custom event. Custom data event was created with: ev.detail(left, top, index, label)
   *  left - The tab's left position.
   *  top - The tab's top position.
   *  index - The tab's index.
   *  label - The tab's label.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the order of tabs within a tab group changes, such as when a user drags and drops a tab to a new position. It allows you to respond to tab reordering actions, enabling features like updating your application's state or saving the new tab arrangement.
	* @param event. The custom event. Custom data event was created with: ev.detail(index, oldIndex)
   *  index - The tab's index.
   *  oldIndex - The tab's old index.
   */
  onReorder?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Expands or collapses the content section, allowing users to toggle the visibility of its contents for improved usability and a cleaner interface.
   */
  collapse(): void;
  /**
   * Retrieves the label (displayed title) of the Tab located at the specified index within the Tab collection. The index parameter is zero-based, meaning 0 refers to the first Tab.
   * @param {number} index. The index of the tab.
   * @returns {string}
   */
  getTabLabel(index: number): string;
  /**
   * Retrieves and returns the content associated with the Tab located at the specified index within the Tab component. This allows access to the data or elements currently displayed in the selected Tab.
   * @param {number} index. The index of the tab.
   * @returns {HTMLElement}
   */
  getTabContent(index: number): HTMLElement;
  /**
   * Ensures the specified tab is brought into view within its container by automatically scrolling the container so that the entire tab is visible to the user.
   * @param {number} index. The index of the tab to scroll to.
   */
  ensureVisible(index: number): void;
  /**
   * Expands the content section to reveal additional information or elements that are initially hidden, providing users with more detailed content or options within this area.
   */
  expand(): void;
  /**
   * Returns an array containing all TabItem objects that are child elements of the specified element. Each TabItem in the array represents a tab within the tabbed interface, allowing you to programmatically access and manipulate individual tabs.
   * @returns {any}
   */
  getTabs(): any;
  /**
   * Returns the distance, in pixels, between the edge of the tab item container (the smart-tab-item element) and the corresponding edge of the parent smart-tabs element where the tab strip is located. This offset indicates how far the tab item container is positioned from the start of the tab strip within the tabs component, allowing for precise alignment and positioning calculations.
   * @param {number} index. The index of the tab item.
   * @returns {number}
   */
  getOffsetFromEdgeOfElement(index: number): number;
  /**
   * Adds a new tab to the tab navigation interface and creates a corresponding content section. The new tab becomes selectable, allowing users to view and interact with its associated content when it is active.
   * @param {number} index. The index to insert a new tab at.
   * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
   */
  insert(index: number, details: any): void;
  /**
   * Refreshes the Tabs header section to ensure it displays correctly. This is particularly useful when the header contains elements—such as images or dynamic content—that may load after the initial rendering of the Tabs. By calling this function, you can re-render or update the header layout to accommodate any late-loaded or dynamically updated elements, ensuring alignment and visual consistency.
   */
  refreshTabHeader(): void;
  /**
   * Removes the specified tab along with its corresponding content section from the user interface, ensuring that both the tab header and its related content are deleted and no longer accessible to the user.
   * @param {number} index. The index of the tab to remove.
   */
  removeAt(index: number): void;
  /**
   * Programmatically activates the specified tab in a tabbed interface, making its associated content visible while hiding content from other tabs.
   * @param {number} index. The index of the tab to select.
   */
  select(index: number): void;
  /**
   * Updates a specific tab along with its corresponding content section, ensuring that both the tab interface and its related content are synchronized and reflect the latest changes.
   * @param {number} index. The index of the tab to update.
   * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
   * @param {string | HTMLElement} content. The new content of the tab.
   */
  update(index: number, label: string, content: string | HTMLElement): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tabs"): Tabs;
        querySelector(selectors: "smart-tabs"): Tabs | null;
        querySelectorAll(selectors: "smart-tabs"): NodeListOf<Tabs>;
        getElementsByTagName(qualifiedName: "smart-tabs"): HTMLCollectionOf<Tabs>;
        getElementsByName(elementName: "smart-tabs"): NodeListOf<Tabs>;
    }
}

/**Configures or retrieves the display mode of the close button. This property determines how the close button appears or behaves within the user interface, such as being always visible, visible on hover, or hidden. */
export declare type TabsCloseButtonMode = 'default' | 'selected';
/**Specifies or retrieves the behavior of the scroll buttons for the Tabs component. This property is relevant only when the tabLayout is set to 'scroll', allowing navigation through tab items that exceed the visible area. Use this option to control how scroll buttons appear and function when there are more tabs than can be displayed at once. */
export declare type Overflow = 'auto' | 'hidden' | 'scroll';
/**Configures or retrieves the position of the scroll buttons within the component, allowing you to specify where the scroll controls appear (for example, at the start, end, or both ends of the scrollable area). This property enables precise placement of navigation controls for improved user experience. */
export declare type LayoutPosition = 'near' | 'far' | 'both';
/**Specifies or retrieves how the tab strip responds when users interact with the scroll buttons. Determines the scrolling behavior—such as the distance the tab strip moves or whether scrolling is smooth or immediate—when the left or right scroll buttons are clicked. */
export declare type TabsScrollMode = 'paging' | 'continuous';
/**Specifies how users can navigate or switch between different tabs, such as by clicking, keyboard shortcuts, or swipe gestures. This setting defines the interaction method for moving from one tab to another within the tabbed interface. */
export declare type TabSelectionMode = 'click' | 'dblclick' | 'mouseenter' | 'none';
/**Determines how the component handles situations where the element’s width is insufficient to display all tab labels. Offers four configurable behaviors for managing tab overflow, such as scrolling, collapsing, fading, or displaying an overflow menu. */
export declare type TabsTabLayout = 'scroll' | 'dropDown' | 'wrap' | 'shrink';
/**Specifies or retrieves the position of the tab strip within the user interface, determining where the tab strip is displayed (e.g., top, bottom, left, or right) relative to the main content area. */
export declare type TabPosition = 'top' | 'bottom' | 'left' | 'right' | 'hidden';
/**Specifies or retrieves the direction in which the text is displayed within the tabs, such as horizontal or vertical orientation. This property allows you to control whether tab labels are arranged from left to right, top to bottom, or in another supported direction. */
export declare type Orientation = 'horizontal' | 'vertical';
