import React from "react";
import { AccordionItemProperties } from "./../../index";
import { AccordionItemArrow} from './../../index';
export { AccordionItemProperties } from "./../../index";
export { AccordionItemArrow} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface AccordionItemProps extends AccordionItemProperties {
    className?: string;
    style?: React.CSSProperties;

	onCollapse?: ((event?: Event) => void) | undefined;
	onExpand?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Single item in an Accordion view.
*/
export class AccordionItem extends React.Component<React.HTMLAttributes<Element> & AccordionItemProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'AccordionItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets header's arrow position. If the value is 'none' the arrow is not shown.
	*	Property type: AccordionItemArrow
	*/
	get arrow(): AccordionItemArrow  {
		return this.nativeElement ? this.nativeElement.arrow : undefined;
	}
	set arrow(value: AccordionItemArrow) {
		if (this.nativeElement) {
			this.nativeElement.arrow = value;
		}
	}

	/** Sets or gets the content if the item.
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

	/** Sets or gets the expanded state.
	*	Property type: boolean
	*/
	get focused(): boolean  {
		return this.nativeElement ? this.nativeElement.focused : undefined;
	}
	set focused(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.focused = value;
		}
	}

	/** Sets or gets the focus state.
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["arrow","content","expanded","focused","label"];
	}
	/**  This event is triggered when the item is collapsed.
	*  @param event. The custom event. 	*/
	onCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the item is expanded.
	*  @param event. The custom event. 	*/
	onExpand?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onCollapse","onExpand","onCreate","onReady"];
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
			React.createElement("smart-accordion-item", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default AccordionItem;
