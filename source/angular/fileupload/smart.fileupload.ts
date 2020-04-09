import { FileUpload } from './../index';
import { Animation, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { FileUpload } from './../index';


@Directive({
	selector: 'smart-file-upload, [smart-file-upload]'
})

export class FileUploadComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<FileUpload>) {
		super(ref);
		this.nativeElement = ref.nativeElement as FileUpload;
	}

	private eventHandlers: any[] = [];

	public nativeElement: FileUpload;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <FileUpload>document.createElement('smart-file-upload');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets the file types that can be submitted to the server via the element. This property corresponds to the 'accept' attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property. */
	@Input()
	get accept(): string | null {
		return this.nativeElement ? this.nativeElement.accept : undefined;
	}
	set accept(value: string | null) {
		this.nativeElement ? this.nativeElement.accept = value : undefined;
	}

	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Appends the list with selected files to a new custom container specified by the user. If the value of the property is a string it must represent a valid id of an HTML element inside the DOM that will be used as the new container for the uploaded files list. */
	@Input()
	get appendTo(): any {
		return this.nativeElement ? this.nativeElement.appendTo : undefined;
	}
	set appendTo(value: any) {
		this.nativeElement ? this.nativeElement.appendTo = value : undefined;
	}

	/** @description Sets or gets whether files will be automatically uploaded after selection. */
	@Input()
	get autoUpload(): boolean {
		return this.nativeElement ? this.nativeElement.autoUpload : undefined;
	}
	set autoUpload(value: boolean) {
		this.nativeElement ? this.nativeElement.autoUpload = value : undefined;
	}

	/** @description Allows to upload a directory. Files in all subfolders will be uploaded also. This option is supported only in Firefox and Chrome. */
	@Input()
	get directory(): boolean {
		return this.nativeElement ? this.nativeElement.directory : undefined;
	}
	set directory(value: boolean) {
		this.nativeElement ? this.nativeElement.directory = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Defines a custom container that will be used as the new drop zone for file uploads. The dropped files will be added in the fileUpload's list. If 'dropZone' property set to true, the default drop zone inside the element will be used instead. If set to certain id of an HTML element inside the DOM then it will be used as the drop zone. */
	@Input()
	get dropZone(): any {
		return this.nativeElement ? this.nativeElement.dropZone : undefined;
	}
	set dropZone(value: any) {
		this.nativeElement ? this.nativeElement.dropZone = value : undefined;
	}

	/** @description Hides the footer element and it's contents (Upload All, Pause All and Close All buttons). */
	@Input()
	get hideFooter(): boolean {
		return this.nativeElement ? this.nativeElement.hideFooter : undefined;
	}
	set hideFooter(value: boolean) {
		this.nativeElement ? this.nativeElement.hideFooter = value : undefined;
	}

	/** @description Applies a custom template to the file items that represent the uploaded files. */
	@Input()
	get itemTemplate(): any {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: any) {
		this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Sets the various text values used in the widget. Useful for localization. The localization object has the following fields: browse, pauseFile, cancelFile, uploadFile, pauseAll, cancelAll, uploadAll. It's recommended these messages to be set before element's initialization. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets whether multiple item uploads are allowed. */
	@Input()
	get multiple(): boolean {
		return this.nativeElement ? this.nativeElement.multiple : undefined;
	}
	set multiple(value: boolean) {
		this.nativeElement ? this.nativeElement.multiple = value : undefined;
	}

	/** @description Sets or gets the name attribute of the hidden file input which is submitted to the URL specified by the uploadUrl property. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Callback that can used to handle various server responses and error codes. */
	@Input()
	get responseHandler(): any {
		return this.nativeElement ? this.nativeElement.responseHandler : undefined;
	}
	set responseHandler(value: any) {
		this.nativeElement ? this.nativeElement.responseHandler = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Callback function, used to change the headers of the file upload's XHR request. */
	@Input()
	get setHeaders(): any {
		return this.nativeElement ? this.nativeElement.setHeaders : undefined;
	}
	set setHeaders(value: any) {
		this.nativeElement ? this.nativeElement.setHeaders = value : undefined;
	}

	/** @description Displays a progress bar at the bottom of each uploaded item to show the progress of the uploading process. */
	@Input()
	get showProgress(): boolean {
		return this.nativeElement ? this.nativeElement.showProgress : undefined;
	}
	set showProgress(value: boolean) {
		this.nativeElement ? this.nativeElement.showProgress = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets or gets the upload URL. This property corresponds to the upload form's action attribute. For example, the uploadUrl property can point to a PHP file, which handles the upload operation on the server-side. */
	@Input()
	get uploadUrl(): string {
		return this.nativeElement ? this.nativeElement.uploadUrl : undefined;
	}
	set uploadUrl(value: string) {
		this.nativeElement ? this.nativeElement.uploadUrl = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Callback used to validate the files immediatelly after their selection. Retuns a boolean value. If the returned value is false, the file is removed from list and a 'validationError is fired. */
	@Input()
	get validateFile(): any {
		return this.nativeElement ? this.nativeElement.validateFile : undefined;
	}
	set validateFile(value: any) {
		this.nativeElement ? this.nativeElement.validateFile = value : undefined;
	}

	/** @description This event is triggered when a file has been selected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
	*   filename - The name of the selected file.
	*   type - The type of the selected file.
	*   size - The size of the selected file.
	*   index - The index of the selected file.
	*/
	@Output() onFileSelected: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a file upload operation is canceled.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
	*   filename - The name of the canceled file.
	*   type - The type of the canceled file.
	*   size - The size of the canceled file.
	*   index - The index of the canceled file.
	*/
	@Output() onUploadCanceled: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a file upload operation is completed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
	*   filename - The name of the canceled file.
	*   type - The type of the canceled file.
	*   size - The size of the canceled file.
	*   index - The index of the canceled file.
	*   status - The status of the uploaded file. Whether there was an error or success.
	*/
	@Output() onUploadCompleted: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when during the file upload process something happens and upload fails.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index, 	status)
	*   filename - The name of the canceled file.
	*   type - The type of the canceled file.
	*   size - The size of the canceled file.
	*   index - The index of the canceled file.
	*   status - The status of the uploaded file. Whether there was an error or success.
	*/
	@Output() onUploadError: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a file upload operation is paused.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
	*   filename - The name of the paused file.
	*   type - The type of the paused file.
	*   size - The size of the paused file.
	*   index - The index of the paused file.
	*/
	@Output() onUploadPaused: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a file upload operation is started.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size, 	index)
	*   filename - The name of the file that is being uploaded.
	*   type - The type of the file that is being uploaded.
	*   size - The size of the file that is being uploaded.
	*   index - The index of the file that is being uploaded.
	*/
	@Output() onUploadStarted: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered if the validation of a user defined 'validateFile' callback fails.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	filename, 	type, 	size)
	*   filename - The name of the file which validation has failed.
	*   type - The type of the file which validation has failed.
	*   size - The size of the file which validation has failed.
	*/
	@Output() onValidationError: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Opens a popup to browse for a file. 
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

	/** @description Cancels all selected files. The files are removed from the list and their uploading is prevented. 
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

	/** @description Cancels a selected file. The file is removed from the file list and it's uploading is prevented. 
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

	/** @description Pauses the uploading of all files. File upload is prevented but the files remain in the file list. 
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

	/** @description Pauses upload of a file with particular index. File upload is prevented but file ramains in the file list. 
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

	/** @description Uploads all selected files. 
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

	/** @description Uploads a selected file. 
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


	get isRendered(): boolean {
		return this.nativeElement ? this.nativeElement.isRendered : false;
	}    
	
	ngOnInit() {
	}
	
    ngAfterViewInit() {
      const that = this;

      that.onCreate.emit(that.nativeElement);

		Smart.Render();

		this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
		this.listen();
	}
	
	ngOnDestroy() {
		this.unlisten();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.nativeElement && this.nativeElement.isRendered) {
			for (const propName in changes) {
				if (changes.hasOwnProperty(propName)) {
					this.nativeElement[propName] = changes[propName].currentValue;
				}
			}
		}
	}

	/** @description Add event listeners. */
	private listen(): void {
        const that = this;
		that.eventHandlers['fileSelectedHandler'] = (event: CustomEvent) => { that.onFileSelected.emit(event); }
		that.nativeElement.addEventListener('fileSelected', that.eventHandlers['fileSelectedHandler']);

		that.eventHandlers['uploadCanceledHandler'] = (event: CustomEvent) => { that.onUploadCanceled.emit(event); }
		that.nativeElement.addEventListener('uploadCanceled', that.eventHandlers['uploadCanceledHandler']);

		that.eventHandlers['uploadCompletedHandler'] = (event: CustomEvent) => { that.onUploadCompleted.emit(event); }
		that.nativeElement.addEventListener('uploadCompleted', that.eventHandlers['uploadCompletedHandler']);

		that.eventHandlers['uploadErrorHandler'] = (event: CustomEvent) => { that.onUploadError.emit(event); }
		that.nativeElement.addEventListener('uploadError', that.eventHandlers['uploadErrorHandler']);

		that.eventHandlers['uploadPausedHandler'] = (event: CustomEvent) => { that.onUploadPaused.emit(event); }
		that.nativeElement.addEventListener('uploadPaused', that.eventHandlers['uploadPausedHandler']);

		that.eventHandlers['uploadStartedHandler'] = (event: CustomEvent) => { that.onUploadStarted.emit(event); }
		that.nativeElement.addEventListener('uploadStarted', that.eventHandlers['uploadStartedHandler']);

		that.eventHandlers['validationErrorHandler'] = (event: CustomEvent) => { that.onValidationError.emit(event); }
		that.nativeElement.addEventListener('validationError', that.eventHandlers['validationErrorHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['fileSelectedHandler']) {
			that.nativeElement.removeEventListener('fileSelected', that.eventHandlers['fileSelectedHandler']);
		}

		if (that.eventHandlers['uploadCanceledHandler']) {
			that.nativeElement.removeEventListener('uploadCanceled', that.eventHandlers['uploadCanceledHandler']);
		}

		if (that.eventHandlers['uploadCompletedHandler']) {
			that.nativeElement.removeEventListener('uploadCompleted', that.eventHandlers['uploadCompletedHandler']);
		}

		if (that.eventHandlers['uploadErrorHandler']) {
			that.nativeElement.removeEventListener('uploadError', that.eventHandlers['uploadErrorHandler']);
		}

		if (that.eventHandlers['uploadPausedHandler']) {
			that.nativeElement.removeEventListener('uploadPaused', that.eventHandlers['uploadPausedHandler']);
		}

		if (that.eventHandlers['uploadStartedHandler']) {
			that.nativeElement.removeEventListener('uploadStarted', that.eventHandlers['uploadStartedHandler']);
		}

		if (that.eventHandlers['validationErrorHandler']) {
			that.nativeElement.removeEventListener('validationError', that.eventHandlers['validationErrorHandler']);
		}

	}
}
