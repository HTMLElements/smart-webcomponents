import { TabItem } from './../index';
import { ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { TabItem } from './../index';


@Directive({
	selector: 'smart-tab-item, [smart-tab-item]'
})

export class TabItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<TabItem>) {
		super(ref);
		this.nativeElement = ref.nativeElement as TabItem;
	}

	private eventHandlers: any[] = [];

	public nativeElement: TabItem;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <TabItem>document.createElement('smart-tab-item');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Tab item close button state */
	@Input()
	get closeButtonHidden(): boolean {
		return this.nativeElement ? this.nativeElement.closeButtonHidden : undefined;
	}
	set closeButtonHidden(value: boolean) {
		this.nativeElement ? this.nativeElement.closeButtonHidden = value : undefined;
	}

	/** @description Tab item index */
	@Input()
	get index(): number {
		return this.nativeElement ? this.nativeElement.index : undefined;
	}
	set index(value: number) {
		this.nativeElement ? this.nativeElement.index = value : undefined;
	}

	/** @description Tab item selected state */
	@Input()
	get selected(): boolean {
		return this.nativeElement ? this.nativeElement.selected : undefined;
	}
	set selected(value: boolean) {
		this.nativeElement ? this.nativeElement.selected = value : undefined;
	}

	/** @description Tab item label */
	@Input()
	get label(): string {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		this.nativeElement ? this.nativeElement.label = value : undefined;
	}

	/** @description Tab item content */
	@Input()
	get content(): any {
		return this.nativeElement ? this.nativeElement.content : undefined;
	}
	set content(value: any) {
		this.nativeElement ? this.nativeElement.content = value : undefined;
	}

	/** @description Tab item label size */
	@Input()
	get labelSize(): number {
		return this.nativeElement ? this.nativeElement.labelSize : undefined;
	}
	set labelSize(value: number) {
		this.nativeElement ? this.nativeElement.labelSize = value : undefined;
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
