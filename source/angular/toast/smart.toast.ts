import { Toast } from './../index';
import { Animation, ToastPosition, ToastType, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ToastPosition, ToastType, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Toast } from './../index';


@Directive({
	selector: 'smart-toast, [smart-toast]'
})

export class ToastComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Toast>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Toast;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Toast;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Toast>document.createElement('smart-toast');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Specifies the container where new openned toast items will be displayed. The value can be an HTMLElement or element's id. This property is in relation with modal(lower priority than modal) and position(higher priority than position) properties. */
	@Input()
	get appendTo(): any {
		return this.nativeElement ? this.nativeElement.appendTo : undefined;
	}
	set appendTo(value: any) {
		this.nativeElement ? this.nativeElement.appendTo = value : undefined;
	}

	/** @description Sets or gets whether the toast will automatically close after duration equal to the autoCloseDelay property. */
	@Input()
	get autoClose(): boolean {
		return this.nativeElement ? this.nativeElement.autoClose : undefined;
	}
	set autoClose(value: boolean) {
		this.nativeElement ? this.nativeElement.autoClose = value : undefined;
	}

	/** @description Sets or gets the duration after which the toast automatically closes (works only if the autoClose property is set to true). */
	@Input()
	get autoCloseDelay(): number {
		return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	}
	set autoCloseDelay(value: number) {
		this.nativeElement ? this.nativeElement.autoCloseDelay = value : undefined;
	}

	/** @description Sets whether the toast will open automatically immediately after widget's initialization. */
	@Input()
	get autoOpen(): boolean {
		return this.nativeElement ? this.nativeElement.autoOpen : undefined;
	}
	set autoOpen(value: boolean) {
		this.nativeElement ? this.nativeElement.autoOpen = value : undefined;
	}

	/** @description The user will not be able to interact with toast items when disabled is set to true. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets custom icon className which overrides the default one. Multiple class names can be applied by separating them with a space. Useful when loading from a third-party icon library (such as Bootstrap). */
	@Input()
	get iconClass(): string {
		return this.nativeElement ? this.nativeElement.iconClass : undefined;
	}
	set iconClass(value: string) {
		this.nativeElement ? this.nativeElement.iconClass = value : undefined;
	}

	/** @description Adds a custom class to Toast items. Multiple class names can be applied by separating them with a space. Useful when styling by using predefined class names from a third-party CSS library (such as Bootstrap). */
	@Input()
	get itemClass(): string {
		return this.nativeElement ? this.nativeElement.itemClass : undefined;
	}
	set itemClass(value: string) {
		this.nativeElement ? this.nativeElement.itemClass = value : undefined;
	}

	/** @description Sets custom item template. */
	@Input()
	get itemTemplate(): string {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: string) {
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

	/** @description Callback, related to localization module.  */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description In modal mode the toast item is positioned in the center of the screen. This property is with higher priority than position and appendTo. If modal is set to true these properties are disregarded. */
	@Input()
	get modal(): boolean {
		return this.nativeElement ? this.nativeElement.modal : undefined;
	}
	set modal(value: boolean) {
		this.nativeElement ? this.nativeElement.modal = value : undefined;
	}

	/** @description Sets the part of the browser window where the toast will be positioned. The position property is disregarded if appendTo or modal are set. */
	@Input()
	get position(): ToastPosition {
		return this.nativeElement ? this.nativeElement.position : undefined;
	}
	set position(value: ToastPosition) {
		this.nativeElement ? this.nativeElement.position = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Sets or gets whether to show the toast item's close button. */
	@Input()
	get showCloseButton(): boolean {
		return this.nativeElement ? this.nativeElement.showCloseButton : undefined;
	}
	set showCloseButton(value: boolean) {
		this.nativeElement ? this.nativeElement.showCloseButton = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets speciffic CSS settings and icon to the toast items. */
	@Input()
	get type(): ToastType | null {
		return this.nativeElement ? this.nativeElement.type : undefined;
	}
	set type(value: ToastType | null) {
		this.nativeElement ? this.nativeElement.type = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Sets a text value to an toast item. */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description This event is triggered when the toast item is clicked.
	*  @param event. The custom event. 	*/
	@Output() onClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the toast item is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the toast item is opened.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered on swipebottom over an toast item.
	*  @param event. The custom event. 	*/
	@Output() onSwipebottom: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered on swipeleft over an toast item.
	*  @param event. The custom event. 	*/
	@Output() onSwipeleft: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered on swiperight over an toast item.
	*  @param event. The custom event. 	*/
	@Output() onSwiperight: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered on swipetop over an toast item.
	*  @param event. The custom event. 	*/
	@Output() onSwipetop: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Closes all opened toast items. 
	*/
    public closeAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeAll();
            });
        }
    }

	/** @description Closes particular toast item. 
	* @param {HTMLElement | string} item. The toast item (or its id) to remove.
	*/
    public closeItem(item: HTMLElement | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeItem(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeItem(item);
            });
        }
    }

	/** @description Closes the last opened toast item. 
	*/
    public closeLast(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeLast();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeLast();
            });
        }
    }

	/** @description Opens a new toast item and returns the opened smart-toast-item instance.  
	* @returns {HTMLElement}
  */
	public async open(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.open();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
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
		that.eventHandlers['clickHandler'] = (event: CustomEvent) => { that.onClick.emit(event); }
		that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['swipebottomHandler'] = (event: CustomEvent) => { that.onSwipebottom.emit(event); }
		that.nativeElement.addEventListener('swipebottom', that.eventHandlers['swipebottomHandler']);

		that.eventHandlers['swipeleftHandler'] = (event: CustomEvent) => { that.onSwipeleft.emit(event); }
		that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);

		that.eventHandlers['swiperightHandler'] = (event: CustomEvent) => { that.onSwiperight.emit(event); }
		that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);

		that.eventHandlers['swipetopHandler'] = (event: CustomEvent) => { that.onSwipetop.emit(event); }
		that.nativeElement.addEventListener('swipetop', that.eventHandlers['swipetopHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['clickHandler']) {
			that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['swipebottomHandler']) {
			that.nativeElement.removeEventListener('swipebottom', that.eventHandlers['swipebottomHandler']);
		}

		if (that.eventHandlers['swipeleftHandler']) {
			that.nativeElement.removeEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
		}

		if (that.eventHandlers['swiperightHandler']) {
			that.nativeElement.removeEventListener('swiperight', that.eventHandlers['swiperightHandler']);
		}

		if (that.eventHandlers['swipetopHandler']) {
			that.nativeElement.removeEventListener('swipetop', that.eventHandlers['swipetopHandler']);
		}

	}
}
