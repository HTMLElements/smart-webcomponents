import  {BaseElement, Animation} from "./smart.element"

export interface LayoutProperties {
  /**
   * Sets or retrieves the current animation mode for the element. When this property is set to 'none', all animations are disabled and no animation effects will be applied. Use this property to enable, disable, or specify different animation behaviors.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the list of selectable options that will appear within the context menu, allowing users to interact with or perform actions based on their selection.
   * Default value: delete
   */
  contextMenuDataSource?: any;
  /**
   * Determines whether the element is interactive or inactive. When enabled, the element can receive user input and respond to actions. When disabled, the element becomes non-interactive and does not respond to user input or events.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the data source associated with the Layout component. This property allows you to define the input data that the Layout will use to render its content, or to access the current data source being used.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Sets or retrieves the unlockKey, a unique code or token required to grant access to and activate the product’s full functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property is typically used together with the messages property to display localized content based on the selected language. Setting this value changes which language messages are used, while getting it returns the currently active language code (e.g., "en", "fr", "es").
   * Default value: "en"
   */
  locale?: string;
  /**
   * Defines an object containing string values that represent messages or labels corresponding to various password strength states (e.g., "weak", "medium", "strong"). This is typically used to provide user feedback on password strength during password creation or validation processes.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid '!",
   *     "propertyInvalidValueType": "Invalid '!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": ".",
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "invalidNode": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "delete": "Delete",
   *     "noId": ": requires an id in order to save/load a state."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or retrieves the main orientation of the Layout component. This orientation determines how child Splitters within the Layout are arranged—either horizontally or vertically—by default. All Splitters inside the Layout will inherit this orientation unless a specific orientation is defined for them individually in the dataSource configuration.
   * Default value: vertical
   */
  orientation?: Orientation | string;
  /**
   * If the element is set to "readonly", users cannot modify its value, but they can still highlight and copy its contents. However, they cannot type, edit, or otherwise change the value within the field. The field remains focusable and selectable, but direct user input is disabled.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Indicates whether the splitting process occurs in real-time (live) or is performed as a pre-processed operation before use.
   * Default value: false
   */
  allowLiveSplit?: boolean;
  /**
   * Sets or retrieves a value that determines whether the element's layout direction is configured for right-to-left (RTL) languages, such as Arabic or Hebrew, enabling proper alignment and rendering for locales that use RTL text.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies which item is currently selected from a list or collection. This property typically holds the identifier, index, or value of the selected item, allowing the application to reference or display the chosen option.
   * Default value: null
   */
  selectedIndex?: any;
  /**
   * Specifies the theme to be applied. The theme controls the overall appearance and style of the element, including colors, fonts, and visual layout, ensuring a consistent look and feel across the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it impossible for users to select the element using tab navigation or other focus-related interactions.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Layout splits your content into resizable sections.
*/
export interface Layout extends BaseElement, LayoutProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered immediately after the user has finished resizing an element or window. It signals that the resizing action is complete, allowing you to perform any necessary updates or actions in response to the new size.
	* @param event. The custom event.    */
  onResize: ((ev: Event) => any) | null;
  /**
   * This event is triggered whenever there is a change in the Layout's state. Examples include actions such as adding a new item, removing an existing item, or any other modification that alters the structure or arrangement of the Layout.
	* @param event. The custom event. Custom data event was created with: ev.detail(item, type)
   *  item - The Splitter item that was the target of a change.
   *  type - A description of the operation that has cause the change.
   */
  onStateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user changes the current selection, such as by highlighting different text or choosing a new item from a list. It occurs immediately after the selection has been modified, allowing you to respond to changes in user input or interface focus.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldSelectedIndex, selectedIndex)
   *  oldSelectedIndex - The Splitter item that was previously selected.
   *  selectedIndex - The Splitter item that is currently selected.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered right before the context menu is closed. Within the event handler, you can call event.preventDefault() to cancel the closing operation, allowing you to execute custom logic or prevent the menu from closing based on certain conditions.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the context menu is closed by the user, either by selecting an option or clicking outside the menu.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is fired just before the context menu appears, typically when a user right-clicks on an element. By calling event.preventDefault() within the event handler, you can prevent the default context menu from opening, allowing you to implement a custom context menu or handle the action in a different way.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the context menu (typically accessed by right-clicking or a similar user action) is opened by the user.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user selects and clicks an option from the context menu. It occurs after the user has opened the context menu—typically via right-click or a long press—and chosen a specific menu item. The event provides details about the selected option, enabling you to handle custom actions or respond dynamically based on the user's selection.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, label, value)
   *  target - The Splitter item that was the target of the context menu opening.
   *  item - The Context menu item that was clicked.
   *  label - The label of the context menu that was clicked.
   *  value - The value of the context menu that was clicked.
   */
  onMenuItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Returns the Layout item located at the specified index within the collection. The index is passed as a parameter, and the function retrieves the corresponding Layout item from the list or array. This allows you to access a particular Layout item by its position in the sequence.
   * @param {number | string} index. The index of an item.
   */
  getItem(index: number | string): void;
  /**
   * Automatically updates and redraws the layout to reflect any recent changes, ensuring all components are properly arranged and displayed according to the latest data or configuration.
   */
  refresh(): void;
  /**
   * Inserts a new item element into the Layout component, positioning it within the existing structure according to the component's layout configuration. This action updates the Layout to include the new item as part of its content, ensuring proper rendering and alignment with other elements.
   * @param {any} type. The index of an item to be removed or an instance of Smart.SplitterItem.
   * @param {string | undefined} position?. A string that represents the position where the new item will be created.
   */
  createLayoutItem(type: any, position?: string | undefined): void;
  /**
   * Transfers all child elements or nodes from a specified source item to a designated target item, effectively moving the entire group of children so they become nested under the target item instead of the source.
   * @param {any} oldItem. The source item that will have it's content removed.
   * @param {any} newItem. The host item that will have it's content replaced.
   */
  moveChildren(oldItem: any, newItem: any): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-layout"): Layout;
        querySelector(selectors: "smart-layout"): Layout | null;
        querySelectorAll(selectors: "smart-layout"): NodeListOf<Layout>;
        getElementsByTagName(qualifiedName: "smart-layout"): HTMLCollectionOf<Layout>;
        getElementsByName(elementName: "smart-layout"): NodeListOf<Layout>;
    }
}

/**Sets or retrieves the main orientation of the Layout component. This orientation determines how child Splitters within the Layout are arranged—either horizontally or vertically—by default. All Splitters inside the Layout will inherit this orientation unless a specific orientation is defined for them individually in the <b>dataSource</b> configuration. */
export declare type Orientation = 'horizontal' | 'vertical';
export interface LayoutGroupProperties {
  /**
   * Determines whether the element is interactive or not. When enabled, the element can be interacted with by users (e.g., clicked, edited, or focused). When disabled, the element becomes non-interactive and typically appears visually subdued, preventing any user actions.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the modifier properties applied to the Layout item, allowing you to customize its appearance and behavior (such as alignment, padding, margin, or transformations). Use this property to define or access configuration options that modify how the Layout item is displayed or interacts within its container.
   * Default value: resize,drag,close
   */
  modifiers?: any;
  /**
   * Specifies the minimum allowable size for the item, ensuring that it cannot be resized smaller than this value. This property helps maintain layout integrity by preventing the item from shrinking below the defined threshold.
   * Default value: 50
   */
  min?: number;
  /**
   * Specifies the text or name displayed as the label for the item, which is typically used to identify or describe the item in user interfaces.
   * Default value: "Group"
   */
  label?: string;
  /**
   * Specifies the alignment or direction in which the group’s elements are arranged (e.g., horizontal, vertical, or custom orientation). This property controls how child components are positioned within the group.
   * Default value: vertical
   */
  orientation?: LayoutGroupOrientation | string;
  /**
   * Specifies the overall dimensions of the item, such as its width, height, or volume, which can be used for layout, display, or calculation purposes.
   * Default value: null
   */
  size?: any;
  /**
   * If set to true, the element will be excluded from the tab order and cannot receive keyboard focus. This means users will not be able to focus on the element using the keyboard or other assistive technologies.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 LayoutGroup represents a group of layout items inside the Layout.
*/
export interface LayoutGroup extends BaseElement, LayoutGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-layout-group"): LayoutGroup;
        querySelector(selectors: "smart-layout-group"): LayoutGroup | null;
        querySelectorAll(selectors: "smart-layout-group"): NodeListOf<LayoutGroup>;
        getElementsByTagName(qualifiedName: "smart-layout-group"): HTMLCollectionOf<LayoutGroup>;
        getElementsByName(elementName: "smart-layout-group"): NodeListOf<LayoutGroup>;
    }
}

/**Specifies the alignment or direction in which the group’s elements are arranged (e.g., horizontal, vertical, or custom orientation). This property controls how child components are positioned within the group. */
export declare type LayoutGroupOrientation = 'horizontal' | 'vertical';
export interface LayoutItemProperties {
  /**
   * Specifies whether the element is active and interactive (enabled) or inactive and non-interactive (disabled). When disabled, users cannot interact with or modify the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the modifiers applied to the Layout item, allowing you to customize its appearance or behavior, such as spacing, alignment, or other layout-related properties.
   * Default value: resize,drag,close
   */
  modifiers?: any;
  /**
   * Specifies the minimum allowed size for the item. This value sets the smallest dimensions (such as width or height) that the item can be resized or displayed at within its container.
   * Default value: 50
   */
  min?: number;
  /**
   * Specifies the text or caption displayed as the item's label. This value is used to identify or describe the item in the user interface.
   * Default value: "Item"
   */
  label?: string;
  /**
   * Specifies the dimensions of the item, such as width, height, or overall scale, to control how large or small the item appears within the interface.
   * Default value: null
   */
  size?: any;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, making it inaccessible through keyboard navigation such as the Tab key.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Layout item represents a single content section inside the Layout.
*/
export interface LayoutItem extends BaseElement, LayoutItemProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-layout-item"): LayoutItem;
        querySelector(selectors: "smart-layout-item"): LayoutItem | null;
        querySelectorAll(selectors: "smart-layout-item"): NodeListOf<LayoutItem>;
        getElementsByTagName(qualifiedName: "smart-layout-item"): HTMLCollectionOf<LayoutItem>;
        getElementsByName(elementName: "smart-layout-item"): NodeListOf<LayoutItem>;
    }
}

export interface TabLayoutGroupProperties {
  /**
   * Specifies whether the element is interactive and can be used by the user. When enabled, the element responds to user actions; when disabled, the element is inactive and cannot be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Gets the current modifiers applied to the Layout item, or sets new modifiers to customize its appearance and behavior. Modifiers may include properties such as alignment, spacing, padding, or visibility.
   * Default value: resize,drag,close
   */
  modifiers?: any;
  /**
   * Specifies the minimum allowable size for the item. This value ensures that the item's dimensions do not shrink below the defined threshold, helping maintain layout consistency and usability.
   * Default value: 50
   */
  min?: number;
  /**
   * Specifies the text that will be displayed as the item's label, providing a descriptive name or title for the user interface element.
   * Default value: "TabGroup"
   */
  label?: string;
  /**
   * Specifies the orientation (horizontal or vertical) of the group, defining how its child elements are arranged within the component. This setting affects the layout and flow direction of the grouped items.
   * Default value: vertical
   */
  orientation?: TabLayoutGroupOrientation | string;
  /**
   * Specifies the alignment or placement of the group of tab items within the tab container. This determines whether the tabs are positioned, for example, at the start, center, end, or distributed evenly along the container.
   * Default value: top
   */
  position?: TabLayoutGroupPosition | string;
  /**
   * Specifies the dimensions or overall scale of the item, such as its width, height, or length. This property defines how large or small the item appears or is rendered within the user interface or layout.
   * Default value: null
   */
  size?: any;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, meaning it cannot be selected or navigated to using the Tab key or other keyboard navigation methods.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 TabLayoutGroup represents a group of TabLayoutItems each with it's own Tab label.
*/
export interface TabLayoutGroup extends BaseElement, TabLayoutGroupProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tab-layout-group"): TabLayoutGroup;
        querySelector(selectors: "smart-tab-layout-group"): TabLayoutGroup | null;
        querySelectorAll(selectors: "smart-tab-layout-group"): NodeListOf<TabLayoutGroup>;
        getElementsByTagName(qualifiedName: "smart-tab-layout-group"): HTMLCollectionOf<TabLayoutGroup>;
        getElementsByName(elementName: "smart-tab-layout-group"): NodeListOf<TabLayoutGroup>;
    }
}

/**Specifies the orientation (horizontal or vertical) of the group, defining how its child elements are arranged within the component. This setting affects the layout and flow direction of the grouped items. */
export declare type TabLayoutGroupOrientation = 'horizontal' | 'vertical';
/**Specifies the alignment or placement of the group of tab items within the tab container. This determines whether the tabs are positioned, for example, at the start, center, end, or distributed evenly along the container. */
export declare type TabLayoutGroupPosition = 'top' | 'bottom' | 'left' | 'right';
export interface TabLayoutItemProperties {
  /**
   * Determines whether the element is interactive or not. When enabled, users can interact with the element; when disabled, the element becomes inactive and unresponsive to user actions.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Gets or sets the modifier properties (such as alignment, padding, spacing, or styling options) applied to the Layout item, allowing you to customize its appearance and behavior.
   * Default value: resize,drag,close
   */
  modifiers?: any;
  /**
   * Specifies the minimum allowable size for the item, ensuring that it cannot be resized or rendered smaller than this value.
   * Default value: 50
   */
  min?: number;
  /**
   * Specifies the text or name displayed as the label for the item. This value is shown to users as the item's identifier or title in user interfaces.
   * Default value: "TabItem"
   */
  label?: string;
  /**
   * Specifies the alignment and direction in which the group’s elements are arranged, such as horizontal or vertical orientation.
   * Default value: vertical
   */
  orientation?: TabLayoutItemOrientation | string;
  /**
   * Specifies the overall dimensions of the item, such as its width, height, or length, to define how much space the item occupies.
   * Default value: null
   */
  size?: any;
  /**
   * When set to true, this property prevents the element from receiving keyboard focus, meaning users will not be able to access the element using the Tab key or other keyboard navigation methods.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 TabLayoutItem represents a Layout Item that has a Tab label and is applicable to a TabLayoutGroup.
*/
export interface TabLayoutItem extends BaseElement, TabLayoutItemProperties {

  /* Get a member by its name */
  [name: string]: any;
}

declare global {
    interface Document {
        createElement(tagName: "smart-tab-layout-item"): TabLayoutItem;
        querySelector(selectors: "smart-tab-layout-item"): TabLayoutItem | null;
        querySelectorAll(selectors: "smart-tab-layout-item"): NodeListOf<TabLayoutItem>;
        getElementsByTagName(qualifiedName: "smart-tab-layout-item"): HTMLCollectionOf<TabLayoutItem>;
        getElementsByName(elementName: "smart-tab-layout-item"): NodeListOf<TabLayoutItem>;
    }
}

/**Specifies the alignment and direction in which the group’s elements are arranged, such as horizontal or vertical orientation. */
export declare type TabLayoutItemOrientation = 'horizontal' | 'vertical';
