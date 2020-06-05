import { BootstrapTabs } from './../index';
import { BootstrapTabsAlignment, BootstrapTabsListType, BootstrapTabsStyleMode, BootstrapTabsTabType, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { BootstrapTabsAlignment, BootstrapTabsListType, BootstrapTabsStyleMode, BootstrapTabsTabType, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { BootstrapTabs } from './../index';


@Directive({
	selector: 'bootstrap-tabs, [bootstrap-tabs]'
})

export class BootstrapTabsComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<BootstrapTabs>) {
		super(ref);
		this.nativeElement = ref.nativeElement as BootstrapTabs;
	}

	private eventHandlers: any[] = [];

	public nativeElement: BootstrapTabs;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <BootstrapTabs>document.createElement('bootstrap-tabs');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets the tabs alignment */
	@Input()
	get alignment(): BootstrapTabsAlignment {
		return this.nativeElement ? this.nativeElement.alignment : undefined;
	}
	set alignment(value: BootstrapTabsAlignment) {
		this.nativeElement ? this.nativeElement.alignment = value : undefined;
	}

	/** @description Enables or disables the tabs.  */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets the tabs fill */
	@Input()
	get fill(): boolean {
		return this.nativeElement ? this.nativeElement.fill : undefined;
	}
	set fill(value: boolean) {
		this.nativeElement ? this.nativeElement.fill = value : undefined;
	}

	/** @description Sets the tabs justified */
	@Input()
	get justified(): boolean {
		return this.nativeElement ? this.nativeElement.justified : undefined;
	}
	set justified(value: boolean) {
		this.nativeElement ? this.nativeElement.justified = value : undefined;
	}

	/** @description Sets or gets the tab type. */
	@Input()
	get listType(): BootstrapTabsListType {
		return this.nativeElement ? this.nativeElement.listType : undefined;
	}
	set listType(value: BootstrapTabsListType) {
		this.nativeElement ? this.nativeElement.listType = value : undefined;
	}

	/** @description Sets or gets the style mode of the tabs. */
	@Input()
	get styleMode(): BootstrapTabsStyleMode {
		return this.nativeElement ? this.nativeElement.styleMode : undefined;
	}
	set styleMode(value: BootstrapTabsStyleMode) {
		this.nativeElement ? this.nativeElement.styleMode = value : undefined;
	}

	/** @description Sets or gets the size mode of the element. */
	@Input()
	get sizeMode(): string {
		return this.nativeElement ? this.nativeElement.sizeMode : undefined;
	}
	set sizeMode(value: string) {
		this.nativeElement ? this.nativeElement.sizeMode = value : undefined;
	}

	/** @description Sets or gets the tab type . */
	@Input()
	get tabType(): BootstrapTabsTabType {
		return this.nativeElement ? this.nativeElement.tabType : undefined;
	}
	set tabType(value: BootstrapTabsTabType) {
		this.nativeElement ? this.nativeElement.tabType = value : undefined;
	}

	/** @description Show event.
	*  @param event. The custom event. 	*/
	@Output() onShow: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Shows an item 
	* @param {HTMLElement} item. The tab item to be shown.
	*/
    public show(item: HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.show(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.show(item);
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
		that.eventHandlers['showHandler'] = (event: CustomEvent) => { that.onShow.emit(event); }
		that.nativeElement.addEventListener('show', that.eventHandlers['showHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['showHandler']) {
			that.nativeElement.removeEventListener('show', that.eventHandlers['showHandler']);
		}

	}
}
