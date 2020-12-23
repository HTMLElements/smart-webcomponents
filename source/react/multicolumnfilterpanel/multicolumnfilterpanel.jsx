import React from "react";
/**
 Defines an advanced filter panel used for Grid and CardView filtering.
*/
export class MultiColumnFilterPanel extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'MultiColumnFilterPanel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Sets or gets the position of the close button of multi column filter panel items.
	*	Property type: MultiColumnFilterPanelCloseButtonPosition
	*/
	get closeButtonPosition() {
		return this.nativeElement ? this.nativeElement.closeButtonPosition : undefined;
	}
	set closeButtonPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.closeButtonPosition = value;
		}
	}

	/** Determines the data source that will be loaded to the multi column filter panel.Each member of the dataSource array is an object with the following fields:dataField - the dataField of the column to be grouped.dataType - the data type of the column to be grouped.groupIndex - the group order of columns. If this value is -1, the grouping will not be applied by this column initially.label - the column label to be displayed in the column selection input.icon - a specific class to be applied to the respective item in the column selection input.sortDirection - the sort direction to be applied when grouping. Possible values: 'ascending' and 'descending'.
	*	Property type: {label: string, dataField: string, dataType: string, sortDirection: string, groupIndex: number}[]
	*/
	get dataSource() {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Enables or disables the multi column filter panel.
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

	/** A callback function that can be used to modify the settings of value editors.
	*	Property type: any
	*/
	get editorCallback() {
		return this.nativeElement ? this.nativeElement.editorCallback : undefined;
	}
	set editorCallback(value) {
		if (this.nativeElement) {
			this.nativeElement.editorCallback = value;
		}
	}

	/** Sets or gets the placeholder for the filter value editors.
	*	Property type: string
	*/
	get editorPlaceholder() {
		return this.nativeElement ? this.nativeElement.editorPlaceholder : undefined;
	}
	set editorPlaceholder(value) {
		if (this.nativeElement) {
			this.nativeElement.editorPlaceholder = value;
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

	/** Sets or gets the maximum number of columns to group by. If set to null, there is no limit.
	*	Property type: number
	*/
	get maxLevel() {
		return this.nativeElement ? this.nativeElement.maxLevel : undefined;
	}
	set maxLevel(value) {
		if (this.nativeElement) {
			this.nativeElement.maxLevel = value;
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

	/** Determines the logical operator between the items.
	*	Property type: MultiColumnFilterPanelOperator
	*/
	get operator() {
		return this.nativeElement ? this.nativeElement.operator : undefined;
	}
	set operator(value) {
		if (this.nativeElement) {
			this.nativeElement.operator = value;
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

	/** Sets of gets the initial value of the element.
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


	// Gets the properties of the React component.
	get properties() {
		return ["animation","closeButtonPosition","dataSource","disabled","editorCallback","editorPlaceholder","locale","localizeFormatFunction","maxLevel","messages","operator","readonly","rightToLeft","unfocusable","value"];
	}
	/**  This event is triggered when the "Apply" button is clicked.
	*  @param event. The custom event. 	*/
	_onApply = null;	get onApply() {
		return this._onApply;
	}
	set onApply(value) {
		this._onApply = value;
	}
	/**  This event is triggered when the "Cancel" button is clicked.
	*  @param event. The custom event. 	*/
	_onCancel = null;	get onCancel() {
		return this._onCancel;
	}
	set onCancel(value) {
		this._onCancel = value;
	}
	/**  This event is triggered when the "Collapse all" button is clicked.
	*  @param event. The custom event. 	*/
	_onCollapseAll = null;	get onCollapseAll() {
		return this._onCollapseAll;
	}
	set onCollapseAll(value) {
		this._onCollapseAll = value;
	}
	/**  This event is triggered when the "Expand all" button is clicked.
	*  @param event. The custom event. 	*/
	_onExpandAll = null;	get onExpandAll() {
		return this._onExpandAll;
	}
	set onExpandAll(value) {
		this._onExpandAll = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onApply","onCancel","onCollapseAll","onExpandAll"];
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
			React.createElement("smart-multi-column-filter-panel", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default MultiColumnFilterPanel;
