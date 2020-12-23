import React from "react";
/**
 FilterBuilder allows you to dynamically build filters.
*/
export class FilterBuilder extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'FilterBuilder' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Adds more operations, that can be used in the filter bilder's conditions structure.
	*	Property type: {name: string, caption: string, icon: string}[]
	*/
	get customOperations() {
		return this.nativeElement ? this.nativeElement.customOperations : undefined;
	}
	set customOperations(value) {
		if (this.nativeElement) {
			this.nativeElement.customOperations = value;
		}
	}

	/** Enables or disables the context menu.
	*	Property type: boolean
	*/
	get disableContextMenu() {
		return this.nativeElement ? this.nativeElement.disableContextMenu : undefined;
	}
	set disableContextMenu(value) {
		if (this.nativeElement) {
			this.nativeElement.disableContextMenu = value;
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

	/** Array with filtered fields and their settings.
	*	Property type: any
	*/
	get fields() {
		return this.nativeElement ? this.nativeElement.fields : undefined;
	}
	set fields(value) {
		if (this.nativeElement) {
			this.nativeElement.fields = value;
		}
	}

	/** Sets or gets the format string of the editor of fields with type 'date'.
	*	Property type: string
	*/
	get formatStringDate() {
		return this.nativeElement ? this.nativeElement.formatStringDate : undefined;
	}
	set formatStringDate(value) {
		if (this.nativeElement) {
			this.nativeElement.formatStringDate = value;
		}
	}

	/** Sets or gets the format string of the editor of fields with type 'datetime'.
	*	Property type: string
	*/
	get formatStringDateTime() {
		return this.nativeElement ? this.nativeElement.formatStringDateTime : undefined;
	}
	set formatStringDateTime(value) {
		if (this.nativeElement) {
			this.nativeElement.formatStringDateTime = value;
		}
	}

	/** Sets hint in form of popup message.
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

	/** Defines icon's representatino as characters.
	*	Property type: FilterBuilderIcons
	*/
	get icons() {
		return this.nativeElement ? this.nativeElement.icons : undefined;
	}
	set icons(value) {
		if (this.nativeElement) {
			this.nativeElement.icons = value;
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

	/** Defines maximum number of allowed conditions in the element.
	*	Property type: number | null
	*/
	get maxConditions() {
		return this.nativeElement ? this.nativeElement.maxConditions : undefined;
	}
	set maxConditions(value) {
		if (this.nativeElement) {
			this.nativeElement.maxConditions = value;
		}
	}

	/** Defines maximum number of allowed conditions in group.
	*	Property type: number | null
	*/
	get maxConditionsPerGroup() {
		return this.nativeElement ? this.nativeElement.maxConditionsPerGroup : undefined;
	}
	set maxConditionsPerGroup(value) {
		if (this.nativeElement) {
			this.nativeElement.maxConditionsPerGroup = value;
		}
	}

	/** Defines maximum level of grouping in the FilterBuilder.
	*	Property type: number | null
	*/
	get maxLevel() {
		return this.nativeElement ? this.nativeElement.maxLevel : undefined;
	}
	set maxLevel(value) {
		if (this.nativeElement) {
			this.nativeElement.maxLevel = value;
		}
	}

	/** Defines field names of the filtered element.
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

	/** In restrictedMode set to true, adding of new groups and groups editing by user interaction are denied.
	*	Property type: boolean
	*/
	get restrictedMode() {
		return this.nativeElement ? this.nativeElement.restrictedMode : undefined;
	}
	set restrictedMode(value) {
		if (this.nativeElement) {
			this.nativeElement.restrictedMode = value;
		}
	}

	/** Enables or disables the display of the icons.
	*	Property type: boolean
	*/
	get showIcons() {
		return this.nativeElement ? this.nativeElement.showIcons : undefined;
	}
	set showIcons(value) {
		if (this.nativeElement) {
			this.nativeElement.showIcons = value;
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

	/** The value is represented by multidimensional array. The array contains group operators and conditions. Each group can contain nested structures at multiple levels.
	*	Property type: string[]
	*/
	get value() {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Callback used to format the content of the value fields.
	*	Property type: any
	*/
	get valueFormatFunction() {
		return this.nativeElement ? this.nativeElement.valueFormatFunction : undefined;
	}
	set valueFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.valueFormatFunction = value;
		}
	}

	/** Sets the placeholder text used in the condition's value box in case the value is not set.
	*	Property type: string
	*/
	get valuePlaceholder() {
		return this.nativeElement ? this.nativeElement.valuePlaceholder : undefined;
	}
	set valuePlaceholder(value) {
		if (this.nativeElement) {
			this.nativeElement.valuePlaceholder = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","customOperations","disableContextMenu","disabled","fields","formatStringDate","formatStringDateTime","hint","icons","locale","localizeFormatFunction","maxConditions","maxConditionsPerGroup","maxLevel","messages","readonly","restrictedMode","showIcons","theme","unfocusable","value","valueFormatFunction","valuePlaceholder"];
	}
	/**  This event is triggered when the element's value is changed.
	*  @param event. The custom event. 	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when an editor is closed.
	*  @param event. The custom event. 	*/
	_onEditorClose = null;	get onEditorClose() {
		return this._onEditorClose;
	}
	set onEditorClose(value) {
		this._onEditorClose = value;
	}
	/**  This event is triggered when an editor starts to close.
	*  @param event. The custom event. 	*/
	_onEditorClosing = null;	get onEditorClosing() {
		return this._onEditorClosing;
	}
	set onEditorClosing(value) {
		this._onEditorClosing = value;
	}
	/**  This event is triggered when an editor is opened.
	*  @param event. The custom event. 	*/
	_onEditorOpen = null;	get onEditorOpen() {
		return this._onEditorOpen;
	}
	set onEditorOpen(value) {
		this._onEditorOpen = value;
	}
	/**  This event is triggered when an editor starts to open.
	*  @param event. The custom event. 	*/
	_onEditorOpening = null;	get onEditorOpening() {
		return this._onEditorOpening;
	}
	set onEditorOpening(value) {
		this._onEditorOpening = value;
	}
	/**  This event is triggered when some of the filterbuilder's building blocks is clicked.
	*  @param event. The custom event. 	*/
	_onItemClick = null;	get onItemClick() {
		return this._onItemClick;
	}
	set onItemClick(value) {
		this._onItemClick = value;
	}
	/**  This event is triggered when the built-in menu is opened. If the disableContextMenu property is set to true this event is not fired.
	*  @param event. The custom event. 	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered when the built-in menu starts to open. If the disableContextMenu property is set to true this event is not fired.
	*  @param event. The custom event. 	*/
	_onOpening = null;	get onOpening() {
		return this._onOpening;
	}
	set onOpening(value) {
		this._onOpening = value;
	}
	/**  This event is triggered when the built-in menu is closed. If the disableContextMenu property is set to true this event is not fired.
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when the built-in menu  starts to close. If the disableContextMenu property is set to true this event is not fired.
	*  @param event. The custom event. 	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onChange","onEditorClose","onEditorClosing","onEditorOpen","onEditorOpening","onItemClick","onOpen","onOpening","onClose","onClosing"];
	}
	/** Adds new condition in particular group.  
	* @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this condition.
	* @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
	*/
    addCondition(parentGroup, data){
        if (this.nativeElement.isRendered) {
            this.nativeElement.addCondition(parentGroup, data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addCondition(parentGroup, data);
            });
        }
    }

	/** Adds new group in particular parent group. 
	* @param {string | HTMLElement} parentGroup. A string, representing the id of the item or an HTML Element referencing this group.
	* @param {string} data. A string, representing the group operator.
	*/
    addGroup(parentGroup, data){
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(parentGroup, data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addGroup(parentGroup, data);
            });
        }
    }

	/** Removes condition. 
	* @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this condition.
	*/
    removeCondition(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeCondition(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeCondition(item);
            });
        }
    }

	/** Deletes group and all of  it's children 
	* @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
	*/
    removeGroup(item){
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(item);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeGroup(item);
            });
        }
    }

	/** Returns a string representation of the filter builder's value. 
	* @param {boolean} useLabels?. Controls the way of string representation. In mode without labels the value object is stringified only.
	* @returns {string}
  */
	async toString(useLabels) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.toString(useLabels);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Updates condition. 
	* @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing targeted condition.
	* @param {any[]} data. An array, representing condition. Condition's element's role is related to their position in the condition's array. At index 0 - field name, index 1 - condition's opertor, index 2 - condition's value.
	*/
    updateCondition(item, data){
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateCondition(item, data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateCondition(item, data);
            });
        }
    }

	/** Updates group 
	* @param {string | HTMLElement} item. A string, representing the id of the item or an HTML Element referencing this group.
	* @param {string} data. A string, representing the group operator.
	*/
    updateGroup(item, data){
        if (this.nativeElement.isRendered) {
            this.nativeElement.updateGroup(item, data);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.updateGroup(item, data);
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
			React.createElement("smart-filter-builder", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default FilterBuilder;
