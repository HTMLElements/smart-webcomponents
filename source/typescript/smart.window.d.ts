import  {BaseElement, Animation} from "./smart.element"

export interface WindowProperties {
  /**
   * Determines whether the 'Add New' tab within the Tabs element is currently visible to the user.  Note: This property is only relevant when used with the TabsWindow component; it does not apply to other components.
   * Default value: false
   */
  addNewTab?: boolean;
  /**
   * Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. If set to any other supported value, animations will be enabled and behave according to the specified mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Controls the automatic capitalization behavior for user input as it is entered or edited. This setting specifies whether characters are auto-capitalized (e.g., sentences, words, or all characters) in the input field. Note: This property is only relevant when used with the MultilinePromptWindow component.
   * Default value: none
   */
  autoCapitalize?: WindowAutoCapitalize | string;
  /**
   * Specifies whether the element should automatically expand its height to accommodate vertically overflowing input.  Note: This setting only applies to MultilinePromptWindow components.
   * Default value: false
   */
  autoExpand?: boolean;
  /**
   * Specifies the text displayed on the 'Cancel' button within the Prompt Window. This label informs users which button will dismiss or close the prompt without taking any action.
   * Default value: "Cancel"
   */
  cancelLabel?: string;
  /**
   * Specifies the text that appears on the 'Complete' button within the Progress Window, allowing customization of the button label to better suit user interface requirements.
   * Default value: "Confirm"
   */
  completeLabel?: string;
  /**
   * Specifies the text displayed on the 'Confirm' button within the Prompt Window, allowing customization of the button label to suit your application's context.
   * Default value: "Confirm"
   */
  confirmLabel?: string;
  /**
   * Indicates whether the window is currently collapsed. When set to true, only the window's header is displayed while the content area is hidden. If false, both the header and the full content of the window are visible.
   * Default value: false
   */
  collapsed?: boolean;
  /**
   * When a modal window is opened, this property specifies whether clicking on the overlay (mask) outside the modal will close the window. Set it to true to allow users to dismiss the modal by clicking the mask, or false to require an explicit action (such as clicking a close button) to close the modal.
   * Default value: false
   */
  closeOnMaskClick?: boolean;
  /**
   * Specifies the data source to be loaded into the TabsWindow component. This property is relevant exclusively for the TabsWindow and will not affect other components.
   * Default value: null
   */
  dataSource?: {label: string, content: string}[];
  /**
   * Controls whether the window is active and visible to the user. When enabled, the window is operational and can be interacted with; when disabled, the window is hidden or inactive, and user interactions are ignored.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Controls whether the window snapping feature is active. When enabled, users can automatically align and resize windows by dragging them to the edges or corners of the screen. Disabling this feature prevents windows from snapping into place during movement.
   * Default value: false
   */
  disableSnap?: boolean;
  /**
   * By default, pressing the 'Escape' key will automatically close the window. To prevent the window from closing when 'Escape' is pressed, set this property to true.
   * Default value: false
   */
  disableEscape?: boolean;
  /**
   * By default, the window handles certain keyboard inputs such as the arrow keys ('ArrowUp', 'ArrowDown', etc.), 'Escape', and similar keys for scrolling or navigation actions. Set this property to true to disable the window’s default keyboard handling, allowing you to manage these key events manually within your application.
   * Default value: false
   */
  disableKeyboard?: boolean;
  /**
   * Specifies the visual presentation of characters entered within the input field. For example, this setting can control whether characters are shown as plain text or masked (such as for password fields). This option applies specifically to the Prompt Window component.
   * Default value: default
   */
  displayMode?: WindowDisplayMode | string;
  /**
   * ''Applicable to TabsWindow components when they are docked within a DockingLayout Custom Element.This property specifies the valid drop locations for the window—and its tab items—inside the DockingLayout. The property accepts an array of positional values, allowing you to define multiple allowable drop zones.Details:  Positions prefixed with 'layout-' apply to each individual tab item (child element) of the TabsWindow being dragged. These determine where tab items can be dropped within the overall layout, outside their original container.  Other position values (without the 'layout-' prefix) indicate allowed drop positions directly within the hovered target TabsWindow, specifying where the whole window or its tabs can be placed relative to the target window.Notes:  This property is used exclusively by jqxDockingLayout custom elements.  It controls the possible drop targets—both at the window and tab levels—within the DockingLayout environment.Allowed Values:  The array values specify the permitted drop positions. Refer to the documentation for a complete list of supported position strings.
   * Default value: 
   */
  dropPosition?: WindowDropPosition | string;
  /**
   * A callback function that specifies how to format the label displayed on the Progress Bar. This function allows customization of the label's content or appearance based on the current progress value.  Note: This property is only applicable to the ProgressWindow component.
   * Default value: null
   */
  formatFunction?: any;
  /**
   * Specifies the exact placement or alignment of the footer section within the window element, such as positioning it at the bottom, fixed, absolute, or relative to other content. This property controls where the footer appears in relation to the window’s layout.
   * Default value: top
   */
  footerPosition?: WindowFooterPosition | string;
  /**
   * Specifies the custom template used to render the footer section of the Dialog window. If footerTemplate is set to null (the default), the Dialog will not display a footer section. You can provide a template string or a function to customize the appearance and content of the Dialog’s footer.
   * Default value: null
   */
  footerTemplate?: any;
  /**
   * Specifies which buttons will be displayed in the header section, allowing you to control the visibility of header actions for users.
   * Default value: close,maximize,minimize
   */
  headerButtons?: string[];
  /**
   * Specifies the custom template to be used for rendering the header section of the dialog window. If headerTemplate is set to null (the default value), the dialog will display its standard header layout. By providing a template, you can fully customize the appearance and content of the dialog's header area.
   * Default value: null
   */
  headerTemplate?: any;
  /**
   * Specifies the exact placement of the header section within the window element, such as top, bottom, left, or right. This setting controls where the header appears relative to the content of the window.
   * Default value: top
   */
  headerPosition?: TabPosition | string;
  /**
   * Displays supplementary helper text beneath the text box, providing users with additional guidance or context. This hint appears only when the text box is focused (i.e., the user is actively typing or has selected the field).  Note: This property is specifically applicable to the Prompt Window component.
   * Default value: null
   */
  hint?: any;
  /**
   * Sets the Progress bar value to the indeterminate state ('null'), activating its loading animation to indicate ongoing progress without a defined endpoint.  Note: This property is only applicable when used within a ProgressWindow component.
   * Default value: false
   */
  indeterminate?: boolean;
  /**
   * Specifies the direction in which the Progress Bar fills (e.g., left-to-right, right-to-left, top-to-bottom, or bottom-to-top).  Note: This property is only applicable when used within a ProgressWindow component.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Specifies the text displayed as the window title in the header section, typically shown at the top of the application window or dialog box.
   * Default value: ""
   */
  label?: string;
  /**
   * When enabled, the resizing operation updates the element’s size in real time as the user drags its edges, providing immediate visual feedback. By default, this feature is disabled; instead, a highlighter appears around the edges of the window during resizing to indicate the prospective new size, while the element itself resizes only once the operation is complete.
   * Default value: false
   */
  liveResize?: boolean;
  /**
   * Note: This property is relevant only for TabsWindow elements that are utilized within a DockingLayout custom element.This property is exclusively used by jqxDockingLayout to specify ownership of a TabsWindow. It determines which jqxDockingLayout instance the window is associated with. If a TabsWindow is removed from its parent DockingLayout element, this property continues to reference the original docking layout to which it belonged.The property accepts either:  A string representing the id of a jqxDockingLayout present on the page.  An instance of a jqxDockingLayout object.This allows for flexible identification of the owning layout, either by ID or by direct reference to the layout instance.
   * Default value: null
   */
  layout?: any;
  /**
   * Gets or sets the unlockKey, a unique code required to activate or unlock access to the product’s full features or licensed functionality.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies the language to be used for displaying messages. This property can be set or retrieved, and works in conjunction with the messages property to determine which set of localized messages is shown to the user. Changing the language updates the displayed messages accordingly.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Note: This property is only applicable to a TabsWindow when it is docked within a DockingLayout custom element. When enabled, it controls whether the TabsWindow can be resized by the user. If set to true, users will be able to adjust the size of the TabsWindow within the DockingLayout; if set to false, resizing will be disabled and the TabsWindow will have a fixed size.
   * Default value: false
   */
  locked?: boolean;
  /**
   * Callback function used within the localization module, typically invoked when a localization event occurs (e.g., language change, resource load). This callback handles tasks such as updating UI elements or retrieving localized content based on the current language settings.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Indicates whether the window is currently maximized. When set to true, the window expands to fill the entire available viewport, covering all other interface elements and leaving no visible borders or title bars. If false, the window retains its previous size and position. This property can be used to programmatically check or control the window’s maximized state within the application.
   * Default value: false
   */
  maximized?: boolean;
  /**
   * Defines or retrieves an object containing localized strings used throughout the widget’s user interface. This property allows developers to customize the widget’s displayed text for different languages and regions. It is typically used together with the locale property to ensure that the widget adapts its content based on the selected language or regional settings.
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
   * Specifies whether the window should function as a modal dialog. When set to true, the window captures user focus and prevents interaction with any other elements on the page until it is closed. This ensures that the user must address or dismiss the modal window before returning to the rest of the content.
   * Default value: false
   */
  modal?: boolean;
  /**
   * For use with TabsWindow when docked within a DockingLayout custom element:  Specifies the maximum size that the TabsWindow component can occupy when it is docked.  For the ProgressWindow component:  Defines the maximum value for the progress bar, allowing users to set the upper limit of the ProgressBar's range.
   * Default value: 
   */
  max?: string | number | null;
  /**
   * Applicable to TabsWindow when docked inside a DockingLayout custom element. Specifies the minimum allowed size for the item within the layout, ensuring it does not shrink below this value during resizing operations.Also applies to ProgressWindow, where it lets the user set the minimum value for the ProgressBar, defining the lowest possible progress state that can be represented.
   * Default value: 
   */
  min?: string | number | null;
  /**
   * Indicates whether the window is currently minimized. When set to true, the window is reduced to an icon or compact form and positioned (docked) in the bottom left corner of the viewport. If false, the window remains in its normal, active state.
   * Default value: false
   */
  minimized?: boolean;
  /**
   * Specifies or retrieves the maximum number of characters a user is allowed to enter into the input field. This property applies to both Prompt and MultilinePrompt windows. If set, the input will be limited to the defined character count, preventing users from entering more characters than specified.
   * Default value: null
   */
  maxLength?: number;
  /**
   * Defines the minimum number of characters a user must enter before the autocomplete feature is activated. This property can be both set (to specify the desired threshold) and retrieved (to check the current threshold).  Note: This setting is only applicable to Prompt and MultilinePrompt windows.
   * Default value: 2
   */
  minLength?: number;
  /**
   * Indicates whether the window is currently visible to the user. Returns true if the window is displayed on the screen and can be interacted with, and false if it is hidden or minimized.
   * Default value: false
   */
  opened?: boolean;
  /**
   * Indicates whether the window is pinned. A pinned window cannot be moved (dragged) by the user, but it can still be resized. When set to true, this property disables window dragging while allowing resizing operations.
   * Default value: false
   */
  pinned?: boolean;
  /**
   * Specifies the placeholder text that appears inside the input field before the user enters a value.  Note: This option is only applicable to the Prompt Window component.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Specifies the text label displayed above or alongside the input field within the PromptWindow component. This label helps users understand what information is expected in the input field.
   * Default value: ""
   */
  promptLabel?: string;
  /**
   * If the element has the "readonly" attribute, users cannot modify its value; the field will display data in a non-editable state, though users can still select and copy its contents. This differs from a "disabled" element, as a "readonly" field remains focusable and included in form submissions.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * When this option is enabled, a resize handle appears in the bottom-right corner of the window. Users can initiate the resizing operation exclusively by dragging this indicator; resizing from any other window edge or corner is disabled.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Specifies how the window can be resized by the user.Available resizing modes:  none – Disables all window resizing; the window size is fixed.  vertical – Allows the window to be resized only vertically (top and bottom edges).  horizontal – Allows the window to be resized only horizontally (left and right edges).  both – Enables both horizontal and vertical resizing; the window can be resized in any direction.  top – The window can only be resized by dragging the top edge.  bottom – The window can only be resized by dragging the bottom edge.  left – The window can only be resized by dragging the left edge.  right – The window can only be resized by dragging the right edge.Choose the desired mode to control which edges of the window users can drag to resize, or to prevent resizing entirely.
   * Default value: none
   */
  resizeMode?: WindowResizeMode | string;
  /**
   * Gets or sets a value that determines whether the element’s alignment is configured to support right-to-left (RTL) languages and text direction, such as Arabic or Hebrew. Use this property to ensure proper display and alignment for locales that require RTL font and layout support.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Indicates that the input field is required and must be filled out by the user before the form can be submitted. If left empty, the form submission will be blocked, prompting the user to complete this field.  'Note:' This setting is applicable to the Prompt Window.
   * Default value: false
   */
  required?: boolean;
  /**
   * Defines the error message displayed when the required attribute is enabled and the user submits the input field without providing a value. This setting only applies to the Prompt Window interface.
   * Default value: ""
   */
  requiredMessage?: string;
  /**
   * Specifies whether the input field's content should be automatically highlighted (selected) when the field gains focus.  Note: This setting applies specifically to the Prompt Window component.
   * Default value: false
   */
  selectAllOnFocus?: boolean;
  /**
   * Specifies or retrieves the currently selected tab within the component. This property applies exclusively to the TabsWindow component.
   * Default value: null
   */
  selectedIndex?: number | null;
  /**
   * Specifies how the user is allowed to navigate between different tabs within the interface. This property is relevant only when using the TabsWindow component.
   * Default value: click
   */
  selectionMode?: TabSelectionMode | string;
  /**
   * Specifies the zero-based index position of the last character included in the current text selection.  Note: This property is relevant only for use within MultilinePromptWindow components.
   * Default value: 0
   */
  selectionEnd?: number;
  /**
   * Specifies the zero-based index of the first character in the currently selected text within the prompt window. This property is only applicable when using the MultilinePromptWindow component.
   * Default value: 0
   */
  selectionStart?: number;
  /**
   * Controls the visibility of the label displayed on the Progress Bar.  Note: This setting is only applicable when used within the Progress Window component.
   * Default value: false
   */
  showProgressValue?: boolean;
  /**
   * A getter that retrieves all sibling LayoutPanel instances—those sharing the same immediate parent—when a LayoutPanel item is docked within a DockingLayout. The returned siblings are also DockingLayout items (specifically, other LayoutPanels).  This property is only available for TabsWindow components that are docked inside a DockingLayout.
   * Default value: 
   */
  siblings?: any;
  /**
   * Relevant when a TabsWindow component is nested within a DockingLayout custom element. This property specifies the size (width or height, depending on layout orientation) allocated to the TabsWindow within the docking layout, allowing developers to control how much space the window occupies relative to other docked components.
   * Default value: ""
   */
  size?: string;
  /**
   * Indicates whether spelling and grammar checking should be enabled for the element. This property determines if the content entered within the element will be reviewed for spelling and grammatical errors. Note: This option is only relevant for the MultilinePromptWindow component.
   * Default value: false
   */
  spellCheck?: boolean;
  /**
   * Determines whether close buttons are shown on each tab within the Tab Strip of the TabsWindow. You can use this property to enable or disable the visibility of close buttons on tabs, allowing users to close individual tabs directly from the Tab Strip.  Note: This property is only applicable to the TabsWindow component.
   * Default value: false
   */
  tabCloseButtons?: boolean;
  /**
   * Specifies when the close button is visible—either only when a tab is selected or always visible on all tabs.  Note: This property applies exclusively to the TabsWindow component.
   * Default value: default
   */
  tabCloseButtonMode?: WindowTabCloseButtonMode | string;
  /**
   * Specifies how the scroll buttons for tabs are displayed or behave. This option is only relevant when the tabLayout property is set to 'scroll', allowing tabs to be scrolled horizontally. Note: This property applies exclusively to the TabsWindow component.
   * Default value: auto
   */
  tabOverflow?: Overflow | string;
  /**
   * Determines the position of the Tab Strip within the TabsWindow.  Note: This property applies exclusively to the TabsWindow component.
   * Default value: top
   */
  tabPosition?: TabPosition | string;
  /**
   * Defines or retrieves the position of the scroll buttons located within the tab header of a TabsWindow component. This setting is exclusively applicable to TabsWindow instances and allows you to control where the scroll buttons appear (for example, at the start, end, or both ends of the tab header).
   * Default value: both
   */
  tabScrollButtonsPosition?: LayoutPosition | string;
  /**
   * Defines or retrieves the orientation of the text displayed in the tab labels within the TabsWindow component. This property determines whether the tab text is laid out horizontally or vertically. Note: This property is exclusively applicable to the TabsWindow component and has no effect on other components.
   * Default value: horizontal
   */
  tabTextOrientation?: Orientation | string;
  /**
   * Specifies the visual theme to be applied. The theme controls the appearance, including colors, fonts, and styling, of the element to ensure a consistent look and feel across the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * If this property is set to true, the element will be excluded from keyboard navigation and cannot receive focus either programmatically or via user interaction. This ensures that users will be unable to focus on the element using methods such as the Tab key or calling focus() in JavaScript.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Specifies the current value displayed within the TextBox or ProgressBar component inside a Dialog, Prompt, or Progress Window. This value can represent user input (for TextBox) or progress status (for ProgressBar) and is used to dynamically update the UI element's content or state.
   * Default value: 
   */
  value?: string | number;
  /**
   * Specifies the actual parent element of the target element. The window's sizing and movement are restricted to the boundaries of this parent element, meaning the window can only be resized or repositioned within the visible area of the designated parent.
   * Default value: null
   */
  windowParent?: any;
  /**
   * Specifies the text-wrapping behavior for the input field.  Note: This property is only relevant when used with the MultilinePromptWindow component.
   * Default value: soft
   */
  wrap?: WindowWrap | string;
}
/**
 Window or Dialog displays the interactive custom confirmations, message boxes, alerts, warnings, errors, and modal dialogs.
*/
export interface Window extends BaseElement, WindowProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered immediately before the window begins its opening process, allowing developers to perform any preparatory actions or modifications prior to the window becoming visible to the user.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the window becomes visible to the user—specifically, when it is opened or brought into view.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately before the window begins the closing process, allowing developers to execute custom logic or prompt the user for confirmation before the window is fully closed.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the window is closed or becomes hidden, such as when the user closes the browser tab, navigates away, or minimizes the window, causing it to no longer be visible to the user.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the application window is minimized or collapsed by the user. It allows you to execute custom logic in response to the window being hidden from view.
	* @param event. The custom event.    */
  onCollapse?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user finishes dragging the window, signaling the completion of the drag-and-drop operation. It occurs after the mouse button is released and the window movement has stopped.
	* @param event. The custom event.    */
  onDragEnd: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the user initiates a window drag operation, indicating that the dragging of the window has begun. It fires as soon as the user starts moving the window, typically by clicking and holding the window's title bar.
	* @param event. The custom event.    */
  onDragStart: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered whenever the window is resized to a larger size, indicating that the user has expanded the window either by dragging its edges or by maximizing it.
	* @param event. The custom event.    */
  onExpand?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the application window transitions into a maximized state. It fires immediately after the window expands to fill the available screen space, allowing developers to implement custom logic in response to the window being maximized by the user or programmatically.
	* @param event. The custom event.    */
  onMaximize?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the application window is minimized by the user. It occurs immediately after the minimize action takes place, allowing developers to execute custom logic—such as pausing background processes, saving state, or updating the UI—in response to the window being minimized.
	* @param event. The custom event.    */
  onMinimize?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user completes resizing the browser window, specifically after the resizing action has finished and the window size is no longer changing.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user initiates a window resize action, such as clicking and dragging the window’s edge or corner to change its dimensions. It marks the beginning of the window resizing process, allowing you to execute scripts or handle UI updates as soon as resizing starts.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the window is returned to its original size and position after being maximized, effectively restoring it to the state it was in prior to maximization.
	* @param event. The custom event.    */
  onRestore?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Appends a new tab item to the end of the existing list of tab items within the specified parent element. This operation updates the parent element's tab item collection, ensuring the new tab appears as the last item in the tab navigation.
   * @param {Node} node. A TabItem element that should be added to the rest of the items as the last item.
   * @returns {Node}
   */
  appendChild<T extends Node>(node: Node): T;
  /**
   * Sets the window to the highest z-order level, bringing it to the foreground and ensuring it is visible and accessible for user interaction above all other open windows.
   */
  bringToFront(): void;
  /**
   * Removes all existing content from the window, effectively resetting the window’s display area to an empty state. This operation clears any text, images, or elements currently visible within the window.
   */
  clear(): void;
  /**
   * Closes the currently active window in the application, terminating its user interface and releasing any associated resources. If there are unsaved changes or prompts, the user may be asked to confirm before the window is closed.
   */
  close(): void;
  /**
   * Minimizes the window, reducing it to a smaller icon or hidden state, without closing the application.
   * @returns {HTMLElement}
   */
  collapse(): HTMLElement;
  /**
   * Ensures the specified tab item is brought into view by automatically scrolling the tab bar as needed. <strong>This functionality is exclusive to the TabsWindow component.</strong>
   * @param {number} index. The index of the tab to scroll to.
   */
  ensureVisible(index: number): void;
  /**
   * Restores the window to its full size and visibility after it has been collapsed or minimized, allowing users to view and interact with its contents again.
   * @returns {any[]}
   */
  expand(): any[];
  /**
   * Inserts a new tab along with its corresponding content section into the user interface. <strong>This function is specifically designed for use within the <code>TabsWindow</code> component and will not operate outside of this context.</strong>
   * @param {number} index. The index to insert a new tab at.
   * @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
   */
  insert(index: number, details: any): void;
  /**
   * Inserts the specified "smart-tab-item" node directly before the reference "smart-tab-item" node within the tab collection. <strong>This operation is only applicable when manipulating tab items inside a TabsWindow component.</strong>
   * @param {Node} newNode. The "smart-tab-item" node to insert.
   * @param {Node | null} referenceNode?. The "smart-tab-item" node before which newNode is inserted.
   * @returns {Node}
   */
  insertBefore<T extends Node>(newNode: Node, referenceNode?: Node | null): T;
  /**
   * Revised Description:<br/>"Sets the window's position on the screen by moving it to specified X and Y coordinates, effectively relocating the window to a new location."
   * @param {string | number} left. Left position. For example: '100px'. 
   * @param {string | number} top. Top position. For example: '100px'. 
   */
  move(left: string | number, top: string | number): void;
  /**
   * Expands the window to occupy the entire available viewing area, ensuring it fills all usable screen space without overlapping system taskbars or menus.
   */
  maximize(): void;
  /**
   * Reduces the window to the taskbar or dock, temporarily hiding it from view without closing the application.
   */
  minimize(): void;
  /**
   * Opens a new browser window or tab with the specified URL or content, allowing additional web pages or resources to be displayed alongside the current page.
   */
  open(): void;
  /**
   * Prevents the window from being moved by locking its position. Disables the ability to drag or reposition the window, ensuring it remains fixed in place.
   */
  pin(): void;
  /**
   * Removes a tab along with its corresponding content section from the interface. <strong>This function is designed to work exclusively within the TabsWindow component.</strong>
   * @param {number} index. The index of the tab to remove.
   */
  removeAt(index: number): void;
  /**
   * Removes a child node with the "smart-tab-item" tag from the parent container.  <br/><strong>Note:</strong> This operation is only supported within the TabsWindow component; attempting to use it elsewhere will have no effect.
   * @param {Node} node. The "smart-tab-item" node to remove.
   * @returns {Node}
   */
  removeChild<T extends Node>(node: Node): T;
  /**
   * Restores the window to its previous dimensions and position before it was maximized or minimized, returning it to the exact size and location it had prior to those actions.
   */
  restore(): void;
  /**
   * Selects the specified tab within the interface. <strong>This action applies exclusively to elements of type <code>TabsWindow</code>.</strong>
   * @param {number} index. The index of the tab to select.
   */
  select(index: number): void;
  /**
   * Removes the pinned (fixed) state from the window, allowing the user to freely move or drag the window to a different position on the screen.
   */
  unpin(): void;
  /**
   * Updates the text displayed in the header label to reflect new information or changes, ensuring that the header accurately represents the current content or context of the section.
   * @param {string} label. The new label of the Header.
   */
  updateLabel(label: string): void;
  /**
   * Replaces the existing content with new or modified information, ensuring that the displayed data reflects the latest updates or changes.
   * @param {string | HTMLElement} content. The new content of the window.
   */
  updateContent(content: string | HTMLElement): void;
  /**
   * Updates an individual tab within a TabsWindow component and modifies its corresponding content section. <strong>This operation exclusively applies to elements of the TabsWindow type.</strong> Use this function to change tab labels, update active states, or refresh the content associated with a specific tab within the TabsWindow interface.
   * @param {number} index. The index of the tab to update.
   * @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
   * @param {string | HTMLElement} content. The new content of the tab.
   */
  update(index: number, label: string, content: string | HTMLElement): void;
}

export interface Dialog extends Window {}


declare global {
    interface Document {
        createElement(tagName: "smart-window"): Dialog;
        querySelector(selectors: "smart-window"): Dialog | null;
        querySelectorAll(selectors: "smart-window"): NodeListOf<Dialog>;
        getElementsByTagName(qualifiedName: "smart-window"): HTMLCollectionOf<Dialog>;
        getElementsByName(elementName: "smart-window"): NodeListOf<Dialog>;
    }
}


declare global {
    interface Document {
		/**
		* Returns the first element that is a descendant of node that matches selectors.
		*/
		querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
		querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
		querySelector<E extends Element = Element>(selectors: string): E | null;
		/**
		* Returns all element descendants of node that match selectors.
		*/
		querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
		querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
		querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
		/**
		 * Gets a collection of objects based on the value of the NAME or ID attribute.
		 * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
		 */
		getElementsByName(elementName: string): NodeListOf<HTMLElement>;
		/**
		 * Retrieves a collection of objects based on the specified element name.
		 * @param name Specifies the name of an element.
		 */
		getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
		getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
		getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
	}
}
		/**Controls the automatic capitalization behavior for user input as it is entered or edited. This setting specifies whether characters are auto-capitalized (e.g., sentences, words, or all characters) in the input field. <b>Note:</b> This property is only relevant when used with the <code>MultilinePromptWindow</code> component. */
export declare type WindowAutoCapitalize = 'none' | 'characters' | 'words';
/**Specifies the visual presentation of characters entered within the input field. For example, this setting can control whether characters are shown as plain text or masked (such as for password fields). <b>This option applies specifically to the Prompt Window component.</b> */
export declare type WindowDisplayMode = 'default' | 'escaped';
/**''<br/><br/>Applicable to <code>TabsWindow</code> components when they are docked within a <code>DockingLayout</code> Custom Element.<br/><br/>This property specifies the valid drop locations for the window—and its tab items—inside the <code>DockingLayout</code>. The property accepts an array of positional values, allowing you to define multiple allowable drop zones.<br/><br/><br/><br/>Details:<br/><br/>  Positions prefixed with <code>'layout-'</code> apply to each individual tab item (child element) of the <code>TabsWindow</code> being dragged. These determine where tab items can be dropped within the overall layout, outside their original container.
<br/>  Other position values (without the <code>'layout-'</code> prefix) indicate allowed drop positions directly within the hovered target <code>TabsWindow</code>, specifying where the whole window or its tabs can be placed relative to the target window.
<br/><br/><br/>Notes:<br/><br/>  This property is used exclusively by <code>jqxDockingLayout</code> custom elements.
<br/>  It controls the possible drop targets—both at the window and tab levels—within the <code>DockingLayout</code> environment.
<br/><br/><br/>Allowed Values:  <br/>The array values specify the permitted drop positions. Refer to the documentation for a complete list of supported position strings. */
export declare type WindowDropPosition = 'all' | 'top' | 'bottom' | 'left' | 'right' | 'center' | 'header' | 'layout-top' | 'layout-bottom' | 'layout-left' | 'layout-right';
/**Specifies the exact placement or alignment of the footer section within the window element, such as positioning it at the bottom, fixed, absolute, or relative to other content. This property controls where the footer appears in relation to the window’s layout. */
export declare type WindowFooterPosition = 'bottom' | 'none';
/**Determines the position of the Tab Strip within the TabsWindow.  <br/>Note: This property applies exclusively to the TabsWindow component. */
export declare type TabPosition = 'top' | 'bottom' | 'left' | 'right' | 'hidden';
/**Specifies how the window can be resized by the user.<br/><br/>Available resizing modes:<br/><br/><br/>  none – Disables all window resizing; the window size is fixed.
<br/>  vertical – Allows the window to be resized only vertically (top and bottom edges).
<br/>  horizontal – Allows the window to be resized only horizontally (left and right edges).
<br/>  both – Enables both horizontal and vertical resizing; the window can be resized in any direction.
<br/>  top – The window can only be resized by dragging the top edge.
<br/>  bottom – The window can only be resized by dragging the bottom edge.
<br/>  left – The window can only be resized by dragging the left edge.
<br/>  right – The window can only be resized by dragging the right edge.
<br/><br/><br/>Choose the desired mode to control which edges of the window users can drag to resize, or to prevent resizing entirely. */
export declare type WindowResizeMode = 'none' | 'horizontal' | 'vertical' | 'both' | 'top' | 'bottom' | 'left' | 'right';
/**Specifies how the user is allowed to navigate between different tabs within the interface. This property is relevant only when using the TabsWindow component. */
export declare type TabSelectionMode = 'click' | 'dblclick' | 'mouseenter' | 'none';
/**Specifies when the close button is visible—either only when a tab is selected or always visible on all tabs.  <br/>Note: This property applies exclusively to the <code>TabsWindow</code> component. */
export declare type WindowTabCloseButtonMode = 'default' | 'selected';
/**Specifies how the scroll buttons for tabs are displayed or behave. This option is only relevant when the tabLayout property is set to 'scroll', allowing tabs to be scrolled horizontally. Note: This property applies exclusively to the TabsWindow component. */
export declare type Overflow = 'auto' | 'hidden' | 'scroll';
/**Defines or retrieves the position of the scroll buttons located within the tab header of a TabsWindow component. This setting is exclusively applicable to TabsWindow instances and allows you to control where the scroll buttons appear (for example, at the start, end, or both ends of the tab header). */
export declare type LayoutPosition = 'near' | 'far' | 'both';
/**Defines or retrieves the orientation of the text displayed in the tab labels within the TabsWindow component. This property determines whether the tab text is laid out horizontally or vertically. <br/><br/>Note: This property is exclusively applicable to the TabsWindow component and has no effect on other components. */
export declare type Orientation = 'horizontal' | 'vertical';
/**Specifies the text-wrapping behavior for the input field.  <br/><b>Note:</b> This property is only relevant when used with the <code>MultilinePromptWindow</code> component. */
export declare type WindowWrap = 'hard' | 'soft' | 'off';
