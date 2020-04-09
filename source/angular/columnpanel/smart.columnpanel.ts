import { ColumnPanel } from './../index';
import { Animation, ColumnPanelDataSource, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ColumnPanelDataSource, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { ColumnPanel } from './../index';


@Directive({
	selector: 'smart-column-panel, [smart-column-panel]'
})

export class ColumnPanelComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<ColumnPanel>) {
		super(ref);
		this.nativeElement = ref.nativeElement as ColumnPanel;
	}

	private eventHandlers: any[] = [];

	public nativeElement: ColumnPanel;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <ColumnPanel>document.createElement('smart-column-panel');
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

	/** @description Determines the data source that will be loaded to the column panel. */
	@Input()
	get dataSource(): ColumnPanelDataSource[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: ColumnPanelDataSource[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables the column panel. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages. */
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

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
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

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description This event is triggered when the "Apply" button is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	positionChanged)
	*   value - The current configuration of columns (data source).
	*   positionChanged - A boolean detail that shows whether the columns have been reordered.
	*/
	@Output() onApply: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the "Cancel" button is clicked.
	*  @param event. The custom event. 	*/
	@Output() onCancel: EventEmitter<CustomEvent> = new EventEmitter();


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
		that.eventHandlers['applyHandler'] = (event: CustomEvent) => { that.onApply.emit(event); }
		that.nativeElement.addEventListener('apply', that.eventHandlers['applyHandler']);

		that.eventHandlers['cancelHandler'] = (event: CustomEvent) => { that.onCancel.emit(event); }
		that.nativeElement.addEventListener('cancel', that.eventHandlers['cancelHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['applyHandler']) {
			that.nativeElement.removeEventListener('apply', that.eventHandlers['applyHandler']);
		}

		if (that.eventHandlers['cancelHandler']) {
			that.nativeElement.removeEventListener('cancel', that.eventHandlers['cancelHandler']);
		}

	}
}
