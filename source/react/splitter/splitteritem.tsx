import React from "react";
import { SplitterItemProperties } from "./../../index";
import { } from './../../index';
export { SplitterItemProperties } from "./../../index";
export { } from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface SplitterItemProps extends SplitterItemProperties {
    className?: string;
    style?: React.CSSProperties;

	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Splitter Item is a Panel in a Splitter component.
*/
export class SplitterItem extends React.Component<React.HTMLAttributes<Element> & SplitterItemProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'SplitterItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Enables or disables the element.
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

	/** Determines of the item is collapsed or not.
	*	Property type: boolean
	*/
	get collapsed(): boolean  {
		return this.nativeElement ? this.nativeElement.collapsed : undefined;
	}
	set collapsed(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.collapsed = value;
		}
	}

	/** Determines of the item can be collapsed. If set to false, the item can't be collapsed
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

	/** Determines the content of the splitter items
	*	Property type: boolean
	*/
	get locked(): boolean  {
		return this.nativeElement ? this.nativeElement.locked : undefined;
	}
	set locked(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.locked = value;
		}
	}

	/** Determines of the item can be resized or not.
	*	Property type: string
	*/
	get max(): string  {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: string) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
		}
	}

	/** Determines the max size of the item.
	*	Property type: string
	*/
	get min(): string  {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: string) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Determines the min size of the item
	*	Property type: string
	*/
	get size(): string  {
		return this.nativeElement ? this.nativeElement.size : undefined;
	}
	set size(value: string) {
		if (this.nativeElement) {
			this.nativeElement.size = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["disabled","collapsed","collapsible","content","locked","max","min","size"];
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
	/** Collapses the item. 
	* @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
	*/
    public collapse(far: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(far);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(far);
            });
        }
    }

	/** Expands the item if it's collapsed. 
	*/
    public expand(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand();
            });
        }
    }

	/** Locks the item so it can no longer change it's size. 
	*/
    public lock(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lock();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lock();
            });
        }
    }

	/** Unlocks a previously locked item. 
	*/
    public unlock(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlock();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlock();
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
			React.createElement("smart-splitter-item", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default SplitterItem;
