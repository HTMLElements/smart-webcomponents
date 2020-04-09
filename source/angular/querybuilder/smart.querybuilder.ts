import { QueryBuilder } from './../index';
import { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, QueryBuilderApplyMode, QueryBuilderFieldsMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { QueryBuilder } from './../index';


@Directive({
	selector: 'smart-query-builder, [smart-query-builder]'
})

export class QueryBuilderComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<QueryBuilder>) {
		super(ref);
		this.nativeElement = ref.nativeElement as QueryBuilder;
	}

	private eventHandlers: any[] = [];

	public nativeElement: QueryBuilder;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <QueryBuilder>document.createElement('smart-query-builder');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Enables the dragging of conditions inside a group or between groups. */
	@Input()
	get allowDrag(): boolean {
		return this.nativeElement ? this.nativeElement.allowDrag : undefined;
	}
	set allowDrag(value: boolean) {
		this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
	}

	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Determines when the value of the element is updated with the new changes. */
	@Input()
	get applyMode(): QueryBuilderApplyMode {
		return this.nativeElement ? this.nativeElement.applyMode : undefined;
	}
	set applyMode(value: QueryBuilderApplyMode) {
		this.nativeElement ? this.nativeElement.applyMode = value : undefined;
	}

	/** @description Adds more operations that can be used to the query bilder's conditions structure. Each custom operation can have the following fields:label - label to be displayed in the operator box. Multiple operations with the same label can exist.name - unique name of the operationeditorTemplate - callback function that creates a custom value editorvalueTemplate - callback function that displays the value after the edior has been closedhandleValue - callback function that handles the value returned by the editor when it is closedhideValue - a boolean condition that specifies whether the operation requires a value or notexpressionTemplate - a string representing a custom Linq expression template. If the value of the element is a string it will be considered as a Linq expression and it will be checked against all expressionTemplates to find a match.expressionReaderCallback - a callback that is used to specify which arguments from the expression are used for the fieldName and value. Used when converting a Linq expression to QueryBuilder value.expressionBuilderCallback - a callback function that is used to specify which arguments from the Linq expression are used for the fieldName and value when building the Linq expression from the current value of the element. */
	@Input()
	get customOperations(): any {
		return this.nativeElement ? this.nativeElement.customOperations : undefined;
	}
	set customOperations(value: any) {
		this.nativeElement ? this.nativeElement.customOperations = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets the dropdown width of the property and operator editors. */
	@Input()
	get dropDownWidth(): string {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value: string) {
		this.nativeElement ? this.nativeElement.dropDownWidth = value : undefined;
	}

	/** @description Array with filter fields and their settings. The available field settings are:label - the field's label, as it will appear in the field selection drop downdataField - the field's data fielddataType - the field's data typefilterOperations - an array of the filter operations applicable to the field; if not set, the default filter operations are appliedlookup - an object with settings for customizing the field's respective value selection input. It has the following settings:autoCompleteDelay - delay between typing in the input and opening the drop down with available optionsdataSource - an array of available options to choose from (appear in a drop down)minLength - minimum number of charactes to type in the input before the options drop down is displayedreadonly - if set to true, the value selection input acts as a drop down list, otherwise it acts as a combo box */
	@Input()
	get fields(): any {
		return this.nativeElement ? this.nativeElement.fields : undefined;
	}
	set fields(value: any) {
		this.nativeElement ? this.nativeElement.fields = value : undefined;
	}

	/** @description Determines whether new fields can be dynamically added by typing in the field (property) box. */
	@Input()
	get fieldsMode(): QueryBuilderFieldsMode {
		return this.nativeElement ? this.nativeElement.fieldsMode : undefined;
	}
	set fieldsMode(value: QueryBuilderFieldsMode) {
		this.nativeElement ? this.nativeElement.fieldsMode = value : undefined;
	}

	/** @description Sets or gets the format string of the editor of fields with type 'date'. */
	@Input()
	get formatStringDate(): string {
		return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
	}
	set formatStringDate(value: string) {
		this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
	}

	/** @description Sets or gets the format string of the editor of fields with type 'dateTime'. */
	@Input()
	get formatStringDateTime(): string {
		return this.nativeElement ? this.nativeElement.formatStringDateTime : undefined;
	}
	set formatStringDateTime(value: string) {
		this.nativeElement ? this.nativeElement.formatStringDateTime = value : undefined;
	}

	/** @description A callback function called when a field is added dynamically. Used for configuring settings of the new field. Applicable only when fieldsMode is 'dynamic'. */
	@Input()
	get getDynamicField(): any {
		return this.nativeElement ? this.nativeElement.getDynamicField : undefined;
	}
	set getDynamicField(value: any) {
		this.nativeElement ? this.nativeElement.getDynamicField = value : undefined;
	}

	/** @description Defines CSS classes to be applied to each of the built-in operations. Icons for these classes are applied in the smart-query-builder style sheet. This property is applicable only if showIcons is set to true. */
	@Input()
	get icons(): any {
		return this.nativeElement ? this.nativeElement.icons : undefined;
	}
	set icons(value: any) {
		this.nativeElement ? this.nativeElement.icons = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Defines field names of the filtered element. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Determines the placeholder text used inside the condition's operator box in case an operator is not selected. */
	@Input()
	get operatorPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.operatorPlaceholder : undefined;
	}
	set operatorPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.operatorPlaceholder = value : undefined;
	}

	/** @description Determines the placeholder text used inside the condition's field (property) box in case a field is not selected. */
	@Input()
	get propertyPlaceholder(): string {
		return this.nativeElement ? this.nativeElement.propertyPlaceholder : undefined;
	}
	set propertyPlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.propertyPlaceholder = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Shows/Hides the operator icons shown in the operator selection drop down. */
	@Input()
	get showIcons(): boolean {
		return this.nativeElement ? this.nativeElement.showIcons : undefined;
	}
	set showIcons(value: boolean) {
		this.nativeElement ? this.nativeElement.showIcons = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description The value is represented by multidimensional array. The array contains group operators with conditions. Each group can contain multiple conditions. */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description Callback used to format the content of the value fields. */
	@Input()
	get valueFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.valueFormatFunction : undefined;
	}
	set valueFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.valueFormatFunction = value : undefined;
	}

	/** @description Determines the placeholder text used inside the condition's value box in case a value is not set. */
	@Input()
	get valuePlaceholder(): string {
		return this.nativeElement ? this.nativeElement.valuePlaceholder : undefined;
	}
	set valuePlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.valuePlaceholder = value : undefined;
	}

	/** @description This event is triggered when the query builder's value is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
	*   item - The item that is being dragged.
	*   data - The data of the item that is being dragged.
	*   originalEvent - The original event.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a dragged condition is dropped. This action can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	target, 	targetData, 	targetSide)
	*   item - The item that is being dragged.
	*   data - The data of the item that is being dragged.
	*   target - The target item.
	*   targetData - the data of the target item.
	*   targetSide - The side of the target item where the dragged item will be dropped.
	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a condition is being dragged.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
	*   item - The item that is being dragged.
	*   data - The data of the item that is being dragged.
	*   originalEvent - The original event.
	*/
	@Output() onDragging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a dragging operation is started in smart-query-builder. This action can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	data, 	originalEvent)
	*   item - The item is going to be dragged.
	*   data - The data of the item that is going to be dragged.
	*   originalEvent - The original event.
	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when one of the query builder's building blocks ( oeprator, fieldName, value, close button, etc) is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	type, 	data)
	*   id - The internal id of the clicked item, e.g. '0.1', '1.1', etc.
	*   type - The type of the clicked item ( condition or a group ).
	*   data - The data of the item.
	*/
	@Output() onItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a field has been selected.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	label, 	value)
	*   label - The label of the selected property.
	*   value - The value of the selected property.
	*/
	@Output() onPropertySelected: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Converts the current value of the element to DynamicLINQ expression. 
	* @returns {string}
  */
	public async getLinq(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getLinq();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
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
		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['draggingHandler'] = (event: CustomEvent) => { that.onDragging.emit(event); }
		that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['itemClickHandler'] = (event: CustomEvent) => { that.onItemClick.emit(event); }
		that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);

		that.eventHandlers['propertySelectedHandler'] = (event: CustomEvent) => { that.onPropertySelected.emit(event); }
		that.nativeElement.addEventListener('propertySelected', that.eventHandlers['propertySelectedHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['dragEndHandler']) {
			that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
		}

		if (that.eventHandlers['draggingHandler']) {
			that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
		}

		if (that.eventHandlers['dragStartHandler']) {
			that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
		}

		if (that.eventHandlers['itemClickHandler']) {
			that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
		}

		if (that.eventHandlers['propertySelectedHandler']) {
			that.nativeElement.removeEventListener('propertySelected', that.eventHandlers['propertySelectedHandler']);
		}

	}
}
