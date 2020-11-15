import { FormGroup } from './../index';
import { ControlControlType, ControlLabelPosition, ControlViewMode, FormGroupLabelPosition, Control, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { ControlControlType, ControlLabelPosition, ControlViewMode, FormGroupLabelPosition, Control, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { FormGroup } from './../index';


@Directive({
	selector: 'smart-form-group, [smart-form-group]'
})

export class FormGroupComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<FormGroup>) {
		super(ref);
		this.nativeElement = ref.nativeElement as FormGroup;
	}

	private eventHandlers: any[] = [];

	public nativeElement: FormGroup;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <FormGroup>document.createElement('smart-form-group');
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
	get labelPosition(): FormGroupLabelPosition {
		return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	}
	set labelPosition(value: FormGroupLabelPosition) {
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


	get isRendered(): boolean {
		return this.nativeElement ? this.nativeElement.isRendered : false;
	}

	ngOnInit() {
	}

    ngAfterViewInit() {
      const that = this;

      that.onCreate.emit(that.nativeElement);

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
