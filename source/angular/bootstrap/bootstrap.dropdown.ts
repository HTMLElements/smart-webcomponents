import { BootstrapDropDown } from './../index';
import { BootstrapDropDownDropDownPosition, BootstrapDropDownLabelType, BootstrapDropDownStyleMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { BootstrapDropDownDropDownPosition, BootstrapDropDownLabelType, BootstrapDropDownStyleMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { BootstrapDropDown } from './../index';


@Directive({
	selector: 'bootstrap-drop-down, [bootstrap-drop-down]'
})

export class BootstrapDropDownComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<BootstrapDropDown>) {
		super(ref);
		this.nativeElement = ref.nativeElement as BootstrapDropDown;
	}

	private eventHandlers: any[] = [];

	public nativeElement: BootstrapDropDown;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <BootstrapDropDown>document.createElement('bootstrap-drop-down');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Enables or disables the element.  */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets the drop down position of the element.  */
	@Input()
	get dropDownPosition(): BootstrapDropDownDropDownPosition {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value: BootstrapDropDownDropDownPosition) {
		this.nativeElement ? this.nativeElement.dropDownPosition = value : undefined;
	}

	/** @description Sets or gets the Label of the element. */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description Sets or gets the Label type of the element. */
	@Input()
	get labelType(): BootstrapDropDownLabelType {
		return this.nativeElement ? this.nativeElement.labelType : undefined;
	}
	set labelType(value: BootstrapDropDownLabelType) {
		this.nativeElement ? this.nativeElement.labelType = value : undefined;
	}

	/** @description Sets or gets the Href of the element. */
	@Input()
	get href(): string {
		return this.nativeElement ? this.nativeElement.href : undefined;
	}
	set href(value: string) {
		this.nativeElement ? this.nativeElement.href = value : undefined;
	}

	/** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Gets or sets whether the dropdown is opened.  */
	@Input()
	get opened(): boolean {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		this.nativeElement ? this.nativeElement.opened = value : undefined;
	}

	/** @description Gets or sets whether the dropdown is outlined.  */
	@Input()
	get outlined(): boolean {
		return this.nativeElement ? this.nativeElement.outlined : undefined;
	}
	set outlined(value: boolean) {
		this.nativeElement ? this.nativeElement.outlined = value : undefined;
	}

	/** @description Sets or gets the style mode of the element. */
	@Input()
	get styleMode(): BootstrapDropDownStyleMode {
		return this.nativeElement ? this.nativeElement.styleMode : undefined;
	}
	set styleMode(value: BootstrapDropDownStyleMode) {
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

	/** @description Show event is triggered when the dropdown is going to show.
	*  @param event. The custom event. 	*/
	@Output() onShow: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Shown event is triggered when the dropdown is shown.
	*  @param event. The custom event. 	*/
	@Output() onShown: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Hide event is triggered when the dropdown is going to be hidden.
	*  @param event. The custom event. 	*/
	@Output() onHide: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Hidden event is triggered when the dropdown is hidden
	*  @param event. The custom event. 	*/
	@Output() onHidden: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Toggles the dropdown visibility 
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

	/** @description Shows the dropdown 
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

	/** @description Hides the dropdown 
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

		that.eventHandlers['shownHandler'] = (event: CustomEvent) => { that.onShown.emit(event); }
		that.nativeElement.addEventListener('shown', that.eventHandlers['shownHandler']);

		that.eventHandlers['hideHandler'] = (event: CustomEvent) => { that.onHide.emit(event); }
		that.nativeElement.addEventListener('hide', that.eventHandlers['hideHandler']);

		that.eventHandlers['hiddenHandler'] = (event: CustomEvent) => { that.onHidden.emit(event); }
		that.nativeElement.addEventListener('hidden', that.eventHandlers['hiddenHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['showHandler']) {
			that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
		}

		if (that.eventHandlers['shownHandler']) {
			that.nativeElement.removeEventListener('shown', that.eventHandlers['shownHandler']);
		}

		if (that.eventHandlers['hideHandler']) {
			that.nativeElement.removeEventListener('hide', that.eventHandlers['hideHandler']);
		}

		if (that.eventHandlers['hiddenHandler']) {
			that.nativeElement.removeEventListener('hidden', that.eventHandlers['hiddenHandler']);
		}

	}
}
