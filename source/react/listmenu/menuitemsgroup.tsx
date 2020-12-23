import React from "react";
import { MenuItemsGroupProperties } from "./../../index";
import { MenuCheckMode} from './../../index';
export { MenuItemsGroupProperties } from "./../../index";
export { MenuCheckMode} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface MenuItemsGroupProps extends MenuItemsGroupProperties {
    className?: string;
    style?: React.CSSProperties;

	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Defines a group of menu items.
*/
export class MenuItemsGroup extends React.Component<React.HTMLAttributes<Element> & MenuItemsGroupProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'MenuItemsGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** 
	*	Property type: boolean
	*/
	get checkable(): boolean  {
		return this.nativeElement ? this.nativeElement.checkable : undefined;
	}
	set checkable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.checkable = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get checked(): boolean  {
		return this.nativeElement ? this.nativeElement.checked : undefined;
	}
	set checked(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.checked = value;
		}
	}

	/** 
	*	Property type: MenuCheckMode
	*/
	get checkMode(): MenuCheckMode  {
		return this.nativeElement ? this.nativeElement.checkMode : undefined;
	}
	set checkMode(value: MenuCheckMode) {
		if (this.nativeElement) {
			this.nativeElement.checkMode = value;
		}
	}

	/** Enables or disables element.
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

	/** 
	*	Property type: number
	*/
	get dropDownHeight(): number  {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value: number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownHeight = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get expanded(): boolean  {
		return this.nativeElement ? this.nativeElement.expanded : undefined;
	}
	set expanded(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.expanded = value;
		}
	}

	/** 
	*	Property type: any
	*/
	get label(): any  {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: any) {
		if (this.nativeElement) {
			this.nativeElement.label = value;
		}
	}

	/** 
	*	Property type: number
	*/
	get level(): number  {
		return this.nativeElement ? this.nativeElement.level : undefined;
	}
	set level(value: number) {
		if (this.nativeElement) {
			this.nativeElement.level = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get separator(): boolean  {
		return this.nativeElement ? this.nativeElement.separator : undefined;
	}
	set separator(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.separator = value;
		}
	}

	/** 
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
		return ["checkable","checked","checkMode","disabled","dropDownHeight","expanded","label","level","separator","value"];
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
			React.createElement("smart-menu-items-group", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default MenuItemsGroup;
