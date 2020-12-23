import React from "react";
/**
 Splitter Item is a Panel in a Splitter component.
*/
export class SplitterItem extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'SplitterItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
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

	/** Determines of the item is collapsed or not.
	*	Property type: boolean
	*/
	get collapsed() {
		return this.nativeElement ? this.nativeElement.collapsed : undefined;
	}
	set collapsed(value) {
		if (this.nativeElement) {
			this.nativeElement.collapsed = value;
		}
	}

	/** Determines of the item can be collapsed. If set to false, the item can't be collapsed
	*	Property type: boolean
	*/
	get collapsible() {
		return this.nativeElement ? this.nativeElement.collapsible : undefined;
	}
	set collapsible(value) {
		if (this.nativeElement) {
			this.nativeElement.collapsible = value;
		}
	}

	/** Determines the content of the splitter items
	*	Property type: boolean
	*/
	get locked() {
		return this.nativeElement ? this.nativeElement.locked : undefined;
	}
	set locked(value) {
		if (this.nativeElement) {
			this.nativeElement.locked = value;
		}
	}

	/** Determines of the item can be resized or not.
	*	Property type: string
	*/
	get max() {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
		}
	}

	/** Determines the max size of the item.
	*	Property type: string
	*/
	get min() {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Determines the min size of the item
	*	Property type: string
	*/
	get size() {
		return this.nativeElement ? this.nativeElement.size : undefined;
	}
	set size(value) {
		if (this.nativeElement) {
			this.nativeElement.size = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["disabled","collapsed","collapsible","content","locked","max","min","size"];
	}

	// Gets the events of the React component.
	get eventListeners() {
		return [];
	}
	/** Collapses the item. 
	* @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
	*/
    collapse(far){
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(far);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(far);
            });
        }
    }

	/** Expands the item if it's collapsed. 
	*/
    expand(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand();
            });
        }
    }

	/** Locks the item so it can no longer change it's size. 
	*/
    lock(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.lock();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lock();
            });
        }
    }

	/** Unlocks a previously locked item. 
	*/
    unlock(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlock();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlock();
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
			React.createElement("smart-splitter-item", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default SplitterItem;
