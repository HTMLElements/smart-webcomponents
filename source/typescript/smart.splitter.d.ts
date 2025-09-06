import  {BaseElement, Animation} from "./smart.element"

export interface SplitterProperties {
  /**
   * Specifies or retrieves the current animation mode. When the property is set to 'none', all animations are disabled, resulting in static display without transition effects. Assigning any other valid value enables the corresponding animation mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies how items are positioned and resized within the Splitter component.Possible values:      end &ndash; All items are resized to fit exactly within the available space of the Splitter. When a new item is inserted, the required space is taken from the adjacent (neighboring) item, adjusting their sizes so that the total size remains constant and nothing overflows.        proportional &ndash; All items expand or contract proportionally to occupy the full size of the Splitter. When a new item is added, the space it needs is proportionally deducted from the existing items, maintaining their relative sizes within the total available space.        overflow &ndash; Items are not resized to fit the Splitter. Instead, each item retains its natural size, even if the total size exceeds the Splitter’s dimensions. In this case, a scrollbar will appear, allowing users to scroll and view all the content that overflows beyond the visible area.  
   * Default value: proportional
   */
  autoFitMode?: SplitterAutoFitMode | string;
  /**
   * Determines whether the element is interactive or inactive. When enabled, users can interact with the element; when disabled, the element is non-interactive and typically appears visually distinct (e.g., grayed out) to indicate its inactive state.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Configures or retrieves the data source for the splitter component. When setting, it specifies the structure and content (such as panels or sections) that will be managed and displayed within the splitter. When getting, it returns the current data source used by the splitter.
   * Default value: null
   */
  dataSource?: any;
  /**
   * A getter method that retrieves and returns an array containing all the current Splitter items. This allows you to access the complete list of items managed by the Splitter component.
   * Default value: 
   */
  items?: any;
  /**
   * When enabled, this setting ensures that all items within the element maintain their original aspect ratios relative to each other whenever the element is resized. This behavior is preserved regardless of whether the size properties of the items are defined in pixels, percentages, or other units. In other words, resizing the overall element will proportionally scale all its child items, keeping their relative dimensions consistent.
   * Default value: false
   */
  keepProportionsOnResize?: boolean;
  /**
   * Sets or retrieves the unlockKey value used to authorize and enable access to the product's features. When setting, this key unlocks the product for use. When getting, it returns the currently assigned unlockKey.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies the language to be used for displaying messages. This property can be set to change the current language or retrieved to identify the active language. It works in conjunction with the messages property, which contains localized message strings for each supported language. Adjusting this property enables seamless switching between different language options in the application’s user interface.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function associated with the localization module, typically used to handle language changes, translate content, or process localization-related events within the application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Defines an object that maps password strength states to their corresponding string values. Each key in the object represents a specific password strength level (such as "weak," "medium," or "strong"), and its value provides the associated descriptive label or message to display to users. This allows for customizable text based on the current password strength state.
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
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "indexOutOfBound": "' method.",
   *     "invalidNode": "' method accepts an object or an array of objects as it's second parameter.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "invalidType": "' must be of type string or number."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or retrieves the orientation of the splitter, determining whether it is displayed vertically (dividing the area into left and right sections) or horizontally (dividing the area into top and bottom sections).
   * Default value: vertical
   */
  orientation?: Orientation | string;
  /**
   * When the element has the 'readonly' attribute, users can view its value but cannot modify, edit, or otherwise change its contents. However, the element may still be focused and its content can be selected and copied by the user. No direct interaction—such as typing, pasting, or deleting—is allowed.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * 'Specifies how the splitter handles resizing when a user drags the splitter bar. The available modes are:'- 'None:' Resizing is disabled; splitter bars cannot be moved.- 'Adjacent (default):' Only the two panels immediately adjacent to the splitter bar are resized when the bar is dragged. Other panels remain unchanged.- 'End:' Dragging the splitter bar affects only the first panel (located at the left or top, depending on splitter orientation) and the last panel. All intermediate panels between these two remain unaffected.- 'Proportional:' All panels located in the direction the splitter bar is dragged (for example, all panels to the right if dragging right, or below if dragging down) are resized proportionally. The new sizes are calculated based on the current size ratios of these panels, ensuring they maintain their proportional widths or heights relative to each other after resizing.'Use this property to control which panels are resized and how space is distributed when users interact with the splitter.'
   * Default value: adjacent
   */
  resizeMode?: SplitterResizeMode | string;
  /**
   * Specifies the increment or decrement value by which the element's size changes during a resize operation. This value controls how much the element grows or shrinks with each resizing step, allowing for precise adjustments.
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * Gets or sets a value that specifies whether the element's alignment should accommodate right-to-left (RTL) languages, such as Arabic or Hebrew. When enabled, the element's content and layout will adjust to support RTL text direction, ensuring proper display for locales that use right-to-left scripts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * When this feature is enabled, the resizing operation updates the layout in real-time as the user drags the splitter, providing immediate visual feedback. By default, live resizing is disabled; instead, a highlighted guide bar appears during the drag operation, showing where the splitter will be positioned once the user releases the mouse button. The actual layout is only updated after the drag is complete.
   * Default value: false
   */
  liveResize?: boolean;
  /**
   * Specifies the theme for the element. The theme determines the overall appearance, including colors, fonts, and styling, to ensure a consistent and visually appealing look.
   * Default value: ""
   */
  theme?: string;
  /**
   * If set to true, the element will be excluded from keyboard navigation and cannot receive focus via keyboard or mouse interactions.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Splitter is a layout component that supports all important features such as resizing, collapsing, and nesting panels.
*/
export interface Splitter extends BaseElement, SplitterProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered when a splitter item is collapsed by the user, either through a UI interaction (such as clicking a collapse button) or programmatically. It allows you to execute custom logic or respond to the change when a particular panel within the splitter component is minimized or hidden.
	* @param event. The custom event.    */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a splitter item is expanded by the user, either through interaction (such as clicking or dragging) or programmatically. It allows developers to execute custom logic in response to the expansion of a specific splitter item within the UI component.
	* @param event. The custom event.    */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user initiates the resizing of a splitter component, such as clicking and dragging the divider to adjust the size of adjacent panels. It marks the start of the resizing interaction, allowing developers to perform actions or apply styles in response to the beginning of the splitter's adjustment process.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered after the user completes resizing the splitter, indicating that the resizing action has finished and the new panel sizes have been set.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Appends a new node to the end of the current list or container, adding it as the last child element. This operation updates the data structure to include the newly added node as the final element in the sequence.
   * @param {Node} node. The node to append
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Collapses the specified splitter panel, minimizing its size and hiding its content within the container or layout.
   * @param {any} item. number indicating the index of the item or an isntance of Smart.SplitterItem
   * @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
   */
  collapse(item: any, far?: boolean): void;
  /**
   * Attempts to expand the splitter item, provided sufficient space is available. The expansion is only performed if there is enough remaining space in the container to accommodate the item's increased size.
   * @param {any} item. number indicating the index of the item or an isntance of Smart.SplitterItem
   */
  expand(item: any): void;
  /**
   * Conceals the splitter bar element from view, preventing users from interacting with or resizing the associated panels.
   * @param {number} splitterBar. A Smart.SplitterBar instance.
   * @returns {number}
   */
  hideBar(splitterBar: number): number;
  /**
   * Inserts a new Splitter component into the specified position within the layout, allowing the user to divide and resize adjacent sections of the interface.
   * @param {number} index. The index at which a new item will be inserted.
   * @param {any} details. An Object or string used as content if the splitter item.
   */
  insert(index: number, details: any): void;
  /**
   * Inserts the specified "smart-splitter-item" node into the DOM immediately before the reference "smart-splitter-item" node, ensuring that the new element appears directly before the reference node within the splitter container. This operation preserves the order of splitter items and updates their layout accordingly.
   * @param {Node} newNode. The  "smart-splitter-item" node to insert.
   * @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Prevents a splitter item from being resized by the user, ensuring that its current size remains fixed and unchangeable during layout adjustments.
   * @param {number} index. The index of a Splitter Bar or it's instance.
   */
  lockItem(index: number): void;
  /**
   * Prevents the splitter bar from being moved by disabling user drag interactions, effectively locking its position and ensuring that adjacent panes cannot be resized.
   * @param {number} index. The index of a Splitter Bar or it's instance.
   */
  lockBar(index: number): void;
  /**
   * Removes a Splitter item from the layout, detaching it from its parent container and updating the interface accordingly. This action permanently deletes the specified Splitter component and any associated layout adjustments.
   * @param {number} index. An item to be removed.
   */
  removeAt(index: number): void;
  /**
   * Clears all items currently contained within the Splitter component, effectively resetting it to an empty state. This operation removes every panel, section, or child element inside the Splitter, leaving no content displayed.
   */
  removeAll(): void;
  /**
   * Removes a child node of type "smart-splitter-item" from its parent element in the DOM, effectively deleting the specified splitter pane and updating the layout accordingly.
   * @param {Node} node. The "smart-splitter-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Reloads and updates the Splitter component, re-rendering its layout and recalculating its size and position to reflect any recent changes to its content, configuration, or container.
   */
  refresh(): void;
  /**
   * Reveals a previously hidden splitter bar, allowing users to resize adjacent panes or sections within the interface.
   * @param {number} splitterBar. An instance of a splitter bar.
   */
  showBar(splitterBar: number): void;
  /**
   * Enables access to a splitter item that was previously locked, allowing users to interact with or modify the item as intended. This action removes any restrictions, making the splitter fully functional within the application.
   * @param {number} item. The index of a Splitter Item or it's instance.
   */
  unlockItem(item: number): void;
  /**
   * Enables user interaction with a previously disabled or locked splitter bar, allowing users to adjust the size of adjacent panes or panels by dragging the splitter.
   * @param {number} item. The index of a Splitter Bar or it's instance.
   */
  unlockBar(item: number): void;
  /**
   * Updates the configuration of a specific Splitter item within a Splitter component, allowing changes to its properties such as size, orientation, minimum and maximum limits, or other customizable options. This enables dynamic adjustment of the Splitter item's behavior and appearance within the parent Splitter layout.
   * @param {any} item. The index of a Smart.SplitterItem or it's instance.
   * @param {any} settings. An object containing the properties of a Smart.SplitterItem.
   */
  update(item: any, settings: any): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-splitter"): Splitter;
        querySelector(selectors: "smart-splitter"): Splitter | null;
        querySelectorAll(selectors: "smart-splitter"): NodeListOf<Splitter>;
        getElementsByTagName(qualifiedName: "smart-splitter"): HTMLCollectionOf<Splitter>;
        getElementsByName(elementName: "smart-splitter"): NodeListOf<Splitter>;
    }
}

/**Specifies how items are positioned and resized within the Splitter component.<br/><br/>Possible values:<br/><br/>  <br/>    end &ndash; All items are resized to fit exactly within the available space of the Splitter. When a new item is inserted, the required space is taken from the adjacent (neighboring) item, adjusting their sizes so that the total size remains constant and nothing overflows.<br/>  
<br/>  <br/>    proportional &ndash; All items expand or contract proportionally to occupy the full size of the Splitter. When a new item is added, the space it needs is proportionally deducted from the existing items, maintaining their relative sizes within the total available space.<br/>  
<br/>  <br/>    overflow &ndash; Items are not resized to fit the Splitter. Instead, each item retains its natural size, even if the total size exceeds the Splitter’s dimensions. In this case, a scrollbar will appear, allowing users to scroll and view all the content that overflows beyond the visible area.<br/>  
<br/> */
export declare type SplitterAutoFitMode = 'end' | 'proportional' | 'overflow';
/**Sets or retrieves the orientation of the splitter, determining whether it is displayed vertically (dividing the area into left and right sections) or horizontally (dividing the area into top and bottom sections). */
export declare type Orientation = 'horizontal' | 'vertical';
/**'Specifies how the splitter handles resizing when a user drags the splitter bar. The available modes are:'<br/><br/>- 'None:' Resizing is disabled; splitter bars cannot be moved.<br/>- 'Adjacent (default):' Only the two panels immediately adjacent to the splitter bar are resized when the bar is dragged. Other panels remain unchanged.<br/>- 'End:' Dragging the splitter bar affects only the first panel (located at the left or top, depending on splitter orientation) and the last panel. All intermediate panels between these two remain unaffected.<br/>- 'Proportional:' All panels located in the direction the splitter bar is dragged (for example, all panels to the right if dragging right, or below if dragging down) are resized proportionally. The new sizes are calculated based on the current size ratios of these panels, ensuring they maintain their proportional widths or heights relative to each other after resizing.<br/><br/>'Use this property to control which panels are resized and how space is distributed when users interact with the splitter.' */
export declare type SplitterResizeMode = 'none' | 'adjacent' | 'end' | 'proportional';
export interface SplitterBarProperties {
}
/**
 SplitterBar splits two Split panels in a Splitter.
*/
export interface SplitterBar extends BaseElement, SplitterBarProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Conceals the splitter bar element from view, preventing users from seeing or interacting with it within the user interface.
   */
  hide(): void;
  /**
   * Reveals a previously hidden splitter bar, allowing users to resize or adjust the layout between adjacent panels or sections within the user interface.
   */
  show(): void;
  /**
   * Prevents the splitter bar from being moved or adjusted by the user, ensuring it remains fixed in its current position.
   */
  lock(): void;
  /**
   * Enables user interaction with the splitter bar, allowing users to drag and resize adjacent panels or sections within the interface.
   */
  unlock(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-splitter-bar"): SplitterBar;
        querySelector(selectors: "smart-splitter-bar"): SplitterBar | null;
        querySelectorAll(selectors: "smart-splitter-bar"): NodeListOf<SplitterBar>;
        getElementsByTagName(qualifiedName: "smart-splitter-bar"): HTMLCollectionOf<SplitterBar>;
        getElementsByName(elementName: "smart-splitter-bar"): NodeListOf<SplitterBar>;
    }
}

export interface SplitterItemProperties {
  /**
   * Determines whether the element is interactive or not. When enabled, users can interact with the element; when disabled, the element is non-interactive and typically appears visually dimmed or grayed out.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Indicates whether the item is currently collapsed ('true') or expanded ('false'). This property controls the visibility of the item's content in collapsible interfaces or components.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * Specifies whether the item is collapsible. If set to true, the item can be expanded or collapsed by the user. If set to false, the item remains permanently expanded and cannot be collapsed.
   * Default value: false
   */
  collapsible?: boolean;
  /**
   * Specifies the elements or components that are displayed within each section (item) of the splitter layout. This property defines what content will appear in each resizable panel managed by the splitter.
   * Default value: 
   */
  content?: any;
  /**
   * Specifies whether the item can be resized by the user. If set to true, resizing is enabled; if set to false, the item's size remains fixed.
   * Default value: false
   */
  locked?: boolean;
  /**
   * Specifies the maximum allowable size for the item. Values exceeding this limit will not be accepted or processed.
   * Default value: ""
   */
  max?: string;
  /**
   * Specifies the minimum allowed size (in the relevant unit) for the item, preventing it from shrinking below this value during layout or resizing.
   * Default value: ""
   */
  min?: string;
  /**
   * Specifies the dimensions or overall measurements of the item, such as its width, height, or depth. This property allows you to control how large or small the item appears within its container or layout.
   * Default value: ""
   */
  size?: string;
}
/**
 Splitter Item is a Panel in a Splitter component.
*/
export interface SplitterItem extends BaseElement, SplitterItemProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Collapses the item, hiding its content or child elements from view. This action reduces the item's visible footprint, typically as part of an expandable/collapsible user interface component such as an accordion or dropdown.
   * @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
   */
  collapse(far: string): void;
  /**
   * Expands the item to display its hidden content or details when it is currently in a collapsed (hidden) state.
   */
  expand(): void;
  /**
   * Prevents the item from being resized, ensuring its dimensions remain fixed and cannot be altered by the user or through code.
   */
  lock(): void;
  /**
   * Unlocks access to an item that was previously restricted or unavailable, allowing full interaction or use of its features.
   */
  unlock(): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-splitter-item"): SplitterItem;
        querySelector(selectors: "smart-splitter-item"): SplitterItem | null;
        querySelectorAll(selectors: "smart-splitter-item"): NodeListOf<SplitterItem>;
        getElementsByTagName(qualifiedName: "smart-splitter-item"): HTMLCollectionOf<SplitterItem>;
        getElementsByName(elementName: "smart-splitter-item"): NodeListOf<SplitterItem>;
    }
}

