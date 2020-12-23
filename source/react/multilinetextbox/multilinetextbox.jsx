import React from "react";
import { ListItem } from './listitem';
import { ListItemsGroup } from './listitemsgroup';
export { ListItem } from './listitem';
export { ListItemsGroup } from './listitemsgroup';
/**
 Defines a multi-line text input control. MultilineTextBox can hold an unlimited number of characters, and the text renders in a fixed-width font
*/
export class MultilineTextBox extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'MultilineTextBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines whether and how the value should be automatically capitalized as it is entered/edited by the user.
	*	Property type: MultilineTextBoxAutoCapitalize
	*/
	get autoCapitalize() {
		return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
	}
	set autoCapitalize(value) {
		if (this.nativeElement) {
			this.nativeElement.autoCapitalize = value;
		}
	}

	/** Determines whether the value of the control can be automatically completed by the browser.
	*	Property type: MultiLineTextBoxAutoComplete
	*/
	get autoComplete() {
		return this.nativeElement ? this.nativeElement.autoComplete : undefined;
	}
	set autoComplete(value) {
		if (this.nativeElement) {
			this.nativeElement.autoComplete = value;
		}
	}

	/** Determines whether element will auto expand when the input overflows vertically.
	*	Property type: boolean
	*/
	get autoExpand() {
		return this.nativeElement ? this.nativeElement.autoExpand : undefined;
	}
	set autoExpand(value) {
		if (this.nativeElement) {
			this.nativeElement.autoExpand = value;
		}
	}

	/** Determines whether the input should be focused when the page is loaded.
	*	Property type: boolean
	*/
	get autoFocus() {
		return this.nativeElement ? this.nativeElement.autoFocus : undefined;
	}
	set autoFocus(value) {
		if (this.nativeElement) {
			this.nativeElement.autoFocus = value;
		}
	}

	/** The cols attribute specifies the visible width of a input. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.
	*	Property type: number
	*/
	get cols() {
		return this.nativeElement ? this.nativeElement.cols : undefined;
	}
	set cols(value) {
		if (this.nativeElement) {
			this.nativeElement.cols = value;
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

	/** Specifies how the characters are displayed inside the input.
	*	Property type: TextBoxDisplayMode
	*/
	get displayMode() {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value) {
		if (this.nativeElement) {
			this.nativeElement.displayMode = value;
		}
	}

	/** Determines the behavior on "Enter" key.
	*	Property type: MultilineTextBoxEnterKeyBehavior
	*/
	get enterKeyBehavior() {
		return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
	}
	set enterKeyBehavior(value) {
		if (this.nativeElement) {
			this.nativeElement.enterKeyBehavior = value;
		}
	}

	/** The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
	*	Property type: string
	*/
	get form() {
		return this.nativeElement ? this.nativeElement.form : undefined;
	}
	set form(value) {
		if (this.nativeElement) {
			this.nativeElement.form = value;
		}
	}

	/** Sets additional helper text below the element. Appears only when the element is focused.
	*	Property type: any
	*/
	get hint() {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value) {
		if (this.nativeElement) {
			this.nativeElement.hint = value;
		}
	}

	/** Controls horizontal scrollbar's visibility. 
	*	Property type: HorizontalScrollBarVisibility
	*/
	get horizontalScrollBarVisibility() {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value) {
		if (this.nativeElement) {
			this.nativeElement.horizontalScrollBarVisibility = value;
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

	/** Sets label above the element. The label is displayed above the input and it's always visible.
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

	/** Sets or gets the maximum number of characters that the user can enter.
	*	Property type: number
	*/
	get maxLength() {
		return this.nativeElement ? this.nativeElement.maxLength : undefined;
	}
	set maxLength(value) {
		if (this.nativeElement) {
			this.nativeElement.maxLength = value;
		}
	}

	/** Sets or gets the minimum number of characters that the user can enter.
	*	Property type: number
	*/
	get minLength() {
		return this.nativeElement ? this.nativeElement.minLength : undefined;
	}
	set minLength(value) {
		if (this.nativeElement) {
			this.nativeElement.minLength = value;
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

	/** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
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

	/** The placeholder text that is displayed when no value is applied to the element. 
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

	/** If enabled the users cannot iteract with the element.
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

	/** Specifies that the user must fill in a value before submitting a form that contains the element.
	*	Property type: boolean
	*/
	get required() {
		return this.nativeElement ? this.nativeElement.required : undefined;
	}
	set required(value) {
		if (this.nativeElement) {
			this.nativeElement.required = value;
		}
	}

	/** Enables/ disables the resizing of the element. If enabled a resizing indicator appears in the bottom corner of the input area.
	*	Property type: boolean
	*/
	get resizable() {
		return this.nativeElement ? this.nativeElement.resizable : undefined;
	}
	set resizable(value) {
		if (this.nativeElement) {
			this.nativeElement.resizable = value;
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

	/** The number of visible text lines for the control.
	*	Property type: number
	*/
	get rows() {
		return this.nativeElement ? this.nativeElement.rows : undefined;
	}
	set rows(value) {
		if (this.nativeElement) {
			this.nativeElement.rows = value;
		}
	}

	/** Specifies whether the content of the input will be selected on focus.
	*	Property type: boolean
	*/
	get selectAllOnFocus() {
		return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
	}
	set selectAllOnFocus(value) {
		if (this.nativeElement) {
			this.nativeElement.selectAllOnFocus = value;
		}
	}

	/** Indicates the index of the last character in the current selection.
	*	Property type: number
	*/
	get selectionEnd() {
		return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
	}
	set selectionEnd(value) {
		if (this.nativeElement) {
			this.nativeElement.selectionEnd = value;
		}
	}

	/** Indicates the index to the first character in the current selection.
	*	Property type: number
	*/
	get selectionStart() {
		return this.nativeElement ? this.nativeElement.selectionStart : undefined;
	}
	set selectionStart(value) {
		if (this.nativeElement) {
			this.nativeElement.selectionStart = value;
		}
	}

	/** Specifies whether the element is to have its spelling and grammar checked or not.
	*	Property type: boolean
	*/
	get spellCheck() {
		return this.nativeElement ? this.nativeElement.spellCheck : undefined;
	}
	set spellCheck(value) {
		if (this.nativeElement) {
			this.nativeElement.spellCheck = value;
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

	/** Sets or gets the value of the element.
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

	/** Controls vertical scrollbar's visibility. 
	*	Property type: VerticalScrollBarVisibility
	*/
	get verticalScrollBarVisibility() {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value) {
		if (this.nativeElement) {
			this.nativeElement.verticalScrollBarVisibility = value;
		}
	}

	/** Indicates how the control wraps text.
	*	Property type: MultilineTextBoxWrap
	*/
	get wrap() {
		return this.nativeElement ? this.nativeElement.wrap : undefined;
	}
	set wrap(value) {
		if (this.nativeElement) {
			this.nativeElement.wrap = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","autoCapitalize","autoComplete","autoExpand","autoFocus","cols","disabled","displayMode","enterKeyBehavior","form","hint","horizontalScrollBarVisibility","inputPurpose","label","locale","localizeFormatFunction","maxLength","minLength","messages","name","placeholder","readonly","required","resizable","rightToLeft","rows","selectAllOnFocus","selectionEnd","selectionStart","spellCheck","theme","unfocusable","value","verticalScrollBarVisibility","wrap"];
	}
	/**  This event is triggered when the value of the text box is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
	*   oldValue - The previous value of the element before it was changed.
	*   value - The new value of the element.
	*   type - Indicates when the element was called, e.g. on blur or submit.
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
	/** Focuses the element. 
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

	/** The method is used to reset the value of the element box to it's initial state. 
	*/
    reset(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reset();
            });
        }
    }

	/** Returns the currenctly selected text. 
	* @param {string} displayMode. If <b>displayMode</b> is set to 'escaped', the value returned from the method contains escaped special characters.
	* @returns {string}
  */
	async selection(displayMode) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.selection(displayMode);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Selects a certain part of the input text. If no arguments are specified the whole text will be selected. 
	* @param {any} rangeFrom?. Determines the start index of the text selection.
	* @param {any} rangeTo?. Determines the end index of the text selection.
	*/
    select(rangeFrom, rangeTo){
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rangeFrom, rangeTo);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rangeFrom, rangeTo);
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
			React.createElement("smart-multiline-text-box", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default MultilineTextBox;
