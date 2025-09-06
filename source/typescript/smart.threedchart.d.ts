import  {BaseElement, Animation} from "./smart.element"

export interface ThreeDChartProperties {
  /**
   * Gets or sets the animation mode for the component. If the property is set to 'none', all animations are disabled. Otherwise, enabling this property allows animations to play based on the selected mode.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the speed at which the animation progresses. A rate of 1 represents the normal playback speed. Values greater than 1 will make the animation play faster, while values less than 1 will slow it down. By default, the animation rate is set to 1.
   * Default value: 1
   */
  animationSpeed?: number;
  /**
   * Determines if the chart automatically rotates through its data or views without user interaction. When enabled, the chart will transition between different data points or perspectives at set intervals.
   * Default value: false
   */
  autoRotate?: boolean;
  /**
   * Defines the speed at which the object or element automatically rotates. A higher value increases the rotation rate, while a lower value slows it down. Typically measured in degrees or radians per second, depending on implementation.
   * Default value: 1
   */
  autoRotateSpeed?: number;
  /**
   * Specifies the background color of the chart area using a valid CSS color value. Accepts formats such as hexadecimal (e.g., '#DDFFE8'), RGB, RGBA, HSL, HSLA, or named colors. For example, setting this property to '#DDFFE8' applies a light green background to the chart.
   * Default value: #ffffff
   */
  backgroundColor?: string | null;
  /**
   * Configures the chart's background with a fixed linear gradient. To use this property, provide an array of strings, each representing a color stop in the format: '"offset, color"'. Here, 'offset' is a percentage (e.g., '0%', '100%') indicating the position of the color stop along the gradient, and 'color' is any valid CSS color value. The array should have at least two entries to define the gradient's start and end colors. For example:  '["0%, #fff", "100%, #ccc"]'.
   * Default value: []
   */
  backgroundGradient?: any[];
  /**
   * Specifies a static image as the background of the chart. You can provide the URL of an image (e.g., 'https://www.htmlelements.com/demos/images/stars.jpg'), which will be displayed behind the chart elements and remain fixed regardless of chart interactions such as zooming or panning.
   * Default value: ""
   */
  backgroundImage?: string;
  /**
   * Defines the chart's background as a dynamic, camera-synchronized image that rotates in tandem with the viewer's perspective. This property requires an array containing exactly six images, each representing one face of a cube map (for example: front, back, left, right, top, bottom). All provided images must be square, with a 1:1 aspect ratio, to ensure seamless rendering and correct alignment in the 3D environment.
   * Default value: []
   */
  backgroundTexture?: any[];
  /**
   * Specifies the camera's position in 3D space. This property requires an object with three numeric properties: '{ x, y, z }', each representing the camera's coordinates along the respective axes. For example: '{ x: 0, y: 10, z: 50 }'.
   * Default value: [object Object]
   */
  cameraPosition?: ThreeDChartCameraPosition;
  /**
   * Specifies the initial zoom level of the camera when the view is first loaded. A value of 1 represents the default, unzoomed state. Higher values zoom in, showing a closer view, while lower values zoom out, displaying a wider area.
   * Default value: 1
   */
  cameraZoom?: number;
  /**
   * Defines the main title, or caption, that appears at the top of the chart, providing a clear and descriptive label for the chart’s content or purpose.
   * Default value: "Caption"
   */
  caption?: string;
  /**
   * Defines the color palette used for the chart's visual elements. jqxChart supports 32 distinct color schemes, selectable by specifying a scheme name from 'scheme01' through 'scheme32'. Each scheme applies a predefined set of colors to the chart’s data series and components, allowing for easy customization of the chart's appearance.
   * Default value: scheme01
   */
  colorScheme?: ThreeDChartColorScheme | string;
  /**
   * Configures the settings for the chart's interactive controls, such as filters, sliders, and buttons, allowing customization of their appearance and behavior.
   * Default value: [object Object]
   */
  controlsSettings?: any;
  /**
   * Enables you to replace default items with custom 3D objects. To use this property, provide an array of objects, each specifying the location and source of a custom model in the following format:  '{ groupIndex, serieIndex, itemIndex, modelUrl }'.  - 'groupIndex': Index of the group containing the item to replace  - 'serieIndex': Index of the series within the group  - 'itemIndex': Index of the specific item within the series  - 'modelUrl': URL or path to the custom 3D model file to use as a replacement  Each object in the array defines a substitution for a specific default item.
   * Default value: []
   */
  customModels?: any[];
  /**
   * Specifies the data source that populates the chart, determining the information displayed in the chart's visualization. This property accepts an array or object containing the data points or records to be rendered on the chart.
   * Default value: 
   */
  dataSource?: any[];
  /**
   * Specifies the descriptive text displayed on the chart, providing additional context or information to help users understand the chart's purpose, data, or insights. This text typically appears as a caption or annotation within or near the chart area.
   * Default value: "Description"
   */
  description?: string;
  /**
   * Specifies whether the chart is visible or hidden. When set to true, the chart will be displayed; when set to false, the chart will be disabled.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Determines whether the chart's toolbar is displayed, allowing users to access interactive features such as exporting, zooming, or changing chart settings. Set to 'true' to show the toolbar, or 'false' to hide it.
   * Default value: true
   */
  enableControlsToolbar?: boolean;
  /**
   * 
   * Default value: reset-camera,zoom-in,zoom-out,save-image,camera-control
   */
  controlsToolbarItems?: any;
  /**
   * Configures the appearance and behavior of the chart’s grid, including properties such as visibility, line style, color, spacing, and axis alignment.
   * Default value: [object Object]
   */
  gridOptions?: any;
  /**
   * Specifies whether the legend is generated based on individual chart series or grouped series. When set to "auto", the legend adapts dynamically—using series or series groups as the basis—depending on the current chart type. This ensures the legend remains relevant to how data is visually organized in each chart configuration.
   * Default value: auto
   */
  legendIndex?: ThreeDChartLegendIndex | string;
  /**
   * Specifies the arrangement of items within the legend, such as whether they are displayed in a horizontal row or a vertical column. This property controls the visual layout and orientation of the legend entries in the chart.
   * Default value: [object Object]
   */
  legendLayout?: any;
  /**
   * Defines the color of the lighting used within the 3D scene, affecting the appearance and shading of all objects rendered in the environment. Adjusting this value changes how surfaces reflect light, influencing the overall mood and visibility in the scene. Use a valid color format (e.g., hexadecimal, RGB, or named color).
   * Default value: "#ffffff"
   */
  lightColor?: string;
  /**
   * Gets or sets the unlockKey property, which serves as the authentication key required to activate or access the product’s full features. Use this property to specify a valid unlock key for product authorization, or retrieve the currently assigned key.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Sets or retrieves the current locale (language and regional settings) for the component. This property is used together with the messages property to determine which localized messages or translations should be displayed. Changing the locale will update the component’s language-specific content accordingly.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Defines or retrieves an object containing the set of user interface strings displayed by the widget, enabling support for multiple languages. This property works together with the locale property to allow localization, ensuring that text within the widget adapts appropriately to the selected language or region. Each key-value pair in the object represents a specific UI string that can be customized or translated as needed.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Gets or sets a boolean value that determines whether the Chart's layout is displayed in a mirrored (flipped horizontally) orientation. When enabled, the positions of chart elements such as axes, labels, and data series are reversed to create a mirrored effect.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Specifies how items can be selected within the component, such as allowing single selection, multiple selections, or disabling selection altogether.
   * Default value: multiple
   */
  selectionMode?: ThreeDChartSelectionMode | string;
  /**
   * The 'seriesGroups' property defines the configuration for all data series displayed on the jqxChart. This property allows you to organize multiple series into separate groups, with each group potentially using a different chart type (such as line, column, or area) and having its own dedicated value axis (Y-axis). This enables the visualization of data with varying value ranges or units of measure on the same chart, making it possible to compare disparate datasets simultaneously.Each element in the 'seriesGroups' array is an object representing a single series group. Within each group object, you can specify the type of chart to be used for the series in that group (for example, '"type": "line"' or '"type": "column"'), define the configuration for the group's value axis, and provide the specific series data to be plotted. This flexible structure allows you to, for example, display all series in one group as lines, while rendering series in another group as columns—each with independently scaled Y-axes.In summary, 'seriesGroups' is an array of group configuration objects, and each group defines the chart type, associated value axis, and a collection of series to be rendered together within that group. This design supports advanced charting scenarios, such as displaying both temperature (on one Y-axis) and rainfall (on a separate Y-axis) within the same chart, using different series visualizations.
   * Default value: 
   */
  seriesGroups?: ThreeDChartSeriesGroup[];
  /**
   * Specifies whether the grid connecting lines should be displayed when a user hovers over a chart item. When enabled, grid lines related to the hovered data point will become visible, providing visual emphasis and aiding in data interpretation.
   * Default value: false
   */
  showConnectionLines?: boolean;
  /**
   * Specifies whether the chart series legend should be displayed or hidden. When set to true, the legend appears on the chart, helping users identify different data series. When set to false, the legend is not shown.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Specifies whether the chart’s series legend table is displayed. When set to true, the legend table appears, providing a visual key that identifies each data series within the chart. When set to false, the legend table is hidden, and no series identifiers are shown. This setting helps control the visibility of the chart legend for improved readability or a cleaner presentation.
   * Default value: false
   */
  showLegendTable?: boolean;
  /**
   * Controls the visibility of chart tooltips. When enabled, tooltips appear to display additional information when users hover over or interact with chart elements; when disabled, tooltips are hidden and no additional data is shown on interaction.
   * Default value: true
   */
  showToolTips?: boolean;
  /**
   * Specifies the amount of space (padding) between the chart title (caption) and the edges of the chart area, allowing you to control the distance around the title for better visual separation and readability.
   * Default value: [object Object]
   */
  titlePadding?: ThreeDChartPadding;
  /**
   * Callback function that allows users to customize the formatting of tooltip text. This function receives relevant data and should return a string or HTML representing the tooltip content to be displayed.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Configuration options for formatting how the series values appear within tooltips. These settings control the display format, such as number precision, prefixes, suffixes, units, and other stylistic options specific to the values shown in the series tooltips.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ThreeDChartFormatSettings;
  /**
   * Defines the color of the tooltip's guideline or border that appears when hovering over chart elements. By default, this color matches the color of the item currently being hovered over. You can customize this property to use a specific color regardless of the hovered item's color.
   * Default value: null
   */
  toolTipLineColor?: string | null;
  /**
   * An object containing configuration settings for the y-axis (value axis) of the Chart. This includes properties such as axis labels, scaling options, tick marks, grid lines, range limits (minimum and maximum values), formatting, and other visual or functional parameters that control how the y-axis is displayed and behaves.
   * Default value: [object Object]
   */
  valueAxis?: ThreeDChartValueAxis;
  /**
   * Configures the properties of the chart's x-axis, such as its scale, labels, range, and appearance. This setting determines how data is displayed and organized along the horizontal axis of the chart.
   * Default value: [object Object]
   */
  xAxis?: ThreeDChartXAxis;
  /**
   * Defines the properties and configuration options for the Chart's z-axis, which controls the depth dimension in 3D charts. This setting allows you to specify parameters such as limits, labels, scaling, and appearance of the z-axis, enabling better representation and visualization of data in three-dimensional charts.
   * Default value: [object Object]
   */
  zAxis?: ThreeDChartZAxis;
}
/**
 3D Chart is a feature-complete interactive WebGL 3D graph library that answers the data visualization needs of any modern web app.
*/
export interface ThreeDChart extends BaseElement, ThreeDChartProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever the user clicks on any interactive element within the chart, such as bars, data points, or slices. It provides information about the specific chart element that was clicked, enabling you to implement custom responses or interactions based on user input.
	* @param event. The custom event. Custom data event was created with: ev.detail(itemIndex, serieIndex, groupIndex)
   *  itemIndex - The item index of the item.
   *  serieIndex - The serie index of the item.
   *  groupIndex - The group index of the item.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is triggered whenever a chart element becomes visible on the chart, such as when a previously hidden data series, axis, label, or legend item is displayed to the user. This allows developers to execute custom logic in response to chart elements appearing in the visualization.
	* @param event. The custom event. Custom data event was created with: ev.detail(itemIndex, serieIndex, groupIndex)
   *  itemIndex - The item index of the item.
   *  serieIndex - The serie index of the item.
   *  groupIndex - The group index of the item.
   */
  onShow?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a chart element (such as a data series, data point, or legend item) becomes hidden from view, either through user interaction or programmatic changes. It allows you to execute custom logic in response to elements being concealed within the chart.
	* @param event. The custom event. Custom data event was created with: ev.detail(itemIndex, serieIndex, groupIndex)
   *  itemIndex - The item index of the item.
   *  serieIndex - The serie index of the item.
   *  groupIndex - The group index of the item.
   */
  onHide?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user selects an element within the chart, such as a bar, line point, or pie segment. It provides relevant details about the selected chart element, enabling interactive features like displaying tooltips, highlighting, or updating other components based on the user’s selection.
	* @param event. The custom event. Custom data event was created with: ev.detail(itemIndex, serieIndex, groupIndex)
   *  itemIndex - The item index of the item.
   *  serieIndex - The serie index of the item.
   *  groupIndex - The group index of the item.
   */
  onSelect?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a user deselects or removes selection from a chart element, such as a data point, bar, or segment. It allows you to execute custom logic in response to the unselection action, such as updating related UI components, clearing details panels, or modifying application state.
	* @param event. The custom event. Custom data event was created with: ev.detail(itemIndex, serieIndex, groupIndex)
   *  itemIndex - The item index of the item.
   *  serieIndex - The serie index of the item.
   *  groupIndex - The group index of the item.
   */
  onUnselect?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered after the range selector’s position has changed and the chart has completed rendering. It is useful for executing custom logic that depends on the updated position of the range selector and the final, fully-rendered state of the chart.
	* @param event. The custom event. Custom data event was created with: ev.detail(minValue, maxValue)
   *  minValue - The start value of the range selector.
   *  maxValue - The end value of the range selector.
   */
  onRangeSelectionChanged?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever the range selector position on the chart is modified, occurring just before the chart begins its rendering process. By handling this event, you have the opportunity to intercept the change; calling `preventDefault()` within the event handler will cancel the update, thereby stopping the chart from changing its displayed range and re-rendering. This allows for validation or custom logic to be executed in response to a user's attempt to adjust the range.
	* @param event. The custom event. Custom data event was created with: ev.detail(minValue, maxValue, oldMinValue, oldMaxValue)
   *  minValue - The start value of the range selector.
   *  maxValue - The end value of the range selector.
   *  oldMinValue - The previous start value of the range selector.
   *  oldMaxValue - The previous end value of the range selector.
   */
  onRangeSelectionChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered at the start of the chart's rendering process, before any visual elements are drawn. It provides an opportunity to perform actions or modify chart configurations just prior to display."
	* @param event. The custom event.    */
  onRefreshBegin?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered after the chart has completed its rendering process and all visual elements have been fully drawn onto the page. You can listen for this event to perform actions that require the chart to be fully loaded, such as manipulating chart elements, updating data, or displaying additional content.
	* @param event. The custom event.    */
  onRefreshEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is triggered when the chart starts its resizing process, allowing developers to execute custom logic or handle changes before the resize operation is complete. This can be used to adapt layout, update UI elements, or prepare data in response to the chart's imminent size adjustment.
	* @param event. The custom event.    */
  onResizeBegin?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the chart has completed its resizing process, indicating that all layout adjustments and visual updates related to the size change are fully applied. Developers can use this event to perform actions that depend on the finalized dimensions of the chart.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a new color scheme to the collection. If a scheme with the specified name already exists, this method will update its color values instead of creating a duplicate. This ensures that each color scheme name remains unique, and existing schemes can be modified by providing the same name with new color definitions.
   * @param {string} schemeName. The name of the custom color scheme.
   * @param {any[]} colorsArray. An array of color values.
   */
  addColorScheme(schemeName: string, colorsArray: any[]): void;
  /**
   * Initiates an update operation on the chart, allowing multiple changes to be made without triggering a re-render after each modification. The chart’s rendering is deferred until the endUpdate method is called, at which point all accumulated updates are rendered in a single batch for improved performance.
   */
  beginUpdate(): void;
  /**
   * Signals the completion of a batch update to the chart. Once the `endUpdate` method is called, all pending changes made since the last update will be processed, and the chart will be re-rendered to reflect these updates. This helps optimize performance by minimizing unnecessary redraws during multiple consecutive changes.
   * @param {boolean} refresh?. If set to true, the chart will complete a full refresh.
   */
  endUpdate(refresh?: boolean): void;
  /**
   * Retrieves the color palette associated with the specified color scheme name. If a color scheme with the provided name does not exist, the method returns undefined instead of a color palette.
   * @param {string} schemeName. The name of the color scheme.
   * @returns {any[]}
   */
  getColorScheme(schemeName: string): any[];
  /**
   * Retrieves the item located at the specified index or indices within the collection. If multiple indexes are provided, the method accesses nested items accordingly.
   * @param {number | null} groupIndex?. Series group index.
   * @param {number | null} serieIndex?. Series index.
   * @param {number | null} itemIndex?. Item (data point) index.
   * @returns {any}
   */
  getItemByIndexes(groupIndex?: number | null, serieIndex?: number | null, itemIndex?: number | null): any;
  /**
   * Returns an array of items that correspond to the specified indexes. If a particular index is set to null, the function will include all items that match the other provided indexes for that position. This allows for flexible selection based on partial index specification.
   * @param {number | null} groupIndex?. Series group index.
   * @param {number | null} serieIndex?. Series index.
   * @param {number | null} itemIndex?. Item (data point) index.
   * @returns {any}
   */
  getItemsByIndexes(groupIndex?: number | null, serieIndex?: number | null, itemIndex?: number | null): any;
  /**
   * Retrieves an array containing the indexes of all currently hidden series within the dataset. Each index corresponds to a series that is not visible in the chart or visualization.
   * @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
   */
  getHidden(): { groupIndex: number, serieIndex: number, itemIndex: number }[];
  /**
   * Retrieves the currently selected items from the collection, returning them as an array. If no items are selected, an empty array is returned.
   * @returns {any[]}
   */
  getSelection(): any[];
  /**
   * Retrieves the displayed values of the valueAxis labels after they have been processed and rendered, reflecting any formatting, transformations, or customizations applied during chart rendering.
   * @returns {any}
   */
  getValueAxisLabels(): any;
  /**
   * Retrieves the fully rendered and formatted values of the xAxis labels as they appear on the chart, including any applied styles, formatting, or transformations.
   * @returns {any}
   */
  getXAxisLabels(): any;
  /**
   * Retrieves the displayed text values of the zAxis labels as they appear on the chart, including any formatting or transformations applied during rendering.
   * @returns {any}
   */
  getZAxisLabels(): any;
  /**
   * Conceals all items within a specified chart group, making them invisible in the chart display. This action does not delete the items; it simply hides them from view while retaining their data and configuration.
   * @param {number} groupIndex. Series group index.
   */
  hideGroup(groupIndex: number): void;
  /**
   * Hides a specific chart item from view, making it invisible in the rendered chart without deleting the underlying data or configuration. This action can be used to temporarily remove a chart element such as a data series, bar, line, or point from display, while preserving its state for later use or re-display.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index.
   */
  hideItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Hides all data points belonging to a specific chart series from view, making the entire series invisible on the chart while preserving its data in the underlying structure.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   */
  hideSerie(groupIndex: number, serieIndex: number): void;
  /**
   * Automatically updates and redraws the chart element to reflect the latest changes whenever its properties or underlying data are modified. This ensures that the displayed chart remains accurate and up-to-date following any updates.
   */
  refresh(): void;
  /**
   * Removes a specified color scheme from the collection. If the color scheme with the given identifier does not exist, this method performs no action and does not raise an error.
   * @param {string} schemeName. The name of the custom color scheme.
   */
  removeColorScheme(schemeName: string): void;
  /**
   * Exports the chart’s current visual content as a JPEG image file, enabling users to save or share the chart in a widely supported image format.
   * @param {string} fileName?. File name.
   * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
   * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
   */
  saveAsJPEG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
  /**
   * Exports the current chart as a PNG image file, capturing all visible elements and formatting. This allows users to download and share the chart as a high-quality raster image suitable for presentations, reports, or further editing.
   * @param {string} fileName?. File name.
   * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
   * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
   */
  saveAsPNG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
  /**
   * Exports the current chart content as a PDF file, allowing users to easily save or share a high-quality, print-ready version of the chart. This function preserves the chart's visual elements, layout, and data in the resulting PDF document.
   * @param {string} fileName?. File name.
   * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
   * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
   */
  saveAsPDF(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
  /**
   * Selects a chart item. If selectionMode is set to 'one', selecting a new item will automatically deselect any previously selected item, ensuring that only one item is selected at a time.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index.
   */
  selectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Displays every item belonging to a specific chart group, providing a comprehensive view of all elements associated with that group.
   * @param {number} groupIndex. Series group index.
   */
  showGroup(groupIndex: number): void;
  /**
   * Displays a single data item within a chart, representing a specific value or data point on the graph for visualization purposes.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index.
   */
  showItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Displays all data points contained within a chart series, providing a comprehensive view of each individual value represented in the selected series.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   */
  showSerie(groupIndex: number, serieIndex: number): void;
  /**
   * Restores the camera to its original position as defined during the initial setup or scene initialization. This function reverts any changes made to the camera’s position during runtime, ensuring it returns to the exact coordinates specified at the start.
   */
  setDefaultPosition(): void;
  /**
   * Configures the camera's interaction mode, which determines how mouse actions affect the camera's view. The available modes are:<br/><br/>- 'zoom': Mouse movements control zooming in and out of the scene.<br/>- 'pan': Mouse movements allow the camera to move (pan) horizontally and vertically across the scene.<br/>- 'default': Mouse interactions follow the standard behavior defined for the camera. Selecting a mode alters how users navigate or manipulate the view within the application using their mouse.
   * @param {string} mode. Camera mode.
   */
  setCameraMode(mode: string): void;
  /**
   * Defines the exact coordinates and orientation of the camera within the 3D scene, determining from which viewpoint the scene is rendered.
   * @param {number} x. X coordinate.
   * @param {number} y. Y coordinate.
   * @param {number} z. Z coordinate.
   * @param {boolean} animation?. Animation Enabled
   */
  setCameraPosition(x: number, y: number, z: number, animation?: boolean): void;
  /**
   * Adjusts the zoom level of the camera, allowing you to change how close or far the view appears. A higher value increases magnification and provides a closer, more detailed view of the scene, while a lower value zooms out to show a wider area.
   * @param {number} level. Zoom level.
   * @param {boolean} animation?. Animation Enabled
   */
  setCameraZoom(level: number, animation?: boolean): void;
  /**
   * Deselects a previously selected chart item, removing any highlighting or focus state applied to it. This action restores the item to its default, unselected appearance within the chart.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index.
   */
  unselectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Efficiently updates the data values of the existing chart series without triggering a complete redraw of the entire chart. This method is ideal for animating rapidly changing data points, ensuring smooth transitions and improved performance by only modifying the necessary elements within the chart.
   */
  update(): void;
}

/**Specifies the camera's position in 3D space. This property requires an object with three numeric properties: '{ x, y, z }', each representing the camera's coordinates along the respective axes. For example: '{ x: 0, y: 10, z: 50 }'. */
export interface ThreeDChartCameraPosition {
  /**
   * Specifies the camera's position along the X axis, which controls its horizontal movement (left and right) within the scene. Adjusting this value moves the camera to the left or right.
   * Default value: 5
   */
  x?: number;
  /**
   * Sets the camera's vertical position along the y-axis. This determines the camera's height or elevation in the scene, controlling its movement up or down relative to the world coordinate system.
   * Default value: 20
   */
  y?: number;
  /**
   * Sets the camera's position along the z-axis, which controls its movement forward or backward in 3D space. Increasing the z value moves the camera further away from the scene, while decreasing it brings the camera closer to the scene.
   * Default value: 55
   */
  z?: number;
}

export interface ThreeDChartSeriesGroup {
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ThreeDChartBand[];
  /**
   * Determines the data source of the serie
   * Default value: null
   */
  dataSource?: any;
  /**
   * Sets the Z-axis width of the series group. Can be set as number or percetage of the slot's width.
   * Default value: 2
   */
  depth?: number | string;
  /**
   * Callback function used to format series labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of series labels.
   * Default value: [object Object]
   */
  formatSettings?: ThreeDChartFormatSettings;
  /**
   * Sets the opacity of the series group.
   * Default value: 1
   */
  opacity?: number;
  /**
   * An array of chart series.
   * Default value: 
   */
  series?: ThreeDChartSeriesGroupSerie[];
  /**
   * When showLabels is set to true, the chart will render pie labels.
   * Default value: true
   */
  showLabels?: boolean;
  /**
   * The start angle (in degrees) of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: 0
   */
  startAngle?: number;
  /**
   * Sets the chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series'stackedcolumn' - stacked column series'stackedcolumn100' - percentage stacked columns'rangecolumn' - floating column between two values'waterfall' - waterfall series'stackedwaterfall' - stacked waterfall series'line' - simple straight lines connecting the value points'stackedline' - stacked lines'stackedline100' - percentage stacked lines'spline' - smooth lines connecting the value points'stackedspline' - smooth stacked lines'stackedspline100' - percentage stacked smooth lines'stepline' - step line'stackedstepline' - stacked step line'stackedstepline100' - percentage stacked step line'area' - area connecting the value points with straight lines'stackedarea' - stacked area with straight lines between the points'stackedarea100' - percentage stacked area with straight lines between the points'rangearea' - floating area between pairs of value points'splinearea' - smooth area connecting the value points'stackedsplinearea' - stacked smooth area connecting the value points'stackedsplinearea100' - percentage stacked smooth area'splinerangearea' - smooth floating area between pairs of value points'steprangearea' - step area between pairs of value points'stackedsplineara' - smooth stacked area'steparea' - step area connecting the value points'stackedsteparea' - step stacked area'stackedsteparea100' - percentage stacked step area'pie' - circular chart divided into sectors, illustrating proportion'donut' - chart divided into circular sectors with different inner and outer radius'scatter' - data is displayed as a collection of points'stackedscatter' - data is displayed as a collection of points and the values are stacked'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked'bubble' - data is displayed as a collection of bubbles'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked'candlestick' - display candlestick series using open, high, low, close data points'ohlc' - display OHLC series using open, high, low, close data points
   * Default value: column
   */
  type?: ThreeDChartType | string;
  /**
   * Sets the Y-axis width of the series group. Used to set the thickness of the line series
   * Default value: 2
   */
  verticalWidth?: number;
  /**
   * Sets the X-axis width of the series group. Can be set as number or percetage of the slot's width.
   * Default value: 2
   */
  width?: number | string;
}

export interface ThreeDChartBand {
  /**
   * Color used to fill the area between the minValue and the maxValue.
   * Default value: null
   */
  color?: string | null;
  /**
   * Band line color.
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Band line width.
   * Default value: null
   */
  lineWidth?: string | number | null;
  /**
   * End value of the color band.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Start value of the color band.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Fraction indicating the fill opacity.
   * Default value: 1
   */
  opacity?: number;
}

/**Object describing the format settings of series labels. */
export interface ThreeDChartFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat?: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces?: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator?: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets?: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix?: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix?: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator?: string | null;
}

export interface ThreeDChartSeriesGroupSerie {
  /**
   * A custom function that returns the color of a data point. The function will receive the following parameters: dataValue, itemIndex, serie, group. The implementation of the function can return a single color which will be used as a fillColor and the other colors will be derived or it can return an object containing fillColor, fillColorSelected, etc.
   * Default value: null
   */
  colorFunction?: any;
  /**
   * Name of the field in the data source.
   * Default value: "null"
   */
  dataField?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldClose?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldHigh?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldLow?: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldOpen?: string;
  /**
   * Data field used in in range column series as a start data field.
   * Default value: "null"
   */
  dataFieldFrom?: string;
  /**
   * Data field used in range column series as an end data field.
   * Default value: "null"
   */
  dataFieldTo?: string;
  /**
   * Data field used in bubble series.
   * Default value: "null"
   */
  radiusDataField?: string;
  /**
   * Name to display for this serie.
   * Default value: "null"
   */
  displayText?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextClose?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextHigh?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextLow?: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextOpen?: string;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings?: ThreeDChartFormatSettings;
  /**
   * Specifies the summary of the series group.
   * Default value: ""
   */
  summary?: string;
  /**
   * Maximum angle in a pie, donut, polar and spider series.
   * Default value: 360
   */
  endAngle?: number;
  /**
   * Initial angle in pie and donut series.
   * Default value: 0
   */
  initialAngle?: number;
  /**
   * Inner radius of donut series in pixels or percents.
   * Default value: 0
   */
  innerRadius?: number;
  /**
   * Object describing the labels properties of the axis.
   * Default value: undefined
   */
  labels?: ThreeDChartLabels;
  /**
   * Fill color of the legend box. The default value is inherited from the serie's color.
   * Default value: null
   */
  legendFillColor?: string | null;
  /**
   * Legend data formatting function for the values in the serie.
   * Default value: null
   */
  legendFormatFunction?: any;
  /**
   * Legend data formatting settings for the values in the serie.
   * Default value: [object Object]
   */
  legendFormatSettings?: ThreeDChartFormatSettings;
  /**
   * Line color of the legend box. The default value is inherited from the serie's color.
   * Default value: null
   */
  legendLineColor?: string | null;
  /**
   * Line color for the serie.
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Line color for the serie when selected.
   * Default value: null
   */
  lineColorSelected?: string | null;
  /**
   * Line color for the marker symbols in serie.
   * Default value: null
   */
  lineColorSymbol?: string | null;
  /**
   * Determines the line tickness of the items in this serie.
   * Default value: null
   */
  lineWidth?: string | null | number;
  /**
   * Determines the line tickness of the items in this serie when selected.
   * Default value: null
   */
  lineWidthSelected?: string | null | number;
  /**
   * Min radius of bubble series in pixels or percents.
   * Default value: null
   */
  minRadius?: string | null | number;
  /**
   * Max radius of bubble series in pixels or percents.
   * Default value: null
   */
  maxRadius?: string | null | number;
  /**
   * Determines the opacity of the items in this serie.
   * Default value: 1
   */
  opacity?: number;
  /**
   * Outer radius of pie and donut series in pixels or percents.
   * Default value: null
   */
  radius?: number | null;
  /**
   * Radius change on selection of pie and donut series in pixels or percents.
   * Default value: null
   */
  selectedRadiusChange?: number | null;
  /**
   * Minimum angle in a pie, donut, polar and spider series.
   * Default value: 0
   */
  startAngle?: number;
  /**
   * Determines the size of the symbol element.
   * Default value: null
   */
  symbolSize?: number;
  /**
   * Determines the size of the symbol element. This property is applicable to line and area series only.
   * Default value: null
   */
  symbolSizeSelected?: number;
  /**
   * Determines the symbol type displayed for the data points in the serie. This parameter is applicable to line, area, scatter and bubble series only.
   * Default value: none
   */
  symbolType?: ThreeDChartSymbolType | string;
  /**
   * Determines the tooltip's background.
   * Default value: null
   */
  toolTipBackground?: string | null;
  /**
   * Determines the tooltip's CSS class name.
   * Default value: null
   */
  toolTipClass?: string | null;
  /**
   * Tooltip data formatting function for the values in the serie.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Tooltip data formatting settings for the values in the serie.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ThreeDChartFormatSettings;
  /**
   * Determines the tooltip's border lines color.
   * Default value: null
   */
  toolTipLineColor?: string | null;
  /**
   * Determines whether to use color gradients.
   * Default value: false
   */
  useGradientColors?: boolean;
}

/**Object describing the labels properties of the axis. */
export interface ThreeDChartLabels {
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle?: number;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings?: ThreeDChartFormatSettings;
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset?: ThreeDChartOffset;
  /**
   * Radius of the labels in pie/donut series.
   * Default value: null
   */
  radius?: number | null;
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step?: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval?: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible?: boolean | string;
}

/**Labels offset. */
export interface ThreeDChartOffset {
  /**
   * Horizontal offset.
   * Default value: 0
   */
  x?: number | null;
  /**
   * Vertical offset.
   * Default value: 0
   */
  y?: number | null;
  /**
   * Horizontal offset on Z-axis.
   * Default value: 0
   */
  z?: number | null;
}

/**Specifies the amount of space (padding) between the chart title (caption) and the edges of the chart area, allowing you to control the distance around the title for better visual separation and readability. */
export interface ThreeDChartPadding {
  /**
   * "Specifies the amount of padding applied to the bottom edge of an element, creating space between the element's content and its bottom border."
   * Default value: 10
   */
  bottom?: number;
  /**
   * Specifies the amount of space added to the left side of an element’s content, creating padding between the content and the element’s left border.
   * Default value: 5
   */
  left?: number;
  /**
   * Adds padding to the right side of an element, creating extra space between the element’s content and its right border.
   * Default value: 5
   */
  right?: number;
  /**
   * Sets the amount of padding space applied to the top of an element, creating vertical space between the element's top edge and its content. Accepts values in units such as pixels (px), ems (em), percentages (%), etc. This property is useful for adjusting layout and improving visual separation within the element.
   * Default value: 5
   */
  top?: number;
}

/**An object containing configuration settings for the y-axis (value axis) of the Chart. This includes properties such as axis labels, scaling options, tick marks, grid lines, range limits (minimum and maximum values), formatting, and other visual or functional parameters that control how the y-axis is displayed and behaves. */
export interface ThreeDChartValueAxis {
  /**
   * Defines the starting reference point (baseline) from which the axis values are measured. This value determines where the axis begins, affecting how data is displayed in relation to this baseline. For example, setting a baseline to zero ensures that the axis starts at zero, which can be important for accurately representing data in charts and graphs.
   * Default value: 0
   */
  baselineValue?: any;
  /**
   * Specifies the label text that appears alongside the axis, providing context or a title for the axis values in the chart or graph.
   * Default value: null
   */
  displayText?: string | null;
  /**
   * A user-defined function that customizes how values are formatted and displayed along the chart axis. This function allows you to control the appearance of axis labels—for example, by adding units, adjusting decimal places, or implementing locale-specific number formatting.
   * Default value: null
   */
  formatFunction?: {(value?: any): string};
  /**
   * Defines configuration options for formatting how values appear along the axis, including number formats, date and time representations, currency symbols, decimal precision, or custom formatting patterns. These settings determine the visual presentation and readability of axis labels on charts or graphs.
   * Default value: [object Object]
   */
  formatSettings?: ThreeDChartFormatSettings;
  /**
   * An object that defines the properties and appearance of the grid lines associated with the valueAxis. This includes settings such as line color, thickness, dash style, visibility, and spacing, allowing customization of how the grid lines are rendered on the value axis of the chart.
   * Default value: [object Object]
   */
  gridLines?: ThreeDChartLines;
  /**
   * An object that defines the properties and configuration options for axis labels, including settings such as text content, font style, color, alignment, rotation, and formatting.
   * Default value: [object Object]
   */
  labels?: ThreeDChartLabels;
  /**
   * Specifies whether the data should be displayed using a logarithmic scale instead of a linear scale. When enabled, values are mapped logarithmically, which is useful for visualizing data that spans several orders of magnitude.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Specifies the base value for the logarithmic scale. Determines the mathematical base (e.g., 10 for log₁₀, 2 for log₂) used to calculate and display values along the axis when a logarithmic (non-linear) scale is applied. Adjusting this affects how data is distributed and visualized on the scale.
   * Default value: 10
   */
  logarithmicScaleBase?: number;
  /**
   * Specifies the highest numerical value that can be displayed on the valueAxis. Any data points exceeding this value will be capped at the specified maximum, effectively defining the upper boundary of the axis range.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Defines the lowest numerical value displayed on the valueAxis. This property determines the starting point of the axis scale, ensuring that no values below this minimum are shown in the chart or graph.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Specifies the time or distance gap separating each unit. This determines how much space or delay exists between consecutive units, allowing you to control the spacing or frequency at which units are displayed, executed, or processed.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Controls the visibility of the value axis on the chart. When enabled, the value axis is displayed; when disabled, it is hidden.
   * Default value: true
   */
  visible?: boolean;
}

/**An object that defines the properties and appearance of the grid lines associated with the valueAxis. This includes settings such as line color, thickness, dash style, visibility, and spacing, allowing customization of how the grid lines are rendered on the value axis of the chart. */
export interface ThreeDChartLines {
  /**
   * Specifies the color used to render the grid lines. Accepts any valid CSS color value (e.g., hex code, RGB, or color name).
   * Default value: ""
   */
  color?: string;
  /**
   * Specifies the spacing between consecutive grid lines, expressed as multiples of the axis unit interval. For example, a value of 2 places a grid line every 2 units along the axis instead of every single unit. This controls the density and visibility of grid lines on the chart or graph.
   * Default value: null
   */
  step?: number | null;
  /**
   * Possible values: true, false, 'custom'.  Controls the visibility of grid lines on the chart:      true: Displays all grid lines.    false: Hides all grid lines.    'custom': Only displays grid lines at specific positions or offsets defined in the gridLines.custom array.    When set to 'custom', be sure to provide desired values in the gridLines.custom array for them to be rendered.
   * Default value: true
   */
  visible?: boolean | string;
}

/**Configures the properties of the chart's x-axis, such as its scale, labels, range, and appearance. This setting determines how data is displayed and organized along the horizontal axis of the chart. */
export interface ThreeDChartXAxis {
  /**
   * Indicates the specific field or property in the data source from which the value should be retrieved or to which data should be mapped. This allows the application to access and utilize the corresponding data for processing, display, or storage purposes.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Specifies an optional custom label to be displayed on the xAxis. If provided, this text will override the default xAxis label.
   * Default value: null
   */
  displayText?: string | null;
  /**
   * Determines if the values should be presented in the opposite sequence from their original order. When set to true, the values are displayed from last to first instead of the default first to last arrangement.
   * Default value: false
   */
  flip?: boolean;
  /**
   * A user-defined function that specifies how values are formatted and displayed along the axis, allowing customization of labels such as number formatting, prefixes/suffixes, or date formatting.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Settings that control how values are formatted and displayed along the axis, including options such as number formatting, date and time representation, decimal precision, and currency symbols.
   * Default value: [object Object]
   */
  formatSettings?: ThreeDChartFormatSettings;
  /**
   * An object that defines the properties and styling options for the grid lines displayed along the x-axis, including attributes such as color, width, dash pattern, and visibility.
   * Default value: [object Object]
   */
  gridLines?: ThreeDChartLines;
  /**
   * An object that defines the properties and configuration options for the axis labels, such as their text, font style, color, rotation, alignment, and formatting.
   * Default value: [object Object]
   */
  labels?: ThreeDChartLabels;
  /**
   * Specifies whether the scale should be displayed using a logarithmic axis instead of a linear axis. A true value enables logarithmic scaling, which is useful for visualizing data that spans several orders of magnitude. A false value uses the default linear scale.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Defines the numerical base used for the logarithmic scale (e.g., base 10 for common logarithms or base 2 for binary logarithms). Determines how values are spaced and displayed along the logarithmic axis.
   * Default value: 10
   */
  logarithmicScaleBase?: number;
  /**
   * Defines the upper limit for the x-axis, restricting the maximum data value that can be displayed. Any values exceeding this limit will not be shown on the x-axis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Specifies the lowest numeric or categorical value that will be displayed on the x-axis. Data points with values below this threshold will not be shown on the chart. This setting is useful for customizing the visible range of the x-axis and focusing on a specific subset of the data.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * "Specifies the configuration for a range selector component displayed along the xAxis. The range selector enables users to interactively select and zoom into specific data ranges on the chart. This selector is implemented as an instance of smart-chart, allowing for consistent theming and behavior with the main charting components."
   * Default value: [object Object]
   */
  rangeSelector?: ThreeDChartRangeSelector;
  /**
   * Specifies the axis type, determining how data is displayed along the axis. The available options are:  'auto' &ndash; Automatically analyzes the dataset and selects the most suitable axis type among 'basic', 'linear', or 'date' for optimal data representation.  'date' &ndash; Formats the axis specifically for displaying date and time values, ensuring proper chronological ordering and labeling of date-based data.  'basic' &ndash; Presents all data points in their sequential order, without applying any scaling or special formatting. Ideal for categorical or non-numeric data.  'linear' &ndash; Arranges the axis based on the numerical values provided in the xAxis data field, using a continuous linear scale suitable for numeric data.
   * Default value: auto
   */
  type?: ThreeDChartXAxisType | string;
  /**
   * Specifies the amount of time or distance between each unit in the sequence, determining how far apart or how frequently the units are spaced. This value controls the regular interval that separates individual units within the set.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Controls the visibility of the x-axis on the chart. When set to true, the x-axis will be displayed; when set to false, the x-axis will be hidden from view.
   * Default value: true
   */
  visible?: boolean;
}

/**<br/><br/>"Specifies the configuration for a range selector component displayed along the xAxis. The range selector enables users to interactively select and zoom into specific data ranges on the chart. This selector is implemented as an instance of ${namespace.toLowerCase()}-chart, allowing for consistent theming and behavior with the main charting components." */
export interface ThreeDChartRangeSelector {
  /**
   * Defines the color used for the range selector chart. If a value is not specified (i.e., set to null), the range selector chart will automatically inherit and use the same color as the main chart. This property allows customization of the range selector chart's appearance to match or differentiate it from the main chart.
   * Default value: null
   */
  color?: string | null;
  /**
   * Callback function that receives a value as input and returns the value formatted for display. This function allows you to customize how values are presented (e.g., date formatting, adding currency symbols, controlling decimal places) before they are rendered in the UI.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Chart Format SettingsConfigure and customize the appearance and formatting options of your chart, including axis styles, gridlines, labels, colors, legend placement, and other visual elements to enhance data presentation and readability.
   * Default value: null
   */
  formatSettings?: any;
  /**
   * An object that defines the properties and configuration options for the labels displayed along the axis, such as font size, color, rotation, alignment, and formatting. This allows for customization of the appearance and behavior of axis labels.
   * Default value: [object Object]
   */
  labels?: ThreeDChartLabels;
  /**
   * Controls the transparency level of the range selector chart by setting its opacity value. A lower value (closer to 0) makes the chart more transparent, while a higher value (up to 1) makes it more opaque. This property allows you to adjust the visibility of the range selector chart within the overall visualization.
   * Default value: 1
   */
  opacity?: number;
  /**
   * Specifies the chart type to be used for the range selector component, determining how the selected data range will be visually represented (e.g., as a line, area, or bar chart) within the range selector interface.
   * Default value: area
   */
  serieType?: ThreeDChartRangeSelectorSerieType | string;
  /**
   * Controls the visibility of the range selector component, allowing you to display or hide the range selection interface within the application.
   * Default value: false
   */
  visible?: boolean;
}

/**Defines the properties and configuration options for the Chart's z-axis, which controls the depth dimension in 3D charts. This setting allows you to specify parameters such as limits, labels, scaling, and appearance of the z-axis, enabling better representation and visualization of data in three-dimensional charts. */
export interface ThreeDChartZAxis {
  /**
   * Specifies the exact field within the data source from which data is retrieved or referenced. This enables the application to access and utilize specific information—such as a property or column—in the data structure.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Specifies optional custom display text for the zAxis label. If provided, this text will be shown instead of the default zAxis label.
   * Default value: null
   */
  displayText?: string | null;
  /**
   * Determines if the values are presented in the opposite sequence, displaying the items from last to first instead of the default first-to-last order.
   * Default value: false
   */
  flip?: boolean;
  /**
   * A user-defined function that customizes how values are displayed along the chart axis, allowing you to modify the formatting, style, or content of axis labels before they are rendered.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Defines the configuration options for formatting how values are displayed along the axis, including number formatting, units, date/time formats, and other visual representation settings.
   * Default value: [object Object]
   */
  formatSettings?: ThreeDChartFormatSettings;
  /**
   * An object that defines the visual and functional properties of the grid lines shown along the z-axis. This includes customizable attributes such as line color, width, style, visibility, and opacity, allowing detailed control over the appearance and behavior of z-axis grid lines in the chart or graph.
   * Default value: [object Object]
   */
  gridLines?: ThreeDChartLines;
  /**
   * An object that defines the properties for the axis labels, including their text content, font style, size, color, alignment, rotation, and other visual or behavioral settings related to the display of labels along the axis.
   * Default value: [object Object]
   */
  labels?: ThreeDChartLabels;
  /**
   * Specifies whether a logarithmic scale should be applied to the data visualization, enabling more effective representation of values that span several orders of magnitude. When set to true, data values are plotted on a logarithmic axis rather than a linear one.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Specifies the base value for the logarithmic scale. This determines the factor by which each successive tick on the axis increases. For example, a base of 10 produces a scale where each step represents a tenfold increase (10, 100, 1000, etc.), while a base of 2 results in a doubling at each step (2, 4, 8, 16, etc.).
   * Default value: 10
   */
  logarithmicScaleBase?: number;
  /**
   * Specifies the highest allowable value for the zAxis, effectively setting the upper limit that data points or chart elements can reach along the z-axis dimension. This is useful for constraining the range of the zAxis in visualizations such as 3D charts or scatter plots.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Specifies the lowest allowed value for the zAxis, determining the minimum boundary for data values displayed along the z-axis. Values below this limit will not be rendered or will be clipped at this threshold.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Specifies the amount of time or distance between each unit in a series, determining how frequently or sparsely the units are placed. For example, in a time-based sequence, this would control the number of seconds or minutes between each event; in a spatial layout, it would define the spacing between elements.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Controls the visibility of the z-axis in the chart. When enabled, the z-axis will be displayed; when disabled, the z-axis will be hidden. This setting is typically used for 3D charts or visualizations that support an additional z-axis dimension.
   * Default value: true
   */
  visible?: boolean;
}

declare global {
    interface Document {
        createElement(tagName: "smart-3d-chart"): ThreeDChart;
        querySelector(selectors: "smart-3d-chart"): ThreeDChart | null;
        querySelectorAll(selectors: "smart-3d-chart"): NodeListOf<ThreeDChart>;
        getElementsByTagName(qualifiedName: "smart-3d-chart"): HTMLCollectionOf<ThreeDChart>;
        getElementsByName(elementName: "smart-3d-chart"): NodeListOf<ThreeDChart>;
    }
}

/**Defines the color palette used for the chart's visual elements. jqxChart supports 32 distinct color schemes, selectable by specifying a scheme name from 'scheme01' through 'scheme32'. Each scheme applies a predefined set of colors to the chart’s data series and components, allowing for easy customization of the chart's appearance. */
export declare type ThreeDChartColorScheme = 'scheme01' | 'scheme02' | 'scheme03' | 'scheme04' | 'scheme05' | 'scheme06' | 'scheme07' | 'scheme08' | 'scheme09' | 'scheme10' | 'scheme11' | 'scheme12' | 'scheme13' | 'scheme14' | 'scheme15' | 'scheme16' | 'scheme17' | 'scheme18' | 'scheme19' | 'scheme20' | 'scheme21' | 'scheme22' | 'scheme23' | 'scheme24' | 'scheme25' | 'scheme26' | 'scheme27' | 'scheme28' | 'scheme29' | 'scheme30' | 'scheme31' | 'scheme32' | 'custom';
/**Specifies whether the legend is generated based on individual chart series or grouped series. When set to "auto", the legend adapts dynamically—using series or series groups as the basis—depending on the current chart type. This ensures the legend remains relevant to how data is visually organized in each chart configuration. */
export declare type ThreeDChartLegendIndex = 'auto' | 'serie' | 'group';
/**Specifies how items can be selected within the component, such as allowing single selection, multiple selections, or disabling selection altogether. */
export declare type ThreeDChartSelectionMode = 'none' | 'single' | 'multiple';
/**Determines the symbol type displayed for the data points in the serie. This parameter is applicable to line, area, scatter and bubble series only. */
export declare type ThreeDChartSymbolType = 'none' | 'circle' | 'square' | 'diamond' | 'triangle_up' | 'triangle_down' | 'triangle_left' | 'triangle_right';
/**Sets the chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series
'stackedcolumn' - stacked column series
'stackedcolumn100' - percentage stacked columns
'rangecolumn' - floating column between two values
'waterfall' - waterfall series
'stackedwaterfall' - stacked waterfall series
'line' - simple straight lines connecting the value points
'stackedline' - stacked lines
'stackedline100' - percentage stacked lines
'spline' - smooth lines connecting the value points
'stackedspline' - smooth stacked lines
'stackedspline100' - percentage stacked smooth lines
'stepline' - step line
'stackedstepline' - stacked step line
'stackedstepline100' - percentage stacked step line
'area' - area connecting the value points with straight lines
'stackedarea' - stacked area with straight lines between the points
'stackedarea100' - percentage stacked area with straight lines between the points
'rangearea' - floating area between pairs of value points
'splinearea' - smooth area connecting the value points
'stackedsplinearea' - stacked smooth area connecting the value points
'stackedsplinearea100' - percentage stacked smooth area
'splinerangearea' - smooth floating area between pairs of value points
'steprangearea' - step area between pairs of value points
'stackedsplineara' - smooth stacked area
'steparea' - step area connecting the value points
'stackedsteparea' - step stacked area
'stackedsteparea100' - percentage stacked step area
'pie' - circular chart divided into sectors, illustrating proportion
'donut' - chart divided into circular sectors with different inner and outer radius
'scatter' - data is displayed as a collection of points
'stackedscatter' - data is displayed as a collection of points and the values are stacked
'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked
'bubble' - data is displayed as a collection of bubbles
'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked
'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked
'candlestick' - display candlestick series using open, high, low, close data points
'ohlc' - display OHLC series using open, high, low, close data points
 */
export declare type ThreeDChartType = 'column' | 'stackedcolumn' | 'stackedcolumn100' | 'rangecolumn' | 'waterfall' | 'stackedwaterfall' | 'line' | 'stackedline' | 'stackedline100' | 'spline' | 'stackedspline' | 'stackedspline100' | 'stepline' | 'stackedstepline' | 'stackedstepline100' | 'area' | 'stackedarea' | 'stackedarea100' | 'rangearea' | 'splinearea' | 'stackedsplinearea' | 'stackedsplinearea100' | 'splinerangearea' | 'steprangearea' | 'stackedsplineara' | 'steparea' | 'stackedsteparea' | 'stackedsteparea100' | 'pie' | 'donut' | 'scatter' | 'stackedscatter' | 'stackedscatter100' | 'bubble' | 'stackedbubble' | 'stackedbubble100' | 'candlestick' | 'ohlc';
/**Specifies the chart type to be used for the range selector component, determining how the selected data range will be visually represented (e.g., as a line, area, or bar chart) within the range selector interface. */
export declare type ThreeDChartRangeSelectorSerieType = 'line' | 'area';
/**Specifies the axis type, determining how data is displayed along the axis. The available options are:<br/><br/><br/>  'auto' &ndash; Automatically analyzes the dataset and selects the most suitable axis type among 'basic', 'linear', or 'date' for optimal data representation.
<br/>  'date' &ndash; Formats the axis specifically for displaying date and time values, ensuring proper chronological ordering and labeling of date-based data.
<br/>  'basic' &ndash; Presents all data points in their sequential order, without applying any scaling or special formatting. Ideal for categorical or non-numeric data.
<br/>  'linear' &ndash; Arranges the axis based on the numerical values provided in the <code>xAxis</code> data field, using a continuous linear scale suitable for numeric data.
<br/> */
export declare type ThreeDChartXAxisType = 'auto' | 'date' | 'basic' | 'linear';
