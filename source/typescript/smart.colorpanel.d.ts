import  {BaseElement, Animation} from "./smart.element"

/**
 ColorPanel is an advanced color chooser with Pallete, Spectrum Grid, Radial Palette and Excel-like options.
*/
export interface ColorPanel extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Specifies how the value is applied.
   * Default value: instantly
   */
  applyValueMode?: ColorApplyValueMode;
  /**
   * Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'.
   * Default value: 8
   */
  columnCount?: number;
  /**
   * Enables or disables the element. Disabled elements can not be interacted with.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines the colors that will be displayed and their layout.
   * Default value: default
   */
  displayMode?: ColorDisplayMode;
  /**
   * By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality.
   * Default value: false
   */
  disableUndo?: boolean;
  /**
   * Allows to edit the alpha(transparency) of the colors via an editor/slider in the following displayModes: 'palette', 'radial', 'hexagonal'
   * Default value: false
   */
  editAlphaChannel?: boolean;
  /**
   * Allows to select a custom color via an editor popup. Custom color selection is available in modes that don't have this option by default, like: 'grid', 'default, 'spectrum grid'.
   * Default value: false
   */
  enableCustomColors?: boolean;
  /**
   * Defines an Array of colors that will be used as the Theme Colors in the corresponding section in displayMode: 'default'.
   * Default value: null
   */
  gridThemeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'default'.
   * Default value: null
   */
  gridShadeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'default'.
   * Default value: null
   */
  gridStandardColors?: [] | null;
  /**
   * Hides the alpha editor. Alpha editor is an input containing the value of the current color opacity. The input is available in the following modes: 'radial', 'palette', 'hexagonal'. The input is only visible if there's enough space. This editor is visible by default.
   * Default value: false
   */
  hideAlphaEditor?: boolean;
  /**
   * Determines which color editors will be hidden first when there's not enough space for all of them to be visible. By default the editors are only visible in 'palette', 'radial' and 'hexagonal' display modes. This property allows to prioritize the visibility of the editors.
   * Default value: RGB,HEX,alpha,previewContainer
   */
  hideContentToFit?: string[];
  /**
   * HEX editor is an input containing the hexadecimal representation of a color. This editor is visible by default. Setting 'hideRGBeditor' to true hides it.
   * Default value: false
   */
  hideHEXEditor?: boolean;
  /**
   * Hides the preview container. Preview container is used to show the currently selected value in 'palette', 'radial' and 'hexagonal' display modes.
   * Default value: false
   */
  hidePreviewContainer?: boolean;
  /**
   * Hides the RGB editor. This editor is a group of three separate inputs for the Red, Green and Blue values of the color.
   * Default value: false
   */
  hideRGBEditor?: boolean;
  /**
   * Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Sets or gets the language. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Callback used to customize the format of the messages that are returned from the Localization Module.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. 
   * Default value:    * {
   *   "en": {
   *     "propertyUnknownType": "'' property is with undefined 'type' member!",
   *     "propertyInvalidValue": "Invalid ''!",
   *     "propertyInvalidValueType": "Invalid ''!",
   *     "methodInvalidValueType": "Invalid ''!",
   *     "methodInvalidArgumentsCount": "Invalid '' argument(s)!",
   *     "methodInvalidReturnType": "Invalid ''!",
   *     "elementNotInDOM": "Element does not exist in DOM! Please, add the element to the DOM, before invoking a method.",
   *     "moduleUndefined": "Module is undefined.",
   *     "missingReference": "'.",
   *     "htmlTemplateNotSuported": ": Web Browser doesn't support HTMLTemplate elements.",
   *     "invalidTemplate": "' property accepts a string that must match the id of an HTMLTemplate element from the DOM.",
   *     "invalidNode": ".",
   *     "redPrefix": "R:",
   *     "greenPrefix": "G:",
   *     "bluePrefix": "B:",
   *     "hexPrefix": "#:",
   *     "alphaPrefix": "Alpha:",
   *     "ok": "OK",
   *     "cancel": "CANCEL",
   *     "customColor": "CUSTOM COLOR ..."
   *   }
   * }
   */
  messages?: any;
  /**
   * Sets or gets the name attribute for the element. Name is used when submiting HTML forms.
   * Default value: ""
   */
  name?: string;
  /**
   * Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes.
   * Default value: default
   */
  palette?: ColorPalette;
  /**
   * Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc).
   * Default value: null
   */
  paletteColors?: any;
  /**
   * Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColors property is true.
   * Default value: null
   */
  paletteCustomColors?: string[] | null;
  /**
   * If the element is readonly, users cannot interact with it.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the theme. Theme defines the look of the element
   * Default value: ""
   */
  theme?: string;
  /**
   * Determines how the tooltip displays the value of the color that is being hovered.
   * Default value: hex
   */
  tooltipDisplayMode?: ColorTooltipDisplayMode;
  /**
   * Represents the value of the selected color.
   * Default value: "null"
   */
  value?: string;
  /**
   * Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
   * Default value: default
   */
  valueFormat?: ColorValueFormat;
  /**
   * Determines the value member for the color when the paletteColors consists of objects. Usefull in cases where the colors are loaded as objects in an array and the attribute that holds the color key is not named 'value'.
   * Default value: "null"
   */
  valueMember?: string;
  /**
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /** 
   * This event is triggered when the color is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previously selected color.
   *  value - The new selected color.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
	* @param event. The custom event.    */
  onCancelButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when <strong>enableCustomColors</strong> property is true.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A boolean that indicates whether the custom color view is shown or not.
   */
  onCustomColorSelection?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the ok button is clicked. 'Ok' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
	* @param event. The custom event.    */
  onOkButtonClick?: ((this: any, ev: Event) => any) | null;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-color-panel"): ColorPanel;
			querySelector(selectors: "smart-color-panel"): ColorPanel | null;	
			querySelectorAll(selectors: "smart-color-panel"): NodeListOf<ColorPanel>;
			getElementsByTagName(qualifiedName: "smart-color-panel"): HTMLCollectionOf<ColorPanel>;
			getElementsByName(elementName: "smart-color-panel"): NodeListOf<ColorPanel>;	
    }
}

/**Specifies how the value is applied. */
export declare type ColorApplyValueMode = 'instantly' | 'useButtons';
/**Determines the colors that will be displayed and their layout. */
export declare type ColorDisplayMode = 'default' | 'grid' | 'palette' | 'radial' | 'hexagonal' | 'spectrumGrid' | 'materialGrid';
/**Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes. */
export declare type ColorPalette = 'default' | 'gray' | 'red' | 'green' | 'blue' | 'custom';
/**Determines how the tooltip displays the value of the color that is being hovered. */
export declare type ColorTooltipDisplayMode = 'none' | 'rgb' | 'rgba' | 'hex';
/**Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode. */
export declare type ColorValueFormat = 'default' | 'rgb' | 'rgba' | 'hex';
