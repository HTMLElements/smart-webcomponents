import  {BaseElement, Animation} from "./smart.element"

export interface EditorProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Automatically loads the last saved state of the editor (from local storage) on element initialization. An id must be provided in order to load a previously saved state.
   * Default value: false
   */
  autoLoad?: boolean;
  /**
   * Automatically saves the current content of the editor. Saving happens at time intervas determined by the autoSaveInterval property while the element on focus. An id must be provided to the element in order to store the state.
   * Default value: false
   */
  autoSave?: boolean;
  /**
   * The interval that determines the interval to automatically save the state of the Editor when the autoSave property is set.
   * Default value: false
   */
  autoSaveInterval?: boolean;
  /**
   * A formatting function for the char counter. Takes two arguments: chars - the current number of characters inside the Editor.maxCharCount - the maximum number of characters inside the Editor.
   * Default value: null
   */
  chartCountFormatFunction?: any;
  /**
   * Sets the Editor's Data Export options.
   * Default value: [object Object]
   */
  dataExport?: EditorDataExport;
  /**
   * Enables or disables the Editor.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Disables content editing inside Editor.
   * Default value: false
   */
  disableEditing?: boolean;
  /**
   * Determines the edit mode for the Editor. By default the editor's content accepts and parses HTML. However if set to 'markdown' the Editor can be used as a full time Markdown Editor by parsing the makrdown to HTML in preview mode.
   * Default value: html
   */
  editMode?: EditMode;
  /**
   * Determines whether the HTML returned from the value property or displayed by Preview mode is encoded or not
   * Default value: false
   */
  enableHtmlEncode?: boolean;
  /**
   * Determines whether the Tab key can insert tab chars inside the Editor or change focus (default)
   * Default value: false
   */
  enableTabKey?: boolean;
  /**
   * Determines whether the Toolbar is hidden or not.
   * Default value: false
   */
  hideToolbar?: boolean;
  /**
   * Determines whether the Inline Toolbar is hidden or not.
   * Default value: false
   */
  hideInlineToolbar?: boolean;
  /**
   * Sets the content of the Editor. Similar to value property allows to set the content of the editor.
   * Default value: "en"
   */
  innerHTML: string;
  /**
   * Defines an offset(x,y) for the Inline Toolbar positioning on the page.
   * Default value: [0, -5]
   */
  inlineToolbarOffset?: number[];
  /**
   * Determines the iframe settings of the Editor. When enabled the contents of the Editor are placed inside an iframe, isolated in a separate dom. The element allows to insert external resources into the iframe if needed.
   * Default value: [object Object]
   */
  iframeSettings?: EditorIframeSettings;
  /**
   * Determines the format of the content that will be pasted inside the Editor.
   * Default value: keepFormat
   */
  pasteFormat?: PasteFormat;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets a limit on the number of chars inside the Editor. 
   * Default value: null
   */
  maxCharCount?: number;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownName": "Invalid property name: ''!",
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
   *     "invalidValue": ".",
   *     "incorrectArgument": ".",
   *     "permissionsRequired": ".",
   *     "ok": "Ok",
   *     "cancel": "Cancel",
   *     "alignLeft": "Align Left",
   *     "alignCenter": "Align Center",
   *     "alignRight": "Align Right",
   *     "alignJustify": "Align Justify",
   *     "segoeUi": "Segoe UI",
   *     "arial": "Arial",
   *     "georgia": "Georgia",
   *     "impact": "Impact",
   *     "tahoma": "Tahoma",
   *     "timesNewRoman": "Times New Roman",
   *     "verdana": "Verdana",
   *     "p": "Paragraph",
   *     "pre": "Code",
   *     "code": "Code",
   *     "blockquote": "Quotation",
   *     "h1": "Heading 1",
   *     "h2": "Heading 2",
   *     "h3": "Heading 3",
   *     "h4": "Heading 4",
   *     "h5": "Heading 5",
   *     "h6": "Heading 6",
   *     "bold": "Bold",
   *     "italic": "Italic",
   *     "underline": "Underline",
   *     "strikethrough": "Strikethrough",
   *     "orderedlist": "Ordered List",
   *     "unorderedlist": "Unordered List",
   *     "subscript": "Subscript",
   *     "superscript": "Superscript",
   *     "alignment": "Alignments",
   *     "fontname": "Font Name",
   *     "fontsize": "Font Size",
   *     "formats": "Formats",
   *     "backgroundcolor": "Background Color",
   *     "fontcolor": "Font Color",
   *     "redo": "Redo",
   *     "undo": "Undo",
   *     "indent": "Indent",
   *     "outdent": "Outdent",
   *     "createlink": "Hyperlink",
   *     "hyperlink": "Hyperlink",
   *     "editlink": "Hyperlink",
   *     "removelink": "Remove link",
   *     "openlink": "Open link",
   *     "image": "Image",
   *     "table": "Table",
   *     "lowercase": "Lower Case",
   *     "uppercase": "Upper Case",
   *     "print": " Print",
   *     "cut": " Cut",
   *     "copy": " Copy",
   *     "paste": " Paste",
   *     "clearformat": "Clear Format",
   *     "fullscreen": "Full Screen",
   *     "restore": "Restore Screen",
   *     "sourcecode": "Source Code",
   *     "preview": "Preview",
   *     "splitmode": "Split Editor",
   *     "address": "Web Address",
   *     "text": "Display Text",
   *     "addressPlaceholder": "http://example.com",
   *     "textPlaceholder": "Enter Text",
   *     "targetPlaceholder": "Select Target",
   *     "titlePlaceholder": "Enter a Title",
   *     "urlPlaceholder": "http://example.com/image.png",
   *     "captionPlaceholder": "Caption",
   *     "altPlaceholder": "Alternative Text",
   *     "widthPlaceholder": "auto",
   *     "heightPlaceholder": "auto",
   *     "target": "Open Link in",
   *     "linkBlankDescr": "New Window",
   *     "linkSelfDescr": "Same Window",
   *     "linkParentDescr": "Parent Frame",
   *     "linkTopDescr": "Full Body of the Window",
   *     "linkCustomDescr": "Custom Frame Name",
   *     "title": "Title",
   *     "url": "You can also provide the URL to an image",
   *     "width": "Width",
   *     "height": "Height",
   *     "alt": "Alternative Text",
   *     "caption": "Caption",
   *     "display": "Display",
   *     "displayPlaceholder": "Display",
   *     "displayBlock": "Block",
   *     "displayInline": "Inline",
   *     "draggable": "Enable Dragging",
   *     "resizable": "Enable Resizing",
   *     "browse": "Browse",
   *     "connectionError": ": File Upload requires connection to the server.",
   *     "wrongItemIndex": ": There is no file with such an index in the list of uploaded files.",
   *     "tooLongFileName": ": File name is too long.",
   *     "totalFiles": "Total files: ",
   *     "cancelFile": "Cancel File",
   *     "dashedborders": "Dashed Borders",
   *     "altrows": "Alternate Rows",
   *     "insertRowBefore": "Insert Row Before",
   *     "insertRowAfter": "Insert Row After",
   *     "deleteRow": "Delete Row",
   *     "insertColumnLeft": "Insert Column Left",
   *     "insertColumnRight": "Insert Column Right",
   *     "deleteColumn": "Delete Column",
   *     "alignTop": "Align Top",
   *     "alignMiddle": "Align Middle",
   *     "alignBottom": "Align Bottom",
   *     "delete": "Delete",
   *     "tablerows": "Table Rows",
   *     "tablecolumns": "Table Columns",
   *     "tablevalign": "Table Cell Vertical Align",
   *     "tablestyle": "Table Style",
   *     "tableheader": "Table Header",
   *     "buttonLabel": "Custom Table",
   *     "pasteLabel": "Choose the paste format action:",
   *     "cols": "Columns",
   *     "rows": "Rows",
   *     "alphabet": "abcdefghijklmnopqrstuvwxyz",
   *     "header": "Header",
   *     "column": "Column",
   *     "plainText": "Plain Text",
   *     "keepFormat": "Keep Format",
   *     "cleanFormat": "Clean Format",
   *     "roleDescription": "Text Editor",
   *     "iframeTitle": "Editor Content is Encloused in it's own DOM inside an iFrame",
   *     "toolbarButtonAriaLabel": "Toolbar Toggle Button",
   *     "primaryToolbarAriaLabel": "Primary Toolbar",
   *     "secondaryToolbarAriaLabel": "Secondary Toolbar",
   *     "inputAriaLabel": "Enter Text"
   *   }
   * }
   */
  messages?: any;
  /**
   * Determines the placeholder that will be shown when there's no content inside the Editor.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines whether the value is sanitized from XSS content or not. When enabled scripts and other XSS vulnerabilities are not allowed to exist inside the Editor's as HTML content.
   * Default value: false
   */
  sanitized?: boolean;
  /**
   * Determines whether the char counter is visible or not. When enabled it is displayed in the bottom right corner. If maxCharCount is set and the content characters are equal or more than 70% of the maximum char count the counter is colored in order to warn the user. If the char count is equal or more than 90% the counter is again colored with a different warning color to indicate that the counter is near maximum. When maximum is reached, text input is not allowed.
   * Default value: false
   */
  showCharCount?: boolean;
  /**
   * Determines the refresh interval for the Source Code/Preview Panel when Split Mode is enabled. 
   * Default value: 100
   */
  splitModeRefreshTimeout?: number;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines the Toolbar items list. Each item can be string pointing to the name of the item or an object that defines a custom item or adds aditional settings to an item. The name of the items are case insensitive. An object definition should contain a name attribute that refers to the name of the item when modifing an existing toolbar item. The name attribute determines the action of the item. If set to 'custom' it is possible to create a custom toolbar item. If name attribute is not set or not valid it is treated as a separator, no a toolbar item. The following items are supported by default by the Editor: SourceCode - shows the HTML/Preview Panel by hiding the input panel. Item type - 'Toggle button'.SplitMode - shows both input and HTML/Preview Panel by splitting the Editor content in two sections. Item type - 'Toggle button'FullScreen - fits the viewport with the Editor by expanding it over the page content. Item type - 'Toggle button'.Alignment - aligns the selected content. Item type - 'Drop down'.FontName - changes the font family of the selected content. Item type - 'drop-down'.FontSize - changes the font size of the selected content. Item type - 'drop-down'.Formats - changes the format of the current selection. Itme type - 'drop-down'.TableRows - allows to insert/remove a row into a selected table element. Item type - 'drop-down'.TableColumns - allows to insert/remove a column into a selected table element. Itme type - 'drop-down'.TableVAlign - sets the vertical alignment of a selected table cell. Item type - 'drop-down'.TableStyle - sets additional styling to a selected table inside the Editor. Item type - 'drop-down'.BackgroundColor - changes the background color of the current selection. Item type - 'color-input'.FontColor - changes the font color of the current selection. Item type = 'color-input'.Bold - sets the currently selected text as bold or not. Item type - 'button'.Italic - sets the currently selected text as italic. Item type - 'button'. Underline - sets the currently selected text as underlined. Itme type - 'button'.Strikethrough - set the currently selected text as strikethrough. Item type - 'button'.Delete - deletes the current selection. Item type - 'button'.Undo - undoes the last operation. Item type - 'button'.Redo - redoes the previous operation. Item type - 'button'.Indent - indents the current selection once. Item type - 'button'.Outdent - outdents the current selection once. Item type - 'button'.OpenLink - triggers a hyperlink. Item type - 'button'.EditLink - creates/edits the selected hyperlink. Item type - 'button'.CreateLink - creates/edits the selected hyperlink. Item type - 'button'.RemoveLink - removes the currently selected hyperlink. Item type - 'button'.Hyperlink - same as createLink, triggers a Dialog Window for link creation. Item type - 'button'.Cut - Cuts the currently selected text. Item type - 'button'.Copy - copies the currently selected text. Item type - 'button'Paste - pastes the currenly copied/cut text from the Clipboard. Item type = 'button' or 'drop-down' when advanced attribute is set to 'true'.Image - triggers a Dialog Window to insert/edit an image. Item type - 'button'.LowerCase - changes the current selection to lower case. Item type - 'button'.UpperCase - changes the current selection to upper case. Item type - 'button'.Print - opens the browser print preview window. Item type - 'button'.Caption - insert/remove a caption when a table is selected. Item type - 'button'.ClearFormat - removes the formatting of the currntly selected text. Item type - 'button'.Table - triggers a Dialog Window to insert a table. Item type - 'button'.TableHeader - insert/remove a header row to the currently selected table. Item type - 'button'.OrderedList - insert/remove an order list. Item type = 'button'.UnorderedList - insert/remove an unordered list. Item type - 'button'.Subscript - changes the currently selected text to subscript. Item type - 'button'.Superscript - changes the currently selected text to superscript. Item type - 'button'.  The inlineToolbarItems attribute is applicable only to the following items: 'table', 'image', 'hyperlink'. It accepts the same type of value as toolbarItems property but the toolbar items will be placed insinde the Inline Toolbar instead.
   * Default value: bold,italic,underline,|,formats,alignment,orderedList,unorderedList,|,hyperlink,image,|,sourceCode,redo,undo
   */
  toolbarItems?: ToolbarItem[];
  /**
   * Determines the format of the content that will be pasted inside the Editor.
   * Default value: toggle
   */
  toolbarViewMode?: ToolbarViewMode;
  /**
   * Sticks the Toolbar to the top of the window and stays there while scrolling.
   * Default value: false
   */
  toolbarSticky?: boolean;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or gets the value of the Editor.
   * Default value: """"
   */
  value?: string;
}
/**
 jqxEditor represents an advanced HTML text editor which can simplify web content creation or be a replacement of your HTML/Markdown Text Areas.
*/
export interface Editor extends BaseElement, EditorProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered on blur if the content is changed.
	* @param event. The custom event.    */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered before a Toolbar action is started. The event can be canceled via event.preventDefault().
	* @param event. The custom event.    */
  onActionStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a Toolbar action has ended.
	* @param event. The custom event.    */
  onActionEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an image/table resizing has started.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an image/table resizing has ended.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the inline Toolbar is opened.
	* @param event. The custom event.    */
  onInlineToolbarOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the inline Toolbar is closed.
	* @param event. The custom event.    */
  onInlineToolbarClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Drop Down Toolbar is opened.
	* @param event. The custom event.    */
  onDropDownToolbarOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Drop Down Toolbar is closed.
	* @param event. The custom event.    */
  onDropDownToolbarClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered the Dialog Window is opened.
	* @param event. The custom event.    */
  onDialogOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered before the Dialog Window is opened. The event can be prevented via event.preventDefault().
	* @param event. The custom event.    */
  onDialogOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Dialog Window is closed.
	* @param event. The custom event.    */
  onDialogClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered before the Dialog Window is closed. The event can be prevented via event.preventDefault().
	* @param event. The custom event.    */
  onDialogClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the uploading of an image is successful.
	* @param event. The custom event.    */
  onImageUploadSuccess?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the uploading of an image is unsuccessful.
	* @param event. The custom event.    */
  onImageUploadFailed?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a Toolbar item is clicked.
	* @param event. The custom event.    */
  onToobarItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Blurs the content of the Editor.
   */
  blur(): void;
  /**
   * Clears the content of the Editor.
   */
  clearContent(): void;
  /**
   * Collapse the Toolbar if the <b>toolbarViewMode</b> is set to 'toggle'.
   */
  collapseToolbar(): void;
  /**
   * Disables a Toolbar item.
   * @param {string} itemName. The name of the toolbar item to disable.
   */
  disableToolbarItem(itemName: string): void;
  /**
   * Expand the Toolbar if the <b>toolbarViewMode</b> is set to 'toggle'.
   */
  expandToolbar(): void;
  /**
   * Enables a previously disabled Toolbar item.
   * @param {string} itemName. The name of the toolbar item to enable.
   */
  enableToolbarItem(itemName: string): void;
  /**
   * Executes a command via the native <b>execCommand</b> method. The method returns true or false depending on whether the execution was successful or not.
   * @param {string} commandName. The name of the command to execute.
   * @param {string | number} value?. The value for the command. Some commands require a value to be passed, others do not.
   * @returns {boolean}
   */
  executeCommand(commandName: string, value?: string | number): boolean;
  /**
   * Focuses the content of the Editor.
   */
  focus(): void;
  /**
   * Returns the number of characters inside the Editor's content. 
   * @returns {number}
   */
  getCharCount(): number;
  /**
   * Returns the current selection range. By default the result is an object of type Range, but if the <b>editMode</b> property is set to 'markdown' the returned value is an object indicating the start/end indexes of the current selection. 
   * @returns {any}
   */
  getSelectionRange(): any;
  /**
   * Selects the text inside Editor's content.
   */
  selectAll(): void;
  /**
   * Returns the content of the Editor as HTML. When <b>editMode</b> is set to 'markdown' the markdown is parsed and returned as HTML.
   * @returns {string}
   */
  getHTML(): string;
  /**
   * Returns the content of the Editor as text.
   * @returns {string}
   */
  getText(): string;
  /**
   * Applicable only when <b>editMode</b> is set to 'markdown'. Returns the Editor's content as markdown.
   * @returns {string}
   */
  getMarkdown(): string;
  /**
   * Selects a range of text inside the Editor.
   * @param {HTMLElement | Node} node. The node to be selected. It can be a text node or an HTML element.
   * @param {number} startIndex?. The start index of the node to select from. If not provided all node contents are selected.
   * @param {number} endIndex?. The end index of the node to select to. If not provided all node contents are selected.
   */
  selectRange(node: HTMLElement | Node, startIndex?: number, endIndex?: number): void;
  /**
   * Clears the local storage from previously stored states of the Editor with the current id.
   */
  clearState(): void;
  /**
   * Saves the current state of the Editor to local storage. Requires an id to be set to the Editor.
   */
  saveState(): void;
  /**
   * Loads the last stored state of the Editor from local storage. Requires an id to be set to the Editor.
   */
  loadState(): void;
  /**
   * Sets Editor into Split Mode. In split mode the HTML/Markdown editor and SourceCode/Preview panels are visible.
   * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
   */
  splitMode(value?: boolean): void;
  /**
   * Sets Editor into SourceCode/Preview Mode. In this mode the HTML view panel is displayed.
   * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
   */
  previewMode(value?: boolean): void;
  /**
   * Sets Editor into Full Screen Mode. If enabled the Editor is positioned above the page content and fills the screen.
   * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
   */
  fullScreenMode(value?: boolean): void;
  /**
   * Exports the content of the Editor in the desired format. The currently supported formats are: HTML, Markdown.
   * @param {string} dataFormat. The expected file format.
   * @param {any} callback?. A callback that is executed before the data is exported. Allows to modify the output.
   */
  exportData(dataFormat: string, callback?: any): void;
  /**
   * Opens the Print Preview Panel of the Browser to print Editor's content.
   */
  print(): void;
}

/**Sets the Editor's Data Export options. */
export interface EditorDataExport {
  /**
   * Sets a custom style object of the dataExport. 
   * Default value: null
   */
  style?: any;
  /**
   * Sets the exported file's name.
   * Default value: "jqxScheduler"
   */
  fileName?: string;
  /**
   * Sets the page orientation, when exporting to PDF.
   * Default value: "portrait"
   */
  pageOrientation?: string;
}

/**Determines the iframe settings of the Editor. When enabled the contents of the Editor are placed inside an iframe, isolated in a separate dom. The element allows to insert external resources into the iframe if needed. */
export interface EditorIframeSettings {
  /**
   * Determines the attributes and their values that will be set to the iframe. Here's how to define attributes: attributes: { height: 500 }
   * Default value: null
   */
  attributes?: any;
  /**
   * Enables/Disables the usage of an iframe for the content of the Editor.
   * Default value: false
   */
  enabled?: boolean;
  /**
   * Determines the resources like scripts/styles that will be imported into the iframe. Here's how to define resources: resources: { 'style': { href: 'styles.css' }, 'script': { src: 'index.js', type: 'module' }} 
   * Default value: "portrait"
   */
  resources?: string;
}

export interface ToolbarItem {
  /**
   * The unique name of the toolbar item. The list of all possible names is available in the description above.
   * Default value: 
   */
  name?: string | null;
  /**
   * Determines whethet the item is disabled or not.
   * Default value: false
   */
  disabled?: boolean | null;
  /**
   * Applicable only to item 'paste'. Transforms the type of the Paste toolbar item to drop down list with paste format options.
   * Default value: false
   */
  advanced?: boolean | null;
  /**
   * Allows to set a different dataSource for the toolbar items of type 'drop-down' or 'color-input.
   * Default value: 
   */
  dataSource?: any;
  /**
   * Defines the list of toolbar items for the Inline Toolbar. Accept the same values as toolbarItems property.
   * Default value: 
   */
  inlineToolbarItems?: any;
  /**
   * Allows to set predefined values for the Dialog Window of the following toolbar items: 'table', 'image', 'hyperlink'.
   * Default value: [object Object]
   */
  editor?: ToolbarItemEditor;
  /**
   * Allows to set a template for a custom Toolbar item when the name attribute is set to 'custom'.
   * Default value: null
   */
  template?: any;
  /**
   * Determines the width of the toolbar item.
   * Default value: 
   */
  width?: number | string | null;
}

/**Allows to set predefined values for the Dialog Window of the following toolbar items: 'table', 'image', 'hyperlink'. */
export interface ToolbarItemEditor {
  /**
   * Allows to preset the value for the hyperlink address field in the Dialog Window.
   * Default value: 
   */
  address?: string | null;
  /**
   * Allows to preset the value for the hyperlink target field in the Dialog Window.
   * Default value: 
   */
  target?: string | null;
  /**
   * Allows to preset the value for the hyperlink text field in the Dialog Window.
   * Default value: 
   */
  text?: string | null;
  /**
   * Allows to preset the value for the hyperlink/image title field in the Dialog Window.
   * Default value: 
   */
  title?: string | null;
  /**
   * Allows to preset the value for the image file uploader in the Dialog Window.
   * Default value: null
   */
  file?: any;
  /**
   * Allows to preset the value for the image alt field in the Dialog Window.
   * Default value: 
   */
  alt?: string | null;
  /**
   * Allows to preset the value for the image url field in the Dialog Window.
   * Default value: 
   */
  url?: string | null;
  /**
   * Allows to preset the value for the image/table width field in the Dialog Window.
   * Default value: 
   */
  width?: string | number;
  /**
   * Allows to preset the value for the image/table height field in the Dialog Window.
   * Default value: 
   */
  height?: string | number;
  /**
   * Allows to preset the value for the image caption field in the Dialog Window.
   * Default value: 
   */
  caption?: string | null;
  /**
   * Allows to preset the value for the image alignment field in the Dialog Window.
   * Default value: 
   */
  alignment?: string | null;
  /**
   * Allows to preset the value for the image display field in the Dialog Window.
   * Default value: 
   */
  display?: string | null;
  /**
   * Allows to preset the value for the image/table draggable field in the Dialog Window.
   * Default value: false
   */
  draggable?: boolean | null;
  /**
   * Allows to preset the value for the image/table resizable field in the Dialog Window.
   * Default value: false
   */
  resizable?: boolean | null;
  /**
   * Allows to preset the value for the table cols field in the Dialog Window.
   * Default value: 
   */
  cols?: number | string | null;
  /**
   * Allows to preset the value for the table rows field in the Dialog Window.
   * Default value: 
   */
  rows?: number | string | null;
  /**
   * Allows to preset the value for the table header field in the Dialog Window.
   * Default value: false
   */
  tableheader?: boolean | null;
  /**
   * Allows to preset the value for the table altrows field in the Dialog Window.
   * Default value: false
   */
  altrows?: boolean | null;
  /**
   * Allows to preset the value for the table dashedborders field in the Dialog Window.
   * Default value: false
   */
  dashedborders?: boolean | null;
}

declare global {
    interface Document {
        createElement(tagName: "smart-editor"): Editor;
        querySelector(selectors: "smart-editor"): Editor | null;
        querySelectorAll(selectors: "smart-editor"): NodeListOf<Editor>;
        getElementsByTagName(qualifiedName: "smart-editor"): HTMLCollectionOf<Editor>;
        getElementsByName(elementName: "smart-editor"): NodeListOf<Editor>;
    }
}

/**Determines the edit mode for the Editor. By default the editor's content accepts and parses HTML. However if set to 'markdown' the Editor can be used as a full time Markdown Editor by parsing the makrdown to HTML in preview mode. */
export declare type EditMode = 'html' | 'markdown';
/**Determines the format of the content that will be pasted inside the Editor. */
export declare type PasteFormat = 'prompt' | 'plainText' | 'keepFormat' | 'cleanFormat';
/**Determines the format of the content that will be pasted inside the Editor. */
export declare type ToolbarViewMode = 'toggle' | 'multiRow' | 'scroll';
