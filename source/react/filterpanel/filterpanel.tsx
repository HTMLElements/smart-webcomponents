import React from "react";
import { FilterPanelProperties } from "./../../index";
import { Animation, FilterPanelFilterType, FilterPanelMode} from './../../index';
export { FilterPanelProperties } from "./../../index";
export { Animation, FilterPanelFilterType, FilterPanelMode} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface FilterPanelProps extends FilterPanelProperties {
    className?: string;
    style?: React.CSSProperties;

	onCancel?: ((event?: Event) => void) | undefined;
	onClear?: ((event?: Event) => void) | undefined;
	onFilter?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 The filter panel allows you to customize and display the applied filter expressions.
*/
export class FilterPanel extends React.Component<React.HTMLAttributes<Element> & FilterPanelProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'FilterPanel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Defines which operation buttons will be shown in the filter panel
	*	Property type: string[]
	*/
	get buttons(): string[]  {
		return this.nativeElement ? this.nativeElement.buttons : undefined;
	}
	set buttons(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.buttons = value;
		}
	}

	/** Array in mode: 'excel', determines the data to extract unique filter values from. The expected format of the data is an array of objects with key-value pairs (JSON array)
	*	Property type: number[]
	*/
	get data(): number[]  {
		return this.nativeElement ? this.nativeElement.data : undefined;
	}
	set data(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.data = value;
		}
	}

	/** Describes filtered data field.
	*	Property type: string
	*/
	get dataField(): string  {
		return this.nativeElement ? this.nativeElement.dataField : undefined;
	}
	set dataField(value: string) {
		if (this.nativeElement) {
			this.nativeElement.dataField = value;
		}
	}

	/** If set to an array, determines a custom collection of filter values to be displayed. If set to a callback function, the user can add custom filter values dynamically to the default filter values (in this case, the evaluateFilterExpression function must also be implemented) .dataSource  is only available in mode: 'excel'.
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

	/** Enables or disables filter panel.
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

	/** Callback function, used for custom evaluations in filter panel.
	*	Property type: any
	*/
	get evaluateFilterExpression(): any  {
		return this.nativeElement ? this.nativeElement.evaluateFilterExpression : undefined;
	}
	set evaluateFilterExpression(value: any) {
		if (this.nativeElement) {
			this.nativeElement.evaluateFilterExpression = value;
		}
	}

	/** Defines which filter type is used.
	*	Property type: FilterPanelFilterType
	*/
	get filterType(): FilterPanelFilterType  {
		return this.nativeElement ? this.nativeElement.filterType : undefined;
	}
	set filterType(value: FilterPanelFilterType) {
		if (this.nativeElement) {
			this.nativeElement.filterType = value;
		}
	}

	/** Format string used in filterType 'Date'.
	*	Property type: string
	*/
	get formatString(): string  {
		return this.nativeElement ? this.nativeElement.formatString : undefined;
	}
	set formatString(value: string) {
		if (this.nativeElement) {
			this.nativeElement.formatString = value;
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

	/** Defines field names of the filtered element.
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

	/** Desfines filter panel's  mode
	*	Property type: FilterPanelMode
	*/
	get mode(): FilterPanelMode  {
		return this.nativeElement ? this.nativeElement.mode : undefined;
	}
	set mode(value: FilterPanelMode) {
		if (this.nativeElement) {
			this.nativeElement.mode = value;
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","buttons","data","dataField","dataSource","disabled","evaluateFilterExpression","filterType","formatString","locale","messages","mode","readonly","theme","unfocusable"];
	}
	/**  This event is triggered when the current filtering is discarted.
	*  @param event. The custom event. 	*/
	onCancel?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the current filtering is cleared.
	*  @param event. The custom event. 	*/
	onClear?: ((event?: Event) => void) | undefined
	/**  This event is triggered when filter panel settings are applied.
	*  @param event. The custom event. 	*/
	onFilter?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onCancel","onClear","onFilter","onCreate","onReady"];
	}
	/** Discards current filtering. 
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

	/** Clears current filtering. 
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

	/** Evaluates a filter. 
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

	/** Applies current filtering. 
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

	/** Gets the current filter state. 
	* @returns {any}
  */
	public async getState() : Promise<any> {
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

	/** Loads a previously saved filter state. 
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
			React.createElement("smart-filter-panel", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default FilterPanel;
