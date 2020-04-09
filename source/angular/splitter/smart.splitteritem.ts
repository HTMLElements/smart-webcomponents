import { SplitterItem } from './../index';
import { ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { SplitterItem } from './../index';


@Directive({
	selector: 'smart-splitter-item, [smart-splitter-item]'
})

export class SplitterItemComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<SplitterItem>) {
		super(ref);
		this.nativeElement = ref.nativeElement as SplitterItem;
	}

	private eventHandlers: any[] = [];

	public nativeElement: SplitterItem;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <SplitterItem>document.createElement('smart-splitter-item');
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

	/** @description Determines of the item is collapsed or not. */
	@Input()
	get collapsed(): boolean {
		return this.nativeElement ? this.nativeElement.collapsed : undefined;
	}
	set collapsed(value: boolean) {
		this.nativeElement ? this.nativeElement.collapsed = value : undefined;
	}

	/** @description Determines of the item can be collapsed. If set to false, the item can't be collapsed */
	@Input()
	get collapsible(): boolean {
		return this.nativeElement ? this.nativeElement.collapsible : undefined;
	}
	set collapsible(value: boolean) {
		this.nativeElement ? this.nativeElement.collapsible = value : undefined;
	}

	/** @description Determines the content of the splitter items */
	@Input()
	get content(): any {
		return this.nativeElement ? this.nativeElement.content : undefined;
	}
	set content(value: any) {
		this.nativeElement ? this.nativeElement.content = value : undefined;
	}

	/** @description Determines of the item can be resized or not. */
	@Input()
	get locked(): boolean {
		return this.nativeElement ? this.nativeElement.locked : undefined;
	}
	set locked(value: boolean) {
		this.nativeElement ? this.nativeElement.locked = value : undefined;
	}

	/** @description Determines the max size of the item. */
	@Input()
	get max(): string {
		return this.nativeElement ? this.nativeElement.max : undefined;
	}
	set max(value: string) {
		this.nativeElement ? this.nativeElement.max = value : undefined;
	}

	/** @description Determines the min size of the item */
	@Input()
	get min(): string {
		return this.nativeElement ? this.nativeElement.min : undefined;
	}
	set min(value: string) {
		this.nativeElement ? this.nativeElement.min = value : undefined;
	}

	/** @description Determines the size of the item. */
	@Input()
	get size(): string {
		return this.nativeElement ? this.nativeElement.size : undefined;
	}
	set size(value: string) {
		this.nativeElement ? this.nativeElement.size = value : undefined;
	}

	/** @description Collapses the item. 
	* @param {string} far. If set to true the item will collapse to it's far side ( to the right for vertical splitter and down for horizontal)
	*/
    public collapse(far: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(far);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(far);
            });
        }
    }

	/** @description Expands the item if it's collapsed. 
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

	/** @description Locks the item so it can no longer change it's size. 
	*/
    public lock(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.lock();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.lock();
            });
        }
    }

	/** @description Unlocks a previously locked item. 
	*/
    public unlock(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unlock();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unlock();
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
