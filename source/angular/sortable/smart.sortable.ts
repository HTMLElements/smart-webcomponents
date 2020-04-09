import { Sortable } from './../index';
import { Animation, SortableDragMode, SortableHandlePosition, SortableHandleVisibility, Orientation, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, SortableDragMode, SortableHandlePosition, SortableHandleVisibility, Orientation, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Sortable } from './../index';


@Directive({
	selector: 'smart-sortable, [smart-sortable]'
})

export class SortableComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Sortable>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Sortable;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Sortable;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Sortable>document.createElement('smart-sortable');
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

	/** @description Enables or disables sorting. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets the way a sortable item can be dragged - by dragging the item itself ('item') or by dragging a handle that appears next to the item ('handle'). */
	@Input()
	get dragMode(): SortableDragMode {
		return this.nativeElement ? this.nativeElement.dragMode : undefined;
	}
	set dragMode(value: SortableDragMode) {
		this.nativeElement ? this.nativeElement.dragMode = value : undefined;
	}

	/** @description Sets or gets the the position of the drag handle relative to its respective sortable item. Applicable only when dragMode is 'handle'. */
	@Input()
	get handlePosition(): SortableHandlePosition {
		return this.nativeElement ? this.nativeElement.handlePosition : undefined;
	}
	set handlePosition(value: SortableHandlePosition) {
		this.nativeElement ? this.nativeElement.handlePosition = value : undefined;
	}

	/** @description Sets or gets whether a sortable item's drag handle is always visible or is shown when the item is hovered. Applicable only when dragMode is 'handle'. */
	@Input()
	get handleVisibility(): SortableHandleVisibility {
		return this.nativeElement ? this.nativeElement.handleVisibility : undefined;
	}
	set handleVisibility(value: SortableHandleVisibility) {
		this.nativeElement ? this.nativeElement.handleVisibility = value : undefined;
	}

	/** @description Sets or gets a selector to determine the sortable items by. By default, sortable items are all children of the smart-sortable custom element. */
	@Input()
	get items(): string | null {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value: string | null) {
		this.nativeElement ? this.nativeElement.items = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages. */
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

	/** @description Sets or gets the direction sortable items are stacked and can be dragged. */
	@Input()
	get mode(): Orientation {
		return this.nativeElement ? this.nativeElement.mode : undefined;
	}
	set mode(value: Orientation) {
		this.nativeElement ? this.nativeElement.mode = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description This event is triggered when sortable items have been reordered.
	*  @param event. The custom event. 	*/
	@Output() onDragEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Moves a sortable item from one index to another. 
	* @param {number} fromIndex?. The original index of the item.
	* @param {number} toIndex?. The index to move the item to.
	*/
    public move(fromIndex?: number, toIndex?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.move(fromIndex, toIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.move(fromIndex, toIndex);
            });
        }
    }

	/** @description Re-evaluates the items that can be sorted. Useful after items have been added to or removed from the custom element. 
	*/
    public updateItems(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateItems();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateItems();
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
		that.eventHandlers['dragEndHandler'] = (event: CustomEvent) => { that.onDragEnd.emit(event); }
		that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['dragEndHandler']) {
			that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
		}

	}
}
