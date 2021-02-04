import React from "react";
/**
 DateRangeInput specifies an input field where the user can enter a date range ( from date - to date ). It also has a popup with a Calendar that allows to select a date range. Time selection is an additional feature that can be enabled which allows to specify time for the date range.
*/
export class DateRangeInput extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'DateRangeInput' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date format is determined by the 'locale' property. Intl.DateTimeFormat is used to format date strings in JavaScript
	*	Property type: DateRangeFormat
	*/
	get dateFormat() {
		return this.nativeElement ? this.nativeElement.dateFormat : undefined;
	}
	set dateFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.dateFormat = value;
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

	/** Determines the position of the drop down button.
	*	Property type: DropDownButtonPosition
	*/
	get dropDownButtonPosition() {
		return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
	}
	set dropDownButtonPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownButtonPosition = value;
		}
	}

	/** Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownHeight() {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownHeight = value;
		}
	}

	/** Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownWidth() {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownWidth = value;
		}
	}

	/** Determines whether the 'Today/Clear' icons will be visible or not.
	*	Property type: boolean
	*/
	get icons() {
		return this.nativeElement ? this.nativeElement.icons : undefined;
	}
	set icons(value) {
		if (this.nativeElement) {
			this.nativeElement.icons = value;
		}
	}

	/** Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
	*	Property type: string
	*/
	get inputPurpose() {
		return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
	}
	set inputPurpose(value) {
		if (this.nativeElement) {
			this.nativeElement.inputPurpose = value;
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

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
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

	/** Determines the max date for the Calendar displayed inside the popup.
	*	Property type: any
	*/
	get max() {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
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

	/** Determines the min date for the Calendar displayed inside the popup.
	*	Property type: any
	*/
	get min() {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Determines the number of months that will be displayed inside the popup.
	*	Property type: number
	*/
	get months() {
		return this.nativeElement ? this.nativeElement.months : undefined;
	}
	set months(value) {
		if (this.nativeElement) {
			this.nativeElement.months = value;
		}
	}

	/** Sets or gets the name attribute for the element. Name is used when submiting data inside an HTML form.
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

	/** Determines whether the drop down is opened or not.
	*	Property type: boolean
	*/
	get opened() {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value) {
		if (this.nativeElement) {
			this.nativeElement.opened = value;
		}
	}

	/** Determines the placeholder of the input.
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

	/** Determines whether ot not the user can enter text inside the input. if dropDownButtonPosition is set to 'left' or 'right' then readonly determines whether the element acts as a ComboBox or a DropDownList if a dataSource is provided.
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

	/** Determines the delimiter between the selected dates in the input. This delimiter is ued to distinguish the starting date from the ending date.
	*	Property type: string
	*/
	get separator() {
		return this.nativeElement ? this.nativeElement.separator : undefined;
	}
	set separator(value) {
		if (this.nativeElement) {
			this.nativeElement.separator = value;
		}
	}

	/** Determines the format of the dates displayed in the input. Accepts valid ECMAScript Internationalization API format. By default the date foramt is determined by the 'locale' property.
	*	Property type: TimeRangeFormat
	*/
	get timeFormat() {
		return this.nativeElement ? this.nativeElement.timeFormat : undefined;
	}
	set timeFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.timeFormat = value;
		}
	}

	/** Determines whether time selection is available or not.
	*	Property type: boolean
	*/
	get timepicker() {
		return this.nativeElement ? this.nativeElement.timepicker : undefined;
	}
	set timepicker(value) {
		if (this.nativeElement) {
			this.nativeElement.timepicker = value;
		}
	}

	/** Determines the theme for the element. Themes define the look of the elements.
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

	/** Sets or gets the value of the element. The type of the value depends on the valueType property.
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

	/** Determines the value type returned from the `value` property.
	*	Property type: DateRangeInputValueType
	*/
	get valueType() {
		return this.nativeElement ? this.nativeElement.valueType : undefined;
	}
	set valueType(value) {
		if (this.nativeElement) {
			this.nativeElement.valueType = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","dateFormat","disabled","dropDownButtonPosition","dropDownHeight","dropDownWidth","icons","inputPurpose","locale","localizeFormatFunction","max","messages","min","months","name","opened","placeholder","readonly","rightToLeft","separator","timeFormat","timepicker","theme","unfocusable","value","valueType"];
	}
	/**  This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	oldLabel, 	oldValue, 	value)
	*   label - The label of the new selected item.
	*   oldLabel - The label of the item that was previously selected before the event was triggered.
	*   oldValue - The value of the item that was previously selected before the event was triggered.
	*   value - The value of the new selected item.
	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onChange"];
	}
	/** Closes the drop down. 
	*/
    close(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }

	/** Opens the drop down. 
	*/
    open(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }

	/** Selects the text inside the input or if it is readonly then the element is focused. 
	*/
    select(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.select();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select();
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
			React.createElement("smart-date-range-input", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default DateRangeInput;
