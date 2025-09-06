import  {BaseElement, Animation} from "./smart.element"

export interface FileUploadProperties {
  /**
   * Defines the file types that are allowed for upload by specifying accepted MIME types or file extensions. This property maps directly to the HTML accept attribute on the hidden file input element, which determines which files users can select in the file dialog. These files are then uploaded to the server endpoint specified in the uploadUrl property. Setting this property ensures that only files matching the specified types can be chosen and submitted.
   * Default value: null
   */
  accept?: string | null;
  /**
   * Specifies or retrieves the current animation mode. When set to 'none', all animations are disabled and transitions will not be applied. Use this property to control whether animations are enabled or disabled within the component or element.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Appends the selected files list to a custom container specified by the user. If the property value is a string, it must correspond to the ID of an existing HTML element in the DOM. This element will serve as the new container where the uploaded files list will be rendered. If the provided ID does not match any element in the DOM, the operation will not proceed. This allows developers to control exactly where the files list appears in the application's interface.
   * Default value: "null"
   */
  appendTo?: string;
  /**
   * Determines whether files are automatically uploaded immediately after they are selected by the user. When set to true, the upload process begins as soon as files are chosen; when false, uploading must be triggered manually.
   * Default value: false
   */
  autoUpload?: boolean;
  /**
   * Enables users to upload an entire directory at once, including all files contained within any nested subfolders. When this option is selected, the upload process will automatically include every file from the selected directory and its subdirectories. Note: This feature is currently supported only in Firefox and Chrome browsers.
   * Default value: false
   */
  directory?: boolean;
  /**
   * Controls whether the element is interactive or not. When enabled, the element can be interacted with by the user; when disabled, the element appears inactive and does not respond to user input.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies a custom container element to serve as the drop zone for file uploads. When files are dropped onto this container, they will be added to the fileUpload component’s file list. If the 'dropZone' property is set to true, the component will use its internal default drop zone. If 'dropZone' is assigned the ID of an existing HTML element in the DOM, that particular element will be used as the drop zone area for file uploads instead. This allows for flexible placement and styling of the drop zone within your application.
   * Default value: null
   */
  dropZone?: any;
  /**
   * Conceals the entire footer section, including all of its contents—specifically the "Upload All," "Pause All," and "Close All" buttons—preventing users from accessing these actions.
   * Default value: false
   */
  hideFooter?: boolean;
  /**
   * Enhances the file item display by applying a custom template to each item in the uploaded files list. This allows you to define the appearance and layout of uploaded file entries, enabling features such as displaying file names, sizes, icons, previews, or custom actions within each file item.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Defines the unlockKey property, which is used to retrieve or assign the unique key required to unlock access to the product. Setting this key grants authorization for product usage, while getting it returns the current unlock key in use.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current language setting for displaying messages. This property works together with the messages property to select the appropriate set of localized text based on the chosen language code (e.g., "en", "fr", "es"). Use this property to dynamically change or access the language used in your application's user interface.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the format of messages returned by the Localization Module. Use this to modify how localized messages are structured or displayed before they are delivered to your application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Configures the text labels displayed in the widget interface, enabling support for localization and customization of user-facing messages. The localization object should contain the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, and uploadAll—each representing the corresponding action's text label. For optimal results and proper display, set these localization messages before the widget element is initialized.
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
   *     "browse": "Browse",
   *     "uploadFile": "Upload File",
   *     "cancelFile": "Cancel File",
   *     "pauseFile": "Pause File",
   *     "uploadAll": "Upload All",
   *     "cancelAll": "Cancel All",
   *     "pauseAll": "Pause All",
   *     "totalFiles": "Total files: ",
   *     "connectionError": ": File Upload requires connection to the server.",
   *     "wrongItemIndex": ": There is no file with such an index in the list of uploaded files.",
   *     "tooLongFileName": ": File name is too long."
   *   }
   * }
   */
  messages?: any;
  /**
   * Specifies or retrieves whether users are permitted to select and upload multiple items simultaneously. When enabled, users can choose more than one file or item within the upload interface.
   * Default value: false
   */
  multiple?: boolean;
  /**
   * Gets or sets the name attribute of the hidden file input element. This name is used as the key in the form data when files are uploaded to the server via the URL specified in the uploadUrl property.
   * Default value: ""
   */
  name?: string;
  /**
   * When an element is set to readonly, users can view its content but cannot modify or edit it. However, unlike disabled elements, readonly elements remain focusable and their content can typically still be selected and copied. This property is commonly applied to input fields and textareas to prevent changes while allowing visibility and text selection.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * A callback function designed to process server responses, allowing you to handle successful results as well as different error codes and statuses returned from the server. This enables customized handling of success, failure, and edge-case scenarios based on the server’s response.
   * Default value: null
   */
  responseHandler?: any;
  /**
   * Sets or retrieves a value that determines whether the element's alignment supports right-to-left (RTL) text direction, which is commonly used for languages such as Arabic or Hebrew. When enabled, the element and its content are visually aligned to accommodate RTL locales, ensuring proper display and user interface behavior for RTL language users.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * A callback function that allows you to modify or set custom headers for the XMLHttpRequest (XHR) used during the file upload process. This function receives the XHR object as a parameter, enabling you to add, update, or remove HTTP headers before the request is sent.
   * Default value: null
   */
  setHeaders?: any;
  /**
   * Displays a visual progress bar at the bottom of each item being uploaded, providing real-time feedback on the upload status. The progress bar dynamically updates to reflect the current percentage of the upload completed for each individual item, allowing users to easily track the progress of their uploads.
   * Default value: false
   */
  showProgress?: boolean;
  /**
   * Specifies the theme to be applied to the element. The selected theme controls the visual appearance—including colors, fonts, and overall style—ensuring that the element’s look is consistent with the desired design scheme.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies or retrieves the URL endpoint to which files will be uploaded. This property directly maps to the action attribute of the upload form. For instance, the uploadUrl property can be set to the path of a server-side script, such as a PHP, Node.js, or ASP.NET file, responsible for processing and handling the file upload operation on the server. Use this property to define where uploaded files should be sent for server-side handling.
   * Default value: ""
   */
  uploadUrl?: string;
  /**
   * If set to true, the element is not focusable and cannot receive keyboard or programmatic focus.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Sets or retrieves the URL endpoint used for the remove operation. This property corresponds to the form's action attribute and determines where the form data is submitted when a remove action is triggered. For example, the removeUrl property can be set to the path of a server-side script, such as a PHP file, which processes and handles the remove request on the backend.
   * Default value: ""
   */
  removeUrl?: string;
  /**
   * Retrieves the value of the uploaded file, such as the file’s name, path, size, or content, depending on the context and configuration of the file upload input. This function allows access to the selected file’s details for further processing, validation, or storage.
   * Default value: null
   */
  value?: any;
  /**
   * Callback invoked immediately after files are selected to perform validation. Should return a boolean value: if true, the file is accepted; if false, the file is removed from the selection list and a 'validationError' event is triggered.
   * Default value: null
   */
  validateFile?: any;
}
/**
 FileUpload provides an easy and integrated way for users to upload multiple files.
*/
export interface FileUpload extends BaseElement, FileUploadProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever a user selects a file, such as through a file input element. It occurs immediately after the file selection is made and can be used to handle or validate the chosen file(s) before further processing, such as uploading or previewing them.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the selected file.
   *  type - The type of the selected file.
   *  size - The size of the selected file.
   *  index - The index of the selected file.
   */
  onFileSelected?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a user actively cancels an ongoing file upload process. It indicates that the file transfer has been intentionally terminated before completion, either by user action or programmatic intervention.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   */
  onUploadCanceled?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a file upload process has finished, indicating that the file has been successfully transmitted to the server or the upload has reached its final state (either success or failure). It can be used to execute follow-up actions, such as displaying a confirmation message, updating the user interface, or processing the uploaded file, once the upload operation is complete.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index, status, serverResponse)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   *  serverResponse - The response of the remote server.
   */
  onUploadCompleted?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered if an error occurs during the file upload process, causing the upload to fail. It provides information about the failure, allowing you to implement custom error handling or user notifications when a file cannot be successfully uploaded.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index, status)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   */
  onUploadError?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when an ongoing file upload process is temporarily halted by the user or application. It indicates that the upload is not complete and may be resumed or canceled at a later time. Event listeners can use this event to update the user interface, save upload progress, or handle other logic related to the paused upload state.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the paused file.
   *  type - The type of the paused file.
   *  size - The size of the paused file.
   *  index - The index of the paused file.
   */
  onUploadPaused?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when a file upload process initiates, signaling that the uploading of one or more files has begun. It can be used to perform preparatory actions such as updating the user interface, initializing progress indicators, or logging the start of the file transfer.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the file that is being uploaded.
   *  type - The type of the file that is being uploaded.
   *  size - The size of the file that is being uploaded.
   *  index - The index of the file that is being uploaded.
   */
  onUploadStarted?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user-defined 'validateFile' callback function returns a failure result, indicating that the provided file did not meet the specified validation criteria.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size)
   *  filename - The name of the file which validation has failed.
   *  type - The type of the file which validation has failed.
   *  size - The size of the file which validation has failed.
   */
  onValidationError?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Displays a popup dialog that allows the user to browse their local device and select a file to upload or process.
   */
  browse(): void;
  /**
   * Cancels all currently selected files. This action removes the files from the selection list and ensures that they are not uploaded. Any ongoing or pending uploads for these files are also stopped, preventing them from being transferred to the server.
   */
  cancelAll(): void;
  /**
   * Cancels the specified file's upload process. This action immediately removes the file from the file list and prevents it from being uploaded or processed any further.
   * @param {number} index. Index of the file which will be canceled.
   */
  cancelFile(index: number): void;
  /**
   * Pauses the upload process for all files, temporarily halting any active uploads. While uploads are paused and new uploads cannot be started, the files themselves remain visible and accessible in the file list. No files are removed or lost during this pause; uploading can be resumed at a later time.
   */
  pauseAll(): void;
  /**
   * Pauses the upload process for the file at the specified index. The upload for this file is temporarily suspended, preventing any data transfer, but the file itself remains listed in the upload queue. This allows for the upload to be resumed or managed at a later time without removing the file from the list.
   * @param {number} id. Index of the file which will be paused.
   */
  pauseFile(id: number): void;
  /**
   * Uploads every file selected by the user to the server. Handles multiple files simultaneously and ensures each file is processed for upload.
   */
  uploadAll(): void;
  /**
   * Allows the user to select a file from their local device and upload it to the server for processing or storage.
   * @param {number} id. Index of the file which will be uploaded.
   */
  uploadFile(id: number): void;
}

declare global {
    interface Document {
        createElement(tagName: "smart-file-upload"): FileUpload;
        querySelector(selectors: "smart-file-upload"): FileUpload | null;
        querySelectorAll(selectors: "smart-file-upload"): NodeListOf<FileUpload>;
        getElementsByTagName(qualifiedName: "smart-file-upload"): HTMLCollectionOf<FileUpload>;
        getElementsByName(elementName: "smart-file-upload"): NodeListOf<FileUpload>;
    }
}

