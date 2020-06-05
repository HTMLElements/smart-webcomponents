import { BootstrapModal } from './../index';
import { BootstrapModalBackdrop, BootstrapModalStyleMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { BootstrapModalBackdrop, BootstrapModalStyleMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { BootstrapModal } from './../index';


@Directive({
	selector: 'bootstrap-modal, [bootstrap-modal]'
})

export class BootstrapModalComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<BootstrapModal>) {
		super(ref);
		this.nativeElement = ref.nativeElement as BootstrapModal;
	}

	private eventHandlers: any[] = [];

	public nativeElement: BootstrapModal;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <BootstrapModal>document.createElement('bootstrap-modal');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Clicking on the modal “backdrop” will automatically close the modal.  */
	@Input()
	get backdrop(): BootstrapModalBackdrop {
		return this.nativeElement ? this.nativeElement.backdrop : undefined;
	}
	set backdrop(value: BootstrapModalBackdrop) {
		this.nativeElement ? this.nativeElement.backdrop = value : undefined;
	}

	/** @description Sets or gets whether the modal is centered.  */
	@Input()
	get centered(): boolean {
		return this.nativeElement ? this.nativeElement.centered : undefined;
	}
	set centered(value: boolean) {
		this.nativeElement ? this.nativeElement.centered = value : undefined;
	}

	/** @description Enables or disables the element.  */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Gets or sets whether the modal is opened.  */
	@Input()
	get opened(): boolean {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		this.nativeElement ? this.nativeElement.opened = value : undefined;
	}

	/** @description Gets or sets whether the modal is scrollable.  */
	@Input()
	get scrollable(): boolean {
		return this.nativeElement ? this.nativeElement.scrollable : undefined;
	}
	set scrollable(value: boolean) {
		this.nativeElement ? this.nativeElement.scrollable = value : undefined;
	}

	/** @description Sets or gets the style mode of the element. */
	@Input()
	get styleMode(): BootstrapModalStyleMode {
		return this.nativeElement ? this.nativeElement.styleMode : undefined;
	}
	set styleMode(value: BootstrapModalStyleMode) {
		this.nativeElement ? this.nativeElement.styleMode = value : undefined;
	}

	/** @description Sets or gets the size mode of the element. */
	@Input()
	get sizeMode(): string {
		return this.nativeElement ? this.nativeElement.sizeMode : undefined;
	}
	set sizeMode(value: string) {
		this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
	}

	/** @description Show event is triggered when the modal is going to show.
	*  @param event. The custom event. 	*/
	@Output() onShow: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Hide event is triggered when the modal is going to be hidden.
	*  @param event. The custom event. 	*/
	@Output() onHide: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Toggles the modal visibility 
	*/
    public toggle(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.toggle();
            });
        }
    }

	/** @description Shows the modal 
	*/
    public show(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.show();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.show();
            });
        }
    }

	/** @description Hides the modal 
	*/
    public hide(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hide();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hide();
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
		that.eventHandlers['showHandler'] = (event: CustomEvent) => { that.onShow.emit(event); }
		that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);

		that.eventHandlers['hideHandler'] = (event: CustomEvent) => { that.onHide.emit(event); }
		that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['showHandler']) {
			that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
		}

		if (that.eventHandlers['hideHandler']) {
			that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
		}

	}
}
