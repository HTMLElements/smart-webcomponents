import { Splitter } from './../index';
import { Animation, SplitterAutoFitMode, Orientation, SplitterResizeMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter, QueryList, ContentChildren } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, SplitterAutoFitMode, Orientation, SplitterResizeMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Splitter } from './../index';


import { SplitterItemComponent } from './smart.splitteritem';

import { SplitterBarComponent } from './smart.splitterbar';

@Directive({
	selector: 'smart-splitter, [smart-splitter]'
})

export class SplitterComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {

	constructor(ref: ElementRef<Splitter>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Splitter;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Splitter;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Splitter>document.createElement('smart-splitter');
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

	/** @description Determines how the items are arranged inside the Splitter. Possible values:   end - all items will fit the size of the Splitter. When inserting a new item the space required for the item to fit will be deducted from it's neighbour. proportional - all items will fit the size of the Splitter. When inserting a new item the space required for it to fit will be the result from the proportional deduction of the size from the rest of the items inside the element. overflow - the items inside the Splitter will not fit it's size. Instead they overflow by taking the exact amount of space they need and a scrollbar is displayed in order to view the content. */
	@Input()
	get autoFitMode(): SplitterAutoFitMode {
		return this.nativeElement ? this.nativeElement.autoFitMode : undefined;
	}
	set autoFitMode(value: SplitterAutoFitMode) {
		this.nativeElement ? this.nativeElement.autoFitMode = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets splitter's data source. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description A getter that returns an array of all Splitter items. */
	@Input()
	get items(): any {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: any) {
		this.nativeElement ? this.nativeElement.items = value : undefined;
	}

	/** @description If set the element keeps the same proportions of the items after the whole element has been resized regardless of the size property unit ( pixels or percentages) of the items. */
	@Input()
	get keepProportionsOnResize(): boolean {
		return this.nativeElement ? this.nativeElement.keepProportionsOnResize : undefined;
	}
	set keepProportionsOnResize(value: boolean) {
		this.nativeElement ? this.nativeElement.keepProportionsOnResize = value : undefined;
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

	/** @description Sets an object with string values, related to the different states of passwords strength. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets or gets splitter's orientation. */
	@Input()
	get orientation(): Orientation {
		return this.nativeElement ? this.nativeElement.orientation : undefined;
	}
	set orientation(value: Orientation) {
		this.nativeElement ? this.nativeElement.orientation = value : undefined;
	}

	/** @description If the element is readonly, users cannot interact with it. */
	@Input()
	get readonly(): boolean {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		this.nativeElement ? this.nativeElement.readonly = value : undefined;
	}

	/** @description Determines the resize mode of the splitter. Possible values are:  - None - resizing is disabled.  - Adjacent - only the two adjacent items between the target splitter bar are being affected. This is the default behavior.  - End - only the first item( left or top according to the orientation) of the target Splitter bar and the last item are affected.  Proportional - all of the items positioned in the direction to which the splitter bar is dragged will be affected. For example, when a splitter bar is dragged to the right all the items positioned on it's the right side will be affected. The items will obtain a proportional size corresponding to their current size. */
	@Input()
	get resizeMode(): SplitterResizeMode {
		return this.nativeElement ? this.nativeElement.resizeMode : undefined;
	}
	set resizeMode(value: SplitterResizeMode) {
		this.nativeElement ? this.nativeElement.resizeMode = value : undefined;
	}

	/** @description Determines the resize step during reisizing */
	@Input()
	get resizeStep(): number {
		return this.nativeElement ? this.nativeElement.resizeStep : undefined;
	}
	set resizeStep(value: number) {
		this.nativeElement ? this.nativeElement.resizeStep = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar. */
	@Input()
	get liveResize(): boolean {
		return this.nativeElement ? this.nativeElement.liveResize : undefined;
	}
	set liveResize(value: boolean) {
		this.nativeElement ? this.nativeElement.liveResize = value : undefined;
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

	/** @description This event is triggered when splitter item is collapsed.
	*  @param event. The custom event. 	*/
	@Output() onCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when splitter item is expanded.
	*  @param event. The custom event. 	*/
	@Output() onExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when splitter resizing begins.
	*  @param event. The custom event. 	*/
	@Output() onResizeStart: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when splitter resizing finishes.
	*  @param event. The custom event. 	*/
	@Output() onResizeEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Appends a new node. 
	* @param {Node} node. The node to append
	*/
    public appendChild(node: Node): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.appendChild(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.appendChild(node);
            });
        }
    }

	/** @description Collapses splitter item. 
	* @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
	* @param {boolean} far?. Indicates whether the item should collapse to it's far or near side
	*/
    public collapse(item: any, far?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(item, far);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(item, far);
            });
        }
    }

	/** @description Expands the splitter item if possible (if there's enough space available). 
	* @param {any} item. number indicating the index of the item or an isntance of JQX.SplitterItem
	*/
    public expand(item: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(item);
            });
        }
    }

	/** @description Hides a splitter bar 
	* @param {number} splitterBar. A JQX.SplitterBar instance.
	* @returns {number}
  */
	public async hideBar(splitterBar): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.hideBar(splitterBar);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Insert a new Splitter item at a given position. 
	* @param {number} index. The index at which a new item will be inserted.
	* @param {any} details. An Object or string used as content if the splitter item.
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

	/** @description Inserts the specified "smart-splitter-item" node before the reference "smart-splitter-item" node. 
	* @param {Node} newNode. The  "smart-splitter-item" node to insert.
	* @param {Node | null} referenceNode?. The "smart-splitter-item" node before which newNode is inserted.
	* @returns {Node}
  */
	public async insertBefore(newNode, referenceNode?): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.insertBefore(newNode, referenceNode);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Locks a splitter item so it's size can't change. 
	* @param {number} index. The index of a Splitter Bar or it's instance.
	*/
    public lockItem(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lockItem(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lockItem(index);
            });
        }
    }

	/** @description Locks a splitter bar so it can't be dragged. 
	* @param {number} index. The index of a Splitter Bar or it's instance.
	*/
    public lockBar(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lockBar(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lockBar(index);
            });
        }
    }

	/** @description Removes a Splitter item. 
	* @param {number} index. An item to be removed.
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

	/** @description Removes all items from the Splitter 
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

	/** @description Removes a child "smart-splitter-item" node. 
	* @param {Node} node. The "smart-splitter-item" node to remove.
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

	/** @description Unhides a Splitter Bar 
	* @param {number} splitterBar. An instance of a splitter bar.
	*/
    public showBar(splitterBar: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showBar(splitterBar);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showBar(splitterBar);
            });
        }
    }

	/** @description Unlocks a previously locked splitter item. 
	* @param {number} item. The index of a Splitter Item or it's instance.
	*/
    public unlockItem(item: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlockItem(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlockItem(item);
            });
        }
    }

	/** @description Unlocks a previously locked splitter bar. 
	* @param {number} item. The index of a Splitter Bar or it's instance.
	*/
    public unlockBar(item: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlockBar(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlockBar(item);
            });
        }
    }

	/** @description Updates the properties of a Splitter item inside the Splitter. 
	* @param {any} item. The index of a JQX.SplitterItem or it's instance.
	* @param {any} settings. An object containing the properties of a JQX.SplitterItem.
	*/
    public update(item: any, settings: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(item, settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(item, settings);
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
		that.eventHandlers['collapseHandler'] = (event: CustomEvent) => { that.onCollapse.emit(event); }
		that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);

		that.eventHandlers['expandHandler'] = (event: CustomEvent) => { that.onExpand.emit(event); }
		that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);

		that.eventHandlers['resizeStartHandler'] = (event: CustomEvent) => { that.onResizeStart.emit(event); }
		that.nativeElement.addEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);

		that.eventHandlers['resizeEndHandler'] = (event: CustomEvent) => { that.onResizeEnd.emit(event); }
		that.nativeElement.addEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['collapseHandler']) {
			that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
		}

		if (that.eventHandlers['expandHandler']) {
			that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
		}

		if (that.eventHandlers['resizeStartHandler']) {
			that.nativeElement.removeEventListener('resizeStart', that.eventHandlers['resizeStartHandler']);
		}

		if (that.eventHandlers['resizeEndHandler']) {
			that.nativeElement.removeEventListener('resizeEnd', that.eventHandlers['resizeEndHandler']);
		}

	}
}
