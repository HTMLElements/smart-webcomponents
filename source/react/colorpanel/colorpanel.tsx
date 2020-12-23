import React from "react";
import { ColorPanelProperties } from "./../../index";
import { Animation, ColorApplyValueMode, ColorDisplayMode, ColorPalette, ColorTooltipDisplayMode, ColorValueFormat} from './../../index';
export { ColorPanelProperties } from "./../../index";
export { Animation, ColorApplyValueMode, ColorDisplayMode, ColorPalette, ColorTooltipDisplayMode, ColorValueFormat} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface ColorPanelProps extends ColorPanelProperties {
    className?: string;
    style?: React.CSSProperties;

	onChange?: ((event?: Event) => void) | undefined;
	onCancelButtonClick?: ((event?: Event) => void) | undefined;
	onCustomColorSelection?: ((event?: Event) => void) | undefined;
	onOkButtonClick?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 ColorPanel is an advanced color chooser with Pallete, Spectrum Grid, Radial Palette and Excel-like options.
*/
export class ColorPanel extends React.Component<React.HTMLAttributes<Element> & ColorPanelProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'ColorPanel' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

	/** Specifies how the value is applied.
	*	Property type: ColorApplyValueMode
	*/
	get applyValueMode(): ColorApplyValueMode  {
		return this.nativeElement ? this.nativeElement.applyValueMode : undefined;
	}
	set applyValueMode(value: ColorApplyValueMode) {
		if (this.nativeElement) {
			this.nativeElement.applyValueMode = value;
		}
	}

	/** Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'.
	*	Property type: number
	*/
	get columnCount(): number  {
		return this.nativeElement ? this.nativeElement.columnCount : undefined;
	}
	set columnCount(value: number) {
		if (this.nativeElement) {
			this.nativeElement.columnCount = value;
		}
	}

	/** Enables or disables the element. Disabled elements can not be interacted with.
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

	/** Determines the colors that will be displayed and their layout.
	*	Property type: ColorDisplayMode
	*/
	get displayMode(): ColorDisplayMode  {
		return this.nativeElement ? this.nativeElement.displayMode : undefined;
	}
	set displayMode(value: ColorDisplayMode) {
		if (this.nativeElement) {
			this.nativeElement.displayMode = value;
		}
	}

	/** By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality.
	*	Property type: boolean
	*/
	get disableUndo(): boolean  {
		return this.nativeElement ? this.nativeElement.disableUndo : undefined;
	}
	set disableUndo(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.disableUndo = value;
		}
	}

	/** Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal'
	*	Property type: boolean
	*/
	get editAlphaChannel(): boolean  {
		return this.nativeElement ? this.nativeElement.editAlphaChannel : undefined;
	}
	set editAlphaChannel(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.editAlphaChannel = value;
		}
	}

	/** Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'.
	*	Property type: boolean
	*/
	get enableCustomColors(): boolean  {
		return this.nativeElement ? this.nativeElement.enableCustomColors : undefined;
	}
	set enableCustomColors(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.enableCustomColors = value;
		}
	}

	/** Defines an Array of colors that will be used as the Theme Colors in the corresponding section in displayMode: 'default'.
	*	Property type: string[] | null
	*/
	get gridThemeColors(): string[] | null  {
		return this.nativeElement ? this.nativeElement.gridThemeColors : undefined;
	}
	set gridThemeColors(value: string[] | null) {
		if (this.nativeElement) {
			this.nativeElement.gridThemeColors = value;
		}
	}

	/** Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'default'.
	*	Property type: string[] | null
	*/
	get gridShadeColors(): string[] | null  {
		return this.nativeElement ? this.nativeElement.gridShadeColors : undefined;
	}
	set gridShadeColors(value: string[] | null) {
		if (this.nativeElement) {
			this.nativeElement.gridShadeColors = value;
		}
	}

	/** Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'default'.
	*	Property type: [] | null
	*/
	get gridStandardColors(): [] | null  {
		return this.nativeElement ? this.nativeElement.gridStandardColors : undefined;
	}
	set gridStandardColors(value: [] | null) {
		if (this.nativeElement) {
			this.nativeElement.gridStandardColors = value;
		}
	}

	/** Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default.
	*	Property type: boolean
	*/
	get hideAlphaEditor(): boolean  {
		return this.nativeElement ? this.nativeElement.hideAlphaEditor : undefined;
	}
	set hideAlphaEditor(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideAlphaEditor = value;
		}
	}

	/** Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors.
	*	Property type: string[]
	*/
	get hideContentToFit(): string[]  {
		return this.nativeElement ? this.nativeElement.hideContentToFit : undefined;
	}
	set hideContentToFit(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.hideContentToFit = value;
		}
	}

	/** HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it.
	*	Property type: boolean
	*/
	get hideHEXEditor(): boolean  {
		return this.nativeElement ? this.nativeElement.hideHEXEditor : undefined;
	}
	set hideHEXEditor(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideHEXEditor = value;
		}
	}

	/** Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes.
	*	Property type: boolean
	*/
	get hidePreviewContainer(): boolean  {
		return this.nativeElement ? this.nativeElement.hidePreviewContainer : undefined;
	}
	set hidePreviewContainer(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hidePreviewContainer = value;
		}
	}

	/** Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color.
	*	Property type: boolean
	*/
	get hideRGBEditor(): boolean  {
		return this.nativeElement ? this.nativeElement.hideRGBEditor : undefined;
	}
	set hideRGBEditor(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.hideRGBEditor = value;
		}
	}

	/** Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes.
	*	Property type: boolean
	*/
	get inverted(): boolean  {
		return this.nativeElement ? this.nativeElement.inverted : undefined;
	}
	set inverted(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.inverted = value;
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

	/** Callback used to customize the format of the messages that are returned from the Localization Module.
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

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
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

	/** Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
	*	Property type: string
	*/
	get name(): string  {
		return this.nativeElement ? this.nativeElement.name : undefined;
	}
	set name(value: string) {
		if (this.nativeElement) {
			this.nativeElement.name = value;
		}
	}

	/** Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes.
	*	Property type: ColorPalette
	*/
	get palette(): ColorPalette  {
		return this.nativeElement ? this.nativeElement.palette : undefined;
	}
	set palette(value: ColorPalette) {
		if (this.nativeElement) {
			this.nativeElement.palette = value;
		}
	}

	/** Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc).
	*	Property type: any
	*/
	get paletteColors(): any  {
		return this.nativeElement ? this.nativeElement.paletteColors : undefined;
	}
	set paletteColors(value: any) {
		if (this.nativeElement) {
			this.nativeElement.paletteColors = value;
		}
	}

	/** Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColors property is true.
	*	Property type: string[] | null
	*/
	get paletteCustomColors(): string[] | null  {
		return this.nativeElement ? this.nativeElement.paletteCustomColors : undefined;
	}
	set paletteCustomColors(value: string[] | null) {
		if (this.nativeElement) {
			this.nativeElement.paletteCustomColors = value;
		}
	}

	/** If the element is readonly, users cannot interact with it.
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

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
	*	Property type: boolean
	*/
	get rightToLeft(): boolean  {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
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

	/** Determines how the tooltip displays the value of the color that is being hovered.
	*	Property type: ColorTooltipDisplayMode
	*/
	get tooltipDisplayMode(): ColorTooltipDisplayMode  {
		return this.nativeElement ? this.nativeElement.tooltipDisplayMode : undefined;
	}
	set tooltipDisplayMode(value: ColorTooltipDisplayMode) {
		if (this.nativeElement) {
			this.nativeElement.tooltipDisplayMode = value;
		}
	}

	/** Represents the value of the selected color.
	*	Property type: string
	*/
	get value(): string  {
		return this.nativeElement ? this.nativeElement.value : undefined;
	}
	set value(value: string) {
		if (this.nativeElement) {
			this.nativeElement.value = value;
		}
	}

	/** Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
	*	Property type: ColorValueFormat
	*/
	get valueFormat(): ColorValueFormat  {
		return this.nativeElement ? this.nativeElement.valueFormat : undefined;
	}
	set valueFormat(value: ColorValueFormat) {
		if (this.nativeElement) {
			this.nativeElement.valueFormat = value;
		}
	}

	/** Determines the value member for the color when the paletteColors consists of objects. Usefull in cases where the colors are loaded as objects in an array and the attribute that holds the color key is not named 'value'.
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


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","applyValueMode","columnCount","disabled","displayMode","disableUndo","editAlphaChannel","enableCustomColors","gridThemeColors","gridShadeColors","gridStandardColors","hideAlphaEditor","hideContentToFit","hideHEXEditor","hidePreviewContainer","hideRGBEditor","inverted","locale","localizeFormatFunction","messages","name","palette","paletteColors","paletteCustomColors","readonly","rightToLeft","theme","tooltipDisplayMode","value","valueFormat","valueMember","unfocusable"];
	}
	/**  This event is triggered when the color is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	oldValue, 	value)
	*   oldValue - The previously selected color.
	*   value - The new selected color.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when applyValueMode is set to useButtons.
	*  @param event. The custom event. 	*/
	onCancelButtonClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when enableCustomColors property is true.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	value)
	*   value - A boolean that indicates whether the custom color view is shown or not.
	*/
	onCustomColorSelection?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the ok button is clicked. 'Ok' button is visible only when applyValueMode is set to useButtons.
	*  @param event. The custom event. 	*/
	onOkButtonClick?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onChange","onCancelButtonClick","onCustomColorSelection","onOkButtonClick","onCreate","onReady"];
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
		
		that.nativeElement.whenRenderedCallbacks = [];
		
		for(let i = 0; i < that.eventListeners.length; i++){
			const eventName = that.eventListeners[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-color-panel", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default ColorPanel;
