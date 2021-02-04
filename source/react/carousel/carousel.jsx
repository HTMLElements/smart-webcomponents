import React from "react";
/**
 Carousel is a slideshow component for cycling through elements—images or slides of text
*/
export class Carousel extends React.Component {
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
	get animation() {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** The items switch automatically if set to true or to a custom number(representing the timeout in milliseconds). This property works if slideShow property is enabled.
	*	Property type: boolean
	*/
	get autoPlay() {
		return this.nativeElement ? this.nativeElement.autoPlay : undefined;
	}
	set autoPlay(value) {
		if (this.nativeElement) {
			this.nativeElement.autoPlay = value;
		}
	}

	/** An array of objects. Each object defines an item. The following object properties are available: label - a string representing the label of the item.content - a string representing the content of the itemimage - a string representing a url link to an image.HTMLcontent - a string representing some HTML structure taht will be generated inside the item.
	*	Property type: any[]
	*/
	get dataSource() {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Specifies the timeout before a slide changes when a navigation button is pressed. Navigation buttons are repeat buttons that will repeat the oepration after the delay is passed.
	*	Property type: number
	*/
	get delay() {
		return this.nativeElement ? this.nativeElement.delay : undefined;
	}
	set delay(value) {
		if (this.nativeElement) {
			this.nativeElement.delay = value;
		}
	}

	/** Enables or disables the element.
	*	Property type: boolean
	*/
	get disabled() {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Disabled the possibility to navigated to an item by clicking on item in displayMode 3d. By default users can navigate to items that are not currently active by clicking on them.
	*	Property type: boolean
	*/
	get disableItemClick() {
		return this.nativeElement ? this.nativeElement.disableItemClick : undefined;
	}
	set disableItemClick(value) {
		if (this.nativeElement) {
			this.nativeElement.disableItemClick = value;
		}
	}

	/** Determines the display mode.
	*	Property type: CarouselDisplayMode
	*/
	get displayMode() {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value) {
		if (this.nativeElement) {
			this.nativeElement.displayMode = value;
		}
	}

	/** Hides the navigation buttons.
	*	Property type: boolean
	*/
	get hideArrows() {
		return this.nativeElement ? this.nativeElement.hideArrows : undefined;
	}
	set hideArrows(value) {
		if (this.nativeElement) {
			this.nativeElement.hideArrows = value;
		}
	}

	/** Hides the slide indication panel that shows which item is currently in view (active item).
	*	Property type: boolean
	*/
	get hideIndicators() {
		return this.nativeElement ? this.nativeElement.hideIndicators : undefined;
	}
	set hideIndicators(value) {
		if (this.nativeElement) {
			this.nativeElement.hideIndicators = value;
		}
	}

	/** Can be used to customize the slide indicator panel of the accordion. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference.
	*	Property type: any
	*/
	get indicatorTemplate() {
		return this.nativeElement ? this.nativeElement.indicatorTemplate : undefined;
	}
	set indicatorTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.indicatorTemplate = value;
		}
	}

	/** Determines the interval (in milliseconds) between a slide transitions when slideShow is enabled.
	*	Property type: number
	*/
	get interval() {
		return this.nativeElement ? this.nativeElement.interval : undefined;
	}
	set interval(value) {
		if (this.nativeElement) {
			this.nativeElement.interval = value;
		}
	}

	/** Used to completely customize the content of an item. The property can be a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. The content of the template can contain property bindings that refer to the dataSource.
	*	Property type: any
	*/
	get itemTemplate() {
		return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
	}
	set itemTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.itemTemplate = value;
		}
	}

	/** Activates/deactivates keyboard navigation. By default, items can not be navigated via keyboard
	*	Property type: boolean
	*/
	get keyboard() {
		return this.nativeElement ? this.nativeElement.keyboard : undefined;
	}
	set keyboard(value) {
		if (this.nativeElement) {
			this.nativeElement.keyboard = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
	*	Property type: string
	*/
	get locale() {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
	*	Property type: any
	*/
	get localizeFormatFunction() {
		return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
	}
	set localizeFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.localizeFormatFunction = value;
		}
	}

	/** Determines whether the the items should start over when the first or last item is reached.
	*	Property type: boolean
	*/
	get loop() {
		return this.nativeElement ? this.nativeElement.loop : undefined;
	}
	set loop(value) {
		if (this.nativeElement) {
			this.nativeElement.loop = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
	*	Property type: any
	*/
	get messages() {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** If the element is readonly, users cannot interact with it.
	*	Property type: boolean
	*/
	get readonly() {
		return this.nativeElement ? this.nativeElement.readonly : undefined;
	}
	set readonly(value) {
		if (this.nativeElement) {
			this.nativeElement.readonly = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: boolean
	*/
	get rightToLeft() {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** When slideShow property is set to true, the carousel changes the active slide automatically with a delay set in interval property.
	*	Property type: boolean
	*/
	get slideShow() {
		return this.nativeElement ? this.nativeElement.slideShow : undefined;
	}
	set slideShow(value) {
		if (this.nativeElement) {
			this.nativeElement.slideShow = value;
		}
	}

	/** Enables or disables switching to the previous/next slide via swiping left/right. By default swiping is disabled.
	*	Property type: boolean
	*/
	get swipe() {
		return this.nativeElement ? this.nativeElement.swipe : undefined;
	}
	set swipe(value) {
		if (this.nativeElement) {
			this.nativeElement.swipe = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
	*	Property type: string
	*/
	get theme() {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** If is set to true, the element cannot be focused.
	*	Property type: boolean
	*/
	get unfocusable() {
		return this.nativeElement ? this.nativeElement.unfocusable : undefined;
	}
	set unfocusable(value) {
		if (this.nativeElement) {
			this.nativeElement.unfocusable = value;
		}
	}

	/** Activates/deactivates slide navigation via mouse wheel. By default it's disabled.
	*	Property type: boolean
	*/
	get wheel() {
		return this.nativeElement ? this.nativeElement.wheel : undefined;
	}
	set wheel(value) {
		if (this.nativeElement) {
			this.nativeElement.wheel = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","autoPlay","dataSource","delay","disabled","disableItemClick","displayMode","hideArrows","hideIndicators","indicatorTemplate","interval","itemTemplate","keyboard","locale","localizeFormatFunction","loop","messages","readonly","rightToLeft","slideShow","swipe","theme","unfocusable","wheel"];
	}
	/**  Triggered when the active ( in view ) slide is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
	*   index - The index of the new active slide.
	*   previousIndex - The index of the previous slide that was active.
	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  Triggered when the process of slide changing starts.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	index, 	previousIndex)
	*   index - The index of the new active slide.
	*   previousIndex - The index of the previous slide that was active.
	*/
	_onChanging = null;	get onChanging() {
		return this._onChanging;
	}
	set onChanging(value) {
		this._onChanging = value;
	}
	/**  This event is triggered when the user swipes to the left inside the Carousel.
	*  @param event. The custom event. 	*/
	_onSwipeleft = null;	get onSwipeleft() {
		return this._onSwipeleft;
	}
	set onSwipeleft(value) {
		this._onSwipeleft = value;
	}
	/**  This event is triggered when the user swipes to the right inside the Carousel.
	*  @param event. The custom event. 	*/
	_onSwiperight = null;	get onSwiperight() {
		return this._onSwiperight;
	}
	set onSwiperight(value) {
		this._onSwiperight = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onChange","onChanging","onSwipeleft","onSwiperight"];
	}
	/** Navigates to the next slide. 
	*/
    next(){
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
    pause(){
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
    play(){
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
    prev(){
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
    slideTo(index){
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



	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize) {
		const that = this;
		const props = {};
		const events = {};
		let styles = null;

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
				const normalizeProp = (str) => {
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
