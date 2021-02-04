import React from "react";
/**
 input field for entering a number. Includes number formatting for Engineers and Scientists.
*/
export class NumericTextBox extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'NumericTextBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Sets or gets the char to use as the decimal separator in numeric values. 
	*	Property type: string
	*/
	get decimalSeparator() {
		return this.nativeElement ? this.nativeElement.decimalSeparator : undefined;
	}
	set decimalSeparator(value) {
		if (this.nativeElement) {
			this.nativeElement.decimalSeparator = value;
		}
	}

	/** Enables or disables the jqxNumericTextBox. 
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

	/** Sets the parent container of the radix dropdown.
	*	Property type: any
	*/
	get dropDownAppendTo() {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownAppendTo = value;
		}
	}

	/** Determines if a dropdown will be displayed when the radix display button is clicked. The dropdown shows options for changing to the binary, octal, decimal, and hexadecimal numeral systems.
	*	Property type: boolean
	*/
	get dropDownEnabled() {
		return this.nativeElement ? this.nativeElement.dropDownEnabled : undefined;
	}
	set dropDownEnabled(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownEnabled = value;
		}
	}

	/** Enables or disables incrementing/decrementing the value using the mouse wheel in jqxNumericTextBox. 
	*	Property type: boolean
	*/
	get enableMouseWheelAction() {
		return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
	}
	set enableMouseWheelAction(value) {
		if (this.nativeElement) {
			this.nativeElement.enableMouseWheelAction = value;
		}
	}

	/** Sets additional helper text below the element. 
	*	Property type: string
	*/
	get hint() {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value) {
		if (this.nativeElement) {
			this.nativeElement.hint = value;
		}
	}

	/** Sets or gets the input format of the widget. Setting this property dynamically can lead to precision loss. 
	*	Property type: NumericTextBoxInputFormat
	*/
	get inputFormat() {
		return this.nativeElement ? this.nativeElement.inputFormat : undefined;
	}
	set inputFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.inputFormat = value;
		}
	}

	/** Sets a label above the element. 
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

	/** If this property is enabled, leading zeros are added (if necessary) to the binary and hexadecimal representations of a number based on wordLength.
	*	Property type: boolean
	*/
	get leadingZeros() {
		return this.nativeElement ? this.nativeElement.leadingZeros : undefined;
	}
	set leadingZeros(value) {
		if (this.nativeElement) {
			this.nativeElement.leadingZeros = value;
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

	/** Sets or gets the maximum value of the widget. 
	*	Property type: number | string
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

	/** Sets or gets the minimum value of the widget. 
	*	Property type: number | string
	*/
	get min() {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** The name of the control.
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

	/** Enables or disables the setting of the value property to null or empty string. 
	*	Property type: boolean
	*/
	get nullable() {
		return this.nativeElement ? this.nativeElement.nullable : undefined;
	}
	set nullable(value) {
		if (this.nativeElement) {
			this.nativeElement.nullable = value;
		}
	}

	/** Sets or gets whether the radix dropdown is opened. Applicable only when dropDownEnabled is true. 
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

	/** Sets or gets the pattern which the input value is displayed in when the element is not focused. All formats available to the NumberRenderer class can be applied as outputFormatString. 
	*	Property type: string
	*/
	get outputFormatString() {
		return this.nativeElement ? this.nativeElement.outputFormatString : undefined;
	}
	set outputFormatString(value) {
		if (this.nativeElement) {
			this.nativeElement.outputFormatString = value;
		}
	}

	/** Determines the widget's place holder displayed when the widget's input is empty. 
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

	/** Determines the number of digits after the decimal point. Applicable when inputFormat is either 'floatingPoint' or 'complex'. 
	*	Property type: number
	*/
	get precisionDigits() {
		return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
	}
	set precisionDigits(value) {
		if (this.nativeElement) {
			this.nativeElement.precisionDigits = value;
		}
	}

	/** Sets or gets the radix of the jqxNumericTextBox. The radix specifies the numeral system in which to display the widget's value. Applicable only when inputFormat is 'integer'. 
	*	Property type: NumericTextBoxRadix
	*/
	get radix() {
		return this.nativeElement ? this.nativeElement.radix : undefined;
	}
	set radix(value) {
		if (this.nativeElement) {
			this.nativeElement.radix = value;
		}
	}

	/** Enables or disables the radix display button of the jqxNumericTextBox. Applicable only when inputFormat is 'integer'. 
	*	Property type: boolean
	*/
	get radixDisplay() {
		return this.nativeElement ? this.nativeElement.radixDisplay : undefined;
	}
	set radixDisplay(value) {
		if (this.nativeElement) {
			this.nativeElement.radixDisplay = value;
		}
	}

	/** Sets or gets the position of the radix display button of the jqxNumericTextBox. 
	*	Property type: NumericTextBoxDisplayPosition
	*/
	get radixDisplayPosition() {
		return this.nativeElement ? this.nativeElement.radixDisplayPosition : undefined;
	}
	set radixDisplayPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.radixDisplayPosition = value;
		}
	}

	/** Sets or gets the readonly state of the jqxNumericTextBox. 
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

	/** Enables or disables outputting the value in scientific notation. Applicable only when inputFormat is 'integer'. 
	*	Property type: boolean
	*/
	get scientificNotation() {
		return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
	}
	set scientificNotation(value) {
		if (this.nativeElement) {
			this.nativeElement.scientificNotation = value;
		}
	}

	/** Determines whether to show the current value represented in all four numeral systems in the drop down.
	*	Property type: boolean
	*/
	get showDropDownValues() {
		return this.nativeElement ? this.nativeElement.showDropDownValues : undefined;
	}
	set showDropDownValues(value) {
		if (this.nativeElement) {
			this.nativeElement.showDropDownValues = value;
		}
	}

	/** Enables or disables the visibility of the units. 
	*	Property type: boolean
	*/
	get showUnit() {
		return this.nativeElement ? this.nativeElement.showUnit : undefined;
	}
	set showUnit(value) {
		if (this.nativeElement) {
			this.nativeElement.showUnit = value;
		}
	}

	/** Determining how many significant digits are in a number. Applicable when inputFormat is either 'floatingPoint' or 'complex'. 
	*	Property type: number
	*/
	get significantDigits() {
		return this.nativeElement ? this.nativeElement.significantDigits : undefined;
	}
	set significantDigits(value) {
		if (this.nativeElement) {
			this.nativeElement.significantDigits = value;
		}
	}

	/** Enables or disables the visibility of the spin buttons. 
	*	Property type: boolean
	*/
	get spinButtons() {
		return this.nativeElement ? this.nativeElement.spinButtons : undefined;
	}
	set spinButtons(value) {
		if (this.nativeElement) {
			this.nativeElement.spinButtons = value;
		}
	}

	/** Sets the delay between repeats of spin buttons in miliseconds. 
	*	Property type: number
	*/
	get spinButtonsDelay() {
		return this.nativeElement ? this.nativeElement.spinButtonsDelay : undefined;
	}
	set spinButtonsDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsDelay = value;
		}
	}

	/** Sets a delay before the first repeat iteration of spin buttons in miliseconds. 
	*	Property type: number
	*/
	get spinButtonsInitialDelay() {
		return this.nativeElement ? this.nativeElement.spinButtonsInitialDelay : undefined;
	}
	set spinButtonsInitialDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsInitialDelay = value;
		}
	}

	/** Sets or gets the position of the spin buttons of the jqxNumericTextBox. 
	*	Property type: NumericTextBoxDisplayPosition
	*/
	get spinButtonsPosition() {
		return this.nativeElement ? this.nativeElement.spinButtonsPosition : undefined;
	}
	set spinButtonsPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsPosition = value;
		}
	}

	/** Sets or gets the increase/decrease step. 
	*	Property type: number | string
	*/
	get spinButtonsStep() {
		return this.nativeElement ? this.nativeElement.spinButtonsStep : undefined;
	}
	set spinButtonsStep(value) {
		if (this.nativeElement) {
			this.nativeElement.spinButtonsStep = value;
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

	/** Sets or gets the name of unit used in jqxNumericTextBox widget. 
	*	Property type: string
	*/
	get unit() {
		return this.nativeElement ? this.nativeElement.unit : undefined;
	}
	set unit(value) {
		if (this.nativeElement) {
			this.nativeElement.unit = value;
		}
	}

	/** Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
	*	Property type: Validation
	*/
	get validation() {
		return this.nativeElement ? this.nativeElement.validation : undefined;
	}
	set validation(value) {
		if (this.nativeElement) {
			this.nativeElement.validation = value;
		}
	}

	/** Sets or gets the value of the jqxNumericTextBox widget. 
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

	/** Sets or gets the word length. Applicable only when inputFormat is 'integer'. If min and/or max are not set by default, they will be set automatically based on the specified word length. 
	*	Property type: WordLength
	*/
	get wordLength() {
		return this.nativeElement ? this.nativeElement.wordLength : undefined;
	}
	set wordLength(value) {
		if (this.nativeElement) {
			this.nativeElement.wordLength = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","decimalSeparator","disabled","dropDownAppendTo","dropDownEnabled","enableMouseWheelAction","hint","inputFormat","label","leadingZeros","locale","localizeFormatFunction","max","messages","min","name","nullable","opened","outputFormatString","placeholder","precisionDigits","radix","radixDisplay","radixDisplayPosition","readonly","rightToLeft","scientificNotation","showDropDownValues","showUnit","significantDigits","spinButtons","spinButtonsDelay","spinButtonsInitialDelay","spinButtonsPosition","spinButtonsStep","theme","unfocusable","unit","validation","value","wordLength"];
	}
	/**  This event is triggered when the value is changed. 
	*  @param event. The custom event. 	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when the value in the input is being changed via keypress or paste. 
	*  @param event. The custom event. 	*/
	_onChanging = null;	get onChanging() {
		return this._onChanging;
	}
	set onChanging(value) {
		this._onChanging = value;
	}
	/**  This event is triggered when the dropdown is closed. 
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when the dropdown is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}
	/**  This event is triggered when the dropdown is opened. 
	*  @param event. The custom event. 	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered when the dropdown is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	_onOpening = null;	get onOpening() {
		return this._onOpening;
	}
	set onOpening(value) {
		this._onOpening = value;
	}
	/**  This event is triggered when the radix is changed. 
	*  @param event. The custom event. 	*/
	_onRadixChange = null;	get onRadixChange() {
		return this._onRadixChange;
	}
	set onRadixChange(value) {
		this._onRadixChange = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onChange","onChanging","onClose","onClosing","onOpen","onOpening","onRadixChange"];
	}
	/** Focuses the NumericTextBox.  
	*/
    focus(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.focus();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.focus();
            });
        }
    }

	/** Get/set the value of the NumericTextBox.  
	* @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the jqxNumericTextBox. 
	* @param {boolean} suppressValidation?. If <em>true</em> is passed, the passed value will be set to the jqxNumericTextBox without validation. 
	* @returns {string}
  */
	async val(value, suppressValidation) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.val(value, suppressValidation);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
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
			React.createElement("smart-numeric-text-box", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default NumericTextBox;
