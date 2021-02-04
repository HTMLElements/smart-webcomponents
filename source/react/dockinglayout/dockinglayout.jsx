import React from "react";
/**
 DockingLayout enables the creation of complex layouts consisting of panels that can be floated, docked, nested, resized, pinned.
*/
export class DockingLayout extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'DockingLayout' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** A getter that returns an array of all DockingLayout items that are auto hidden inside the element.
	*	Property type: any
	*/
	get autoHideItems() {
		return this.nativeElement ? this.nativeElement.autoHideItems : undefined;
	}
	set autoHideItems(value) {
		if (this.nativeElement) {
			this.nativeElement.autoHideItems = value;
		}
	}

	/** Enable/Disable the automatic state loading. There must be a previously saved state of the Layout in order to load it.
	*	Property type: boolean
	*/
	get autoLoadState() {
		return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
	}
	set autoLoadState(value) {
		if (this.nativeElement) {
			this.nativeElement.autoLoadState = value;
		}
	}

	/** Enable/Disable the automatic state saving. Note: In order to save the state of the element it must have an id.
	*	Property type: boolean
	*/
	get autoSaveState() {
		return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
	}
	set autoSaveState(value) {
		if (this.nativeElement) {
			this.nativeElement.autoSaveState = value;
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

	/** If set to false it will disable the dragging of DockingLayout items. If set items can only be repositioned using the API methods.
	*	Property type: boolean
	*/
	get draggable() {
		return this.nativeElement ? this.nativeElement.draggable : undefined;
	}
	set draggable(value) {
		if (this.nativeElement) {
			this.nativeElement.draggable = value;
		}
	}

	/** If set to false it will disable item floating. This means that if a Window is floated as a result of dragging it will be returned back ot it's original position instead of being floated outside the DockingLayout. Already floated LayoutPanel items will not be affected.
	*	Property type: boolean
	*/
	get floatable() {
		return this.nativeElement ? this.nativeElement.floatable : undefined;
	}
	set floatable(value) {
		if (this.nativeElement) {
			this.nativeElement.floatable = value;
		}
	}

	/** Hides all splitter bars inside the element.
	*	Property type: boolean
	*/
	get hideSplitterBars() {
		return this.nativeElement ? this.nativeElement.hideSplitterBars : undefined;
	}
	set hideSplitterBars(value) {
		if (this.nativeElement) {
			this.nativeElement.hideSplitterBars = value;
		}
	}

	/** A getter that returns an array of all DockingLayout items that are docked inside the element.
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

	/** A getter that returns an array of all DockingLayout items that have been closed.
	*	Property type: any
	*/
	get closedItems() {
		return this.nativeElement ? this.nativeElement.closedItems : undefined;
	}
	set closedItems(value) {
		if (this.nativeElement) {
			this.nativeElement.closedItems = value;
		}
	}

	/** Determines the structure of the element. This property represents an array of objects that define the hierarchy of the items inside the element and their specific settings. Each object must have a type attribute that defines it's behavior.  Three types of objects are allowed:   LayoutGroup - Represents a group of items (Splitter). Used when the user wants more than one DockingLayout item in a single container.  Properties: orientation - A string value indicating the orientation of the Splitter group. Possible values: 'horizontal', 'vertical'. size - A string | number value indicating the size of the Splitter group. items - An array of LayoutPanel object definitions. resizeMode - A string indicating the resize mode. Possible values: 'none', 'adjacent', 'end', 'proportional'. resizeStep - A nummeric value that determines the step of resizing. liveResize - Determines if splitter resizing happens while dragging or not.   LayoutPanel - Represents a DockingLayout item (TabsWindow). LayoutPanels can have one or many items (TabItem).  Properties:   id - the ID of the LayoutPanel. autoHide - a boolean property that determines if the LayoutPanel is autoHidden. autoHidePosition - determines the autoHide position of the item if 'autoHide' property is set. Possible values: 'top', 'bottom', 'left', 'right'. dropPosition - Determines the possible positions for the item at which a new item can be dropped as a result of dragging. Possible values: 'top', 'bottom', 'left', 'right', 'center', 'header', 'layout-top', 'layout-bottom', 'layout-left', 'layout-right'. Positions with the 'layout' prefix reflect on LayoutPanelItems that are children of the LayoutPanel. label - the Label of the LayoutPanel window. tabPosition - Determines the position of the Tab labels inside the LayoutPanel. layout - determines the DockingLayout owner of the LayoutPanel. Accepts a string indicating the ID of a DockingLayout on the page or a direct reference to it. headerButtons - an Array of strings that define the buttons in the header section of the DockingLayout item. tabCloseButtons - a boolean property that Enables or disables the close buttons inside each Tab item label inside the DockingLayout item. tabOverflow - same as 'overflow' property of jqxTabs. It defines the overflow mode of the labels of the Tab items inside a DockingLayout item.selectionMode - the same as jqxTabs selection modes. Applies to Tab items inside a DockingLayout item. tabResize - the same as 'resize' property of jqxTabs. Allows resizing the Tab labels inside the DockingLayout item. locked - Locks the size of the item and does not allow resizing. max - sets the maximum size of the item. min - sets the minimum size of the item size - sets the size of the item. items - an array of objects. Each object defines the structure of a LayoutPanelItem.   LayoutPanelItem - Represents a LayoutPanel item (TabItem). Properties:  id - the ID of the Tab item. label - a string representing the label of the Tab item. content - represents the content of the Tab item. Can be anything. selected - determines if the item is selected. By default the first added item to the LayoutPanel is automatically selected. draggable - a boolean property that allows to disable the dragging of the Tab item.    
	*	Property type: any
	*/
	get layout() {
		return this.nativeElement ? this.nativeElement.layout : undefined;
	}
	set layout(value) {
		if (this.nativeElement) {
			this.nativeElement.layout = value;
		}
	}

	/** When enabled the resizing operation happens live. By default this feature is not enabled and the user sees a hightlighted bar while dragging instead of the actual splitter bar.
	*	Property type: boolean
	*/
	get liveResize() {
		return this.nativeElement ? this.nativeElement.liveResize : undefined;
	}
	set liveResize(value) {
		if (this.nativeElement) {
			this.nativeElement.liveResize = value;
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

	/** Determines the resize step during reisizing
	*	Property type: number
	*/
	get resizeStep() {
		return this.nativeElement ? this.nativeElement.resizeStep : undefined;
	}
	set resizeStep(value) {
		if (this.nativeElement) {
			this.nativeElement.resizeStep = value;
		}
	}

	/** Determines the snap mode. Two modes are available:   simple - allows dragging of a single tab item inside or outside the layout. A semi-transparent highlighter is used to indicate the possible locations where the dragged item can be dropped. The user has to drop the dragged item inside one of the possible drop zones indicated by the highlighter. advanced - allows dragging of a whole TabsWindow with items or a single tab item. Uses a Visual Studio style feedback that indicates the possible drop locations. The user has to drop the target over one of the icons inside the feedback.   The feedback/highlighter is displayed when the dragging of an item begins. 
	*	Property type: DockingLayoutSnapMode
	*/
	get snapMode() {
		return this.nativeElement ? this.nativeElement.snapMode : undefined;
	}
	set snapMode(value) {
		if (this.nativeElement) {
			this.nativeElement.snapMode = value;
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

	/** A getter that returns an array of all DockingLayout items that have been undocked. Undocked items are no more part of the Layout's interal structure but can be inserted by dragging them in.
	*	Property type: any
	*/
	get undockedItems() {
		return this.nativeElement ? this.nativeElement.undockedItems : undefined;
	}
	set undockedItems(value) {
		if (this.nativeElement) {
			this.nativeElement.undockedItems = value;
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


	// Gets the properties of the React component.
	get properties() {
		return ["animation","autoHideItems","autoLoadState","autoSaveState","disabled","draggable","floatable","hideSplitterBars","items","closedItems","layout","liveResize","locale","localizeFormatFunction","messages","readonly","rightToLeft","resizeStep","snapMode","theme","undockedItems","unfocusable"];
	}
	/**  This event is triggered when the tab selection is changed. Note: Change event may be thrown by other JQX Custom Elements nested inside the Tab items.
	*  @param event. The custom event. 	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when a Tab item or a whole Tabs Window item ( DockingLayout item ) is closed.
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when a Tab item/Tabs Window is about to be closed. The closing operation can be canceled by calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}
	/**  This event is triggered when an item's position inside the Layout or it's size has been changed. Indicates that a state change has occured.
	*  @param event. The custom event. 	*/
	_onStateChange = null;	get onStateChange() {
		return this._onStateChange;
	}
	set onStateChange(value) {
		this._onStateChange = value;
	}
	/**  This event is triggered when item resizing begins.
	*  @param event. The custom event. 	*/
	_onResizeStart = null;	get onResizeStart() {
		return this._onResizeStart;
	}
	set onResizeStart(value) {
		this._onResizeStart = value;
	}
	/**  This event is triggered when item resizing finishes.
	*  @param event. The custom event. 	*/
	_onResizeEnd = null;	get onResizeEnd() {
		return this._onResizeEnd;
	}
	set onResizeEnd(value) {
		this._onResizeEnd = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onChange","onClose","onClosing","onStateChange","onResizeStart","onResizeEnd"];
	}
	/** Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Bottom position inside the element. This means that the item will be positioned near the bottom side of the layout and it's content will be hidden until the user selects one of it's labels. 
	* @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
	*/
    autoHideBottom(node){
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideBottom(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideBottom(node);
            });
        }
    }

	/** Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Left position inside the layout. This means that the item will be positioned near the left side of the layout and it's content will be hidden until the user selects one of it's labels. 
	* @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
	*/
    autoHideLeft(node){
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideLeft(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideLeft(node);
            });
        }
    }

	/** Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Right position inside the layout. This means that the item will be positioned near the right side of the layout and it's content will be hidden until the user selects one of it's labels. 
	* @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
	*/
    autoHideRight(node){
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideRight(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideRight(node);
            });
        }
    }

	/** Makes a "smart-tabs-window" node, that is a child of the Layout, auto hidden by placing it at the Top position inside the layout. This means that the item will be positioned near the top side of the layout and it's content will be hidden until the user selects one of it's labels. 
	* @param {HTMLElement | number | string} node. The "jqx-tabs-window" or "jqx-tab-item" node to append
	*/
    autoHideTop(node){
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoHideTop(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoHideTop(node);
            });
        }
    }

	/** Clears the localStorage of any previous cached state of the DockingLayout. 
	*/
    clearState(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearState();
            });
        }
    }

	/** The method will reset an autohidden item to it's normal behavior and re-insert it at a specified position. It can also be used to insert items into the DockingLayout. Note: Items inserted via this method are added as a top level items. 
	* @param {string | number | Node} node. An autohidden "jqx-tabs-window" item instance or a new "jqx-tabs-window" instance.
	* @returns {Node}
  */
	async dock(node) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.dock(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted before the target item which corresponds to the index passed as the first argument to the method. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertBeforeItem(index, item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertBeforeItem(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertBeforeItem(index, item);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted after the target item which corresponds to the index passed as the first argument to the method. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertAfterItem(index, item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertAfterItem(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertAfterItem(index, item);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's left neighbour horizontally. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertIntoLeft(index, item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoLeft(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoLeft(index, item);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's right neighbour horizontally. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertIntoRight(index, item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoRight(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoRight(index, item);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's top neighbour vertically. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertIntoTop(index, item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoTop(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoTop(index, item);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted by splitting  the target item which corresponds to the index passed as the first argument to the method in two and placing the new item as it's bottom neighbour vertically. 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertIntoBottom(index, item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertIntoBottom(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertIntoBottom(index, item);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the top side inside the Layout. 
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertLayoutTop(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutTop(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutTop(item);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the bottom side inside the Layout. 
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertLayoutBottom(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutBottom(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutBottom(item);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the left side inside the Layout. 
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertLayoutLeft(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutLeft(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutLeft(item);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The new item is inserted as a top level item positioned at the right inside the Layout. 
	* @param {any} item. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertLayoutRight(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertLayoutRight(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertLayoutRight(item);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted above the target ( at position Top). 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertOutsideTargetGroupTop(index, tabsWindow){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupTop(index, tabsWindow);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupTop(index, tabsWindow);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted bellow the target ( at position Bottom). 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertOutsideTargetGroupBottom(index, tabsWindow){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupBottom(index, tabsWindow);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupBottom(index, tabsWindow);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted before the target ( at position Left). 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertOutsideTargetGroupLeft(index, tabsWindow){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupLeft(index, tabsWindow);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupLeft(index, tabsWindow);
            });
        }
    }

	/** Inserts a new TabsWindow into the DockingLayout or creates a TabsWindow instance from an object passed as the second argument. The target item and it's neighbour items are placed inside a new splitter item that acts as the new neghbour of the newly added item via this method. The new item is inserted after the target ( at position Right). 
	* @param {number | HTMLElement | string} index. The index to insert a new TabsWindow at.
	* @param {any} tabsWindow. An instance of a TabsWindow or an Object with the fields "label", "items" and other additional.
	*/
    insertOutsideTargetGroupRight(index, tabsWindow){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insertOutsideTargetGroupRight(index, tabsWindow);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insertOutsideTargetGroupRight(index, tabsWindow);
            });
        }
    }

	/** The method returns an array of all autohidden items. 
	* @param {string} orientation?. Determines which auto hidden items to return ( vertical or horizontal ). If not set the method will return all autohidden items. Possible values: 'vertical', 'horizontal'.
	* @returns {any[]}
  */
	async getAutoHideItems(orientation) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getAutoHideItems(orientation);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** The method returns the index of a target item. 
	* @param {HTMLElement} node. Returns the index of the target item.
	* @returns {number}
  */
	async getIndex(node) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getIndex(node);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns an array of objects representing the current structure of the element. Each object represents a Layout item with it's settings and hierarchy. 
	* @param {boolean} noInstances?. Determines if the returned array will contain HTML references or not. When saving to localStorage the resulted array should not contain any HTMLElement references.
	* @returns {any[]}
  */
	async getState(noInstances) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getState(noInstances);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns the Splitter parent of a Layout item 
	* @param {HTMLElement} item?. DockingLayout item
	* @returns {HTMLElement}
  */
	async getItemGroupElement(item) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItemGroupElement(item);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns a JSON array of objects representing the current structure of the element. Ready to be persisted to LocalStorage. 
	* @returns {any[]}
  */
	async getJSONStructure() {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getJSONStructure();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Loads a previously saved state of the element. If no state is provided as an argument the method will do a localStorage lookup. 
	* @param {any[]} state?. An array of objects that represents a cached state of the DockingLayout. The result of calling the 'saveState' method.
	*/
    loadState(state){
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }

	/** Removes a DockingLayout item (TabsWindow) from the element. 
	* @param {number | HTMLElement | string} index. The index of the TabsWindow to remove or a reference to it.
	*/
    removeAt(index){
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeAt(index);
            });
        }
    }

	/** Removes all items from the element. 
	*/
    removeAll(){
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

	/** Removes a "smart-tabs-window" node that is a DockingLayout item. 
	* @param {Node} node. The "jqx-tabs-window" node to remove.
	* @returns {Node}
  */
	async removeChild(node) {
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

	/** Saves the current state of the DockingLayout to LocalStorage. The state includes the hierarchy and size of the items. 
	*/
    saveState(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveState();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveState();
            });
        }
    }

	/** The method undocks/removes an item from the Layout and places it at the same position but it's no more part of the layout. The item becomes an 'outher' item that can be reinserted at any time. 
	* @param {string | number | Node} node. A "jqx-tabs-window" instance that is part of the DockingLayout.
	*/
    undock(node){
        if (this.nativeElement.isRendered) {
            this.nativeElement.undock(node);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.undock(node);
            });
        }
    }

	/** Updates a TabsWindow and it's contents. 
	* @param {number | HTMLElement | string} index. The index of the TabsWindow to update.
	* @param {any} settings. An object that contains the new settings for the TabsWindow item. Settings object is the same as defining a new TabsWindow with the exception of 'items' array where the items are defined. In order to change the label or content of a Tab item the user has to specify the index of the target tab item.
	*/
    update(index, settings){
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, settings);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update(index, settings);
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
			React.createElement("smart-docking-layout", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default DockingLayout;
