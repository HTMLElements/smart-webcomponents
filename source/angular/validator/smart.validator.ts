import { Validator } from './../index';
import { ValidatorRuleType, ValidatorRule, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { ValidatorRuleType, ValidatorRule, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Validator } from './../index';


@Directive({
	selector: 'jqxValidator, [jqxValidator]'
})

export class ValidatorComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Validator>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Validator;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Validator;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Validator>document.createElement('jqxValidator');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description  */
	@Input()
	get rules(): ValidatorRule[] {
		return this.nativeElement ? this.nativeElement.rules : undefined;
	}
	set rules(value: ValidatorRule[]) {
		this.nativeElement ? this.nativeElement.rules = value : undefined;
	}

	/** @description A valid CSS selector of an element on the page to be used as a container for validation error messages. */
	@Input()
	get validationSummarySelector(): string {
		return this.nativeElement ? this.nativeElement.validationSummarySelector : undefined;
	}
	set validationSummarySelector(value: string) {
		this.nativeElement ? this.nativeElement.validationSummarySelector = value : undefined;
	}

	/** @description Clears the error messages. 
	*/
    public reset(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.reset();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.reset();
            });
        }
    }

	/** @description Opens the dropDown. 
	* @param {Function} result?. A callback function to call when validating inputs.
	*/
    public validate(result?: Function): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.validate(result);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.validate(result);
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
	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
	}
}
