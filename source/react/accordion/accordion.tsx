import React from "react";
import { AccordionProperties } from "./../../index";
import { Animation, AccordionExpandMode} from './../../index';
import { AccordionItemProperties } from './../../index';
import { AccordionItem } from './accordionitem';
export { AccordionProperties } from "./../../index";
export { Animation, AccordionExpandMode} from './../../index';
export { AccordionItem } from './accordionitem';
export { AccordionItemProperties } from "./../../index";

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface AccordionProps extends AccordionProperties {
    className?: string;
    style?: React.CSSProperties;

	onCollapse?: ((event?: Event) => void) | undefined;
	onCollapsing?: ((event?: Event) => void) | undefined;
	onDragEnd?: ((event?: Event) => void) | undefined;
	onDragStart?: ((event?: Event) => void) | undefined;
	onExpand?: ((event?: Event) => void) | undefined;
	onExpanding?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Accordion organizes content within collapsable items.
*/
export class Accordion extends React.Component<React.HTMLAttributes<Element> & AccordionProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Accordion' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines the data source that will be loaded to the Accordion.
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

	/** Sets or gets the expanded item indexes. Using this property items can be expanded by passing in their indexes. The number of expanded items is limited by the expandMode.
	*	Property type: number[]
	*/
	get expandedIndexes(): number[]  {
		return this.nativeElement ? this.nativeElement.expandedIndexes : undefined;
	}
	set expandedIndexes(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.expandedIndexes = value;
		}
	}

	/** Sets or gets the expand mode. Expand mode determines how the items will expand or collapse.
	*	Property type: AccordionExpandMode
	*/
	get expandMode(): AccordionExpandMode  {
		return this.nativeElement ? this.nativeElement.expandMode : undefined;
	}
	set expandMode(value: AccordionExpandMode) {
		if (this.nativeElement) {
			this.nativeElement.expandMode = value;
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

	/** Determines if the element is readonly or not. If the element true, users cannot interact with it.
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

	/** Enables or disables accordion reordering.
	*	Property type: boolean
	*/
	get reorder(): boolean  {
		return this.nativeElement ? this.nativeElement.reorder : undefined;
	}
	set reorder(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.reorder = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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

	/** Determines whether the element can be focused or not.
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
		return ["animation","dataSource","disabled","expandedIndexes","expandMode","locale","localizeFormatFunction","messages","readonly","reorder","rightToLeft","theme","unfocusable"];
	}
	/**  This event is triggered when an item is collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item
	*/
	onCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an item is going to be collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item
	*/
	onCollapsing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a reordering operation is completed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
	*   position - The current top and left position of the item that was dragged.
	*   target - The item that was dragged.
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item.
	*/
	onDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a reordering operation is started.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
	*   position - The current top and left position of the item that is about to be dragged.
	*   target - The item that is about to be dragged.
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item.
	*/
	onDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an item is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
	*   position - The current top and left position of the item.
	*   target - The item that was dragged.
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item.
	*/
	onExpand?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an item is going to be expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item
	*/
	onExpanding?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onCollapse","onCollapsing","onDragEnd","onDragStart","onExpand","onExpanding","onCreate","onReady"];
	}
	/** Collapses an item at a specified index. 
	* @param {number} position. The index of the collapsed item.
	*/
    public collapse(position: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(position);
            });
        }
    }

	/** Expands an item at a specified index. 
	* @param {number} position. The index of the expanded item.
	*/
    public expand(position: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(position);
            });
        }
    }

	/** Inserts a new item at a specified index. 
	* @param {number} index. The index where the item must be inserted.
	* @param {any} item. An object containing the values for the properties of the new item to be inserted.
	*/
    public insert(index: number, item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, item);
            });
        }
    }

	/** Removes an item at a specified index. 
	* @param {number} position. The index of the item to be removed.
	*/
    public removeAt(position: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(position);
            });
        }
    }

	/** Updates an item from the element. 
	* @param {number} index. The index of the item to be updated.
	* @param {any} settings. An object containing the values for the properties of the item that will be updated.
	*/
    public update(index: number, settings: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, settings);
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
			React.createElement("smart-accordion", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Accordion;
