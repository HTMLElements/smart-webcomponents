import { FormControl } from './../index';
import { FormControlAction, FormControlAlign, FormControlControlType, FormControlLabelPosition, FormControlViewMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { FormControlAction, FormControlAlign, FormControlControlType, FormControlLabelPosition, FormControlViewMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { FormControl } from './../index';


@Directive({
	selector: 'smart-form-control, [smart-form-control]'
})

export class FormControlComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<FormControl>) {
		super(ref);
		this.nativeElement = ref.nativeElement as FormControl;
	}

	private eventHandlers: any[] = [];

	public nativeElement: FormControl;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <FormControl>document.createElement('smart-form-control');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Gets or Sets the FormControl Action. This property is used when the 'controlType' is 'button' or 'submit' */
	@Input()
	get action(): FormControlAction {
		return this.nativeElement ? this.nativeElement.action : undefined;
	}
	set action(value: FormControlAction) {
		this.nativeElement ? this.nativeElement.action = value : undefined;
	}

	/** @description Sets or Gets the alignment of the FormControl */
	@Input()
	get align(): FormControlAlign {
		return this.nativeElement ? this.nativeElement.align : undefined;
	}
	set align(value: FormControlAlign) {
		this.nativeElement ? this.nativeElement.align = value : undefined;
	}

	/** @description HTML Content displayed after the Form Control */
	@Input()
	get appendHTML(): any {
		return this.nativeElement ? this.nativeElement.appendHTML : undefined;
	}
	set appendHTML(value: any) {
		this.nativeElement ? this.nativeElement.appendHTML = value : undefined;
	}

	/** @description JSON object with initialization properties of the UI component. Example: { dataSource: ['item 1', 'item 2', 'item 3'] } will set the dataSource property of the Form control. */
	@Input()
	get controlOptions(): any {
		return this.nativeElement ? this.nativeElement.controlOptions : undefined;
	}
	set controlOptions(value: any) {
		this.nativeElement ? this.nativeElement.controlOptions = value : undefined;
	}

	/** @description The type of the control. */
	@Input()
	get controlType(): FormControlControlType {
		return this.nativeElement ? this.nativeElement.controlType : undefined;
	}
	set controlType(value: FormControlControlType) {
		this.nativeElement ? this.nativeElement.controlType = value : undefined;
	}

	/** @description Sets the Form Group columns. */
	@Input()
	get columns(): number {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: number) {
		this.nativeElement ? this.nativeElement.columns = value : undefined;
	}

	/** @description Sets the Form control column span. */
	@Input()
	get columnSpan(): number {
		return this.nativeElement ? this.nativeElement.columnSpan : undefined;
	}
	set columnSpan(value: number) {
		this.nativeElement ? this.nativeElement.columnSpan = value : undefined;
	}

	/** @description Sets the Form control data field. The control's inner input's name is set to the dataField value and in the FormGroup it is accessible through the dataField value. */
	@Input()
	get dataField(): string {
		return this.nativeElement ? this.nativeElement.dataField : undefined;
	}
	set dataField(value: string) {
		this.nativeElement ? this.nativeElement.dataField = value : undefined;
	}

	/** @description Sets the Form control disabled mode. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Gets whether the Form control is 'dirty' i.e its value is changed by the user. */
	@Input()
	get dirty(): boolean {
		return this.nativeElement ? this.nativeElement.dirty : undefined;
	}
	set dirty(value: boolean) {
		this.nativeElement ? this.nativeElement.dirty = value : undefined;
	}

	/** @description Gets or Sets the Form control's info icon's tooltip. */
	@Input()
	get info(): string {
		return this.nativeElement ? this.nativeElement.info : undefined;
	}
	set info(value: string) {
		this.nativeElement ? this.nativeElement.info = value : undefined;
	}

	/** @description Gets whether the Form control is invalid. */
	@Input()
	get invalid(): boolean {
		return this.nativeElement ? this.nativeElement.invalid : undefined;
	}
	set invalid(value: boolean) {
		this.nativeElement ? this.nativeElement.invalid = value : undefined;
	}

	/** @description Gets or Sets the Form control's label. */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description Gets or Sets the Form control's label position. */
	@Input()
	get labelPosition(): FormControlLabelPosition {
		return this.nativeElement ? this.nativeElement.labelPosition : undefined;
	}
	set labelPosition(value: FormControlLabelPosition) {
		this.nativeElement ? this.nativeElement.labelPosition = value : undefined;
	}

	/** @description Gets or Sets the offset between the label and the control. */
	@Input()
	get labelOffset(): number {
		return this.nativeElement ? this.nativeElement.labelOffset : undefined;
	}
	set labelOffset(value: number) {
		this.nativeElement ? this.nativeElement.labelOffset = value : undefined;
	}

	/** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
	@Input()
	get labelAlign(): FormControlAlign {
		return this.nativeElement ? this.nativeElement.labelAlign : undefined;
	}
	set labelAlign(value: FormControlAlign) {
		this.nativeElement ? this.nativeElement.labelAlign = value : undefined;
	}

	/** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the next button label. */
	@Input()
	get nextButtonLabel(): string {
		return this.nativeElement ? this.nativeElement.nextButtonLabel : undefined;
	}
	set nextButtonLabel(value: string) {
		this.nativeElement ? this.nativeElement.nextButtonLabel = value : undefined;
	}

	/** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the back button label. */
	@Input()
	get backButtonLabel(): string {
		return this.nativeElement ? this.nativeElement.backButtonLabel : undefined;
	}
	set backButtonLabel(value: string) {
		this.nativeElement ? this.nativeElement.backButtonLabel = value : undefined;
	}

	/** @description Gets or Sets the FormControl placeholder. */
	@Input()
	get placeholder(): string {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		this.nativeElement ? this.nativeElement.placeholder = value : undefined;
	}

	/** @description HTML Content displayed before the Form Control */
	@Input()
	get prependHTML(): any {
		return this.nativeElement ? this.nativeElement.prependHTML : undefined;
	}
	set prependHTML(value: any) {
		this.nativeElement ? this.nativeElement.prependHTML = value : undefined;
	}

	/** @description Gets or Sets the Form control readonly mode. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Gets or Sets whether this field is required. */
	@Input()
	get required(): boolean {
		return this.nativeElement ? this.nativeElement.required : undefined;
	}
	set required(value: boolean) {
		this.nativeElement ? this.nativeElement.required = value : undefined;
	}

	/** @description Gets whether the Form control is not touched by the user. This flag is changed usually on blur, after the user interacted with the Form control */
	@Input()
	get untouched(): boolean {
		return this.nativeElement ? this.nativeElement.untouched : undefined;
	}
	set untouched(value: boolean) {
		this.nativeElement ? this.nativeElement.untouched = value : undefined;
	}

	/** @description Gets or Sets whether colon is displayed after the label. */
	@Input()
	get showColonAfterLabel(): boolean {
		return this.nativeElement ? this.nativeElement.showColonAfterLabel : undefined;
	}
	set showColonAfterLabel(value: boolean) {
		this.nativeElement ? this.nativeElement.showColonAfterLabel = value : undefined;
	}

	/** @description FormGroup only(when controlType is set to 'group'). Gets or Sets whether the navigation buttons are displayed. The property has effect when the viewMode property is set. */
	@Input()
	get showButtons(): boolean {
		return this.nativeElement ? this.nativeElement.showButtons : undefined;
	}
	set showButtons(value: boolean) {
		this.nativeElement ? this.nativeElement.showButtons = value : undefined;
	}

	/** @description Sets or Gets the Form control or Form group value. */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Gets whether the Form control is valid. */
	@Input()
	get valid(): boolean {
		return this.nativeElement ? this.nativeElement.valid : undefined;
	}
	set valid(value: boolean) {
		this.nativeElement ? this.nativeElement.valid = value : undefined;
	}

	/** @description Validation rules array. Accepts any JQX.Validator rules. */
	@Input()
	get validationRules(): any[] {
		return this.nativeElement ? this.nativeElement.validationRules : undefined;
	}
	set validationRules(value: any[]) {
		this.nativeElement ? this.nativeElement.validationRules = value : undefined;
	}

	/** @description FormGroup only(when controlType is set to 'group'). Gets or Sets the form'group view mode. */
	@Input()
	get viewMode(): FormControlViewMode {
		return this.nativeElement ? this.nativeElement.viewMode : undefined;
	}
	set viewMode(value: FormControlViewMode) {
		this.nativeElement ? this.nativeElement.viewMode = value : undefined;
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
