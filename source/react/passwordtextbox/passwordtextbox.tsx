import React from "react";
import { PasswordTextBoxProperties } from "./../../index";
import { Animation, EnterKeyBehavior, PasswordTextBoxTooltipPosition} from './../../index';
export { PasswordTextBoxProperties } from "./../../index";
export { Animation, EnterKeyBehavior, PasswordTextBoxTooltipPosition} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface PasswordTextBoxProps extends PasswordTextBoxProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 PasswordTextBox lets the user enter a password with the text hidden.
*/
export class PasswordTextBox extends React.Component<React.HTMLAttributes<Element> & PasswordTextBoxProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'PasswordTextBox' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Specifies that the element should be focused when the page is loaded.
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

	/** The form that the element is associated with (its "form owner"). The value of the attribute must be the ID of a form element in the same document.
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

	/** Sets an object with string values, related to the different states of passwords strength.
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

	/** With this property the user can set a custom callback function that determines the password strength. The returned string from the function determines the how strong the current password is. The string should be one of the following: 'short', 'weak', 'far', 'good', 'strong'.
	*	Property type: any
	*/
	get passwordStrength(): any  {
		return this.nativeElement ? this.nativeElement.passwordStrength : undefined;
	}
	set passwordStrength(value: any) {
		if (this.nativeElement) {
			this.nativeElement.passwordStrength = value;
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

	/** Determines whether the password icon is visible.
	*	Property type: boolean
	*/
	get showPasswordIcon(): boolean  {
		return this.nativeElement ? this.nativeElement.showPasswordIcon : undefined;
	}
	set showPasswordIcon(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showPasswordIcon = value;
		}
	}

	/** Determines whether a tooltip which shows the password's strength will be shown.
	*	Property type: boolean
	*/
	get showPasswordStrength(): boolean  {
		return this.nativeElement ? this.nativeElement.showPasswordStrength : undefined;
	}
	set showPasswordStrength(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showPasswordStrength = value;
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

	/** Determines whether Tooltip's arrow will be shown or not.
	*	Property type: boolean
	*/
	get tooltipArrow(): boolean  {
		return this.nativeElement ? this.nativeElement.tooltipArrow : undefined;
	}
	set tooltipArrow(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.tooltipArrow = value;
		}
	}

	/** Determines the delay before the tooltip appears in miliseconds.
	*	Property type: number
	*/
	get tooltipDelay(): number  {
		return this.nativeElement ? this.nativeElement.tooltipDelay : undefined;
	}
	set tooltipDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.tooltipDelay = value;
		}
	}

	/** Determines the position of the tooltip.
	*	Property type: PasswordTextBoxTooltipPosition
	*/
	get tooltipPosition(): PasswordTextBoxTooltipPosition  {
		return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
	}
	set tooltipPosition(value: PasswordTextBoxTooltipPosition) {
		if (this.nativeElement) {
			this.nativeElement.tooltipPosition = value;
		}
	}

	/** Sets a custom template for the content of the tooltip.
	*	Property type: string
	*/
	get tooltipTemplate(): string  {
		return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	}
	set tooltipTemplate(value: string) {
		if (this.nativeElement) {
			this.nativeElement.tooltipTemplate = value;
		}
	}

	/** If true, the element cannot be focused.
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","autoFocus","disabled","enterKeyBehavior","form","hint","label","locale","localizeFormatFunction","maxLength","messages","minLength","name","passwordStrength","placeholder","required","rightToLeft","selectAllOnFocus","showPasswordIcon","showPasswordStrength","theme","tooltipArrow","tooltipDelay","tooltipPosition","tooltipTemplate","unfocusable","value"];
	}
	/**  This event is triggered when the value of the element is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previous value of the element before it was changed.
	*   value - The new value of the element.
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

	/** The method is used to reset input to it's initial value.  
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
			React.createElement("smart-password-text-box", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default PasswordTextBox;
