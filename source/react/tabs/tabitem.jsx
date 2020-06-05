import React from "react";
/**
 Defines a tab item.
*/
export class TabItem extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'TabItem' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Tab item close button state
	*	Property type: boolean
	*/
	get closeButtonHidden() {
		return this.nativeElement ? this.nativeElement.closeButtonHidden : undefined;
	}
	set closeButtonHidden(value) {
		if (this.nativeElement) {
			this.nativeElement.closeButtonHidden = value;
		}
	}

	/** Tab item index
	*	Property type: number
	*/
	get index() {
		return this.nativeElement ? this.nativeElement.index : undefined;
	}
	set index(value) {
		if (this.nativeElement) {
			this.nativeElement.index = value;
		}
	}

	/** Tab item selected state
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

	/** Tab item label
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

	/** Tab item content
	*	Property type: number
	*/
	get labelSize() {
		return this.nativeElement ? this.nativeElement.labelSize : undefined;
	}
	set labelSize(value) {
		if (this.nativeElement) {
			this.nativeElement.labelSize = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["closeButtonHidden","index","selected","label","content","labelSize"];
	}

	// Gets the events of the React component.
	get events() {
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

		for(let i = 0; i < that.events.length; i++){
			const eventName = that.events[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-tab-item", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default TabItem;
