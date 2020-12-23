import React from "react";
import { SplitterItem } from './splitteritem';
import { SplitterBar } from './splitterbar';
export { SplitterItem } from './splitteritem';
export { SplitterBar } from './splitterbar';
/**
 Splitter is a layout component that supports all important features such as resizing, collapsing, and nesting panels.
*/
export class Splitter extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Splitter' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines how the items are arranged inside the Splitter. Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour. proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element. overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content.
	*	Property type: SplitterAutoFitMode
	*/
	get autoFitMode() {
		return this.nativeElement ? this.nativeElement.autoFitMode : undefined;
	}
	set autoFitMode(value) {
		if (this.nativeElement) {
			this.nativeElement.autoFitMode = value;
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

	/** Sets or gets splitter's data source.
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

	/** A getter that returns an array of all Splitter items.
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

	/** If set the element keeps the same proportions of the items after the whole element has been resized regardless of the size property unit ( pixels or percentages) of the items.
	*	Property type: boolean
	*/
	get keepProportionsOnResize() {
		return this.nativeElement ? this.nativeElement.keepProportionsOnResize : undefined;
	}
	set keepProportionsOnResize(value) {
		if (this.nativeElement) {
			this.nativeElement.keepProportionsOnResize = value;
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

	/** Sets or gets splitter's orientation.
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

	/** Determines the resize mode of the splitter. Possible values are:  - None - resizing is disabled.  - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior.  - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected.  Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size.
	*	Property type: SplitterResizeMode
	*/
	get resizeMode() {
		return this.nativeElement ? this.nativeElement.resizeMode : undefined;
	}
	set resizeMode(value) {
		if (this.nativeElement) {
			this.nativeElement.resizeMode = value;
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
		return ["animation","autoFitMode","disabled","dataSource","items","keepProportionsOnResize","locale","localizeFormatFunction","messages","orientation","readonly","resizeMode","resizeStep","rightToLeft","liveResize","theme","unfocusable"];
	}
	/**  This event is triggered when splitter item is collapsed.
	*  @param event. The custom event. 	*/
	_onCollapse = null;	get onCollapse() {
		return this._onCollapse;
	}
	set onCollapse(value) {
		this._onCollapse = value;
	}
	/**  This event is triggered when splitter item is expanded.
	*  @param event. The custom event. 	*/
	_onExpand = null;	get onExpand() {
		return this._onExpand;
	}
	set onExpand(value) {
		this._onExpand = value;
	}
	/**  This event is triggered when splitter resizing begins.
	*  @param event. The custom event. 	*/
	_onResizeStart = null;	get onResizeStart() {
		return this._onResizeStart;
	}
	set onResizeStart(value) {
		this._onResizeStart = value;
	}
	/**  This event is triggered when splitter resizing finishes.
	*  @param event. The custom event. 	*/
	_onResizeEnd = null;	get onResizeEnd() {
		return this._onResizeEnd;
	}
	set onResizeEnd(value) {
		this._onResizeEnd = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onCollapse","onExpand","onResizeStart","onResizeEnd"];
	}
	/** Appends a new node. 
	* @param {Node} node. The node to append
	*/
    appendChild(node){
        if (this.nativeElement.isRendered) {
            this.nativeElement.appendChild(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.appendChild(node);
            });
        }
    }

	/** Collapses splitter item. 
	* @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
	* @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
	*/
    collapse(item, far){
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(item, far);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(item, far);
            });
        }
    }

	/** Expands the splitter item if possible (if there's enough space available). 
	* @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
	*/
    expand(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(item);
            });
        }
    }

	/** Hides a splitter bar 
	* @param {number} splitterBar. A JQX.SplitterBar instance.
	* @returns {number}
  */
	async hideBar(splitterBar) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.hideBar(splitterBar);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Insert a new Splitter item at a given position. 
	* @param {number} index. The index at which a new item will be inserted.
	* @param {any} details. An Object or string used as content if the splitter item.
	*/
    insert(index, details){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, details);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, details);
            });
        }
    }

	/** Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node. 
	* @param {Node} newNode. The  "jqx-splitter-item" node to insert.
	* @param {Node | null} referenceNode?. The "jqx-splitter-item" node before which newNode is inserted.
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

	/** Locks a splitter item so it's size can't change. 
	* @param {number} index. The index of a Splitter Bar or it's instance.
	*/
    lockItem(index){
        if (this.nativeElement.isRendered) {
            this.nativeElement.lockItem(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lockItem(index);
            });
        }
    }

	/** Locks a splitter bar so it can't be dragged. 
	* @param {number} index. The index of a Splitter Bar or it's instance.
	*/
    lockBar(index){
        if (this.nativeElement.isRendered) {
            this.nativeElement.lockBar(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lockBar(index);
            });
        }
    }

	/** Removes a Splitter item. 
	* @param {number} index. An item to be removed.
	*/
    removeAt(index){
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(index);
            });
        }
    }

	/** Removes all items from the Splitter 
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

	/** Removes a child "smart-splitter-item" node. 
	* @param {Node} node. The "jqx-splitter-item" node to remove.
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

	/** Refreshes the Splitter 
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

	/** Unhides a Splitter Bar 
	* @param {number} splitterBar. An instance of a splitter bar.
	*/
    showBar(splitterBar){
        if (this.nativeElement.isRendered) {
            this.nativeElement.showBar(splitterBar);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showBar(splitterBar);
            });
        }
    }

	/** Unlocks a previously locked splitter item. 
	* @param {number} item. The index of a Splitter Item or it's instance.
	*/
    unlockItem(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlockItem(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlockItem(item);
            });
        }
    }

	/** Unlocks a previously locked splitter bar. 
	* @param {number} item. The index of a Splitter Bar or it's instance.
	*/
    unlockBar(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlockBar(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlockBar(item);
            });
        }
    }

	/** Updates the properties of a Splitter item inside the Splitter. 
	* @param {any} item. The index of a JQX.SplitterItem or it's instance.
	* @param {any} settings. An object containing the properties of a JQX.SplitterItem.
	*/
    update(item, settings){
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(item, settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(item, settings);
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
			React.createElement("smart-splitter", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Splitter;
