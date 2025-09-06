import  {BaseElement, Animation} from "./smart.element"

export interface ColorPanelProperties {
  /**
   * Sets or retrieves the current animation mode. When this property is set to 'none', all animations are disabled. Use this property to enable, disable, or specify the type of animation applied to the element.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Clarifies the method or rule by which the value is implemented or utilized within the system, detailing how the value influences functionality or behavior.
   * Default value: instantly
   */
  applyValueMode?: ColorApplyValueMode | string;
  /**
   * Specifies how many columns of colors are displayed when using the 'grid', 'hexagonal', or 'spectrumGrid' displayModes. This parameter controls the horizontal arrangement of color swatches, determining how many colors appear in each row of the color picker interface for these modes.
   * Default value: 8
   */
  columnCount?: number;
  /**
   * Determines whether the element is interactive or not. When set to 'disabled', the element becomes unresponsive to user interactions such as clicks, typing, or selection, and may also appear visually distinct (e.g., grayed out) to indicate its inactive state. When enabled, the element behaves normally and accepts user input.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the color palette to be used and defines how these colors are arranged or distributed within the user interface or visual component.
   * Default value: default
   */
  displayMode?: ColorDisplayMode | string;
  /**
   * By default, clicking on the color panel's preview container will revert the selected color to its previous value, effectively undoing any recent changes. Setting the 'disableUndo' option disables this undo functionality, so clicking the preview container will no longer restore the previous color value.
   * Default value: false
   */
  disableUndo?: boolean;
  /**
   * Enables users to adjust the alpha (transparency) level of colors using an editor or slider. This functionality is available in the following display modes: 'palette', 'radial', and 'hexagonal', allowing for precise transparency control while selecting colors in these layouts.
   * Default value: false
   */
  editAlphaChannel?: boolean;
  /**
   * Enables users to choose a custom color through an editor popup interface. This functionality extends custom color selection to modes where it is not included by default, such as 'grid', 'default', or 'spectrum grid', providing flexibility and a consistent color selection experience across different modes.
   * Default value: false
   */
  enableCustomColors?: boolean;
  /**
   * Specifies an array of color values to be used as the theme colors for the relevant section when displayMode is set to 'default'. These colors will determine the visual appearance and styling of the section under the default display mode.
   * Default value: null
   */
  gridThemeColors?: string[] | null;
  /**
   * Defines an array of color values to be used as shade colors in the section that appears when displayMode is set to 'default'. These colors determine the visual shading or accent colors applied within that display mode, allowing for customization of the section’s appearance.
   * Default value: null
   */
  gridShadeColors?: string[] | null;
  /**
   * Specifies an array of standard colors that will be applied in the corresponding section when the displayMode is set to 'default'. These colors determine the default color palette for that section's visual elements.
   * Default value: null
   */
  gridStandardColors?: [] | null;
  /**
   * Controls the visibility of the alpha editor, which is a UI input for adjusting the opacity (alpha value) of the selected color. The alpha editor is available in the 'radial', 'palette', and 'hexagonal' modes, and is displayed by default as long as there is enough space in the interface. Enabling this option will hide the alpha editor from view, preventing users from modifying color opacity directly.
   * Default value: false
   */
  hideAlphaEditor?: boolean;
  /**
   * Specifies the priority for hiding color editors when there is insufficient space to display all of them. By default, color editors are shown only in 'palette', 'radial', and 'hexagonal' display modes. Use this property to control the order in which editors are hidden, ensuring that the most important editors remain visible for as long as possible as space becomes limited. This allows for a customized and responsive user interface that adapts to varying display sizes.
   * Default value: RGB,HEX,alpha,previewContainer
   */
  hideContentToFit?: string[];
  /**
   * The HEX editor is an input field that allows users to enter or view a color's value in hexadecimal format (e.g., #FF5733). By default, the HEX editor is displayed in the UI. If the 'hideHEXeditor' property is set to true, this input will be hidden from view. Note: The 'hideRGBeditor' property controls the visibility of the separate RGB editor, not the HEX editor.
   * Default value: false
   */
  hideHEXEditor?: boolean;
  /**
   * Conceals the preview container, which displays the currently selected value in the 'palette', 'radial', and 'hexagonal' display modes. When this option is enabled, users will not see the visual representation of their selection within the interface.
   * Default value: false
   */
  hidePreviewContainer?: boolean;
  /**
   * Hides the RGB editor interface. This editor consists of three individual input fields, each allowing users to directly adjust the Red, Green, and Blue components of a color independently. Disabling this option will prevent users from modifying these color channels through the RGB editor.
   * Default value: false
   */
  hideRGBEditor?: boolean;
  /**
   * Inverts the color scheme of the interface when operating in the 'spectrumGrid', 'hexagonal', or 'radial' display modes, producing a visually reversed version of the original colors for enhanced contrast or alternative visual effects.
   * Default value: false
   */
  inverted?: boolean;
  /**
   * Sets or retrieves the 'unlockKey' property, a unique key required to activate or grant access to the product. Assign a valid key string to unlock the product, or get the current key in use.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Defines or retrieves the current language setting for the application. This property works together with the messages property, allowing you to display localized content based on the selected language. Setting this value determines which language-specific message set from messages will be used throughout the interface.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A callback function that allows you to customize the formatting of messages returned by the Localization Module. Use this to modify, translate, or personalize message strings before they are displayed in your application.
   * Default value: null
   */
  localizeFormatFunction?: any;
  /**
   * Specifies or retrieves an object that defines the text strings used within the widget, allowing for easy localization of the widget's interface. This property works together with the locale property to support multiple languages by providing translated strings as needed. Use this to customize the widget's displayed text based on the selected locale.
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
   * Sets or retrieves the value of the element's name attribute. This attribute assigns a unique identifier to the element within an HTML form, allowing its value to be included as a key when the form is submitted to a server. The name attribute is essential for processing form data, as the server uses these names to identify and handle the values submitted by users.
   * Default value: ""
   */
  name?: string;
  /**
   * Specifies the color palette used for rendering the color options within the 'spectrumGrid', 'grid', and 'hexagonal' display modes. This setting controls which color values are shown to users when these modes are active, directly affecting the available color choices in the UI.
   * Default value: default
   */
  palette?: ColorPalette | string;
  /**
   * Specifies an array of colors to create a custom color palette. When the palette property is set to custom, this palette is available for selection in the 'grid' and 'spectrum grid' display modes. The array can contain either color strings (such as HEX, RGB, or RGBA formats) or objects that define valid color values. This allows for flexible customization of the color selection options shown to users.
   * Default value: null
   */
  paletteColors?: any;
  /**
   * Specifies an array of colors that make up a predefined custom color palette. This palette is available for display modes 'grid', 'default', and 'spectrum grid'. When enabled via the enableCustomColors property, these custom colors appear at the bottom of the color grid, positioned below the button that allows users to select a custom color. If enableCustomColors is set to false, the custom color palette will not be visible to users.
   * Default value: null
   */
  paletteCustomColors?: string[] | null;
  /**
   * When the element has the "readonly" attribute, users can view its value but cannot modify, edit, or interact with its content in any way. The element remains visible and selectable, but user input and changes are disabled.
   * Default value: false
   */
  readonly?: boolean;
  /**
   * Determines or retrieves whether the element’s text direction is set to right-to-left (RTL), enabling proper alignment and layout for languages and locales that use right-to-left scripts, such as Arabic or Hebrew.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies the theme to be applied to the element, which controls its overall appearance—including colors, fonts, and style variations—ensuring visual consistency with the rest of the user interface.
   * Default value: ""
   */
  theme?: string;
  /**
   * Specifies the format and content used to display the color’s value in the tooltip when a user hovers over it. This setting controls how the color information (such as hexadecimal, RGB, or color name) appears in the tooltip for better clarity and user experience.
   * Default value: hex
   */
  tooltipDisplayMode?: ColorTooltipDisplayMode | string;
  /**
   * Represents the currently selected color value, typically formatted as a hexadecimal code (e.g., "#FF5733"), RGB value, or other standard color representation. This value is updated whenever the user selects a new color and can be used to apply the chosen color to UI elements or store user preferences.
   * Default value: "null"
   */
  value?: string;
  /**
   * Specifies the format in which the color value will be represented—either HEX, RGB, or RGBA. By default, the color format adapts automatically based on the selected displayMode.
   * Default value: default
   */
  valueFormat?: ColorValueFormat | string;
  /**
   * Specifies which object property should be used as the color value when paletteColors is an array of objects. This option is useful when your color data is structured as objects and the property representing the color value does not use the default key name 'value'. Set this attribute to the name of the property that contains the color value within each object.
   * Default value: "null"
   */
  valueMember?: string;
  /**
   * When set to true, this property prevents the element from receiving focus, meaning it cannot be selected or activated using keyboard navigation or other focus-related interactions.
   * Default value: false
   */
  unfocusable?: boolean;
}
/**
 ColorPanel is an advanced color chooser with Pallete, Spectrum Grid, Radial Palette and Excel-like options.
*/
export interface ColorPanel extends BaseElement, ColorPanelProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the selected color value is modified by the user. It occurs both when the user chooses a new color or adjusts the current color selection, allowing developers to respond dynamically to changes in color input.
	* @param event. The custom event. Custom data event was created with: ev.detail(oldValue, value)
   *  oldValue - The previously selected color.
   *  value - The new selected color.
   */
  onChange: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the user clicks the "Cancel" button. Note: The "Cancel" button is displayed only when the <strong>applyValueMode</strong> property is set to <strong>useButtons</strong>. If <strong>applyValueMode</strong> has a different value, the "Cancel" button will not appear, and this event will not be triggered.
	* @param event. The custom event.    */
  onCancelButtonClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the custom color selection view is either opened or closed by the user. Note that the custom color selection view is only accessible when the <strong>enableCustomColors</strong> property is set to <code>true</code>. This event allows you to perform actions in response to users interacting with the custom color picker interface.
	* @param event. The custom event. Custom data event was created with: ev.detail(value)
   *  value - A boolean that indicates whether the custom color view is shown or not.
   */
  onCustomColorSelection?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the "OK" button is clicked by the user. Note that the "OK" button appears in the UI only if the <strong>applyValueMode</strong> property is set to <strong>useButtons</strong>. If <strong>applyValueMode</strong> has a different value, the "OK" button will not be displayed, and this event will not be triggered.
	* @param event. The custom event.    */
  onOkButtonClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
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

/**Clarifies the method or rule by which the value is implemented or utilized within the system, detailing how the value influences functionality or behavior. */
export declare type ColorApplyValueMode = 'instantly' | 'useButtons';
/**Specifies the color palette to be used and defines how these colors are arranged or distributed within the user interface or visual component. */
export declare type ColorDisplayMode = 'default' | 'grid' | 'palette' | 'radial' | 'hexagonal' | 'spectrumGrid' | 'materialGrid';
/**Specifies the color palette used for rendering the color options within the 'spectrumGrid', 'grid', and 'hexagonal' display modes. This setting controls which color values are shown to users when these modes are active, directly affecting the available color choices in the UI. */
export declare type ColorPalette = 'default' | 'gray' | 'red' | 'green' | 'blue' | 'custom';
/**Specifies the format and content used to display the color’s value in the tooltip when a user hovers over it. This setting controls how the color information (such as hexadecimal, RGB, or color name) appears in the tooltip for better clarity and user experience. */
export declare type ColorTooltipDisplayMode = 'none' | 'rgb' | 'rgba' | 'hex';
/**Specifies the format in which the color value will be represented—either HEX, RGB, or RGBA. By default, the color format adapts automatically based on the selected displayMode. */
export declare type ColorValueFormat = 'default' | 'rgb' | 'rgba' | 'hex';
