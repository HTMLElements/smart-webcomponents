import { FilterBuilder } from './../index';
import { Animation, FilterBuilderIcons, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, FilterBuilderIcons, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { FilterBuilder } from './../index';


@Directive({
	selector: 'smart-filter-builder, [smart-filter-builder]'
})

export class FilterBuilderComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<FilterBuilder>) {
		super(ref);
		this.nativeElement = ref.nativeElement as FilterBuilder;
	}

	private eventHandlers: any[] = [];

	public nativeElement: FilterBuilder;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <FilterBuilder>document.createElement('smart-filter-builder');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Adds more operations, that can be used in the filter bilder's conditions structure. */
	@Input()
	get customOperations(): {name: string, caption: string, icon: string}[] {
		return this.nativeElement ? this.nativeElement.customOperations : undefined;
	}
	set customOperations(value: {name: string, caption: string, icon: string}[]) {
		this.nativeElement ? this.nativeElement.customOperations = value : undefined;
	}

	/** @description Enables or disables the context menu. */
	@Input()
	get disableContextMenu(): boolean {
		return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
	}
	set disableContextMenu(value: boolean) {
		this.nativeElement ? this.nativeElement.disableContextMenu = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Array with filtered fields and their settings. */
	@Input()
	get fields(): any {
		return this.nativeElement ? this.nativeElement.fields : undefined;
	}
	set fields(value: any) {
		this.nativeElement ? this.nativeElement.fields = value : undefined;
	}

	/** @description Sets or gets the format string of the editor of fields with type 'date'. */
	@Input()
	get formatStringDate(): string {
		return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
	}
	set formatStringDate(value: string) {
		this.nativeElement ? this.nativeElement.formatStringDate = value : undefined;
	}

	/** @description Sets or gets the format string of the editor of fields with type 'datetime'. */
	@Input()
	get formatStringDateTime(): string {
		return this.nativeElement ? this.nativeElement.formatStringDateTime : undefined;
	}
	set formatStringDateTime(value: string) {
		this.nativeElement ? this.nativeElement.formatStringDateTime = value : undefined;
	}

	/** @description Sets hint in form of popup message. */
	@Input()
	get hint(): string {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: string) {
		this.nativeElement ? this.nativeElement.hint = value : undefined;
	}

	/** @description Defines icon's representatino as characters. */
	@Input()
	get icons(): FilterBuilderIcons {
		return this.nativeElement ? this.nativeElement.icons : undefined;
	}
	set icons(value: FilterBuilderIcons) {
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

	/** @description Callback, related to localization module.  */
	@Input()
	get localizeFormatFunction(): any {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
	}

	/** @description Defines maximum number of allowed conditions in the element. */
	@Input()
	get maxConditions(): number | null {
		return this.nativeElement ? this.nativeElement.maxConditions : undefined;
	}
	set maxConditions(value: number | null) {
		this.nativeElement ? this.nativeElement.maxConditions = value : undefined;
	}

	/** @description Defines maximum number of allowed conditions in group. */
	@Input()
	get maxConditionsPerGroup(): number | null {
		return this.nativeElement ? this.nativeElement.maxConditionsPerGroup : undefined;
	}
	set maxConditionsPerGroup(value: number | null) {
		this.nativeElement ? this.nativeElement.maxConditionsPerGroup = value : undefined;
	}

	/** @description Defines maximum level of grouping in the FilterBuilder. */
	@Input()
	get maxLevel(): number | null {
		return this.nativeElement ? this.nativeElement.maxLevel : undefined;
	}
	set maxLevel(value: number | null) {
		this.nativeElement ? this.nativeElement.maxLevel = value : undefined;
	}

	/** @description Defines field names of the filtered element. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description In restrictedMode set to true, adding of new groups and groups editing by user interaction are denied. */
	@Input()
	get restrictedMode(): boolean {
		return this.nativeElement ? this.nativeElement.restrictedMode : undefined;
	}
	set restrictedMode(value: boolean) {
		this.nativeElement ? this.nativeElement.restrictedMode = value : undefined;
	}

	/** @description Enables or disables the display of the icons. */
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

	/** @description The value is represented by multidimensional array. The array contains group operators and conditions. Each group can contain nested structures at multiple levels. */
	@Input()
	get value(): string[] {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string[]) {
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

	/** @description Sets the placeholder text used in the condition's value box in case the value is not set. */
	@Input()
	get valuePlaceholder(): string {
		return this.nativeElement ? this.nativeElement.valuePlaceholder : undefined;
	}
	set valuePlaceholder(value: string) {
		this.nativeElement ? this.nativeElement.valuePlaceholder = value : undefined;
	}

	/** @description This event is triggered when the element's value is changed.
	*  @param event. The custom event. 	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an editor is closed.
	*  @param event. The custom event. 	*/
	@Output() onEditorClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an editor starts to close.
	*  @param event. The custom event. 	*/
	@Output() onEditorClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an editor is opened.
	*  @param event. The custom event. 	*/
	@Output() onEditorOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an editor starts to open.
	*  @param event. The custom event. 	*/
	@Output() onEditorOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when some of the filterbuilder's building blocks is clicked.
	*  @param event. The custom event. 	*/
	@Output() onItemClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the built-in menu is opened. If the disableContextMenu property is set to true this event is not fired.
	*  @param event. The custom event. 	*/
	@Output() onOpen: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the built-in menu starts to open. If the disableContextMenu property is set to true this event is not fired.
	*  @param event. The custom event. 	*/
	@Output() onOpening: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the built-in menu is closed. If the disableContextMenu property is set to true this event is not fired.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the built-in menu  starts to close. If the disableContextMenu property is set to true this event is not fired.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds new condition in particular group.  
	* @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
	* @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
	*/
    public addCondition(parentGroup: string | HTMLElement, data: any[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addCondition(parentGroup, data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addCondition(parentGroup, data);
            });
        }
    }

	/** @description Adds new group in particular parent group. 
	* @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
	* @param {string} data. A string, representing the group operator.
	*/
    public addGroup(parentGroup: string | HTMLElement, data: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(parentGroup, data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addGroup(parentGroup, data);
            });
        }
    }

	/** @description Removes condition. 
	* @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
	*/
    public removeCondition(item: string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeCondition(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeCondition(item);
            });
        }
    }

	/** @description Deletes group and all of  it's children 
	* @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
	*/
    public removeGroup(item: string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeGroup(item);
            });
        }
    }

	/** @description Returns a string representation of the filter builder's value. 
	* @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
	* @returns {string}
  */
	public async toString(useLabels?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.toString(useLabels);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Updates condition. 
	* @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
	* @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
	*/
    public updateCondition(item: string | HTMLElement, data: any[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateCondition(item, data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateCondition(item, data);
            });
        }
    }

	/** @description Updates group 
	* @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
	* @param {string} data. A string, representing the group operator.
	*/
    public updateGroup(item: string | HTMLElement, data: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateGroup(item, data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateGroup(item, data);
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
		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['editorCloseHandler'] = (event: CustomEvent) => { that.onEditorClose.emit(event); }
		that.nativeElement.addEventListener('editorClose', that.eventHandlers['editorCloseHandler']);

		that.eventHandlers['editorClosingHandler'] = (event: CustomEvent) => { that.onEditorClosing.emit(event); }
		that.nativeElement.addEventListener('editorClosing', that.eventHandlers['editorClosingHandler']);

		that.eventHandlers['editorOpenHandler'] = (event: CustomEvent) => { that.onEditorOpen.emit(event); }
		that.nativeElement.addEventListener('editorOpen', that.eventHandlers['editorOpenHandler']);

		that.eventHandlers['editorOpeningHandler'] = (event: CustomEvent) => { that.onEditorOpening.emit(event); }
		that.nativeElement.addEventListener('editorOpening', that.eventHandlers['editorOpeningHandler']);

		that.eventHandlers['itemClickHandler'] = (event: CustomEvent) => { that.onItemClick.emit(event); }
		that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);

		that.eventHandlers['openHandler'] = (event: CustomEvent) => { that.onOpen.emit(event); }
		that.nativeElement.addEventListener('open', that.eventHandlers['openHandler']);

		that.eventHandlers['openingHandler'] = (event: CustomEvent) => { that.onOpening.emit(event); }
		that.nativeElement.addEventListener('opening', that.eventHandlers['openingHandler']);

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['editorCloseHandler']) {
			that.nativeElement.removeEventListener('editorClose', that.eventHandlers['editorCloseHandler']);
		}

		if (that.eventHandlers['editorClosingHandler']) {
			that.nativeElement.removeEventListener('editorClosing', that.eventHandlers['editorClosingHandler']);
		}

		if (that.eventHandlers['editorOpenHandler']) {
			that.nativeElement.removeEventListener('editorOpen', that.eventHandlers['editorOpenHandler']);
		}

		if (that.eventHandlers['editorOpeningHandler']) {
			that.nativeElement.removeEventListener('editorOpening', that.eventHandlers['editorOpeningHandler']);
		}

		if (that.eventHandlers['itemClickHandler']) {
			that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
		}

		if (that.eventHandlers['openHandler']) {
			that.nativeElement.removeEventListener('open', that.eventHandlers['openHandler']);
		}

		if (that.eventHandlers['openingHandler']) {
			that.nativeElement.removeEventListener('opening', that.eventHandlers['openingHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

	}
}
