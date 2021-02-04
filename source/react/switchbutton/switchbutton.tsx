import React from "react";
import { SwitchButtonProperties } from "./../../index";
import { Animation, ClickMode, Orientation, SwitchButtonSwitchMode} from './../../index';
export { SwitchButtonProperties } from "./../../index";
export { Animation, ClickMode, Orientation, SwitchButtonSwitchMode} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface SwitchButtonProps extends SwitchButtonProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onCheckValue?: ((event?: Event) => void) | undefined;
	onUncheckValue?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 A Switch represents a button with two states, on and off. Switches are most often used on mobile devices to enable and disable options.
*/
export class SwitchButton extends React.Component<React.HTMLAttributes<Element> & SwitchButtonProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'SwitchButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Sets the click mode of the switch button. This property is active only when switchMode is 'click'. press - the state of the switch is changed on mousedownrelease - the state of the switch is changed on mouseuppressAndRelease - the state of the switch is changed on mousedown and reverted to the original on mouseup.
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

	/** Enables or disables the ratio button.
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

	/** Sets the text representation of checked=false state.
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

	/** Sets custom template about false state.
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

	/** Sets or gets indeterminate state of the switch.
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

	/** Sets the direction of switchin. If is true - positions of the switch states are changed.
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

	/** Sets or gets the widget's name.
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

	/** Sets the orientation of the switch
	*	Property type: Orientation
	*/
	get orientation(): Orientation  {
		return this.nativeElement ? this.nativeElement.orientation : undefined;
	}
	set orientation(value: Orientation) {
		if (this.nativeElement) {
			this.nativeElement.orientation = value;
		}
	}

	/** If the custom element is readonly, it cannot be interacted with.
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

	/** Sets the text representation of checked=true state.
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

	/** Sets custom template about true state.
	*	Property type: string
	*/
	get trueTemplate(): string  {
		return this.nativeElement ? this.nativeElement.trueTemplate : undefined;
	}
	set trueTemplate(value: string) {
		if (this.nativeElement) {
			this.nativeElement.trueTemplate = value;
		}
	}

	/** Sets the switchMode of the element. default - dragging the thumb or clicking inside the track can change the state of the element. click - clicking inside the track changes the state of the element. drag - dragging the thumb changes the state of the element.none - the state of the element can only be changed via the API
	*	Property type: SwitchButtonSwitchMode
	*/
	get switchMode(): SwitchButtonSwitchMode  {
		return this.nativeElement ? this.nativeElement.switchMode : undefined;
	}
	set switchMode(value: SwitchButtonSwitchMode) {
		if (this.nativeElement) {
			this.nativeElement.switchMode = value;
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

	/** Sets or gets the widget's value.
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
		return ["animation","clickMode","checked","disabled","falseContent","falseTemplate","indeterminate","inverted","locale","localizeFormatFunction","messages","name","orientation","readonly","trueContent","trueTemplate","switchMode","theme","unfocusable","value"];
	}
	/**  This event is triggered when the widget is checked/unchecked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value, 	oldValue, 	changeType)
	*   value - A boolean value indicating the new state of the button ( checked or not ).
	*   oldValue - A boolean value indicating the previous state of the button ( checked or not ).
	*   changeType - A string flag indicating whether the change event was triggered via API or an event.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the widget is checked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
	*   changeType - A string flag indicating whether the change event was triggered via API or an event.
	*/
	onCheckValue?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the widget is unchecked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	changeType)
	*   changeType - A string flag indicating whether the change event was triggered via API or an event.
	*/
	onUncheckValue?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onCheckValue","onUncheckValue","onCreate","onReady"];
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
			React.createElement("smart-switch-button", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default SwitchButton;
