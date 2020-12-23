import React from "react";
import { CardViewProperties } from "./../../index";
import { Animation, Orientation, CardViewCoverMode, CardViewHeaderPosition, Scrolling, CardViewColumn} from './../../index';
import { DataAdapter } from './../../index';
export { CardViewProperties } from "./../../index";
export { Animation, Orientation, CardViewCoverMode, CardViewHeaderPosition, Scrolling, CardViewColumn} from './../../index';
export { DataAdapter } from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface CardViewProps extends CardViewProperties {
    className?: string;
    style?: React.CSSProperties;

	onFilter?: ((event?: Event) => void) | undefined;
	onSort?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onOpening?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onDragStart?: ((event?: Event) => void) | undefined;
	onDragging?: ((event?: Event) => void) | undefined;
	onDragEnd?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 CardView creates Card-based layout. Supports Filtering, Sorting, Grouping, Editing and UI Virtualization.
*/
export class CardView extends React.Component<React.HTMLAttributes<Element> & CardViewProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'CardView' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Toggles the button for adding new cards.
	*	Property type: boolean
	*/
	get addNewButton(): boolean  {
		return this.nativeElement ? this.nativeElement.addNewButton : undefined;
	}
	set addNewButton(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.addNewButton = value;
		}
	}

	/** Allows reordering by dragging cards.
	*	Property type: boolean
	*/
	get allowDrag(): boolean  {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowDrag = value;
		}
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

	/** Describes the height for each card.
	*	Property type: number | null
	*/
	get cardHeight(): number | null  {
		return this.nativeElement ? this.nativeElement.cardHeight : undefined;
	}
	set cardHeight(value: number | null) {
		if (this.nativeElement) {
			this.nativeElement.cardHeight = value;
		}
	}

	/** Describes the orientation of the card cells.
	*	Property type: Orientation
	*/
	get cellOrientation(): Orientation  {
		return this.nativeElement ? this.nativeElement.cellOrientation : undefined;
	}
	set cellOrientation(value: Orientation) {
		if (this.nativeElement) {
			this.nativeElement.cellOrientation = value;
		}
	}

	/** Allows collapsing the card content.
	*	Property type: boolean
	*/
	get collapsible(): boolean  {
		return this.nativeElement ? this.nativeElement.collapsible : undefined;
	}
	set collapsible(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.collapsible = value;
		}
	}

	/** Describes the columns properties:label - Sets the column namedataField - Sets the dataField nameicon - Sets the icon for the columnformatSettings - Sets the settings about the format for the current columnformatFunction - Function for customizing the value
	*	Property type: CardViewColumn[]
	*/
	get columns(): CardViewColumn[]  {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: CardViewColumn[]) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Describes which data field to be set as cover.
	*	Property type: string
	*/
	get coverField(): string  {
		return this.nativeElement ? this.nativeElement.coverField : undefined;
	}
	set coverField(value: string) {
		if (this.nativeElement) {
			this.nativeElement.coverField = value;
		}
	}

	/** Describes the cover image fit property.
	*	Property type: CardViewCoverMode
	*/
	get coverMode(): CardViewCoverMode  {
		return this.nativeElement ? this.nativeElement.coverMode : undefined;
	}
	set coverMode(value: CardViewCoverMode) {
		if (this.nativeElement) {
			this.nativeElement.coverMode = value;
		}
	}

	/** Determines the data source for the item that will be displayed inside the card.
	*	Property type: any
	*/
	get dataSource(): any  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Allows the edit option for the cards.
	*	Property type: boolean
	*/
	get editable(): boolean  {
		return this.nativeElement ? this.nativeElement.editable : undefined;
	}
	set editable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.editable = value;
		}
	}

	/** Sets or gets the header position. The header contains the Customize, Filter, Sort, and Search buttons.
	*	Property type: CardViewHeaderPosition
	*/
	get headerPosition(): CardViewHeaderPosition  {
		return this.nativeElement ? this.nativeElement.headerPosition : undefined;
	}
	set headerPosition(value: CardViewHeaderPosition) {
		if (this.nativeElement) {
			this.nativeElement.headerPosition = value;
		}
	}

	/** Sets or gets the locale. Used in conjunction with the property messages.
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

	/** Describes the scrolling behavior of the element.
	*	Property type: Scrolling
	*/
	get scrolling(): Scrolling  {
		return this.nativeElement ? this.nativeElement.scrolling : undefined;
	}
	set scrolling(value: Scrolling) {
		if (this.nativeElement) {
			this.nativeElement.scrolling = value;
		}
	}

	/** Describes which data field to be set as title.
	*	Property type: string
	*/
	get titleField(): string  {
		return this.nativeElement ? this.nativeElement.titleField : undefined;
	}
	set titleField(value: string) {
		if (this.nativeElement) {
			this.nativeElement.titleField = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["addNewButton","allowDrag","animation","cardHeight","cellOrientation","collapsible","columns","coverField","coverMode","dataSource","editable","headerPosition","locale","messages","scrolling","titleField"];
	}
	/**  This event is triggered when a filter has been applied.
	*  @param event. The custom event. 	*/
	onFilter?: ((event?: Event) => void) | undefined
	/**  This event is triggered when sorting has been applied.
	*  @param event. The custom event. 	*/
	onSort?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is opened.
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is closed.
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user starts dragging the card.
	*  @param event. The custom event. 	*/
	onDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user is dragging the card.
	*  @param event. The custom event. 	*/
	onDragging?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user dragged the card.
	*  @param event. The custom event. 	*/
	onDragEnd?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onFilter","onSort","onOpen","onOpening","onClose","onClosing","onDragStart","onDragging","onDragEnd","onCreate","onReady"];
	}
	/** Adds filtering 
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

	/** Adds a new record 
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

	/** Adds sorting 
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

	/** Begins an edit operation 
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

	/** Ends the current edit operation and discards changes 
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

	/** Closes any open header panel (drop down) 
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

	/** Ends the current edit operation and saves changes 
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

	/** Makes sure a record is visible by scrolling to it. If succcessful, the method returns the HTML element of the record's card. 
	* @param {number | string} recordId. The id of the record to scroll to
	* @returns {HTMLElement}
  */
	public async ensureVisible(recordId:number | string) : Promise<any> {
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

	/** Opens the "Customize cards" header panel (drop down) 
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

	/** Opens the "Filter" header panel (drop down) 
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

	/** Opens the "Sort" header panel (drop down) 
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

	/** Removes filtering 
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

	/** Removes a record 
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

	/** Removes sorting 
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

	/** Shows a column 
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
			React.createElement("smart-card-view", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default CardView;
