import React from "react";
/**
 Breadcrumbs allow users to make selections from a range of values.
*/
export class Breadcrumb extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Breadcrumb' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Enables or disables the "Add new item" (+) button.
	*	Property type: boolean
	*/
	get addNewItem() {
		return this.nativeElement ? this.nativeElement.addNewItem : undefined;
	}
	set addNewItem(value) {
		if (this.nativeElement) {
			this.nativeElement.addNewItem = value;
		}
	}

	/** Enables or disables the dragging of breadcrumb items.
	*	Property type: boolean
	*/
	get allowDrag() {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value) {
		if (this.nativeElement) {
			this.nativeElement.allowDrag = value;
		}
	}

	/** Enables or disables the dropping of dragged breadcrumb items.
	*	Property type: boolean
	*/
	get allowDrop() {
		return this.nativeElement ? this.nativeElement.allowDrop : undefined;
	}
	set allowDrop(value) {
		if (this.nativeElement) {
			this.nativeElement.allowDrop = value;
		}
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

	/** Show/Hide the close button of breadcrumb items.
	*	Property type: boolean
	*/
	get closeButtons() {
		return this.nativeElement ? this.nativeElement.closeButtons : undefined;
	}
	set closeButtons(value) {
		if (this.nativeElement) {
			this.nativeElement.closeButtons = value;
		}
	}

	/** Determines the data source to load breadcrumb items from. The Array should contain objects. Each object defines a single breadcrumb item.
	*	Property type: {label: string, value: string}[]
	*/
	get dataSource() {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Enables or disables the Breadcrumb.
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

	/** Sets or gets the template of breadcrumb items. The value of this property can be the id of an HTMLTemplateElement or the HTMLTemplateElement itself. If set to null, no template is applied.
	*	Property type: any
	*/
	get itemTemplate() {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.itemTemplate = value;
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

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
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

	/** Determines the minimum width of the Breadcrumb at which it will switch from normal to minimized mode. If set to null, the Breadcrumb does not minimize automatically.
	*	Property type: number
	*/
	get minimizeWidth() {
		return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
	}
	set minimizeWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.minimizeWidth = value;
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
		return ["addNewItem","allowDrag","allowDrop","animation","closeButtons","dataSource","disabled","itemTemplate","locale","messages","minimizeWidth","unfocusable"];
	}
	/**  This event is triggered when a Breadcrumb item is closed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item)
	*   item - The item that has been closed.
	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when a Breadcrumb item is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item)
	*   item - The item that is going to be closed.
	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}
	/**  This event is triggered when a Breadcrumb item is dropped.
	*  @param event. The custom event. 	*/
	_onDragEnd = null;	get onDragEnd() {
		return this._onDragEnd;
	}
	set onDragEnd(value) {
		this._onDragEnd = value;
	}
	/**  This event is triggered when a Breadcrumb item is being dragged.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	originalEvent, 	target)
	*   item - The item that is being dragged.
	*   originalEvent - The original event that initiates the dragging operation.
	*   target - The original target.
	*/
	_onDragging = null;	get onDragging() {
		return this._onDragging;
	}
	set onDragging(value) {
		this._onDragging = value;
	}
	/**  This event is triggered when the "Add new item" (+) button is clicked.
	*  @param event. The custom event. 	*/
	_onAddNewItem = null;	get onAddNewItem() {
		return this._onAddNewItem;
	}
	set onAddNewItem(value) {
		this._onAddNewItem = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onClose","onClosing","onDragEnd","onDragging","onAddNewItem"];
	}
	/** Adds an item. 
	* @param {any} itemDetails. An Object with the fields "index", "label", and "value".
	*/
    addItem(itemDetails){
        if (this.nativeElement.isRendered) {
            this.nativeElement.addItem(itemDetails);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addItem(itemDetails);
            });
        }
    }

	/** Restores the Breadcrumb from minimized state back to normal. 
	*/
    maximize(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.maximize();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.maximize();
            });
        }
    }

	/** Minimizes the Breadcrumb. 
	*/
    minimize(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.minimize();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.minimize();
            });
        }
    }

	/** Removes an item. 
	* @param {HTMLElement} item. The item to remove.
	*/
    removeItem(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeItem(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeItem(item);
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
			React.createElement("smart-breadcrumb", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Breadcrumb;
