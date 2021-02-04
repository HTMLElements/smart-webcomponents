import React from "react";
import { CarouselProperties } from "./../../index";
import { Animation, CarouselDisplayMode} from './../../index';
export { CarouselProperties } from "./../../index";
export { Animation, CarouselDisplayMode} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface CarouselProps extends CarouselProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onChanging?: ((event?: Event) => void) | undefined;
	onSwipeleft?: ((event?: Event) => void) | undefined;
	onSwiperight?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Carousel is a slideshow component for cycling through elements—images or slides of text
*/
export class Carousel extends React.Component<React.HTMLAttributes<Element> & CarouselProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Carousel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
	*	Property type: Animation
	*/
	get animation(): Animation  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled.
	*	Property type: boolean
	*/
	get autoPlay(): boolean  {
		return this.nativeElement ? this.nativeElement.autoPlay : undefined;
	}
	set autoPlay(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoPlay = value;
		}
	}

	/** An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item.
	*	Property type: any[]
	*/
	get dataSource(): any[]  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed.
	*	Property type: number
	*/
	get delay(): number  {
		return this.nativeElement ? this.nativeElement.delay : undefined;
	}
	set delay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.delay = value;
		}
	}

	/** Enables or disables the element.
	*	Property type: boolean
	*/
	get disabled(): boolean  {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them.
	*	Property type: boolean
	*/
	get disableItemClick(): boolean  {
		return this.nativeElement ? this.nativeElement.disableItemClick : undefined;
	}
	set disableItemClick(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableItemClick = value;
		}
	}

	/** Determines the display mode.
	*	Property type: CarouselDisplayMode
	*/
	get displayMode(): CarouselDisplayMode  {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: CarouselDisplayMode) {
		if (this.nativeElement) {
			this.nativeElement.displayMode = value;
		}
	}

	/** Hides the navigation buttons.
	*	Property type: boolean
	*/
	get hideArrows(): boolean  {
		return this.nativeElement ? this.nativeElement.hideArrows : undefined;
	}
	set hideArrows(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideArrows = value;
		}
	}

	/** Hides the slide indication panel that shows which item is currently in view (active item).
	*	Property type: boolean
	*/
	get hideIndicators(): boolean  {
		return this.nativeElement ? this.nativeElement.hideIndicators : undefined;
	}
	set hideIndicators(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideIndicators = value;
		}
	}

	/** Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference.
	*	Property type: any
	*/
	get indicatorTemplate(): any  {
		return this.nativeElement ? this.nativeElement.indicatorTemplate : undefined;
	}
	set indicatorTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.indicatorTemplate = value;
		}
	}

	/** Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled.
	*	Property type: number
	*/
	get interval(): number  {
		return this.nativeElement ? this.nativeElement.interval : undefined;
	}
	set interval(value: number) {
		if (this.nativeElement) {
			this.nativeElement.interval = value;
		}
	}

	/** Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource.
	*	Property type: any
	*/
	get itemTemplate(): any  {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value: any) {
		if (this.nativeElement) {
			this.nativeElement.itemTemplate = value;
		}
	}

	/** Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard
	*	Property type: boolean
	*/
	get keyboard(): boolean  {
		return this.nativeElement ? this.nativeElement.keyboard : undefined;
	}
	set keyboard(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.keyboard = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
	*	Property type: string
	*/
	get locale(): string  {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
	*	Property type: any
	*/
	get localizeFormatFunction(): any  {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value: any) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
		}
	}

	/** Determines whether the the items should start over when the first or last item is reached.
	*	Property type: boolean
	*/
	get loop(): boolean  {
		return this.nativeElement ? this.nativeElement.loop : undefined;
	}
	set loop(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.loop = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
	*	Property type: any
	*/
	get messages(): any  {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** If the element is readonly, users cannot interact with it.
	*	Property type: boolean
	*/
	get readonly(): boolean  {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: boolean
	*/
	get rightToLeft(): boolean  {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property.
	*	Property type: boolean
	*/
	get slideShow(): boolean  {
		return this.nativeElement ? this.nativeElement.slideShow : undefined;
	}
	set slideShow(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.slideShow = value;
		}
	}

	/** Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled.
	*	Property type: boolean
	*/
	get swipe(): boolean  {
		return this.nativeElement ? this.nativeElement.swipe : undefined;
	}
	set swipe(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.swipe = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
	*	Property type: string
	*/
	get theme(): string  {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** If is set to true, the element cannot be focused.
	*	Property type: boolean
	*/
	get unfocusable(): boolean  {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}

	/** Activates/deactivates slide navigation via mouse wheel. By default it's disabled.
	*	Property type: boolean
	*/
	get wheel(): boolean  {
		return this.nativeElement ? this.nativeElement.wheel : undefined;
	}
	set wheel(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.wheel = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","autoPlay","dataSource","delay","disabled","disableItemClick","displayMode","hideArrows","hideIndicators","indicatorTemplate","interval","itemTemplate","keyboard","locale","localizeFormatFunction","loop","messages","readonly","rightToLeft","slideShow","swipe","theme","unfocusable","wheel"];
	}
	/**  Triggered when the active ( in view ) slide is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
	*   index - The index of the new active slide.
	*   previousIndex - The index of the previous slide that was active.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  Triggered when the process of slide changing starts.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
	*   index - The index of the new active slide.
	*   previousIndex - The index of the previous slide that was active.
	*/
	onChanging?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user swipes to the left inside the Carousel.
	*  @param event. The custom event. 	*/
	onSwipeleft?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user swipes to the right inside the Carousel.
	*  @param event. The custom event. 	*/
	onSwiperight?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onChanging","onSwipeleft","onSwiperight","onCreate","onReady"];
	}
	/** Navigates to the next slide. 
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

	/** Pauses the slide show if slideShow is enabled. 
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

	/** Starts the slide show if slideShow is enabled. 
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

	/** Navigates to the previous slide. 
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

	/** Navigates to a specific slide with the given index. 
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



	constructor(props: any) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize: boolean) {
		const that = this;
		const props: any = {};
		const events: any = {};
		let styles: any = null;

		for(let prop in that.props) {
			if (prop === 'children') {
				continue;
			}

			if (prop === 'style') {
				styles = that.props[prop];
				continue;
			}

			if (prop.startsWith('on') && that.properties.indexOf(prop) === -1) {
				events[prop] = that.props[prop];
				continue;
			}

			props[prop] = that.props[prop];
		}

		if (initialize) {
			that.nativeElement = this.componentRef.current;
		}

		for(let prop in props) {
			if (prop === 'class') {
				const classNames = props[prop].trim().split(' ');

				for(let className in classNames) {
					if (!that.nativeElement.classList.contains(classNames[className]) && classNames[className] !== "") {
						that.nativeElement.classList.add(classNames[className]);
					}
				}

				continue;
			}

			if (props[prop] !== that.nativeElement[prop]) {
				const normalizeProp = (str: string) => {
					return str.replace(/-([a-z])/g, function (g) {
						return g[1].toUpperCase();
					});
				}

				if (prop === 'hover' || prop === 'active' || prop === 'focus' || prop === 'selected') {
					that.nativeElement.setAttribute(prop, '');
				}

				const normalizedProp = normalizeProp(prop);

				that.nativeElement[normalizedProp] = props[prop];
			}
		}

		
		for(let eventName in events) {
			that[eventName] = events[eventName];
			that.nativeElement[eventName.toLowerCase()] = events[eventName];
        }

		if (initialize) {
			if (that.onCreate) {
				that.onCreate();
			}

			that.nativeElement.whenRendered(() => {
				if (that.onReady) {
					that.onReady();
				}
			});
		}

		// setup styles.

		if (styles) {
			for(let styleName in styles) {
				that.nativeElement.style[styleName] = styles[styleName];
			}
		}
	}

	componentDidMount() {
		this.componentDidRender(true);
    }

	componentDidUpdate() {
		this.componentDidRender(false);
    }

	componentWillUnmount() {
		const that = this;

		if (!that.nativeElement) {
			return;
		}
		
		that.nativeElement.whenRenderedCallbacks = [];
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-carousel", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Carousel;
