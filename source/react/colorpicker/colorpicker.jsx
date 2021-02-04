import React from "react";
/**
 ColorPicker is an advanced color picking component with Pallete, Spectrum Grid, Radial Palette and Excel-like options. Users can input colors either by a dropdown or input field.
*/
export class ColorPicker extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'ColorPicker' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** This property allows editting of colors via the input inside the element's action section. Accepts values in all supported types. This property works when 'valueDisplayMode' is set to default or colorCode.
	*	Property type: boolean
	*/
	get editable() {
		return this.nativeElement ? this.nativeElement.editable : undefined;
	}
	set editable(value) {
		if (this.nativeElement) {
			this.nativeElement.editable = value;
		}
	}

	/** Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'.
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

	/** Specifies how the user applies the selected value. In 'instantly' mode the value is applied immediately when color is selected. In 'useButtons' mode are shown 'Ok' and 'Cancel' buttons at the botom of the colorpicker's drop down. Only click on 'OK' button applies the value.
	*	Property type: ColorApplyValueMode
	*/
	get applyValueMode() {
		return this.nativeElement ? this.nativeElement.applyValueMode : undefined;
	}
	set applyValueMode(value) {
		if (this.nativeElement) {
			this.nativeElement.applyValueMode = value;
		}
	}

	/** Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'.
	*	Property type: number
	*/
	get columnCount() {
		return this.nativeElement ? this.nativeElement.columnCount : undefined;
	}
	set columnCount(value) {
		if (this.nativeElement) {
			this.nativeElement.columnCount = value;
		}
	}

	/** Determines the colors that will be displayed and their layout.
	*	Property type: ColorDisplayMode
	*/
	get displayMode() {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value) {
		if (this.nativeElement) {
			this.nativeElement.displayMode = value;
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

	/** By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality.
	*	Property type: boolean
	*/
	get disableUndo() {
		return this.nativeElement ? this.nativeElement.disableUndo : undefined;
	}
	set disableUndo(value) {
		if (this.nativeElement) {
			this.nativeElement.disableUndo = value;
		}
	}

	/** Sets the parent container of the dropDown (the popup). The expected value is CSS Selector, ID or 'body'. Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown. Example: 'body'.
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

	/** Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
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

	/** Sets the height of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn not support CSS variables.
	*	Property type: string
	*/
	get dropDownHeight() {
		return this.nativeElement ? this.nativeElement.dropDownHeight : undefined;
	}
	set dropDownHeight(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownHeight = value;
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

	/** Sets the width of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
	*	Property type: string
	*/
	get dropDownWidth() {
		return this.nativeElement ? this.nativeElement.dropDownWidth : undefined;
	}
	set dropDownWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.dropDownWidth = value;
		}
	}

	/** Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal'
	*	Property type: boolean
	*/
	get editAlphaChannel() {
		return this.nativeElement ? this.nativeElement.editAlphaChannel : undefined;
	}
	set editAlphaChannel(value) {
		if (this.nativeElement) {
			this.nativeElement.editAlphaChannel = value;
		}
	}

	/** Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'.
	*	Property type: boolean
	*/
	get enableCustomColors() {
		return this.nativeElement ? this.nativeElement.enableCustomColors : undefined;
	}
	set enableCustomColors(value) {
		if (this.nativeElement) {
			this.nativeElement.enableCustomColors = value;
		}
	}

	/** Defines an Array of colors that will be used as the Theme Colors in the corresponding section of displayMode: 'grid' and 'default'.
	*	Property type: string[] | null
	*/
	get gridThemeColors() {
		return this.nativeElement ? this.nativeElement.gridThemeColors : undefined;
	}
	set gridThemeColors(value) {
		if (this.nativeElement) {
			this.nativeElement.gridThemeColors = value;
		}
	}

	/** Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'grid' and 'default'.
	*	Property type: string[] | null
	*/
	get gridShadeColors() {
		return this.nativeElement ? this.nativeElement.gridShadeColors : undefined;
	}
	set gridShadeColors(value) {
		if (this.nativeElement) {
			this.nativeElement.gridShadeColors = value;
		}
	}

	/** Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'grid' and 'default'.
	*	Property type: string[] | null
	*/
	get gridStandardColors() {
		return this.nativeElement ? this.nativeElement.gridStandardColors : undefined;
	}
	set gridStandardColors(value) {
		if (this.nativeElement) {
			this.nativeElement.gridStandardColors = value;
		}
	}

	/** Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default.
	*	Property type: boolean
	*/
	get hideAlphaEditor() {
		return this.nativeElement ? this.nativeElement.hideAlphaEditor : undefined;
	}
	set hideAlphaEditor(value) {
		if (this.nativeElement) {
			this.nativeElement.hideAlphaEditor = value;
		}
	}

	/** Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors.
	*	Property type: string[]
	*/
	get hideContentToFit() {
		return this.nativeElement ? this.nativeElement.hideContentToFit : undefined;
	}
	set hideContentToFit(value) {
		if (this.nativeElement) {
			this.nativeElement.hideContentToFit = value;
		}
	}

	/** HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it.
	*	Property type: boolean
	*/
	get hideHEXEditor() {
		return this.nativeElement ? this.nativeElement.hideHEXEditor : undefined;
	}
	set hideHEXEditor(value) {
		if (this.nativeElement) {
			this.nativeElement.hideHEXEditor = value;
		}
	}

	/** Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes.
	*	Property type: boolean
	*/
	get hidePreviewContainer() {
		return this.nativeElement ? this.nativeElement.hidePreviewContainer : undefined;
	}
	set hidePreviewContainer(value) {
		if (this.nativeElement) {
			this.nativeElement.hidePreviewContainer = value;
		}
	}

	/** Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color.
	*	Property type: boolean
	*/
	get hideRGBEditor() {
		return this.nativeElement ? this.nativeElement.hideRGBEditor : undefined;
	}
	set hideRGBEditor(value) {
		if (this.nativeElement) {
			this.nativeElement.hideRGBEditor = value;
		}
	}

	/** Sets additional helper text below the element that is only visible when the element is focused.
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

	/** Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes.
	*	Property type: boolean
	*/
	get inverted() {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value) {
		if (this.nativeElement) {
			this.nativeElement.inverted = value;
		}
	}

	/** Sets a label above the element.
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

	/** Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes.
	*	Property type: ColorPalette
	*/
	get palette() {
		return this.nativeElement ? this.nativeElement.palette : undefined;
	}
	set palette(value) {
		if (this.nativeElement) {
			this.nativeElement.palette = value;
		}
	}

	/** Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc).
	*	Property type: {name: string, value: string}[] | string[] | null
	*/
	get paletteColors() {
		return this.nativeElement ? this.nativeElement.paletteColors : undefined;
	}
	set paletteColors(value) {
		if (this.nativeElement) {
			this.nativeElement.paletteColors = value;
		}
	}

	/** Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColor property is true.
	*	Property type: string[] | null
	*/
	get paletteCustomColors() {
		return this.nativeElement ? this.nativeElement.paletteCustomColors : undefined;
	}
	set paletteCustomColors(value) {
		if (this.nativeElement) {
			this.nativeElement.paletteCustomColors = value;
		}
	}

	/** The placeholder is shown when the value is not set yet or is set to null.
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

	/** Determines how the tooltip displays the value of the color that is being hovered.
	*	Property type: ColorTooltipDisplayMode
	*/
	get tooltipDisplayMode() {
		return this.nativeElement ? this.nativeElement.tooltipDisplayMode : undefined;
	}
	set tooltipDisplayMode(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltipDisplayMode = value;
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

	/** Represents the value of the selected color as the value of the element.
	*	Property type: string
	*/
	get value() {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
	*	Property type: ColorValueFormat
	*/
	get valueFormat() {
		return this.nativeElement ? this.nativeElement.valueFormat : undefined;
	}
	set valueFormat(value) {
		if (this.nativeElement) {
			this.nativeElement.valueFormat = value;
		}
	}

	/** Determines which elements will be displayed in color picker's action section.
	*	Property type: ColorValueDisplayMode
	*/
	get valueDisplayMode() {
		return this.nativeElement ? this.nativeElement.valueDisplayMode : undefined;
	}
	set valueDisplayMode(value) {
		if (this.nativeElement) {
			this.nativeElement.valueDisplayMode = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","editable","autoCloseDelay","applyValueMode","columnCount","displayMode","disabled","disableUndo","dropDownAppendTo","dropDownOpenMode","dropDownButtonPosition","dropDownPosition","dropDownHeight","dropDownOverlay","dropDownWidth","editAlphaChannel","enableCustomColors","gridThemeColors","gridShadeColors","gridStandardColors","hideAlphaEditor","hideContentToFit","hideHEXEditor","hidePreviewContainer","hideRGBEditor","hint","inverted","label","locale","localizeFormatFunction","messages","name","opened","palette","paletteColors","paletteCustomColors","placeholder","readonly","resizeIndicator","resizeMode","rightToLeft","theme","tooltipDisplayMode","unfocusable","value","valueFormat","valueDisplayMode"];
	}
	/**  This event is triggered when user clicks on the action button. 'Ok' button is visible only when applyValueMode is set to useButtons.
	*  @param event. The custom event. 	*/
	_onActionButtonClick = null;	get onActionButtonClick() {
		return this._onActionButtonClick;
	}
	set onActionButtonClick(value) {
		this._onActionButtonClick = value;
	}
	/**  This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
	*  @param event. The custom event. 	*/
	_onCancelButtonClick = null;	get onCancelButtonClick() {
		return this._onCancelButtonClick;
	}
	set onCancelButtonClick(value) {
		this._onCancelButtonClick = value;
	}
	/**  This event is triggered when the color value is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previously selected color.
	*   value - The new selected color.
	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when the drop down is closed.
	*  @param event. The custom event. 	*/
	_onClose = null;	get onClose() {
		return this._onClose;
	}
	set onClose(value) {
		this._onClose = value;
	}
	/**  This event is triggered when the drop down is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	*  @param event. The custom event. 	*/
	_onClosing = null;	get onClosing() {
		return this._onClosing;
	}
	set onClosing(value) {
		this._onClosing = value;
	}
	/**  This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value)
	*   value - A boolean that indicates whether the custom color view is shown or not.
	*/
	_onCustomColorSelection = null;	get onCustomColorSelection() {
		return this._onCustomColorSelection;
	}
	set onCustomColorSelection(value) {
		this._onCustomColorSelection = value;
	}
	/**  This event is triggered when user clicks on the drop down button.
	*  @param event. The custom event. 	*/
	_onDropDownButtonClick = null;	get onDropDownButtonClick() {
		return this._onDropDownButtonClick;
	}
	set onDropDownButtonClick(value) {
		this._onDropDownButtonClick = value;
	}
	/**  This event is triggered when the ok button is clicked.
	*  @param event. The custom event. 	*/
	_onOkButtonClick = null;	get onOkButtonClick() {
		return this._onOkButtonClick;
	}
	set onOkButtonClick(value) {
		this._onOkButtonClick = value;
	}
	/**  This event is triggered when the drop down is opened.
	*  @param event. The custom event. 	*/
	_onOpen = null;	get onOpen() {
		return this._onOpen;
	}
	set onOpen(value) {
		this._onOpen = value;
	}
	/**  This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
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

	// Gets the events of the React component.
	get eventListeners() {
		return ["onActionButtonClick","onCancelButtonClick","onChange","onClose","onClosing","onCustomColorSelection","onDropDownButtonClick","onOkButtonClick","onOpen","onOpening","onResizeStart","onResizeEnd"];
	}
	/** Opens the drop down of the color picker. 
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

	/** Closes the drop down of the color picker. 
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
			React.createElement("smart-color-picker", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default ColorPicker;
