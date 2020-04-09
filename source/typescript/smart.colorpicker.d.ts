import  {BaseElement, Animation} from "./smart.element"

/**
 ColorPicker is an advanced color picking component with Pallete, Spectrum Grid, Radial Palette and Excel-like options. Users can input colors either by a dropdown or input field.
*/
export interface ColorPicker extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * This property allows editting of colors via the input inside the element's action section. Accepts values in all supported types. This property works when 'valueDisplayMode' is set to default or colorCode.
   * Default value: false
   */
  editable?: boolean;
  /**
   * Determines the delay before the opened drop down closes when dropDownOpenMode is set to 'auto'.
   * Default value: 100
   */
  autoCloseDelay?: number;
  /**
   * Specifies how the user applies the selected value. In 'instantly' mode the value is applied immediately when color is selected. In 'useButtons' mode are shown 'Ok' and 'Cancel' buttons at the botom of the colorpicker's drop down. Only click on 'OK' button applies the value.
   * Default value: instantly
   */
  applyValueMode?: ColorApplyValueMode;
  /**
   * Defines the number of columns for the colors in displayModes 'grid', 'hexagonal' and 'spectrumGrid'.
   * Default value: 8
   */
  columnCount?: number;
  /**
   * Determines the colors that will be displayed and their layout.
   * Default value: default
   */
  displayMode?: ColorDisplayMode;
  /**
   * Enables or disables the element.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * By default clicking on color panel's preview container returns the color value to it's previous state. 'disableUndo' prevents this functionality.
   * Default value: false
   */
  disableUndo?: boolean;
  /**
   * Sets the parent container of the dropDown (the popup). Used when a CSS property of unknowned parent is interfering with the visibility of the dropDown.
   * Default value: body
   */
  dropDownAppendTo?: any;
  /**
   * Determines how the drop down is going to open.
   * Default value: default
   */
  dropDownOpenMode?: DropDownOpenMode;
  /**
   * Determines the position of the drop down button.
   * Default value: right
   */
  dropDownButtonPosition?: DropDownButtonPosition;
  /**
   * Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size.
   * Default value: auto
   */
  dropDownPosition?: DropDownPosition;
  /**
   * Sets the height of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn not support CSS variables.
   * Default value: "auto"
   */
  dropDownHeight?: string;
  /**
   * If this property is enabled, when the element's dropdown is opened, a transparent overlay is positioned between the dropdown and the rest of the document.
   * Default value: false
   */
  dropDownOverlay?: boolean;
  /**
   * Sets the width of the drop down. Default value of null means that CSS variables are used. This property should be used when the browser doesn't support CSS variables.
   * Default value: "auto"
   */
  dropDownWidth?: string;
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
   * Defines an Array of colors that will be used as the Theme Colors in the corresponding section of displayMode: 'grid' and 'default'.
   * Default value: null
   */
  gridThemeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Shade Colors in the corresponding section of displayMode: 'grid' and 'default'.
   * Default value: null
   */
  gridShadeColors?: string[] | null;
  /**
   * Defines an Array of colors that will be used as the Standart Colors in the corresponding section of displayMode: 'grid' and 'default'.
   * Default value: null
   */
  gridStandardColors?: string[] | null;
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
   * Sets additional helper text below the element that is only visible when the element is focused.
   * Default value: ""
   */
  hint?: string;
  /**
   * Inverts the colors in 'spectrumGrid', 'hexagonal', 'radial' modes.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Sets a label above the element.
   * Default value: ""
   */
  label?: string;
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
   * Determines whether the popup is opened or closed
   * Default value: false
   */
  opened?: boolean;
  /**
   * Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes.
   * Default value: default
   */
  palette?: ColorPalette;
  /**
   * Defines an array of colors that form a custom palette. This palette can be used in displayModes 'grid' and 'spectrum grid' if the palette property is set to custom. The value of the property can be an array of strings or objects that contain valid colors ( HEX, RGBA, etc).
   * Default value: null
   */
  paletteColors?: {name: string, value: string}[] | string[] | null;
  /**
   * Defines an array of colors that represent a predefined list of custom colors. This palette can be used in displayModes 'grid', 'default' and 'spectrum grid'. Custom colors are displayed at the bottom of the color grid below the button for custom color selection. They are only visible if enableCustomColor property is true.
   * Default value: null
   */
  paletteCustomColors?: string[] | null;
  /**
   * The placeholder is shown when the value is not set yet or is set to null.
   * Default value: ""
   */
  placeholder?: string;
  /**
   * Disables user interaction with the element.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines whether the resize indicator in the bottom right corner of the drop down is visible or not. This property is used in conjunction with resizeMode.
   * Default value: false
   */
  resizeIndicator?: boolean;
  /**
   * Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down.
   * Default value: null
   */
  resizeMode?: ResizeMode;
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
   * If is set to true, the element cannot be focused.
   * Default value: false
   */
  unfocusable?: boolean;
  /**
   * Represents the value of the selected color as the value of the element.
   * Default value: "null"
   */
  value?: string;
  /**
   * Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode.
   * Default value: default
   */
  valueFormat?: ColorValueFormat;
  /**
   * Determines which elements will be displayed in color picker's action section.
   * Default value: default
   */
  valueDisplayMode?: ColorValueDisplayMode;
  /** 
   * This event is triggered when user clicks on the action button. 'Ok' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
	* @param event. The custom event.    */
  onActionButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the cancel button is clicked. 'Cancel' button is visible only when <strong>applyValueMode</strong> is set to <strong>useButtons</strong>.
	* @param event. The custom event.    */
  onCancelButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the color value is changed.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previously selected color.
   *  value - The new selected color.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is closed.
	* @param event. The custom event.    */
  onClose: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is about to be closed. This event allows to cancel the closing operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onClosing?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the custom color selection view is opened/closed. Custom color selection view is available when <strong>enableCustomColors</strong> property is true.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A boolean that indicates whether the custom color view is shown or not.
   */
  onCustomColorSelection?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user clicks on the drop down button.
	* @param event. The custom event.    */
  onDropDownButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the ok button is clicked.
	* @param event. The custom event.    */
  onOkButtonClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is opened.
	* @param event. The custom event.    */
  onOpen?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the drop down is about to be opened. This event allows to cancel the opening operation calling event.preventDefault() in the event handler function.
	* @param event. The custom event.    */
  onOpening?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when user starts resizing the drop down.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeStart?: ((this: any, ev: Event) => any) | null;
  /** 
   * This event is triggered when the resizing of the drop down is finished.
	* @param event. The custom event. Custom data event was created with: ev.detail(position)
   *  position - An object containing the current left and top positions of the drop down.
   */
  onResizeEnd?: ((this: any, ev: Event) => any) | null;
  /**
   * Opens the drop down of the color picker.
   */
  open(): void;
  /**
   * Closes the drop down of the color picker.
   */
  close(): void;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-color-picker"): ColorPicker;
			querySelector(selectors: "smart-color-picker"): ColorPicker | null;	
			querySelectorAll(selectors: "smart-color-picker"): NodeListOf<ColorPicker>;
			getElementsByTagName(qualifiedName: "smart-color-picker"): HTMLCollectionOf<ColorPicker>;
			getElementsByName(elementName: "smart-color-picker"): NodeListOf<ColorPicker>;	
    }
}

/**Specifies how the user applies the selected value. In 'instantly' mode the value is applied immediately when color is selected. In 'useButtons' mode are shown 'Ok' and 'Cancel' buttons at the botom of the colorpicker's drop down. Only click on 'OK' button applies the value. */
export declare type ColorApplyValueMode = 'instantly' | 'useButtons';
/**Determines the colors that will be displayed and their layout. */
export declare type ColorDisplayMode = 'default' | 'grid' | 'palette' | 'radial' | 'hexagonal' | 'spectrumGrid' | 'materialGrid';
/**Determines how the drop down is going to open. */
export declare type DropDownOpenMode = 'none' | 'default' | 'dropDownButton' | 'auto';
/**Determines the position of the drop down button. */
export declare type DropDownButtonPosition = 'left' | 'right' | 'top' | 'bottom';
/**Determines the vertical position of the dropDown. 'Auto' means its automatically determined depending on the viewport size. */
export declare type DropDownPosition = 'auto' | 'top' | 'bottom' | 'overlay-top' | 'overlay-center' | 'overlay-bottom' | 'center-bottom' | 'center-top';
/**Determines what colors will be displayed in 'spectrumGrid', 'grid' and 'hexagonal' displayModes. */
export declare type ColorPalette = 'default' | 'gray' | 'red' | 'green' | 'blue' | 'custom';
/**Determines whether the dropDown can be resized or not. When resizing is enabled, a resize bar appears on the top/bottom side of the drop down. */
export declare type ResizeMode = 'none' | 'horizontal' | 'vertical' | 'both';
/**Determines how the tooltip displays the value of the color that is being hovered. */
export declare type ColorTooltipDisplayMode = 'none' | 'rgb' | 'rgba' | 'hex';
/**Determines the format of the color. Whether it's in HEX, RGB or RGBA. By default it shows the color depending on the displayMode. */
export declare type ColorValueFormat = 'default' | 'rgb' | 'rgba' | 'hex';
/**Determines which elements will be displayed in color picker's action section. */
export declare type ColorValueDisplayMode = 'default' | 'colorBox' | 'colorCode' | 'none';
