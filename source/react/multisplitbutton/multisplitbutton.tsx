import React from "react";
import { MultiSplitButtonProperties } from "./../../index";
import { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, SearchMode, VerticalAlignment, MultiSplitButtonSelectionMode} from './../../index';
import { ListItemProperties } from './../../index';
import { ListItem } from './listitem';
import { ListItemsGroupProperties } from './../../index';
import { ListItemsGroup } from './listitemsgroup';
export { MultiSplitButtonProperties } from "./../../index";
export { Animation, DropDownButtonPosition, DropDownOpenMode, DropDownPosition, FilterMode, SearchMode, VerticalAlignment, MultiSplitButtonSelectionMode} from './../../index';
export { ListItem } from './listitem';
export { ListItemProperties } from "./../../index";
export { ListItemsGroup } from './listitemsgroup';
export { ListItemsGroupProperties } from "./../../index";

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface MultiSplitButtonProps extends MultiSplitButtonProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onClose?: ((event?: Event) => void) | undefined;
	onClosing?: ((event?: Event) => void) | undefined;
	onItemClick?: ((event?: Event) => void) | undefined;
	onOpen?: ((event?: Event) => void) | undefined;
	onOpening?: ((event?: Event) => void) | undefined;
	onScrollBottomReached?: ((event?: Event) => void) | undefined;
	onScrollTopReached?: ((event?: Event) => void) | undefined;

}
/**
 Buttons group with DropDown and multiple action buttons.
*/
export class MultiSplitButton extends React.Component<React.HTMLProps<Element> & MultiSplitButtonProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'MultiSplitButton' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines a data source used to generate element's permanently visible buttons.
	*	Property type: string[]
	*/
	get buttonsDataSource(): string[]  {
		return this.nativeElement ? this.nativeElement.buttonsDataSource : undefined;
	}
	set buttonsDataSource(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.buttonsDataSource = value;
		}
	}

	/** Determines the data source of the multi split button's dropdown.
	*	Property type: any
	*/
	get dataSource(): any  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Enables or disables jqxMultiSplitButton.
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

	/** Displays or hides the loading indicator
	*	Property type: boolean
	*/
	get displayLoadingIndicator(): boolean  {
		return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
	}
	set displayLoadingIndicator(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.displayLoadingIndicator = value;
		}
	}

	/** Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
	*	Property type: string
	*/
	get displayMember(): string  {
		return this.nativeElement ? this.nativeElement.displayMember : undefined;
	}
	set displayMember(value: string) {
		if (this.nativeElement) {
			this.nativeElement.displayMember = value;
		}
	}

	/** Sets the parent container of the button's dropDown list (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown list.
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

	/** Determines position of the drop down button.
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

	/** Defines how element's drop down behaves. In 'none' mode drop down never opens. In 'dropDownButton' mode drop down is opened only via elelent's drop down button. In 'auto' mode drop down is opened on click on the whole top section.
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

	/** Determines the vertical position of the dropDown list. 'Auto' means its automatically determined depending on the viewport size.
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

	/** Determines whether the Filtering is enabled.
	*	Property type: boolean
	*/
	get filterable(): boolean  {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.filterable = value;
		}
	}

	/** Determines the filtering for the drop down list mode.
	*	Property type: FilterMode
	*/
	get filterMode(): FilterMode  {
		return this.nativeElement ? this.nativeElement.filterMode : undefined;
	}
	set filterMode(value: FilterMode) {
		if (this.nativeElement) {
			this.nativeElement.filterMode = value;
		}
	}

	/** Determines the placeholder for the drop down list filter input field.
	*	Property type: string
	*/
	get filterInputPlaceholder(): string  {
		return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
	}
	set filterInputPlaceholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.filterInputPlaceholder = value;
		}
	}

	/** If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
	*	Property type: boolean
	*/
	get grouped(): boolean  {
		return this.nativeElement ? this.nativeElement.grouped : undefined;
	}
	set grouped(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.grouped = value;
		}
	}

	/** Sets or gets the groupMember. If it's not set, by default is used 'group' property of the source object.
	*	Property type: string
	*/
	get groupMember(): string  {
		return this.nativeElement ? this.nativeElement.groupMember : undefined;
	}
	set groupMember(value: string) {
		if (this.nativeElement) {
			this.nativeElement.groupMember = value;
		}
	}

	/** Sets ot gets the incrementalSearchDelay property. The incrementalSearchDelay specifies the time-interval in milliseconds after which the previous search string is deleted. The timer starts when you stop typing.
	*	Property type: number
	*/
	get incrementalSearchDelay(): number  {
		return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
	}
	set incrementalSearchDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.incrementalSearchDelay = value;
		}
	}

	/** Sets ot gets the mode of the incremental search mode.
	*	Property type: SearchMode
	*/
	get incrementalSearchMode(): SearchMode  {
		return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
	}
	set incrementalSearchMode(value: SearchMode) {
		if (this.nativeElement) {
			this.nativeElement.incrementalSearchMode = value;
		}
	}

	/** Determines the height of the items.
	*	Property type: number | null
	*/
	get itemHeight(): number | null  {
		return this.nativeElement ? this.nativeElement.itemHeight : undefined;
	}
	set itemHeight(value: number | null) {
		if (this.nativeElement) {
			this.nativeElement.itemHeight = value;
		}
	}

	/** The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM. It's used to load list items from the HTMLTemplateElement.
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

	/** Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
	*	Property type: string
	*/
	get loadingIndicatorPlaceholder(): string  {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
	}
	set loadingIndicatorPlaceholder(value: string) {
		if (this.nativeElement) {
			this.nativeElement.loadingIndicatorPlaceholder = value;
		}
	}

	/** The position of the loading indicator.
	*	Property type: VerticalAlignment
	*/
	get loadingIndicatorPosition(): VerticalAlignment  {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
	}
	set loadingIndicatorPosition(value: VerticalAlignment) {
		if (this.nativeElement) {
			this.nativeElement.loadingIndicatorPosition = value;
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

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language. 
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

	/** Sets or gets selected indexes of buttons's dropDown.
	*	Property type: number[]
	*/
	get selectedIndexes(): number[]  {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value: number[]) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndexes = value;
		}
	}

	/** Sets or gets selected values of buttons's dropDown.
	*	Property type: string[]
	*/
	get selectedValues(): string[]  {
		return this.nativeElement ? this.nativeElement.selectedValues : undefined;
	}
	set selectedValues(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.selectedValues = value;
		}
	}

	/** Determines how many items can be selected.
	*	Property type: MultiSplitButtonSelectionMode
	*/
	get selectionMode(): MultiSplitButtonSelectionMode  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: MultiSplitButtonSelectionMode) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Determines whether the items in the dropDown are sorted alphabetically or not
	*	Property type: boolean
	*/
	get sorted(): boolean  {
		return this.nativeElement ? this.nativeElement.sorted : undefined;
	}
	set sorted(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.sorted = value;
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

	/** Determines the value member of an item. Stored as value in the item object.
	*	Property type: string
	*/
	get valueMember(): string  {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value: string) {
		if (this.nativeElement) {
			this.nativeElement.valueMember = value;
		}
	}

	/** Determines weather or not Virtualization is used for the button's dropDownList.
	*	Property type: boolean
	*/
	get virtualized(): boolean  {
		return this.nativeElement ? this.nativeElement.virtualized : undefined;
	}
	set virtualized(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.virtualized = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","buttonsDataSource","dataSource","disabled","displayLoadingIndicator","displayMember","dropDownAppendTo","dropDownButtonPosition","dropDownOpenMode","dropDownOverlay","dropDownPosition","filterable","filterMode","filterInputPlaceholder","grouped","groupMember","incrementalSearchDelay","incrementalSearchMode","itemHeight","itemTemplate","loadingIndicatorPlaceholder","loadingIndicatorPosition","locale","localizeFormatFunction","messages","opened","readonly","selectedIndexes","selectedValues","selectionMode","sorted","theme","unfocusable","valueMember","virtualized"];
	}
	/**  This event is triggered when button's dropDown selection is changed.
	*  @param event. The custom event. 	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when button's dropDown list is closed.
	*  @param event. The custom event. 	*/
	onClose?: ((event?: Event) => void) | undefined
	/**  This event is triggered when button's dropDown list is closing.
	*  @param event. The custom event. 	*/
	onClosing?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user clicks any of the element's buttons or button's dropDown items.
	*  @param event. The custom event. 	*/
	onItemClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when button's dropDown list is opened.
	*  @param event. The custom event. 	*/
	onOpen?: ((event?: Event) => void) | undefined
	/**  This event is triggered when button's dropDown list is opening.
	*  @param event. The custom event. 	*/
	onOpening?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user scrolls to the end of the dropDown list.
	*  @param event. The custom event. 	*/
	onScrollBottomReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered when user scrolls to the start of the dropDown list.
	*  @param event. The custom event. 	*/
	onScrollTopReached?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get events(): string[] {
		return ["onChange","onClose","onClosing","onItemClick","onOpen","onOpening","onScrollBottomReached","onScrollTopReached","onCreate","onReady"];
	}
	/** Closes button's dropDown list. 
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

	/** Returns an item instance occured in the element's drop down. 
	* @param {string} value. The value of an item from the drop down list or a button.
	* @returns {HTMLElement}
  */
	public async getItem(value:string) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItem(value);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns an array with the items from the split button's dropDown list. 
	* @returns {any[]}
  */
	public async items() : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.items();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Inserts a new item at a specified position in the drop down list. 
	* @param {number} position. The position where the item must be inserted.
	* @param {any} value. The value of the new item.
	*/
    public insert(position: number, value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(position, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(position, value);
            });
        }
    }

	/** Opens the splitButton's dropDown list. 
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

	/** Removes an item at a specified position in the drop down list. 
	* @param {number} position. The position of the removed item.
	*/
    public removeAt(position: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(position);
            });
        }
    }

	/** Updates an item from the dropDown list. 
	* @param {number} position. The position where the item must be updated.
	* @param {any} value. The value of the updated item.
	*/
    public update(position: number, value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(position, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(position, value);
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
			React.createElement("smart-multi-split-button", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default MultiSplitButton;
