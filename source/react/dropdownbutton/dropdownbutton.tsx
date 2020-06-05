import React from "react";
import { DropDownButtonProperties } from "./../../index";
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, HorizontalScrollBarVisibility, ResizeMode, VerticalScrollBarVisibility} from './../../index';
export { DropDownButtonProperties } from "./../../index";
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, HorizontalScrollBarVisibility, ResizeMode, VerticalScrollBarVisibility} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface DropDownButtonProps extends DropDownButtonProperties {
    className?: string;
    style?: React.CSSProperties;

	onActionButtonClick?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onDropDownButtonClick?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onOpening?: ((event?: Event) => void) | undefined;
	onResizeStart?: ((event?: Event) => void) | undefined;
	onResizeEnd?: ((event?: Event) => void) | undefined;

}
/**
 DropDownButton displays any type of content like components, text, images, etc in a DropDown.
*/
export class DropDownButton extends React.Component<React.HTMLProps<Element> & DropDownButtonProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'DropDownButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'.
	*	Property type: number
	*/
	get autoCloseDelay(): number  {
		return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	}
	set autoCloseDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.autoCloseDelay = value;
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

	/** Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown.
	*	Property type: any
	*/
	get dropDownAppendTo(): any  {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dropDownAppendTo = value;
		}
	}

	/** Determines the position of the drop down button.
	*	Property type: DropDownButtonPosition
	*/
	get dropDownButtonPosition(): DropDownButtonPosition  {
		return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
	}
	set dropDownButtonPosition(value: DropDownButtonPosition) {
		if (this.nativeElement) {
			this.nativeElement.dropDownButtonPosition = value;
		}
	}

	/** Sets the height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
	*	Property type: string | number
	*/
	get dropDownHeight(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownHeight = value;
		}
	}

	/** Sets the max height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
	*	Property type: string | number
	*/
	get dropDownMaxHeight(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
	}
	set dropDownMaxHeight(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMaxHeight = value;
		}
	}

	/** Sets the max width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
	*	Property type: string | number
	*/
	get dropDownMaxWidth(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
	}
	set dropDownMaxWidth(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMaxWidth = value;
		}
	}

	/** Sets the min height of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
	*	Property type: string | number
	*/
	get dropDownMinHeight(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
	}
	set dropDownMinHeight(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMinHeight = value;
		}
	}

	/** Sets the min width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
	*	Property type: string | number
	*/
	get dropDownMinWidth(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
	}
	set dropDownMinWidth(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMinWidth = value;
		}
	}

	/** Determines how the drop down is going to open.
	*	Property type: DropDownOpenMode
	*/
	get dropDownOpenMode(): DropDownOpenMode  {
		return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
	}
	set dropDownOpenMode(value: DropDownOpenMode) {
		if (this.nativeElement) {
			this.nativeElement.dropDownOpenMode = value;
		}
	}

	/** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
	*	Property type: boolean
	*/
	get dropDownOverlay(): boolean  {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.dropDownOverlay = value;
		}
	}

	/** Sets a placeholder text to appear when there is no content inside the dropdown.
	*	Property type: string
	*/
	get dropDownPlaceholder(): string  {
		return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
	}
	set dropDownPlaceholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPlaceholder = value;
		}
	}

	/** Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
	*	Property type: DropDownPosition
	*/
	get dropDownPosition(): DropDownPosition  {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value: DropDownPosition) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPosition = value;
		}
	}

	/** Sets the width of the drop down. Default value of empty string means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
	*	Property type: string | number
	*/
	get dropDownWidth(): string | number  {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.dropDownWidth = value;
		}
	}

	/** Sets additional helper text below the element. The hint is visible only when the element is focused.
	*	Property type: string
	*/
	get hint(): string  {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value: string) {
		if (this.nativeElement) {
			this.nativeElement.hint = value;
		}
	}

	/** Determines the visibility of the horizontal Scroll bar inside the drop down.
	*	Property type: HorizontalScrollBarVisibility
	*/
	get horizontalScrollBarVisibility(): HorizontalScrollBarVisibility  {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value: HorizontalScrollBarVisibility) {
		if (this.nativeElement) {
			this.nativeElement.horizontalScrollBarVisibility = value;
		}
	}

	/** Sets a label above the element. The label is always visible.
	*	Property type: string
	*/
	get label(): string  {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value: string) {
		if (this.nativeElement) {
			this.nativeElement.label = value;
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

	/** Determines whether the popup is opened or closed
	*	Property type: boolean
	*/
	get opened(): boolean  {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.opened = value;
		}
	}

	/** Determines the element's placeholder, displayed in the element's action button container.
	*	Property type: string
	*/
	get placeholder(): string  {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.placeholder = value;
		}
	}

	/** Disables user interaction with the element.
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

	/** Determines whether the resize indicator in the bottom right corner is visible or not.
	*	Property type: boolean
	*/
	get resizeIndicator(): boolean  {
		return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
	}
	set resizeIndicator(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.resizeIndicator = value;
		}
	}

	/** Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
	*	Property type: ResizeMode
	*/
	get resizeMode(): ResizeMode  {
		return this.nativeElement ? this.nativeElement.resizeMode : undefined;
	}
	set resizeMode(value: ResizeMode) {
		if (this.nativeElement) {
			this.nativeElement.resizeMode = value;
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

	/** Determines the visibility of the vertical scroll bar.
	*	Property type: VerticalScrollBarVisibility
	*/
	get verticalScrollBarVisibility(): VerticalScrollBarVisibility  {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value: VerticalScrollBarVisibility) {
		if (this.nativeElement) {
			this.nativeElement.verticalScrollBarVisibility = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","autoCloseDelay","disabled","dropDownAppendTo","dropDownButtonPosition","dropDownHeight","dropDownMaxHeight","dropDownMaxWidth","dropDownMinHeight","dropDownMinWidth","dropDownOpenMode","dropDownOverlay","dropDownPlaceholder","dropDownPosition","dropDownWidth","hint","horizontalScrollBarVisibility","label","locale","localizeFormatFunction","messages","opened","placeholder","readonly","resizeIndicator","resizeMode","rightToLeft","theme","unfocusable","verticalScrollBarVisibility"];
	}
	/**  This event is triggered when user clicks on the action button. The action button is visible when the placeholder is set.
	*  @param event. The custom event. 	*/
	onActionButtonClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the drop down is closed.
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user clicks on the drop down button.
	*  @param event. The custom event. 	*/
	onDropDownButtonClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the drop down is opened.
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user starts resizing the drop down.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position)
	*   position - An object containing the current left and top positions of the drop down.
	*/
	onResizeStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user finishes resizing the drop down.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position)
	*   position - An object containing the current left and top positions of the drop down.
	*/
	onResizeEnd?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get events(): string[] {
		return ["onActionButtonClick","onClose","onClosing","onDropDownButtonClick","onOpen","onOpening","onResizeStart","onResizeEnd","onCreate","onReady"];
	}
	/** Appends a new HTML node to the drop down. 
	* @param {Node} node. The node to be appended
	* @returns {Node}
  */
	public async appendChild(node:Node) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.appendChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Closes the dropDown. 
	*/
    public close(): void {
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

	/** Opens the dropDown. 
	*/
    public open(): void {
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

	/** Removes everything from the drop down. 
	*/
    public removeAll(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAll();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAll();
            });
        }
    }

	/** Removes a child node from the drop down. 
	* @param {Node} node. The node to remove.
	* @returns {Node}
  */
	public async removeChild(node:Node) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.removeChild(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Scrolls the drop down to a specific position. 
	* @param {number} top. Y axis coordinate
	* @param {number} left. X axis coordinate
	*/
    public scrollTo(top: number, left: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.scrollTo(top, left);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.scrollTo(top, left);
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

		for(let i = 0; i < that.events.length; i++){
			const eventName = that.events[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-drop-down-button", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default DropDownButton;
