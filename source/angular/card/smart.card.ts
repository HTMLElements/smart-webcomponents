import { Card } from './../index';
import { Animation, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Card } from './../index';


@Directive({
	selector: 'smart-card, [smart-card]'
})

export class CardComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Card>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Card;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Card;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Card>document.createElement('smart-card');
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

	/** @description A callback function, used to add event handlers and other custom logic related to the content inside the card element. */
	@Input()
	get contentHandler(): any {
		return this.nativeElement ? this.nativeElement.contentHandler : undefined;
	}
	set contentHandler(value: any) {
		this.nativeElement ? this.nativeElement.contentHandler = value : undefined;
	}

	/** @description This object is used to populate card's template. Object keys represent the placeholders surrounded in braces ( e.g. {{proeprty}} ) inside the template of an item and their values are used to replace the bindings. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Disables the interaction with the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets custom card template. The template can be the id of an HTMLTemplate element inside the DOM or it's reference. The content of the template may hold one or many property placeholders in format {{property}}. These placeholders will be replaced with the values of the corresponding properties defined in the dataSource object. */
	@Input()
	get itemTemplate(): any {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: any) {
		this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
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

	/** @description If is set to true, the element cannot be focused. */
	@Input()
	get unfocusable(): boolean {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
	}

	/** @description This event is triggered when the card is swiped bottom.
	*  @param event. The custom event. 	*/
	@Output() onSwipebottom: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the card is swiped left.
	*  @param event. The custom event. 	*/
	@Output() onSwipeleft: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the card is swiped right.
	*  @param event. The custom event. 	*/
	@Output() onSwiperight: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the card is swiped top.
	*  @param event. The custom event. 	*/
	@Output() onSwipetop: EventEmitter<CustomEvent> = new EventEmitter();


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
		that.eventHandlers['swipebottomHandler'] = (event: CustomEvent) => { that.onSwipebottom.emit(event); }
		that.nativeElement.addEventListener('swipebottom', that.eventHandlers['swipebottomHandler']);

		that.eventHandlers['swipeleftHandler'] = (event: CustomEvent) => { that.onSwipeleft.emit(event); }
		that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);

		that.eventHandlers['swiperightHandler'] = (event: CustomEvent) => { that.onSwiperight.emit(event); }
		that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);

		that.eventHandlers['swipetopHandler'] = (event: CustomEvent) => { that.onSwipetop.emit(event); }
		that.nativeElement.addEventListener('swipetop', that.eventHandlers['swipetopHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['swipebottomHandler']) {
			that.nativeElement.removeEventListener('swipebottom', that.eventHandlers['swipebottomHandler']);
		}

		if (that.eventHandlers['swipeleftHandler']) {
			that.nativeElement.removeEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
		}

		if (that.eventHandlers['swiperightHandler']) {
			that.nativeElement.removeEventListener('swiperight', that.eventHandlers['swiperightHandler']);
		}

		if (that.eventHandlers['swipetopHandler']) {
			that.nativeElement.removeEventListener('swipetop', that.eventHandlers['swipetopHandler']);
		}

	}
}
