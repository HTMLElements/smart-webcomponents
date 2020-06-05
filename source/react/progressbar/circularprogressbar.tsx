import React from "react";
import { CircularProgressBarProperties } from "./../../index";
import { Animation} from './../../index';
export { CircularProgressBarProperties } from "./../../index";
export { Animation} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface CircularProgressBarProps extends CircularProgressBarProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;

}
/**
 Progress Bar displayed as a circle.
*/
export class CircularProgressBar extends React.Component<React.HTMLProps<Element> & CircularProgressBarProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'CircularProgressBar' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** A callback function defining the new format for the label of the Progress Bar.
	*	Property type: any
	*/
	get formatFunction(): any  {
		return this.nativeElement ? this.nativeElement.formatFunction : undefined;
	}
	set formatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.formatFunction = value;
		}
	}

	/** Sets the value of the Circular Progress bar to indeterminate state(null) and starts the animation.
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

	/** Sets the filling direction of the Circular Progress Bar.
	*	Property type: boolean
	*/
	get inverted(): boolean  {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.inverted = value;
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

	/** Callback, related to localization module. 
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

	/** Sets progress bars maximum possible value.
	*	Property type: number
	*/
	get max(): number  {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: number) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
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

	/** Sets progress bars minimum possible value.
	*	Property type: number
	*/
	get min(): number  {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: number) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Enables/Disabled the label for the Progress Bar.
	*	Property type: boolean
	*/
	get showProgressValue(): boolean  {
		return this.nativeElement ? this.nativeElement.showProgressValue : undefined;
	}
	set showProgressValue(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showProgressValue = value;
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

	/** Sets or gets the value of the progress bar
	*	Property type: number
	*/
	get value(): number  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: number) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","disabled","formatFunction","indeterminate","inverted","locale","localizeFormatFunction","max","messages","min","showProgressValue","rightToLeft","theme","unfocusable","value"];
	}
	/**  This event is triggered when the value is changed.
	*  @param event. The custom event. 	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get events(): string[] {
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

		for(let i = 0; i < that.events.length; i++){
			const eventName = that.events[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-circular-progress-bar", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default CircularProgressBar;
