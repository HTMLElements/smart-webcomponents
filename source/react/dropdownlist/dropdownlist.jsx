import React from "react";
import { ListItem } from './listitem';
import { ListItemsGroup } from './listitemsgroup';
export { ListItem } from './listitem';
export { ListItemsGroup } from './listitemsgroup';
/**
 The DropDownList is a form component that lets you choose a single predefined value from a list. It is a more advanced version of the 'select' tag.
*/
export class DropDownList extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'DropDownList' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Used only when dropDownOpenMode is set to 'auto'. Determines the delay before the opened drop down closes if the pointer is not over the element.
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

	/** Determines the data source that will be loaded to the DropDownList. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described.
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

	/** Determines whether an indicator will appear during filtering and remote item loading.
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

	/** Determines the drop down parent. The expected value is CSS Selector, ID or 'body'. The drop down can be removed from the body of the element and continue to work in another container. This is usefull when one of the parents of the element doesn't allow overflowing, by settings this property to 'body' the drop down will be appended to the DOM and the popup will open/close as usual. dropDownAppendTo can be a string representing the id of an HTML element on the page or a direct reference to that element. Reseting it back to null will take the drop down back to it's original place.
	*	Property type: string
	*/
	get dropDownAppendTo() {
		return this.nativeElement ? this.nativeElement.dropDownAppendTo : undefined;
	}
	set dropDownAppendTo(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownAppendTo = value;
		}
	}

	/** Determines the position of the drop down button.
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

	/** Sets the height of the drop down. By default it's set to an empty string. In this case the height of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownHeight() {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownHeight = value;
		}
	}

	/** Sets the maximum Height of the drop down. By default it's set to an empty string. In this case the maxHeight of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMaxHeight() {
		return this.nativeElement ? this.nativeElement.dropDownMaxHeight : undefined;
	}
	set dropDownMaxHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMaxHeight = value;
		}
	}

	/** Sets the maximum Width of the drop down. By default it's set to an empty string. In this case the maxWidth of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMaxWidth() {
		return this.nativeElement ? this.nativeElement.dropDownMaxWidth : undefined;
	}
	set dropDownMaxWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMaxWidth = value;
		}
	}

	/** Sets the minimum Height of the drop down. By default it's set to an empty string. In this case the minHeight of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMinHeight() {
		return this.nativeElement ? this.nativeElement.dropDownMinHeight : undefined;
	}
	set dropDownMinHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMinHeight = value;
		}
	}

	/** Sets the minimum Width of the drop down. By default it's set to an empty string. In this case the minWidth of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownMinWidth() {
		return this.nativeElement ? this.nativeElement.dropDownMinWidth : undefined;
	}
	set dropDownMinWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownMinWidth = value;
		}
	}

	/** Determines how the drop down is going to open.
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

	/** If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document. The purpose of the overlay is to make sure that clicking anywhere outside the popup will will target the overlay and not the DOM.
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

	/** Determines the placeholder for the drop down list when it's empty.
	*	Property type: string
	*/
	get dropDownPlaceholder() {
		return this.nativeElement ? this.nativeElement.dropDownPlaceholder : undefined;
	}
	set dropDownPlaceholder(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownPlaceholder = value;
		}
	}

	/** Determines the position of the drop down when opened.
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

	/** Sets the width of the drop down. By default it's set to an empty string. In this case the width of the drop down is controlled by a CSS variable.
	*	Property type: string | number
	*/
	get dropDownWidth() {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownWidth = value;
		}
	}

	/** Determines whether filtering is enabled.
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

	/** Determines the placeholder for the filter input inside the drop down that is only visible when filterable is enabled.
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

	/** Determines the filtering mode of the drop down list.
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

	/** Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items.
	*	Property type: string | null
	*/
	get groupMember() {
		return this.nativeElement ? this.nativeElement.groupMember : undefined;
	}
	set groupMember(value) {
		if (this.nativeElement) {
			this.nativeElement.groupMember = value;
		}
	}

	/** Sets additional helper text below the element. The hint is visible only when the element is focused.
	*	Property type: string
	*/
	get hint() {
		return this.nativeElement ? this.nativeElement.hint : undefined;
	}
	set hint(value) {
		if (this.nativeElement) {
			this.nativeElement.hint = value;
		}
	}

	/** Determines the visibility of the horizontal Scroll bar inside the drop down.
	*	Property type: HorizontalScrollBarVisibility
	*/
	get horizontalScrollBarVisibility() {
		return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
	}
	set horizontalScrollBarVisibility(value) {
		if (this.nativeElement) {
			this.nativeElement.horizontalScrollBarVisibility = value;
		}
	}

	/** Represents the property name of a List item. Determines the value of the input when a ListItem is selected. Usefull in cases where the user wants to display for example the value of an item instead of it's label. By default the label is displayed in the input.
	*	Property type: string
	*/
	get inputMember() {
		return this.nativeElement ? this.nativeElement.inputMember : undefined;
	}
	set inputMember(value) {
		if (this.nativeElement) {
			this.nativeElement.inputMember = value;
		}
	}

	/** IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed.
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

	/** Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the drop down is focused starts the incremental search.
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

	/** Sets the height for all list items. Used only when virtualization is enabled.
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

	/** Determines the item width measuring algorithm.
	*	Property type: ListItemMeasureMode
	*/
	get itemMeasureMode() {
		return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
	}
	set itemMeasureMode(value) {
		if (this.nativeElement) {
			this.nativeElement.itemMeasureMode = value;
		}
	}

	/** A getter that returns an array of all List items inside the drop down.
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

	/** The itemTemplate property is a string that represents the id of an HTMLTemplateElement in the DOM or it's direct reference. It's used to set a customize the content of the list items.
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

	/** Sets a little text label above the element.
	*	Property type: string
	*/
	get label() {
		return this.nativeElement ? this.nativeElement.label : undefined;
	}
	set label(value) {
		if (this.nativeElement) {
			this.nativeElement.label = value;
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

	/** Determines the position of the loading indicator.
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

	/** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
	*	Property type: string
	*/
	get name() {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value) {
		if (this.nativeElement) {
			this.nativeElement.name = value;
		}
	}

	/** Determines whether the popup is opened or not.
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

	/** Determines the element's placeholder, displayed in the element's selection field.
	*	Property type: string
	*/
	get placeholder() {
		return this.nativeElement ? this.nativeElement.placeholder : undefined;
	}
	set placeholder(value) {
		if (this.nativeElement) {
			this.nativeElement.placeholder = value;
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

	/** Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
	*	Property type: boolean
	*/
	get resizeIndicator() {
		return this.nativeElement ? this.nativeElement.resizeIndicator : undefined;
	}
	set resizeIndicator(value) {
		if (this.nativeElement) {
			this.nativeElement.resizeIndicator = value;
		}
	}

	/** Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
	*	Property type: ResizeMode
	*/
	get resizeMode() {
		return this.nativeElement ? this.nativeElement.resizeMode : undefined;
	}
	set resizeMode(value) {
		if (this.nativeElement) {
			this.nativeElement.resizeMode = value;
		}
	}

	/** Determines what will be displayed in the dropDown selection field.
	*	Property type: SelectionDisplayMode
	*/
	get selectionDisplayMode() {
		return this.nativeElement ? this.nativeElement.selectionDisplayMode : undefined;
	}
	set selectionDisplayMode(value) {
		if (this.nativeElement) {
			this.nativeElement.selectionDisplayMode = value;
		}
	}

	/** Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected.
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

	/** Sets or gets elected indexes. Selected values represents the values of the items that should be selected.
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
	*	Property type: ListSelectionMode
	*/
	get selectionMode() {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Determines whether the items are sorted alphabetically or not
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

	/** Determines sorting direction - ascending(asc) or descending(desc)
	*	Property type: string
	*/
	get sortDirection() {
		return this.nativeElement ? this.nativeElement.sortDirection : undefined;
	}
	set sortDirection(value) {
		if (this.nativeElement) {
			this.nativeElement.sortDirection = value;
		}
	}

	/** Determines the theme for the element. Themes define the look of the elements.
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

	/** Sets a custom template for the content of the tokens when selectionDisplayMode is set to 'tokens'.
	*	Property type: any
	*/
	get tokenTemplate() {
		return this.nativeElement ? this.nativeElement.tokenTemplate : undefined;
	}
	set tokenTemplate(value) {
		if (this.nativeElement) {
			this.nativeElement.tokenTemplate = value;
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

	/** Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[].
	*	Property type: any
	*/
	get value() {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items.
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

	/** Determines the visibility of the vertical scroll bar.
	*	Property type: VerticalScrollBarVisibility
	*/
	get verticalScrollBarVisibility() {
		return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
	}
	set verticalScrollBarVisibility(value) {
		if (this.nativeElement) {
			this.nativeElement.verticalScrollBarVisibility = value;
		}
	}

	/** Determines weather or not Virtualization is used. Virtualization allows a huge amount of items to be loaded to the drop down while preserving the performance. For example a milion items can be loaded.
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
		return ["animation","autoCloseDelay","dataSource","disabled","displayLoadingIndicator","displayMember","dropDownAppendTo","dropDownButtonPosition","dropDownHeight","dropDownMaxHeight","dropDownMaxWidth","dropDownMinHeight","dropDownMinWidth","dropDownOpenMode","dropDownOverlay","dropDownPlaceholder","dropDownPosition","dropDownWidth","filterable","filterInputPlaceholder","filterMode","grouped","groupMember","hint","horizontalScrollBarVisibility","inputMember","incrementalSearchDelay","incrementalSearchMode","itemHeight","itemMeasureMode","items","itemTemplate","label","loadingIndicatorPlaceholder","loadingIndicatorPosition","locale","localizeFormatFunction","messages","name","opened","placeholder","readonly","rightToLeft","resizeIndicator","resizeMode","selectionDisplayMode","selectedIndexes","selectedValues","selectionMode","sorted","sortDirection","theme","tokenTemplate","unfocusable","value","valueMember","verticalScrollBarVisibility","virtualized"];
	}
	/**  This event is triggered when user clicks on the action button. The action button is only visible when dropDownOpenMode is set to 'dropDownbutton'.
	*  @param event. The custom event. 	*/
	_onActionButtonClick = null;	get onActionButtonClick() {
		return this._onActionButtonClick;
	}
	set onActionButtonClick(value) {
		this._onActionButtonClick = value;
	}
	/**  This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
	*   addedItems - An array of List items that have been selected.
	*   disabled - A flag indicating whether or not the item that caused the change event is disabled.
	*   index - The index of the List item that triggered the event.
	*   label - The label of the List item that triggered the event.
	*   removedItems - An array of List items that have been unselected before the event was fired.
	*   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
	*   value - The value of the List item that triggered the event.
	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when the drop down list is closed.
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when the drop down list is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}
	/**  This event is triggered when user clicks on the drop down button.
	*  @param event. The custom event. 	*/
	_onDropDownButtonClick = null;	get onDropDownButtonClick() {
		return this._onDropDownButtonClick;
	}
	set onDropDownButtonClick(value) {
		this._onDropDownButtonClick = value;
	}
	/**  This event is triggered when an item is clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
	*   disabled - Indicates whether the List item that was clicked is disabled or not.
	*   index - Indicates the index of the List item that was clicked.
	*   label - The label of the List item that was clicked.
	*   selected - Indicates whether the List item that was clicked is selected or not.
	*   value - The value of the List item that was clicked.
	*/
	_onItemClick = null;	get onItemClick() {
		return this._onItemClick;
	}
	set onItemClick(value) {
		this._onItemClick = value;
	}
	/**  This event is triggered when the drop down list is opened.
	*  @param event. The custom event. 	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered when the drop down list is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	_onOpening = null;	get onOpening() {
		return this._onOpening;
	}
	set onOpening(value) {
		this._onOpening = value;
	}
	/**  This event is triggered when user starts resizing the drop down.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position)
	*   position - An object containing the current left and top positions of the drop down.
	*/
	_onResizeStart = null;	get onResizeStart() {
		return this._onResizeStart;
	}
	set onResizeStart(value) {
		this._onResizeStart = value;
	}
	/**  This event is triggered when the resizing of the drop down is finished.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position)
	*   position - An object containing the current left and top positions of the drop down.
	*/
	_onResizeEnd = null;	get onResizeEnd() {
		return this._onResizeEnd;
	}
	set onResizeEnd(value) {
		this._onResizeEnd = value;
	}
	/**  This event is triggered when the user scrolls to the end of the dropDown list.
	*  @param event. The custom event. 	*/
	_onScrollBottomReached = null;	get onScrollBottomReached() {
		return this._onScrollBottomReached;
	}
	set onScrollBottomReached(value) {
		this._onScrollBottomReached = value;
	}
	/**  This event is triggered when the user scrolls to the start of the dropDown list.
	*  @param event. The custom event. 	*/
	_onScrollTopReached = null;	get onScrollTopReached() {
		return this._onScrollTopReached;
	}
	set onScrollTopReached(value) {
		this._onScrollTopReached = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onActionButtonClick","onChange","onClose","onClosing","onDropDownButtonClick","onItemClick","onOpen","onOpening","onResizeStart","onResizeEnd","onScrollBottomReached","onScrollTopReached"];
	}
	/** Appends a ListItem to the end of the list of items inside element. 
	* @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
	* @returns {Node}
  */
	async appendChild(node) {
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

	/** Removes all items from the drop down list. 
	*/
    clearItems(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearItems();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearItems();
            });
        }
    }

	/** Unselects all items. 
	*/
    clearSelection(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }

	/** Closes the dropDown list. 
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

	/** Ensures the desired item is visible by scrolling to it. 
	* @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
	*/
    ensureVisible(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.ensureVisible(item);
            });
        }
    }

	/** Returns an item instance from the dropDown list. 
	* @param {string} value. The value of an item from the drop down list.
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

	/** Inserts a new item at a specified position. 
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

	/** Inserts a new ListItem before another in the list. 
	* @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
	* @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
	* @returns {Node}
  */
	async insertBefore(node, referenceNode) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.insertBefore(node, referenceNode);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Opens the dropDown list. 
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

	/** Removes an item at a specified position. 
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

	/** Removes a ListItem from the list of items inside element. 
	* @param {Node} node. A ListItem element that is part of the list of items inside the element.
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

	/** Selects an item from the dropDown list.  
	* @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
	*/
    select(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(item);
            });
        }
    }

	/** Unselects an item from the dropDown list.  
	* @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
	*/
    unselect(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(item);
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
		
		that.nativeElement.whenRenderedCallbacks = [];
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-drop-down-list", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default DropDownList;
