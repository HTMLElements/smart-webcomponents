import React from "react";
import { ListItemProperties } from "./../../index";
import { ListItemDisplayMode} from './../../index';
export { ListItemProperties } from "./../../index";
export { ListItemDisplayMode} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface ListItemProps extends ListItemProperties {
    className?: string;
    style?: React.CSSProperties;

	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Defines a list item for ListBox, ComboBox, DropDownList.
*/
export class ListItem extends React.Component<React.HTMLAttributes<Element> & ListItemProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'ListItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** 
	*	Property type: number
	*/
	get alternationIndex(): number  {
		return this.nativeElement ? this.nativeElement.alternationIndex : undefined;
	}
	set alternationIndex(value: number) {
		if (this.nativeElement) {
			this.nativeElement.alternationIndex = value;
		}
	}

	/** 
	*	Property type: string
	*/
	get color(): string  {
		return this.nativeElement ? this.nativeElement.color : undefined;
	}
	set color(value: string) {
		if (this.nativeElement) {
			this.nativeElement.color = value;
		}
	}

	/** 
	*	Property type: ListItemDisplayMode
	*/
	get displayMode(): ListItemDisplayMode  {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: ListItemDisplayMode) {
		if (this.nativeElement) {
			this.nativeElement.displayMode = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get grouped(): boolean  {
		return this.nativeElement ? this.nativeElement.grouped : undefined;
	}
	set grouped(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.grouped = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get selected(): boolean  {
		return this.nativeElement ? this.nativeElement.selected : undefined;
	}
	set selected(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.selected = value;
		}
	}

	/** 
	*	Property type: string
	*/
	get value(): string  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** 
	*	Property type: string
	*/
	get label(): string  {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		if (this.nativeElement) {
			this.nativeElement.label = value;
		}
	}

	/** 
	*	Property type: string
	*/
	get details(): string  {
		return this.nativeElement ? this.nativeElement.details : undefined;
	}
	set details(value: string) {
		if (this.nativeElement) {
			this.nativeElement.details = value;
		}
	}

	/** 
	*	Property type: string
	*/
	get group(): string  {
		return this.nativeElement ? this.nativeElement.group : undefined;
	}
	set group(value: string) {
		if (this.nativeElement) {
			this.nativeElement.group = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get hidden(): boolean  {
		return this.nativeElement ? this.nativeElement.hidden : undefined;
	}
	set hidden(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hidden = value;
		}
	}

	/** 
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["alternationIndex","color","displayMode","grouped","selected","value","label","details","group","hidden","readonly"];
	}
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onCreate","onReady"];
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
			React.createElement("smart-list-item", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default ListItem;
