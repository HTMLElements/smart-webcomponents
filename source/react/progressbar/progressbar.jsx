import React from "react";
import { CircularProgressBar } from './circularprogressbar';
export { CircularProgressBar } from './circularprogressbar';
/**
 Progress indicators. It can be used to show a user how far along he/she is in a process.
*/
export class ProgressBar extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'ProgressBar' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Sets the value of the Progress bar to indeterminate state(null) and starts the animation.
	*	Property type: boolean
	*/
	get indeterminate() {
		return this.nativeElement ? this.nativeElement.indeterminate : undefined;
	}
	set indeterminate(value) {
		if (this.nativeElement) {
			this.nativeElement.indeterminate = value;
		}
	}

	/** Sets the filling direction of the Progress Bar.
	*	Property type: boolean
	*/
	get inverted() {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value) {
		if (this.nativeElement) {
			this.nativeElement.inverted = value;
		}
	}

	/** A callback function defining the new format for the label of the Progress Bar.
	*	Property type: any
	*/
	get formatFunction() {
		return this.nativeElement ? this.nativeElement.formatFunction : undefined;
	}
	set formatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.formatFunction = value;
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

	/** Sets progress bars maximum possible value.
	*	Property type: number
	*/
	get max() {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
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

	/** Sets progress bars minimum possible value.
	*	Property type: number
	*/
	get min() {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Sets the orientation of the progress bar
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

	/** Enables/Disabled the label for the Progress Bar.
	*	Property type: boolean
	*/
	get showProgressValue() {
		return this.nativeElement ? this.nativeElement.showProgressValue : undefined;
	}
	set showProgressValue(value) {
		if (this.nativeElement) {
			this.nativeElement.showProgressValue = value;
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

	/** Sets or gets the value of the progress bar
	*	Property type: number
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
		return ["animation","disabled","indeterminate","inverted","formatFunction","locale","localizeFormatFunction","max","messages","min","orientation","rightToLeft","showProgressValue","theme","unfocusable","value"];
	}
	/**  This event is triggered when the value is changed.
	*  @param event. The custom event. 	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}

	// Gets the events of the React component.
	get events() {
		return ["onChange"];
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
			React.createElement("smart-progress-bar", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default ProgressBar;
