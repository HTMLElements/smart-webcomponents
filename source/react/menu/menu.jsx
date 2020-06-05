import React from "react";
import { MenuItem } from './menuitem';
import { MenuItemsGroup } from './menuitemsgroup';
export { MenuItem } from './menuitem';
export { MenuItemsGroup } from './menuitemsgroup';
/**
 Horizontal, Vertical and Popup Menu. Popup Menus appear when a user taps an interactive UI element such as an icon, button, action, or content, such as selected items or text.
*/
export class Menu extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Menu' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines delay (in milliseconds) before a Menu dropdown is closed when leaving the Menu with the mouse. Applicable only when selectionMode is 'mouseenter'.
	*	Property type: number
	*/
	get autoCloseDelay() {
		return this.nativeElement ? this.nativeElement.autoCloseDelay : undefined;
	}
	set autoCloseDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.autoCloseDelay = value;
		}
	}

	/** If set to true, on mouseenter, the element receives focus automatically.
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

	/** Allows top-level Menu items (immediate children of the Menu) to be checkable. Sublevels are controlled by setting checkable to the respective smart-menu-items-group.
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

	/** Sets or gets whether checkboxes and radio buttons can be displayed in the Menu. This property is applicable only to the Menu itself, and not its smart-menu-item/smart-menu-items-group subitems. See also the property checkable.
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

	/** Sets the check mode of top-level Menu items (immediate children of the Menu). checkMode can be set to 'checkbox', 'radioButton', or a comma-separated list containing 'checkbox', 'radioButton', or 'none' (e.g. 'checkbox, radioButton, none, checkbox'). When set to a list, each value in the list is applied to groups of Menu items separated by an item with separator (item after the one with separator is the start of a new checkMode context). Sublevels are controlled by setting checkMode to the respective smart-menu-items-group.
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

	/** Sets the document event which closes any open Menu drop downs (or the Menu itself when mode is 'dropDown').
	*	Property type: MenuCloseAction
	*/
	get closeAction() {
		return this.nativeElement ? this.nativeElement.closeAction : undefined;
	}
	set closeAction(value) {
		if (this.nativeElement) {
			this.nativeElement.closeAction = value;
		}
	}

	/** Determines the data source that will be loaded to the Menu. The data source represents an array of objects with the following properties: label - a string representing the text content of the item.value - the value of the item.shortcut - a string representing a shortuct for the item. It will be displayed inside the item.items - allows to define an array of sub menu items.
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

	/** Enables or disables element.
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

	/** Sets custom outer container, where all dropdown containers must be appended. By default they are inside the menu. The value of the property can be an HTML element or the id of an HTML element. In mode 'dropDown', the property dropDownAppendTo also controls the parent element of the whole Menu. The open method works relatively to the original place of the Menu in the DOM.
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

	/** If this property is enabled, when an element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
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

	/** Determines the opening direction of Menu dropdowns.
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

	/** A getter that returns an array of all Menu items.
	*	Property type: any
	*/
	get items() {
		return this.nativeElement ? this.nativeElement.items : undefined;
	}
	set items(value) {
		if (this.nativeElement) {
			this.nativeElement.items = value;
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

	/** Used to load a custom minimize icon from an HTMLTemplateElement object. The HTMLTemplateElement is selected by it's id.
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

	/** Determines the minimum width of the Menu at which it will switch from normal to minimized mode. If set to null, the Menu does not minimize automatically.
	*	Property type: number
	*/
	get minimizeWidth() {
		return this.nativeElement ? this.nativeElement.minimizeWidth : undefined;
	}
	set minimizeWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.minimizeWidth = value;
		}
	}

	/** Determines the menu's display mode.
	*	Property type: MenuMode
	*/
	get mode() {
		return this.nativeElement ? this.nativeElement.mode : undefined;
	}
	set mode(value) {
		if (this.nativeElement) {
			this.nativeElement.mode = value;
		}
	}

	/** Opens or closes thte menu when it's in 'dropDown' mode.
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

	/** Sets or gets the menu's scroll buttons behavior. Applicable only when dropDownAppendTo is not null.
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

	/** Determines the menu's selection mode.
	*	Property type: MenuSelectionMode
	*/
	get selectionMode() {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
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
		return ["animation","autoCloseDelay","autoFocusOnMouseenter","checkable","checkboxes","checkMode","closeAction","dataSource","disabled","displayMember","dropDownAppendTo","dropDownOverlay","dropDownPosition","items","itemsMember","locale","localizeFormatFunction","messages","minimizeIconTemplate","minimizeWidth","mode","opened","overflow","readonly","rightToLeft","selectionMode","theme","unfocusable","valueMember"];
	}
	/**  This event is triggered when the menu is closed. The event is fired only in 'dropDown' mode.
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when the menu is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in 'dropDown' mode.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	trigger)
	*   trigger - Indicates whether the event was called from inside the element or programatically.
	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}
	/**  This event is triggered when a smart-menu-items-group is collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
	*   item - The menu item that was collapsed.
	*   label - The label of the toggled item that was collapsed.
	*   value - The value of the toggled item that was collapsed.
	*   path - The path of the toggled item that was collapsed, e.g. '0.1', '1.1.2'.
	*   children - The children items of the toggled item that was collapsed.
	*/
	_onCollapse = null;	get onCollapse() {
		return this._onCollapse;
	}
	set onCollapse(value) {
		this._onCollapse = value;
	}
	/**  This event is triggered when a smart-menu-items-group is collapsing.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
	*   item - The menu item that is going to be collapsed.
	*   label - The label of the toggled item that is going to be collapsed.
	*   value - The value of the toggled item that is going to be collapsed.
	*   path - The path of the toggled item that is going to be collapsed, e.g. '0.1', '1.1.2'.
	*   children - The children items of the toggled item that is going to be collapsed.
	*/
	_onCollapsing = null;	get onCollapsing() {
		return this._onCollapsing;
	}
	set onCollapsing(value) {
		this._onCollapsing = value;
	}
	/**  This event is triggered when a smart-menu-items-group is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
	*   item - The menu item that was expanded.
	*   label - The label of the toggled item that was expanded.
	*   value - The value of the toggled item that was expanded.
	*   path - The path of the toggled item that was expanded, e.g. '0.1', '1.1.2'.
	*   children - The children items of the toggled item that was expanded.
	*/
	_onExpand = null;	get onExpand() {
		return this._onExpand;
	}
	set onExpand(value) {
		this._onExpand = value;
	}
	/**  This event is triggered before a smart-menu-items-group is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value, 	path, 	children)
	*   item - The menu item that is going to be expanded.
	*   label - The label of the toggled item that is going to be expanded.
	*   value - The value of the toggled item that is going to be expanded.
	*   path - The path of the toggled item that is going to be expanded, e.g. '0.1', '1.1.2'.
	*   children - The children items of the toggled item that is going to be expanded.
	*/
	_onExpanding = null;	get onExpanding() {
		return this._onExpanding;
	}
	set onExpanding(value) {
		this._onExpanding = value;
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
	/**  This event is triggered when a menu item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	item, 	label, 	value)
	*   item - The menu item that is toggled.
	*   label - The label of the toggled item.
	*   value - The value of the toggled item.
	*/
	_onItemClick = null;	get onItemClick() {
		return this._onItemClick;
	}
	set onItemClick(value) {
		this._onItemClick = value;
	}
	/**  This event is triggered when the menu is opened. The event is fired only in 'dropDown' mode.
	*  @param event. The custom event. 	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered when the menu is about to be opened. The opening operation can be canceled by calling event.preventDefault() in the event handler function. The event is fired only in 'dropDown' mode.
	*  @param event. The custom event. 	*/
	_onOpening = null;	get onOpening() {
		return this._onOpening;
	}
	set onOpening(value) {
		this._onOpening = value;
	}

	// Gets the events of the React component.
	get events() {
		return ["onClose","onClosing","onCollapse","onCollapsing","onExpand","onExpanding","onItemCheckChange","onItemClick","onOpen","onOpening"];
	}
	/** Adds an item to the menu. 
	* @param {HTMLElement} Item. A smart-menu-item to add to the Menu.
	* @param {HTMLElement | string} Parent?. The smart-menu-items-group or its id or numeric path to add the item to.
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

	/** Checks an item. 
	* @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
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

	/** Clears all Menu items. 
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

	/** Closes the Menu when mode is 'dropDown'. 
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

	/** Collapses an item. 
	* @param {HTMLElement | string} item?. smart-menu-item/smart-menu-items-group or its id or numeric path. If no item is passed, all open items are collapsed.
	* @param {boolean} animation?. If set to false, disables collapse animation even if animation is enabled for the element.
	*/
    collapseItem(item, animation){
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseItem(item, animation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseItem(item, animation);
            });
        }
    }

	/** Expands an item. 
	* @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group or its id or numeric path.
	* @param {boolean} animation?. If set to false, disables expand animation even if animation is enabled for the element.
	*/
    expandItem(item, animation){
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandItem(item, animation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandItem(item, animation);
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

	/** Maximizes the Menu. 
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

	/** Minimizes the Menu. 
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

	/** Opens the Menu when mode is 'dropDown'. 
	* @param {number} left. Horizontal position
	* @param {number} top. Vertical position
	*/
    open(left, top){
        if (this.nativeElement.isRendered) {
            this.nativeElement.open(left, top);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.open(left, top);
            });
        }
    }

	/** Removes an item from the menu. 
	* @param {HTMLElement | string} item. The smart-menu-item/smart-menu-items-group or its id or numeric path to remove.
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
	* @param {HTMLElement | string} item. smart-menu-item/smart-menu-items-group (or its id or numeric path)
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
			React.createElement("smart-menu", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Menu;
