import { DockingLayout } from './../index';
import { Animation, DockingLayoutSnapMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, DockingLayoutSnapMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { DockingLayout } from './../index';


@Directive({
	selector: 'smart-docking-layout, [smart-docking-layout]'
})

export class DockingLayoutComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<DockingLayout>) {
		super(ref);
		this.nativeElement = ref.nativeElement as DockingLayout;
	}

	private eventHandlers: any[] = [];

	public nativeElement: DockingLayout;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <DockingLayout>document.createElement('smart-docking-layout');
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

	/** @description A getter that returns an array of all DockingLayout items that are auto hidden inside the element. */
	@Input()
	get autoHideItems(): any {
		return this.nativeElement ? this.nativeElement.autoHideItems : undefined;
	}
	set autoHideItems(value: any) {
		this.nativeElement ? this.nativeElement.autoHideItems = value : undefined;
	}

	/** @description Enable/Disable the automatic state loading. There must be a previously saved state of the Layout in order to load it. */
	@Input()
	get autoLoadState(): boolean {
		return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
	}
	set autoLoadState(value: boolean) {
		this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
	}

	/** @description Enable/Disable the automatic state saving. Note: In order to save the state of the element it must have an id. */
	@Input()
	get autoSaveState(): boolean {
		return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
	}
	set autoSaveState(value: boolean) {
		this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description If set to false it will disable the dragging of DockingLayout items. If set items can only be repositioned using the API methods. */
	@Input()
	get draggable(): boolean {
		return this.nativeElement ? this.nativeElement.draggable : undefined;
	}
	set draggable(value: boolean) {
		this.nativeElement ? this.nativeElement.draggable = value : undefined;
	}

	/** @description If set to false it will disable item floating. This means that if a Window is floated as a result of dragging it will be returned back ot it's original position instead of being floated outside the DockingLayout. Already floated LayoutPanel items will not be affected. */
	@Input()
	get floatable(): boolean {
		return this.nativeElement ? this.nativeElement.floatable : undefined;
	}
	set floatable(value: boolean) {
		this.nativeElement ? this.nativeElement.floatable = value : undefined;
	}

	/** @description Hides all splitter bars inside the element. */
	@Input()
	get hideSplitterBars(): boolean {
		return this.nativeElement ? this.nativeElement.hideSplitterBars : undefined;
	}
	set hideSplitterBars(value: boolean) {
		this.nativeElement ? this.nativeElement.hideSplitterBars = value : undefined;
	}

	/** @description A getter that returns an array of all DockingLayout items that are docked inside the element. */
	@Input()
	get items(): any {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: any) {
		this.nativeElement ? this.nativeElement.items = value : undefined;
	}

	/** @description A getter that returns an array of all DockingLayout items that have been closed. */
	@Input()
	get closedItems(): any {
		return this.nativeElement ? this.nativeElement.closedItems : undefined;
	}
	set closedItems(value: any) {
		this.nativeElement ? this.nativeElement.closedItems = value : undefined;
	}

	/** @description Determines the structure of the element. This property represents an array of objects that define the hierarchy of the items inside the element and their specific settings. Each object must have a type attribute that defines it's behavior.  Three types of objects are allowed:   LayoutGroup - Represents a group of items (Splitter). Used when the user wants more than one DockingLayout item in a single container.  Properties: orientation - A string value indicating the orientation of the Splitter group. Possible values: 'horizontal', 'vertical'. size - A string | number value indicating the size of the Splitter group. items - An array of LayoutPanel object definitions. resizeMode - A string indicating the resize mode. Possible values: 'none', 'adjacent', 'end', 'proportional'. resizeStep - A nummeric value that determines the step of resizing. liveResize - Determines if splitter resizing happens while dragging or not.   LayoutPanel - Represents a DockingLayout item (TabsWindow). LayoutPanels can have one or many items (TabItem).  Properties:   id - the ID of the LayoutPanel. autoHide - a boolean property that determines if the LayoutPanel is autoHidden. autoHidePosition - determines the autoHide position of the item if 'autoHide' property is set. Possible values: 'top', 'bottom', 'left', 'right'. dropPosition - Determines the possible positions for the item at which a new item can be dropped as a result of dragging. Possible values: 'top', 'bottom', 'left', 'right', 'center', 'header', 'layout-top', 'layout-bottom', 'layout-left', 'layout-right'. Positions with the 'layout' prefix reflect on LayoutPanelItems that are children of the LayoutPanel. label - the Label of the LayoutPanel window. tabPosition - Determines the position of the Tab labels inside the LayoutPanel. layout - determines the DockingLayout owner of the LayoutPanel. Accepts a string indicating the ID of a DockingLayout on the page or a direct reference to it. headerButtons - an Array of strings that define the buttons in the header section of the DockingLayout item. tabCloseButtons - a boolean property that Enables or disables the close buttons inside each Tab item label inside the DockingLayout item. tabOverflow - same as 'overflow' property of jqxTabs. It defines the overflow mode of the labels of the Tab items inside a DockingLayout item.selectionMode - the same as jqxTabs selection modes. Applies to Tab items inside a DockingLayout item. tabResize - the same as 'resize' property of jqxTabs. Allows resizing the Tab labels inside the DockingLayout item. locked - Locks the size of the item and does not allow resizing. max - sets the maximum size of the item. min - sets the minimum size of the item size - sets the size of the item. items - an array of objects. Each object defines the structure of a LayoutPanelItem.   LayoutPanelItem - Represents a LayoutPanel item (TabItem). Properties:  id - the ID of the Tab item. label - a string representing the label of the Tab item. content - represents the content of the Tab item. Can be anything. selected - determines if the item is selected. By default the first added item to the LayoutPanel is automatically selected. disableDrag - a boolean property that disables the dragging of the Tab item.     */
	@Input()
	get layout(): any {
		return this.nativeElement ? this.nativeElement.layout : undefined;
	}
	set layout(value: any) {
		this.nativeElement ? this.nativeElement.layout = value : undefined;
	}

	/** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
	@Input()
	get liveResize(): boolean {
		return this.nativeElement ? this.nativeElement.liveResize : undefined;
	}
	set liveResize(value: boolean) {
		this.nativeElement ? this.nativeElement.liveResize = value : undefined;
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

	/** @description Determines the resize step during reisizing */
	@Input()
	get resizeStep(): number {
		return this.nativeElement ? this.nativeElement.resizeStep : undefined;
	}
	set resizeStep(value: number) {
		this.nativeElement ? this.nativeElement.resizeStep = value : undefined;
	}

	/** @description Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter. advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.   The feedback/highlighter is displayed when the dragging of an item begins.  */
	@Input()
	get snapMode(): DockingLayoutSnapMode {
		return this.nativeElement ? this.nativeElement.snapMode : undefined;
	}
	set snapMode(value: DockingLayoutSnapMode) {
		this.nativeElement ? this.nativeElement.snapMode = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description A getter that returns an array of all DockingLayout items that have been undocked. Undocked items are no more part of the Layout's interal structure but can be inserted by dragging them in. */
	@Input()
	get undockedItems(): any {
		return this.nativeElement ? this.nativeElement.undockedItems : undefined;
	}
	set undockedItems(value: any) {
		this.nativeElement ? this.nativeElement.undockedItems = value : undefined;
	}

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description This event is triggered when the tab selection is changed. Note: Change event may be thrown by other JQX Custom Elements nested inside the Tab items.
	*  @param event. The custom event. 	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a Tab item or a whole Tabs Window item ( DockingLayout item ) is closed.
	*  @param event. The custom event. 	*/
	@Output() onClose: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a Tab item/Tabs Window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	@Output() onClosing: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when an item's position inside the Layout or it's size has been changed. Indicates that a state change has occured.
	*  @param event. The custom event. 	*/
	@Output() onStateChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when item resizing begins.
	*  @param event. The custom event. 	*/
	@Output() onResizeStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when item resizing finishes.
	*  @param event. The custom event. 	*/
	@Output() onResizeEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Bottom position inside the element. This means that the item will be positioned near the bottom side of the layout and it's content will be hidden until the user selects one of it's labels. 
	* @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
	*/
    public autoHideBottom(node: HTMLElement | number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideBottom(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideBottom(node);
            });
        }
    }

	/** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Left position inside the layout. This means that the item will be positioned near the left side of the layout and it's content will be hidden until the user selects one of it's labels. 
	* @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
	*/
    public autoHideLeft(node: HTMLElement | number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideLeft(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideLeft(node);
            });
        }
    }

	/** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Right position inside the layout. This means that the item will be positioned near the right side of the layout and it's content will be hidden until the user selects one of it's labels. 
	* @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
	*/
    public autoHideRight(node: HTMLElement | number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideRight(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideRight(node);
            });
        }
    }

	/** @description Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Top position inside the layout. This means that the item will be positioned near the top side of the layout and it's content will be hidden until the user selects one of it's labels. 
	* @param {HTMLElement | number | string} node. The "smart-tabs-window" or "smart-tab-item" node to append
	*/
    public autoHideTop(node: HTMLElement | number | string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideTop(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideTop(node);
            });
        }
    }

	/** @description Clears the localStorage of any previous cached state of the DockingLayout. 
	*/
    public clearState(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }

	/** @description The method will reset an autohidden item to it's normal behavior and re-insert it at a specified position. It can also be used to insert items into the DockingLayout. Note: Items inserted via this method are added as a top level items. 
	* @param {string | number | Node} node. An autohidden "smart-tabs-window" item instance or a new "smart-tabs-window" instance.
	* @returns {Node}
  */
	public async dock(node): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.dock(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted before the target item which corresponds to the index passed as the first argument to the method. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertBeforeItem(index: number | HTMLElement | string, item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertBeforeItem(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertBeforeItem(index, item);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted after the target item which corresponds to the index passed as the first argument to the method. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertAfterItem(index: number | HTMLElement | string, item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertAfterItem(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertAfterItem(index, item);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's left neighbour horizontally. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertIntoLeft(index: number | HTMLElement | string, item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoLeft(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoLeft(index, item);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's right neighbour horizontally. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertIntoRight(index: number | HTMLElement | string, item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoRight(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoRight(index, item);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's top neighbour vertically. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertIntoTop(index: number | HTMLElement | string, item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoTop(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoTop(index, item);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's bottom neighbour vertically. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertIntoBottom(index: number | HTMLElement | string, item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoBottom(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoBottom(index, item);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the top side inside the Layout. 
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertLayoutTop(item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutTop(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutTop(item);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the bottom side inside the Layout. 
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertLayoutBottom(item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutBottom(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutBottom(item);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the left side inside the Layout. 
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertLayoutLeft(item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutLeft(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutLeft(item);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the right inside the Layout. 
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertLayoutRight(item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutRight(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutRight(item);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted above the target ( at position Top). 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertOutsideTargetGroupTop(index: number | HTMLElement | string, tabsWindow: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupTop(index, tabsWindow);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupTop(index, tabsWindow);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted bellow the target ( at position Bottom). 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertOutsideTargetGroupBottom(index: number | HTMLElement | string, tabsWindow: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupBottom(index, tabsWindow);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupBottom(index, tabsWindow);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted before the target ( at position Left). 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertOutsideTargetGroupLeft(index: number | HTMLElement | string, tabsWindow: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupLeft(index, tabsWindow);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupLeft(index, tabsWindow);
            });
        }
    }

	/** @description Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted after the target ( at position Right). 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    public insertOutsideTargetGroupRight(index: number | HTMLElement | string, tabsWindow: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupRight(index, tabsWindow);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupRight(index, tabsWindow);
            });
        }
    }

	/** @description The method returns an array of all autohidden items. 
	* @param {string} node?. Determines which auto hidden items to return ( vertical or horizontal ). If not set the method will return all autohidden items. Possible values: 'vertical', 'horizontal'.
	* @returns {any[]}
  */
	public async getAutoHideItems(node?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getAutoHideItems(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description The method returns the index of a target item. 
	* @param {HTMLElement} node. Returns the index of the target item.
	* @returns {number}
  */
	public async getIndex(node): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getIndex(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns an array of objects representing the current structure of the element. Each object represents a Layout item with it's settings and hierarchy. 
	* @param {boolean} noInstances?. Determines if the returned array will contain HTML references or not. When saving to localStorage the resulted array should not contain any HTMLElement references.
	* @returns {any[]}
  */
	public async getState(noInstances?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getState(noInstances);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns the Splitter parent of a Layout item 
	* @param {HTMLElement} item?. DockingLayout item
	* @returns {HTMLElement}
  */
	public async getItemGroupElement(item?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItemGroupElement(item);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Returns a JSON array of objects representing the current structure of the element. Ready to be persisted to LocalStorage. 
	* @returns {any[]}
  */
	public async getJSONStructure(): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getJSONStructure();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup. 
	* @param {any[]} state?. An array of objects that represents a cached state of the DockingLayout. The result of calling the 'saveState' method.
	*/
    public loadState(state?: any[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }

	/** @description Removes a DockingLayout item (TabsWindow) from the element. 
	* @param {number | HTMLElement | string} index. The index of the TabsWindow to remove or a reference to it.
	*/
    public removeAt(index: number | HTMLElement | string): void {
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

	/** @description Removes all items from the element. 
	*/
    public removeAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAll();
            });
        }
    }

	/** @description Removes a "smart-tabs-window" node that is a DockingLayout item. 
	* @param {Node} node. The "smart-tabs-window" node to remove.
	* @returns {Node}
  */
	public async removeChild(node): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.removeChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Saves the current state of the DockingLayout to LocalStorage. The state includes the hierarchy and size of the items. 
	*/
    public saveState(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState();
            });
        }
    }

	/** @description The method undocks/removes an item from the Layout and places it at the same position but it's no more part of the layout. The item becomes an 'outher' item that can be reinserted at any time. 
	* @param {string | number | Node} node. A "smart-tabs-window" instance that is part of the DockingLayout.
	*/
    public undock(node: string | number | Node): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.undock(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.undock(node);
            });
        }
    }

	/** @description Updates a TabsWindow and it's contents. 
	* @param {number | HTMLElement | string} index. The index of the TabsWindow to update.
	* @param {any} settings. An object that contains the new settings for the TabsWindow item. Settings object is the same as defining a new TabsWindow with the exception of 'items' array where the items are defined. In order to change the label or content of a Tab item the user has to specify the index of the target tab item.
	*/
    public update(index: number | HTMLElement | string, settings: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, settings);
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

		that.eventHandlers['stateChangeHandler'] = (event: CustomEvent) => { that.onStateChange.emit(event); }
		that.nativeElement.addEventListener('stateChange', that.eventHandlers['stateChangeHandler']);

		that.eventHandlers['resizeStartHandler'] = (event: CustomEvent) => { that.onResizeStart.emit(event); }
		that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);

		that.eventHandlers['resizeEndHandler'] = (event: CustomEvent) => { that.onResizeEnd.emit(event); }
		that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);

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

		if (that.eventHandlers['stateChangeHandler']) {
			that.nativeElement.removeEventListener('stateChange', that.eventHandlers['stateChangeHandler']);
		}

		if (that.eventHandlers['resizeStartHandler']) {
			that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
		}

		if (that.eventHandlers['resizeEndHandler']) {
			that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
		}

	}
}
