import  {BaseElement, Animation} from "./smart.element"

export interface ThreeDChartProperties {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Determines the rate of the animation. The default animation rate is 1
   * Default value: 1
   */
  animationSpeed?: number;
  /**
   * Sets whether the chart will rotate automatically.
   * Default value: false
   */
  autoRotate?: boolean;
  /**
   * Sets the speed of the automatic rotation.
   * Default value: 1
   */
  autoRotateSpeed?: number;
  /**
   * Sets the chart's background color. For example: '#DDFFE8'
   * Default value: #ffffff
   */
  backgroundColor?: string | null;
  /**
   * Sets the chart's background to a static linear gradient. The property must be set to an Array of Strings in the format: 'offset, color'
   * Default value: []
   */
  backgroundGradient?: any[];
  /**
   * Sets the chart's background to a static image. For example: 'https://www.htmlelements.com/demos/images/stars.jpg'
   * Default value: ""
   */
  backgroundImage?: string;
  /**
   * Sets the chart's background to a dynamic background image which rotates with the camera. The property must be set an Array of 6 images. All images must have aspect ratio 1:1
   * Default value: []
   */
  backgroundTexture?: any[];
  /**
   * Sets the camera's position. The property must be set to an {x, y, z} object.
   * Default value: [object Object]
   */
  cameraPosition?: ThreeDChartCameraPosition;
  /**
   * Sets the intial camera zoom. The default value is 1
   * Default value: 1
   */
  cameraZoom?: number;
  /**
   * Sets the caption (title) of the chart.
   * Default value: "Caption"
   */
  caption?: string;
  /**
   * Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
   * Default value: scheme01
   */
  colorScheme?: ThreeDChartColorScheme | string;
  /**
   * Sets the chart's controls settings.
   * Default value: [object Object]
   */
  controlsSettings?: any;
  /**
   * Allows substituting default items with custom 3D Objects. The property must be set to an Array of Objects in the format: { groupIndex, serieIndex, itemIndex, modelUrl }
   * Default value: []
   */
  customModels?: any[];
  /**
   * Sets the chart's data source.
   * Default value: 
   */
  dataSource?: any[];
  /**
   * Sets the description text of the chart.
   * Default value: "Description"
   */
  description?: string;
  /**
   * Enables or disables the chart.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Sets whether the chart's toolbar is enabled.
   * Default value: true
   */
  enableControlsToolbar?: boolean;
  /**
   * 
   * Default value: reset-camera,zoom-in,zoom-out,save-image,camera-control
   */
  controlsToolbarItems?: any;
  /**
   * Sets the chart's grid options.
   * Default value: [object Object]
   */
  gridOptions?: any;
  /**
   * Sets whether the legend will be created based on the chart's series or serie groups. "auto" - the legend index will change depending on the Chart type
   * Default value: auto
   */
  legendIndex?: ThreeDChartLegendIndex | string;
  /**
   * Sets the legend's layout.
   * Default value: [object Object]
   */
  legendLayout?: any;
  /**
   * Sets the light color of the 3D Scene.
   * Default value: "#ffffff"
   */
  lightColor?: string;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets or gets a value indicating whether the Chart's layout is mirrored.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * Determines the selection mode.
   * Default value: multiple
   */
  selectionMode?: ThreeDChartSelectionMode | string;
  /**
   * The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
   * Default value: 
   */
  seriesGroups?: ThreeDChartSeriesGroup[];
  /**
   * Determines whether to show grid connecting lines when a chart item is hovered over.
   * Default value: false
   */
  showConnectionLines?: boolean;
  /**
   * Determines whether to show or hide the chart series legend.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Determines whether to show or hide the chart series legend table.
   * Default value: false
   */
  showLegendTable?: boolean;
  /**
   * Enables or disables the chart tooltips.
   * Default value: true
   */
  showToolTips?: boolean;
  /**
   * Sets the padding of the chart's title (caption).
   * Default value: [object Object]
   */
  titlePadding?: ThreeDChartPadding;
  /**
   * User defined tooltip text formatting callback function.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Tooltip data formatting settings for the values in the serie.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ThreeDChartFormatSettings;
  /**
   * Tooltip line color. By default it is set to the hovered item's color
   * Default value: null
   */
  toolTipLineColor?: string | null;
  /**
   * An object with settings about the Chart's y-axis (value axis).
   * Default value: [object Object]
   */
  valueAxis?: ThreeDChartValueAxis;
  /**
   * Sets the Chart's xAxis.
   * Default value: [object Object]
   */
  xAxis?: ThreeDChartXAxis;
  /**
   * Sets the Chart's zAxis.
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
   * The event is raised when the user clicks on a chart element.
	* @param event. The custom event. Custom data event was created with: ev.detail(itemIndex, serieIndex, groupIndex)
   *  itemIndex - The item index of the item.
   *  serieIndex - The serie index of the item.
   *  groupIndex - The group index of the item.
   */
  onItemClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is raised when a chart element is shown.
	* @param event. The custom event. Custom data event was created with: ev.detail(itemIndex, serieIndex, groupIndex)
   *  itemIndex - The item index of the item.
   *  serieIndex - The serie index of the item.
   *  groupIndex - The group index of the item.
   */
  onShow?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is raised when a chart element is hidden.
	* @param event. The custom event. Custom data event was created with: ev.detail(itemIndex, serieIndex, groupIndex)
   *  itemIndex - The item index of the item.
   *  serieIndex - The serie index of the item.
   *  groupIndex - The group index of the item.
   */
  onHide?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is raised when a chart element is selected.
	* @param event. The custom event. Custom data event was created with: ev.detail(itemIndex, serieIndex, groupIndex)
   *  itemIndex - The item index of the item.
   *  serieIndex - The serie index of the item.
   *  groupIndex - The group index of the item.
   */
  onSelect?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is raised when a chart element is unselected.
	* @param event. The custom event. Custom data event was created with: ev.detail(itemIndex, serieIndex, groupIndex)
   *  itemIndex - The item index of the item.
   *  serieIndex - The serie index of the item.
   *  groupIndex - The group index of the item.
   */
  onUnselect?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is raised after the chart's range selector position changes and after the chart ends rendering.
	* @param event. The custom event. Custom data event was created with: ev.detail(minValue, maxValue)
   *  minValue - The start value of the range selector.
   *  maxValue - The end value of the range selector.
   */
  onRangeSelectionChanged?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is raised when the chart's range selector position changes and before the chart starts rendering. The event can be default prevented to cancel the range selection change.
	* @param event. The custom event. Custom data event was created with: ev.detail(minValue, maxValue, oldMinValue, oldMaxValue)
   *  minValue - The start value of the range selector.
   *  maxValue - The end value of the range selector.
   *  oldMinValue - The previous start value of the range selector.
   *  oldMaxValue - The previous end value of the range selector.
   */
  onRangeSelectionChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is raised when the chart begins rendering.
	* @param event. The custom event.    */
  onRefreshBegin?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is raised when the chart finishes rendering.
	* @param event. The custom event.    */
  onRefreshEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is raised when the chart begins resizing.
	* @param event. The custom event.    */
  onResizeBegin?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is raised when the chart finishes resizing.
	* @param event. The custom event.    */
  onResizeEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
   * @param {string} schemeName. The name of the custom color scheme.
   * @param {any[]} colorsArray. An array of color values.
   */
  addColorScheme(schemeName: string, colorsArray: any[]): void;
  /**
   * Begins an update of the chart. The chart will not be rendered until the endUpdate method is called.
   */
  beginUpdate(): void;
  /**
   * Ends an update of the chart. The chart will be rendered after the endUpdate method is called.
   * @param {boolean} refresh?. If set to true, the chart will complete a full refresh.
   */
  endUpdate(refresh?: boolean): void;
  /**
   * Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
   * @param {string} schemeName. The name of the color scheme.
   * @returns {any[]}
   */
  getColorScheme(schemeName: string): any[];
  /**
   * Gets the item with the specified indexes.
   * @param {number | null} groupIndex?. Series group index.
   * @param {number | null} serieIndex?. Series index.
   * @param {number | null} itemIndex?. Item (data point) index.
   * @returns {any}
   */
  getItemByIndexes(groupIndex?: number | null, serieIndex?: number | null, itemIndex?: number | null): any;
  /**
   * Gets an arrat of the items with the specified indexes. Leaving an index null will return all items that match the other indexes.
   * @param {number | null} groupIndex?. Series group index.
   * @param {number | null} serieIndex?. Series index.
   * @param {number | null} itemIndex?. Item (data point) index.
   * @returns {any}
   */
  getItemsByIndexes(groupIndex?: number | null, serieIndex?: number | null, itemIndex?: number | null): any;
  /**
   * Gets the indexes of the hidden series.
   * @returns {{ groupIndex: number, serieIndex: number, itemIndex: number }[]}
   */
  getHidden(): { groupIndex: number, serieIndex: number, itemIndex: number }[];
  /**
   * Gets the selected items.
   * @returns {any[]}
   */
  getSelection(): any[];
  /**
   * Gets the rendered values of the valueAxis labels.
   * @returns {any}
   */
  getValueAxisLabels(): any;
  /**
   * Gets the rendered values of the xAxis labels.
   * @returns {any}
   */
  getXAxisLabels(): any;
  /**
   * Gets the rendered values of the zAxis labels.
   * @returns {any}
   */
  getZAxisLabels(): any;
  /**
   * Hides all items of a chart group.
   * @param {number} groupIndex. Series group index.
   */
  hideGroup(groupIndex: number): void;
  /**
   * Hides a chart item.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index.
   */
  hideItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Hides all items of a chart serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   */
  hideSerie(groupIndex: number, serieIndex: number): void;
  /**
   * Refreshes the content of the chart element after a property or data update.
   */
  refresh(): void;
  /**
   * Removes an existing color scheme. If the scheme does not exist, the method has no effect.
   * @param {string} schemeName. The name of the custom color scheme.
   */
  removeColorScheme(schemeName: string): void;
  /**
   * Exports the chart's content as JPEG image.
   * @param {string} fileName?. File name.
   * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
   * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
   */
  saveAsJPEG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
  /**
   * Exports the chart's content as PNG image.
   * @param {string} fileName?. File name.
   * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
   * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
   */
  saveAsPNG(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
  /**
   * Exports the chart's content as PDF file.
   * @param {string} fileName?. File name.
   * @param {boolean} includeLegend?. Sets whether the legend will be part of the saved file.
   * @param {boolean} includeCaption?. Sets whether the caption will be part of the saved file.
   */
  saveAsPDF(fileName?: string, includeLegend?: boolean, includeCaption?: boolean): void;
  /**
   * Selects a chart item. If selectionMode is 'one', the previous item will be unselected.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index.
   */
  selectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Shows all items of a chart group.
   * @param {number} groupIndex. Series group index.
   */
  showGroup(groupIndex: number): void;
  /**
   * Shows a chart item.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index.
   */
  showItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Shows all items of a chart serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   */
  showSerie(groupIndex: number, serieIndex: number): void;
  /**
   * Sets the camera position to its position during the initialization.
   */
  setDefaultPosition(): void;
  /**
   * Sets the camera mode. Different camera modes change the control actions of the mouse. Available modes are 'zoom', 'pan' and 'default'.
   * @param {string} mode. Camera mode.
   */
  setCameraMode(mode: string): void;
  /**
   * Sets the camera position.
   * @param {number} x. X coordinate.
   * @param {number} y. Y coordinate.
   * @param {number} z. Z coordinate.
   * @param {boolean} animation?. Animation Enabled
   */
  setCameraPosition(x: number, y: number, z: number, animation?: boolean): void;
  /**
   * Sets the camera zoom.
   * @param {number} level. Zoom level.
   * @param {boolean} animation?. Animation Enabled
   */
  setCameraZoom(level: number, animation?: boolean): void;
  /**
   * Unelects a chart item.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index.
   */
  unselectItem(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
   */
  update(): void;
}

/**Sets the camera's position. The property must be set to an {x, y, z} object. */
export interface ThreeDChartCameraPosition {
  /**
   * Sets the camera's x position. This is the left-right axis
   * Default value: 5
   */
  x?: number;
  /**
   * Sets the camera's y position. This is the up-down axis
   * Default value: 20
   */
  y?: number;
  /**
   * Sets the camera's z position. This is the forward-backward axis
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

/**Sets the padding of the chart's title (caption). */
export interface ThreeDChartPadding {
  /**
   * Bottom padding.
   * Default value: 10
   */
  bottom?: number;
  /**
   * Left padding.
   * Default value: 5
   */
  left?: number;
  /**
   * Right padding.
   * Default value: 5
   */
  right?: number;
  /**
   * Top padding.
   * Default value: 5
   */
  top?: number;
}

/**An object with settings about the Chart's y-axis (value axis). */
export interface ThreeDChartValueAxis {
  /**
   * Sets the baseline value for the axis.
   * Default value: 0
   */
  baselineValue?: any;
  /**
   * Sets the text displayed on the axis.
   * Default value: null
   */
  displayText?: string | null;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction?: {(value?: any): string};
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings?: ThreeDChartFormatSettings;
  /**
   * Object describing the grid lines properties of the valueAxis.
   * Default value: [object Object]
   */
  gridLines?: ThreeDChartLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ThreeDChartLabels;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase?: number;
  /**
   * Sets the maximum value of the valueAxis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Sets the minimum value of the valueAxis.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Shows or hides the valueAxis.
   * Default value: true
   */
  visible?: boolean;
}

/**Object describing the grid lines properties of the valueAxis. */
export interface ThreeDChartLines {
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color?: string;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step?: number | null;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible?: boolean | string;
}

/**Sets the Chart's xAxis. */
export interface ThreeDChartXAxis {
  /**
   * Points to a data field in the data source.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Optional custom xAxis display text.
   * Default value: null
   */
  displayText?: string | null;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip?: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings?: ThreeDChartFormatSettings;
  /**
   * Object describing the grid lines properties of the xAxis.
   * Default value: [object Object]
   */
  gridLines?: ThreeDChartLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ThreeDChartLabels;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase?: number;
  /**
   * Sets the maximum value of the xAxis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Sets the minimum value of the xAxis.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Definition of a range selector on the xAxis. The range selector itself is also an instance of smart-chart.
   * Default value: [object Object]
   */
  rangeSelector?: ThreeDChartRangeSelector;
  /**
   * The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.'date' - when displaying dates.'basic' - displays all data points sequentially.'linear' - linear arrangement by the value of the xAxis data field.
   * Default value: auto
   */
  type?: ThreeDChartXAxisType | string;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Shows or hides the xAxis.
   * Default value: true
   */
  visible?: boolean;
}

/**Definition of a range selector on the xAxis. The range selector itself is also an instance of ${namespace.toLowerCase()}-chart. */
export interface ThreeDChartRangeSelector {
  /**
   * Sets the color of the range selector chart. If null, it will be set to the same color as the chart
   * Default value: null
   */
  color?: string | null;
  /**
   * Callback function used to format the values.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Chart Format Settings
   * Default value: null
   */
  formatSettings?: any;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ThreeDChartLabels;
  /**
   * Sets the opacity of the range selector chart.
   * Default value: 1
   */
  opacity?: number;
  /**
   * Sets the range selector chart type
   * Default value: area
   */
  serieType?: ThreeDChartRangeSelectorSerieType | string;
  /**
   * Shows or hides the range selector.
   * Default value: false
   */
  visible?: boolean;
}

/**Sets the Chart's zAxis. */
export interface ThreeDChartZAxis {
  /**
   * Points to a data field in the data source.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Optional custom zAxis display text.
   * Default value: null
   */
  displayText?: string | null;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip?: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings?: ThreeDChartFormatSettings;
  /**
   * Object describing the grid lines properties of the zAxis.
   * Default value: [object Object]
   */
  gridLines?: ThreeDChartLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ThreeDChartLabels;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale?: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase?: number;
  /**
   * Sets the maximum value of the zAxis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Sets the minimum value of the zAxis.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Shows or hides the zAxis.
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

/**Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
export declare type ThreeDChartColorScheme = 'scheme01' | 'scheme02' | 'scheme03' | 'scheme04' | 'scheme05' | 'scheme06' | 'scheme07' | 'scheme08' | 'scheme09' | 'scheme10' | 'scheme11' | 'scheme12' | 'scheme13' | 'scheme14' | 'scheme15' | 'scheme16' | 'scheme17' | 'scheme18' | 'scheme19' | 'scheme20' | 'scheme21' | 'scheme22' | 'scheme23' | 'scheme24' | 'scheme25' | 'scheme26' | 'scheme27' | 'scheme28' | 'scheme29' | 'scheme30' | 'scheme31' | 'scheme32' | 'custom';
/**Sets whether the legend will be created based on the chart's series or serie groups. "auto" - the legend index will change depending on the Chart type */
export declare type ThreeDChartLegendIndex = 'auto' | 'serie' | 'group';
/**Determines the selection mode. */
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
/**Sets the range selector chart type */
export declare type ThreeDChartRangeSelectorSerieType = 'line' | 'area';
/**The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.
'date' - when displaying dates.
'basic' - displays all data points sequentially.
'linear' - linear arrangement by the value of the xAxis data field.
 */
export declare type ThreeDChartXAxisType = 'auto' | 'date' | 'basic' | 'linear';
