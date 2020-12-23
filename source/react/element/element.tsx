import React from "react";
import { ElementProperties } from "./../../index";
import { Animation, ElementRenderMode} from './../../index';
export { ElementProperties } from "./../../index";
export { Animation, ElementRenderMode} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface ElementProps extends ElementProperties {
    className?: string;
    style?: React.CSSProperties;

	onResize?: ((event?: Event) => void) | undefined;
	onStyleChanged?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 BaseElement extending the HTMLElement with localization, on-demand rendering, typed properties, two-way bound properties, property change notifications, lifecycle callbacks, automatic events listen and unlisten.
*/
export class Element extends React.Component<React.HTMLAttributes<Element> & ElementProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Element' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Enables or disables the accordion. Disabled elements can not be interacted with.
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

	/** Returns true when the rendering is completed. Otherwise returns false
	*	Property type: boolean
	*/
	get isRendered(): boolean  {
		return this.nativeElement ? this.nativeElement.isRendered : undefined;
	}
	set isRendered(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.isRendered = value;
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

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
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

	/** Callback called when the element is attached to the DOM.
	*	Property type: any
	*/
	get onAttached(): any  {
		return this.nativeElement ? this.nativeElement.onAttached : undefined;
	}
	set onAttached(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onAttached = value;
		}
	}

	/** Callback called when the element is detached from the DOM.
	*	Property type: any
	*/
	get onDetached(): any  {
		return this.nativeElement ? this.nativeElement.onDetached : undefined;
	}
	set onDetached(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onDetached = value;
		}
	}

	/** Callback called when the element is created.
	*	Property type: any
	*/
	get onCreated(): any  {
		return this.nativeElement ? this.nativeElement.onCreated : undefined;
	}
	set onCreated(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onCreated = value;
		}
	}

	/** Callback called when the element is attached to the DOM for first time. It can be used for property initialization. 
	*	Property type: any
	*/
	get onRender(): any  {
		return this.nativeElement ? this.nativeElement.onRender : undefined;
	}
	set onRender(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onRender = value;
		}
	}

	/** Callback called when the element is rendered. 
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

	/** Determines if the element is readonly or not. If the element true, users cannot interact with it.
	*	Property type: ElementRenderMode
	*/
	get renderMode(): ElementRenderMode  {
		return this.nativeElement ? this.nativeElement.renderMode : undefined;
	}
	set renderMode(value: ElementRenderMode) {
		if (this.nativeElement) {
			this.nativeElement.renderMode = value;
		}
	}

	/** Determines whether the element is automatically rendered or is rendered after calling the render method.
	*	Property type: boolean
	*/
	get rightToLeft(): boolean  {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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

	/** Determines the theme. Theme defines the look of the element
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
		return ["animation","disabled","isRendered","locale","localizeFormatFunction","messages","onAttached","onDetached","onCreated","onRender","readonly","renderMode","rightToLeft","theme","unfocusable"];
	}
	/**  This event is triggered when the element is resized.
	*  @param event. The custom event. 	*/
	onResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a style which affects the layout of the element is changed is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	styleProperties)
	*   styleProperties - Array with changed style properties.
	*/
	onStyleChanged?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onResize","onStyleChanged","onCreate","onReady"];
	}
	/** Unwatches the element. 
	*/
    public unwatch(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unwatch();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unwatch();
            });
        }
    }

	/** Renders the element. 
	* @param {any[]} properties. Properties array to watch for changes.
	* @param {any} propertyChangedCallback. function(propertyName: string, oldValue: any, newValue: any)
	*/
    public watch(properties: any[], propertyChangedCallback: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.watch(properties, propertyChangedCallback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.watch(properties, propertyChangedCallback);
            });
        }
    }

	/** Watch for property changes. 
	* @param {any} renderCallback. Callback which is called, when the rendering is completed.
	*/
    public whenRendered(renderCallback: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.whenRendered(renderCallback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.whenRendered(renderCallback);
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
			React.createElement("smart-element", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Element;
