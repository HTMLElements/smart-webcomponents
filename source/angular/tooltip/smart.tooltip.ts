import { Tooltip } from './../index';
import { Animation, TooltipArrowDirection, TooltipOpenMode, TooltipPosition, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, TooltipArrowDirection, TooltipOpenMode, TooltipPosition, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Tooltip } from './../index';


@Directive({
	selector: 'smart-tooltip, [smart-tooltip]'
})

export class TooltipComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Tooltip>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Tooltip;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Tooltip;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Tooltip>document.createElement('smart-tooltip');
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

	/** @description Gets or sets whether a tooltip's arrow will be shown. */
	@Input()
	get arrow(): boolean {
		return this.nativeElement ? this.nativeElement.arrow : undefined;
	}
	set arrow(value: boolean) {
		this.nativeElement ? this.nativeElement.arrow = value : undefined;
	}

	/** @description Sets the position of the arrow. */
	@Input()
	get arrowDirection(): TooltipArrowDirection {
		return this.nativeElement ? this.nativeElement.arrowDirection : undefined;
	}
	set arrowDirection(value: TooltipArrowDirection) {
		this.nativeElement ? this.nativeElement.arrowDirection = value : undefined;
	}

	/** @description Gets or sets whether a tooltip's arrow will be shown. */
	@Input()
	get delay(): number {
		return this.nativeElement ? this.nativeElement.delay : undefined;
	}
	set delay(value: number) {
		this.nativeElement ? this.nativeElement.delay = value : undefined;
	}

	/** @description Enables or disables the tooltip. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets an offset by X and Y. */
	@Input()
	get offset(): number[] {
		return this.nativeElement ? this.nativeElement.offset : undefined;
	}
	set offset(value: number[]) {
		this.nativeElement ? this.nativeElement.offset = value : undefined;
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

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets the way of triggering the tooltip. */
	@Input()
	get openMode(): TooltipOpenMode {
		return this.nativeElement ? this.nativeElement.openMode : undefined;
	}
	set openMode(value: TooltipOpenMode) {
		this.nativeElement ? this.nativeElement.openMode = value : undefined;
	}

	/** @description Gets or sets the position of the tooltip. */
	@Input()
	get position(): TooltipPosition {
		return this.nativeElement ? this.nativeElement.position : undefined;
	}
	set position(value: TooltipPosition) {
		this.nativeElement ? this.nativeElement.position = value : undefined;
	}

	/** @description Sets the element which triggers the tooltip. */
	@Input()
	get selector(): any {
		return this.nativeElement ? this.nativeElement.selector : undefined;
	}
	set selector(value: any) {
		this.nativeElement ? this.nativeElement.selector = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets custom tooltip template. */
	@Input()
	get tooltipTemplate(): any {
		return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	}
	set tooltipTemplate(value: any) {
		this.nativeElement ? this.nativeElement.tooltipTemplate = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description Sets or gets the widget's value. */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Sets or gets the visibility of the tooltip. */
	@Input()
	get visible(): boolean {
		return this.nativeElement ? this.nativeElement.visible : undefined;
	}
	set visible(value: boolean) {
		this.nativeElement ? this.nativeElement.visible = value : undefined;
	}

	/** @description This event is triggered when the tooltip is opened.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the tooltip is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Closes smart-tooltip.  
	*/
    public close(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }

	/** @description Opens smart-tooltip.  
	*/
    public open(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }

	/** @description Toggles smart-tooltip.  
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
		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

	}
}
