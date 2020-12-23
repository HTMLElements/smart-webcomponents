import React from "react";
/**
 Defines a group of menu items.
*/
export class MenuItemsGroup extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'MenuItemsGroup' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** 
	*	Property type: boolean
	*/
	get checkable() {
		return this.nativeElement ? this.nativeElement.checkable : undefined;
	}
	set checkable(value) {
		if (this.nativeElement) {
			this.nativeElement.checkable = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get checked() {
		return this.nativeElement ? this.nativeElement.checked : undefined;
	}
	set checked(value) {
		if (this.nativeElement) {
			this.nativeElement.checked = value;
		}
	}

	/** 
	*	Property type: MenuCheckMode
	*/
	get checkMode() {
		return this.nativeElement ? this.nativeElement.checkMode : undefined;
	}
	set checkMode(value) {
		if (this.nativeElement) {
			this.nativeElement.checkMode = value;
		}
	}

	/** Enables or disables element.
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

	/** 
	*	Property type: number
	*/
	get dropDownHeight() {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownHeight = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get expanded() {
		return this.nativeElement ? this.nativeElement.expanded : undefined;
	}
	set expanded(value) {
		if (this.nativeElement) {
			this.nativeElement.expanded = value;
		}
	}

	/** 
	*	Property type: any
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
	*	Property type: number
	*/
	get level() {
		return this.nativeElement ? this.nativeElement.level : undefined;
	}
	set level(value) {
		if (this.nativeElement) {
			this.nativeElement.level = value;
		}
	}

	/** 
	*	Property type: boolean
	*/
	get separator() {
		return this.nativeElement ? this.nativeElement.separator : undefined;
	}
	set separator(value) {
		if (this.nativeElement) {
			this.nativeElement.separator = value;
		}
	}

	/** 
	*	Property type: any
	*/
	get value() {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["checkable","checked","checkMode","disabled","dropDownHeight","expanded","label","level","separator","value"];
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
			React.createElement("smart-menu-items-group", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default MenuItemsGroup;
