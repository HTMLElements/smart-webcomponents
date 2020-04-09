import { MultiColumnFilterPanel } from './../index';
import { Animation, MultiColumnFilterPanelCloseButtonPosition, MultiColumnFilterPanelOperator, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, MultiColumnFilterPanelCloseButtonPosition, MultiColumnFilterPanelOperator, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { MultiColumnFilterPanel } from './../index';


@Directive({
	selector: 'smart-multi-column-filter-panel, [smart-multi-column-filter-panel]'
})

export class MultiColumnFilterPanelComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<MultiColumnFilterPanel>) {
		super(ref);
		this.nativeElement = ref.nativeElement as MultiColumnFilterPanel;
	}

	private eventHandlers: any[] = [];

	public nativeElement: MultiColumnFilterPanel;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <MultiColumnFilterPanel>document.createElement('smart-multi-column-filter-panel');
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

	/** @description Sets or gets the position of the close button of multi column filter panel items. */
	@Input()
	get closeButtonPosition(): MultiColumnFilterPanelCloseButtonPosition {
		return this.nativeElement ? this.nativeElement.closeButtonPosition : undefined;
	}
	set closeButtonPosition(value: MultiColumnFilterPanelCloseButtonPosition) {
		this.nativeElement ? this.nativeElement.closeButtonPosition = value : undefined;
	}

	/** @description Determines the data source that will be loaded to the multi column filter panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be grouped.dataType - the data type of the column to be grouped.groupIndex - the group order of columns. If this value is -1, the grouping will not be applied by this column initially.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied when grouping. Possible values: 'ascending' and 'descending'. */
	@Input()
	get dataSource(): {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables the multi column filter panel. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description A callback function that can be used to modify the settings of value editors. */
	@Input()
	get editorCallback(): any {
		return this.nativeElement ? this.nativeElement.editorCallback : undefined;
	}
	set editorCallback(value: any) {
		this.nativeElement ? this.nativeElement.editorCallback = value : undefined;
	}

	/** @description Sets or gets the placeholder for the filter value editors. */
	@Input()
	get editorPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.editorPlaceholder : undefined;
	}
	set editorPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.editorPlaceholder = value : undefined;
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

	/** @description Sets or gets the maximum number of columns to group by. If set to null, there is no limit. */
	@Input()
	get maxLevel(): number {
		return this.nativeElement ? this.nativeElement.maxLevel : undefined;
	}
	set maxLevel(value: number) {
		this.nativeElement ? this.nativeElement.maxLevel = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Determines the logical operator between the items. */
	@Input()
	get operator(): MultiColumnFilterPanelOperator {
		return this.nativeElement ? this.nativeElement.operator : undefined;
	}
	set operator(value: MultiColumnFilterPanelOperator) {
		this.nativeElement ? this.nativeElement.operator = value : undefined;
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

	/** @description Sets of gets the initial value of the element. */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description This event is triggered when the "Apply" button is clicked.
	*  @param event. The custom event. 	*/
	@Output() onApply: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the "Cancel" button is clicked.
	*  @param event. The custom event. 	*/
	@Output() onCancel: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the "Collapse all" button is clicked.
	*  @param event. The custom event. 	*/
	@Output() onCollapseAll: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the "Expand all" button is clicked.
	*  @param event. The custom event. 	*/
	@Output() onExpandAll: EventEmitter<CustomEvent> = new EventEmitter();


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

		that.eventHandlers['collapseAllHandler'] = (event: CustomEvent) => { that.onCollapseAll.emit(event); }
		that.nativeElement.addEventListener('collapseAll', that.eventHandlers['collapseAllHandler']);

		that.eventHandlers['expandAllHandler'] = (event: CustomEvent) => { that.onExpandAll.emit(event); }
		that.nativeElement.addEventListener('expandAll', that.eventHandlers['expandAllHandler']);

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

		if (that.eventHandlers['collapseAllHandler']) {
			that.nativeElement.removeEventListener('collapseAll', that.eventHandlers['collapseAllHandler']);
		}

		if (that.eventHandlers['expandAllHandler']) {
			that.nativeElement.removeEventListener('expandAll', that.eventHandlers['expandAllHandler']);
		}

	}
}
