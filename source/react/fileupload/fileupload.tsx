import React from "react";
import { FileUploadProperties } from "./../../index";
import { Animation} from './../../index';
export { FileUploadProperties } from "./../../index";
export { Animation} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface FileUploadProps extends FileUploadProperties {
    className?: string;
    style?: React.CSSProperties;

	onFileSelected?: ((event?: Event) => void) | undefined;
	onUploadCanceled?: ((event?: Event) => void) | undefined;
	onUploadCompleted?: ((event?: Event) => void) | undefined;
	onUploadError?: ((event?: Event) => void) | undefined;
	onUploadPaused?: ((event?: Event) => void) | undefined;
	onUploadStarted?: ((event?: Event) => void) | undefined;
	onValidationError?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 FileUpload provides an easy and integrated way for users to upload multiple files.
*/
export class FileUpload extends React.Component<React.HTMLAttributes<Element> & FileUploadProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'FileUpload' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the file types that can be submitted to the server via the element. This property corresponds to the 'accept' attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property.
	*	Property type: string | null
	*/
	get accept(): string | null  {
		return this.nativeElement ? this.nativeElement.accept : undefined;
	}
	set accept(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.accept = value;
		}
	}

	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
	*	Property type: Animation
	*/
	get animation(): Animation  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Appends the list with selected files to a new custom container specified by the user. If the value of the property is a string it must represent a valid id of an HTML element inside the DOM that will be used as the new container for the uploaded files list.
	*	Property type: string
	*/
	get appendTo(): string  {
		return this.nativeElement ? this.nativeElement.appendTo : undefined;
	}
	set appendTo(value: string) {
		if (this.nativeElement) {
			this.nativeElement.appendTo = value;
		}
	}

	/** Sets or gets whether files will be automatically uploaded after selection.
	*	Property type: boolean
	*/
	get autoUpload(): boolean  {
		return this.nativeElement ? this.nativeElement.autoUpload : undefined;
	}
	set autoUpload(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoUpload = value;
		}
	}

	/** Allows to upload a directory. Files in all subfolders will be uploaded also. This option is supported only in Firefox and Chrome.
	*	Property type: boolean
	*/
	get directory(): boolean  {
		return this.nativeElement ? this.nativeElement.directory : undefined;
	}
	set directory(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.directory = value;
		}
	}

	/** Enables or disables the element.
	*	Property type: boolean
	*/
	get disabled(): boolean  {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Defines a custom container that will be used as the new drop zone for file uploads. The dropped files will be added in the fileUpload's list. If 'dropZone' property set to true, the default drop zone inside the element will be used instead. If set to certain id of an HTML element inside the DOM then it will be used as the drop zone.
	*	Property type: any
	*/
	get dropZone(): any  {
		return this.nativeElement ? this.nativeElement.dropZone : undefined;
	}
	set dropZone(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dropZone = value;
		}
	}

	/** Hides the footer element and it's contents (Upload All, Pause All and Close All buttons).
	*	Property type: boolean
	*/
	get hideFooter(): boolean  {
		return this.nativeElement ? this.nativeElement.hideFooter : undefined;
	}
	set hideFooter(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideFooter = value;
		}
	}

	/** Applies a custom template to the file items that represent the uploaded files.
	*	Property type: any
	*/
	get itemTemplate(): any  {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.itemTemplate = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
	*	Property type: string
	*/
	get locale(): string  {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
	*	Property type: any
	*/
	get localizeFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
		}
	}

	/** Sets the various text values used in the widget. Useful for localization. The localization object has the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, uploadAll. It's recommended these messages to be set before element's initialization.
	*	Property type: any
	*/
	get messages(): any  {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** Sets or gets whether multiple item uploads are allowed.
	*	Property type: boolean
	*/
	get multiple(): boolean  {
		return this.nativeElement ? this.nativeElement.multiple : undefined;
	}
	set multiple(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.multiple = value;
		}
	}

	/** Sets or gets the name attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property.
	*	Property type: string
	*/
	get name(): string  {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		if (this.nativeElement) {
			this.nativeElement.name = value;
		}
	}

	/** If the element is readonly, users cannot interact with it.
	*	Property type: boolean
	*/
	get readonly(): boolean  {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Callback that can used to handle various server responses and error codes.
	*	Property type: any
	*/
	get responseHandler(): any  {
		return this.nativeElement ? this.nativeElement.responseHandler : undefined;
	}
	set responseHandler(value: any) {
		if (this.nativeElement) {
			this.nativeElement.responseHandler = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: boolean
	*/
	get rightToLeft(): boolean  {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** Callback function, used to change the headers of the file upload's XHR request.
	*	Property type: any
	*/
	get setHeaders(): any  {
		return this.nativeElement ? this.nativeElement.setHeaders : undefined;
	}
	set setHeaders(value: any) {
		if (this.nativeElement) {
			this.nativeElement.setHeaders = value;
		}
	}

	/** Displays a progress bar at the bottom of each uploaded item to show the progress of the uploading process.
	*	Property type: boolean
	*/
	get showProgress(): boolean  {
		return this.nativeElement ? this.nativeElement.showProgress : undefined;
	}
	set showProgress(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showProgress = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
	*	Property type: string
	*/
	get theme(): string  {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side.
	*	Property type: string
	*/
	get uploadUrl(): string  {
		return this.nativeElement ? this.nativeElement.uploadUrl : undefined;
	}
	set uploadUrl(value: string) {
		if (this.nativeElement) {
			this.nativeElement.uploadUrl = value;
		}
	}

	/** If is set to true, the element cannot be focused.
	*	Property type: boolean
	*/
	get unfocusable(): boolean  {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}

	/** Callback used to validate the files immediatelly after their selection. Retuns a boolean value. If the returned value is false, the file is removed from list and a 'validationError is fired.
	*	Property type: any
	*/
	get validateFile(): any  {
		return this.nativeElement ? this.nativeElement.validateFile : undefined;
	}
	set validateFile(value: any) {
		if (this.nativeElement) {
			this.nativeElement.validateFile = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["accept","animation","appendTo","autoUpload","directory","disabled","dropZone","hideFooter","itemTemplate","locale","localizeFormatFunction","messages","multiple","name","readonly","responseHandler","rightToLeft","setHeaders","showProgress","theme","uploadUrl","unfocusable","validateFile"];
	}
	/**  This event is triggered when a file has been selected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
	*   filename - The name of the selected file.
	*   type - The type of the selected file.
	*   size - The size of the selected file.
	*   index - The index of the selected file.
	*/
	onFileSelected?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a file upload operation is canceled.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
	*   filename - The name of the canceled file.
	*   type - The type of the canceled file.
	*   size - The size of the canceled file.
	*   index - The index of the canceled file.
	*/
	onUploadCanceled?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a file upload operation is completed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
	*   filename - The name of the canceled file.
	*   type - The type of the canceled file.
	*   size - The size of the canceled file.
	*   index - The index of the canceled file.
	*   status - The status of the uploaded file. Whether there was an error or success.
	*/
	onUploadCompleted?: ((event?: Event) => void) | undefined
	/**  This event is triggered when during the file upload process something happens and upload fails.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
	*   filename - The name of the canceled file.
	*   type - The type of the canceled file.
	*   size - The size of the canceled file.
	*   index - The index of the canceled file.
	*   status - The status of the uploaded file. Whether there was an error or success.
	*/
	onUploadError?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a file upload operation is paused.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
	*   filename - The name of the paused file.
	*   type - The type of the paused file.
	*   size - The size of the paused file.
	*   index - The index of the paused file.
	*/
	onUploadPaused?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a file upload operation is started.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
	*   filename - The name of the file that is being uploaded.
	*   type - The type of the file that is being uploaded.
	*   size - The size of the file that is being uploaded.
	*   index - The index of the file that is being uploaded.
	*/
	onUploadStarted?: ((event?: Event) => void) | undefined
	/**  This event is triggered if the validation of a user defined 'validateFile' callback fails.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size)
	*   filename - The name of the file which validation has failed.
	*   type - The type of the file which validation has failed.
	*   size - The size of the file which validation has failed.
	*/
	onValidationError?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onFileSelected","onUploadCanceled","onUploadCompleted","onUploadError","onUploadPaused","onUploadStarted","onValidationError","onCreate","onReady"];
	}
	/** Opens a popup to browse for a file. 
	*/
    public browse(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.browse();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.browse();
            });
        }
    }

	/** Cancels all selected files. The files are removed from the list and their uploading is prevented. 
	*/
    public cancelAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelAll();
            });
        }
    }

	/** Cancels a selected file. The file is removed from the file list and it's uploading is prevented. 
	* @param {number} index. Index of the file which will be canceled.
	*/
    public cancelFile(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelFile(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelFile(index);
            });
        }
    }

	/** Pauses the uploading of all files. File upload is prevented but the files remain in the file list. 
	*/
    public pauseAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.pauseAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.pauseAll();
            });
        }
    }

	/** Pauses upload of a file with particular index. File upload is prevented but file ramains in the file list. 
	* @param {number} id. Index of the file which will be paused.
	*/
    public pauseFile(id: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.pauseFile(id);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.pauseFile(id);
            });
        }
    }

	/** Uploads all selected files. 
	*/
    public uploadAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uploadAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uploadAll();
            });
        }
    }

	/** Uploads a selected file. 
	* @param {number} id. Index of the file which will be uploaded.
	*/
    public uploadFile(id: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uploadFile(id);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uploadFile(id);
            });
        }
    }



	constructor(props: any) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize: boolean) {
		const that = this;
		const props: any = {};
		const events: any = {};
		let styles: any = null;

		for(let prop in that.props) {
			if (prop === 'children') {
				continue;
			}

			if (prop === 'style') {
				styles = that.props[prop];
				continue;
			}

			if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
				events[prop] = that.props[prop];
				continue;
			}

			props[prop] = that.props[prop];
		}

		if (initialize) {
			that.nativeElement = this.componentRef.current;
		}

		for(let prop in props) {
			if (prop === 'class') {
				const classNames = props[prop].trim().split(' ');

				for(let className in classNames) {
					if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
						that.nativeElement.classList.add(classNames[className]);
					}
				}

				continue;
			}

			if (props[prop] !== that.nativeElement[prop]) {
				const normalizeProp = (str: string) => {
					return str.replace(/-([a-z])/g, function (g) {
						return g[1].toUpperCase();
					});
				}

				if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
					that.nativeElement.setAttribute(prop, '');
				}

				const normalizedProp = normalizeProp(prop);

				that.nativeElement[normalizedProp] = props[prop];
			}
		}

		
		for(let eventName in events) {
			that[eventName] = events[eventName];
			that.nativeElement[eventName.toLowerCase()] = events[eventName];
        }

		if (initialize) {
			if (that.onCreate) {
				that.onCreate();
			}

			that.nativeElement.whenRendered(() => {
				if (that.onReady) {
					that.onReady();
				}
			});
		}

		// setup styles.

		if (styles) {
			for(let styleName in styles) {
				that.nativeElement.style[styleName] = styles[styleName];
			}
		}
	}

	componentDidMount() {
		this.componentDidRender(true);
    }

	componentDidUpdate() {
		this.componentDidRender(false);
    }

	componentWillUnmount() {
		const that = this;

		if (!that.nativeElement) {
			return;
		}
		
		that.nativeElement.whenRenderedCallbacks = [];
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-file-upload", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default FileUpload;
