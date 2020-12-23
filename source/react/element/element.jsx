import React from "react";
/**
 BaseElement extending the HTMLElement with localization, on-demand rendering, typed properties, two-way bound properties, property change notifications, lifecycle callbacks, automatic events listen and unlisten.
*/
export class Element extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Element' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Enables or disables the accordion. Disabled elements can not be interacted with.
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

	/** Returns true when the rendering is completed. Otherwise returns false
	*	Property type: boolean
	*/
	get isRendered() {
		return this.nativeElement ? this.nativeElement.isRendered : undefined;
	}
	set isRendered(value) {
		if (this.nativeElement) {
			this.nativeElement.isRendered = value;
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

	/** Callback called when the element is attached to the DOM.
	*	Property type: any
	*/
	get onAttached() {
		return this.nativeElement ? this.nativeElement.onAttached : undefined;
	}
	set onAttached(value) {
		if (this.nativeElement) {
			this.nativeElement.onAttached = value;
		}
	}

	/** Callback called when the element is detached from the DOM.
	*	Property type: any
	*/
	get onDetached() {
		return this.nativeElement ? this.nativeElement.onDetached : undefined;
	}
	set onDetached(value) {
		if (this.nativeElement) {
			this.nativeElement.onDetached = value;
		}
	}

	/** Callback called when the element is created.
	*	Property type: any
	*/
	get onCreated() {
		return this.nativeElement ? this.nativeElement.onCreated : undefined;
	}
	set onCreated(value) {
		if (this.nativeElement) {
			this.nativeElement.onCreated = value;
		}
	}

	/** Callback called when the element is attached to the DOM for first time. It can be used for property initialization. 
	*	Property type: any
	*/
	get onRender() {
		return this.nativeElement ? this.nativeElement.onRender : undefined;
	}
	set onRender(value) {
		if (this.nativeElement) {
			this.nativeElement.onRender = value;
		}
	}

	/** Callback called when the element is rendered. 
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

	/** Determines if the element is readonly or not. If the element true, users cannot interact with it.
	*	Property type: ElementRenderMode
	*/
	get renderMode() {
		return this.nativeElement ? this.nativeElement.renderMode : undefined;
	}
	set renderMode(value) {
		if (this.nativeElement) {
			this.nativeElement.renderMode = value;
		}
	}

	/** Determines whether the element is automatically rendered or is rendered after calling the render method.
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

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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

	/** Determines the theme. Theme defines the look of the element
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


	// Gets the properties of the React component.
	get properties() {
		return ["animation","disabled","isRendered","locale","localizeFormatFunction","messages","onAttached","onDetached","onCreated","onRender","readonly","renderMode","rightToLeft","theme","unfocusable"];
	}
	/**  This event is triggered when the element is resized.
	*  @param event. The custom event. 	*/
	_onResize = null;	get onResize() {
		return this._onResize;
	}
	set onResize(value) {
		this._onResize = value;
	}
	/**  This event is triggered when a style which affects the layout of the element is changed is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	styleProperties)
	*   styleProperties - Array with changed style properties.
	*/
	_onStyleChanged = null;	get onStyleChanged() {
		return this._onStyleChanged;
	}
	set onStyleChanged(value) {
		this._onStyleChanged = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onResize","onStyleChanged"];
	}
	/** Unwatches the element. 
	*/
    unwatch(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.unwatch();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unwatch();
            });
        }
    }

	/** Renders the element. 
	* @param {any[]} properties. Properties array to watch for changes.
	* @param {any} propertyChangedCallback. function(propertyName: string, oldValue: any, newValue: any)
	*/
    watch(properties, propertyChangedCallback){
        if (this.nativeElement.isRendered) {
            this.nativeElement.watch(properties, propertyChangedCallback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.watch(properties, propertyChangedCallback);
            });
        }
    }

	/** Watch for property changes. 
	* @param {any} renderCallback. Callback which is called, when the rendering is completed.
	*/
    whenRendered(renderCallback){
        if (this.nativeElement.isRendered) {
            this.nativeElement.whenRendered(renderCallback);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.whenRendered(renderCallback);
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
			React.createElement("smart-element", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Element;
