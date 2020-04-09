import { CardView } from './../index';
import { Animation, Orientation, CardViewCoverMode, CardViewHeaderPosition, Scrolling, CardViewColumn, ElementRenderMode} from './../index';
import { DataAdapter } from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, Orientation, CardViewCoverMode, CardViewHeaderPosition, Scrolling, CardViewColumn, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { CardView } from './../index';
export { DataAdapter } from './../index';


@Directive({
	selector: 'smart-card-view, [smart-card-view]'
})

export class CardViewComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<CardView>) {
		super(ref);
		this.nativeElement = ref.nativeElement as CardView;
	}

	private eventHandlers: any[] = [];

	public nativeElement: CardView;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <CardView>document.createElement('smart-card-view');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Toggles the button for adding new cards. */
	@Input()
	get addNewButton(): boolean {
		return this.nativeElement ? this.nativeElement.addNewButton : undefined;
	}
	set addNewButton(value: boolean) {
		this.nativeElement ? this.nativeElement.addNewButton = value : undefined;
	}

	/** @description Allows reordering by dragging cards. */
	@Input()
	get allowDrag(): boolean {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value: boolean) {
		this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
	}

	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Describes the height for each card. */
	@Input()
	get cardHeight(): number | null {
		return this.nativeElement ? this.nativeElement.cardHeight : undefined;
	}
	set cardHeight(value: number | null) {
		this.nativeElement ? this.nativeElement.cardHeight = value : undefined;
	}

	/** @description Describes the orientation of the card cells. */
	@Input()
	get cellOrientation(): Orientation {
		return this.nativeElement ? this.nativeElement.cellOrientation : undefined;
	}
	set cellOrientation(value: Orientation) {
		this.nativeElement ? this.nativeElement.cellOrientation = value : undefined;
	}

	/** @description Allows collapsing the card content. */
	@Input()
	get collapsible(): boolean {
		return this.nativeElement ? this.nativeElement.collapsible : undefined;
	}
	set collapsible(value: boolean) {
		this.nativeElement ? this.nativeElement.collapsible = value : undefined;
	}

	/** @description Describes the columns properties:label - Sets the column namedataField - Sets the dataField nameicon - Sets the icon for the columnformatSettings - Sets the settings about the format for the current columnformatFunction - Function for customizing the value */
	@Input()
	get columns(): CardViewColumn[] {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: CardViewColumn[]) {
		this.nativeElement ? this.nativeElement.columns = value : undefined;
	}

	/** @description Describes which data field to be set as cover. */
	@Input()
	get coverField(): string {
		return this.nativeElement ? this.nativeElement.coverField : undefined;
	}
	set coverField(value: string) {
		this.nativeElement ? this.nativeElement.coverField = value : undefined;
	}

	/** @description Describes the cover image fit property. */
	@Input()
	get coverMode(): CardViewCoverMode {
		return this.nativeElement ? this.nativeElement.coverMode : undefined;
	}
	set coverMode(value: CardViewCoverMode) {
		this.nativeElement ? this.nativeElement.coverMode = value : undefined;
	}

	/** @description Determines the data source for the item that will be displayed inside the card. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Allows the edit option for the cards. */
	@Input()
	get editable(): boolean {
		return this.nativeElement ? this.nativeElement.editable : undefined;
	}
	set editable(value: boolean) {
		this.nativeElement ? this.nativeElement.editable = value : undefined;
	}

	/** @description Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons. */
	@Input()
	get headerPosition(): CardViewHeaderPosition {
		return this.nativeElement ? this.nativeElement.headerPosition : undefined;
	}
	set headerPosition(value: CardViewHeaderPosition) {
		this.nativeElement ? this.nativeElement.headerPosition = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Callback function, used when record is inserted. */
	@Input()
	get onRecordInserted(): any {
		return this.nativeElement ? this.nativeElement.onRecordInserted : undefined;
	}
	set onRecordInserted(value: any) {
		this.nativeElement ? this.nativeElement.onRecordInserted = value : undefined;
	}

	/** @description Callback function, used when record is removed. */
	@Input()
	get onRecordRemoved(): any {
		return this.nativeElement ? this.nativeElement.onRecordRemoved : undefined;
	}
	set onRecordRemoved(value: any) {
		this.nativeElement ? this.nativeElement.onRecordRemoved = value : undefined;
	}

	/** @description Describes the scrolling behavior of the element. */
	@Input()
	get scrolling(): Scrolling {
		return this.nativeElement ? this.nativeElement.scrolling : undefined;
	}
	set scrolling(value: Scrolling) {
		this.nativeElement ? this.nativeElement.scrolling = value : undefined;
	}

	/** @description Describes which data field to be set as title. */
	@Input()
	get titleField(): string {
		return this.nativeElement ? this.nativeElement.titleField : undefined;
	}
	set titleField(value: string) {
		this.nativeElement ? this.nativeElement.titleField = value : undefined;
	}

	/** @description This event is triggered when a filter has been applied.
	*  @param event. The custom event. 	*/
	@Output() onFilter: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when sorting has been applied.
	*  @param event. The custom event. 	*/
	@Output() onSort: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is opened.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user starts dragging the card.
	*  @param event. The custom event. 	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user is dragging the card.
	*  @param event. The custom event. 	*/
	@Output() onDragging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user dragged the card.
	*  @param event. The custom event. 	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds filtering 
	* @param {string[]} filters. Filter information
	* @param {string} operator?. Logical operator between the filters of different fields
	*/
    public addFilter(filters: string[], operator?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(filters, operator);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(filters, operator);
            });
        }
    }

	/** @description Adds a new record 
	* @param {number | string} recordId?. The id of the record to add
	* @param {any} data?. The data of the record to add
	* @param {string} position?. The position to add the record to. Possible values: 'first' and 'last'.
	*/
    public addRecord(recordId?: number | string, data?: any, position?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addRecord(recordId, data, position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addRecord(recordId, data, position);
            });
        }
    }

	/** @description Adds sorting 
	* @param {[] | string} dataFields. The data field(s) to sort by
	* @param {[] | string} orderBy. The sort direction(s) to sort the data field(s) by
	*/
    public addSort(dataFields: [] | string, orderBy: [] | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addSort(dataFields, orderBy);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addSort(dataFields, orderBy);
            });
        }
    }

	/** @description Begins an edit operation 
	* @param {number | string} recordId. The id of the record to edit
	*/
    public beginEdit(recordId: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(recordId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(recordId);
            });
        }
    }

	/** @description Ends the current edit operation and discards changes 
	*/
    public cancelEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelEdit();
            });
        }
    }

	/** @description Closes any open header panel (drop down) 
	*/
    public closePanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closePanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closePanel();
            });
        }
    }

	/** @description Ends the current edit operation and saves changes 
	*/
    public endEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endEdit();
            });
        }
    }

	/** @description Makes sure a record is visible by scrolling to it. If succcessful, the method returns the HTML element of the record's card. 
	* @param {number | string} recordId. The id of the record to scroll to
	* @returns {HTMLElement}
  */
	public async ensureVisible(recordId): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.ensureVisible(recordId);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Opens the "Customize cards" header panel (drop down) 
	*/
    public openCustomizePanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openCustomizePanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openCustomizePanel();
            });
        }
    }

	/** @description Opens the "Filter" header panel (drop down) 
	*/
    public openFilterPanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openFilterPanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openFilterPanel();
            });
        }
    }

	/** @description Opens the "Sort" header panel (drop down) 
	*/
    public openSortPanel(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openSortPanel();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openSortPanel();
            });
        }
    }

	/** @description Removes filtering 
	*/
    public removeFilter(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter();
            });
        }
    }

	/** @description Removes a record 
	* @param {number | string} recordId. The id of the record to remove
	*/
    public removeRecord(recordId: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeRecord(recordId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeRecord(recordId);
            });
        }
    }

	/** @description Removes sorting 
	*/
    public removeSort(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeSort();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeSort();
            });
        }
    }

	/** @description Shows a column 
	* @param {string} dataField. The data field of the column
	*/
    public showColumn(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showColumn(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showColumn(dataField);
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
		that.eventHandlers['filterHandler'] = (event: CustomEvent) => { that.onFilter.emit(event); }
		that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);

		that.eventHandlers['sortHandler'] = (event: CustomEvent) => { that.onSort.emit(event); }
		that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['draggingHandler'] = (event: CustomEvent) => { that.onDragging.emit(event); }
		that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['filterHandler']) {
			that.nativeElement.onfilterHandler = null;
		}

		if (that.eventHandlers['sortHandler']) {
			that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['dragStartHandler']) {
			that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
		}

		if (that.eventHandlers['draggingHandler']) {
			that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
		}

		if (that.eventHandlers['dragEndHandler']) {
			that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
		}

	}
}
