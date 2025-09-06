import  {BaseElement, Animation} from "./smart.element"

export interface ColumnPanelProperties {
  /**
   * Configures or retrieves the current animation mode for the element. When set to 'none', all animations are disabled and the element will update instantly without any animated transitions. Use this property to enable, disable, or specify different animation behaviors as needed.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the data source from which content will be retrieved and displayed in the column panel. This setting determines what data is loaded and shown within the column panel interface.
   * Default value: null
   */
  dataSource?: ColumnPanelDataSource[];
  /**
   * Determines whether the column panel is active. When enabled, the column panel is displayed, allowing users to view and manage available columns. When disabled, the column panel is inactive.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets or retrieves the 'unlockKey' value, a unique key required to unlock and grant access to the product’s protected features or content. Use this property to securely store or obtain the unlock key as part of the product activation process.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Gets or sets the current language used for displaying messages or content. This property works together with the messages property, which contains localized text for each supported language. Selecting a language updates the displayed messages to their corresponding translations defined in the messages object.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback function that allows you to define or modify the formatting of messages returned by the Localization Module. Use this to customize how localized messages are displayed or structured before they are delivered to the application interface.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Handles the setting or retrieval of an object containing customizable strings used throughout the widget interface, enabling localization of text elements. This property works in tandem with the locale property to provide language-specific translations, ensuring the widget displays appropriate text based on the user's selected language or region.
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "apply": "Apply",
   *     "cancel": "Cancel",
   *     "find": "Find a field",
   *     "noResults": "No results"
   *   }
   * }
   */
  messages?: any;
  /**
   * When an element is set to "readonly," users cannot modify its value or content. However, they can still focus on the element (for example, by tabbing to it) and select its text. Unlike disabled elements—which are neither interactive nor focusable—a readonly element remains accessible for review but does not allow user edits.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Gets or sets a value that specifies whether the element's layout direction is set to right-to-left, enabling proper alignment and display for languages and locales that use right-to-left text, such as Arabic or Hebrew.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * If this property is set to true, the element will be unfocusable, meaning users will not be able to focus on it using keyboard navigation (such as the Tab key) or by clicking on it.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 Column Panel allows toggling the visibility and changing the order of columns.
*/
export interface ColumnPanel extends BaseElement, ColumnPanelProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user clicks the "Apply" button on the interface, indicating their intent to submit or confirm the current selection or settings. It is typically used to initiate processes such as form submission, filtering data, or applying configuration changes, depending on the context of the application.
	* @param event. The custom event. Custom data event was created with: ev.detail(value, positionChanged)
   *  value - The current configuration of columns (data source).
   *  positionChanged - A boolean detail that shows whether the columns have been reordered.
   */
  onApply?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user clicks the "Cancel" button, indicating their intention to abort or exit the current action or form. It can be used to execute custom logic, such as closing a dialog, discarding unsaved changes, or navigating away from the current view.
	* @param event. The custom event.    */
  onCancel: ((this: any, ev: Event) => any) | null;
}

export interface ColumnPanelDataSource {
  /**
   * The column's data field.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Determines whether the column's visibility can be toggled.
   * Default value: false
   */
  disableToggle?: boolean;
  /**
   * A valid CSS class name applied to the column's icon.
   * Default value: ""
   */
  icon?: string;
  /**
   * The column's label.
   * Default value: ""
   */
  label?: string;
  /**
   * Determines whether the column is visible in the panel.
   * Default value: true
   */
  visible?: boolean;
}

declare global {
    interface Document {
        createElement(tagName: "smart-column-panel"): ColumnPanel;
        querySelector(selectors: "smart-column-panel"): ColumnPanel | null;
        querySelectorAll(selectors: "smart-column-panel"): NodeListOf<ColumnPanel>;
        getElementsByTagName(qualifiedName: "smart-column-panel"): HTMLCollectionOf<ColumnPanel>;
        getElementsByName(elementName: "smart-column-panel"): NodeListOf<ColumnPanel>;
    }
}

