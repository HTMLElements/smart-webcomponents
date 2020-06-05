import React from "react";
import { MenuItem } from './menuitem';
import { MenuItemsGroup } from './menuitemsgroup';
export { MenuItem } from './menuitem';
export { MenuItemsGroup } from './menuitemsgroup';
/**
 ListMenu allows you to present users a listing of options and sub options.
*/
export class ListMenu extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'ListMenu' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines whether the element becomes focused on hover or not.
	*	Property type: boolean
	*/
	get autoFocusOnMouseenter() {
		return this.nativeElement ? this.nativeElement.autoFocusOnMouseenter : undefined;
	}
	set autoFocusOnMouseenter(value) {
		if (this.nativeElement) {
			this.nativeElement.autoFocusOnMouseenter = value;
		}
	}

	/** Allows top-level ListMenu items to be checkable.
	*	Property type: boolean
	*/
	get checkable() {
		return this.nativeElement ? this.nativeElement.checkable : undefined;
	}
	set checkable(value) {
		if (this.nativeElement) {
			this.nativeElement.checkable = value;
		}
	}

	/** Sets or gets whether checkboxes and radio buttons can be displayed in the top level menu groups. This property is applicable only to the ListMenu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable.
	*	Property type: boolean
	*/
	get checkboxes() {
		return this.nativeElement ? this.nativeElement.checkboxes : undefined;
	}
	set checkboxes(value) {
		if (this.nativeElement) {
			this.nativeElement.checkboxes = value;
		}
	}

	/** Sets the check mode of top-level ListMenu items(groups).
	*	Property type: MenuCheckMode
	*/
	get checkMode() {
		return this.nativeElement ? this.nativeElement.checkMode : undefined;
	}
	set checkMode(value) {
		if (this.nativeElement) {
			this.nativeElement.checkMode = value;
		}
	}

	/** Determines the data source that will be loaded to the ListMenu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items.
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

	/** Displays or hides the loading indicator. Loading indicator is hidden by default.
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

	/** Determines the field in the data source that corresponds to an item's label.
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

	/** Sets custom outer container where the minimized dropdown will be appednded. By default it is in the ListMenu. The value of the property can be an HTML element or the id of an HTML element.
	*	Property type: string | HTMLElement
	*/
	get dropDownAppendTo() {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownAppendTo = value;
		}
	}

	/** If this property is enabled, when the element's minimized dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
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

	/** Sets or gets the opening direction of the ListMenu minimized dropdown.
	*	Property type: MenuDropDownPosition
	*/
	get dropDownPosition() {
		return this.nativeElement ? this.nativeElement.dropDownPosition : undefined;
	}
	set dropDownPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPosition = value;
		}
	}

	/** Enables or disables scrolling using the mouse wheel through overflowing menu items.
	*	Property type: boolean
	*/
	get enableMouseWheelAction() {
		return this.nativeElement ? this.nativeElement.enableMouseWheelAction : undefined;
	}
	set enableMouseWheelAction(value) {
		if (this.nativeElement) {
			this.nativeElement.enableMouseWheelAction = value;
		}
	}

	/** Determines whether menu item filtering is enabled. When enabled a filter input is shown at the top of the element. Only items in the current view can be filtered.
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

	/** Determines the placeholder for the filter input.
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

	/** Determines the filtering mode.
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

	/** If enabled, the items will be grouped by their first letter and sorted.
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

	/** Determines the field in the data source that corresponds to an item group's subitems collection.
	*	Property type: string
	*/
	get itemsMember() {
		return this.nativeElement ? this.nativeElement.itemsMember : undefined;
	}
	set itemsMember(value) {
		if (this.nativeElement) {
			this.nativeElement.itemsMember = value;
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

	/** Determines the position of the loading indicator inside the element.
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

	/** Allows to load a custom minimize icon from an HTMLTemplateElement.The property acceps the id of an HTMLTemplateElement or it's direct instance.
	*	Property type: string
	*/
	get minimizeIconTemplate() {
		return this.nativeElement ? this.nativeElement.minimizeIconTemplate : undefined;
	}
	set minimizeIconTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.minimizeIconTemplate = value;
		}
	}

	/** Determines the minimum width of the ListMenu at which it will switch from normal to minimized mode. If set to null, the ListMenu does not minimize automatically.
	*	Property type: number | null
	*/
	get minimizeWidth() {
		return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
	}
	set minimizeWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.minimizeWidth = value;
		}
	}

	/** Sets or gets the ListMenu's scroll buttons behavior.
	*	Property type: Overflow
	*/
	get overflow() {
		return this.nativeElement ? this.nativeElement.overflow : undefined;
	}
	set overflow(value) {
		if (this.nativeElement) {
			this.nativeElement.overflow = value;
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

	/** Determines the field in the data source that corresponds to an item's value.
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


	// Gets the properties of the React component.
	get properties() {
		return ["animation","autoFocusOnMouseenter","checkable","checkboxes","checkMode","dataSource","disabled","displayLoadingIndicator","displayMember","dropDownAppendTo","dropDownOverlay","dropDownPosition","enableMouseWheelAction","filterable","filterInputPlaceholder","filterMode","grouped","itemsMember","loadingIndicatorPlaceholder","loadingIndicatorPosition","locale","localizeFormatFunction","messages","minimizeIconTemplate","minimizeWidth","overflow","readonly","rightToLeft","theme","unfocusable","valueMember"];
	}
	/**  This event is triggered when a smart-menu-items-group is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
	*   item - The menu item that was expanded.
	*   label - The label of the item that was expanded.
	*   value - The value of the item that was expanded.
	*   path - The path of the item that was expanded, e.g. '0.1', '1.1.2'.
	*   children - The children of the item that was expanded.
	*/
	_onExpand = null;	get onExpand() {
		return this._onExpand;
	}
	set onExpand(value) {
		this._onExpand = value;
	}
	/**  This event is triggered when a menu item check state is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	checked)
	*   item - The menu item which state was changed.
	*   label - The label of the item which state was changed.
	*   value - The value of the item which state was changed.
	*   checked - The checked state of the toggled item. If false the item is not toggled.
	*/
	_onItemCheckChange = null;	get onItemCheckChange() {
		return this._onItemCheckChange;
	}
	set onItemCheckChange(value) {
		this._onItemCheckChange = value;
	}
	/**  This event is triggered when a list menu item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
	*   item - The menu item that was clicked.
	*   label - The label of the clicked item.
	*   value - The value of the clicked item.
	*/
	_onItemClick = null;	get onItemClick() {
		return this._onItemClick;
	}
	set onItemClick(value) {
		this._onItemClick = value;
	}
	/**  This event is triggered when the user scrolls to the bottom of the ListMenu.
	*  @param event. The custom event. 	*/
	_onScrollBottomReached = null;	get onScrollBottomReached() {
		return this._onScrollBottomReached;
	}
	set onScrollBottomReached(value) {
		this._onScrollBottomReached = value;
	}
	/**  This event is triggered when the user swipes to the left inside the ListMenu.
	*  @param event. The custom event. 	*/
	_onSwipeleft = null;	get onSwipeleft() {
		return this._onSwipeleft;
	}
	set onSwipeleft(value) {
		this._onSwipeleft = value;
	}
	/**  This event is triggered when the user swipes to the right inside the ListMenu.
	*  @param event. The custom event. 	*/
	_onSwiperight = null;	get onSwiperight() {
		return this._onSwiperight;
	}
	set onSwiperight(value) {
		this._onSwiperight = value;
	}

	// Gets the events of the React component.
	get events() {
		return ["onExpand","onItemCheckChange","onItemClick","onScrollBottomReached","onSwipeleft","onSwiperight"];
	}
	/** Adds an item to the list. 
	* @param {HTMLElement} Item. A smart-menu-item to add to the List Menu.
	* @param {HTMLElement | string} Parent?. The smart-menu-items-group (or its id or numeric path) to add the item to.
	*/
    addItem(Item, Parent){
        if (this.nativeElement.isRendered) {
            this.nativeElement.addItem(Item, Parent);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addItem(Item, Parent);
            });
        }
    }

	/** Navigates to the previous page (smart-menu-items-group). 
	* @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element
	*/
    back(animation){
        if (this.nativeElement.isRendered) {
            this.nativeElement.back(animation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.back(animation);
            });
        }
    }

	/** Navigates to a particular page (smart-menu-items-group). 
	* @param {string} id. The id or numeric path of a page (smart-menu-items-group).
	*/
    changePage(id){
        if (this.nativeElement.isRendered) {
            this.nativeElement.changePage(id);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.changePage(id);
            });
        }
    }

	/** Checks an item. 
	* @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path).
	*/
    checkItem(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkItem(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.checkItem(item);
            });
        }
    }

	/** Gets an item by its id or numeric path. 
	* @param {string} id. The id or numeric path of an item
	* @returns {HTMLElement}
  */
	async getItem(id) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItem(id);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Maximizes the List Menu. 
	*/
    maximize(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.maximize();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.maximize();
            });
        }
    }

	/** Minimizes the List Menu. An icon is displayed and the menu is hidden when minimized. 
	*/
    minimize(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.minimize();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.minimize();
            });
        }
    }

	/** Removes an item. 
	* @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group (or its id or numeric path) to remove.
	*/
    removeItem(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeItem(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeItem(item);
            });
        }
    }

	/** Unchecks an item. 
	* @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path).
	*/
    uncheckItem(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckItem(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uncheckItem(item);
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
			React.createElement("smart-list-menu", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default ListMenu;
