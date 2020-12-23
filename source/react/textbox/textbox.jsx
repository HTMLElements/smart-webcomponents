import React from "react";
import { ListItem } from './listitem';
import { ListItemsGroup } from './listitemsgroup';
export { ListItem } from './listitem';
export { ListItemsGroup } from './listitemsgroup';
/**
 TextBox is an input field with auto-suggest options.
*/
export class TextBox extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'TextBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines whether the text box will be focused on page load or not.
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

	/** Determines the autocomplete mode. Auto complete modes filter the items from the dataSource and show only those that match the input.
	*	Property type: AutoComplete
	*/
	get autoComplete() {
		return this.nativeElement ? this.nativeElement.autoComplete : undefined;
	}
	set autoComplete(value) {
		if (this.nativeElement) {
			this.nativeElement.autoComplete = value;
		}
	}

	/** Determines the delay before the drop down opens to show the matches from the auto complete operation.
	*	Property type: number
	*/
	get autoCompleteDelay() {
		return this.nativeElement ? this.nativeElement.autoCompleteDelay : undefined;
	}
	set autoCompleteDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.autoCompleteDelay = value;
		}
	}

	/** Determines the data source that will be loaded to the ComboBox. The dataSource can be an array of strings, numbers or objects where the attributes represent the properties of a List Item. For example label, value. It can also be a callback that returns an Array of items as previously described.
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

	/** Determines whether an indicator will appear during filtering and remote item loading.
	*	Property type: boolean
	*/
	get displayLoadingIndicator() {
		return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
	}
	set displayLoadingIndicator(value) {
		if (this.nativeElement) {
			this.nativeElement.displayLoadingIndicator = value;
		}
	}

	/** Sets or gets the displayMember. The displayMember specifies the name of a property to display. The name is contained in the collection specified by the 'dataSource' property.
	*	Property type: string
	*/
	get displayMember() {
		return this.nativeElement ? this.nativeElement.displayMember : undefined;
	}
	set displayMember(value) {
		if (this.nativeElement) {
			this.nativeElement.displayMember = value;
		}
	}

	/** Determines how the characters are displayed inside the input.
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

	/** Determines the drop down parent. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the drop down will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
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

	/** Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMaxHeight() {
		return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
	}
	set dropDownMaxHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMaxHeight = value;
		}
	}

	/** Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMaxWidth() {
		return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
	}
	set dropDownMaxWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMaxWidth = value;
		}
	}

	/** Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMinHeight() {
		return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
	}
	set dropDownMinHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMinHeight = value;
		}
	}

	/** Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMinWidth() {
		return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
	}
	set dropDownMinWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMinWidth = value;
		}
	}

	/** Determines how the drop down is going to open.
	*	Property type: DropDownOpenMode
	*/
	get dropDownOpenMode() {
		return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
	}
	set dropDownOpenMode(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownOpenMode = value;
		}
	}

	/** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the drop down will will target the overlay and not the DOM.
	*	Property type: boolean
	*/
	get dropDownOverlay() {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownOverlay = value;
		}
	}

	/** Determines the placeholder for the drop down, displayed when there are no items in it.
	*	Property type: string
	*/
	get dropDownPlaceholder() {
		return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
	}
	set dropDownPlaceholder(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPlaceholder = value;
		}
	}

	/** Determines the position of the drop down when opened.
	*	Property type: DropDownPosition
	*/
	get dropDownPosition() {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPosition = value;
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

	/** Determines the behavior of the element when Escape key is pressed.
	*	Property type: EscKeyMode
	*/
	get escKeyMode() {
		return this.nativeElement ? this.nativeElement.escKeyMode : undefined;
	}
	set escKeyMode(value) {
		if (this.nativeElement) {
			this.nativeElement.escKeyMode = value;
		}
	}

	/** Specifies the behavior of "Enter" key.
	*	Property type: EnterKeyBehavior
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

	/** Sets additional helper text below the element. The hint is visible only when the element is focused.
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

	/** Determines the visibility of the horizontal Scroll bar thats inside the drop down.
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

	/** Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
	*	Property type: string
	*/
	get inputMember() {
		return this.nativeElement ? this.nativeElement.inputMember : undefined;
	}
	set inputMember(value) {
		if (this.nativeElement) {
			this.nativeElement.inputMember = value;
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

	/** Sets the height for all list items. Used only when virtualization is enabled.
	*	Property type: number | null
	*/
	get itemHeight() {
		return this.nativeElement ? this.nativeElement.itemHeight : undefined;
	}
	set itemHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.itemHeight = value;
		}
	}

	/** Determines the item width measuring algorithm.
	*	Property type: ListItemMeasureMode
	*/
	get itemMeasureMode() {
		return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
	}
	set itemMeasureMode(value) {
		if (this.nativeElement) {
			this.nativeElement.itemMeasureMode = value;
		}
	}

	/** A getter that returns an array of all List items inside the drop down.
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

	/** The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM.  It's used to set a customize the content of the list items.
	*	Property type: any
	*/
	get itemTemplate() {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.itemTemplate = value;
		}
	}

	/** Sets a little text label above the element.
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

	/** Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
	*	Property type: string
	*/
	get loadingIndicatorPlaceholder() {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
	}
	set loadingIndicatorPlaceholder(value) {
		if (this.nativeElement) {
			this.nativeElement.loadingIndicatorPlaceholder = value;
		}
	}

	/** Determines the position of the loading indicator.
	*	Property type: VerticalAlignment
	*/
	get loadingIndicatorPosition() {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
	}
	set loadingIndicatorPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.loadingIndicatorPosition = value;
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

	/** Sets or gets the minimum number of characters that the user have to enter to trigger the auto complete functionality.
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

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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

	/** Determines whether the drop down is opened or closed
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

	/** Determines the input's placeholder.
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

	/** Disables user interaction with the element.
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

	/** Specifies that the user must fill the input before submitting a form with the element.
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

	/** Specifies the message that will appear if required is set and no value is provided in the input.
	*	Property type: string
	*/
	get requiredMessage() {
		return this.nativeElement ? this.nativeElement.requiredMessage : undefined;
	}
	set requiredMessage(value) {
		if (this.nativeElement) {
			this.nativeElement.requiredMessage = value;
		}
	}

	/** Determines whether the content of the input will be selected on focus or not.
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

	/** Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
	*	Property type: string
	*/
	get valueMember() {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value) {
		if (this.nativeElement) {
			this.nativeElement.valueMember = value;
		}
	}

	/** Determines the visibility of the vertical scroll bar that's inside the drop down.
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


	// Gets the properties of the React component.
	get properties() {
		return ["animation","autoFocus","autoComplete","autoCompleteDelay","dataSource","disabled","displayLoadingIndicator","displayMember","displayMode","dropDownAppendTo","dropDownHeight","dropDownMaxHeight","dropDownMaxWidth","dropDownMinHeight","dropDownMinWidth","dropDownOpenMode","dropDownOverlay","dropDownPlaceholder","dropDownPosition","dropDownWidth","escKeyMode","enterKeyBehavior","form","hint","horizontalScrollBarVisibility","inputMember","inputPurpose","itemHeight","itemMeasureMode","items","itemTemplate","label","loadingIndicatorPlaceholder","loadingIndicatorPosition","locale","localizeFormatFunction","maxLength","minLength","messages","name","opened","placeholder","readonly","rightToLeft","required","requiredMessage","selectAllOnFocus","theme","unfocusable","value","valueMember","verticalScrollBarVisibility"];
	}
	/**  This event is triggered when the value of the Text Box is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
	*   oldValue - The previous value before it was changed.
	*   value - The new value.
	*   type - The type of the event.
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
	/** Closes the drop down. The drop down is used only when auto complete is enabled. 
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

	/** Opens the drop down. The drop down is used only when auto complete is enabled. 
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

	/** The method is used to reset the input back to it's initial value. 
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
			React.createElement("smart-text-box", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default TextBox;
