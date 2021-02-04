import React from "react";
import { FormProperties } from "./../../index";
import { ControlControlType, ControlLabelPosition, ControlViewMode, FormLabelPosition, Control} from './../../index';
import { FormControlProperties } from './../../index';
import { FormControl } from './formcontrol';
import { FormGroupProperties } from './../../index';
import { FormGroup } from './formgroup';
export { FormProperties } from "./../../index";
export { ControlControlType, ControlLabelPosition, ControlViewMode, FormLabelPosition, Control} from './../../index';
export { FormControl } from './formcontrol';
export { FormControlProperties } from "./../../index";
export { FormGroup } from './formgroup';
export { FormGroupProperties } from "./../../index";

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface FormProps extends FormProperties {
    className?: string;
    style?: React.CSSProperties;

	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Reactive Form Component with Advanced Validation
*/
export class Form extends React.Component<React.HTMLAttributes<Element> & FormProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Form' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the form columns.
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

	/** Sets or gets the form controls.
	*	Property type: Control[]
	*/
	get controls(): Control[]  {
		return this.nativeElement ? this.nativeElement.controls : undefined;
	}
	set controls(value: Control[]) {
		if (this.nativeElement) {
			this.nativeElement.controls = value;
		}
	}

	/** Callback function for handling status changes
	*	Property type: any
	*/
	get onStatusChanges(): any  {
		return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
	}
	set onStatusChanges(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onStatusChanges = value;
		}
	}

	/** Callback function for handling value changes
	*	Property type: any
	*/
	get onValueChanges(): any  {
		return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
	}
	set onValueChanges(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onValueChanges = value;
		}
	}

	/** Sets or Gets the labels position.
	*	Property type: FormLabelPosition
	*/
	get labelPosition(): FormLabelPosition  {
		return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	}
	set labelPosition(value: FormLabelPosition) {
		if (this.nativeElement) {
			this.nativeElement.labelPosition = value;
		}
	}

	/** Makes the form readonly.
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

	/** Shows / hides the colon after the labels.
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

	/** Shows / hides validation summary.
	*	Property type: boolean
	*/
	get showSummary(): boolean  {
		return this.nativeElement ? this.nativeElement.showSummary : undefined;
	}
	set showSummary(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showSummary = value;
		}
	}

	/** Gets the Form's state. Each member in the state has { dirty, untouched, disabled } properties.
	*	Property type: any
	*/
	get state(): any  {
		return this.nativeElement ? this.nativeElement.state : undefined;
	}
	set state(value: any) {
		if (this.nativeElement) {
			this.nativeElement.state = value;
		}
	}

	/** Gets or Sets the Form value.
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["columns","controls","onStatusChanges","onValueChanges","labelPosition","readonly","showColonAfterLabel","showSummary","state","value"];
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
	/** Adds a control to the Form. 
	* @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
	*/
    public addControl(controlOptions: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addControl(controlOptions);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addControl(controlOptions);
            });
        }
    }

	/** Gets a control by its name(dataField). 
	* @param {string} dataField. dataField of a FormControl or FormGroup
	* @returns {Control}
  */
	public async getControl(dataField:string) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getControl(dataField);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Inserts a control to the Form. 
	* @param {number} index. Control insert index
	* @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
	*/
    public insertControl(index: number, controlOptions: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertControl(index, controlOptions);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertControl(index, controlOptions);
            });
        }
    }

	/** Remove a control from the Form. 
	* @param {any} controlOptions. Control options. The control options description is available in the <em>controls</em> property.
	*/
    public removeControl(controlOptions: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeControl(controlOptions);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeControl(controlOptions);
            });
        }
    }

	/** Submits the form. 
	* @param {any} submitOptions?. Sets the submit options object. The object may have the following properties: <em>async</em>, <em>action</em>, <em>target</em>, <em>method</em>. <em>async</em> determines whether the form will be submitted asynchronously. <em>action</em> determines the submit url, <em>method</em> sets whether the submit is through 'GET' or 'POST'. <em>target</em> determines the submit target.
	*/
    public submit(submitOptions?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.submit(submitOptions);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.submit(submitOptions);
            });
        }
    }

	/** Clears the form. 
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

	/** Validates the form. 
	*/
    public validate(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.validate();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.validate();
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
			React.createElement("smart-form", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Form;
