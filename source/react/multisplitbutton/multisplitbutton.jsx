import React from "react";
import { ListItem } from './listitem';
import { ListItemsGroup } from './listitemsgroup';
export { ListItem } from './listitem';
export { ListItemsGroup } from './listitemsgroup';
/**
 Buttons group with DropDown and multiple action buttons.
*/
export class MultiSplitButton extends React.Component {
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
	get animation() {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Determines a data source used to generate element's permanently visible buttons.
	*	Property type: string[]
	*/
	get buttonsDataSource() {
		return this.nativeElement ? this.nativeElement.buttonsDataSource : undefined;
	}
	set buttonsDataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.buttonsDataSource = value;
		}
	}

	/** Determines the data source of the multi split button's dropdown.
	*	Property type: any
	*/
	get dataSource() {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Enables or disables jqxMultiSplitButton.
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

	/** Displays or hides the loading indicator
	*	Property type: boolean
	*/
	get displayLoadingIndicator() {
		return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
	}
	set displayLoadingIndicator(value) {
		if (this.nativeElement) {
			this.nativeElement.displayLoadingIndicator = value;
		}
	}

	/** Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property.
	*	Property type: string
	*/
	get displayMember() {
		return this.nativeElement ? this.nativeElement.displayMember : undefined;
	}
	set displayMember(value) {
		if (this.nativeElement) {
			this.nativeElement.displayMember = value;
		}
	}

	/** Sets the parent container of the button's dropDown list (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown list.
	*	Property type: any
	*/
	get dropDownAppendTo() {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownAppendTo = value;
		}
	}

	/** Determines position of the drop down button.
	*	Property type: DropDownButtonPosition
	*/
	get dropDownButtonPosition() {
		return this.nativeElement ? this.nativeElement.dropDownButtonPosition : undefined;
	}
	set dropDownButtonPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownButtonPosition = value;
		}
	}

	/** Defines how element's drop down behaves. In 'none' mode drop down never opens. In 'dropDownButton' mode drop down is opened only via elelent's drop down button. In 'auto' mode drop down is opened on click on the whole top section.
	*	Property type: DropDownOpenMode
	*/
	get dropDownOpenMode() {
		return this.nativeElement ? this.nativeElement.dropDownOpenMode : undefined;
	}
	set dropDownOpenMode(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownOpenMode = value;
		}
	}

	/** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
	*	Property type: boolean
	*/
	get dropDownOverlay() {
		return this.nativeElement ? this.nativeElement.dropDownOverlay : undefined;
	}
	set dropDownOverlay(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownOverlay = value;
		}
	}

	/** Determines the vertical position of the dropDown list. 'Auto' means its automatically determined depending on the viewport size.
	*	Property type: DropDownPosition
	*/
	get dropDownPosition() {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPosition = value;
		}
	}

	/** Determines whether the Filtering is enabled.
	*	Property type: boolean
	*/
	get filterable() {
		return this.nativeElement ? this.nativeElement.filterable : undefined;
	}
	set filterable(value) {
		if (this.nativeElement) {
			this.nativeElement.filterable = value;
		}
	}

	/** Determines the filtering for the drop down list mode.
	*	Property type: FilterMode
	*/
	get filterMode() {
		return this.nativeElement ? this.nativeElement.filterMode : undefined;
	}
	set filterMode(value) {
		if (this.nativeElement) {
			this.nativeElement.filterMode = value;
		}
	}

	/** Determines the placeholder for the drop down list filter input field.
	*	Property type: string
	*/
	get filterInputPlaceholder() {
		return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
	}
	set filterInputPlaceholder(value) {
		if (this.nativeElement) {
			this.nativeElement.filterInputPlaceholder = value;
		}
	}

	/** If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups.
	*	Property type: boolean
	*/
	get grouped() {
		return this.nativeElement ? this.nativeElement.grouped : undefined;
	}
	set grouped(value) {
		if (this.nativeElement) {
			this.nativeElement.grouped = value;
		}
	}

	/** Sets or gets the groupMember. If it's not set, by default is used 'group' property of the source object.
	*	Property type: string
	*/
	get groupMember() {
		return this.nativeElement ? this.nativeElement.groupMember : undefined;
	}
	set groupMember(value) {
		if (this.nativeElement) {
			this.nativeElement.groupMember = value;
		}
	}

	/** Sets ot gets the incrementalSearchDelay property. The incrementalSearchDelay specifies the time-interval in milliseconds after which the previous search string is deleted. The timer starts when you stop typing.
	*	Property type: number
	*/
	get incrementalSearchDelay() {
		return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
	}
	set incrementalSearchDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.incrementalSearchDelay = value;
		}
	}

	/** Sets ot gets the mode of the incremental search mode.
	*	Property type: SearchMode
	*/
	get incrementalSearchMode() {
		return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
	}
	set incrementalSearchMode(value) {
		if (this.nativeElement) {
			this.nativeElement.incrementalSearchMode = value;
		}
	}

	/** Determines the height of the items.
	*	Property type: number | null
	*/
	get itemHeight() {
		return this.nativeElement ? this.nativeElement.itemHeight : undefined;
	}
	set itemHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.itemHeight = value;
		}
	}

	/** The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM. It's used to load list items from the HTMLTemplateElement.
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

	/** Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom.
	*	Property type: string
	*/
	get loadingIndicatorPlaceholder() {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
	}
	set loadingIndicatorPlaceholder(value) {
		if (this.nativeElement) {
			this.nativeElement.loadingIndicatorPlaceholder = value;
		}
	}

	/** The position of the loading indicator.
	*	Property type: VerticalAlignment
	*/
	get loadingIndicatorPosition() {
		return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
	}
	set loadingIndicatorPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.loadingIndicatorPosition = value;
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

	/** Determines whether the popup is opened or closed
	*	Property type: boolean
	*/
	get opened() {
		return this.nativeElement ? this.nativeElement.opened : undefined;
	}
	set opened(value) {
		if (this.nativeElement) {
			this.nativeElement.opened = value;
		}
	}

	/** Disables user interaction with the element.
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

	/** Sets or gets selected indexes of buttons's dropDown.
	*	Property type: number[]
	*/
	get selectedIndexes() {
		return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
	}
	set selectedIndexes(value) {
		if (this.nativeElement) {
			this.nativeElement.selectedIndexes = value;
		}
	}

	/** Sets or gets selected values of buttons's dropDown.
	*	Property type: string[]
	*/
	get selectedValues() {
		return this.nativeElement ? this.nativeElement.selectedValues : undefined;
	}
	set selectedValues(value) {
		if (this.nativeElement) {
			this.nativeElement.selectedValues = value;
		}
	}

	/** Determines how many items can be selected.
	*	Property type: MultiSplitButtonSelectionMode
	*/
	get selectionMode() {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Determines whether the items in the dropDown are sorted alphabetically or not
	*	Property type: boolean
	*/
	get sorted() {
		return this.nativeElement ? this.nativeElement.sorted : undefined;
	}
	set sorted(value) {
		if (this.nativeElement) {
			this.nativeElement.sorted = value;
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

	/** Determines the value member of an item. Stored as value in the item object.
	*	Property type: string
	*/
	get valueMember() {
		return this.nativeElement ? this.nativeElement.valueMember : undefined;
	}
	set valueMember(value) {
		if (this.nativeElement) {
			this.nativeElement.valueMember = value;
		}
	}

	/** Determines weather or not Virtualization is used for the button's dropDownList.
	*	Property type: boolean
	*/
	get virtualized() {
		return this.nativeElement ? this.nativeElement.virtualized : undefined;
	}
	set virtualized(value) {
		if (this.nativeElement) {
			this.nativeElement.virtualized = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","buttonsDataSource","dataSource","disabled","displayLoadingIndicator","displayMember","dropDownAppendTo","dropDownButtonPosition","dropDownOpenMode","dropDownOverlay","dropDownPosition","filterable","filterMode","filterInputPlaceholder","grouped","groupMember","incrementalSearchDelay","incrementalSearchMode","itemHeight","itemTemplate","loadingIndicatorPlaceholder","loadingIndicatorPosition","locale","localizeFormatFunction","messages","opened","readonly","selectedIndexes","selectedValues","selectionMode","sorted","theme","unfocusable","valueMember","virtualized"];
	}
	/**  This event is triggered when button's dropDown selection is changed.
	*  @param event. The custom event. 	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when button's dropDown list is closed.
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when button's dropDown list is closing.
	*  @param event. The custom event. 	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}
	/**  This event is triggered when user clicks any of the element's buttons or button's dropDown items.
	*  @param event. The custom event. 	*/
	_onItemClick = null;	get onItemClick() {
		return this._onItemClick;
	}
	set onItemClick(value) {
		this._onItemClick = value;
	}
	/**  This event is triggered when button's dropDown list is opened.
	*  @param event. The custom event. 	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered when button's dropDown list is opening.
	*  @param event. The custom event. 	*/
	_onOpening = null;	get onOpening() {
		return this._onOpening;
	}
	set onOpening(value) {
		this._onOpening = value;
	}
	/**  This event is triggered when user scrolls to the end of the dropDown list.
	*  @param event. The custom event. 	*/
	_onScrollBottomReached = null;	get onScrollBottomReached() {
		return this._onScrollBottomReached;
	}
	set onScrollBottomReached(value) {
		this._onScrollBottomReached = value;
	}
	/**  This event is triggered when user scrolls to the start of the dropDown list.
	*  @param event. The custom event. 	*/
	_onScrollTopReached = null;	get onScrollTopReached() {
		return this._onScrollTopReached;
	}
	set onScrollTopReached(value) {
		this._onScrollTopReached = value;
	}

	// Gets the events of the React component.
	get events() {
		return ["onChange","onClose","onClosing","onItemClick","onOpen","onOpening","onScrollBottomReached","onScrollTopReached"];
	}
	/** Closes button's dropDown list. 
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

	/** Returns an item instance occured in the element's drop down. 
	* @param {string} value. The value of an item from the drop down list or a button.
	* @returns {HTMLElement}
  */
	async getItem(value) {
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
	async items() {
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
    insert(position, value){
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

	/** Removes an item at a specified position in the drop down list. 
	* @param {number} position. The position of the removed item.
	*/
    removeAt(position){
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
    update(position, value){
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
