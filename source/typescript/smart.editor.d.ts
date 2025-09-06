import  {BaseElement, Animation} from "./smart.element"

export interface EditorProperties {
  /**
   * An object that defines configuration settings for integrating AI capabilities within the grid, including options for enabling AI features, specifying AI service endpoints, adjusting model parameters, and customizing AI-driven functionality in the grid interface.
   * Default value: [object Object]
   */
  ai?: EditorAi;
  /**
   * Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled. For other values, animations are enabled according to the selected mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Automatically formats your text in real-time as you type, converting your input into structured elements such as bullet points, checkboxes, headings, and code blocks. This feature streamlines note-taking and writing by instantly applying consistent formatting without requiring manual markup or additional steps.
   * Default value: true
   */
  autoFormatting?: boolean;
  /**
   * Automatically restores the editor's most recently saved state from the browser's local storage when the element is initialized. To retrieve the correct saved state, you must specify a unique id that matches the one used during the saving process. Without this id, the editor cannot identify or load the previously stored state.
   * Default value: false
   */
  autoLoad?: boolean;
  /**
   * Automatically saves the editor's current content at regular intervals specified by the autoSaveInterval property, but only while the editor element is focused. To enable automatic saving, you must assign a unique id to the editor element; this id is used to store and retrieve the editor's saved state.
   * Default value: false
   */
  autoSave?: boolean;
  /**
   * Specifies the time interval, in milliseconds, at which the Editor automatically saves its state when the autoSave property is enabled. This property controls how frequently the Editor performs auto-save operations.
   * Default value: 1000
   */
  autoSaveInterval?: number;
  /**
   * A customizable formatting function for the character counter display in the Editor. This function receives two parameters:- chars: The current number of characters entered by the user in the Editor.- maxCharCount: The maximum allowed number of characters for the Editor input.The function should return a formatted string that represents the character count status, which will be shown in the Editor’s UI (for example, "25 / 100 characters"). This allows developers to define custom formats for how the character count is displayed to users.
   * Default value: null
   */
  charCountFormatFunction?: any;
  /**
   * Controls whether files are automatically uploaded immediately after the user selects them. When enabled, the upload process begins as soon as files are chosen. When disabled, file upload must be triggered manually. This property can be used to either retrieve the current auto-upload setting or update it.
   * Default value: false
   */
  autoUpload?: boolean;
  /**
   * Specifies the configuration for content filtering, allowing you to define which types of content are allowed or blocked according to the selected criteria or rules.
   * Default value: [object Object]
   */
  contentFiltering?: EditorContentFiltering;
  /**
   * Defines the CSS file(s) or styles to be applied to the content area within the Editor, allowing you to customize the appearance and formatting of the editor’s content.
   * Default value: ""
   */
  content_css?: string;
  /**
   * Specifies the items and structure of the context menu that appears when a user right-clicks within the Editor's content area. This setting allows you to customize which menu options are available based on the user's actions, providing tailored functionality and quick access to relevant commands.
   * Default value: default
   */
  contextMenu?: EditorContextMenu | string;
  /**
   * Enhances the Editor’s context menu by allowing you to customize its default items. This property accepts several formats:- 'Array of Items:'    You can provide an array where each item is either:    - A 'string' representing the value/action for the menu item.    - An 'object' in the format '{ label: string, value: string }', where:    - 'label' is the text displayed in the menu.    - 'value' is the action or identifier associated with that menu item.- 'Function:'    You can also pass a function that dynamically generates the array of menu items. The function receives the following parameters:    - 'target' ('HTMLElement'): The DOM element where the context menu is triggered.    - 'type' ('string'): The type or context of the menu (e.g., "table", "image", "link", or other relevant context types).    - 'defaultItems' ('string[]'): The default set of menu item identifiers for that context.    The function should return an array of menu items (as described above), which will be rendered in place of the default menu.'Example function signature:''''javascriptfunction (target: HTMLElement, type: string, defaultItems: string[]) {  return defaultItems;}'''This flexible property enables you to tailor the context menu based on the user's selection, the specific element targeted, or the context of the interaction, helping create a more intuitive and relevant editing experience.
   * Default value: null
   */
  contextMenuDataSource?: string[] | { label: string, value: 'string' }[] | Function | null;
  /**
   * Configures the available options for exporting data from the Editor, such as file formats (CSV, JSON, XML), export settings, and customization preferences. These settings determine how users can save or export content from the Editor.
   * Default value: [object Object]
   */
  dataExport?: EditorDataExport;
  /**
   * Controls whether the Editor component is active or inactive. When enabled, users can interact with and make changes within the Editor; when disabled, all editing functionalities are restricted or unavailable.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Prevents users from modifying or editing content within the Editor, making all content read-only.
   * Default value: false
   */
  disableEditing?: boolean;
  /**
   * Prevents the Quick Search Bar from appearing or being accessible to users, effectively disabling its functionality across the application.
   * Default value: false
   */
  disableSearchBar?: boolean;
  /**
   * Specifies the editing mode for the Editor component. By default, the Editor operates in standard HTML mode, allowing users to input and edit HTML content directly. In this mode, pressing Enter inserts line breaks or new paragraphs according to standard HTML behavior. When set to 'blockHtml', the Editor creates new DIV elements each time the user presses Enter, promoting a block-based editing experience. This mode also provides built-in commands tailored for structured data entry and manipulation.If set to 'markdown', the Editor functions as a dedicated Markdown editor. User input is interpreted as Markdown syntax, and the Editor automatically parses and converts the Markdown content into HTML for real-time preview. This enables a seamless writing and formatting workflow for users who prefer Markdown.Possible values:- 'html' (default): Accepts and parses HTML input.- 'blockHtml': Uses DIV tags for new blocks and offers additional commands for data input.- 'markdown': Enables Markdown syntax input with live HTML preview.
   * Default value: html
   */
  editMode?: EditMode | string;
  /**
   * Specifies whether the output from the getHTML method and the Source Code view should be HTML-encoded. When enabled, special characters in the code (such as , and &) are converted to their HTML entity equivalents, ensuring correct display and preventing unintended HTML rendering. When disabled, the values are returned as raw HTML without encoding.
   * Default value: false
   */
  enableHtmlEncode?: boolean;
  /**
   * Specifies whether pressing the Tab key inside the Editor will insert a tab character at the cursor position, or instead move focus to the next focusable element (default behavior). When enabled, Tab inserts a tab character; when disabled, Tab shifts focus as usual.
   * Default value: false
   */
  enableTabKey?: boolean;
  /**
   * Specifies the duration (in milliseconds) between consecutive result updates when using the "Find and Replace" and "Search Bar" features. Adjusting this interval can affect how quickly search results are refreshed and displayed to the user during searches.
   * Default value: 50
   */
  findAndReplaceTimeout?: number;
  /**
   * Specifies whether the Toolbar is visible or hidden. When set to true, the Toolbar will be hidden; when set to false, the Toolbar will be displayed.
   * Default value: false
   */
  hideToolbar?: boolean;
  /**
   * Specifies whether the Inline Toolbar is visible. If set to true, the toolbar will be hidden; if false, the toolbar will be displayed.
   * Default value: false
   */
  hideInlineToolbar?: boolean;
  /**
   * Specifies the file format for images or videos uploaded from local storage. By default, uploaded files are encoded and stored as base64 strings. This setting allows you to define or change the storage format as needed.
   * Default value: base64
   */
  imageFormat?: EditorImageFormat | string;
  /**
   * Automatically detects and sets the appropriate width for images pasted from the clipboard, ensuring consistent image display and optimal fit within the layout.
   * Default value: 0
   */
  imagePasteWidth?: number;
  /**
   * Automatically detects and sets the appropriate height for an image when it is pasted from the clipboard, ensuring correct aspect ratio and consistent display within the application.
   * Default value: 0
   */
  imagePasteHeight?: number;
  /**
   * Sets the content of the Editor using an HTML string. This method enables you to programmatically insert both plain text and HTML elements, including tags, formatting, and embedded media, directly into the Editor. Existing content will be replaced by the provided HTML. Use this to dynamically update the Editor's contents with custom HTML markup.
   * Default value: "en"
   */
  innerHTML: string;
  /**
   * Specifies the horizontal (x) and vertical (y) offset values used to adjust the position of the Inline Toolbar relative to its default placement on the page. This allows for precise positioning by shifting the toolbar along the x and y axes.
   * Default value: [0, -5]
   */
  inlineToolbarOffset?: number[];
  /**
   * Specifies the iframe configuration for the Editor. When enabled, the Editor's content is rendered within an isolated iframe, ensuring separation from the main DOM and preventing style or script conflicts. This option enhances content security and encapsulation. Additionally, it provides a mechanism to inject external resources (such as stylesheets or scripts) directly into the iframe environment if required.
   * Default value: [object Object]
   */
  iframeSettings?: EditorIframeSettings;
  /**
   * Gets or sets the unlockKey, a unique value required to activate or unlock the product’s features. Use this property to provide the unlock key when authorizing access, or retrieve the current unlock key associated with the product.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies the current language code used for localization, such as "en" for English or "fr" for French. This property works together with the messages property to display the appropriate localized messages based on the selected language. Use it to get or set the active language for your application's interface.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Specifies the maximum number of characters that can be entered within the Editor. Once this limit is reached, users will be unable to input additional characters.
   * Default value: null
   */
  maxCharCount?: number;
  /**
   * Defines or retrieves an object containing all user-visible strings (such as labels, tooltips, and messages) used by the widget for display purposes and localization. This property works together with the language setting to enable customization and translation of the widget’s interface into different languages. The object allows developers to provide localized string values, ensuring the widget content is appropriately translated for end users.
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
   * Assigns the specified element to the property †a†, designating it as the form control responsible for submitting the Editor's value. This allows the Editor’s content to be included in form submissions, ensuring its data is sent when the form is submitted.
   * Default value: null
   */
  name?: string | null;
  /**
   * Specifies the format (such as plain text, HTML, or Markdown) in which content will be inserted into the Editor when a user pastes data, ensuring consistent formatting and correct rendering within the editing environment.
   * Default value: keepFormat
   */
  pasteFormat?: PasteFormat | string;
  /**
   * Specifies the placeholder text or element displayed within the Editor when it is empty, guiding users on what to enter or indicating the expected content.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Specifies whether activating the clearFormat toolbar action should also remove any inline CSS styles (such as style attributes) applied to the currently selected node. When enabled, this option ensures that in addition to removing formatting tags (like &lt;b&gt;, &lt;i&gt;, etc.), all custom inline styles will be cleared from the selected content.
   * Default value: false
   */
  removeStylesOnClearFormat?: boolean;
  /**
   * Specifies whether the Editor's content is required. If this option is enabled and the Editor is left empty, a notification will be displayed indicating that the content cannot be empty and must be provided before proceeding.
   * Default value: false
   */
  required?: boolean;
  /**
   * Sets or retrieves a value that specifies whether the element's text direction and alignment are configured for right-to-left (RTL) languages, such as Arabic or Hebrew. This property ensures that the element displays its content in a manner appropriate for RTL locale support.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Indicates whether the value is sanitized to protect against Cross-Site Scripting (XSS) attacks. When enabled, any potentially malicious scripts, inline event handlers, or other XSS vulnerabilities are automatically removed from the HTML content entered in the Editor, ensuring only safe and clean HTML is allowed.
   * Default value: false
   */
  sanitized?: boolean;
  /**
   * Controls the visibility of the character counter. When enabled, the counter appears in the bottom right corner of the input field. If a maxCharCount value is set, the counter changes color to visually warn the user as they approach the character limit:- When the content length reaches 70% or more of the maximum, the counter displays a warning color.- At 90% or more of the maximum, the counter switches to a more prominent warning color, indicating that the limit is nearly reached.- Once the character count reaches the maximum limit, further text input is prevented.
   * Default value: false
   */
  showCharCount?: boolean;
  /**
   * Specifies if the editor enables spell checking, allowing the identification and highlighting of spelling errors within the text. If set to true, the editor will actively check and mark misspelled words as the user types. If set to false, spell checking functionality will be disabled.
   * Default value: true
   */
  spellCheck?: boolean;
  /**
   * Specifies the time interval, in milliseconds, at which the Source Code and Preview panels are automatically refreshed when Split Mode is active. Adjusting this value controls how frequently the panels update to reflect changes in real-time while Split Mode is enabled.
   * Default value: 100
   */
  splitModeRefreshTimeout?: number;
  /**
   * Defines the list of editor users for the application. Expects an array of user objects, each requiring the following properties:  - ''id'': A unique identifier for the user (string or number).  - ''name'': The display name of the user (string).  Each user object may also include the following optional properties:  - ''color'': A string specifying the user's color (e.g., HEX or CSS color value) for UI highlighting.  - ''image'': A string containing the URL of the user's avatar or profile image.
   * Default value: []
   */
  users?: any[];
  /**
   * Activates the editor pages functionality, allowing users to create, edit, and manage custom pages directly within the editor interface.
   * Default value: false
   */
  enablePages?: boolean;
  /**
   * Defines the editor pages by accepting an array of objects, where each object must include a 'label' property (a string representing the title or name of the page) and an 'innerHTML' property (a string containing the HTML content to be displayed on that page).
   * Default value: []
   */
  pages?: any[];
  /**
   * Specifies the URL endpoint used for file uploads. This property directly maps to the 'action' attribute of the upload form, determining where the uploaded data is sent on the server. For example, you can set the 'uploadUrl' property to the path of a server-side script such as a PHP file (e.g., "upload.php") that processes and handles incoming file uploads. Setting this property ensures that files selected by the user are transmitted to the specified server location when the upload form is submitted.
   * Default value: ""
   */
  uploadUrl?: string;
  /**
   * Defines or retrieves the URL used for the remove operation. This property corresponds to the form's action attribute and specifies the server endpoint that will handle item removal requests. For example, setting the removeUrl property to the path of a PHP file enables the server-side script to process and execute the removal action when triggered.
   * Default value: ""
   */
  removeUrl?: string;
  /**
   * Specifies the theme to be applied to the element. The selected theme controls the overall visual appearance, including colors, fonts, and styles, ensuring a consistent look and feel throughout the element.
   * Default value: ""
   */
  theme?: string;
  /**
   * 'Provides the configuration for the Toolbar items in the editor.'  The value can be either an array of strings—where each string specifies the name of a default toolbar item—or an array of objects for more advanced configuration and customization.  - 'String Values:'    Each string refers to a toolbar item by its name. Names are case-insensitive.- 'Object Values:'    An object can define a custom toolbar item, or modify/add settings to an existing one.      - The object must include a 'name' property (case-insensitive) to refer to a default toolbar item’s functionality.    - If 'name' is set to "custom", you can define a fully custom toolbar item.    - If the 'name' attribute is missing or invalid, the entry is treated as a separator rather than a toolbar item.'Supported Default Toolbar Items'  Below is a list of default toolbar items supported by the editor, along with their descriptions and types:  - 'SourceCode': Toggles between the HTML source/preview panel and the input panel. *Type: Toggle button*- 'SplitMode': Splits the editor view to show both input and preview panels. *Type: Toggle button*- 'FullScreen': Expands the editor to fill the viewport, overlaying the page content. *Type: Toggle button*- 'Alignment': Controls the alignment (left, center, right, justify) of the selected content. *Type: Dropdown*- 'FontName': Sets the font family of the selected content. *Type: Dropdown*- 'FontSize': Sets the font size of the selected content. *Type: Dropdown*- 'Formats': Changes the format/style of the current selection (e.g., paragraph, heading). *Type: Dropdown*- 'TableRows': Insert or remove table rows in the selected table. *Type: Dropdown*- 'TableColumns': Insert or remove table columns in the selected table. *Type: Dropdown*- 'TableVAlign': Sets vertical alignment of a selected table cell. *Type: Dropdown*- 'TableStyle': Applies additional styling to the selected table. *Type: Dropdown*- 'BackgroundColor': Changes the background color of the current selection. *Type: Color input*- 'FontColor': Changes the font color of the current selection. *Type: Color input*- 'Bold': Toggles bold for the selected text. *Type: Button*- 'Italic': Toggles italic for the selected text. *Type: Button*- 'Underline': Toggles underline for the selected text. *Type: Button*- 'Strikethrough': Toggles strikethrough for the selected text. *Type: Button*- 'Delete': Deletes the current selection. *Type: Button*- 'Undo': Reverts the last operation. *Type: Button*- 'Redo': Redoes the previously undone operation. *Type: Button*- 'Indent': Increases the indentation of the current selection. *Type: Button*- 'Outdent': Decreases the indentation of the current selection. *Type: Button*- 'OpenLink': Opens the hyperlink of the current selection. *Type: Button*- 'EditLink', 'CreateLink', 'Hyperlink': Creates, edits, or triggers a dialog for hyperlink management. *Type: Button*- 'RemoveLink': Removes a hyperlink from the selected text. *Type: Button*- 'Cut': Cuts the selected content. *Type: Button*- 'Copy': Copies the selected content. *Type: Button*- 'Paste': Pastes from the clipboard.      - *Type: Button*      - *Type: Dropdown* (when the "advanced" property is set to true)- 'Image': Opens a dialog to insert or edit an image. *Type: Button*- 'Video': Opens a dialog to insert or edit a video. *Type: Button*- 'LowerCase': Converts current selection to lowercase letters. *Type: Button*- 'UpperCase': Converts current selection to uppercase letters. *Type: Button*- 'Print': Opens the browser's print preview window. *Type: Button*- 'Caption': Inserts or removes a caption in the selected table. *Type: Button*- 'ClearFormat': Removes all formatting from the current selection. *Type: Button*- 'Table': Opens a dialog to insert a new table. *Type: Button*- 'TableHeader': Adds or removes a header row in the selected table. *Type: Button*- 'OrderedList': Inserts or removes an ordered (numbered) list. *Type: Button*- 'UnorderedList': Inserts or removes a bulleted list. *Type: Button*- 'Subscript': Formats the selected text as subscript. *Type: Button*- 'Superscript': Formats the selected text as superscript. *Type: Button*- 'FindAndReplace': Opens a dialog to find and replace text in the editor. *Type: Button*'Note:' Separators between toolbar items can be added by using an object without a valid 'name' property.---'inlineToolbarItems'  - This property is applicable only for the following toolbar items: 'table', 'image', and 'hyperlink'.- Accepts the same value types and structure as 'toolbarItems'.- The specified items will be displayed in an inline floating toolbar when any of these elements is selected in the editor.---'Summary of Usage Examples:''''json[  "Bold",  "Italic",  { "name": "FontSize", "options": ["Small", "Medium", "Large"] },  {},  { "name": "custom", "label": "Custom Action", "icon": "..." }]'''- The above would provide bold and italic buttons, a dropdown with custom font size options, a separator, and a custom toolbar item.---This configuration enables full customization of the editor’s toolbar to suit different user requirements, offering both default and extendable options.
   * Default value: bold,italic,underline,|,formats,alignment,orderedList,unorderedList,|,hyperlink,image,video,|,sourceCode,redo,undo
   */
  toolbarItems?: ToolbarItem[];
  /**
   * Specifies the display style of the Editor’s main toolbar. You can choose between "Ribbon" mode, which presents the toolbar as a horizontal panel with grouped command icons similar to modern office applications, or "Menu" mode, which organizes commands in drop-down menus for a more compact, traditional interface. This setting controls how users interact with the Editor’s primary tools and functions.
   * Default value: menu
   */
  toolbarMode?: ToolbarMode | string;
  /**
   * Enables customization of the SingleLineRibbon's appearance by allowing you to modify the arrangement and selection of group items, as well as reorder the groups themselves. This provides flexibility in tailoring the ribbon layout to better suit your application's specific needs.
   * Default value: [{"name":"homeTab","groups":[{"name":"undoGroup","items":["undo","redo"]},{"name":"clipboardGroup","items":["cut","copy","paste"]},{"name":"fontGroup","items":["fontName","fontSize","backgroundColor","fontColor","clearFormat","formats","bold","italic","underline","strikethrough","superscript","subscript"]},{"name":"paragraphGroup","items":["orderedList","unorderedList","indent","outdent","alignment"]},{"name":"editingGroup","items":["findAndReplace"]}]},{"name":"insertTab","groups":[{"name":"tableGroup","items":["table"]},{"name":"imageGroup","items":["image"]}{"name":"videoGroup","items":["video"]},{"name":"linkGroup","items":["createLink","removeLink"]}]},{"name":"viewTab","groups":[{"name":"viewsGroup","items":["fullScreen","sourceCode","splitMode"]}]},{"name":"layoutTab","hidden":true,"groups":[{"name":"deleteGroup","items":["delete"]},{"name":"tableGroup","items":["table","tableHeader","tableRows","tableColumns","tableVAlign","tableStyle",""]},{"name":"imageGroup","items":["image","caption"]},{"name":"videoGroup","items":["video","caption"]}]}]
   */
  toolbarRibbonConfig?: { name: string, groups: { name: string, items: string[] }[] }[];
  /**
   * Specifies the format (such as plain text, HTML, or Markdown) that will be applied to content when it is pasted into the Editor. This setting controls how the pasted data is interpreted and ensures that it is correctly displayed within the Editor environment.
   * Default value: toggle
   */
  toolbarViewMode?: ToolbarViewMode | string;
  /**
   * Fixes the Toolbar to the top of the browser window, ensuring it remains visible at all times, even as the user scrolls through the page content.
   * Default value: false
   */
  toolbarSticky?: boolean;
  /**
   * If set to true, this property prevents the element from receiving keyboard or programmatic focus, making it impossible for users to interact with it using the keyboard or assistive technologies.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Provides methods to retrieve or update the current content within the Editor. Use this property to access the existing value or assign a new value to the Editor programmatically.
   * Default value: """"
   */
  value?: string;
  /**
   * A customizable function that allows you to fully modify the appearance and behavior of the Editor dialog used for inserting or editing tables, images, videos, and hyperlinks. The function receives two arguments:- 'target': The dialog element instance that is about to be displayed, representing the specific editor dialog (e.g., Table, Image, Video, or Hyperlink dialog) being opened.- 'item': The toolbar item object that triggered the opening of the dialog, allowing you to access information about the source of the dialog request or customize its settings based on the initiating toolbar action.Use this function to tailor the dialog's UI elements, default values, event handlers, or any other properties, providing a flexible way to match the dialog experience to your application's needs.
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
   * This event is triggered when an element loses focus (blur event) and its content has been modified since it last received focus.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before the change.
   *  value - The new value after the change.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered immediately after the user modifies the content through direct input, such as typing, pasting, or deleting text. It serves as a notification that the content has changed specifically due to user interaction, allowing you to respond to updates made by the user in real time.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The old value before the input change.
   *  value - The new value after the input change.
   */
  onChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired immediately before a Toolbar action begins execution, allowing developers to intervene or modify behavior as needed. By invoking event.preventDefault() within the event handler, you can cancel the pending Toolbar action, preventing it from proceeding. This provides an opportunity to implement custom validation, confirmation prompts, or other pre-action logic before the Toolbar action is carried out.
	* @param event. The custom event. Custom data event was created with: ev.detail(name)
   *  name - The name of the action.
   */
  onActionStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered after a Toolbar action has been completed. It signifies that all processes related to the action, such as updating the UI or executing related logic, have finished. Use this event to perform any follow-up tasks when a Toolbar action concludes.
	* @param event. The custom event. Custom data event was created with: ev.detail(name)
   *  name - The name of the action.
   */
  onActionEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user selects and clicks on an item within the context menu. It allows you to execute custom logic in response to specific context menu actions, providing access to details about which menu item was clicked and the relevant context of the interaction.
	* @param event. The custom event. Custom data event was created with: ev.detail(originalEvent, value)
   *  originalEvent - The original click event.
   *  value - The value of the item.
   */
  onContextMenuItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the user opens the context menu, typically by right-clicking or using a designated keyboard shortcut on an element. It allows developers to execute custom logic or modify the context menu's content before it is displayed to the user.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onContextMenuOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately before the context menu appears, typically as a result of a user right-clicking or performing a similar gesture. At this point, you have the opportunity to customize or modify the context menu, or to prevent the menu from opening entirely by calling event.preventDefault() within the event handler.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation.
   */
  onContextMenuOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the Context Menu is closed, either by user action (such as clicking outside the menu, selecting a menu item, or pressing the Escape key) or programmatically through the relevant API. Handlers for this event can be used to perform clean-up tasks or update the user interface in response to the Context Menu being dismissed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onContextMenuClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired just before the Context Menu begins to close. By calling event.preventDefault() within the event handler, you can cancel the closing action, allowing you to override or delay the default behavior based on custom logic.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation.
   */
  onContextMenuClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user initiates the resizing of an image, table, or video element. It indicates that the resizing operation has begun, allowing you to implement custom behaviors or UI updates in response to the start of a resize action.
	* @param event. The custom event.    */
  onResizeStart?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user has completed resizing an image, table, or video element. It fires after the resizing action ends, allowing you to perform actions such as saving the new dimensions or updating the layout in response to the change.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The element that is resized (image/table or video).
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the inline Toolbar becomes visible to the user, such as when a user selects text or performs an action that causes the Toolbar to appear within the interface. Use this event to run custom logic or adjust UI elements in response to the Toolbar opening.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onInlineToolbarOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired just before the inline Toolbar begins to open. Developers can intercept this event and prevent the Toolbar from opening by invoking event.preventDefault() within the event handler. This allows for conditional control over the Toolbar's visibility based on custom application logic.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation.
   */
  onInlineToolbarOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the inline toolbar is closed, either by user interaction (such as clicking outside the toolbar, pressing Esc, or selecting a toolbar option) or programmatically via code. It provides an opportunity to perform cleanup, update UI elements, or execute additional logic in response to the toolbar being dismissed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onInlineToolbarClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered immediately before the inline toolbar begins to close, allowing you to perform actions or cleanup tasks in response to the toolbar's closure.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
   */
  onInlineToolbarClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered each time the Drop Down Toolbar becomes visible to the user, such as when it is expanded or opened. You can use this event to execute custom logic whenever the toolbar is displayed, for example, to load dynamic content or adjust UI elements within the toolbar.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onDropDownToolbarOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered just before the Drop Down Toolbar begins to open. Within the event handler, you can call event.preventDefault() to cancel the opening operation, allowing you to customize or prevent the display of the toolbar based on specific conditions. This provides an opportunity to implement custom logic before the toolbar becomes visible to the user.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation.
   */
  onDropDownToolbarOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the Drop Down Toolbar is closed, either by user interaction (such as clicking outside the toolbar or selecting an option) or programmatically via the application's code. Use this event to perform actions or update the user interface in response to the toolbar being dismissed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, owner)
   *  target - The toolbar that is the target of the operation.
   *  owner - The tooltip target (the owner of the tooltip).
   */
  onDropDownToolbarClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired when the Drop Down Toolbar begins its closing process. Within the event handler, you can prevent the toolbar from closing by invoking event.preventDefault(). This provides an opportunity to execute custom logic, such as confirming the action with the user or validating conditions before allowing the toolbar to close.
	* @param event. The custom event. Custom data event was created with: ev.detail(target)
   *  target - The toolbar that is the target of the operation.
   */
  onDropDownToolbarClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the Dialog Window is successfully opened and becomes visible to the user.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item)
   *  target - The window that is the target of the operation.
   *  item - The toolbar item is the target of the operation.
   */
  onDialogOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired immediately before the Dialog Window begins to open, giving developers an opportunity to perform actions or modify options prior to rendering. You can cancel the default behavior and prevent the Dialog Window from opening by calling event.preventDefault() within the event handler.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item)
   *  target - The window that is the target of the operation.
   *  item - The toolbar item that is the target of the operation.
   */
  onDialogOpening?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the Dialog Window is closed by the user, either through clicking the close button, pressing the escape key, or programmatically via code. It allows developers to execute custom actions or clean up resources after the dialog has been dismissed.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item)
   *  target - The window that is the target of the operation.
   *  item - The toolbar item that is the target of the operation.
   */
  onDialogClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is fired immediately before the Dialog Window begins to close. It provides an opportunity to execute custom logic or perform validation before the dialog is dismissed. The closure of the dialog can be canceled by calling event.preventDefault() within the event handler.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item)
   *  target - The window that is the target of the operation.
   *  item - The toolbar item that is the target of the operation.
   */
  onDialogClosing?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an image or video file has been uploaded successfully to the server. It indicates the completion of the upload process without errors, allowing you to perform additional actions such as displaying a success message or updating the user interface.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, filename, type, size, index, status, serverResponse)
   *  target - The file upload element that is the target of the operation.
   *  item - The toolbar item that is the target of the operation.
   *  filename - The name of the uploaded file.
   *  type - The type of the uploaded file.
   *  size - The size of the uploaded file.
   *  index - The index of the uploaded file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   *  serverResponse - The response of the remote server.
   */
  onImageUploadSuccess?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an attempt to upload an image or video fails, indicating that the file was not successfully transferred to the server due to an error or interruption during the upload process.
	* @param event. The custom event. Custom data event was created with: ev.detail(target, item, filename, type, size, index, status, serverResponse)
   *  target - The file upload element that is the target of the operation.
   *  item - The toolbar item that is the target of the operation.
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   *  serverResponse - The response of the remote server.
   */
  onImageUploadFailed?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user clicks on an item within the Toolbar. It provides relevant information about the clicked item, allowing you to execute custom logic or actions in response to the user's interaction with the Toolbar.
	* @param event. The custom event. Custom data event was created with: ev.detail(originalEvent, value)
   *  originalEvent - The original click event.
   *  value - The name of the toolbar item that was clicked.
   */
  onToobarItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user closes a message, such as dismissing a notification or alert. It allows you to execute custom logic in response to the message being removed from the user interface.
	* @param event. The custom event. Custom data event was created with: ev.detail(instance)
   *  instance - The toast item that is the target of the operation.
   */
  onMessageClose?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user opens or views a message, indicating that the message content has become visible or active in the user interface. It can be used to track message engagement, update message status, or initiate follow-up actions when a message is accessed.
	* @param event. The custom event. Custom data event was created with: ev.detail(instance)
   *  instance - The toast item that is the target of the operation.
   */
  onMessageOpen?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Integrates a custom item into the editor’s toolbar. <br/><br/>**Example Usage:**<br/>```js<br/>editor.addToolbarItem({<br/>    name: 'customButton2',         // Unique identifier for the toolbar item<br/>    width: 100,                    // Width of the toolbar item in pixels<br/>    template: '<smart-button>Button2</smart-button>' // Custom HTML template defining the toolbar item's appearance and content<br/>});<br/>```<br/><br/>**Description:**  <br/>This method allows you to add a new, customizable button or element to the editor’s toolbar. You specify a unique name, the width, and provide an HTML template for the item’s content. This enables the creation of tailored toolbar controls to enhance your editor’s functionality according to your application’s needs.
   * @param {any} itemName. The toolbar item to be added
   */
  addToolbarItem(itemName: any): void;
  /**
   * Applies a blur effect to the content area of the Editor, visually obscuring text and elements to reduce readability while maintaining overall layout and structure. This feature is useful for masking sensitive information or creating a focus effect within the Editor interface.
   */
  blur(): void;
  /**
   * Removes all text and formatting from the Editor, resetting its content to an empty state.
   */
  clearContent(): void;
  /**
   * Collapse the toolbar when the <b>toolbarViewMode</b> property is set to <code>'toggle'</code>. This ensures that the toolbar is hidden or shown based on the toggle state, allowing for a dynamic and responsive user interface.
   */
  collapseToolbar(): void;
  /**
   * Prevents user interaction with the specified Toolbar item, making it inactive and visually indicating that it is disabled. The item remains visible but cannot be clicked or selected until re-enabled.
   * @param {string} itemName. The name of the toolbar item to disable.
   */
  disableToolbarItem(itemName: string): void;
  /**
   * Expands the Toolbar only when the <b>toolbarViewMode</b> property is set to <code>'toggle'</code>. When this mode is active, the Toolbar will automatically display its full set of options and controls as specified. If <b>toolbarViewMode</b> is set to another value, this expansion behavior will not occur.
   */
  expandToolbar(): void;
  /**
   * Restores the functionality of a Toolbar item that was previously disabled, allowing users to click or interact with it again. This action visually updates the item to indicate it is active and accessible within the Toolbar interface.
   * @param {string} itemName. The name of the toolbar item to enable.
   */
  enableToolbarItem(itemName: string): void;
  /**
   * Enhances the clarity, consistency, and completeness of the description:<br/><br/>---<br/><br/>Executes a command using the native <b>execCommand</b> method to modify the contents or formatting of the editor. This method returns <b>true</b> if the command executes successfully or <b>false</b> otherwise. You can use this function to apply a wide range of editing and formatting commands to the currently selected content, or at the current cursor position.<br/><br/>Supported commands include:<br/><br/><ul><br/>  <li><br/>    <b>bold</b>: Toggles bold formatting on the selected text.<br><br/>    <b>Example:</b> <code>editor.executeCommand('bold');</code><br/>  </li><br/>  <li><br/>    <b>italic</b>: Toggles italic formatting on the selected text.<br><br/>    <b>Example:</b> <code>editor.executeCommand('italic');</code><br/>  </li><br/>  <li><br/>    <b>underline</b>: Toggles underline formatting on the selected text.<br><br/>    <b>Example:</b> <code>editor.executeCommand('underline');</code><br/>  </li><br/>  <li><br/>    <b>strikeThrough</b>: Toggles strikethrough formatting on the selected text.<br><br/>    <b>Example:</b> <code>editor.executeCommand('strikeThrough');</code><br/>  </li><br/>  <li><br/>    <b>superscript</b>: Sets the selected text as superscript.<br><br/>    <b>Example:</b> <code>editor.executeCommand('superscript');</code><br/>  </li><br/>  <li><br/>    <b>subscript</b>: Sets the selected text as subscript.<br><br/>    <b>Example:</b> <code>editor.executeCommand('subscript');</code><br/>  </li><br/>  <li><br/>    <b>uppercase</b>: Converts the selected text to uppercase.<br><br/>    <b>Example:</b> <code>editor.executeCommand('uppercase');</code><br/>  </li><br/>  <li><br/>    <b>lowercase</b>: Converts the selected text to lowercase.<br><br/>    <b>Example:</b> <code>editor.executeCommand('lowercase');</code><br/>  </li><br/>  <li><br/>    <b>foreColor</b>: Changes the font color of the selected text.<br><br/>    <b>Example:</b> <code>editor.executeCommand('foreColor', '#000000');</code><br/>  </li><br/>  <li><br/>    <b>fontName</b>: Changes the font family of the selected text.<br><br/>    <b>Example:</b> <code>editor.executeCommand('fontName', 'Arial');</code><br/>  </li><br/>  <li><br/>    <b>fontSize</b>: Changes the font size of the selected text.<br><br/>    <b>Example:</b> <code>editor.executeCommand('fontSize', '15px');</code><br/>  </li><br/>  <li><br/>    <b>hiliteColor</b>: Changes the background color (highlight) of the selected text.<br><br/>    <b>Example:</b> <code>editor.executeCommand('hiliteColor', '#FFFF00');</code><br/>  </li><br/>  <li><br/>    <b>justifyCenter</b>: Aligns the selected content to the center.<br><br/>    <b>Example:</b> <code>editor.executeCommand('justifyCenter');</code><br/>  </li><br/>  <li><br/>    <b>justifyFull</b>: Justifies the selected content.<br><br/>    <b>Example:</b> <code>editor.executeCommand('justifyFull');</code><br/>  </li><br/>  <li><br/>    <b>justifyLeft</b>: Aligns the selected content to the left.<br><br/>    <b>Example:</b> <code>editor.executeCommand('justifyLeft');</code><br/>  </li><br/>  <li><br/>    <b>justifyRight</b>: Aligns the selected content to the right.<br><br/>    <b>Example:</b> <code>editor.executeCommand('justifyRight');</code><br/>  </li><br/>  <li><br/>    <b>undo</b>: Undoes the last editing operation.<br><br/>    <b>Example:</b> <code>editor.executeCommand('undo');</code><br/>  </li><br/>  <li><br/>    <b>redo</b>: Redoes the previously undone operation.<br><br/>    <b>Example:</b> <code>editor.executeCommand('redo');</code><br/>  </li><br/>  <li><br/>    <b>createLink</b>: Inserts a hyperlink at the current selection. Accepts an object with <code>text</code>, <code>url</code>, and <code>title</code> properties.<br><br/>    <b>Example:</b> <code>editor.executeCommand('createLink', { text: 'Link', url: 'https://example.com', title: 'Example Link' });</code><br/>  </li><br/>  <li><br/>    <b>indent</b>: Increases the indent level of the selected content.<br><br/>    <b>Example:</b> <code>editor.executeCommand('indent');</code><br/>  </li><br/>  <li><br/>    <b>outdent</b>: Decreases the indent level of the selected content.<br><br/>    <b>Example:</b> <code>editor.executeCommand('outdent');</code><br/>  </li><br/>  <li><br/>    <b>insertHTML</b>: Inserts an HTML string at the current cursor position.<br><br/>    <b>Example:</b> <code>editor.executeCommand('insertHTML', '&lt;p&gt;Text&lt;/p&gt;');</code><br/>  </li><br/>  <li><br/>    <b>insertOrderedList</b>: Inserts an ordered (numbered) list.<br><br/>    <b>Example:</b> <code>editor.executeCommand('insertOrderedList');</code><br/>  </li><br/>  <li><br/>    <b>insertUnorderedList</b>: Inserts an unordered (bulleted) list.<br><br/>    <b>Example:</b> <code>editor.executeCommand('insertUnorderedList');</code><br/>  </li><br/>  <li><br/>    <b>removeFormat</b>: Removes all formatting from the selected text.<br><br/>    <b>Example:</b> <code>editor.executeCommand('removeFormat');</code><br/>  </li><br/>  <li><br/>    <b>insertText</b>: Inserts plain text at the current cursor position.<br><br/>    <b>Example:</b> <code>editor.executeCommand('insertText', 'Some text to insert');</code><br/>  </li><br/>  <li><br/>    <b>insertImage</b>: Inserts an image at the current cursor position. Accepts an object with a <code>url</code> property.<br><br/>    <b>Example:</b> <code>editor.executeCommand('insertImage', { url: 'https://www.example.com/image.jpg' });</code><br/>  </li><br/></ul><br/><br/><b>Note:</b> Some commands may not be fully supported in all browsers due to the deprecated status of <code>execCommand</code>. Always test your implementation for compatibility with your target browsers.
   * @param {string} commandName. The name of the command to execute.
   * @param {string | number} value?. The value for the command. Some commands require a value to be passed, others do not.
   * @returns {boolean}
   */
  executeCommand(commandName: string, value?: string | number): boolean;
  /**
   * Sets the input focus to the Editor component, enabling users to interact with and edit its content directly (e.g., by typing or using keyboard shortcuts). This action ensures that keyboard events and commands are directed to the Editor.
   */
  focus(): void;
  /**
   * Returns the total number of characters currently present within the Editor's content, including spaces and special characters.
   * @returns {number}
   */
  getCharCount(): number;
  /**
   * Returns the current selection range within the editor. By default, this method returns an object of type Range, which represents the start and end positions of the selection as DOM nodes and offsets. However, if the <b>editMode</b> property is set to 'markdown', the method instead returns a plain object containing the numerical start and end indexes of the selection within the raw text content. This allows for consistent selection handling in both WYSIWYG and markdown editing modes.
   * @returns {any}
   */
  getSelectionRange(): any;
  /**
   * Returns the current content of the Editor as an HTML string. If <b>editMode</b> is set to 'markdown', the raw Markdown input is automatically parsed and converted to HTML before being returned. In all modes, the result is a well-formed HTML representation of the Editor's content, suitable for rendering in web pages or for further processing.
   * @returns {string}
   */
  getHTML(): string;
  /**
   * Returns the current contents of the Editor component as a plain text string, excluding any formatting or markup. This allows you to retrieve only the raw textual data entered by the user.
   * @returns {string}
   */
  getText(): string;
  /**
   * Conceals a specified message when an identifier is provided; if no identifier is given, all messages will be hidden.
   * @param {HTMLElement | string | number} item?. Hides a specific message. The argument can be a DOM reference to a specific item, it's index or it's id. If the argument is not provided then all messages will be closed.
   */
  hideMessage(item?: HTMLElement | string | number): void;
  /**
   * Conceals or removes the most recently displayed message from view on the user interface, ensuring it is no longer visible to the user.
   */
  hideLastMessage(): void;
  /**
   * Inserts a new custom Toolbar item into the editor.  <br/>For example, you can add a button with the following code:<br/>```javascript<br/>editor.insertToolbarItem({<br/>  name: 'customButton2',                    // Unique identifier for the toolbar item<br/>  width: 100,                               // Specifies the width of the toolbar item in pixels<br/>  template: '<smart-button>Button2</smart-button>' // The HTML template that defines the toolbar item's appearance and functionality<br/>});<br/>```<br/>This method allows you to extend the editor’s toolbar by specifying a unique name for the item, its display width, and a custom HTML template, such as a button or other UI component. This makes it easy to add interactive or specialized controls directly to your editor's toolbar.
   * @param {any} itemName. The toolbar item to be added
   * @param {number} index. The toolbar item's index
   */
  insertToolbarItem(itemName: any, index: number): void;
  /**
   * Displays a customizable message within the Editor interface, allowing users to present important information, instructions, or notifications directly inside the editing environment.
   * @param {string} message. The text message to be displayed.
   * @param {any} settings?. Additional settings that can be applied to the Toast element that handles the messages. This parameter should contain only valid Toast properties and values.
   * @returns {HTMLElement | undefined}
   */
  showMessage(message: string, settings?: any): HTMLElement | undefined;
  /**
   * Highlights and selects all text currently displayed within the Editor's content area, allowing users to easily copy, cut, or replace the selected text.
   */
  selectAll(): void;
  /**
   * Enhancement:<br/><br/>"Selects a specified range of text within the Editor based on provided start and end indexes. This method locates the DOM nodes containing the targeted text and creates selection ranges accordingly. Note that only Firefox currently supports selecting multiple, non-contiguous ranges; in other browsers, only the first corresponding node or range will be selected. If the editor is operating in 'html' <b>editMode</b>, the entire content is treated as a single node. As a result, the desired text range will be reliably selected across all browsers in this mode."
   * @param {number} startIndex. The start index to select from.
   * @param {number} endIndex. The end index to select to.
   */
  selectRange(startIndex: number, endIndex: number): void;
  /**
   * Removes all previously saved states associated with the current Editor's ID from the local storage. This ensures that any stored data related to this specific Editor instance is deleted, allowing for a fresh start or preventing data conflicts.
   */
  clearState(): void;
  /**
   * Persists the Editor’s current state to the browser’s local storage, allowing users to restore their work in future sessions. Note: An id property must be assigned to the Editor instance to uniquely identify and manage its saved data.
   */
  saveState(): void;
  /**
   * Restores the most recently saved state of the Editor from the browser’s local storage. To identify and retrieve the correct data, an id property must be assigned to the Editor instance. If no saved state exists for the specified id, the Editor will load with its default settings.
   */
  loadState(): void;
  /**
   * Enables Split Mode in the Editor. When Split Mode is active, both the HTML/Markdown editing panel and the Source Code/Preview panel are displayed side by side, allowing users to simultaneously view and edit the content along with its rendered output or source code. This mode enhances workflow by providing real-time feedback and easier navigation between editing and previewing.
   * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
   */
  splitMode(value?: boolean): void;
  /**
   * Switches the Editor between Source Code and Preview modes. When activated, this mode displays the HTML view panel, allowing users to directly edit or review the underlying HTML code.
   * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
   */
  previewMode(value?: boolean): void;
  /**
   * Removes a specified item from the Toolbar by its index.  <br/>For example, editor.removeToolbarItem(0) will remove the first item in the Toolbar.  <br/>Use this method to dynamically update the Toolbar based on user interaction or application state.
   * @param {number} index. The toolbar item's index
   */
  removeToolbarItem(index: number): void;
  /**
   * Enables Full Screen Mode for the Editor. When activated, the Editor expands to cover the entire viewport, overlaying all other page content and providing a distraction-free editing environment.
   * @param {boolean} value?. Determines whether to enter or leave split mode. By default the argument is not passed and the mode is toggled.
   */
  fullScreenMode(value?: boolean): void;
  /**
   * Exports the content of the Editor in your chosen format. Currently supported export formats include HTML, Markdown, and PDF. This allows you to save or share your work in the format that best suits your needs.
   * @param {string} dataFormat. The expected file format.
   * @param {any} callback?. A callback that is executed before the data is exported. Allows to modify the output.
   */
  exportData(dataFormat: string, callback?: any): void;
  /**
   * Allows users to import the contents of a file directly into the Editor. Currently, only plain text (.txt) and HTML (.html) file formats are supported. Upon import, the file’s contents will be automatically loaded and displayed within the Editor for further editing or review.
   * @param {any} source. The url to the file or an object that defines settings for the Ajax request like url, timeput, etc. Object format: { url: string, type: string, data: object, timeout: number }
   * @param {any} settings?. Additional settings for the ajax request. Such as loadError function, contentType, etc. Format: { contentType: string, beforeSend: Function, loadError: Function, beforeLoadComplete: Function  }
   */
  importData(source: any, settings?: any): void;
  /**
   * Opens the browser’s Print Preview dialog, allowing users to view and print the current content displayed within the Editor. This feature provides a formatted preview of the Editor's contents as they will appear on the printed page before finalizing the print command.
   */
  print(): void;
  /**
   * Enables the modification of settings for a specified toolbar item. This method returns <b>true</b> if the update is applied successfully, indicating the toolbar item's settings were changed as requested. If the update fails, the method returns <b>false</b>.
   * @param {string | number} name. The name of the toolbar item or it's index inside the <b>toolbarItems</b> array.
   * @param {any} settings. A settings object for the toolbar item. It should have the same definition as when defining a custom toolbar item. You can read more about it in the dedicated topic for the Editor Toolbar on the website.
   * @returns {boolean | undefined}
   */
  updateToolbarItem(name: string | number, settings: any): boolean | undefined;
  /**
   * Sets the locale of a component.
   * @param {string} locale. The locale abbreviation. For example: 'de'.
   * @param {any} messages?. Object containing the locale messages.
   */
  setLocale(locale: string, messages?: any): void;
}

/**An object that defines configuration settings for integrating AI capabilities within the grid, including options for enabling AI features, specifying AI service endpoints, adjusting model parameters, and customizing AI-driven functionality in the grid interface. */
export interface EditorAi {
  /**
   * The AI model used for text generation or other AI-powered features.
   * Default value: "gpt-3.5-turbo"
   */
  model?: string;
  /**
   * The maximum number of tokens (words/characters) the AI can generate in a single request
   * Default value: 200
   */
  maxTokens?: number;
  /**
   * Controls the randomness of AI output. Lower values produce more focused results; higher values are more creative.
   * Default value: 0.7
   */
  temperature?: number;
  /**
   * The endpoint URL for sending AI requests, typically your backend proxy to OpenAI or another provider.
   * Default value: ""
   */
  url?: string;
  /**
   * The API key used to authenticate requests to the AI provider.
   * Default value: ""
   */
  key?: string;
}

/**Specifies the configuration for content filtering, allowing you to define which types of content are allowed or blocked according to the selected criteria or rules. */
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
  attributeFilterMode?: EditorContentFilteringAttributeFilterMode | string;
  /**
   * Determines which element tags to filter.
   * Default value: null
   */
  tags?: string[];
  /**
   * Determines whether to allow (whiteList) or remove (blackList) the specified tags.
   * Default value: blackList
   */
  tagFilterMode?: EditorContentFilteringTagFilterMode | string;
  /**
   * Determines which style attributes to filter.
   * Default value: null
   */
  styleAttributes?: string[];
  /**
   * Determines whether to allow (whiteList) or remove (blackList) the specified style attributes.
   * Default value: blackList
   */
  styleAttributeFilterMode?: EditorContentFilteringStyleAttributeFilterMode | string;
}

/**Configures the available options for exporting data from the Editor, such as file formats (CSV, JSON, XML), export settings, and customization preferences. These settings determine how users can save or export content from the Editor. */
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

/**Specifies the iframe configuration for the Editor. When enabled, the Editor's content is rendered within an isolated iframe, ensuring separation from the main DOM and preventing style or script conflicts. This option enhances content security and encapsulation. Additionally, it provides a mechanism to inject external resources (such as stylesheets or scripts) directly into the iframe environment if required. */
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
/**Specifies the items and structure of the context menu that appears when a user right-clicks within the Editor's content area. This setting allows you to customize which menu options are available based on the user's actions, providing tailored functionality and quick access to relevant commands. */
export declare type EditorContextMenu = 'default' | 'browser' | 'none';
/**Specifies the editing mode for the Editor component. By default, the Editor operates in standard HTML mode, allowing users to input and edit HTML content directly. In this mode, pressing Enter inserts line breaks or new paragraphs according to standard HTML behavior. <br/><br/>When set to 'blockHtml', the Editor creates new DIV elements each time the user presses Enter, promoting a block-based editing experience. This mode also provides built-in commands tailored for structured data entry and manipulation.<br/><br/>If set to 'markdown', the Editor functions as a dedicated Markdown editor. User input is interpreted as Markdown syntax, and the Editor automatically parses and converts the Markdown content into HTML for real-time preview. This enables a seamless writing and formatting workflow for users who prefer Markdown.<br/><br/>Possible values:<br/>- 'html' (default): Accepts and parses HTML input.<br/>- 'blockHtml': Uses DIV tags for new blocks and offers additional commands for data input.<br/>- 'markdown': Enables Markdown syntax input with live HTML preview. */
export declare type EditMode = 'html' | 'markdown' | 'blockHtml';
/**Specifies the file format for images or videos uploaded from local storage. By default, uploaded files are encoded and stored as base64 strings. This setting allows you to define or change the storage format as needed. */
export declare type EditorImageFormat = 'base64' | 'blob';
/**Specifies the format (such as plain text, HTML, or Markdown) in which content will be inserted into the Editor when a user pastes data, ensuring consistent formatting and correct rendering within the editing environment. */
export declare type PasteFormat = 'prompt' | 'plainText' | 'keepFormat' | 'cleanFormat';
/**Specifies the display style of the Editor’s main toolbar. You can choose between "Ribbon" mode, which presents the toolbar as a horizontal panel with grouped command icons similar to modern office applications, or "Menu" mode, which organizes commands in drop-down menus for a more compact, traditional interface. This setting controls how users interact with the Editor’s primary tools and functions. */
export declare type ToolbarMode = 'menu' | 'singleLineRibbon';
/**Specifies the format (such as plain text, HTML, or Markdown) that will be applied to content when it is pasted into the Editor. This setting controls how the pasted data is interpreted and ensures that it is correctly displayed within the Editor environment. */
export declare type ToolbarViewMode = 'toggle' | 'multiRow' | 'scroll';
