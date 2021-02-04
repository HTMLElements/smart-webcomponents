import React from "react";
import { AccordionItem } from './accordionitem';
export { AccordionItem } from './accordionitem';
/**
 Accordion organizes content within collapsable items.
*/
export class Accordion extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Accordion' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Determines the data source that will be loaded to the Accordion.
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

	/** Sets or gets the expanded item indexes. Using this property items can be expanded by passing in their indexes. The number of expanded items is limited by the expandMode.
	*	Property type: number[]
	*/
	get expandedIndexes() {
		return this.nativeElement ? this.nativeElement.expandedIndexes : undefined;
	}
	set expandedIndexes(value) {
		if (this.nativeElement) {
			this.nativeElement.expandedIndexes = value;
		}
	}

	/** Sets or gets the expand mode. Expand mode determines how the items will expand or collapse.
	*	Property type: AccordionExpandMode
	*/
	get expandMode() {
		return this.nativeElement ? this.nativeElement.expandMode : undefined;
	}
	set expandMode(value) {
		if (this.nativeElement) {
			this.nativeElement.expandMode = value;
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

	/** Determines if the element is readonly or not. If the element true, users cannot interact with it.
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

	/** Enables or disables accordion reordering.
	*	Property type: boolean
	*/
	get reorder() {
		return this.nativeElement ? this.nativeElement.reorder : undefined;
	}
	set reorder(value) {
		if (this.nativeElement) {
			this.nativeElement.reorder = value;
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

	/** Determines whether the element can be focused or not.
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
		return ["animation","dataSource","disabled","expandedIndexes","expandMode","locale","localizeFormatFunction","messages","readonly","reorder","rightToLeft","theme","unfocusable"];
	}
	/**  This event is triggered when an item is collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item
	*/
	_onCollapse = null;	get onCollapse() {
		return this._onCollapse;
	}
	set onCollapse(value) {
		this._onCollapse = value;
	}
	/**  This event is triggered when an item is going to be collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item
	*/
	_onCollapsing = null;	get onCollapsing() {
		return this._onCollapsing;
	}
	set onCollapsing(value) {
		this._onCollapsing = value;
	}
	/**  This event is triggered when a reordering operation is completed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
	*   position - The current top and left position of the item that was dragged.
	*   target - The item that was dragged.
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item.
	*/
	_onDragEnd = null;	get onDragEnd() {
		return this._onDragEnd;
	}
	set onDragEnd(value) {
		this._onDragEnd = value;
	}
	/**  This event is triggered when a reordering operation is started.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
	*   position - The current top and left position of the item that is about to be dragged.
	*   target - The item that is about to be dragged.
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item.
	*/
	_onDragStart = null;	get onDragStart() {
		return this._onDragStart;
	}
	set onDragStart(value) {
		this._onDragStart = value;
	}
	/**  This event is triggered when an item is expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	position, 	target, 	content, 	index, 	label)
	*   position - The current top and left position of the item.
	*   target - The item that was dragged.
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item.
	*/
	_onExpand = null;	get onExpand() {
		return this._onExpand;
	}
	set onExpand(value) {
		this._onExpand = value;
	}
	/**  This event is triggered when an item is going to be expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	content, 	index, 	label)
	*   content - The content of the item.
	*   index - The index of the item.
	*   label - The label of the item
	*/
	_onExpanding = null;	get onExpanding() {
		return this._onExpanding;
	}
	set onExpanding(value) {
		this._onExpanding = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onCollapse","onCollapsing","onDragEnd","onDragStart","onExpand","onExpanding"];
	}
	/** Collapses an item at a specified index. 
	* @param {number} position. The index of the collapsed item.
	*/
    collapse(position){
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapse(position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapse(position);
            });
        }
    }

	/** Expands an item at a specified index. 
	* @param {number} position. The index of the expanded item.
	*/
    expand(position){
        if (this.nativeElement.isRendered) {
            this.nativeElement.expand(position);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expand(position);
            });
        }
    }

	/** Inserts a new item at a specified index. 
	* @param {number} index. The index where the item must be inserted.
	* @param {any} item. An object containing the values for the properties of the new item to be inserted.
	*/
    insert(index, item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.insert(index, item);
            });
        }
    }

	/** Removes an item at a specified index. 
	* @param {number} position. The index of the item to be removed.
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

	/** Updates an item from the element. 
	* @param {number} index. The index of the item to be updated.
	* @param {any} settings. An object containing the values for the properties of the item that will be updated.
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
			React.createElement("smart-accordion", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Accordion;
