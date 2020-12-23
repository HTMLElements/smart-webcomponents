import React from "react";
import { TooltipProperties } from "./../../index";
import { Animation, TooltipArrowDirection, TooltipOpenMode, TooltipPosition} from './../../index';
export { TooltipProperties } from "./../../index";
export { Animation, TooltipArrowDirection, TooltipOpenMode, TooltipPosition} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface TooltipProps extends TooltipProperties {
    className?: string;
    style?: React.CSSProperties;

	onOpen?: ((event?: Event) => void) | undefined;
	onOpening?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Tooltip is an alternate for the html title. It displays a popup with details on hover.
*/
export class Tooltip extends React.Component<React.HTMLAttributes<Element> & TooltipProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Tooltip' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Gets or sets whether a tooltip's arrow will be shown.
	*	Property type: boolean
	*/
	get arrow(): boolean  {
		return this.nativeElement ? this.nativeElement.arrow : undefined;
	}
	set arrow(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.arrow = value;
		}
	}

	/** Sets the position of the arrow.
	*	Property type: TooltipArrowDirection
	*/
	get arrowDirection(): TooltipArrowDirection  {
		return this.nativeElement ? this.nativeElement.arrowDirection : undefined;
	}
	set arrowDirection(value: TooltipArrowDirection) {
		if (this.nativeElement) {
			this.nativeElement.arrowDirection = value;
		}
	}

	/** Gets or sets whether a tooltip's arrow will be shown.
	*	Property type: number
	*/
	get delay(): number  {
		return this.nativeElement ? this.nativeElement.delay : undefined;
	}
	set delay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.delay = value;
		}
	}

	/** Enables or disables the tooltip.
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

	/** Sets an offset by X and Y.
	*	Property type: number[]
	*/
	get offset(): number[]  {
		return this.nativeElement ? this.nativeElement.offset : undefined;
	}
	set offset(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.offset = value;
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

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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

	/** Sets or gets the way of triggering the tooltip.
	*	Property type: TooltipOpenMode
	*/
	get openMode(): TooltipOpenMode  {
		return this.nativeElement ? this.nativeElement.openMode : undefined;
	}
	set openMode(value: TooltipOpenMode) {
		if (this.nativeElement) {
			this.nativeElement.openMode = value;
		}
	}

	/** Gets or sets the position of the tooltip.
	*	Property type: TooltipPosition
	*/
	get position(): TooltipPosition  {
		return this.nativeElement ? this.nativeElement.position : undefined;
	}
	set position(value: TooltipPosition) {
		if (this.nativeElement) {
			this.nativeElement.position = value;
		}
	}

	/** Sets the element which triggers the tooltip.
	*	Property type: any
	*/
	get selector(): any  {
		return this.nativeElement ? this.nativeElement.selector : undefined;
	}
	set selector(value: any) {
		if (this.nativeElement) {
			this.nativeElement.selector = value;
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

	/** Sets custom tooltip template.
	*	Property type: any
	*/
	get tooltipTemplate(): any  {
		return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	}
	set tooltipTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.tooltipTemplate = value;
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

	/** Sets or gets the widget's value.
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

	/** Sets or gets the visibility of the tooltip.
	*	Property type: boolean
	*/
	get visible(): boolean  {
		return this.nativeElement ? this.nativeElement.visible : undefined;
	}
	set visible(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.visible = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","arrow","arrowDirection","delay","disabled","offset","locale","localizeFormatFunction","messages","openMode","position","selector","theme","tooltipTemplate","unfocusable","value","visible"];
	}
	/**  This event is triggered when the tooltip is opened.
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered before the tooltip is opened. The event can be prevented via event.preventDefault().
	*  @param event. The custom event. 	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the tooltip is closed.
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered before the tooltip is closed. The event can be prevented via event.preventDefault().
	*  @param event. The custom event. 	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onOpen","onOpening","onClose","onClosing","onCreate","onReady"];
	}
	/** Closes smart-tooltip.  
	*/
    public close(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }

	/** Opens smart-tooltip.  
	*/
    public open(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }

	/** Toggles smart-tooltip.  
	*/
    public toggle(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.toggle();
            });
        }
    }

	/** Clears the content of the Tooltip.  
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
			React.createElement("smart-tooltip", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Tooltip;
