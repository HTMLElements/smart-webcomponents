import React from "react";
import { PagerProperties } from "./../../index";
import { Animation, PagerAutoEllipsis, LayoutPosition} from './../../index';
export { PagerProperties } from "./../../index";
export { Animation, PagerAutoEllipsis, LayoutPosition} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface PagerProps extends PagerProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onPageSizeChanged?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Pagination component that is used to navigate between a set of results.
*/
export class Pager extends React.Component<React.HTMLAttributes<Element> & PagerProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

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
	get animation(): Animation  {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Handles pager's elipsis. Ellipsis buttons are displayed as indicators and additional help to navigate between pages.
	*	Property type: PagerAutoEllipsis
	*/
	get autoEllipsis(): PagerAutoEllipsis  {
		return this.nativeElement ? this.nativeElement.autoEllipsis : undefined;
	}
	set autoEllipsis(value: PagerAutoEllipsis) {
		if (this.nativeElement) {
			this.nativeElement.autoEllipsis = value;
		}
	}

	/** Enables or disables the pager.
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

	/** Callback, related to localization module. 
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

	/** Handles the position of the navigation buttons.
	*	Property type: LayoutPosition
	*/
	get navigationButtonsPosition(): LayoutPosition  {
		return this.nativeElement ? this.nativeElement.navigationButtonsPosition : undefined;
	}
	set navigationButtonsPosition(value: LayoutPosition) {
		if (this.nativeElement) {
			this.nativeElement.navigationButtonsPosition = value;
		}
	}

	/** Gets/sets current page index.
	*	Property type: number
	*/
	get pageIndex(): number  {
		return this.nativeElement ? this.nativeElement.pageIndex : undefined;
	}
	set pageIndex(value: number) {
		if (this.nativeElement) {
			this.nativeElement.pageIndex = value;
		}
	}

	/** Defines the number of page index selectors.
	*	Property type: number
	*/
	get pageIndexSelectors(): number  {
		return this.nativeElement ? this.nativeElement.pageIndexSelectors : undefined;
	}
	set pageIndexSelectors(value: number) {
		if (this.nativeElement) {
			this.nativeElement.pageIndexSelectors = value;
		}
	}

	/** Gets/sets total number of items displayed on page.
	*	Property type: number
	*/
	get pageSize(): number  {
		return this.nativeElement ? this.nativeElement.pageSize : undefined;
	}
	set pageSize(value: number) {
		if (this.nativeElement) {
			this.nativeElement.pageSize = value;
		}
	}

	/** Defines the data source of the element's page size selector drop down.
	*	Property type: number[]
	*/
	get pageSizeSelectorDataSource(): number[]  {
		return this.nativeElement ? this.nativeElement.pageSizeSelectorDataSource : undefined;
	}
	set pageSizeSelectorDataSource(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.pageSizeSelectorDataSource = value;
		}
	}

	/** The number of pages in the element.
	*	Property type: number
	*/
	get pagesCount(): number  {
		return this.nativeElement ? this.nativeElement.pagesCount : undefined;
	}
	set pagesCount(value: number) {
		if (this.nativeElement) {
			this.nativeElement.pagesCount = value;
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

	/** Controlls displaying of the 'first' and 'last' navigation buttons.
	*	Property type: boolean
	*/
	get showFirstLastNavigationButtons(): boolean  {
		return this.nativeElement ? this.nativeElement.showFirstLastNavigationButtons : undefined;
	}
	set showFirstLastNavigationButtons(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showFirstLastNavigationButtons = value;
		}
	}

	/** Displays text content in navigation buttons instead default icons.
	*	Property type: boolean
	*/
	get showNavigationButtonLabels(): boolean  {
		return this.nativeElement ? this.nativeElement.showNavigationButtonLabels : undefined;
	}
	set showNavigationButtonLabels(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showNavigationButtonLabels = value;
		}
	}

	/** Determines whether the navigation input is displayed.
	*	Property type: boolean
	*/
	get showNavigationInput(): boolean  {
		return this.nativeElement ? this.nativeElement.showNavigationInput : undefined;
	}
	set showNavigationInput(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showNavigationInput = value;
		}
	}

	/** Determines whether the page index selectors are displayed.
	*	Property type: boolean
	*/
	get showPageIndexSelectors(): boolean  {
		return this.nativeElement ? this.nativeElement.showPageIndexSelectors : undefined;
	}
	set showPageIndexSelectors(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showPageIndexSelectors = value;
		}
	}

	/** Determines whether the page size selector is displayed.
	*	Property type: boolean
	*/
	get showPageSizeSelector(): boolean  {
		return this.nativeElement ? this.nativeElement.showPageSizeSelector : undefined;
	}
	set showPageSizeSelector(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showPageSizeSelector = value;
		}
	}

	/** Controlls displaying of the 'previous' and 'next' navigation buttons.
	*	Property type: boolean
	*/
	get showPrevNextNavigationButtons(): boolean  {
		return this.nativeElement ? this.nativeElement.showPrevNextNavigationButtons : undefined;
	}
	set showPrevNextNavigationButtons(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showPrevNextNavigationButtons = value;
		}
	}

	/** Determines whether the page summary is displayed.
	*	Property type: boolean
	*/
	get showSummary(): boolean  {
		return this.nativeElement ? this.nativeElement.showSummary : undefined;
	}
	set showSummary(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showSummary = value;
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

	/** Gets/sets total number of records whose pagination the Pager controls. Useful when the Pager is part of a more complex element or application.
	*	Property type: number
	*/
	get totalRecords(): number  {
		return this.nativeElement ? this.nativeElement.totalRecords : undefined;
	}
	set totalRecords(value: number) {
		if (this.nativeElement) {
			this.nativeElement.totalRecords = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","autoEllipsis","disabled","locale","localizeFormatFunction","messages","navigationButtonsPosition","pageIndex","pageIndexSelectors","pageSize","pageSizeSelectorDataSource","pagesCount","readonly","rightToLeft","showFirstLastNavigationButtons","showNavigationButtonLabels","showNavigationInput","showPageIndexSelectors","showPageSizeSelector","showPrevNextNavigationButtons","showSummary","theme","unfocusable","totalRecords"];
	}
	/**  This event is triggered when user selects a new item.
	*  @param event. The custom event. 	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when page size is changed.
	*  @param event. The custom event. 	*/
	onPageSizeChanged?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onPageSizeChanged","onCreate","onReady"];
	}
	/** Selects first item. 
	*/
    public first(): void {
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
    public last(): void {
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
    public navigateTo(pageIndex: any): void {
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

	/** Selects previous pager item. 
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
			React.createElement("smart-pager", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Pager;
