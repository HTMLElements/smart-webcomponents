import React from "react";
import { SplitterBarProperties } from "./../../index";
import { } from './../../index';
export { SplitterBarProperties } from "./../../index";
export { } from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface SplitterBarProps extends SplitterBarProperties {
    className?: string;
    style?: React.CSSProperties;

	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 SplitterBar splits two Split panels in a Splitter.
*/
export class SplitterBar extends React.Component<React.HTMLAttributes<Element> & SplitterBarProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'SplitterBar' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}

	// Gets the properties of the React component.
	get properties(): string[] {
		return [];
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
	/** Hides the splitter bar. 
	*/
    public hide(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hide();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hide();
            });
        }
    }

	/** Unhides a splitter bar. 
	*/
    public show(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.show();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.show();
            });
        }
    }

	/** Locks the splitter bar. 
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

	/** Unlocks the splitter bar. 
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
			React.createElement("smart-splitter-bar", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default SplitterBar;
