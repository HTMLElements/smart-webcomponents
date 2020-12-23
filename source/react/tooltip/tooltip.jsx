import React from "react";
/**
 Tooltip is an alternate for the html title. It displays a popup with details on hover.
*/
export class Tooltip extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Tooltip' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Gets or sets whether a tooltip's arrow will be shown.
	*	Property type: boolean
	*/
	get arrow() {
		return this.nativeElement ? this.nativeElement.arrow : undefined;
	}
	set arrow(value) {
		if (this.nativeElement) {
			this.nativeElement.arrow = value;
		}
	}

	/** Sets the position of the arrow.
	*	Property type: TooltipArrowDirection
	*/
	get arrowDirection() {
		return this.nativeElement ? this.nativeElement.arrowDirection : undefined;
	}
	set arrowDirection(value) {
		if (this.nativeElement) {
			this.nativeElement.arrowDirection = value;
		}
	}

	/** Gets or sets whether a tooltip's arrow will be shown.
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

	/** Enables or disables the tooltip.
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

	/** Sets an offset by X and Y.
	*	Property type: number[]
	*/
	get offset() {
		return this.nativeElement ? this.nativeElement.offset : undefined;
	}
	set offset(value) {
		if (this.nativeElement) {
			this.nativeElement.offset = value;
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

	/** Callback, related to localization module. 
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

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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

	/** Sets or gets the way of triggering the tooltip.
	*	Property type: TooltipOpenMode
	*/
	get openMode() {
		return this.nativeElement ? this.nativeElement.openMode : undefined;
	}
	set openMode(value) {
		if (this.nativeElement) {
			this.nativeElement.openMode = value;
		}
	}

	/** Gets or sets the position of the tooltip.
	*	Property type: TooltipPosition
	*/
	get position() {
		return this.nativeElement ? this.nativeElement.position : undefined;
	}
	set position(value) {
		if (this.nativeElement) {
			this.nativeElement.position = value;
		}
	}

	/** Sets the element which triggers the tooltip.
	*	Property type: any
	*/
	get selector() {
		return this.nativeElement ? this.nativeElement.selector : undefined;
	}
	set selector(value) {
		if (this.nativeElement) {
			this.nativeElement.selector = value;
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

	/** Sets custom tooltip template.
	*	Property type: any
	*/
	get tooltipTemplate() {
		return this.nativeElement ? this.nativeElement.tooltipTemplate : undefined;
	}
	set tooltipTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltipTemplate = value;
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

	/** Sets or gets the widget's value.
	*	Property type: string
	*/
	get value() {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Sets or gets the visibility of the tooltip.
	*	Property type: boolean
	*/
	get visible() {
		return this.nativeElement ? this.nativeElement.visible : undefined;
	}
	set visible(value) {
		if (this.nativeElement) {
			this.nativeElement.visible = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","arrow","arrowDirection","delay","disabled","offset","locale","localizeFormatFunction","messages","openMode","position","selector","theme","tooltipTemplate","unfocusable","value","visible"];
	}
	/**  This event is triggered when the tooltip is opened.
	*  @param event. The custom event. 	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered before the tooltip is opened. The event can be prevented via event.preventDefault().
	*  @param event. The custom event. 	*/
	_onOpening = null;	get onOpening() {
		return this._onOpening;
	}
	set onOpening(value) {
		this._onOpening = value;
	}
	/**  This event is triggered when the tooltip is closed.
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered before the tooltip is closed. The event can be prevented via event.preventDefault().
	*  @param event. The custom event. 	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onOpen","onOpening","onClose","onClosing"];
	}
	/** Closes smart-tooltip.  
	*/
    close(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.close();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.close();
            });
        }
    }

	/** Opens smart-tooltip.  
	*/
    open(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.open();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open();
            });
        }
    }

	/** Toggles smart-tooltip.  
	*/
    toggle(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggle();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.toggle();
            });
        }
    }

	/** Clears the content of the Tooltip.  
	*/
    clear(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.clear();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clear();
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
			React.createElement("smart-tooltip", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Tooltip;
