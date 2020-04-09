import { Pager } from './../index';
import { Animation, PagerAutoEllipsis, LayoutPosition, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, PagerAutoEllipsis, LayoutPosition, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Pager } from './../index';


@Directive({
	selector: 'smart-pager, [smart-pager]'
})

export class PagerComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Pager>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Pager;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Pager;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Pager>document.createElement('smart-pager');
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

	/** @description Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages. */
	@Input()
	get autoEllipsis(): PagerAutoEllipsis {
		return this.nativeElement ? this.nativeElement.autoEllipsis : undefined;
	}
	set autoEllipsis(value: PagerAutoEllipsis) {
		this.nativeElement ? this.nativeElement.autoEllipsis = value : undefined;
	}

	/** @description Enables or disables the pager. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
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

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Handles the position of the navigation buttons. */
	@Input()
	get navigationButtonsPosition(): LayoutPosition {
		return this.nativeElement ? this.nativeElement.navigationButtonsPosition : undefined;
	}
	set navigationButtonsPosition(value: LayoutPosition) {
		this.nativeElement ? this.nativeElement.navigationButtonsPosition = value : undefined;
	}

	/** @description Gets/sets current page index. */
	@Input()
	get pageIndex(): number {
		return this.nativeElement ? this.nativeElement.pageIndex : undefined;
	}
	set pageIndex(value: number) {
		this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
	}

	/** @description Defines the number of page index selectors. */
	@Input()
	get pageIndexSelectors(): any {
		return this.nativeElement ? this.nativeElement.pageIndexSelectors : undefined;
	}
	set pageIndexSelectors(value: any) {
		this.nativeElement ? this.nativeElement.pageIndexSelectors = value : undefined;
	}

	/** @description Gets/sets total number of items displayed on page. */
	@Input()
	get pageSize(): number {
		return this.nativeElement ? this.nativeElement.pageSize : undefined;
	}
	set pageSize(value: number) {
		this.nativeElement ? this.nativeElement.pageSize = value : undefined;
	}

	/** @description Defines the data source of the element's page size selector drop down. */
	@Input()
	get pageSizeSelectorDataSource(): number[] {
		return this.nativeElement ? this.nativeElement.pageSizeSelectorDataSource : undefined;
	}
	set pageSizeSelectorDataSource(value: number[]) {
		this.nativeElement ? this.nativeElement.pageSizeSelectorDataSource = value : undefined;
	}

	/** @description The number of pages in the element. */
	@Input()
	get pagesCount(): number {
		return this.nativeElement ? this.nativeElement.pagesCount : undefined;
	}
	set pagesCount(value: number) {
		this.nativeElement ? this.nativeElement.pagesCount = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Controlls displaying of the 'first' and 'last' navigation buttons. */
	@Input()
	get showFirstLastNavigationButtons(): boolean {
		return this.nativeElement ? this.nativeElement.showFirstLastNavigationButtons : undefined;
	}
	set showFirstLastNavigationButtons(value: boolean) {
		this.nativeElement ? this.nativeElement.showFirstLastNavigationButtons = value : undefined;
	}

	/** @description Displays text content in navigation buttons instead default icons. */
	@Input()
	get showNavigationButtonLabels(): boolean {
		return this.nativeElement ? this.nativeElement.showNavigationButtonLabels : undefined;
	}
	set showNavigationButtonLabels(value: boolean) {
		this.nativeElement ? this.nativeElement.showNavigationButtonLabels = value : undefined;
	}

	/** @description Determines whether the navigation input is displayed. */
	@Input()
	get showNavigationInput(): boolean {
		return this.nativeElement ? this.nativeElement.showNavigationInput : undefined;
	}
	set showNavigationInput(value: boolean) {
		this.nativeElement ? this.nativeElement.showNavigationInput = value : undefined;
	}

	/** @description Determines whether the page index selectors are displayed. */
	@Input()
	get showPageIndexSelectors(): boolean {
		return this.nativeElement ? this.nativeElement.showPageIndexSelectors : undefined;
	}
	set showPageIndexSelectors(value: boolean) {
		this.nativeElement ? this.nativeElement.showPageIndexSelectors = value : undefined;
	}

	/** @description Determines whether the page size selector is displayed. */
	@Input()
	get showPageSizeSelector(): boolean {
		return this.nativeElement ? this.nativeElement.showPageSizeSelector : undefined;
	}
	set showPageSizeSelector(value: boolean) {
		this.nativeElement ? this.nativeElement.showPageSizeSelector = value : undefined;
	}

	/** @description Controlls displaying of the 'previous' and 'next' navigation buttons. */
	@Input()
	get showPrevNextNavigationButtons(): boolean {
		return this.nativeElement ? this.nativeElement.showPrevNextNavigationButtons : undefined;
	}
	set showPrevNextNavigationButtons(value: boolean) {
		this.nativeElement ? this.nativeElement.showPrevNextNavigationButtons = value : undefined;
	}

	/** @description Determines whether the page summary is displayed. */
	@Input()
	get showSummary(): boolean {
		return this.nativeElement ? this.nativeElement.showSummary : undefined;
	}
	set showSummary(value: boolean) {
		this.nativeElement ? this.nativeElement.showSummary = value : undefined;
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

	/** @description This event is triggered when user selects a new item.
	*  @param event. The custom event. 	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when page size is changed.
	*  @param event. The custom event. 	*/
	@Output() onPageSizeChanged: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Selects first item. 
	*/
    public first(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.first();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.first();
            });
        }
    }

	/** @description Selects last item. 
	*/
    public last(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.last();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.last();
            });
        }
    }

	/** @description Navigates to particular item. 
	* @param {any} pageIndex. 
	*/
    public navigateTo(pageIndex: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateTo(pageIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.navigateTo(pageIndex);
            });
        }
    }

	/** @description Selects next pager item. 
	*/
    public next(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.next();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.next();
            });
        }
    }

	/** @description Selects previous pager item. 
	*/
    public prev(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.prev();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.prev();
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

		that.eventHandlers['pageSizeChangedHandler'] = (event: CustomEvent) => { that.onPageSizeChanged.emit(event); }
		that.nativeElement.addEventListener('pageSizeChanged', that.eventHandlers['pageSizeChangedHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['pageSizeChangedHandler']) {
			that.nativeElement.removeEventListener('pageSizeChanged', that.eventHandlers['pageSizeChangedHandler']);
		}

	}
}
