import { MenuItem } from './../index';
import { ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { MenuItem } from './../index';


@Directive({
	selector: 'smart-menu-item, [smart-menu-item]'
})

export class MenuItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<MenuItem>) {
		super(ref);
		this.nativeElement = ref.nativeElement as MenuItem;
	}

	private eventHandlers: any[] = [];

	public nativeElement: MenuItem;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <MenuItem>document.createElement('smart-menu-item');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description  */
	@Input()
	get checked(): boolean {
		return this.nativeElement ? this.nativeElement.checked : undefined;
	}
	set checked(value: boolean) {
		this.nativeElement ? this.nativeElement.checked = value : undefined;
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
	get shortcut(): string {
		return this.nativeElement ? this.nativeElement.shortcut : undefined;
	}
	set shortcut(value: string) {
		this.nativeElement ? this.nativeElement.shortcut = value : undefined;
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
