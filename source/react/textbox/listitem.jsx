import React from "react";
/**
 Defines a list item for ListBox, ComboBox, DropDownList.
*/
export class ListItem extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'ListItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** 
	*	Property type: number
	*/
	get alternationIndex() {
		return this.nativeElement ? this.nativeElement.alternationIndex : undefined;
	}
	set alternationIndex(value) {
		if (this.nativeElement) {
			this.nativeElement.alternationIndex = value;
		}
	}

	/** 
	*	Property type: string
	*/
	get color() {
		return this.nativeElement ? this.nativeElement.color : undefined;
	}
	set color(value) {
		if (this.nativeElement) {
			this.nativeElement.color = value;
		}
	}

	/** 
	*	Property type: ListItemDisplayMode
	*/
	get displayMode() {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value) {
		if (this.nativeElement) {
			this.nativeElement.displayMode = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get grouped() {
		return this.nativeElement ? this.nativeElement.grouped : undefined;
	}
	set grouped(value) {
		if (this.nativeElement) {
			this.nativeElement.grouped = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get selected() {
		return this.nativeElement ? this.nativeElement.selected : undefined;
	}
	set selected(value) {
		if (this.nativeElement) {
			this.nativeElement.selected = value;
		}
	}

	/** 
	*	Property type: string
	*/
	get value() {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** 
	*	Property type: string
	*/
	get label() {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value) {
		if (this.nativeElement) {
			this.nativeElement.label = value;
		}
	}

	/** 
	*	Property type: string
	*/
	get details() {
		return this.nativeElement ? this.nativeElement.details : undefined;
	}
	set details(value) {
		if (this.nativeElement) {
			this.nativeElement.details = value;
		}
	}

	/** 
	*	Property type: string
	*/
	get group() {
		return this.nativeElement ? this.nativeElement.group : undefined;
	}
	set group(value) {
		if (this.nativeElement) {
			this.nativeElement.group = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get hidden() {
		return this.nativeElement ? this.nativeElement.hidden : undefined;
	}
	set hidden(value) {
		if (this.nativeElement) {
			this.nativeElement.hidden = value;
		}
	}

	/** 
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


	// Gets the properties of the React component.
	get properties() {
		return ["alternationIndex","color","displayMode","grouped","selected","value","label","details","group","hidden","readonly"];
	}

	// Gets the events of the React component.
	get eventListeners() {
		return [];
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
			React.createElement("smart-list-item", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default ListItem;
