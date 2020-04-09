import { FilterPanel } from './../index';
import { Animation, FilterPanelFilterType, FilterPanelMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, FilterPanelFilterType, FilterPanelMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { FilterPanel } from './../index';


@Directive({
	selector: 'smart-filter-panel, [smart-filter-panel]'
})

export class FilterPanelComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<FilterPanel>) {
		super(ref);
		this.nativeElement = ref.nativeElement as FilterPanel;
	}

	private eventHandlers: any[] = [];

	public nativeElement: FilterPanel;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <FilterPanel>document.createElement('smart-filter-panel');
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

	/** @description Defines which operation buttons will be shown in the filter panel */
	@Input()
	get buttons(): string[] {
		return this.nativeElement ? this.nativeElement.buttons : undefined;
	}
	set buttons(value: string[]) {
		this.nativeElement ? this.nativeElement.buttons = value : undefined;
	}

	/** @description Array in mode: 'excel', determines the data to extract unique filter values from. The expected format of the data is an array of objects with key-value pairs (JSON array) */
	@Input()
	get data(): number[] {
		return this.nativeElement ? this.nativeElement.data : undefined;
	}
	set data(value: number[]) {
		this.nativeElement ? this.nativeElement.data = value : undefined;
	}

	/** @description Describes filtered data field. */
	@Input()
	get dataField(): string {
		return this.nativeElement ? this.nativeElement.dataField : undefined;
	}
	set dataField(value: string) {
		this.nativeElement ? this.nativeElement.dataField = value : undefined;
	}

	/** @description If set to an array, determines a custom collection of filter values to be displayed. If set to a callback function, the user can add custom filter values dynamically to the default filter values (in this case, the evaluateFilterExpression function must also be implemented) .dataSource  is only available in mode: 'excel'. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables filter panel. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Callback function, used for custom evaluations in filter panel. */
	@Input()
	get evaluateFilterExpression(): any {
		return this.nativeElement ? this.nativeElement.evaluateFilterExpression : undefined;
	}
	set evaluateFilterExpression(value: any) {
		this.nativeElement ? this.nativeElement.evaluateFilterExpression = value : undefined;
	}

	/** @description Defines which filter type is used. */
	@Input()
	get filterType(): FilterPanelFilterType {
		return this.nativeElement ? this.nativeElement.filterType : undefined;
	}
	set filterType(value: FilterPanelFilterType) {
		this.nativeElement ? this.nativeElement.filterType = value : undefined;
	}

	/** @description Format string used in filterType 'Date'. */
	@Input()
	get formatString(): string {
		return this.nativeElement ? this.nativeElement.formatString : undefined;
	}
	set formatString(value: string) {
		this.nativeElement ? this.nativeElement.formatString = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Defines field names of the filtered element. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Desfines filter panel's  mode */
	@Input()
	get mode(): FilterPanelMode {
		return this.nativeElement ? this.nativeElement.mode : undefined;
	}
	set mode(value: FilterPanelMode) {
		this.nativeElement ? this.nativeElement.mode = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description This event is triggered when the current filtering is discarted.
	*  @param event. The custom event. 	*/
	@Output() onCancel: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the current filtering is cleared.
	*  @param event. The custom event. 	*/
	@Output() onClear: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when filter panel settings are applied.
	*  @param event. The custom event. 	*/
	@Output() onFilter: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Discards current filtering. 
	*/
    public cancel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancel();
            });
        }
    }

	/** @description Clears current filtering. 
	*/
    public clear(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clear();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clear();
            });
        }
    }

	/** @description Evaluates a filter. 
	* @param {any} value. The evalueated element in filter panel.
	*/
    public evaluate(value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.evaluate(value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.evaluate(value);
            });
        }
    }

	/** @description Applies current filtering. 
	*/
    public filter(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.filter();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.filter();
            });
        }
    }

	/** @description Gets the current filter state. 
	* @returns {any}
  */
	public async getState(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getState();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Loads a previously saved filter state. 
	* @param {any} state. An object returned by the method getState.
	*/
    public loadState(state: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
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
		that.eventHandlers['cancelHandler'] = (event: CustomEvent) => { that.onCancel.emit(event); }
		that.nativeElement.addEventListener('cancel', that.eventHandlers['cancelHandler']);

		that.eventHandlers['clearHandler'] = (event: CustomEvent) => { that.onClear.emit(event); }
		that.nativeElement.addEventListener('clear', that.eventHandlers['clearHandler']);

		that.eventHandlers['filterHandler'] = (event: CustomEvent) => { that.onFilter.emit(event); }
		that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['cancelHandler']) {
			that.nativeElement.removeEventListener('cancel', that.eventHandlers['cancelHandler']);
		}

		if (that.eventHandlers['clearHandler']) {
			that.nativeElement.removeEventListener('clear', that.eventHandlers['clearHandler']);
		}

		if (that.eventHandlers['filterHandler']) {
			that.nativeElement.onfilterHandler = null;
		}

	}
}
