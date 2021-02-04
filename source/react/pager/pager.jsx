import React from "react";
/**
 Pagination component that is used to navigate between a set of results.
*/
export class Pager extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Pager' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages.
	*	Property type: PagerAutoEllipsis
	*/
	get autoEllipsis() {
		return this.nativeElement ? this.nativeElement.autoEllipsis : undefined;
	}
	set autoEllipsis(value) {
		if (this.nativeElement) {
			this.nativeElement.autoEllipsis = value;
		}
	}

	/** Enables or disables the pager.
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

	/** Handles the position of the navigation buttons.
	*	Property type: LayoutPosition
	*/
	get navigationButtonsPosition() {
		return this.nativeElement ? this.nativeElement.navigationButtonsPosition : undefined;
	}
	set navigationButtonsPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.navigationButtonsPosition = value;
		}
	}

	/** Gets/sets current page index.
	*	Property type: number
	*/
	get pageIndex() {
		return this.nativeElement ? this.nativeElement.pageIndex : undefined;
	}
	set pageIndex(value) {
		if (this.nativeElement) {
			this.nativeElement.pageIndex = value;
		}
	}

	/** Defines the number of page index selectors.
	*	Property type: number
	*/
	get pageIndexSelectors() {
		return this.nativeElement ? this.nativeElement.pageIndexSelectors : undefined;
	}
	set pageIndexSelectors(value) {
		if (this.nativeElement) {
			this.nativeElement.pageIndexSelectors = value;
		}
	}

	/** Gets/sets total number of items displayed on page.
	*	Property type: number
	*/
	get pageSize() {
		return this.nativeElement ? this.nativeElement.pageSize : undefined;
	}
	set pageSize(value) {
		if (this.nativeElement) {
			this.nativeElement.pageSize = value;
		}
	}

	/** Defines the data source of the element's page size selector drop down.
	*	Property type: number[]
	*/
	get pageSizeSelectorDataSource() {
		return this.nativeElement ? this.nativeElement.pageSizeSelectorDataSource : undefined;
	}
	set pageSizeSelectorDataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.pageSizeSelectorDataSource = value;
		}
	}

	/** The number of pages in the element.
	*	Property type: number
	*/
	get pagesCount() {
		return this.nativeElement ? this.nativeElement.pagesCount : undefined;
	}
	set pagesCount(value) {
		if (this.nativeElement) {
			this.nativeElement.pagesCount = value;
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

	/** Controlls displaying of the 'first' and 'last' navigation buttons.
	*	Property type: boolean
	*/
	get showFirstLastNavigationButtons() {
		return this.nativeElement ? this.nativeElement.showFirstLastNavigationButtons : undefined;
	}
	set showFirstLastNavigationButtons(value) {
		if (this.nativeElement) {
			this.nativeElement.showFirstLastNavigationButtons = value;
		}
	}

	/** Displays text content in navigation buttons instead default icons.
	*	Property type: boolean
	*/
	get showNavigationButtonLabels() {
		return this.nativeElement ? this.nativeElement.showNavigationButtonLabels : undefined;
	}
	set showNavigationButtonLabels(value) {
		if (this.nativeElement) {
			this.nativeElement.showNavigationButtonLabels = value;
		}
	}

	/** Determines whether the navigation input is displayed.
	*	Property type: boolean
	*/
	get showNavigationInput() {
		return this.nativeElement ? this.nativeElement.showNavigationInput : undefined;
	}
	set showNavigationInput(value) {
		if (this.nativeElement) {
			this.nativeElement.showNavigationInput = value;
		}
	}

	/** Determines whether the page index selectors are displayed.
	*	Property type: boolean
	*/
	get showPageIndexSelectors() {
		return this.nativeElement ? this.nativeElement.showPageIndexSelectors : undefined;
	}
	set showPageIndexSelectors(value) {
		if (this.nativeElement) {
			this.nativeElement.showPageIndexSelectors = value;
		}
	}

	/** Determines whether the page size selector is displayed.
	*	Property type: boolean
	*/
	get showPageSizeSelector() {
		return this.nativeElement ? this.nativeElement.showPageSizeSelector : undefined;
	}
	set showPageSizeSelector(value) {
		if (this.nativeElement) {
			this.nativeElement.showPageSizeSelector = value;
		}
	}

	/** Controlls displaying of the 'previous' and 'next' navigation buttons.
	*	Property type: boolean
	*/
	get showPrevNextNavigationButtons() {
		return this.nativeElement ? this.nativeElement.showPrevNextNavigationButtons : undefined;
	}
	set showPrevNextNavigationButtons(value) {
		if (this.nativeElement) {
			this.nativeElement.showPrevNextNavigationButtons = value;
		}
	}

	/** Determines whether the page summary is displayed.
	*	Property type: boolean
	*/
	get showSummary() {
		return this.nativeElement ? this.nativeElement.showSummary : undefined;
	}
	set showSummary(value) {
		if (this.nativeElement) {
			this.nativeElement.showSummary = value;
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

	/** Gets/sets total number of records whose pagination the Pager controls. Useful when the Pager is part of a more complex element or application.
	*	Property type: number
	*/
	get totalRecords() {
		return this.nativeElement ? this.nativeElement.totalRecords : undefined;
	}
	set totalRecords(value) {
		if (this.nativeElement) {
			this.nativeElement.totalRecords = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","autoEllipsis","disabled","locale","localizeFormatFunction","messages","navigationButtonsPosition","pageIndex","pageIndexSelectors","pageSize","pageSizeSelectorDataSource","pagesCount","readonly","rightToLeft","showFirstLastNavigationButtons","showNavigationButtonLabels","showNavigationInput","showPageIndexSelectors","showPageSizeSelector","showPrevNextNavigationButtons","showSummary","theme","unfocusable","totalRecords"];
	}
	/**  This event is triggered when user selects a new item.
	*  @param event. The custom event. 	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when page size is changed.
	*  @param event. The custom event. 	*/
	_onPageSizeChanged = null;	get onPageSizeChanged() {
		return this._onPageSizeChanged;
	}
	set onPageSizeChanged(value) {
		this._onPageSizeChanged = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onChange","onPageSizeChanged"];
	}
	/** Selects first item. 
	*/
    first(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.first();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.first();
            });
        }
    }

	/** Selects last item. 
	*/
    last(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.last();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.last();
            });
        }
    }

	/** Navigates to particular item. 
	* @param {any} pageIndex. 
	*/
    navigateTo(pageIndex){
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateTo(pageIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.navigateTo(pageIndex);
            });
        }
    }

	/** Selects next pager item. 
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

	/** Selects previous pager item. 
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
			React.createElement("smart-pager", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Pager;
