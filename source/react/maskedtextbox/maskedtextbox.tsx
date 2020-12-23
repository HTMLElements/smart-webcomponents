import React from "react";
import { MaskedTextBoxProperties } from "./../../index";
import { Animation, MaskedTextBoxCutCopyMaskFormat, EnterKeyBehavior, MaskedTextBoxTextMaskFormat} from './../../index';
export { MaskedTextBoxProperties } from "./../../index";
export { Animation, MaskedTextBoxCutCopyMaskFormat, EnterKeyBehavior, MaskedTextBoxTextMaskFormat} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface MaskedTextBoxProps extends MaskedTextBoxProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onValidation?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 MaskedTextBox uses a mask to control the input of the user.
*/
export class MaskedTextBox extends React.Component<React.HTMLAttributes<Element> & MaskedTextBoxProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'MaskedTextBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines whether promptChar can be entered as valid input by the user.
	*	Property type: boolean
	*/
	get allowPromptAsInput(): boolean  {
		return this.nativeElement ? this.nativeElement.allowPromptAsInput : undefined;
	}
	set allowPromptAsInput(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.allowPromptAsInput = value;
		}
	}

	/** Determines whether the input accepts characters only from the ASCII character set.
	*	Property type: boolean
	*/
	get asciiOnly(): boolean  {
		return this.nativeElement ? this.nativeElement.asciiOnly : undefined;
	}
	set asciiOnly(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.asciiOnly = value;
		}
	}

	/** Specifies whether the input should be focused when the page is loaded.
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

	/** Determines whether the mask is shown/hidden on focus/blur even if placeholder is not set.
	*	Property type: boolean
	*/
	get autoShowMask(): boolean  {
		return this.nativeElement ? this.nativeElement.autoShowMask : undefined;
	}
	set autoShowMask(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoShowMask = value;
		}
	}

	/** Determines whether literals and prompt characters are copied to the clipboard on cut/copy operations.
	*	Property type: MaskedTextBoxCutCopyMaskFormat
	*/
	get cutCopyMaskFormat(): MaskedTextBoxCutCopyMaskFormat  {
		return this.nativeElement ? this.nativeElement.cutCopyMaskFormat : undefined;
	}
	set cutCopyMaskFormat(value: MaskedTextBoxCutCopyMaskFormat) {
		if (this.nativeElement) {
			this.nativeElement.cutCopyMaskFormat = value;
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

	/** Specifies the behavior on "Enter" key press. Default mode is "submit".
	*	Property type: EnterKeyBehavior
	*/
	get enterKeyBehavior(): EnterKeyBehavior  {
		return this.nativeElement ? this.nativeElement.enterKeyBehavior : undefined;
	}
	set enterKeyBehavior(value: EnterKeyBehavior) {
		if (this.nativeElement) {
			this.nativeElement.enterKeyBehavior = value;
		}
	}

	/** Determines whether the prompt character in the input mask is hidden when the masked text box isn't focused anymore.
	*	Property type: boolean
	*/
	get hidePromptOnLeave(): boolean  {
		return this.nativeElement ? this.nativeElement.hidePromptOnLeave : undefined;
	}
	set hidePromptOnLeave(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hidePromptOnLeave = value;
		}
	}

	/** Sets additional helper text below the element. The hint is visible only when the element is focused.
	*	Property type: string
	*/
	get hint(): string  {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: string) {
		if (this.nativeElement) {
			this.nativeElement.hint = value;
		}
	}

	/** Determines whether new user input overwrites the existing input value or not.
	*	Property type: boolean
	*/
	get isOverwriteMode(): boolean  {
		return this.nativeElement ? this.nativeElement.isOverwriteMode : undefined;
	}
	set isOverwriteMode(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.isOverwriteMode = value;
		}
	}

	/** Sets label above the element. The label is always visible.
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

	/** Defines the mask for the input.
	*	Property type: string
	*/
	get mask(): string  {
		return this.nativeElement ? this.nativeElement.mask : undefined;
	}
	set mask(value: string) {
		if (this.nativeElement) {
			this.nativeElement.mask = value;
		}
	}

	/** Indicates whether all required fields of the mask have been populated or not.
	*	Property type: boolean
	*/
	get maskCompleted(): boolean  {
		return this.nativeElement ? this.nativeElement.maskCompleted : undefined;
	}
	set maskCompleted(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.maskCompleted = value;
		}
	}

	/** Indicates whether all required and optional fields of the mask have been populated or not.
	*	Property type: boolean
	*/
	get maskFull(): boolean  {
		return this.nativeElement ? this.nativeElement.maskFull : undefined;
	}
	set maskFull(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.maskFull = value;
		}
	}

	/** Determines the maximum number of characters that the user can enter.
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

	/** A string that appears inside the input when there's no value and mask. 
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

	/** Determines the prompt char that is used for the mask of the element.
	*	Property type: string
	*/
	get promptChar(): string  {
		return this.nativeElement ? this.nativeElement.promptChar : undefined;
	}
	set promptChar(value: string) {
		if (this.nativeElement) {
			this.nativeElement.promptChar = value;
		}
	}

	/** If the element is readonly, the users cannot iteract with the element.
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

	/** Determines whether the parsing of user input should stop after the first invalid character or not.
	*	Property type: boolean
	*/
	get rejectInputOnFirstFailure(): boolean  {
		return this.nativeElement ? this.nativeElement.rejectInputOnFirstFailure : undefined;
	}
	set rejectInputOnFirstFailure(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rejectInputOnFirstFailure = value;
		}
	}

	/** Specifies that the input must be filled in before submitting a form
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

	/** Determines whether an input character that matches the prompt character should reset the current selected value in the input or not. Applicable only when allowPromptAsInput is enabled.
	*	Property type: boolean
	*/
	get resetOnPrompt(): boolean  {
		return this.nativeElement ? this.nativeElement.resetOnPrompt : undefined;
	}
	set resetOnPrompt(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.resetOnPrompt = value;
		}
	}

	/** Determines whether hitting space character resets the currently selected value from the input or not.
	*	Property type: boolean
	*/
	get resetOnSpace(): boolean  {
		return this.nativeElement ? this.nativeElement.resetOnSpace : undefined;
	}
	set resetOnSpace(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.resetOnSpace = value;
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

	/** Specifies whether the value of the input will be selected on focus or not.
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

	/** Determines whether the value of the input should contain or not the prompt/literals of the mask.
	*	Property type: MaskedTextBoxTextMaskFormat
	*/
	get textMaskFormat(): MaskedTextBoxTextMaskFormat  {
		return this.nativeElement ? this.nativeElement.textMaskFormat : undefined;
	}
	set textMaskFormat(value: MaskedTextBoxTextMaskFormat) {
		if (this.nativeElement) {
			this.nativeElement.textMaskFormat = value;
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

	/** Callback function that allows to set custom validation on the value. If the function returns false then the value of the input is treated as not valid.
	*	Property type: any
	*/
	get validation(): any  {
		return this.nativeElement ? this.nativeElement.validation : undefined;
	}
	set validation(value: any) {
		if (this.nativeElement) {
			this.nativeElement.validation = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","allowPromptAsInput","asciiOnly","autoFocus","autoShowMask","cutCopyMaskFormat","disabled","enterKeyBehavior","hidePromptOnLeave","hint","isOverwriteMode","label","locale","localizeFormatFunction","mask","maskCompleted","maskFull","maxLength","messages","name","placeholder","promptChar","readonly","rejectInputOnFirstFailure","required","resetOnPrompt","resetOnSpace","rightToLeft","selectAllOnFocus","textMaskFormat","theme","unfocusable","value","validation"];
	}
	/**  This event is triggered when the value of the Text Box is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	newValue)
	*   oldValue - The previous value before it was changed.
	*   newValue - The new value.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered if the validation property is set. Indicates whether valiation has passed successfully or not.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	success)
	*   success - A flag inidicating whether the validation was successfull or not.
	*/
	onValidation?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onValidation","onCreate","onReady"];
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

	/** Blurs the element.  
	*/
    public blur(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.blur();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.blur();
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
			React.createElement("smart-masked-text-box", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default MaskedTextBox;
