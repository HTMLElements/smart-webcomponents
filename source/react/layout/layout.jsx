import React from "react";
import { LayoutItem } from './layoutitem';
import { LayoutGroup } from './layoutgroup';
import { TabLayoutItem } from './tablayoutitem';
import { TabLayoutGroup } from './tablayoutgroup';
export { LayoutItem } from './layoutitem';
export { LayoutGroup } from './layoutgroup';
export { TabLayoutItem } from './tablayoutitem';
export { TabLayoutGroup } from './tablayoutgroup';
/**
 Layout splits your content into resizable sections.
*/
export class Layout extends React.Component {
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
	get animation() {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Determines the options that will be available for selection inside the context menu.
	*	Property type: any
	*/
	get contextMenuDataSource() {
		return this.nativeElement ? this.nativeElement.contextMenuDataSource : undefined;
	}
	set contextMenuDataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.contextMenuDataSource = value;
		}
	}

	/** Enables or disables the element.
	*	Property type: boolean
	*/
	get disabled() {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Sets or gets Layout's data source.
	*	Property type: any
	*/
	get dataSource() {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
	*	Property type: string
	*/
	get locale() {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Sets an object with string values, related to the different states of passwords strength.
	*	Property type: any
	*/
	get messages() {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** Sets or gets Layout's main orientation. The orientation is applied to all Splitters inside the Layout unless they have their orientation explicitly set in the dataSource.
	*	Property type: Orientation
	*/
	get orientation() {
		return this.nativeElement ? this.nativeElement.orientation : undefined;
	}
	set orientation(value) {
		if (this.nativeElement) {
			this.nativeElement.orientation = value;
		}
	}

	/** If the element is readonly, users cannot interact with it.
	*	Property type: boolean
	*/
	get readonly() {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Determines whether splitting is live or not.
	*	Property type: boolean
	*/
	get allowLiveSplit() {
		return this.nativeElement ? this.nativeElement.allowLiveSplit : undefined;
	}
	set allowLiveSplit(value) {
		if (this.nativeElement) {
			this.nativeElement.allowLiveSplit = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: boolean
	*/
	get rightToLeft() {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** Determines the selected item.
	*	Property type: any
	*/
	get selectedIndex() {
		return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	}
	set selectedIndex(value) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndex = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
	*	Property type: string
	*/
	get theme() {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** If is set to true, the element cannot be focused.
	*	Property type: boolean
	*/
	get unfocusable() {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","contextMenuDataSource","disabled","dataSource","locale","messages","orientation","readonly","allowLiveSplit","rightToLeft","selectedIndex","theme","unfocusable"];
	}
	/**  This event is triggered after resizing is completed.
	*  @param event. The custom event. 	*/
	_onResize = null;	get onResize() {
		return this._onResize;
	}
	set onResize(value) {
		this._onResize = value;
	}
	/**  This event is triggered when a change regarding the Layout's state has occured, such as inserting a new item, removing an item, etc.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	type)
	*   item - The Splitter item that was the target of a change.
	*   type - A description of the operation that has cause the change.
	*/
	_onStateChange = null;	get onStateChange() {
		return this._onStateChange;
	}
	set onStateChange(value) {
		this._onStateChange = value;
	}
	/**  This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldSelectedIndex, 	selectedIndex)
	*   oldSelectedIndex - The Splitter item that was previously selected.
	*   selectedIndex - The Splitter item that is currently selected.
	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when a the context menu is about to be closed. The operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}
	/**  This event is triggered when a the context menu is closed.
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when a the context menu is about to be opened. The operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	_onOpening = null;	get onOpening() {
		return this._onOpening;
	}
	set onOpening(value) {
		this._onOpening = value;
	}
	/**  This event is triggered when a the context menu is opened.
	*  @param event. The custom event. 	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered when an option from the context menu has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	target, 	item, 	label, 	value)
	*   target - The Splitter item that was the target of the context menu opening.
	*   item - The Context menu item that was clicked.
	*   label - The label of the context menu that was clicked.
	*   value - The value of the context menu that was clicked.
	*/
	_onMenuItemClick = null;	get onMenuItemClick() {
		return this._onMenuItemClick;
	}
	set onMenuItemClick(value) {
		this._onMenuItemClick = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onResize","onStateChange","onChange","onClosing","onClose","onOpening","onOpen","onMenuItemClick"];
	}
	/** Returns a Layout item according to the index that is passed. 
	* @param {number | string} index. The index of an item.
	*/
    getItem(index){
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
    refresh(){
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
    createLayoutItem(type, position){
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
    moveChildren(oldItem, newItem){
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



	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize) {
		const that = this;
		const props = {};
		const events = {};
		let styles = null;

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
				const normalizeProp = (str) => {
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
