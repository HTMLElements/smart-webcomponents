import { TabLayoutItem } from './../index';
import { TabLayoutItemOrientation, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { TabLayoutItemOrientation, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { TabLayoutItem } from './../index';


@Directive({
	selector: 'smart-tab-layout-item, [smart-tab-layout-item]'
})

export class TabLayoutItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<TabLayoutItem>) {
		super(ref);
		this.nativeElement = ref.nativeElement as TabLayoutItem;
	}

	private eventHandlers: any[] = [];

	public nativeElement: TabLayoutItem;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <TabLayoutItem>document.createElement('smart-tab-layout-item');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets the modifiers of the Layout item. */
	@Input()
	get modifiers(): any {
		return this.nativeElement ? this.nativeElement.modifiers : undefined;
	}
	set modifiers(value: any) {
		this.nativeElement ? this.nativeElement.modifiers = value : undefined;
	}

	/** @description Determines the min size of the item. */
	@Input()
	get min(): number {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: number) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Determines the label of the item. */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description Determines the group orientation. */
	@Input()
	get orientation(): TabLayoutItemOrientation {
		return this.nativeElement ? this.nativeElement.orientation : undefined;
	}
	set orientation(value: TabLayoutItemOrientation) {
		this.nativeElement ? this.nativeElement.orientation = value : undefined;
	}

	/** @description Determines the size of the item. */
	@Input()
	get size(): any {
		return this.nativeElement ? this.nativeElement.size : undefined;
	}
	set size(value: any) {
		this.nativeElement ? this.nativeElement.size = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
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
