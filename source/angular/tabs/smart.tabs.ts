import { Tabs } from './../index';
import { Animation, TabsCloseButtonMode, Overflow, LayoutPosition, TabsScrollMode, TabSelectionMode, TabsTabLayout, TabPosition, Orientation, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, TabsCloseButtonMode, Overflow, LayoutPosition, TabsScrollMode, TabSelectionMode, TabsTabLayout, TabPosition, Orientation, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Tabs } from './../index';


import { TabItemComponent } from './smart.tabitem';

import { TabItemsGroupComponent } from './smart.tabitemsgroup';

@Directive({
	selector: 'smart-tabs, [smart-tabs]'
})

export class TabsComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {

	constructor(ref: ElementRef<Tabs>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Tabs;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Tabs;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Tabs>document.createElement('smart-tabs');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets whether the "Add new tab" button (+) is displayed. */
	@Input()
	get addNewTab(): boolean {
		return this.nativeElement ? this.nativeElement.addNewTab : undefined;
	}
	set addNewTab(value: boolean) {
		this.nativeElement ? this.nativeElement.addNewTab = value : undefined;
	}

	/** @description Allows toggle. If set to true, **selectedIndex** can be set to null (no selected tab). */
	@Input()
	get allowToggle(): boolean {
		return this.nativeElement ? this.nativeElement.allowToggle : undefined;
	}
	set allowToggle(value: boolean) {
		this.nativeElement ? this.nativeElement.allowToggle = value : undefined;
	}

	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Sets or gets the close button mode. */
	@Input()
	get closeButtonMode(): TabsCloseButtonMode {
		return this.nativeElement ? this.nativeElement.closeButtonMode : undefined;
	}
	set closeButtonMode(value: TabsCloseButtonMode) {
		this.nativeElement ? this.nativeElement.closeButtonMode = value : undefined;
	}

	/** @description Sets or gets whether close buttons are displayed. */
	@Input()
	get closeButtons(): boolean {
		return this.nativeElement ? this.nativeElement.closeButtons : undefined;
	}
	set closeButtons(value: boolean) {
		this.nativeElement ? this.nativeElement.closeButtons = value : undefined;
	}

	/** @description Sets or gets whether the Tabs content section is collapsed. */
	@Input()
	get collapsed(): boolean {
		return this.nativeElement ? this.nativeElement.collapsed : undefined;
	}
	set collapsed(value: boolean) {
		this.nativeElement ? this.nativeElement.collapsed = value : undefined;
	}

	/** @description Enables or disables the collapsible feature. */
	@Input()
	get collapsible(): boolean {
		return this.nativeElement ? this.nativeElement.collapsible : undefined;
	}
	set collapsible(value: boolean) {
		this.nativeElement ? this.nativeElement.collapsible = value : undefined;
	}

	/** @description Determines the data source that will be loaded to the Tabs. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Enables or disables scrolling using the mouse wheel through overflowing tab labels in the tab strip.  */
	@Input()
	get enableMouseWheelAction(): boolean {
		return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
	}
	set enableMouseWheelAction(value: boolean) {
		this.nativeElement ? this.nativeElement.enableMouseWheelAction = value : undefined;
	}

	/** @description Sets or gets the locale. Used in conjunction with the property messages.  */
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

	/** @description Sets or gets the widget's name. */
	@Input()
	get name(): string {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		this.nativeElement ? this.nativeElement.name = value : undefined;
	}

	/** @description Sets or gets the Tabs scroll buttons behavior. Applicable only when tabLayout is 'scroll'. */
	@Input()
	get overflow(): Overflow {
		return this.nativeElement ? this.nativeElement.overflow : undefined;
	}
	set overflow(value: Overflow) {
		this.nativeElement ? this.nativeElement.overflow = value : undefined;
	}

	/** @description Disables user interaction with the element. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Enables or disables the reorder feature. When this feature is enabled, the end-user can drag a tab and drop it over another tab. As a result the tabs will be reordered. */
	@Input()
	get reorder(): boolean {
		return this.nativeElement ? this.nativeElement.reorder : undefined;
	}
	set reorder(value: boolean) {
		this.nativeElement ? this.nativeElement.reorder = value : undefined;
	}

	/** @description Sets or gets whether tab labels can be resized by dragging with the mouse. */
	@Input()
	get resize(): boolean {
		return this.nativeElement ? this.nativeElement.resize : undefined;
	}
	set resize(value: boolean) {
		this.nativeElement ? this.nativeElement.resize = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Sets or gets the position of the scroll buttons. */
	@Input()
	get scrollButtonsPosition(): LayoutPosition {
		return this.nativeElement ? this.nativeElement.scrollButtonsPosition : undefined;
	}
	set scrollButtonsPosition(value: LayoutPosition) {
		this.nativeElement ? this.nativeElement.scrollButtonsPosition = value : undefined;
	}

	/** @description Sets or gets the behavior when scrolling the tab strip via the scroll buttons. */
	@Input()
	get scrollMode(): TabsScrollMode {
		return this.nativeElement ? this.nativeElement.scrollMode : undefined;
	}
	set scrollMode(value: TabsScrollMode) {
		this.nativeElement ? this.nativeElement.scrollMode = value : undefined;
	}

	/** @description Sets or gets which tab is selected. */
	@Input()
	get selectedIndex(): number | null {
		return this.nativeElement ? this.nativeElement.selectedIndex : undefined;
	}
	set selectedIndex(value: number | null) {
		this.nativeElement ? this.nativeElement.selectedIndex = value : undefined;
	}

	/** @description Determines the way the user can switch between tabs. */
	@Input()
	get selectionMode(): TabSelectionMode {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: TabSelectionMode) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description Applies one of four behaviors when the element is not wide enough to display all tab labels. */
	@Input()
	get tabLayout(): TabsTabLayout {
		return this.nativeElement ? this.nativeElement.tabLayout : undefined;
	}
	set tabLayout(value: TabsTabLayout) {
		this.nativeElement ? this.nativeElement.tabLayout = value : undefined;
	}

	/** @description Sets or gets where the tab strip is positioned. */
	@Input()
	get tabPosition(): TabPosition {
		return this.nativeElement ? this.nativeElement.tabPosition : undefined;
	}
	set tabPosition(value: TabPosition) {
		this.nativeElement ? this.nativeElement.tabPosition = value : undefined;
	}

	/** @description Sets or gets the orientation of the text in the tabs. */
	@Input()
	get tabTextOrientation(): Orientation {
		return this.nativeElement ? this.nativeElement.tabTextOrientation : undefined;
	}
	set tabTextOrientation(value: Orientation) {
		this.nativeElement ? this.nativeElement.tabTextOrientation = value : undefined;
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

	/** @description This event is triggered when the tab selection is changed.
	*  @param event. The custom event. 	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a tab is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a tab is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a drag operation has ended.
	*  @param event. The custom event. 	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a drag operation has started.
	*  @param event. The custom event. 	*/
	@Output() onDragStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when tabs have been reordered.
	*  @param event. The custom event. 	*/
	@Output() onReorder: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Collapses the content section. 
	*/
    public collapse(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse();
            });
        }
    }

	/** @description Makes sure a tab is visible by scrolling to it. 
	* @param {number} index. The index of the tab to scroll to.
	*/
    public ensureVisible(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(index);
            });
        }
    }

	/** @description Expands the content section. 
	*/
    public expand(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand();
            });
        }
    }

	/** @description Returns the offset of the tab item container (smart-tab-item element) from the edge of the Tabs (smart-tabs element) where the tab strip is positioned. 
	* @param {number} index. The index of the tab item.
	* @returns {number}
  */
	public async getOffsetFromEdgeOfElement(index): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getOffsetFromEdgeOfElement(index);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Inserts a new tab and an associated content section. 
	* @param {number} index. The index to insert a new tab at.
	* @param {any} details. An Object with the fields "label", "labelSize", "content" and "group".
	*/
    public insert(index: number, details: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, details);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, details);
            });
        }
    }

	/** @description Refreshes the Tabs header section. Useful when the header contains elements (such as images) loaded slower than the Tabs itself. 
	*/
    public refreshTabHeader(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshTabHeader();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refreshTabHeader();
            });
        }
    }

	/** @description Removes a tab and its associated content section. 
	* @param {number} index. The index of the tab to remove.
	*/
    public removeAt(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(index);
            });
        }
    }

	/** @description Selects a tab. 
	* @param {number} index. The index of the tab to select.
	*/
    public select(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(index);
            });
        }
    }

	/** @description Updates a tab and its associated content section. 
	* @param {number} index. The index of the tab to update.
	* @param {string} label. The new label of the tab. The value can be the id of an HTMLTemplateElement
	* @param {string | HTMLElement} content. The new content of the tab.
	*/
    public update(index: number, label: string, content: string | HTMLElement): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, label, content);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, label, content);
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

		that.eventHandlers['closeHandler'] = (event: CustomEvent) => { that.onClose.emit(event); }
		that.nativeElement.addEventListener('close', that.eventHandlers['closeHandler']);

		that.eventHandlers['closingHandler'] = (event: CustomEvent) => { that.onClosing.emit(event); }
		that.nativeElement.addEventListener('closing', that.eventHandlers['closingHandler']);

		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

		that.eventHandlers['dragStartHandler'] = (event: CustomEvent) => { that.onDragStart.emit(event); }
		that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);

		that.eventHandlers['reorderHandler'] = (event: CustomEvent) => { that.onReorder.emit(event); }
		that.nativeElement.addEventListener('reorder', that.eventHandlers['reorderHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['closeHandler']) {
			that.nativeElement.removeEventListener('close', that.eventHandlers['closeHandler']);
		}

		if (that.eventHandlers['closingHandler']) {
			that.nativeElement.removeEventListener('closing', that.eventHandlers['closingHandler']);
		}

		if (that.eventHandlers['dragEndHandler']) {
			that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
		}

		if (that.eventHandlers['dragStartHandler']) {
			that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
		}

		if (that.eventHandlers['reorderHandler']) {
			that.nativeElement.removeEventListener('reorder', that.eventHandlers['reorderHandler']);
		}

	}
}
