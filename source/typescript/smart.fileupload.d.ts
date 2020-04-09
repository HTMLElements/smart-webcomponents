import  {BaseElement, Animation} from "./smart.element"

/**
 FileUpload provides an easy and integrated way for users to upload multiple files.
*/
export interface FileUpload extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the file types that can be submitted to the server via the element. This property corresponds to the 'accept' attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property.
   * Default value: null
   */
  accept?: string | null;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Appends the list with selected files to a new custom container specified by the user. If the value of the property is a string it must represent a valid id of an HTML element inside the DOM that will be used as the new container for the uploaded files list.
   * Default value: null
   */
  appendTo?: any;
  /**
   * Sets or gets whether files will be automatically uploaded after selection.
   * Default value: false
   */
  autoUpload?: boolean;
  /**
   * Allows to upload a directory. Files in all subfolders will be uploaded also. This option is supported only in Firefox and Chrome.
   * Default value: false
   */
  directory?: boolean;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Defines a custom container that will be used as the new drop zone for file uploads. The dropped files will be added in the fileUpload's list. If 'dropZone' property set to true, the default drop zone inside the element will be used instead. If set to certain id of an HTML element inside the DOM then it will be used as the drop zone.
   * Default value: null
   */
  dropZone?: any;
  /**
   * Hides the footer element and it's contents (Upload All, Pause All and Close All buttons).
   * Default value: false
   */
  hideFooter?: boolean;
  /**
   * Applies a custom template to the file items that represent the uploaded files.
   * Default value: null
   */
  itemTemplate?: any;
  /**
   * Sets or gets the language. Used in conjunction with the property messages. 
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets the various text values used in the widget. Useful for localization. The localization object has the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, uploadAll. It's recommended these messages to be set before element's initialization.
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
   * Sets or gets whether multiple item uploads are allowed.
   * Default value: false
   */
  multiple?: boolean;
  /**
   * Sets or gets the name attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property.
   * Default value: ""
   */
  name?: string;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Callback that can used to handle various server responses and error codes.
   * Default value: null
   */
  responseHandler?: any;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Callback function, used to change the headers of the file upload's XHR request.
   * Default value: null
   */
  setHeaders?: any;
  /**
   * Displays a progress bar at the bottom of each uploaded item to show the progress of the uploading process.
   * Default value: false
   */
  showProgress?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side.
   * Default value: ""
   */
  uploadUrl?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Callback used to validate the files immediatelly after their selection. Retuns a boolean value. If the returned value is false, the file is removed from list and a 'validationError is fired.
   * Default value: null
   */
  validateFile?: any;
  /** 
   * This event is triggered when a file has been selected.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the selected file.
   *  type - The type of the selected file.
   *  size - The size of the selected file.
   *  index - The index of the selected file.
   */
  onFileSelected?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is canceled.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   */
  onUploadCanceled?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is completed.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index, status)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   */
  onUploadCompleted?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when during the file upload process something happens and upload fails.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index, status)
   *  filename - The name of the canceled file.
   *  type - The type of the canceled file.
   *  size - The size of the canceled file.
   *  index - The index of the canceled file.
   *  status - The status of the uploaded file. Whether there was an error or success.
   */
  onUploadError?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is paused.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the paused file.
   *  type - The type of the paused file.
   *  size - The size of the paused file.
   *  index - The index of the paused file.
   */
  onUploadPaused?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when a file upload operation is started.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size, index)
   *  filename - The name of the file that is being uploaded.
   *  type - The type of the file that is being uploaded.
   *  size - The size of the file that is being uploaded.
   *  index - The index of the file that is being uploaded.
   */
  onUploadStarted?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered if the validation of a user defined 'validateFile' callback fails.
	* @param event. The custom event. Custom data event was created with: ev.detail(filename, type, size)
   *  filename - The name of the file which validation has failed.
   *  type - The type of the file which validation has failed.
   *  size - The size of the file which validation has failed.
   */
  onValidationError?: ((this: any, ev: Event) => any) | null;
  /**
   * Opens a popup to browse for a file.
   */
  browse(): void;
  /**
   * Cancels all selected files. The files are removed from the list and their uploading is prevented.
   */
  cancelAll(): void;
  /**
   * Cancels a selected file. The file is removed from the file list and it's uploading is prevented.
   * @param {number} index. Index of the file which will be canceled.
   */
  cancelFile(index: number): void;
  /**
   * Pauses the uploading of all files. File upload is prevented but the files remain in the file list.
   */
  pauseAll(): void;
  /**
   * Pauses upload of a file with particular index. File upload is prevented but file ramains in the file list.
   * @param {number} id. Index of the file which will be paused.
   */
  pauseFile(id: number): void;
  /**
   * Uploads all selected files.
   */
  uploadAll(): void;
  /**
   * Uploads a selected file.
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

