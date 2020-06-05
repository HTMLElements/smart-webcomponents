import React from "react";
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

	/** Optional. A label for all Splitter items inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc.
	*	Property type: string
	*/
	get itemLabel() {
		return this.nativeElement ? this.nativeElement.itemLabel : undefined;
	}
	set itemLabel(value) {
		if (this.nativeElement) {
			this.nativeElement.itemLabel = value;
		}
	}

	/** Optional. A label for all Splitters inside the Layout. Usefull when exporting the dataSource and reusing it in other elements, for example, tree, etc.
	*	Property type: string
	*/
	get itemGroupLabel() {
		return this.nativeElement ? this.nativeElement.itemGroupLabel : undefined;
	}
	set itemGroupLabel(value) {
		if (this.nativeElement) {
			this.nativeElement.itemGroupLabel = value;
		}
	}

	/** A getter that returns an array of all Splitter items inside the Layout.
	*	Property type: any
	*/
	get items() {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value) {
		if (this.nativeElement) {
			this.nativeElement.items = value;
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

	/** Callback, related to localization module. 
	*	Property type: any
	*/
	get localizeFormatFunction() {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
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

	/** Determines the resize step during reisizing
	*	Property type: number
	*/
	get resizeStep() {
		return this.nativeElement ? this.nativeElement.resizeStep : undefined;
	}
	set resizeStep(value) {
		if (this.nativeElement) {
			this.nativeElement.resizeStep = value;
		}
	}

	/** When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
	*	Property type: boolean
	*/
	get liveResize() {
		return this.nativeElement ? this.nativeElement.liveResize : undefined;
	}
	set liveResize(value) {
		if (this.nativeElement) {
			this.nativeElement.liveResize = value;
		}
	}

	/** Determines the placeholder text of the empty items.
	*	Property type: string
	*/
	get placeholder() {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value) {
		if (this.nativeElement) {
			this.nativeElement.placeholder = value;
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

	/** Determines the selected item. When an item is selected the buttons for creating nested items are displayed inside it.
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
		return ["animation","contextMenuDataSource","disabled","dataSource","itemLabel","itemGroupLabel","items","locale","localizeFormatFunction","messages","orientation","readonly","resizeStep","liveResize","placeholder","rightToLeft","selectedIndex","theme","unfocusable"];
	}
	/**  This event is triggered when resizing begins.
	*  @param event. The custom event. 	*/
	_onResizeStart = null;	get onResizeStart() {
		return this._onResizeStart;
	}
	set onResizeStart(value) {
		this._onResizeStart = value;
	}
	/**  This event is triggered when resizing finishes.
	*  @param event. The custom event. 	*/
	_onResizeEnd = null;	get onResizeEnd() {
		return this._onResizeEnd;
	}
	set onResizeEnd(value) {
		this._onResizeEnd = value;
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
	get events() {
		return ["onResizeStart","onResizeEnd","onStateChange","onChange","onClosing","onClose","onOpening","onOpen","onMenuItemClick"];
	}
	/** Appends a new node. 
	* @param {Node} node. The node to append
	* @returns {Node}
  */
	async appendChild(node) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.appendChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node. 
	* @param {Node} newNode. The  "smart-splitter-item" node to insert.
	* @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
	* @returns {Node}
  */
	async insertBefore(newNode, referenceNode) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.insertBefore(newNode, referenceNode);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Removes a child "smart-splitter-item" node from the Layout. 
	* @param {Node} node. The "smart-splitter-item" node to remove.
	* @returns {Node}
  */
	async removeChild(node) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.removeChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns a Splitter Item according to the index that is passed as an argument. 
	* @param {any} index. The index of an item.
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

	/** Returns the index of a Splitter Item that is passed as an argument. 
	* @param {any} item. The index of the Splitter item that is passed as an argument.
	*/
    getItemIndex(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.getItemIndex(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.getItemIndex(item);
            });
        }
    }

	/** Insert a new Splitter item at a given position. 
	* @param {any} item. A Splitter Item or an object defining a Splitter item to be inserted.
	* @param {number | string} index. The index at which a new item will be inserted.
	* @param {string} position?. The postition at which the new item will be inseted - top, bottom, left, right.
	*/
    insert(item, index, position){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(item, index, position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(item, index, position);
            });
        }
    }

	/** Removes a Splitter item from the Layout. 
	* @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
	*/
    removeItem(index){
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeItem(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeItem(index);
            });
        }
    }

	/** Removes all items from the Layout 
	*/
    removeAll(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAll();
            });
        }
    }

	/** Selects a Splitter item from the Layout. 
	* @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
	*/
    select(index){
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(index);
            });
        }
    }

	/** Unselects the selected item inside the element. 
	*/
    unselect(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect();
            });
        }
    }

	/** Updates a Splitter item that is inside the Layout. 
	* @param {any} index. The index of an item to be removed or an instance of JQX.SplitterItem.
	* @param {any} settings. An object containing properties with new values for the Splitter item that should be updated.
	*/
    updateItem(index, settings){
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateItem(index, settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateItem(index, settings);
            });
        }
    }

	/** Clears the localStorage of any previous cached states of the element according to it's id. 
	*/
    clearState(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }

	/** Saves the current state of the element to LocalStorage. Requires an id to be set to the element. 
	* @returns {any}
  */
	async saveState() {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.saveState();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup according to the id of the element. 
	* @param {any[]} state?. An array of objects that represents a cached state of the element. The result of calling the 'saveState' method.
	*/
    loadState(state){
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
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

		for(let i = 0; i < that.events.length; i++){
			const eventName = that.events[i];

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
