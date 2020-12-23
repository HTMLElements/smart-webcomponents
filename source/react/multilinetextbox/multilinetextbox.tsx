import React from "react";
import { MultilineTextBoxProperties } from "./../../index";
import { Animation, MultilineTextBoxAutoCapitalize, MultiLineTextBoxAutoComplete, TextBoxDisplayMode, MultilineTextBoxEnterKeyBehavior, HorizontalScrollBarVisibility, VerticalScrollBarVisibility, MultilineTextBoxWrap} from './../../index';
import { ListItemProperties } from './../../index';
import { ListItem } from './listitem';
import { ListItemsGroupProperties } from './../../index';
import { ListItemsGroup } from './listitemsgroup';
export { MultilineTextBoxProperties } from "./../../index";
export { Animation, MultilineTextBoxAutoCapitalize, MultiLineTextBoxAutoComplete, TextBoxDisplayMode, MultilineTextBoxEnterKeyBehavior, HorizontalScrollBarVisibility, VerticalScrollBarVisibility, MultilineTextBoxWrap} from './../../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../../index";

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface MultilineTextBoxProps extends MultilineTextBoxProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Defines a multi-line text input control. MultilineTextBox can hold an unlimited number of characters, and the text renders in a fixed-width font
*/
export class MultilineTextBox extends React.Component<React.HTMLAttributes<Element> & MultilineTextBoxProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

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
	get animation(): Animation  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Determines whether and how the value should be automatically capitalized as it is entered/edited by the user.
	*	Property type: MultilineTextBoxAutoCapitalize
	*/
	get autoCapitalize(): MultilineTextBoxAutoCapitalize  {
		return this.nativeElement ? this.nativeElement.autoCapitalize : undefined;
	}
	set autoCapitalize(value: MultilineTextBoxAutoCapitalize) {
		if (this.nativeElement) {
			this.nativeElement.autoCapitalize = value;
		}
	}

	/** Determines whether the value of the control can be automatically completed by the browser.
	*	Property type: MultiLineTextBoxAutoComplete
	*/
	get autoComplete(): MultiLineTextBoxAutoComplete  {
		return this.nativeElement ? this.nativeElement.autoComplete : undefined;
	}
	set autoComplete(value: MultiLineTextBoxAutoComplete) {
		if (this.nativeElement) {
			this.nativeElement.autoComplete = value;
		}
	}

	/** Determines whether element will auto expand when the input overflows vertically.
	*	Property type: boolean
	*/
	get autoExpand(): boolean  {
		return this.nativeElement ? this.nativeElement.autoExpand : undefined;
	}
	set autoExpand(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoExpand = value;
		}
	}

	/** Determines whether the input should be focused when the page is loaded.
	*	Property type: boolean
	*/
	get autoFocus(): boolean  {
		return this.nativeElement ? this.nativeElement.autoFocus : undefined;
	}
	set autoFocus(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoFocus = value;
		}
	}

	/** The cols attribute specifies the visible width of a input. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.
	*	Property type: number
	*/
	get cols(): number  {
		return this.nativeElement ? this.nativeElement.cols : undefined;
	}
	set cols(value: number) {
		if (this.nativeElement) {
			this.nativeElement.cols = value;
		}
	}

	/** Enables or disables the element.
	*	Property type: boolean
	*/
	get disabled(): boolean  {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Specifies how the characters are displayed inside the input.
	*	Property type: TextBoxDisplayMode
	*/
	get displayMode(): TextBoxDisplayMode  {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: TextBoxDisplayMode) {
		if (this.nativeElement) {
			this.nativeElement.displayMode = value;
		}
	}

	/** Determines the behavior on "Enter" key.
	*	Property type: MultilineTextBoxEnterKeyBehavior
	*/
	get enterKeyBehavior(): MultilineTextBoxEnterKeyBehavior  {
		return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
	}
	set enterKeyBehavior(value: MultilineTextBoxEnterKeyBehavior) {
		if (this.nativeElement) {
			this.nativeElement.enterKeyBehavior = value;
		}
	}

	/** The form element that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
	*	Property type: string
	*/
	get form(): string  {
		return this.nativeElement ? this.nativeElement.form : undefined;
	}
	set form(value: string) {
		if (this.nativeElement) {
			this.nativeElement.form = value;
		}
	}

	/** Sets additional helper text below the element. Appears only when the element is focused.
	*	Property type: any
	*/
	get hint(): any  {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: any) {
		if (this.nativeElement) {
			this.nativeElement.hint = value;
		}
	}

	/** Controls horizontal scrollbar's visibility. 
	*	Property type: HorizontalScrollBarVisibility
	*/
	get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility  {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility) {
		if (this.nativeElement) {
			this.nativeElement.horizontalScrollBarVisibility = value;
		}
	}

	/** Sets the purpose of the input and what, if any, permission the user agent has to provide automated assistance in filling out the element's input when in a form, as well as guidance to the browser as to the type of information expected in the element. This value corresponds to the standard HTML autocomplete attribute and can be set to values such as 'on', 'name', 'organization', 'street-address', etc.
	*	Property type: string
	*/
	get inputPurpose(): string  {
		return this.nativeElement ? this.nativeElement.inputPurpose : undefined;
	}
	set inputPurpose(value: string) {
		if (this.nativeElement) {
			this.nativeElement.inputPurpose = value;
		}
	}

	/** Sets label above the element. The label is displayed above the input and it's always visible.
	*	Property type: string
	*/
	get label(): string  {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		if (this.nativeElement) {
			this.nativeElement.label = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
	*	Property type: string
	*/
	get locale(): string  {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
	*	Property type: any
	*/
	get localizeFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
		}
	}

	/** Sets or gets the maximum number of characters that the user can enter.
	*	Property type: number
	*/
	get maxLength(): number  {
		return this.nativeElement ? this.nativeElement.maxLength : undefined;
	}
	set maxLength(value: number) {
		if (this.nativeElement) {
			this.nativeElement.maxLength = value;
		}
	}

	/** Sets or gets the minimum number of characters that the user can enter.
	*	Property type: number
	*/
	get minLength(): number  {
		return this.nativeElement ? this.nativeElement.minLength : undefined;
	}
	set minLength(value: number) {
		if (this.nativeElement) {
			this.nativeElement.minLength = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
	*	Property type: any
	*/
	get messages(): any  {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
	*	Property type: string
	*/
	get name(): string  {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		if (this.nativeElement) {
			this.nativeElement.name = value;
		}
	}

	/** The placeholder text that is displayed when no value is applied to the element. 
	*	Property type: string
	*/
	get placeholder(): string  {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.placeholder = value;
		}
	}

	/** If enabled the users cannot iteract with the element.
	*	Property type: boolean
	*/
	get readonly(): boolean  {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Specifies that the user must fill in a value before submitting a form that contains the element.
	*	Property type: boolean
	*/
	get required(): boolean  {
		return this.nativeElement ? this.nativeElement.required : undefined;
	}
	set required(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.required = value;
		}
	}

	/** Enables/ disables the resizing of the element. If enabled a resizing indicator appears in the bottom corner of the input area.
	*	Property type: boolean
	*/
	get resizable(): boolean  {
		return this.nativeElement ? this.nativeElement.resizable : undefined;
	}
	set resizable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.resizable = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: boolean
	*/
	get rightToLeft(): boolean  {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** The number of visible text lines for the control.
	*	Property type: number
	*/
	get rows(): number  {
		return this.nativeElement ? this.nativeElement.rows : undefined;
	}
	set rows(value: number) {
		if (this.nativeElement) {
			this.nativeElement.rows = value;
		}
	}

	/** Specifies whether the content of the input will be selected on focus.
	*	Property type: boolean
	*/
	get selectAllOnFocus(): boolean  {
		return this.nativeElement ? this.nativeElement.selectAllOnFocus : undefined;
	}
	set selectAllOnFocus(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.selectAllOnFocus = value;
		}
	}

	/** Indicates the index of the last character in the current selection.
	*	Property type: number
	*/
	get selectionEnd(): number  {
		return this.nativeElement ? this.nativeElement.selectionEnd : undefined;
	}
	set selectionEnd(value: number) {
		if (this.nativeElement) {
			this.nativeElement.selectionEnd = value;
		}
	}

	/** Indicates the index to the first character in the current selection.
	*	Property type: number
	*/
	get selectionStart(): number  {
		return this.nativeElement ? this.nativeElement.selectionStart : undefined;
	}
	set selectionStart(value: number) {
		if (this.nativeElement) {
			this.nativeElement.selectionStart = value;
		}
	}

	/** Specifies whether the element is to have its spelling and grammar checked or not.
	*	Property type: boolean
	*/
	get spellCheck(): boolean  {
		return this.nativeElement ? this.nativeElement.spellCheck : undefined;
	}
	set spellCheck(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.spellCheck = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
	*	Property type: string
	*/
	get theme(): string  {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** If is set to true, the element cannot be focused.
	*	Property type: boolean
	*/
	get unfocusable(): boolean  {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}

	/** Sets or gets the value of the element.
	*	Property type: string
	*/
	get value(): string  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Controls vertical scrollbar's visibility. 
	*	Property type: VerticalScrollBarVisibility
	*/
	get verticalScrollBarVisibility(): VerticalScrollBarVisibility  {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value: VerticalScrollBarVisibility) {
		if (this.nativeElement) {
			this.nativeElement.verticalScrollBarVisibility = value;
		}
	}

	/** Indicates how the control wraps text.
	*	Property type: MultilineTextBoxWrap
	*/
	get wrap(): MultilineTextBoxWrap  {
		return this.nativeElement ? this.nativeElement.wrap : undefined;
	}
	set wrap(value: MultilineTextBoxWrap) {
		if (this.nativeElement) {
			this.nativeElement.wrap = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","autoCapitalize","autoComplete","autoExpand","autoFocus","cols","disabled","displayMode","enterKeyBehavior","form","hint","horizontalScrollBarVisibility","inputPurpose","label","locale","localizeFormatFunction","maxLength","minLength","messages","name","placeholder","readonly","required","resizable","rightToLeft","rows","selectAllOnFocus","selectionEnd","selectionStart","spellCheck","theme","unfocusable","value","verticalScrollBarVisibility","wrap"];
	}
	/**  This event is triggered when the value of the text box is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value, 	type)
	*   oldValue - The previous value of the element before it was changed.
	*   value - The new value of the element.
	*   type - Indicates when the element was called, e.g. on blur or submit.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onCreate","onReady"];
	}
	/** Focuses the element. 
	*/
    public focus(): void {
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
    public reset(): void {
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
	public async selection(displayMode:string) : Promise<any> {
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
    public select(rangeFrom?: any, rangeTo?: any): void {
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



	constructor(props: any) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize: boolean) {
		const that = this;
		const props: any = {};
		const events: any = {};
		let styles: any = null;

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
				const normalizeProp = (str: string) => {
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
