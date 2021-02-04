import React from "react";
import { TankProperties } from "./../../index";
import { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength} from './../../index';
export { TankProperties } from "./../../index";
export { Animation, LabelsVisibility, DragMechanicalAction, ScaleMode, Orientation, ScalePosition, ScaleType, Position, TicksPosition, TicksVisibility, Validation, WordLength} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface TankProps extends TankProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Tank is a UI Component used in Engineering and Scientific applications. It is broadly used to display the fluid levels.
*/
export class Tank extends React.Component<React.HTMLAttributes<Element> & TankProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Tank' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** If is set to true all values coerce to the interval, set in the interval property.
	*	Property type: boolean
	*/
	get coerce(): boolean  {
		return this.nativeElement ? this.nativeElement.coerce : undefined;
	}
	set coerce(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.coerce = value;
		}
	}

	/** Sets or gets whether custom ticks at (possibly) uneven interval will be plotted. The ticks to be plotted are defined with the property customTicks.
	*	Property type: boolean
	*/
	get customInterval(): boolean  {
		return this.nativeElement ? this.nativeElement.customInterval : undefined;
	}
	set customInterval(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.customInterval = value;
		}
	}

	/** If customInterval is enabled, sets a list of ticks to be plotted. If coerce is set to true, the value will snap to these ticks.
	*	Property type: number[]
	*/
	get customTicks(): number[]  {
		return this.nativeElement ? this.nativeElement.customTicks : undefined;
	}
	set customTicks(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.customTicks = value;
		}
	}

	/** Sets or gets the pattern which labels are displayed in when mode is 'date'.
	*	Property type: string
	*/
	get dateLabelFormatString(): string  {
		return this.nativeElement ? this.nativeElement.dateLabelFormatString : undefined;
	}
	set dateLabelFormatString(value: string) {
		if (this.nativeElement) {
			this.nativeElement.dateLabelFormatString = value;
		}
	}

	/** Sets or gets the char to use as the decimal separator in numeric values. 
	*	Property type: string
	*/
	get decimalSeparator(): string  {
		return this.nativeElement ? this.nativeElement.decimalSeparator : undefined;
	}
	set decimalSeparator(value: string) {
		if (this.nativeElement) {
			this.nativeElement.decimalSeparator = value;
		}
	}

	/** Enables or disables the widget. 
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

	/** When cooerce property is true, all values coerce to the interval's value.
	*	Property type: string | number
	*/
	get interval(): string | number  {
		return this.nativeElement ? this.nativeElement.interval : undefined;
	}
	set interval(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.interval = value;
		}
	}

	/** Sets the direction of the tank. If is true - positions of the tank's begin and end are changed.
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

	/** A callback function that can be used to format the values displayed on the tank labels.
	*	Property type: any
	*/
	get labelFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.labelFormatFunction : undefined;
	}
	set labelFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.labelFormatFunction = value;
		}
	}

	/** Sets or gets the widget's label visibility
	*	Property type: LabelsVisibility
	*/
	get labelsVisibility(): LabelsVisibility  {
		return this.nativeElement ? this.nativeElement.labelsVisibility : undefined;
	}
	set labelsVisibility(value: LabelsVisibility) {
		if (this.nativeElement) {
			this.nativeElement.labelsVisibility = value;
		}
	}

	/** Sets or gets the locale. Used in conjunction with the property messages. 
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

	/** Enables or disables the usage of logarithmic scale in the widget.
	*	Property type: boolean
	*/
	get logarithmicScale(): boolean  {
		return this.nativeElement ? this.nativeElement.logarithmicScale : undefined;
	}
	set logarithmicScale(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.logarithmicScale = value;
		}
	}

	/** Sets or gets the maximum value of the widget.
	*	Property type: string | number
	*/
	get max(): string | number  {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.max = value;
		}
	}

	/** Sets or gets the type of used mechanical action.
	*	Property type: DragMechanicalAction
	*/
	get mechanicalAction(): DragMechanicalAction  {
		return this.nativeElement ? this.nativeElement.mechanicalAction : undefined;
	}
	set mechanicalAction(value: DragMechanicalAction) {
		if (this.nativeElement) {
			this.nativeElement.mechanicalAction = value;
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

	/** Sets or gets the minimum value of the widget. 
	*	Property type: string | number
	*/
	get min(): string | number  {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.min = value;
		}
	}

	/** Sets or gets whether the widget works with numbers or dates.
	*	Property type: ScaleMode
	*/
	get mode(): ScaleMode  {
		return this.nativeElement ? this.nativeElement.mode : undefined;
	}
	set mode(value: ScaleMode) {
		if (this.nativeElement) {
			this.nativeElement.mode = value;
		}
	}

	/** Sets or gets the element's name, which is used as a reference when the data is submitted.
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

	/** Sets the orientation of the widget
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

	/** Determines the number of digits after the decimal point. Applicable only when scaleType is 'integer'.
	*	Property type: number
	*/
	get precisionDigits(): number  {
		return this.nativeElement ? this.nativeElement.precisionDigits : undefined;
	}
	set precisionDigits(value: number) {
		if (this.nativeElement) {
			this.nativeElement.precisionDigits = value;
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

	/** Sets the position of the widget's scales. 
	*	Property type: ScalePosition
	*/
	get scalePosition(): ScalePosition  {
		return this.nativeElement ? this.nativeElement.scalePosition : undefined;
	}
	set scalePosition(value: ScalePosition) {
		if (this.nativeElement) {
			this.nativeElement.scalePosition = value;
		}
	}

	/** Sets the type of the tank's scale. 
	*	Property type: ScaleType
	*/
	get scaleType(): ScaleType  {
		return this.nativeElement ? this.nativeElement.scaleType : undefined;
	}
	set scaleType(value: ScaleType) {
		if (this.nativeElement) {
			this.nativeElement.scaleType = value;
		}
	}

	/** Enables or disables scientific notation.
	*	Property type: boolean
	*/
	get scientificNotation(): boolean  {
		return this.nativeElement ? this.nativeElement.scientificNotation : undefined;
	}
	set scientificNotation(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.scientificNotation = value;
		}
	}

	/** Enables or disables displaying of the thumb label.
	*	Property type: boolean
	*/
	get showThumbLabel(): boolean  {
		return this.nativeElement ? this.nativeElement.showThumbLabel : undefined;
	}
	set showThumbLabel(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showThumbLabel = value;
		}
	}

	/** Enables or disables displaying of the tooltip.
	*	Property type: boolean
	*/
	get showTooltip(): boolean  {
		return this.nativeElement ? this.nativeElement.showTooltip : undefined;
	}
	set showTooltip(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showTooltip = value;
		}
	}

	/** Enables or disables displaying of the units.
	*	Property type: boolean
	*/
	get showUnit(): boolean  {
		return this.nativeElement ? this.nativeElement.showUnit : undefined;
	}
	set showUnit(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showUnit = value;
		}
	}

	/** Determining how many significant digits are in a number. Applicable only when scaleType is 'integer'.
	*	Property type: number
	*/
	get significantDigits(): number  {
		return this.nativeElement ? this.nativeElement.significantDigits : undefined;
	}
	set significantDigits(value: number) {
		if (this.nativeElement) {
			this.nativeElement.significantDigits = value;
		}
	}

	/** Sets or gets the element's visual theme. 
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

	/** Sets or gets the position of the thumb label.
	*	Property type: Position
	*/
	get thumbLabelPosition(): Position  {
		return this.nativeElement ? this.nativeElement.thumbLabelPosition : undefined;
	}
	set thumbLabelPosition(value: Position) {
		if (this.nativeElement) {
			this.nativeElement.thumbLabelPosition = value;
		}
	}

	/** Sets or gets the position of the ticks in jqxTank widget.
	*	Property type: TicksPosition
	*/
	get ticksPosition(): TicksPosition  {
		return this.nativeElement ? this.nativeElement.ticksPosition : undefined;
	}
	set ticksPosition(value: TicksPosition) {
		if (this.nativeElement) {
			this.nativeElement.ticksPosition = value;
		}
	}

	/** Sets or gets the visibility of the ticks.
	*	Property type: TicksVisibility
	*/
	get ticksVisibility(): TicksVisibility  {
		return this.nativeElement ? this.nativeElement.ticksVisibility : undefined;
	}
	set ticksVisibility(value: TicksVisibility) {
		if (this.nativeElement) {
			this.nativeElement.ticksVisibility = value;
		}
	}

	/** Sets or gets the position of the tooltip in jqxTank widget.
	*	Property type: Position
	*/
	get tooltipPosition(): Position  {
		return this.nativeElement ? this.nativeElement.tooltipPosition : undefined;
	}
	set tooltipPosition(value: Position) {
		if (this.nativeElement) {
			this.nativeElement.tooltipPosition = value;
		}
	}

	/** Sets or gets if the element can be focused.
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

	/** Sets or gets the name of unit used in jqxTank widget.
	*	Property type: string
	*/
	get unit(): string  {
		return this.nativeElement ? this.nativeElement.unit : undefined;
	}
	set unit(value: string) {
		if (this.nativeElement) {
			this.nativeElement.unit = value;
		}
	}

	/** Sets the value's validation by min/max. If 'strict' is applied, the value is always validated by min and max. If 'interaction' is applied, programmatic value changes are not coerced to min/max and if min/max are changed, resulting in the current value being out of range, the value is not coerced, and no change event is fired.
	*	Property type: Validation
	*/
	get validation(): Validation  {
		return this.nativeElement ? this.nativeElement.validation : undefined;
	}
	set validation(value: Validation) {
		if (this.nativeElement) {
			this.nativeElement.validation = value;
		}
	}

	/** Sets or gets the value of the jqxTank widget. 
	*	Property type: any
	*/
	get value(): any  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Sets or gets the word length. Applicable only when scaleType is 'integer'.
	*	Property type: WordLength
	*/
	get wordLength(): WordLength  {
		return this.nativeElement ? this.nativeElement.wordLength : undefined;
	}
	set wordLength(value: WordLength) {
		if (this.nativeElement) {
			this.nativeElement.wordLength = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","coerce","customInterval","customTicks","dateLabelFormatString","decimalSeparator","disabled","interval","inverted","labelFormatFunction","labelsVisibility","locale","localizeFormatFunction","logarithmicScale","max","mechanicalAction","messages","min","mode","name","orientation","precisionDigits","readonly","rightToLeft","scalePosition","scaleType","scientificNotation","showThumbLabel","showTooltip","showUnit","significantDigits","theme","thumbLabelPosition","ticksPosition","ticksVisibility","tooltipPosition","unfocusable","unit","validation","value","wordLength"];
	}
	/**  This event is triggered when the value of the tank is changed.
	*  @param event. The custom event. 	*/
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
	/** Focuses the tank.  
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

	/** Gets the optimal size of the widget.  
	* @returns {any}
  */
	public async getOptimalSize() : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getOptimalSize();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Get/set the value of the tank.  
	* @param {string | number} value?. The value to be set. If no parameter is passed, returns the displayed value of the tank. 
	* @returns {string}
  */
	public async val(value?:string | number) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.val(value);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
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
			React.createElement("smart-tank", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Tank;
