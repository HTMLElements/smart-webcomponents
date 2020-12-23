import React from "react";
import { LayoutProperties } from "./../../index";
import { Animation, Orientation} from './../../index';
import { LayoutItemProperties } from './../../index';
import { LayoutItem } from './layoutitem';
import { LayoutGroupProperties } from './../../index';
import { LayoutGroup } from './layoutgroup';
import { TabLayoutItemProperties } from './../../index';
import { TabLayoutItem } from './tablayoutitem';
import { TabLayoutGroupProperties } from './../../index';
import { TabLayoutGroup } from './tablayoutgroup';
export { LayoutProperties } from "./../../index";
export { Animation, Orientation} from './../../index';
export { LayoutItem } from './layoutitem';
export { LayoutItemProperties } from "./../../index";
export { LayoutGroup } from './layoutgroup';
export { LayoutGroupProperties } from "./../../index";
export { TabLayoutItem } from './tablayoutitem';
export { TabLayoutItemProperties } from "./../../index";
export { TabLayoutGroup } from './tablayoutgroup';
export { TabLayoutGroupProperties } from "./../../index";

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface LayoutProps extends LayoutProperties {
    className?: string;
    style?: React.CSSProperties;

	onResize?: ((event?: Event) => void) | undefined;
	onStateChange?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onOpening?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onMenuItemClick?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Layout splits your content into resizable sections.
*/
export class Layout extends React.Component<React.HTMLAttributes<Element> & LayoutProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Layout' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines the options that will be available for selection inside the context menu.
	*	Property type: any
	*/
	get contextMenuDataSource(): any  {
		return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
	}
	set contextMenuDataSource(value: any) {
		if (this.nativeElement) {
			this.nativeElement.contextMenuDataSource = value;
		}
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

	/** Sets or gets Layout's data source.
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

	/** Sets an object with string values, related to the different states of passwords strength.
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

	/** Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource.
	*	Property type: Orientation
	*/
	get orientation(): Orientation  {
		return this.nativeElement ? this.nativeElement.orientation : undefined;
	}
	set orientation(value: Orientation) {
		if (this.nativeElement) {
			this.nativeElement.orientation = value;
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

	/** Determines whether splitting is live or not.
	*	Property type: boolean
	*/
	get allowLiveSplit(): boolean  {
		return this.nativeElement ? this.nativeElement.allowLiveSplit : undefined;
	}
	set allowLiveSplit(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowLiveSplit = value;
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

	/** Determines the selected item.
	*	Property type: any
	*/
	get selectedIndex(): any  {
		return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	}
	set selectedIndex(value: any) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndex = value;
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
		return ["animation","contextMenuDataSource","disabled","dataSource","locale","messages","orientation","readonly","allowLiveSplit","rightToLeft","selectedIndex","theme","unfocusable"];
	}
	/**  This event is triggered after resizing is completed.
	*  @param event. The custom event. 	*/
	onResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
	*   item - The Splitter item that was the target of a change.
	*   type - A description of the operation that has cause the change.
	*/
	onStateChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldSelectedIndex, 	selectedIndex)
	*   oldSelectedIndex - The Splitter item that was previously selected.
	*   selectedIndex - The Splitter item that is currently selected.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a the context menu is about to be closed. The operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a the context menu is closed.
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a the context menu is opened.
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when an option from the context menu has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	label, 	value)
	*   target - The Splitter item that was the target of the context menu opening.
	*   item - The Context menu item that was clicked.
	*   label - The label of the context menu that was clicked.
	*   value - The value of the context menu that was clicked.
	*/
	onMenuItemClick?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onResize","onStateChange","onChange","onClosing","onClose","onOpening","onOpen","onMenuItemClick","onCreate","onReady"];
	}
	/** Returns a Layout item according to the index that is passed. 
	* @param {number | string} index. The index of an item.
	*/
    public getItem(index: number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.getItem(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.getItem(index);
            });
        }
    }

	/** Refreshes the Layout 
	*/
    public refresh(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh();
            });
        }
    }

	/** Inserts a new item inside the Layout. 
	* @param {any} type. The index of an item to be removed or an instance of JQX.SplitterItem.
	* @param {string | undefined} position?. A string that represents the position where the new item will be created.
	*/
    public createLayoutItem(type: any, position?: string | undefined): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createLayoutItem(type, position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createLayoutItem(type, position);
            });
        }
    }

	/** Moves all children from one item to another. 
	* @param {any} oldItem. The source item that will have it's content removed.
	* @param {any} newItem. The host item that will have it's content replaced.
	*/
    public moveChildren(oldItem: any, newItem: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.moveChildren(oldItem, newItem);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.moveChildren(oldItem, newItem);
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
			React.createElement("smart-layout", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Layout;
