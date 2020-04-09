import { MenuItemsGroup } from './../index';
import { MenuCheckMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { MenuCheckMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { MenuItemsGroup } from './../index';


@Directive({
	selector: 'smart-menu-items-group, [smart-menu-items-group]'
})

export class MenuItemsGroupComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<MenuItemsGroup>) {
		super(ref);
		this.nativeElement = ref.nativeElement as MenuItemsGroup;
	}

	private eventHandlers: any[] = [];

	public nativeElement: MenuItemsGroup;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <MenuItemsGroup>document.createElement('smart-menu-items-group');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description  */
	@Input()
	get checkable(): boolean {
		return this.nativeElement ? this.nativeElement.checkable : undefined;
	}
	set checkable(value: boolean) {
		this.nativeElement ? this.nativeElement.checkable = value : undefined;
	}

	/** @description  */
	@Input()
	get checked(): boolean {
		return this.nativeElement ? this.nativeElement.checked : undefined;
	}
	set checked(value: boolean) {
		this.nativeElement ? this.nativeElement.checked = value : undefined;
	}

	/** @description  */
	@Input()
	get checkMode(): MenuCheckMode {
		return this.nativeElement ? this.nativeElement.checkMode : undefined;
	}
	set checkMode(value: MenuCheckMode) {
		this.nativeElement ? this.nativeElement.checkMode = value : undefined;
	}

	/** @description Enables or disables element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description  */
	@Input()
	get dropDownHeight(): number {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value: number) {
		this.nativeElement ? this.nativeElement.dropDownHeight = value : undefined;
	}

	/** @description  */
	@Input()
	get expanded(): boolean {
		return this.nativeElement ? this.nativeElement.expanded : undefined;
	}
	set expanded(value: boolean) {
		this.nativeElement ? this.nativeElement.expanded = value : undefined;
	}

	/** @description  */
	@Input()
	get label(): any {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: any) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description  */
	@Input()
	get level(): number {
		return this.nativeElement ? this.nativeElement.level : undefined;
	}
	set level(value: number) {
		this.nativeElement ? this.nativeElement.level = value : undefined;
	}

	/** @description  */
	@Input()
	get separator(): boolean {
		return this.nativeElement ? this.nativeElement.separator : undefined;
	}
	set separator(value: boolean) {
		this.nativeElement ? this.nativeElement.separator = value : undefined;
	}

	/** @description  */
	@Input()
	get value(): any {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: any) {
		this.nativeElement ? this.nativeElement.value = value : undefined;
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
