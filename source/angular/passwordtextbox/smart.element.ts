                        
declare global {
    interface Window {
        Smart: any;
}
}
        
        
import { ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ElementRenderMode } from './../index';

export class BaseElement {
    constructor(ref: ElementRef) {
        const that = this;
        this.nativeElement = ref.nativeElement as any;
    
        that.nativeElement.onAttached = () => {
            that.onAttach.emit(that.nativeElement);
        }
     
        that.nativeElement.onDetached = () => {
            that.onDetach.emit(that.nativeElement);
        }
    }

    @Output() onCreate: EventEmitter<any> = new EventEmitter();
    @Output() onReady: EventEmitter<any> = new EventEmitter();
    @Output() onAttach: EventEmitter<any> = new EventEmitter();
    @Output() onDetach: EventEmitter<any> = new EventEmitter();

    public nativeElement: any;

    public addEventListener(type: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions = false): void {
        this.nativeElement.addEventListener(type, listener, options);
	}

	public removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions = false): void {
		this.nativeElement.removeEventListener(type, listener, options);
	}

	public dispatchEvent(event: Event): boolean {
		return this.nativeElement.dispatchEvent(event);
	}
	
	public blur(): void {
		this.nativeElement.blur();
	}

	public click(): void {
		this.nativeElement.click();
	}

	public focus(options?: FocusOptions): void {
		this.nativeElement.focus(options);
	}
    
/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
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

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}	
}

export const Smart: any = window.Smart;

