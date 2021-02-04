import React from "react";
/**
 The Radio Button component lets you add a radio button and assign it to a radio group. Users can select only one radio button at a time within a radio group
*/
export class RadioButton extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'RadioButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Sets or gets the check state.
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

	/** Sets or gets the part that toggles the element.
	*	Property type: CheckMode
	*/
	get checkMode() {
		return this.nativeElement ? this.nativeElement.checkMode : undefined;
	}
	set checkMode(value) {
		if (this.nativeElement) {
			this.nativeElement.checkMode = value;
		}
	}

	/** Sets the click mode of the radio button.
	*	Property type: ClickMode
	*/
	get clickMode() {
		return this.nativeElement ? this.nativeElement.clickMode : undefined;
	}
	set clickMode(value) {
		if (this.nativeElement) {
			this.nativeElement.clickMode = value;
		}
	}

	/** Enables or disables the ratio button.
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

	/** Sets or gets the widget's group name.
	*	Property type: string
	*/
	get groupName() {
		return this.nativeElement ? this.nativeElement.groupName : undefined;
	}
	set groupName(value) {
		if (this.nativeElement) {
			this.nativeElement.groupName = value;
		}
	}

	/** Sets or gets the widget's innerHTML.
	*	Property type: string
	*/
	get innerHTML() {
		return this.nativeElement ? this.nativeElement.innerHTML : undefined;
	}
	set innerHTML(value) {
		if (this.nativeElement) {
			this.nativeElement.innerHTML = value;
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

	/** Sets or gets the widget's name.
	*	Property type: string
	*/
	get name() {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value) {
		if (this.nativeElement) {
			this.nativeElement.name = value;
		}
	}

	/** If the custom element is readonly, it cannot be interacted with.
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

	/** Sets or gets the widget's value.
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


	// Gets the properties of the React component.
	get properties() {
		return ["animation","checked","checkMode","clickMode","disabled","groupName","innerHTML","locale","localizeFormatFunction","messages","name","readonly","rightToLeft","theme","unfocusable","value"];
	}
	/**  This event is triggered when the widget is checked/unchecked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
	*   value - A boolean value indicating the new state of the button ( checked or not ).
	*   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
	*   changeType - A string flag indicating whether the change event was triggered via API or an event.
	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when the widget is checked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
	*   changeType - A string flag indicating whether the change event was triggered via API or an event.
	*/
	_onCheckValue = null;	get onCheckValue() {
		return this._onCheckValue;
	}
	set onCheckValue(value) {
		this._onCheckValue = value;
	}
	/**  This event is triggered when the widget is unchecked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
	*   changeType - A string flag indicating whether the change event was triggered via API or an event.
	*/
	_onUncheckValue = null;	get onUncheckValue() {
		return this._onUncheckValue;
	}
	set onUncheckValue(value) {
		this._onUncheckValue = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onChange","onCheckValue","onUncheckValue"];
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
			React.createElement("smart-radio-button", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default RadioButton;
