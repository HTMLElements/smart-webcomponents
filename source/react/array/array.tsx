import React from "react";
import { ArrayProperties } from "./../../index";
import { Animation, ArrayArrayIndexingMode, ArrayType} from './../../index';
export { ArrayProperties } from "./../../index";
export { Animation, ArrayArrayIndexingMode, ArrayType} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface ArrayProps extends ArrayProperties {
    className?: string;
    style?: React.CSSProperties;

	onArraySizeChange?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onDimensionChange?: ((event?: Event) => void) | undefined;
	onElementClick?: ((event?: Event) => void) | undefined;
	onScroll?: ((event?: Event) => void) | undefined;
	onSizeChange?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Array is broadly used in Engineering applications and displays a Grid of values.
*/
export class Array extends React.Component<React.HTMLAttributes<Element> & ArrayProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Array' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
	*	Property type: Animation
	*/
	get animation(): Animation  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Sets or gets the indexing mode of the Array.
	*	Property type: ArrayArrayIndexingMode
	*/
	get arrayIndexingMode(): ArrayArrayIndexingMode  {
		return this.nativeElement ? this.nativeElement.arrayIndexingMode : undefined;
	}
	set arrayIndexingMode(value: ArrayArrayIndexingMode) {
		if (this.nativeElement) {
			this.nativeElement.arrayIndexingMode = value;
		}
	}

	/** A callback function that is called when the width, height or disabled properties of an inner element need to be updated. Applicable only when type is 'custom'.
	*	Property type: any
	*/
	get changeProperty(): any  {
		return this.nativeElement ? this.nativeElement.changeProperty : undefined;
	}
	set changeProperty(value: any) {
		if (this.nativeElement) {
			this.nativeElement.changeProperty = value;
		}
	}

	/** Sets or gets the number of visible columns in the Array.
	*	Property type: number
	*/
	get columns(): number  {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: number) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Sets or gets the default value of inner elements when type is 'custom'.
	*	Property type: any
	*/
	get customWidgetDefaultValue(): any  {
		return this.nativeElement ? this.nativeElement.customWidgetDefaultValue : undefined;
	}
	set customWidgetDefaultValue(value: any) {
		if (this.nativeElement) {
			this.nativeElement.customWidgetDefaultValue = value;
		}
	}

	/** Sets or gets the dimensions of the Array.
	*	Property type: number
	*/
	get dimensions(): number  {
		return this.nativeElement ? this.nativeElement.dimensions : undefined;
	}
	set dimensions(value: number) {
		if (this.nativeElement) {
			this.nativeElement.dimensions = value;
		}
	}

	/** Sets or gets disabled state of the Array.
	*	Property type: boolean
	*/
	get disabled(): boolean  {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Sets or gets the height of Array elements (row height).
	*	Property type: number
	*/
	get elementHeight(): number  {
		return this.nativeElement ? this.nativeElement.elementHeight : undefined;
	}
	set elementHeight(value: number) {
		if (this.nativeElement) {
			this.nativeElement.elementHeight = value;
		}
	}

	/** A callback function that can be used for applying settings to element widgets. When type is 'custom', widgets have to be initialized in this callback function.
	*	Property type: any
	*/
	get elementTemplate(): any  {
		return this.nativeElement ? this.nativeElement.elementTemplate : undefined;
	}
	set elementTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.elementTemplate = value;
		}
	}

	/** Sets or gets the width of Array elements (column width).
	*	Property type: number
	*/
	get elementWidth(): number  {
		return this.nativeElement ? this.nativeElement.elementWidth : undefined;
	}
	set elementWidth(value: number) {
		if (this.nativeElement) {
			this.nativeElement.elementWidth = value;
		}
	}

	/** A callback function that can be used for getting the value of element widgets.
	*	Property type: any
	*/
	get getElementValue(): any  {
		return this.nativeElement ? this.nativeElement.getElementValue : undefined;
	}
	set getElementValue(value: any) {
		if (this.nativeElement) {
			this.nativeElement.getElementValue = value;
		}
	}

	/** Sets or gets the height of indexers.
	*	Property type: number
	*/
	get indexerHeight(): number  {
		return this.nativeElement ? this.nativeElement.indexerHeight : undefined;
	}
	set indexerHeight(value: number) {
		if (this.nativeElement) {
			this.nativeElement.indexerHeight = value;
		}
	}

	/** Sets or gets the width of indexers.
	*	Property type: number
	*/
	get indexerWidth(): number  {
		return this.nativeElement ? this.nativeElement.indexerWidth : undefined;
	}
	set indexerWidth(value: number) {
		if (this.nativeElement) {
			this.nativeElement.indexerWidth = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
	*	Property type: string
	*/
	get locale(): string  {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Callback, related to localization module. 
	*	Property type: any
	*/
	get localizeFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
	*	Property type: any
	*/
	get messages(): any  {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** If the element is readonly, users cannot interact with it.
	*	Property type: boolean
	*/
	get readonly(): boolean  {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Sets or gets the number of visible rows in the Array.
	*	Property type: number
	*/
	get rows(): number  {
		return this.nativeElement ? this.nativeElement.rows : undefined;
	}
	set rows(value: number) {
		if (this.nativeElement) {
			this.nativeElement.rows = value;
		}
	}

	/** A callback function that can be used for setting the value of element widgets.
	*	Property type: any
	*/
	get setElementValue(): any  {
		return this.nativeElement ? this.nativeElement.setElementValue : undefined;
	}
	set setElementValue(value: any) {
		if (this.nativeElement) {
			this.nativeElement.setElementValue = value;
		}
	}

	/** Sets or gets whether to display the horizontal scrollbar.
	*	Property type: boolean
	*/
	get showHorizontalScrollbar(): boolean  {
		return this.nativeElement ? this.nativeElement.showHorizontalScrollbar : undefined;
	}
	set showHorizontalScrollbar(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showHorizontalScrollbar = value;
		}
	}

	/** Sets or gets whether to display the array indexers.
	*	Property type: boolean
	*/
	get showIndexDisplay(): boolean  {
		return this.nativeElement ? this.nativeElement.showIndexDisplay : undefined;
	}
	set showIndexDisplay(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showIndexDisplay = value;
		}
	}

	/** Sets or gets whether to highlight selected elements.
	*	Property type: boolean
	*/
	get showSelection(): boolean  {
		return this.nativeElement ? this.nativeElement.showSelection : undefined;
	}
	set showSelection(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showSelection = value;
		}
	}

	/** Sets or gets whether to display the vertical scrollbar.
	*	Property type: boolean
	*/
	get showVerticalScrollbar(): boolean  {
		return this.nativeElement ? this.nativeElement.showVerticalScrollbar : undefined;
	}
	set showVerticalScrollbar(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showVerticalScrollbar = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
	*	Property type: string
	*/
	get theme(): string  {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** Sets or gets the data type and element widgets to be used in the Array.
	*	Property type: ArrayType
	*/
	get type(): ArrayType  {
		return this.nativeElement ? this.nativeElement.type : undefined;
	}
	set type(value: ArrayType) {
		if (this.nativeElement) {
			this.nativeElement.type = value;
		}
	}

	/** If is set to true, the element cannot be focused.
	*	Property type: boolean
	*/
	get unfocusable(): boolean  {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}

	/** Sets or gets the value of the Array.
	*	Property type: any
	*/
	get value(): any  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","arrayIndexingMode","changeProperty","columns","customWidgetDefaultValue","dimensions","disabled","elementHeight","elementTemplate","elementWidth","getElementValue","indexerHeight","indexerWidth","locale","localizeFormatFunction","messages","readonly","rows","setElementValue","showHorizontalScrollbar","showIndexDisplay","showSelection","showVerticalScrollbar","theme","type","unfocusable","value"];
	}
	/**  This event is triggered when a visible row or column has been added or removed.
	*  @param event. The custom event. 	*/
	onArraySizeChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the value of the Array is changed.
	*  @param event. The custom event. 	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a dimension has been added or removed.
	*  @param event. The custom event. 	*/
	onDimensionChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an Array element has been clicked.
	*  @param event. The custom event. 	*/
	onElementClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the Array is scrolled with one of the scrollbars.
	*  @param event. The custom event. 	*/
	onScroll?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the column width or the row height has been changed.
	*  @param event. The custom event. 	*/
	onSizeChange?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onArraySizeChange","onChange","onDimensionChange","onElementClick","onScroll","onSizeChange","onCreate","onReady"];
	}
	/** Adds a dimension to the array. Note: when adding multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property. 
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

	/** Clears the selection. 
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

	/** Copies the value of an Array element to the clipboard. 
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

	/** Deletes a column in the value array. 
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

	/** Deletes a row in the value array. 
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

	/** Empties the value array. 
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

	/** Designates the end of a selection started with the method startSelection. 
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

	/** Returns the HTML element at the specified visible row and column coordinates of the Array. 
	* @param {number} RowVisibleIndex. The visible index of the row (y coordinate) of the element.
	* @param {number} ColumnVisibleIndex. The visible index of the column (x coordinate) of the element.
	* @returns {HTMLElement}
  */
	public async getElement(RowVisibleIndex:number, ColumnVisibleIndex:number) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getElement(RowVisibleIndex, ColumnVisibleIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns an object with the values of the Array element width and height. 
	* @returns {any}
  */
	public async getElementSize() : Promise<any> {
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

	/** Gets an array with the values of all indexers. 
	* @returns {any[]}
  */
	public async getIndexerValue() : Promise<any> {
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

	/** Returns an HTML element from the Array at the specified page coordinates and other information about this element. 
	* @param {number} Pagexcoordinate. 
	* @param {number} Pageycoordinate. 
	* @returns {any}
  */
	public async hitTest(Pagexcoordinate:number, Pageycoordinate:number) : Promise<any> {
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

	/** Inserts a column in the value array before the specified column. The new column is filled with default values. 
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

	/** Inserts a row in the value array before the specified row. The new row is filled with default values. 
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

	/** Sets all value array members to the default value. 
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

	/** Removes a dimension from the array. Note: when removing multiple dimensions simultaneously, it is recommended to do so by dynamically setting the dimensions property. 
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

	/** Sets the array's type to 'none'. 
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

	/** Resizes Array elements (changes both the column width and the row height). 
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

	/** Selects all members of the array. 
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

	/** Selects an element with the passed row and column bound indexes. 
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

	/** Sets the column (element) width. 
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

	/** Sets the default value of array members. 
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

	/** Sets the value of one or more Array indexers. 
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

	/** Sets the row (element) height. 
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

	/** Makes the last array member visible. 
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

	/** Designates the start of a selection. To end a selection, call endSelection. 
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

	/** Increases or decreases the visual gap between Array elements. 
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

	/** Transposes the array. Applicable only when dimensions is 2 (2D array). 
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

	/** Sets or gets the value of the whole array or sets the value of a member of the array. 
	* @param {any} Newvalue?. If the method is used for setting the value of the whole array, the expected value is an array. If it is used for setting the value of an array member, the value can be of any applicable type.
	* @param {number | number[]} Elementindexes?. If this parameter is passed, only the value of the array member with the provided dimension indexes is set. Dimension indexes that are not passed are considered to be 0.
	* @returns {any[]}
  */
	public async val(Newvalue?:any, Elementindexes?:number | number[]) : Promise<any> {
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



	constructor(props: any) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize: boolean) {
		const that = this;
		const props: any = {};
		const events: any = {};
		let styles: any = null;

		for(let prop in that.props) {
			if (prop === 'children') {
				continue;
			}

			if (prop === 'style') {
				styles = that.props[prop];
				continue;
			}

			if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
				events[prop] = that.props[prop];
				continue;
			}

			props[prop] = that.props[prop];
		}

		if (initialize) {
			that.nativeElement = this.componentRef.current;
		}

		for(let prop in props) {
			if (prop === 'class') {
				const classNames = props[prop].trim().split(' ');

				for(let className in classNames) {
					if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
						that.nativeElement.classList.add(classNames[className]);
					}
				}

				continue;
			}

			if (props[prop] !== that.nativeElement[prop]) {
				const normalizeProp = (str: string) => {
					return str.replace(/-([a-z])/g, function (g) {
						return g[1].toUpperCase();
					});
				}

				if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
					that.nativeElement.setAttribute(prop, '');
				}

				const normalizedProp = normalizeProp(prop);

				that.nativeElement[normalizedProp] = props[prop];
			}
		}

		
		for(let eventName in events) {
			that[eventName] = events[eventName];
			that.nativeElement[eventName.toLowerCase()] = events[eventName];
        }

		if (initialize) {
			if (that.onCreate) {
				that.onCreate();
			}

			that.nativeElement.whenRendered(() => {
				if (that.onReady) {
					that.onReady();
				}
			});
		}

		// setup styles.

		if (styles) {
			for(let styleName in styles) {
				that.nativeElement.style[styleName] = styles[styleName];
			}
		}
	}

	componentDidMount() {
		this.componentDidRender(true);
    }

	componentDidUpdate() {
		this.componentDidRender(false);
    }

	componentWillUnmount() {
		const that = this;

		if (!that.nativeElement) {
			return;
		}
		
		that.nativeElement.whenRenderedCallbacks = [];
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-array", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Array;
