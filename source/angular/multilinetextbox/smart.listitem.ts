import { ListItem } from './../index';
import { ListItemDisplayMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { ListItemDisplayMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { ListItem } from './../index';


@Directive({
	selector: 'smart-list-item, [smart-list-item]'
})

export class ListItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<ListItem>) {
		super(ref);
		this.nativeElement = ref.nativeElement as ListItem;
	}

	private eventHandlers: any[] = [];

	public nativeElement: ListItem;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <ListItem>document.createElement('smart-list-item');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description  */
	@Input()
	get alternationIndex(): number {
		return this.nativeElement ? this.nativeElement.alternationIndex : undefined;
	}
	set alternationIndex(value: number) {
		this.nativeElement ? this.nativeElement.alternationIndex = value : undefined;
	}

	/** @description  */
	@Input()
	get color(): string {
		return this.nativeElement ? this.nativeElement.color : undefined;
	}
	set color(value: string) {
		this.nativeElement ? this.nativeElement.color = value : undefined;
	}

	/** @description  */
	@Input()
	get displayMode(): ListItemDisplayMode {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: ListItemDisplayMode) {
		this.nativeElement ? this.nativeElement.displayMode = value : undefined;
	}

	/** @description  */
	@Input()
	get grouped(): boolean {
		return this.nativeElement ? this.nativeElement.grouped : undefined;
	}
	set grouped(value: boolean) {
		this.nativeElement ? this.nativeElement.grouped = value : undefined;
	}

	/** @description  */
	@Input()
	get selected(): boolean {
		return this.nativeElement ? this.nativeElement.selected : undefined;
	}
	set selected(value: boolean) {
		this.nativeElement ? this.nativeElement.selected = value : undefined;
	}

	/** @description  */
	@Input()
	get value(): string {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
	}

	/** @description  */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description  */
	@Input()
	get details(): string {
		return this.nativeElement ? this.nativeElement.details : undefined;
	}
	set details(value: string) {
		this.nativeElement ? this.nativeElement.details = value : undefined;
	}

	/** @description  */
	@Input()
	get group(): string {
		return this.nativeElement ? this.nativeElement.group : undefined;
	}
	set group(value: string) {
		this.nativeElement ? this.nativeElement.group = value : undefined;
	}

	/** @description  */
	@Input()
	get hidden(): boolean {
		return this.nativeElement ? this.nativeElement.hidden : undefined;
	}
	set hidden(value: boolean) {
		this.nativeElement ? this.nativeElement.hidden = value : undefined;
	}

	/** @description  */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
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
	}
	
	ngOnDestroy() {	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.nativeElement && this.nativeElement.isRendered) {
			for (const propName in changes) {
				if (changes.hasOwnProperty(propName)) {
					this.nativeElement[propName] = changes[propName].currentValue;
				}
			}
		}
	}

}
