import { Carousel } from './../index';
import { Animation, CarouselDisplayMode, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, CarouselDisplayMode, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Carousel } from './../index';


@Directive({
	selector: 'smart-carousel, [smart-carousel]'
})

export class CarouselComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Carousel>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Carousel;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Carousel;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Carousel>document.createElement('smart-carousel');
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

	/** @description The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled. */
	@Input()
	get autoPlay(): any {
		return this.nativeElement ? this.nativeElement.autoPlay : undefined;
	}
	set autoPlay(value: any) {
		this.nativeElement ? this.nativeElement.autoPlay = value : undefined;
	}

	/** @description An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item. */
	@Input()
	get dataSource(): any[] {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any[]) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed. */
	@Input()
	get delay(): number {
		return this.nativeElement ? this.nativeElement.delay : undefined;
	}
	set delay(value: number) {
		this.nativeElement ? this.nativeElement.delay = value : undefined;
	}

	/** @description Enables or disables the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them. */
	@Input()
	get disableItemClick(): boolean {
		return this.nativeElement ? this.nativeElement.disableItemClick : undefined;
	}
	set disableItemClick(value: boolean) {
		this.nativeElement ? this.nativeElement.disableItemClick = value : undefined;
	}

	/** @description Determines the display mode. */
	@Input()
	get displayMode(): CarouselDisplayMode {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: CarouselDisplayMode) {
		this.nativeElement ? this.nativeElement.displayMode = value : undefined;
	}

	/** @description Hides the navigation buttons. */
	@Input()
	get hideArrows(): boolean {
		return this.nativeElement ? this.nativeElement.hideArrows : undefined;
	}
	set hideArrows(value: boolean) {
		this.nativeElement ? this.nativeElement.hideArrows = value : undefined;
	}

	/** @description Hides the slide indication panel that shows which item is currently in view (active item). */
	@Input()
	get hideIndicators(): boolean {
		return this.nativeElement ? this.nativeElement.hideIndicators : undefined;
	}
	set hideIndicators(value: boolean) {
		this.nativeElement ? this.nativeElement.hideIndicators = value : undefined;
	}

	/** @description Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. */
	@Input()
	get indicatorTemplate(): any {
		return this.nativeElement ? this.nativeElement.indicatorTemplate : undefined;
	}
	set indicatorTemplate(value: any) {
		this.nativeElement ? this.nativeElement.indicatorTemplate = value : undefined;
	}

	/** @description Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled. */
	@Input()
	get interval(): number {
		return this.nativeElement ? this.nativeElement.interval : undefined;
	}
	set interval(value: number) {
		this.nativeElement ? this.nativeElement.interval = value : undefined;
	}

	/** @description Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource. */
	@Input()
	get itemTemplate(): any {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: any) {
		this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
	}

	/** @description Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard */
	@Input()
	get keyboard(): boolean {
		return this.nativeElement ? this.nativeElement.keyboard : undefined;
	}
	set keyboard(value: boolean) {
		this.nativeElement ? this.nativeElement.keyboard = value : undefined;
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

	/** @description Determines whether the the items should start over when the first or last item is reached. */
	@Input()
	get loop(): boolean {
		return this.nativeElement ? this.nativeElement.loop : undefined;
	}
	set loop(value: boolean) {
		this.nativeElement ? this.nativeElement.loop = value : undefined;
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

	/** @description When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property. */
	@Input()
	get slideShow(): boolean {
		return this.nativeElement ? this.nativeElement.slideShow : undefined;
	}
	set slideShow(value: boolean) {
		this.nativeElement ? this.nativeElement.slideShow = value : undefined;
	}

	/** @description Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled. */
	@Input()
	get swipe(): boolean {
		return this.nativeElement ? this.nativeElement.swipe : undefined;
	}
	set swipe(value: boolean) {
		this.nativeElement ? this.nativeElement.swipe = value : undefined;
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

	/** @description Activates/deactivates slide navigation via mouse wheel. By default it's disabled. */
	@Input()
	get wheel(): boolean {
		return this.nativeElement ? this.nativeElement.wheel : undefined;
	}
	set wheel(value: boolean) {
		this.nativeElement ? this.nativeElement.wheel = value : undefined;
	}

	/** @description Triggered when the active ( in view ) slide is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
	*   index - The index of the new active slide.
	*   previousIndex - The index of the previous slide that was active.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Triggered when the process of slide changing starts.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
	*   index - The index of the new active slide.
	*   previousIndex - The index of the previous slide that was active.
	*/
	@Output() onChanging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Navigates to the next slide. 
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

	/** @description Pauses the slide show if slideShow is enabled. 
	*/
    public pause(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.pause();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.pause();
            });
        }
    }

	/** @description Starts the slide show if slideShow is enabled. 
	*/
    public play(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.play();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.play();
            });
        }
    }

	/** @description Navigates to the previous slide. 
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

	/** @description Navigates to a specific slide with the given index. 
	* @param {number} index. The index of the target slide.
	*/
    public slideTo(index: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.slideTo(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.slideTo(index);
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

		that.eventHandlers['changingHandler'] = (event: CustomEvent) => { that.onChanging.emit(event); }
		that.nativeElement.addEventListener('changing', that.eventHandlers['changingHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['changingHandler']) {
			that.nativeElement.removeEventListener('changing', that.eventHandlers['changingHandler']);
		}

	}
}
