import React from "react";
import { FormControlProperties } from "./../../index";
import { FormControlAction, FormControlAlign, FormControlControlType, FormControlLabelPosition, FormControlViewMode} from './../../index';
export { FormControlProperties } from "./../../index";
export { FormControlAction, FormControlAlign, FormControlControlType, FormControlLabelPosition, FormControlViewMode} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface FormControlProps extends FormControlProperties {
    className?: string;
    style?: React.CSSProperties;

	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Form Control
*/
export class FormControl extends React.Component<React.HTMLAttributes<Element> & FormControlProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'FormControl' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Gets or Sets the FormControl Action. This property is used when the 'controlType' is 'button' or 'submit'
	*	Property type: FormControlAction
	*/
	get action(): FormControlAction  {
		return this.nativeElement ? this.nativeElement.action : undefined;
	}
	set action(value: FormControlAction) {
		if (this.nativeElement) {
			this.nativeElement.action = value;
		}
	}

	/** Sets or Gets the alignment of the FormControl
	*	Property type: FormControlAlign
	*/
	get align(): FormControlAlign  {
		return this.nativeElement ? this.nativeElement.align : undefined;
	}
	set align(value: FormControlAlign) {
		if (this.nativeElement) {
			this.nativeElement.align = value;
		}
	}

	/** HTML Content displayed after the Form Control
	*	Property type: any
	*/
	get appendHTML(): any  {
		return this.nativeElement ? this.nativeElement.appendHTML : undefined;
	}
	set appendHTML(value: any) {
		if (this.nativeElement) {
			this.nativeElement.appendHTML = value;
		}
	}

	/** JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control.
	*	Property type: any
	*/
	get controlOptions(): any  {
		return this.nativeElement ? this.nativeElement.controlOptions : undefined;
	}
	set controlOptions(value: any) {
		if (this.nativeElement) {
			this.nativeElement.controlOptions = value;
		}
	}

	/** The type of the control.
	*	Property type: FormControlControlType
	*/
	get controlType(): FormControlControlType  {
		return this.nativeElement ? this.nativeElement.controlType : undefined;
	}
	set controlType(value: FormControlControlType) {
		if (this.nativeElement) {
			this.nativeElement.controlType = value;
		}
	}

	/** Sets the Form Group columns.
	*	Property type: number
	*/
	get columns(): number  {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: number) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Sets the Form control column span.
	*	Property type: number
	*/
	get columnSpan(): number  {
		return this.nativeElement ? this.nativeElement.columnSpan : undefined;
	}
	set columnSpan(value: number) {
		if (this.nativeElement) {
			this.nativeElement.columnSpan = value;
		}
	}

	/** Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value.
	*	Property type: string
	*/
	get dataField(): string  {
		return this.nativeElement ? this.nativeElement.dataField : undefined;
	}
	set dataField(value: string) {
		if (this.nativeElement) {
			this.nativeElement.dataField = value;
		}
	}

	/** Sets the Form control disabled mode.
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

	/** Gets whether the Form control is 'dirty' i.e its value is changed by the user.
	*	Property type: boolean
	*/
	get dirty(): boolean  {
		return this.nativeElement ? this.nativeElement.dirty : undefined;
	}
	set dirty(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.dirty = value;
		}
	}

	/** Gets or Sets the Form control's info icon's tooltip.
	*	Property type: string
	*/
	get info(): string  {
		return this.nativeElement ? this.nativeElement.info : undefined;
	}
	set info(value: string) {
		if (this.nativeElement) {
			this.nativeElement.info = value;
		}
	}

	/** Gets whether the Form control is invalid.
	*	Property type: boolean
	*/
	get invalid(): boolean  {
		return this.nativeElement ? this.nativeElement.invalid : undefined;
	}
	set invalid(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.invalid = value;
		}
	}

	/** Gets or Sets the Form control's label.
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

	/** Gets or Sets the Form control's label position.
	*	Property type: FormControlLabelPosition
	*/
	get labelPosition(): FormControlLabelPosition  {
		return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	}
	set labelPosition(value: FormControlLabelPosition) {
		if (this.nativeElement) {
			this.nativeElement.labelPosition = value;
		}
	}

	/** Gets or Sets the offset between the label and the control.
	*	Property type: number
	*/
	get labelOffset(): number  {
		return this.nativeElement ? this.nativeElement.labelOffset : undefined;
	}
	set labelOffset(value: number) {
		if (this.nativeElement) {
			this.nativeElement.labelOffset = value;
		}
	}

	/** FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
	*	Property type: FormControlAlign
	*/
	get labelAlign(): FormControlAlign  {
		return this.nativeElement ? this.nativeElement.labelAlign : undefined;
	}
	set labelAlign(value: FormControlAlign) {
		if (this.nativeElement) {
			this.nativeElement.labelAlign = value;
		}
	}

	/** FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label.
	*	Property type: string
	*/
	get nextButtonLabel(): string  {
		return this.nativeElement ? this.nativeElement.nextButtonLabel : undefined;
	}
	set nextButtonLabel(value: string) {
		if (this.nativeElement) {
			this.nativeElement.nextButtonLabel = value;
		}
	}

	/** FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label.
	*	Property type: string
	*/
	get backButtonLabel(): string  {
		return this.nativeElement ? this.nativeElement.backButtonLabel : undefined;
	}
	set backButtonLabel(value: string) {
		if (this.nativeElement) {
			this.nativeElement.backButtonLabel = value;
		}
	}

	/** Gets or Sets the FormControl placeholder.
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

	/** HTML Content displayed before the Form Control
	*	Property type: any
	*/
	get prependHTML(): any  {
		return this.nativeElement ? this.nativeElement.prependHTML : undefined;
	}
	set prependHTML(value: any) {
		if (this.nativeElement) {
			this.nativeElement.prependHTML = value;
		}
	}

	/** Gets or Sets the Form control readonly mode.
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

	/** Gets or Sets whether this field is required.
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

	/** Gets whether the Form control is not touched by the user. This flag is changed usually on blur, after the user interacted with the Form control
	*	Property type: boolean
	*/
	get untouched(): boolean  {
		return this.nativeElement ? this.nativeElement.untouched : undefined;
	}
	set untouched(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.untouched = value;
		}
	}

	/** Gets or Sets whether colon is displayed after the label.
	*	Property type: boolean
	*/
	get showColonAfterLabel(): boolean  {
		return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
	}
	set showColonAfterLabel(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showColonAfterLabel = value;
		}
	}

	/** FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set.
	*	Property type: boolean
	*/
	get showButtons(): boolean  {
		return this.nativeElement ? this.nativeElement.showButtons : undefined;
	}
	set showButtons(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showButtons = value;
		}
	}

	/** Sets or Gets the Form control or Form group value.
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

	/** Gets whether the Form control is valid.
	*	Property type: boolean
	*/
	get valid(): boolean  {
		return this.nativeElement ? this.nativeElement.valid : undefined;
	}
	set valid(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.valid = value;
		}
	}

	/** Sets or gets the column's validation rules. The expected value is an Array of Objects. Each object should have a 'type' property that can be set to 'required', 'min', 'max', 'minLength', 'maxLength', 'email', 'null', 'requiredTrue', 'minData', 'maxDate', 'pattern'. The 'value' property should be set, too. For validation rule types 'required', 'requiredTrue' and 'null' you can skip the 'value' property. Optional property is 'message', which determines the error message.
	*	Property type: [] | null
	*/
	get validationRules(): [] | null  {
		return this.nativeElement ? this.nativeElement.validationRules : undefined;
	}
	set validationRules(value: [] | null) {
		if (this.nativeElement) {
			this.nativeElement.validationRules = value;
		}
	}

	/** FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode.
	*	Property type: FormControlViewMode
	*/
	get viewMode(): FormControlViewMode  {
		return this.nativeElement ? this.nativeElement.viewMode : undefined;
	}
	set viewMode(value: FormControlViewMode) {
		if (this.nativeElement) {
			this.nativeElement.viewMode = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["action","align","appendHTML","controlOptions","controlType","columns","columnSpan","dataField","disabled","dirty","info","invalid","label","labelPosition","labelOffset","labelAlign","nextButtonLabel","backButtonLabel","placeholder","prependHTML","readonly","required","untouched","showColonAfterLabel","showButtons","value","valid","validationRules","viewMode"];
	}
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onCreate","onReady"];
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
			React.createElement("smart-form-control", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default FormControl;
