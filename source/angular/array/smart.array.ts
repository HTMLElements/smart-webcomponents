import { Array } from './../index';
import { Animation, ArrayArrayIndexingMode, ArrayType, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ArrayArrayIndexingMode, ArrayType, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Array } from './../index';


@Directive({
	selector: 'smart-array, [smart-array]'
})

export class ArrayComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Array>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Array;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Array;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Array>document.createElement('smart-array');
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

	/** @description Sets or gets the indexing mode of the Array. */
	@Input()
	get arrayIndexingMode(): ArrayArrayIndexingMode {
		return this.nativeElement ? this.nativeElement.arrayIndexingMode : undefined;
	}
	set arrayIndexingMode(value: ArrayArrayIndexingMode) {
		this.nativeElement ? this.nativeElement.arrayIndexingMode = value : undefined;
	}

	/** @description A callback function that is called when the width, height or disabled properties of an inner element need to be updated. Applicable only when type is 'custom'. */
	@Input()
	get changeProperty(): any {
		return this.nativeElement ? this.nativeElement.changeProperty : undefined;
	}
	set changeProperty(value: any) {
		this.nativeElement ? this.nativeElement.changeProperty = value : undefined;
	}

	/** @description Sets or gets the number of visible columns in the Array. */
	@Input()
	get columns(): number {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: number) {
		this.nativeElement ? this.nativeElement.columns = value : undefined;
	}

	/** @description Sets or gets the default value of inner elements when type is 'custom'. */
	@Input()
	get customWidgetDefaultValue(): any {
		return this.nativeElement ? this.nativeElement.customWidgetDefaultValue : undefined;
	}
	set customWidgetDefaultValue(value: any) {
		this.nativeElement ? this.nativeElement.customWidgetDefaultValue = value : undefined;
	}

	/** @description Sets or gets the dimensions of the Array. */
	@Input()
	get dimensions(): number {
		return this.nativeElement ? this.nativeElement.dimensions : undefined;
	}
	set dimensions(value: number) {
		this.nativeElement ? this.nativeElement.dimensions = value : undefined;
	}

	/** @description Sets or gets disabled state of the Array. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets the height of Array elements (row height). */
	@Input()
	get elementHeight(): number {
		return this.nativeElement ? this.nativeElement.elementHeight : undefined;
	}
	set elementHeight(value: number) {
		this.nativeElement ? this.nativeElement.elementHeight = value : undefined;
	}

	/** @description A callback function that can be used for applying settings to element widgets. When type is 'custom', widgets have to be initialized in this callback function. */
	@Input()
	get elementTemplate(): any {
		return this.nativeElement ? this.nativeElement.elementTemplate : undefined;
	}
	set elementTemplate(value: any) {
		this.nativeElement ? this.nativeElement.elementTemplate = value : undefined;
	}

	/** @description Sets or gets the width of Array elements (column width). */
	@Input()
	get elementWidth(): number {
		return this.nativeElement ? this.nativeElement.elementWidth : undefined;
	}
	set elementWidth(value: number) {
		this.nativeElement ? this.nativeElement.elementWidth = value : undefined;
	}

	/** @description A callback function that can be used for getting the value of element widgets. */
	@Input()
	get getElementValue(): any {
		return this.nativeElement ? this.nativeElement.getElementValue : undefined;
	}
	set getElementValue(value: any) {
		this.nativeElement ? this.nativeElement.getElementValue = value : undefined;
	}

	/** @description Sets or gets the height of indexers. */
	@Input()
	get indexerHeight(): number {
		return this.nativeElement ? this.nativeElement.indexerHeight : undefined;
	}
	set indexerHeight(value: number) {
		this.nativeElement ? this.nativeElement.indexerHeight = value : undefined;
	}

	/** @description Sets or gets the width of indexers. */
	@Input()
	get indexerWidth(): number {
		return this.nativeElement ? this.nativeElement.indexerWidth : undefined;
	}
	set indexerWidth(value: number) {
		this.nativeElement ? this.nativeElement.indexerWidth = value : undefined;
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

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Sets or gets the number of visible rows in the Array. */
	@Input()
	get rows(): number {
		return this.nativeElement ? this.nativeElement.rows : undefined;
	}
	set rows(value: number) {
		this.nativeElement ? this.nativeElement.rows = value : undefined;
	}

	/** @description A callback function that can be used for setting the value of element widgets. */
	@Input()
	get setElementValue(): any {
		return this.nativeElement ? this.nativeElement.setElementValue : undefined;
	}
	set setElementValue(value: any) {
		this.nativeElement ? this.nativeElement.setElementValue = value : undefined;
	}

	/** @description Sets or gets whether to display the horizontal scrollbar. */
	@Input()
	get showHorizontalScrollbar(): boolean {
		return this.nativeElement ? this.nativeElement.showHorizontalScrollbar : undefined;
	}
	set showHorizontalScrollbar(value: boolean) {
		this.nativeElement ? this.nativeElement.showHorizontalScrollbar = value : undefined;
	}

	/** @description Sets or gets whether to display the array indexers. */
	@Input()
	get showIndexDisplay(): boolean {
		return this.nativeElement ? this.nativeElement.showIndexDisplay : undefined;
	}
	set showIndexDisplay(value: boolean) {
		this.nativeElement ? this.nativeElement.showIndexDisplay = value : undefined;
	}

	/** @description Sets or gets whether to highlight selected elements. */
	@Input()
	get showSelection(): boolean {
		return this.nativeElement ? this.nativeElement.showSelection : undefined;
	}
	set showSelection(value: boolean) {
		this.nativeElement ? this.nativeElement.showSelection = value : undefined;
	}

	/** @description Sets or gets whether to display the vertical scrollbar. */
	@Input()
	get showVerticalScrollbar(): boolean {
		return this.nativeElement ? this.nativeElement.showVerticalScrollbar : undefined;
	}
	set showVerticalScrollbar(value: boolean) {
		this.nativeElement ? this.nativeElement.showVerticalScrollbar = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets or gets the data type and element widgets to be used in the Array. */
	@Input()
	get type(): ArrayType {
		return this.nativeElement ? this.nativeElement.type : undefined;
	}
	set type(value: ArrayType) {
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

	/** @description Sets or gets the value of the Array. */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description This event is triggered when a visible row or column has been added or removed.
	*  @param event. The custom event. 	*/
	@Output() onArraySizeChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the value of the Array is changed.
	*  @param event. The custom event. 	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a dimension has been added or removed.
	*  @param event. The custom event. 	*/
	@Output() onDimensionChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an Array element has been clicked.
	*  @param event. The custom event. 	*/
	@Output() onElementClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the Array is scrolled with one of the scrollbars.
	*  @param event. The custom event. 	*/
	@Output() onScroll: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the column width or the row height has been changed.
	*  @param event. The custom event. 	*/
	@Output() onSizeChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds a dimension to the array. Note: when adding multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property. 
	*/
    public addDimension(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addDimension();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addDimension();
            });
        }
    }

	/** @description Clears the selection. 
	*/
    public clearSelection(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }

	/** @description Copies the value of an Array element to the clipboard. 
	* @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
	* @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
	*/
    public copyElementValueToClipboard(Rowvisibleindex: number, Columnvisibleindex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.copyElementValueToClipboard(Rowvisibleindex, Columnvisibleindex);
            });
        }
    }

	/** @description Deletes a column in the value array. 
	* @param {number} Columnindex. Index of the column to be deleted.
	*/
    public deleteColumn(Columnindex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteColumn(Columnindex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.deleteColumn(Columnindex);
            });
        }
    }

	/** @description Deletes a row in the value array. 
	* @param {number} Rowindex. Index of the row to be deleted.
	*/
    public deleteRow(Rowindex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteRow(Rowindex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.deleteRow(Rowindex);
            });
        }
    }

	/** @description Empties the value array. 
	*/
    public emptyArray(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.emptyArray();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.emptyArray();
            });
        }
    }

	/** @description Designates the end of a selection started with the method startSelection. 
	* @param {number} Rowboundindex. The bound index of the row (y coordinate) to end the selection to.
	* @param {number} Columnboundindex. The bound index of the column (x coordinate) to end the selection to.
	*/
    public endSelection(Rowboundindex: number, Columnboundindex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endSelection(Rowboundindex, Columnboundindex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endSelection(Rowboundindex, Columnboundindex);
            });
        }
    }

	/** @description Returns the HTML element at the specified visible row and column coordinates of the Array. 
	* @param {number} Rowvisibleindex. The visible index of the row (y coordinate) of the element.
	* @param {number} Columnvisibleindex. The visible index of the column (x coordinate) of the element.
	* @returns {HTMLElement}
  */
	public async getElement(Rowvisibleindex, Columnvisibleindex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getElement(Rowvisibleindex, Columnvisibleindex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns an object with the values of the Array element width and height. 
	* @returns {any}
  */
	public async getElementSize(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getElementSize();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets an array with the values of all indexers. 
	* @returns {any[]}
  */
	public async getIndexerValue(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getIndexerValue();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns an HTML element from the Array at the specified page coordinates and other information about this element. 
	* @param {number} Pagexcoordinate. 
	* @param {number} Pageycoordinate. 
	* @returns {any}
  */
	public async hitTest(Pagexcoordinate, Pageycoordinate): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.hitTest(Pagexcoordinate, Pageycoordinate);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Inserts a column in the value array before the specified column. The new column is filled with default values. 
	* @param {number} Columnindex. Index of the column to add a new column before.
	*/
    public insertColumnBefore(Columnindex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertColumnBefore(Columnindex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertColumnBefore(Columnindex);
            });
        }
    }

	/** @description Inserts a row in the value array before the specified row. The new row is filled with default values. 
	* @param {number} Rowindex. Index of the row to add a new row before.
	*/
    public insertRowBefore(Rowindex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertRowBefore(Rowindex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertRowBefore(Rowindex);
            });
        }
    }

	/** @description Sets all value array members to the default value. 
	*/
    public reinitializeArray(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reinitializeArray();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reinitializeArray();
            });
        }
    }

	/** @description Removes a dimension from the array. Note: when removing multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property. 
	*/
    public removeDimension(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeDimension();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeDimension();
            });
        }
    }

	/** @description Sets the array's type to 'none'. 
	*/
    public reset(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reset();
            });
        }
    }

	/** @description Resizes Array elements (changes both the column width and the row height). 
	* @param {number} Elementwidth. The new element (column) width.
	* @param {number} Elementheight. The new element (row) height.
	*/
    public resizeElement(Elementwidth: number, Elementheight: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.resizeElement(Elementwidth, Elementheight);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.resizeElement(Elementwidth, Elementheight);
            });
        }
    }

	/** @description Selects all members of the array. 
	*/
    public selectAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectAll();
            });
        }
    }

	/** @description Selects an element with the passed row and column bound indexes. 
	* @param {number} Rowboundindex. 
	* @param {number} Columnboundindex. 
	*/
    public selectElement(Rowboundindex: number, Columnboundindex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectElement(Rowboundindex, Columnboundindex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectElement(Rowboundindex, Columnboundindex);
            });
        }
    }

	/** @description Sets the column (element) width. 
	* @param {number} Columnwidth. The new column width.
	*/
    public setColumnWidth(Columnwidth: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setColumnWidth(Columnwidth);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setColumnWidth(Columnwidth);
            });
        }
    }

	/** @description Sets the default value of array members. 
	* @param {any} Defaultvalue. The new default value. Its data type should correspond to the <strong>type</strong> of the Array.
	*/
    public setDefaultValue(Defaultvalue: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setDefaultValue(Defaultvalue);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setDefaultValue(Defaultvalue);
            });
        }
    }

	/** @description Sets the value of one or more Array indexers. 
	* @param {any[]} Settings. An array of objects with the fields index and value.
	*/
    public setIndexerValue(Settings: any[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setIndexerValue(Settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setIndexerValue(Settings);
            });
        }
    }

	/** @description Sets the row (element) height. 
	* @param {number} Rowheight. The new row height.
	*/
    public setRowHeight(Rowheight: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setRowHeight(Rowheight);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setRowHeight(Rowheight);
            });
        }
    }

	/** @description Makes the last array member visible. 
	*/
    public showLastElement(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showLastElement();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showLastElement();
            });
        }
    }

	/** @description Designates the start of a selection. To end a selection, call endSelection. 
	* @param {number} Rowboundindex. The bound index of the row (y coordinate) to start the selection from.
	* @param {number} Columnboundindex. The bound index of the column (x coordinate) to start the selection from.
	*/
    public startSelection(Rowboundindex: number, Columnboundindex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.startSelection(Rowboundindex, Columnboundindex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.startSelection(Rowboundindex, Columnboundindex);
            });
        }
    }

	/** @description Increases or decreases the visual gap between Array elements. 
	*/
    public toggleElementGap(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggleElementGap();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.toggleElementGap();
            });
        }
    }

	/** @description Transposes the array. Applicable only when dimensions is 2 (2D array). 
	*/
    public transposeArray(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.transposeArray();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.transposeArray();
            });
        }
    }

	/** @description Sets or gets the value of the whole array or sets the value of a member of the array. 
	* @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
	* @param {number | number[]} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
	* @returns {any[]}
  */
	public async val(Newvalue?, Elementindexes?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.val(Newvalue, Elementindexes);
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
		that.eventHandlers['arraySizeChangeHandler'] = (event: CustomEvent) => { that.onArraySizeChange.emit(event); }
		that.nativeElement.addEventListener('arraySizeChange', that.eventHandlers['arraySizeChangeHandler']);

		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['dimensionChangeHandler'] = (event: CustomEvent) => { that.onDimensionChange.emit(event); }
		that.nativeElement.addEventListener('dimensionChange', that.eventHandlers['dimensionChangeHandler']);

		that.eventHandlers['elementClickHandler'] = (event: CustomEvent) => { that.onElementClick.emit(event); }
		that.nativeElement.addEventListener('elementClick', that.eventHandlers['elementClickHandler']);

		that.eventHandlers['scrollHandler'] = (event: CustomEvent) => { that.onScroll.emit(event); }
		that.nativeElement.addEventListener('scroll', that.eventHandlers['scrollHandler']);

		that.eventHandlers['sizeChangeHandler'] = (event: CustomEvent) => { that.onSizeChange.emit(event); }
		that.nativeElement.addEventListener('sizeChange', that.eventHandlers['sizeChangeHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['arraySizeChangeHandler']) {
			that.nativeElement.removeEventListener('arraySizeChange', that.eventHandlers['arraySizeChangeHandler']);
		}

		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['dimensionChangeHandler']) {
			that.nativeElement.removeEventListener('dimensionChange', that.eventHandlers['dimensionChangeHandler']);
		}

		if (that.eventHandlers['elementClickHandler']) {
			that.nativeElement.removeEventListener('elementClick', that.eventHandlers['elementClickHandler']);
		}

		if (that.eventHandlers['scrollHandler']) {
			that.nativeElement.removeEventListener('scroll', that.eventHandlers['scrollHandler']);
		}

		if (that.eventHandlers['sizeChangeHandler']) {
			that.nativeElement.removeEventListener('sizeChange', that.eventHandlers['sizeChangeHandler']);
		}

	}
}
