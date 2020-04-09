import { SplitterBar } from './../index';
import { ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { SplitterBar } from './../index';


@Directive({
	selector: 'smart-splitter-bar, [smart-splitter-bar]'
})

export class SplitterBarComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<SplitterBar>) {
		super(ref);
		this.nativeElement = ref.nativeElement as SplitterBar;
	}

	private eventHandlers: any[] = [];

	public nativeElement: SplitterBar;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <SplitterBar>document.createElement('smart-splitter-bar');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Hides the splitter bar. 
	*/
    public hide(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hide();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hide();
            });
        }
    }

	/** @description Unhides a splitter bar. 
	*/
    public show(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.show();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.show();
            });
        }
    }

	/** @description Locks the splitter bar. 
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

	/** @description Unlocks the splitter bar. 
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
