import React from "react";
import { SortableProperties } from "./../../index";
import { Animation, SortableDragMode, SortableHandlePosition, SortableHandleVisibility, Orientation} from './../../index';
export { SortableProperties } from "./../../index";
export { Animation, SortableDragMode, SortableHandlePosition, SortableHandleVisibility, Orientation} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface SortableProps extends SortableProperties {
    className?: string;
    style?: React.CSSProperties;

	onDragEnd?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Sortable allows you to rearrange a group of html elements.
*/
export class Sortable extends React.Component<React.HTMLAttributes<Element> & SortableProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Sortable' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Enables or disables sorting.
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

	/** Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle').
	*	Property type: SortableDragMode
	*/
	get dragMode(): SortableDragMode  {
		return this.nativeElement ? this.nativeElement.dragMode : undefined;
	}
	set dragMode(value: SortableDragMode) {
		if (this.nativeElement) {
			this.nativeElement.dragMode = value;
		}
	}

	/** Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'.
	*	Property type: SortableHandlePosition
	*/
	get handlePosition(): SortableHandlePosition  {
		return this.nativeElement ? this.nativeElement.handlePosition : undefined;
	}
	set handlePosition(value: SortableHandlePosition) {
		if (this.nativeElement) {
			this.nativeElement.handlePosition = value;
		}
	}

	/** Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'.
	*	Property type: SortableHandleVisibility
	*/
	get handleVisibility(): SortableHandleVisibility  {
		return this.nativeElement ? this.nativeElement.handleVisibility : undefined;
	}
	set handleVisibility(value: SortableHandleVisibility) {
		if (this.nativeElement) {
			this.nativeElement.handleVisibility = value;
		}
	}

	/** Sets or gets a selector to determine the sortable items by. By default, sortable items are all children of the smart-sortable custom element.
	*	Property type: string | null
	*/
	get items(): string | null  {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.items = value;
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

	/** Sets or gets the direction sortable items are stacked and can be dragged.
	*	Property type: Orientation
	*/
	get mode(): Orientation  {
		return this.nativeElement ? this.nativeElement.mode : undefined;
	}
	set mode(value: Orientation) {
		if (this.nativeElement) {
			this.nativeElement.mode = value;
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","disabled","dragMode","handlePosition","handleVisibility","items","locale","localizeFormatFunction","messages","mode","rightToLeft"];
	}
	/**  This event is triggered when sortable items have been reordered.
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
		return ["onDragEnd","onCreate","onReady"];
	}
	/** Moves a sortable item from one index to another. 
	* @param {number} fromIndex?. The original index of the item.
	* @param {number} toIndex?. The index to move the item to.
	*/
    public move(fromIndex?: number, toIndex?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.move(fromIndex, toIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.move(fromIndex, toIndex);
            });
        }
    }

	/** Re-evaluates the items that can be sorted. Useful after items have been added to or removed from the custom element. 
	*/
    public updateItems(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateItems();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateItems();
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
			React.createElement("smart-sortable", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Sortable;
