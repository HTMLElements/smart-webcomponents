import  {BaseElement, Animation} from "./smart.element"

export interface DockingLayoutProperties {
  /**
   * Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled and will not play. For other supported values, animations are enabled and behave according to the specified mode. Use this property to control whether or how animations are rendered within the component.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * A getter method that returns an array containing all DockingLayout items that are currently set to auto-hide within the specified element. These items are not visible in the main layout but are accessible through auto-hide panels or tabs.
   * Default value: 
   */
  autoHideItems?: any;
  /**
   * Controls whether the automatic loading of a saved layout state is enabled or disabled. Note: For automatic loading to function, a layout state must have been previously saved; if no saved state exists, loading cannot occur.
   * Default value: false
   */
  autoLoadState?: boolean;
  /**
   * Controls whether the automatic saving and restoring of the element’s state is enabled.Note: To successfully save and restore the state, the element must have a unique id attribute assigned.
   * Default value: false
   */
  autoSaveState?: boolean;
  /**
   * Controls whether the element is active or inactive. When enabled, users can interact with the element; when disabled, the element is rendered non-interactive and may appear visually distinct to indicate its inactive state.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * If set to false, this option disables the ability for users to reposition DockingLayout items using drag-and-drop in the UI. When disabled, items can only be moved or rearranged programmatically using the provided API methods; manual dragging by end-users will not be possible.
   * Default value: true
   */
  draggable: boolean;
  /**
   * When set to false, this option disables item floating within the DockingLayout. If a window is dragged in an attempt to float it, the window will automatically return to its original docked position, rather than being allowed to float outside the layout. Note that any LayoutPanel items which were already floating before this setting was applied will remain unaffected and will not be forced back into the docking structure.
   * Default value: true
   */
  floatable?: boolean;
  /**
   * Conceals all splitter bars within the specified element, preventing them from being visible or interactable by the user.
   * Default value: false
   */
  hideSplitterBars?: boolean;
  /**
   * A getter that retrieves an array containing all DockingLayout items currently docked within this element. The returned array includes each item that has been added to the DockingLayout as a docked component, allowing you to easily access and manipulate the docked items.
   * Default value: 
   */
  items?: any;
  /**
   * A getter method that retrieves and returns an array containing all DockingLayout items that have been closed by the user. Each item in the array represents a closed panel or component within the DockingLayout, allowing you to access and potentially restore their states or perform further operations on them.
   * Default value: 
   */
  closedItems?: any;
  /**
   * Defines the Element Structure'This property specifies the overall structure and hierarchy of the element. It accepts an array of objects, where each object defines a specific item within the element—along with its settings, type, and relationship to other items. The structure enables you to organize complex layouts such as split containers, tabbed panels, and tab items.'Item Object Types'Every object in the array must include a 'type' attribute, which determines its behavior and role within the layout. The following three types of objects are supported:---### 1. 'LayoutGroup'Represents a splitter or a group of layout panels. Use this type to create containers that organize multiple DockingLayout items (such as panels) in either horizontal or vertical arrangements.'Properties:'- 'type': '"LayoutGroup"' (required)- 'orientation': 'string' – Specifies the orientation of the splitter, either ''horizontal'' or ''vertical''.- 'size': 'string | number' – Sets the size of the splitter group.- 'items': 'Array' – An array of 'LayoutPanel' objects to be contained within this group.- 'resizeMode': 'string' – Specifies the resizing behavior. Valid values: ''none'', ''adjacent'', ''end'', ''proportional''.- 'resizeStep': 'number' – Determines the increment step used when resizing by splitter.- 'liveResize': 'boolean' – If true, resizing happens live as the splitter is dragged.---### 2. 'LayoutPanel'Represents a tabbed container (TabsWindow) within the DockingLayout. Each 'LayoutPanel' can hold one or more 'LayoutPanelItem' objects (tab items).'Properties:'- 'type': '"LayoutPanel"' (required)- 'id': 'string' – Unique identifier for the LayoutPanel.- 'autoHide': 'boolean' – If true, enables auto-hide for the panel.- 'autoHidePosition': 'string' – If 'autoHide' is enabled, specifies the hide position: ''top'', ''bottom'', ''left'', or ''right''.- 'dropPosition': 'string' – Determines where new items can be dropped when dragged. Options include: ''top'', ''bottom'', ''left'', ''right'', ''center'', ''header'', ''layout-top'', ''layout-bottom'', ''layout-left'', ''layout-right''. Positions with the 'layout-' prefix specifically refer to LayoutPanelItems within the panel.- 'label': 'string' – The visible label of the panel window.- 'tabPosition': 'string' – Controls the position of the tab labels within the panel.- 'layout': 'string | object' – Assigns the owning DockingLayout. Accepts either the string ID or a reference to the DockingLayout instance.- 'headerButtons': 'Array' – Defines which buttons are visible in the panel header. Options include '[]', or any combination of ''close'' and ''autoHide''.- 'tabCloseButtons': 'boolean' – Enables or disables a close button on each tab label within the panel.- 'tabOverflow': 'string' – Specifies how tab label overflow is handled (mirrors the jqxTabs 'overflow' property).- 'selectionMode': 'string' – Sets the tab selection mode (mirrors the jqxTabs 'selectionMode').- 'tabResize': 'boolean' – Allows resizing of tab labels (mirrors the jqxTabs 'resize' property).- 'locked': 'boolean' – Locks the panel size, preventing resizing.- 'max': 'number' – Sets the maximum allowed size for the panel.- 'min': 'number' – Sets the minimum allowed size for the panel.- 'size': 'string | number' – Defines the current size of the layout panel.- 'items': 'Array' – An array where each object defines a tab item in the panel.---### 3. 'LayoutPanelItem'Represents a single tab within a LayoutPanel (also known as a TabItem).'Properties:'- 'type': '"LayoutPanelItem"' (required)- 'id': 'string' – Unique identifier for this tab.- 'label': 'string' – The text label shown on the tab.- 'content': 'any' – The actual content of the tab. Can be any supported node, data, or HTML.- 'selected': 'boolean' – Indicates if this tab should be selected by default. By default, the first item is selected automatically.- 'draggable': 'boolean' – If false, disables drag-and-drop for the tab item.---'Summary'Use this property to configure complex, nested layouts comprising splitters (LayoutGroup), tabbed panels (LayoutPanel), and individual tab items (LayoutPanelItem). Each configuration object must specify a 'type', and each type includes a distinct set of properties to control behavior, appearance, and interaction within the layout hierarchy.
   * Default value: 
   */
  layout?: any;
  /**
   * When this option is enabled, resizing occurs in real time as the user drags the splitter, allowing them to see the panels adjust immediately. By default, this feature is disabled; instead, a highlighted guide or outline appears during the drag action, and the actual panels are resized only after the user releases the mouse button.
   * Default value: false
   */
  liveResize?: boolean;
  /**
   * Gets or sets the 'unlockKey', a unique code required to activate and access the full features of the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting. This property determines which set of localized messages from the messages property should be used or displayed. Assigning a language code (e.g., 'en' for English, 'fr' for French) allows the component to present its interface and messages in the corresponding language.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function used within the localization module, typically invoked to handle language changes, update localized content, or process localization-specific events.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Manages an object containing all the text strings displayed by the widget, allowing these strings to be easily customized for different languages. This property works together with the locale property to support localization and internationalization, ensuring that users see the appropriate translations based on their selected language. When set, it updates the widget’s UI with the provided localized strings; when accessed, it returns the current set of localization strings in use.
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
   *     "invalidNode": "' method accepts an instance of JQX.TabsWindow",
   *     "invalidNodeRemove": "' method accepts an instance of JQX.TabsWindow that is a child of the DockingLayout.",
   *     "invalidNodeType": "' requires a \"jqx-tabs-window\" element to be passed as an argument.",
   *     "invalidTargetNode": "' requires an index of an item that is not hidden/closed. Only visible items that are part of the Layout are valid.",
   *     "invalidIndex": "' method accepts an index of type number.",
   *     "noId": "jqxDockingLayout requires an id in order to save/load a state."
   *   }
   * }
   */
  messages?: any;
  /**
   * When the element has the "readonly" attribute, users can view its content but cannot modify or interact with it. However, the element’s value can still be copied or selected, and it may receive focus via keyboard navigation, but any attempt to change its value will not be permitted.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets or sets a value that specifies whether the element's alignment supports right-to-left (RTL) languages, adjusting the text and layout direction for users of locales such as Arabic or Hebrew. This ensures that the element properly accommodates languages that are read and displayed from right to left.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the incremental value by which the size is increased or decreased during resizing operations. This determines how much the element's dimensions change with each resize step.
   * Default value: 5
   */
  resizeStep?: number;
  /**
   * Specifies the snap mode for drag-and-drop operations within the layout. There are two available modes:      simple – Enables the user to drag and drop a single tab item either within the layout or outside of it. When dragging begins, a semi-transparent highlighter appears to clearly indicate all the valid drop zones for the tab. The user must drop the dragged tab inside one of these highlighted zones to complete the operation.        advanced – Allows the dragging and dropping of an entire TabsWindow—containing all its tab items—or an individual tab. This mode adopts a Visual Studio-style visual feedback system: as an item is dragged, an overlay appears showing various possible drop locations, represented as icons. The user must drop the item directly onto one of these icons within the feedback overlay to position it in the desired location.  The highlighter or feedback overlay automatically appears as soon as a drag operation is initiated, visually guiding the user to all valid drop targets and enhancing the drag-and-drop experience.
   * Default value: advanced
   */
  snapMode?: DockingLayoutSnapMode | string;
  /**
   * Specifies the theme to be applied to the element. The selected theme controls the overall visual appearance—including colors, fonts, and styles—ensuring a consistent look and feel that matches the application's design guidelines.
   * Default value: ""
   */
  theme?: string;
  /**
   * Provides a getter that returns an array containing all DockingLayout items that have been undocked. Undocked items are no longer part of the layout’s internal structure, meaning they have been removed from the main docking arrangement. However, these items remain available and can be reinserted into the layout by dragging and dropping them back in. This allows for flexible user interactions, such as temporarily removing panels and restoring them as needed.
   * Default value: 
   */
  undockedItems?: any;
  /**
   * If set to true, the element will be excluded from the tab order and cannot receive focus via keyboard navigation or mouse interaction.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 DockingLayout enables the creation of complex layouts consisting of panels that can be floated, docked, nested, resized, pinned.
*/
export interface DockingLayout extends BaseElement, DockingLayoutProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is fired whenever a different tab is selected by the user, indicating a change in the active tab.  <br/><strong>Note:</strong> The "change" event might also be emitted by other JQX custom elements that are embedded within the tab items, not just by the tab selection itself. If you are handling this event, ensure that your code appropriately distinguishes between changes to the tab selection and changes triggered by nested custom elements.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever a Tab item or an entire Tabs Window (DockingLayout item) is closed by the user. It allows you to execute custom logic in response to the closing of individual tabs or when an entire collection of tabs (Tabs Window) is closed within the docking layout.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is fired just before a Tab item or Tabs Window is about to be closed. Within the event handler, you have the option to prevent the closing action by calling event.preventDefault(). This allows you to intercept the close operation—for example, to display a confirmation dialog or to perform cleanup tasks—before the Tab or Window is actually closed. If event.preventDefault() is not called, the Tab or Window will close as normal.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever an item's position within the Layout or its size has changed. It signifies that the item's state has been updated, allowing you to respond to layout or dimension adjustments in your application. Use this event to handle dynamic UI updates or to perform actions that depend on an item's current position or size.
	* @param event. The custom event.    */
  onStateChange?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered at the moment a user initiates the resizing action on an item, indicating the start of the resize operation.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user completes resizing an item, indicating that the resizing action has ended and the item's new dimensions have been set.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Creates a "smart-tabs-window" node as a child of the layout, configured to be auto-hidden by positioning it at the bottom of the container. This setup places the tab window along the bottom edge of the layout, where its content remains concealed by default. The content only becomes visible when the user clicks or selects one of the tab's labels, providing an unobtrusive way to access additional information or tools within the interface.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideBottom(node: HTMLElement | number | string): void;
  /**
   * Creates a "smart-tabs-window" node as a child element within the Layout, configuring it to be auto-hidden and docked to the left side of the layout. This means the tabs window will appear collapsed along the left edge of the application interface, keeping its content hidden by default. The content inside the "smart-tabs-window" will only be displayed when the user clicks or selects one of its tab labels, providing a space-saving and user-friendly navigation option.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideLeft(node: HTMLElement | number | string): void;
  /**
   * Creates a "smart-tabs-window" node as a child of the Layout and configures it to be auto-hidden by docking it to the right side of the layout. With this setting, the tabbed window will appear collapsed along the right edge of the layout. Its contents will remain hidden until the user clicks or hovers over one of its tab labels, causing the window to slide out and reveal its content. This behavior helps conserve space in the layout while still providing quick access to the window's features when needed.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideRight(node: HTMLElement | number | string): void;
  /**
   * Creates a "smart-tabs-window" node as a child of the Layout, configured to be auto-hidden and positioned at the top area of the layout. This setting causes the tabs window to appear as a hidden panel or tab strip along the top edge of the layout. The content of the panel remains concealed until the user selects one of its tab labels, at which point the associated content is displayed. This behavior is commonly used to maximize workspace while allowing users to quickly access tools or information as needed.
   * @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
   */
  autoHideTop(node: HTMLElement | number | string): void;
  /**
   * Removes all previously stored DockingLayout state information from localStorage, effectively resetting any cached layouts or user customizations and restoring the layout to its default configuration.
   */
  clearState(): void;
  /**
   * This method restores an auto-hidden item to its default (docked) state and allows you to re-insert it at a specified position within the layout. Additionally, you can use this method to insert new items directly into the DockingLayout.  <br/><strong>Note:</strong> All items inserted with this method become top-level elements in the DockingLayout hierarchy.
   * @param {string | number | Node} node. An autohidden "smart-tabs-window" item instance or a new "smart-tabs-window" instance.
   * @returns {Node}
   */
  dock(node: string | number | Node): Node;
  /**
   * Returns a layout item from the docking layout based on its Id.
   * @param {HTMLElement | number | string} id. The id of the item
   * @returns {any}
   */
  getItem(id: HTMLElement | number | string): any;
  /**
   * Inserts a new TabsWindow into the DockingLayout at the specified position. The position is determined by the index provided as the first argument, and the new TabsWindow will be placed immediately before the existing item at that index. The second argument can be either a TabsWindow instance or a plain object representing the TabsWindow's configuration; if an object is provided, a new TabsWindow instance will be created from it. This method ensures that the new TabsWindow is integrated seamlessly into the DockingLayout's existing structure.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertBeforeItem(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout at a position immediately following the target item, as specified by the index provided as the first argument. The new TabsWindow can be created either as a blank instance or from an object supplied as the second argument to the method. This allows for flexible insertion of TabsWindows—either by reusing existing configuration objects or by creating new ones—while precisely controlling their placement within the layout."
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertAfterItem(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout. This can be done by either creating a new TabsWindow instance or by using an existing object provided as the second argument. The new TabsWindow is added by splitting the target item—identified by the index supplied as the first argument—horizontally into two sections. The new TabsWindow is positioned to the immediate left of the target item within the layout.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoLeft(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout, or creates a TabsWindow instance from the object provided as the second argument. The method targets the item at the index specified by the first argument, splits this item horizontally into two, and places the new TabsWindow as the immediate right-side neighbor of the original item.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoRight(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout, or creates a new TabsWindow instance from an object provided as the second argument. The new TabsWindow is added by splitting the target layout item—identified by the index given as the first argument—into two. The new TabsWindow is then positioned vertically as the top neighbor of the target item, effectively placing it above the existing item within the layout.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoTop(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new `TabsWindow` into the `DockingLayout`. The new `TabsWindow` can be either instantiated directly or created from an object provided as the second argument. The insertion is performed by splitting the target item—identified by the index specified as the first argument—into two, and then placing the new `TabsWindow` as the vertical bottom neighbor of the target item within the layout.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertIntoBottom(index: number | HTMLElement | string, item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout. If an object is provided as the second argument, it creates a TabsWindow instance using the properties of that object. The newly created TabsWindow is added as a top-level item, positioned at the top region within the Layout, ensuring it appears as the foremost window in the layout’s hierarchy.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutTop(item: any): void;
  /**
   * Inserts a new `TabsWindow` into the `DockingLayout`, either by creating a fresh `TabsWindow` instance or by constructing one from an object provided as the second argument. The newly added item will appear as a top-level window docked to the bottom edge within the layout, making it easily accessible alongside other primary windows.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutBottom(item: any): void;
  /**
   * Inserts a new TabsWindow component into the DockingLayout, either by creating a fresh instance or by generating it from an object provided as the second argument. The newly added TabsWindow will appear as a top-level item, positioned on the left side within the layout container. This method ensures the TabsWindow becomes an immediate child of the layout, maintaining proper hierarchy and orientation.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutLeft(item: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout, or creates a TabsWindow instance from a provided configuration object (passed as the second argument). The new TabsWindow will be added as a top-level pane, positioned on the right side of the DockingLayout. This ensures the new item is immediately visible and accessible, docked alongside any existing top-level windows.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertLayoutRight(item: any): void;
  /**
   * Adds a new TabsWindow to the DockingLayout, or creates a TabsWindow instance from the object provided as the second argument. When invoked, this method groups the target item and its neighboring items within a new splitter component. This splitter then becomes the sibling (neighbor) of the newly added TabsWindow. The new TabsWindow is inserted above the target item (at the ‘Top’ position) within the layout, ensuring the original target and its neighbors maintain their relative positions inside the new splitter.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupTop(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new TabsWindow into the DockingLayout at the specified position, or instantiates a TabsWindow from the provided configuration object (second argument). When this method is called, the target item and its neighboring items are grouped within a new splitter component. This splitter acts as a sibling to the newly added TabsWindow within the layout hierarchy. The new TabsWindow is inserted below the specified target item (at the Bottom position), ensuring that the existing layout structure is preserved while accommodating the additional window.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupBottom(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new `TabsWindow` into the `DockingLayout` at a specified position, or creates a `TabsWindow` instance from an object provided as the second argument. When this method is called, the specified target item and its neighboring items are grouped into a new splitter container, which becomes the adjacent sibling of the newly added `TabsWindow`. The new item is inserted to the left of the target item, effectively placing it before the target within the splitter.
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupLeft(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new `TabsWindow` into the `DockingLayout`. You can either provide an existing `TabsWindow` instance or pass a configuration object as the second argument to create a new instance. When this method is called, the specified target item and its adjacent items are grouped together inside a new splitter container. This splitter container then becomes the neighbor of the newly added `TabsWindow`. The new `TabsWindow` is inserted immediately after the target item, positioned to the right. This allows you to easily add and organize tabbed windows within the docking layout, maintaining the correct structure and relationships between items."
   * @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
   * @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   */
  insertOutsideTargetGroupRight(index: number | HTMLElement | string, tabsWindow: any): void;
  /**
   * Inserts a new `TabsWindow` instance into the application interface. The newly created window appears in floating mode, meaning it is not docked to any edge of the main window and can be freely repositioned by the user. This allows for independent movement and placement on the screen, separate from other docked interface elements.
   * @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
   * @param {number | string} left?. The left position of the new window. You can use number, px or %. For example: '10px'.
   * @param {number | string} top?. The top position of the new window. You can use number, px or %. For example: '10px'.
   */
  insertFloatingWindow(item: any, left?: number | string, top?: number | string): void;
  /**
   * Returns an array containing all items that have been automatically hidden by the system or application logic. Each element in the array represents an item that meets the auto-hide criteria, allowing developers to programmatically access or process these hidden items as needed.
   * @param {string} orientation?. Determines which auto hidden items to return ( vertical or horizontal ). If not set the method will return all autohidden items. Possible values: 'vertical', 'horizontal'.
   * @returns {any[]}
   */
  getAutoHideItems(orientation?: string): any[];
  /**
   * Returns the zero-based index of the first occurrence of the specified target item within the collection. If the target item is not found, the method returns -1.
   * @param {HTMLElement} node. Returns the index of the target item.
   * @returns {number}
   */
  getIndex(node: HTMLElement): number;
  /**
   * Returns an array of objects, where each object represents a layout item within the element. Each object contains detailed settings for the layout item—such as its type, properties, and configuration options—as well as information about its position and relationship to other items in the hierarchy. This provides a complete snapshot of the current structural organization and settings of the element.
   * @param {boolean} noInstances?. Determines if the returned array will contain HTML references or not. When saving to localStorage the resulted array should not contain any HTMLElement references.
   * @returns {any[]}
   */
  getState(noInstances?: boolean): any[];
  /**
   * Returns the parent Splitter component containing the specified Layout item. If the Layout item is nested within one or more Splitter containers, this method retrieves the immediate Splitter parent that manages the Layout item. If the Layout item is not inside a Splitter, the method returns null.
   * @param {HTMLElement} item?. DockingLayout item
   * @returns {HTMLElement}
   */
  getItemGroupElement(item?: HTMLElement): HTMLElement;
  /**
   * Returns a JSON array of objects, each representing the current structure and state of the element. This array is formatted to be directly compatible with LocalStorage, allowing you to easily save and restore the element's configuration as needed.
   * @returns {any[]}
   */
  getJSONStructure(): any[];
  /**
   * Loads a previously saved state of the element. If a state object is provided as an argument, the method will restore the element to that specific state. If no state is provided, the method will automatically attempt to retrieve the element's state from the browser's localStorage and apply it. This ensures that the element can be restored to its previous configuration either through a supplied state or from persistent storage.
   * @param {any[]} state?. An array of objects that represents a cached state of the DockingLayout. The result of calling the 'saveState' method.
   */
  loadState(state?: any[]): void;
  /**
   * Removes a TabsWindow item from the DockingLayout component, effectively detaching the specified tabbed window from the DockingLayout structure. This operation updates the layout by eliminating the designated TabsWindow and its associated content from the parent element.
   * @param {number | HTMLElement | string} index. The index of the TabsWindow to remove or a reference to it.
   */
  removeAt(index: number | HTMLElement | string): void;
  /**
   * Removes all child elements and content from the specified element, leaving it empty.
   */
  removeAll(): void;
  /**
   * Removes a "smart-tabs-window" node from the DockingLayout structure. The "smart-tabs-window" represents a tabbed window component within the layout; this operation fully deletes the specified window and all its contents from the DockingLayout hierarchy.
   * @param {Node} node. The "smart-tabs-window" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Persists the current configuration of the DockingLayout to LocalStorage, capturing both the hierarchical structure and size of all layout components. This allows the layout—including panel arrangement, nesting, and dimensions—to be accurately restored in future sessions.
   * @returns {any}
   */
  saveState(): any;
  /**
   * This method detaches an item from the layout, removing it from the layout's structure while keeping its visual position unchanged. After calling this method, the item is no longer managed by the layout system and becomes an independent or 'floating' element. The undocked item can be reinserted into the layout at any time.
   * @param {string | number | Node} node. A "smart-tabs-window" instance that is part of the DockingLayout.
   */
  undock(node: string | number | Node): void;
  /**
   * Updates the properties of a TabsWindow and all of its contained tabs, including their order, content, and configuration settings.
   * @param {number | HTMLElement | string} index. The index of the TabsWindow to update.
   * @param {any} settings. An object that contains the new settings for the TabsWindow item. Settings object is the same as defining a new TabsWindow with the exception of 'items' array where the items are defined. In order to change the label or content of a Tab item the user has to specify the index of the target tab item.
   */
  update(index: number | HTMLElement | string, settings: any): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-docking-layout"): DockingLayout;
        querySelector(selectors: "smart-docking-layout"): DockingLayout | null;
        querySelectorAll(selectors: "smart-docking-layout"): NodeListOf<DockingLayout>;
        getElementsByTagName(qualifiedName: "smart-docking-layout"): HTMLCollectionOf<DockingLayout>;
        getElementsByName(elementName: "smart-docking-layout"): NodeListOf<DockingLayout>;
    }
}

/**Specifies the snap mode for drag-and-drop operations within the layout. There are two available modes:<br/><br/><br/>  <br/>    simple – Enables the user to drag and drop a single tab item either within the layout or outside of it. When dragging begins, a semi-transparent highlighter appears to clearly indicate all the valid drop zones for the tab. The user must drop the dragged tab inside one of these highlighted zones to complete the operation.<br/>  
<br/>  <br/>    advanced – Allows the dragging and dropping of an entire <code>TabsWindow</code>—containing all its tab items—or an individual tab. This mode adopts a Visual Studio-style visual feedback system: as an item is dragged, an overlay appears showing various possible drop locations, represented as icons. The user must drop the item directly onto one of these icons within the feedback overlay to position it in the desired location.<br/>  
<br/><br/><br/>The highlighter or feedback overlay automatically appears as soon as a drag operation is initiated, visually guiding the user to all valid drop targets and enhancing the drag-and-drop experience. */
export declare type DockingLayoutSnapMode = 'simple' | 'advanced';
