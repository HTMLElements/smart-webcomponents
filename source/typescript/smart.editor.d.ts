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
   * The property that determines the interval to automatically save the state of the Editor when the autoSave property is set.
   * Default value: 1000
   */
  autoSaveInterval?: number;
  /**
   * A formatting function for the char counter. Takes two arguments: chars - the current number of characters inside the Editor.maxCharCount - the maximum number of characters inside the Editor.
   * Default value: null
   */
  charCountFormatFunction?: any;
  /**
   * Determines the content filtering settings.
   * Default value: [object Object]
   */
  contentFiltering?: EditorContentFiltering;
  /**
   * Determines the context menu for the Editor. The context menu is triggered when the user right clicks on the content area of the Editor.
   * Default value: default
   */
  contextMenu?: EditorContextMenu;
  /**
   * Allows to customize default the context menu of the Editor. The property accepts an array of items which can be strings that represent the value of the item, or objects of the following format: { label: string, value: string }, where the label will be displayed and the value will be action value for the item. The property also accepts a function that must return an array of items with the following format function (target: HTMLElement, type: string, defaultItems: string[]) { return defaultItems } and the following arguments: target - the element that is the target of the context menu.type - the type of context menu ( whether it's a table, image, link or other)defaultItems - an array of strings which represent the default items for the context menu.
   * Default value: null
   */
  contextMenuDataSource?: string[] | { label: string, value: 'string' }[] | Function | null;
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
   * Disables the Quick Search Bar.
   * Default value: false
   */
  disableSearchBar?: boolean;
  /**
   * Determines the edit mode for the Editor. By default the editor's content accepts and parses HTML. However if set to 'markdown' the Editor can be used as a full time Markdown Editor by parsing the makrdown to HTML in preview mode.
   * Default value: html
   */
  editMode?: EditMode;
  /**
   * Determines whether the value returned from getHTML method and Source Code view are encoded or not.
   * Default value: false
   */
  enableHtmlEncode?: boolean;
  /**
   * Determines whether the Tab key can insert tab chars inside the Editor or change focus (default)
   * Default value: false
   */
  enableTabKey?: boolean;
  /**
   * Determines the time interval between results for the find and replace and search bar features.
   * Default value: 50
   */
  findAndReplaceTimeout?: number;
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
   * Determines the file format of the image/video that are uploaded from local storage. By default images/videos are stroed as base64.
   * Default value: base64
   */
  imageFormat?: EditorImageFormat;
  /**
   * Sets the content of the Editor as HTML. Allows to insert text and HTML.
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
   *     "timeout": ": The import request has timed out.",
   *     "importError": ".",
   *     "exportError": ".",
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
   *     "video": "Video",
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
   *     "srcPlaceholder": "https://www.youtube.com/embed/video_link",
   *     "thumbnail": "Or provide a URL as a video thumbnail",
   *     "thumbnailPlaceholder": "https://www.link-to-thumbnail.jpg",
   *     "videoUrl": "Video URL",
   *     "videoUrlPlaceholder": "https://www.youtube.com/video_link",
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
   *     "url": "Or provide the URL to an image",
   *     "src": "Or provide the URL to an embed video",
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
   *     "inputAriaLabel": "Enter Text",
   *     "homeTab": "Home",
   *     "viewTab": "View",
   *     "insertTab": "Insert",
   *     "layoutTab": "Layout",
   *     "undoGroup": "Undo",
   *     "clipboardGroup": "Clipboard",
   *     "fontGroup": "Font",
   *     "paragraphGroup": "Paragraph",
   *     "editingGroup": "Editing",
   *     "tableGroup": "Tables",
   *     "imageGroup": "Images",
   *     "videoGroup": "Videos",
   *     "linkGroup": "Links",
   *     "viewsGroup": "Views",
   *     "deleteGroup": "Delete",
   *     "findandreplace": "Find and Replace",
   *     "requiredMessage": "The content of the Editor cannot be empty",
   *     "tableProperties": "Table Properties",
   *     "imageProperties": "Image Properties",
   *     "videoProperties": "Video Properties",
   *     "linkProperties": "Link Properties",
   *     "selectAll": "Select All",
   *     "deleteTable": "Delete Table",
   *     "deleteImage": "Delete Image",
   *     "deleteVideo": "Delete Video",
   *     "createLink": "Create Link",
   *     "deleteLink": "Delete Link",
   *     "copyImage": "Copy",
   *     "cutImage": "Cut",
   *     "copyVideo": "Copy",
   *     "cutVideo": "Cut",
   *     "find": "Find",
   *     "findPlaceholder": "",
   *     "replace": "Replace",
   *     "replaceWith": "Replace With",
   *     "replaceAll": "Replace All",
   *     "replacePlaceholder": "",
   *     "results": "Results",
   *     "resultsPlaceholder": "No match",
   *     "matchCase": "Match Case",
   *     "searchPlaceholder": "Search..."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets a to the element which can be used to submit the value of the Editor via a form.
   * Default value: null
   */
  name?: string | null;
  /**
   * Determines the format of the content that will be pasted inside the Editor.
   * Default value: keepFormat
   */
  pasteFormat?: PasteFormat;
  /**
   * Determines the placeholder that will be shown when there's no content inside the Editor.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Determines whether the clearFormat toolbar action should also remove inline styles from the currently selected node.
   * Default value: false
   */
  removeStylesOnClearFormat?: boolean;
  /**
   * Determines whether Editor's content is required ot not. If set and the Editor's content is empty, a notification will appear to notify that the Editor cannot be empty.
   * Default value: false
   */
  required?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
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
   * Determines the Toolbar items list. Each item can be string pointing to the name of the item or an object that defines a custom item or adds aditional settings to an item. The name of the items are case insensitive. An object definition should contain a name attribute that refers to the name of the item when modifing an existing toolbar item. The name attribute determines the action of the item. If set to 'custom' it is possible to create a custom toolbar item. If name attribute is not set or not valid it is treated as a separator, no a toolbar item. The following items are supported by default by the Editor: SourceCode - shows the HTML/Preview Panel by hiding the input panel. Item type - 'Toggle button'.SplitMode - shows both input and HTML/Preview Panel by splitting the Editor content in two sections. Item type - 'Toggle button'FullScreen - fits the viewport with the Editor by expanding it over the page content. Item type - 'Toggle button'.Alignment - aligns the selected content. Item type - 'Drop down'.FontName - changes the font family of the selected content. Item type - 'drop-down'.FontSize - changes the font size of the selected content. Item type - 'drop-down'.Formats - changes the format of the current selection. Itme type - 'drop-down'.TableRows - allows to insert/remove a row into a selected table element. Item type - 'drop-down'.TableColumns - allows to insert/remove a column into a selected table element. Itme type - 'drop-down'.TableVAlign - sets the vertical alignment of a selected table cell. Item type - 'drop-down'.TableStyle - sets additional styling to a selected table inside the Editor. Item type - 'drop-down'.BackgroundColor - changes the background color of the current selection. Item type - 'color-input'.FontColor - changes the font color of the current selection. Item type = 'color-input'.Bold - sets the currently selected text as bold or not. Item type - 'button'.Italic - sets the currently selected text as italic. Item type - 'button'. Underline - sets the currently selected text as underlined. Itme type - 'button'.Strikethrough - set the currently selected text as strikethrough. Item type - 'button'.Delete - deletes the current selection. Item type - 'button'.Undo - undoes the last operation. Item type - 'button'.Redo - redoes the previous operation. Item type - 'button'.Indent - indents the current selection once. Item type - 'button'.Outdent - outdents the current selection once. Item type - 'button'.OpenLink - triggers a hyperlink. Item type - 'button'.EditLink - creates/edits the selected hyperlink. Item type - 'button'.CreateLink - creates/edits the selected hyperlink. Item type - 'button'.RemoveLink - removes the currently selected hyperlink. Item type - 'button'.Hyperlink - same as createLink, triggers a Dialog Window for link creation. Item type - 'button'.Cut - Cuts the currently selected text. Item type - 'button'.Copy - copies the currently selected text. Item type - 'button'Paste - pastes the currenly copied/cut text from the Clipboard. Item type = 'button' or 'drop-down' when advanced attribute is set to 'true'.Image - triggers a Dialog Window to insert/edit an image. Item type - 'button'.Video - triggers a Dialog Window to insert/edit a video. Item type - 'button'.LowerCase - changes the current selection to lower case. Item type - 'button'.UpperCase - changes the current selection to upper case. Item type - 'button'.Print - opens the browser print preview window. Item type - 'button'.Caption - insert/remove a caption when a table is selected. Item type - 'button'.ClearFormat - removes the formatting of the currntly selected text. Item type - 'button'.Table - triggers a Dialog Window to insert a table. Item type - 'button'.TableHeader - insert/remove a header row to the currently selected table. Item type - 'button'.OrderedList - insert/remove an order list. Item type = 'button'.UnorderedList - insert/remove an unordered list. Item type - 'button'.Subscript - changes the currently selected text to subscript. Item type - 'button'.Superscript - changes the currently selected text to superscript. Item type - 'button'.FindAndReplace - opens a dialog that allows to find and replace text inside the Editor's content section. Item type - 'button'.  The inlineToolbarItems attribute is applicable only to the following items: 'table', 'image', 'hyperlink'. It accepts the same type of value as toolbarItems property but the toolbar items will be placed insinde the Inline Toolbar instead.
   * Default value: bold,italic,underline,|,formats,alignment,orderedList,unorderedList,|,hyperlink,image,video,|,sourceCode,redo,undo
   */
  toolbarItems?: ToolbarItem[];
  /**
   * Determines the toolbar mode of the Editor. The main toolbar of the Editor can appear as a Ribbon or as a Menu.
   * Default value: menu
   */
  toolbarMode?: ToolbarMode;
  /**
   * Allows to configure the SingleLineRibbon appearance by changing the order and items of the groups.
   * Default value: [{"name":"homeTab","groups":[{"name":"undoGroup","items":["undo","redo"]},{"name":"clipboardGroup","items":["cut","copy","paste"]},{"name":"fontGroup","items":["fontName","fontSize","backgroundColor","fontColor","clearFormat","formats","bold","italic","underline","strikethrough","superscript","subscript"]},{"name":"paragraphGroup","items":["orderedList","unorderedList","indent","outdent","alignment"]},{"name":"editingGroup","items":["findAndReplace"]}]},{"name":"insertTab","groups":[{"name":"tableGroup","items":["table"]},{"name":"imageGroup","items":["image"]}{"name":"videoGroup","items":["video"]},{"name":"linkGroup","items":["createLink","removeLink"]}]},{"name":"viewTab","groups":[{"name":"viewsGroup","items":["fullScreen","sourceCode","splitMode"]}]},{"name":"layoutTab","hidden":true,"groups":[{"name":"deleteGroup","items":["delete"]},{"name":"tableGroup","items":["table","tableHeader","tableRows","tableColumns","tableVAlign","tableStyle",""]},{"name":"imageGroup","items":["image","caption"]},{"name":"videoGroup","items":["video","caption"]}]}]
   */
  toolbarRibbonConfig?: { name: string, groups: { name: string, items: string[] }[] }[];
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
  /**
   * A function that can be used to completly customize the Editor dialog that is used to insert/edit tables/images/videos/hyperlinks. The function accepts two arguments: target - the target dialog that is about to be opened.item - the toolbar item object that trigger the dialog.
   * Default value: null
   */
  windowCustomizationFunction?: any;
}
/**
 jqxEditor represents an advanced HTML text editor which can simplify web content creation or be a replacement of your HTML/Markdown Text Areas.
*/
export interface Editor extends BaseElement, EditorProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered on blur if the content is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before the change.
   *  value - The new value after the change.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered after user input to indicate that the content is changed via user interaction.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before the input change.
   *  value - The new value after the input change.
   */
  onChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered before a Toolbar action is started. The event can be canceled via event.preventDefault().
	* @param event. The custom event. Custom data event was created with: ev.detail(name)
   *  name - The name of the action.
   */
  onActionStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a Toolbar action has ended.
	* @param event. The custom event. Custom data event was created with: ev.detail(name)
   *  name - The name of the action.
   */
  onActionEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a Context menu item has been clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(originalEvent, value)
   *  originalEvent - The original click event.
   *  value - The value of the item.
   */
  onContextMenuItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Context Menu is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onContextMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Context Menu is opening. The opening operation can be canceled via event.preventDefault().
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation.
   */
  onContextMenuOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Context Menu is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onContextMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Context Menu is closing. The closing operation can be canceled via event.preventDefault().
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation.
   */
  onContextMenuClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an image/table/video resizing has started.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an image/table/video resizing has ended.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The element that is resized (image/table or video).
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the inline Toolbar is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onInlineToolbarOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the inline Toolbar is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation.
   */
  onInlineToolbarOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the inline Toolbar is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onInlineToolbarClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the inline Toolbar is closing.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
   */
  onInlineToolbarClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Drop Down Toolbar is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onDropDownToolbarOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Drop Down Toolbar is opening. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation.
   */
  onDropDownToolbarOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Drop Down Toolbar is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onDropDownToolbarClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Drop Down Toolbar is closing. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation.
   */
  onDropDownToolbarClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered the Dialog Window is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item)
   *  target - The window that is the target of the operation.
   *  item - The toolbar item is the target of the operation.
   */
  onDialogOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered before the Dialog Window is opened. The event can be prevented via event.preventDefault().
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item)
   *  target - The window that is the target of the operation.
   *  item - The toolbar item that is the target of the operation.
   */
  onDialogOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Dialog Window is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item)
   *  target - The window that is the target of the operation.
   *  item - The toolbar item that is the target of the operation.
   */
  onDialogClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered before the Dialog Window is closing. The event can be prevented via event.preventDefault().
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item)
   *  target - The window that is the target of the operation.
   *  item - The toolbar item that is the target of the operation.
   */
  onDialogClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the uploading of an image/video is successful.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, filename, type, size, index, status)
   *  target - The file upload element that is the target of the operation.
   *  item - The toolbar item that is the target of the operation.
   *  filename - The name of the uploaded file.
   *  type - The type of the uploaded file.
   *  size - The size of the uploaded file.
   *  index - The index of the uploaded file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   */
  onImageUploadSuccess?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the uploading of an image/video is unsuccessful.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, filename, type, size, index, status)
   *  target - The file upload element that is the target of the operation.
   *  item - The toolbar item that is the target of the operation.
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   */
  onImageUploadFailed?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a Toolbar item is clicked.
	* @param event. The custom event. Custom data event was created with: ev.detail(originalEvent, value)
   *  originalEvent - The original click event.
   *  value - The name of the toolbar item that was clicked.
   */
  onToobarItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a message is closed.
	* @param event. The custom event. Custom data event was created with: ev.detail(instance)
   *  instance - The toast item that is the target of the operation.
   */
  onMessageClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a message is opened.
	* @param event. The custom event. Custom data event was created with: ev.detail(instance)
   *  instance - The toast item that is the target of the operation.
   */
  onMessageOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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
   * Executes a command via the native <b>execCommand</b> method. The method returns true or false depending on whether the execution was successful or not. The following list of commands can be eexecuted: <ul><li>bold - makes the currently selected content bold. Example: <b>editor.executeCommand('bold');</b></li><li>italic - makes the currently selected content italic. Example: <b>editor.executeCommand('italic');</b></li><li>undelined - makes the currently selected content underlined. Example: <b>editor.executeCommand('underline');</b></li><li>strikeThrough - applies a single line strike through formatting to the currently selected content. Example: <b>editor.executeCommand('strikeThrough');</b></li><li>superscript - sets the selected content as superscript. Example: <b>editor.executeCommand('superscript');</b></li><li>subscript - sets the selected content as superscript. Example: <b>editor.executeCommand('subscript');</b></li><li>uppercase - changes the case of the current selection to upper. Example: <b>editor.executeCommand('uppercase');</b></li><li>lowercase - changes the case of the current selection to lower. Example: <b>editor.executeCommand('lowercase');</b></li><li>foreColor - changes the font color of the current content selection. Example: <b>editor.executeCommand('foreColor', '#000000');</b></li><li>fontName - changes the font name for the selected content. Example: <b>editor.executeCommand('fontName', 'Arial');</b></li><li>fontSize - changes the font size of the currently selected content. Example: <b>editor.executeCommand('fontSize', '15px');</b></li><li>hiliteColor - changes the background color of current selection. Example: <b>editor.executeCommand('hiliteColor', '#000000');</b></li><li>justifyCenter - aligns the content to the center. Example: <b>editor.executeCommand('justifyCenter');</b></li><li>justifyFull - aligns the content to be fully justified. Example: <b>editor.executeCommand('justifyFull');</b></li><li>justifyLeft - aligns the content to the left. Example: <b>editor.executeCommand('justifyLeft');</b></li><li>justifyRight - aligns the content to the right. Example: <b>editor.executeCommand('justifyRight');</b></li><li>undo - allows to undo the previous action. Example: <b>editor.executeCommand('undo');</b></li><li>redo - allows to redo the previous actions. Example: <b>editor.executeCommand('redo');</b></li><li>createLink - creates a hyperlink in the content section of the Editor. Example: <b>editor.executeCommand('createLink', { text: 'Links', url: 'http://', title : 'Link' });</b></li><li>indent - indents the content with one level. Example: <b>editor.executeCommand('indent');</b></li><li>outdent - outdents the content with one level. Example: <b>editor.executeCommand('outdent');</b></li><li>insertHTML - insert an HTML content as string at the current cursor location. Example: <b>editor.executeCommand('insertHTML', '<p>Text</p>');</b></li><li>insertOrderedList - inserts a new numbered list item. Example: <b>editor.executeCommand('insertOrderedList');</b></li><li>insertUnorderedList - inserts a new bulleted list item. Example: <b>editor.executeCommand('insertUnorderedList');</b></li><li>removeFormat - removes the formatting styles from currently selected text. Example: <b>editor.executeCommand('removeFormat');</b></li><li>insertText - inserts a text at the current cursor location. Example: <b>editor.executeCommand('insertText', 'Some text to insert');</b></li><li>insertImage - inserts an image at the current cursor location. Example: <b>editor.executeCommand('insertImage', { url: 'https://www.htmlelements.com/demos/images/carousel-medium-2.jpg'});</b></li></ul>
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
   * Hides a specific message or all messages if no argument is provided.
   * @param {HTMLElement | string | number} item?. Hides a specific message. The argument can be a DOM reference to a specific item, it's index or it's id. If the argument is not provided then all messages will be closed.
   */
  hideMessage(item?: HTMLElement | string | number): void;
  /**
   * Hides the last shown message.
   */
  hideLastMessage(): void;
  /**
   * Shows a custom message inside the Editor.
   * @param {string} message. The text message to be displayed.
   * @param {any} settings?. Additional settings that can be applied to the Toast element that handles the messages. This parameter should contain only valid Toast properties and values.
   * @returns {HTMLElement | undefined}
   */
  showMessage(message: string, settings?: any): HTMLElement | undefined;
  /**
   * Selects the text inside Editor's content.
   */
  selectAll(): void;
  /**
   * Selects a range of text inside the Editor. The method will find the nodes containing the text from the start to the end indexes and will select them as ranges. However, currently only FireFox supports multiple range selection. The rest of the browsers will only select the first node. If the editor is in 'html' <b>editMode</b> then the expected text will be selected regardless of the browser because there's only one node inside the editor.
   * @param {number} startIndex. The start index to select from.
   * @param {number} endIndex. The end index to select to.
   */
  selectRange(startIndex: number, endIndex: number): void;
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
   * Exports the content of the Editor in the desired format. The currently supported formats are: HTML, Markdown and PDF.
   * @param {string} dataFormat. The expected file format.
   * @param {any} callback?. A callback that is executed before the data is exported. Allows to modify the output.
   */
  exportData(dataFormat: string, callback?: any): void;
  /**
   * Imports the content of a file to the Editor. The currently supported formats are: TXT or HTML.
   * @param {any} source. The url to the file or an object that defines settings for the Ajax request like url, timeput, etc. Object format: { url: string, type: string, data: object, timeout: number }
   * @param {any} settings?. Additional settings for the ajax request. Such as loadError function, contentType, etc. Format: { contentType: string, beforeSend: Function, loadError: Function, beforeLoadComplete: Function  }
   */
  importData(source: any, settings?: any): void;
  /**
   * Opens the Print Preview Panel of the Browser to print Editor's content.
   */
  print(): void;
  /**
   * Allows to update the settings of a single toolbar item. The method returns <b>true</b> if successful.
   * @param {string | number} name. The name of the toolbar item or it's index inside the <b>toolbarItems</b> array.
   * @param {any} settings. A settings object for the toolbar item. It should have the same definition as when defining a custom toolbar item. You can read more about it in the dedicated topic for the Editor Toolbar on the website.
   * @returns {boolean | undefined}
   */
  updateToolbarItem(name: string | number, settings: any): boolean | undefined;
}

/**Determines the content filtering settings. */
export interface EditorContentFiltering {
  /**
   * Determines which element attributes to filter.
   * Default value: null
   */
  attributes?: string[];
  /**
   * Determines whether to allow (whiteList) or remove (blackList) the specified attributes.
   * Default value: blackList
   */
  attributeFilterMode?: EditorContentFilteringAttributeFilterMode;
  /**
   * Determines which element tags to filter.
   * Default value: null
   */
  tags?: string[];
  /**
   * Determines whether to allow (whiteList) or remove (blackList) the specified tags.
   * Default value: blackList
   */
  tagFilterMode?: EditorContentFilteringTagFilterMode;
  /**
   * Determines which style attributes to filter.
   * Default value: null
   */
  styleAttributes?: string[];
  /**
   * Determines whether to allow (whiteList) or remove (blackList) the specified style attributes.
   * Default value: blackList
   */
  styleAttributeFilterMode?: EditorContentFilteringStyleAttributeFilterMode;
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
   * Allows to set predefined values for the Dialog Window of the following toolbar items: 'table', 'image', 'video', 'hyperlink'.
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

/**Allows to set predefined values for the Dialog Window of the following toolbar items: 'table', 'image', 'video', 'hyperlink'. */
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
   * Allows to preset the value for the image/video file uploader in the Dialog Window.
   * Default value: null
   */
  file?: any;
  /**
   * Allows to preset the value for the image/video alt field in the Dialog Window.
   * Default value: 
   */
  alt?: string | null;
  /**
   * Allows to preset the value for the image/video url field in the Dialog Window.
   * Default value: 
   */
  url?: string | null;
  /**
   * Allows to preset the value for the image/table/video width field in the Dialog Window.
   * Default value: 
   */
  width?: string | number;
  /**
   * Allows to preset the value for the image/table/video height field in the Dialog Window.
   * Default value: 
   */
  height?: string | number;
  /**
   * Allows to preset the value for the image/video caption field in the Dialog Window.
   * Default value: 
   */
  caption?: string | null;
  /**
   * Allows to preset the value for the image/video alignment field in the Dialog Window.
   * Default value: 
   */
  alignment?: string | null;
  /**
   * Allows to preset the value for the image/video display field in the Dialog Window.
   * Default value: 
   */
  display?: string | null;
  /**
   * Allows to preset the value for the image draggable field in the Dialog Window.
   * Default value: false
   */
  draggable?: boolean | null;
  /**
   * Allows to preset the value for the image/table/video resizable field in the Dialog Window.
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

/**Determines whether to allow (whiteList) or remove (blackList) the specified attributes. */
export declare type EditorContentFilteringAttributeFilterMode = 'blackList' | 'whiteList';
/**Determines whether to allow (whiteList) or remove (blackList) the specified tags. */
export declare type EditorContentFilteringTagFilterMode = 'blackList' | 'whiteList';
/**Determines whether to allow (whiteList) or remove (blackList) the specified style attributes. */
export declare type EditorContentFilteringStyleAttributeFilterMode = 'blackList' | 'whiteList';
/**Determines the context menu for the Editor. The context menu is triggered when the user right clicks on the content area of the Editor. */
export declare type EditorContextMenu = 'default' | 'browser' | 'none';
/**Determines the edit mode for the Editor. By default the editor's content accepts and parses HTML. However if set to 'markdown' the Editor can be used as a full time Markdown Editor by parsing the makrdown to HTML in preview mode. */
export declare type EditMode = 'html' | 'markdown';
/**Determines the file format of the image/video that are uploaded from local storage. By default images/videos are stroed as base64. */
export declare type EditorImageFormat = 'base64' | 'blob';
/**Determines the format of the content that will be pasted inside the Editor. */
export declare type PasteFormat = 'prompt' | 'plainText' | 'keepFormat' | 'cleanFormat';
/**Determines the toolbar mode of the Editor. The main toolbar of the Editor can appear as a Ribbon or as a Menu. */
export declare type ToolbarMode = 'menu' | 'singleLineRibbon';
/**Determines the format of the content that will be pasted inside the Editor. */
export declare type ToolbarViewMode = 'toggle' | 'multiRow' | 'scroll';
