import  {BaseElement, Animation} from "./smart.element"

export interface AccordionProperties {
  /**
   * Configures or retrieves the current animation mode. When set to 'none', all animations are disabled, resulting in instant transitions without animated effects. Setting this property to other supported values enables different animation behaviors.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the data source to be loaded and displayed within the Accordion component. This property defines the collection of items or structured data that populates each section or panel of the Accordion, enabling dynamic rendering of its contents. The data source can typically be provided as an array of objects, JSON data, or via a remote endpoint depending on configuration.
   * Default value: null
   */
  dataSource?: any;
  /**
   * Controls whether the accordion component is enabled or disabled. When set to disabled, all interactive functionality is turned off—users cannot expand, collapse, or interact with any accordion sections. Disabled accordions appear visually inactive to indicate their non-interactive state.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the indexes of currently expanded items. By assigning an array of item indexes to this property, you can programmatically expand those specific items. The maximum number of items that can be expanded at once depends on the value specified in the expandMode property (for example, single or multiple expansion modes). When getting this property, it returns an array of the indexes of all expanded items.
   * Default value: 
   */
  expandedIndexes?: number[];
  /**
   * Sets or retrieves the current expand mode. The expand mode specifies how list or group items behave when expanding or collapsing—such as allowing multiple items to expand simultaneously or restricting expansion to a single item at a time.
   * Default value: singleFitHeight
   */
  expandMode?: AccordionExpandMode | string;
  /**
   * Retrieves or assigns the 'unlockKey' property, which serves as the access credential required to unlock and activate the product's full features.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current language code (e.g., "en", "fr") for the component. This property works together with the messages property to determine which language-specific messages or translations are displayed. Use this to localize your application content based on user preference or locale.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify or enhance localized message output—such as applying dynamic content, adjusting text structure, or handling language-specific variations—before the messages are delivered to the client application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies or retrieves an object containing the localized strings used throughout the widget interface. This allows you to define custom translations for various UI elements in different languages. Used together with the locale property to enable localization and internationalization support within the widget.
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
   *     "accordionItemRequired": "' requires an item from type \"jqx-accordion-item\".",
   *     "indexOutOfBound": "' method.",
   *     "invalidSettings": "' method accepts a string or an object as it's second parameter.",
   *     "noItems": ": No child elements found.",
   *     "overridingProperties": "' property is used by default."
   *   }
   * }
   */
  messages?: any;
  /**
   * Indicates whether the element is read-only. When set to true, the element cannot be modified or interacted with by users; its value is fixed and user input is disabled. If false, the element remains editable and interactive.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Controls whether users can reorder accordion items by dragging and dropping them. When enabled, items within the accordion component can be rearranged interactively; when disabled, the order of items remains fixed.
   * Default value: false
   */
  reorder?: boolean;
  /**
   * Specifies or retrieves a value that determines whether the element is aligned to accommodate right-to-left (RTL) languages and scripts, such as Arabic or Hebrew. This property ensures the element’s layout and text direction are properly adjusted to support RTL localization.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the theme to be applied, which controls the overall appearance and visual style of the element, including aspects such as colors, fonts, and background.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies whether the element is capable of receiving keyboard focus, allowing users to navigate to it using the keyboard (such as the Tab key) and interact with it through assistive technologies.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Accordion organizes content within collapsable items.
*/
export interface Accordion extends BaseElement, AccordionProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Triggered when an item has completed its collapse animation and is no longer expanded or visible. This event occurs only after the item is fully collapsed, ensuring that any associated transitions or content hiding have finished.
	* @param event. The custom event. Custom data event was created with: ev.detail(content, index, label)
   *  content - The collapsed item's content.
   *  index - The index of the collapsed item.
   *  label - The label of the collapsed item.
   */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Fires immediately before an item begins its collapse animation, allowing you to perform actions or prevent the collapse from occurring.
	* @param event. The custom event. Custom data event was created with: ev.detail(content, index, label)
   *  content - The item content.
   *  index - The item's index.
   *  label - The item's label.
   */
  onCollapsing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Triggered when a user completes a drag-and-drop action to reorder items, indicating that the new order has been finalized and can be processed (e.g., saved or updated in the UI or backend).
	* @param event. The custom event. Custom data event was created with: ev.detail(position, target, content, index, label)
   *  position - Current top and left coordinates of the dragged item.
   *  target - The dragged item element.
   *  content - The dragged item's content.
   *  index - The dragged item's index.
   *  label - The dragged item's label.
   */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * Fires when the user initiates a drag-and-drop reorder action, signaling the start of an item being moved within a sortable list or container. This event provides an opportunity to perform setup tasks, such as highlighting the item being dragged or preparing the UI for reordering.
	* @param event. The custom event. Custom data event was created with: ev.detail(position, target, content, index, label)
   *  position - Initial top and left coordinates of the item being dragged.
   *  target - The item element being dragged.
   *  content - The dragged item's content.
   *  index - The dragged item's index.
   *  label - The dragged item's label.
   */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /**
   * Triggered when an item has completed its expansion and is fully visible to the user. This event occurs after any expansion animations or transitions have finished, ensuring that the item's contents are now accessible for interaction.
	* @param event. The custom event. Custom data event was created with: ev.detail(position, target, content, index, label)
   *  position - Current top and left coordinates of the expanded item.
   *  target - The expanded item element.
   *  content - The expanded item's content.
   *  index - The expanded item's index.
   *  label - The expanded item's label.
   */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Fires immediately before an item begins its expansion process, allowing you to perform actions or modify data right before the expansion occurs. This event provides an opportunity to prevent the expansion or make adjustments as needed.
	* @param event. The custom event. Custom data event was created with: ev.detail(content, index, label)
   *  content - The content of the item being expanded.
   *  index - The index of the item being expanded.
   *  label - The label of the item being expanded.
   */
  onExpanding?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Collapses the item located at the specified index, hiding its associated content or details from view. This action typically updates the user interface to indicate that the item is no longer expanded.
   * @param {number} position. Index of the item to collapse.
   */
  collapse(position: number): void;
  /**
   * Expands the item located at the specified index in the collection, making its detailed content visible or accessible to the user.
   * @param {number} position. Index of the item to expand.
   */
  expand(position: number): void;
  /**
   * Inserts a new item into the array at the specified index, shifting existing elements to the right to accommodate the new entry. If the specified index is out of range, the operation will either append the item to the end or return an error, depending on the implementation.
   * @param {number} index. Index where the new item will be inserted.
   * @param {any} item. Object representing the new item's properties.
   */
  insert(index: number, item: any): void;
  /**
   * Removes the item located at the specified index from the array, shifting subsequent items one position to the left. The array's length is reduced by one, and the removed item is no longer accessible.
   * @param {number} position. Index of the item to remove.
   */
  removeAt(position: number): void;
  /**
   * Replaces the item at the given index in the collection with an updated version, incorporating the specified new property values while preserving any unchanged properties.
   * @param {number} index. Index of the item to update.
   * @param {any} settings. Object containing updated property values for the item.
   */
  update(index: number, settings: any): void;
  /**
   * Sets the locale of a component.
   * @param {string} locale. The locale abbreviation. For example: 'de'.
   * @param {any} messages?. Object containing the locale messages.
   */
  setLocale(locale: string, messages?: any): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-accordion"): Accordion;
        querySelector(selectors: "smart-accordion"): Accordion | null;
        querySelectorAll(selectors: "smart-accordion"): NodeListOf<Accordion>;
        getElementsByTagName(qualifiedName: "smart-accordion"): HTMLCollectionOf<Accordion>;
        getElementsByName(elementName: "smart-accordion"): NodeListOf<Accordion>;
    }
}

/**Sets or retrieves the current expand mode. The expand mode specifies how list or group items behave when expanding or collapsing—such as allowing multiple items to expand simultaneously or restricting expansion to a single item at a time. */
export declare type AccordionExpandMode = 'single' | 'singleFitHeight' | 'multiple' | 'toggle' | 'none';
export interface AccordionItemProperties {
  /**
   * Specifies or retrieves the position of the arrow indicator within the header. Accepts values such as 'left', 'right', or 'none'. When set to 'none', the arrow will not be displayed in the header.
   * Default value: left
   */
  arrow?: AccordionItemArrow | string;
  /**
   * Sets or retrieves the content of the item. Use this property to assign new content to the item or to access its current content value.
   * Default value: ''
   */
  content?: string | HTMLElement;
  /**
   * Gets or sets whether the element is in its expanded or collapsed state. When set to true, the element is expanded and its content is visible; when false, the element is collapsed and its content is hidden.
   * Default value: false
   */
  expanded?: boolean;
  /**
   * Gets or sets whether the element currently has input focus. When set to true, the element receives focus; when set to false, the element loses focus. This property reflects the element's current focus state within the user interface.
   * Default value: false
   */
  focused?: boolean;
  /**
   * Sets or retrieves the label of the item. This property allows you to assign a descriptive name to the item or access its current label.
   * Default value: ""
   */
  label?: string;
}
/**
 Single item in an Accordion view.
*/
export interface AccordionItem extends BaseElement, AccordionItemProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the item transitions from an expanded to a collapsed state, typically as a result of user interaction or a programmatic action. Use this event to execute custom logic or update the UI when the item is hidden or minimized.
	* @param event. The custom event.    */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user expands an item, such as clicking to reveal additional content or details. It typically occurs after the expansion animation or transition is complete, indicating that the item is now fully visible. Use this event to perform actions that should only occur once the item has been expanded, such as loading related data or updating the user interface.
	* @param event. The custom event.    */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-accordion-item"): AccordionItem;
        querySelector(selectors: "smart-accordion-item"): AccordionItem | null;
        querySelectorAll(selectors: "smart-accordion-item"): NodeListOf<AccordionItem>;
        getElementsByTagName(qualifiedName: "smart-accordion-item"): HTMLCollectionOf<AccordionItem>;
        getElementsByName(elementName: "smart-accordion-item"): NodeListOf<AccordionItem>;
    }
}

/**Specifies or retrieves the position of the arrow indicator within the header. Accepts values such as 'left', 'right', or 'none'. When set to 'none', the arrow will not be displayed in the header. */
export declare type AccordionItemArrow = 'left' | 'right' | 'none';
