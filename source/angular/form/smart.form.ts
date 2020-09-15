import { Form } from './../index';
import { ControlControlType, ControlLabelPosition, ControlViewMode, FormLabelPosition, Control, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { ControlControlType, ControlLabelPosition, ControlViewMode, FormLabelPosition, Control, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Form } from './../index';


import { FormControlComponent } from './smart.formcontrol';

import { FormGroupComponent } from './smart.formgroup';

@Directive({
	selector: 'smart-form, [smart-form]'
})

export class FormComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {

	constructor(ref: ElementRef<Form>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Form;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Form;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Form>document.createElement('smart-form');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets the form columns. */
	@Input()
	get columns(): number {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: number) {
		this.nativeElement ? this.nativeElement.columns = value : undefined;
	}

	/** @description  */
	@Input()
	get controls(): Control[] {
		return this.nativeElement ? this.nativeElement.controls : undefined;
	}
	set controls(value: Control[]) {
		this.nativeElement ? this.nativeElement.controls = value : undefined;
	}

	/** @description Callback function for handling status changes */
	@Input()
	get onStatusChanges(): any {
		return this.nativeElement ? this.nativeElement.onStatusChanges : undefined;
	}
	set onStatusChanges(value: any) {
		this.nativeElement ? this.nativeElement.onStatusChanges = value : undefined;
	}

	/** @description Callback function for handling value changes */
	@Input()
	get onValueChanges(): any {
		return this.nativeElement ? this.nativeElement.onValueChanges : undefined;
	}
	set onValueChanges(value: any) {
		this.nativeElement ? this.nativeElement.onValueChanges = value : undefined;
	}

	/** @description Sets or Gets the labels position. */
	@Input()
	get labelPosition(): FormLabelPosition {
		return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	}
	set labelPosition(value: FormLabelPosition) {
		this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
	}

	/** @description Makes the form readonly. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Shows / hides the colon after the labels. */
	@Input()
	get showColonAfterLabel(): boolean {
		return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
	}
	set showColonAfterLabel(value: boolean) {
		this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
	}

	/** @description Shows / hides validation summary. */
	@Input()
	get showSummary(): boolean {
		return this.nativeElement ? this.nativeElement.showSummary : undefined;
	}
	set showSummary(value: boolean) {
		this.nativeElement ? this.nativeElement.showSummary = value : undefined;
	}

	/** @description Gets the Form's state. Each member in the state has { dirty, untouched, disabled } properties. */
	@Input()
	get state(): any {
		return this.nativeElement ? this.nativeElement.state : undefined;
	}
	set state(value: any) {
		this.nativeElement ? this.nativeElement.state = value : undefined;
	}

	/** @description Gets or Sets the Form value. */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Adds a control to the Form. 
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

	/** @description Gets a control by its name(dataField). 
	* @param {string} dataField. dataField of a FormControl or FormGroup
	* @returns {Control}
  */
	public async getControl(dataField): Promise<any> {
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

	/** @description Inserts a control to the Form. 
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

	/** @description Remove a control from the Form. 
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

	/** @description Submits the form. 
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

	/** @description Clears the form. 
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

	/** @description Validates the form. 
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


	get isRendered(): boolean {
		return this.nativeElement ? this.nativeElement.isRendered : false;
	}

	ngOnInit() {
	}

    ngAfterViewInit() {
      const that = this;

      that.onCreate.emit(that.nativeElement);

		Smart.Render();

		this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
		this.listen();
	}

	ngOnDestroy() {
		this.unlisten();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.nativeElement && this.nativeElement.isRendered) {
			for (const propName in changes) {
				if (changes.hasOwnProperty(propName)) {
					this.nativeElement[propName] = changes[propName].currentValue;
				}
			}
		}
	}

	/** @description Add event listeners. */
	private listen(): void {
        const that = this;
	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
	}
}
