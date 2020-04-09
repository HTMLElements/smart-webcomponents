import { SortPanel } from './../index';
import { Animation, SortPanelCloseButtonPosition, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, SortPanelCloseButtonPosition, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { SortPanel } from './../index';


@Directive({
	selector: 'smart-sort-panel, [smart-sort-panel]'
})

export class SortPanelComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<SortPanel>) {
		super(ref);
		this.nativeElement = ref.nativeElement as SortPanel;
	}

	private eventHandlers: any[] = [];

	public nativeElement: SortPanel;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <SortPanel>document.createElement('smart-sort-panel');
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

	/** @description Sets or gets the the position of the close button of sort panel items. */
	@Input()
	get closeButtonPosition(): SortPanelCloseButtonPosition {
		return this.nativeElement ? this.nativeElement.closeButtonPosition : undefined;
	}
	set closeButtonPosition(value: SortPanelCloseButtonPosition) {
		this.nativeElement ? this.nativeElement.closeButtonPosition = value : undefined;
	}

	/** @description Determines the data source that will be loaded to the sort panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be sorted.dataType - the data type of the column to be sorted.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied. Possible values: 'ascending' and 'descending'.sortIndex - the sort order of columns. If this value is -1, the column will not be initially sorted. */
	@Input()
	get dataSource(): {label: string, dataField: string, dataType: string, sortDirection: string, sortIndex: number}[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: {label: string, dataField: string, dataType: string, sortDirection: string, sortIndex: number}[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables the sort panel. */
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

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
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
	*  @param event. The custom event. 	*/
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
