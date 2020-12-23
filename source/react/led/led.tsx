import React from "react";
import { LedProperties } from "./../../index";
import { Animation, ClickMode, LedShape} from './../../index';
export { LedProperties } from "./../../index";
export { Animation, ClickMode, LedShape} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface LedProps extends LedProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 LET Toggle button with Checked boolean value.
*/
export class Led extends React.Component<React.HTMLAttributes<Element> & LedProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Led' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Sets or gets the check state.
	*	Property type: boolean
	*/
	get checked(): boolean  {
		return this.nativeElement ? this.nativeElement.checked : undefined;
	}
	set checked(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.checked = value;
		}
	}

	/** Determines when the element fires a click event.
	*	Property type: ClickMode
	*/
	get clickMode(): ClickMode  {
		return this.nativeElement ? this.nativeElement.clickMode : undefined;
	}
	set clickMode(value: ClickMode) {
		if (this.nativeElement) {
			this.nativeElement.clickMode = value;
		}
	}

	/** Enables or disables the LED.
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

	/** Sets the content for the 'false' state.
	*	Property type: string
	*/
	get falseContent(): string  {
		return this.nativeElement ? this.nativeElement.falseContent : undefined;
	}
	set falseContent(value: string) {
		if (this.nativeElement) {
			this.nativeElement.falseContent = value;
		}
	}

	/** Sets custom template for LED's false state.
	*	Property type: any
	*/
	get falseTemplate(): any  {
		return this.nativeElement ? this.nativeElement.falseTemplate : undefined;
	}
	set falseTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.falseTemplate = value;
		}
	}

	/** Sets the LED to indeterminate state.
	*	Property type: boolean
	*/
	get indeterminate(): boolean  {
		return this.nativeElement ? this.nativeElement.indeterminate : undefined;
	}
	set indeterminate(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.indeterminate = value;
		}
	}

	/** Sets the content for the 'null' state.
	*	Property type: string
	*/
	get indeterminateContent(): string  {
		return this.nativeElement ? this.nativeElement.indeterminateContent : undefined;
	}
	set indeterminateContent(value: string) {
		if (this.nativeElement) {
			this.nativeElement.indeterminateContent = value;
		}
	}

	/** Sets a custom template for LED's indeterminate state.
	*	Property type: any
	*/
	get indeterminateTemplate(): any  {
		return this.nativeElement ? this.nativeElement.indeterminateTemplate : undefined;
	}
	set indeterminateTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.indeterminateTemplate = value;
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

	/** If the widgets is readonly, the users cannot iteract with the element.
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

	/** Sets the shape of LED.
	*	Property type: LedShape
	*/
	get shape(): LedShape  {
		return this.nativeElement ? this.nativeElement.shape : undefined;
	}
	set shape(value: LedShape) {
		if (this.nativeElement) {
			this.nativeElement.shape = value;
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

	/** Sets the content for the 'true' state.
	*	Property type: string
	*/
	get trueContent(): string  {
		return this.nativeElement ? this.nativeElement.trueContent : undefined;
	}
	set trueContent(value: string) {
		if (this.nativeElement) {
			this.nativeElement.trueContent = value;
		}
	}

	/** Sets custom template for LED's true state.
	*	Property type: any
	*/
	get trueTemplate(): any  {
		return this.nativeElement ? this.nativeElement.trueTemplate : undefined;
	}
	set trueTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.trueTemplate = value;
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

	/** Sets or gets the element's value.
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
		return ["animation","checked","clickMode","disabled","falseContent","falseTemplate","indeterminate","indeterminateContent","indeterminateTemplate","locale","localizeFormatFunction","messages","name","readonly","rightToLeft","shape","theme","trueContent","trueTemplate","unfocusable","value"];
	}
	/**  This event is triggered when the widget is checked/unchecked.
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
			React.createElement("smart-led", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Led;
