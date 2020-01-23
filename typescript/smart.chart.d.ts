import  {BaseElement} from "./smart.element"

/**
 Chart is a feature-complete interactive graph library that answers the data visualization needs of any modern web app.
*/
export interface Chart extends BaseElement {
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'.
   * Default value: advanced
   */
  animation: "none" | "simple" | "advanced";
  /**
   * Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range smartChart will reset it to the default value.
   * Default value: 300
   */
  animationDuration: number;
  /**
   * Sets the chart's background color.
   * Default value: null
   */
  backgroundColor: string | null;
  /**
   * Sets the chart's background image.
   * Default value: ""
   */
  backgroundImage: string;
  /**
   * Sets the chart's border color.
   * Default value: null
   */
  borderLineColor: string | null;
  /**
   * Sets the chart's border line width.
   * Default value: 1
   */
  borderLineWidth: number;
  /**
   * Sets the caption (title) of the chart.
   * Default value: "Caption"
   */
  caption: string;
  /**
   * Determines whether to clip plotted elements that overflow the axis boundaries.
   * Default value: true
   */
  clip: boolean;
  /**
   * Sets the chart's color pallete. smartChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
   * Default value: scheme01
   */
  colorScheme: "scheme01" | "scheme02" | "scheme03" | "scheme04" | "scheme05" | "scheme06" | "scheme07" | "scheme08" | "scheme09" | "scheme10" | "scheme11" | "scheme12" | "scheme13" | "scheme14" | "scheme15" | "scheme16" | "scheme17" | "scheme18" | "scheme19" | "scheme20" | "scheme21" | "scheme22" | "scheme23" | "scheme24" | "scheme25" | "scheme25" | "scheme26" | "scheme27" | "scheme28" | "scheme29" | "scheme30" | "scheme31" | "scheme32";
  /**
   * Enables or disables overlapping of the column series.
   * Default value: false
   */
  columnSeriesOverlap: boolean;
  /**
   * Gets or sets the color of the crosshairs lines.
   * Default value: null
   */
  crosshairsColor: string | null;
  /**
   * Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: "2,2"
   */
  crosshairsDashStyle: string;
  /**
   * Gets or sets the width of the crosshairs lines.
   * Default value: 1
   */
  crosshairsLineWidth: number;
  /**
   * Sets the chart's data source.
   * Default value: 
   */
  dataSource: any;
  /**
   * Sets the description text of the chart.
   * Default value: "Description"
   */
  description: string;
  /**
   * Enables or disables the chart.
   * Default value: false
   */
  disabled: boolean;
  /**
   * Determines the drawing function of smartChart. When the property is set, you can override the smartChart's drawing.
   * Default value: null
   */
  draw: any;
  /**
   * Function for custom drawing before the caption and other chart elements.
   * Default value: null
   */
  drawBefore: any;
  /**
   * Determines if the animation of the axes text is enabled.
   * Default value: false
   */
  enableAxisTextAnimation: boolean;
  /**
   * Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point.
   * Default value: false
   */
  enableCrosshairs: boolean;
  /**
   * Determines whether to display the chart using greyscale colors.
   * Default value: false
   */
  greyScale: boolean;
  /**
   * Sets the legend's layout.
   * Default value: [object Object]
   */
  legendLayout: any;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale: string;
  /**
   * Localization object containing culture-specific properties required for formatting currencies, numbers and dates.
   * Default value: [object Object]
   */
  localization: ChartLocalization;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages: any;
  /**
   * Sets the left, top, right and bottom padding of the Chart.
   * Default value: [object Object]
   */
  padding: ChartPadding;
  /**
   * Determines the rendering engine used to display the chart. When the property is set to an empty string, smartChart will automatically select an optimal rendering engine depending on the browser capabilities.
   * Default value: 
   */
  renderEngine: "" | "SVG" | "HTML5";
  /**
   * Sets or gets a value indicating whether the Chart's layout is mirrored.
   * Default value: false
   */
  rightToLeft: boolean;
  /**
   * The seriesGroups property is used to describe all series displayed on the chart. smartChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
   * Default value: 
   */
  seriesGroups: ChartSeriesGroup[];
  /**
   * Determines whether to display the chart's border line.
   * Default value: true
   */
  showBorderLine: boolean;
  /**
   * Determines whether to show or hide the chart series legend.
   * Default value: true
   */
  showLegend: boolean;
  /**
   * Enables or disables the chart tooltips.
   * Default value: true
   */
  showToolTips: boolean;
  /**
   * Determines whether to show a composite tooltip containing information for all series.
   * Default value: false
   */
  showToolTipsOnAllSeries: boolean;
  /**
   * Determines the set of default background, line, text and band colors that will be used in the Chart.
   * Default value: light
   */
  theme: "light" | "dark";
  /**
   * Sets the padding of the chart's title (caption).
   * Default value: [object Object]
   */
  titlePadding: ChartTitlePadding;
  /**
   * Tooltip background color.
   * Default value: null
   */
  toolTipBackground: string | null;
  /**
   * User defined tooltip text formatting callback function.
   * Default value: null
   */
  toolTipFormatFunction: any;
  /**
   * Determines the tooltip hide delay in milliseconds.
   * Default value: 4000
   */
  toolTipHideDelay: number;
  /**
   * Tooltip line color.
   * Default value: null
   */
  toolTipLineColor: string | null;
  /**
   * Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms].
   * Default value: 300
   */
  toolTipShowDelay: number;
  /**
   * An object with settings about the Chart's y-axis (value axis).
   * Default value: [object Object]
   */
  valueAxis: ChartValueAxis;
  /**
   * Sets the Chart's xAxis.
   * Default value: [object Object]
   */
  xAxis: ChartXAxis;
  /** 
   * The event is raised when the user clicks on a chart annotation.
   * @param ev. The custom event.    */
  onannotationclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor above a chart annotation.
   * @param ev. The custom event.    */
  onannotationmouseenter: ((this: Window, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor out of a chart annotation.
   * @param ev. The custom event.    */
  onannotationmouseleave: ((this: Window, ev: Event) => any) | null;
  /** 
   * The event is raised when the user clicks on series element.
   * @param ev. The custom event.    */
  onclick: ((this: Window, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor out of a series element.
   * @param ev. The custom event.    */
  onmouseout: ((this: Window, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor above a series element.
   * @param ev. The custom event.    */
  onmouseover: ((this: Window, ev: Event) => any) | null;
  /** 
   * The event is raised after the chart's range selector position changes and after the chart ends rendering.
   * @param ev. The custom event.    */
  onrangeselectionchanged: ((this: Window, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart's range selector position changes and before the chart starts rendering.
   * @param ev. The custom event.    */
  onrangeselectionchanging: ((this: Window, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart begins rendering.
   * @param ev. The custom event.    */
  onrefreshbegin: ((this: Window, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart finishes rendering.
   * @param ev. The custom event.    */
  onrefreshend: ((this: Window, ev: Event) => any) | null;
  /** 
   * The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
   * @param ev. The custom event.    */
  ontoggle: ((this: Window, ev: Event) => any) | null;
  /**
   * Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors.
   * @param {string} schemeName. The name of the custom color scheme.
   * @param {any[]} colorsArray. An array of color values.
   */
  addColorScheme(schemeName: string, colorsArray: any[]): void;
  /**
   * Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined.
   * @param {string} schemeName. The name of the color scheme.
   * @returns {any[]}
   */
  getColorScheme(schemeName: string): any[];
  /**
   * Gets the rendered coordinates of a data point element.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex. Item (data point) index.
   * @returns {any}
   */
  getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): any;
  /**
   * Gets the number of rendered items in a specific serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @returns {number}
   */
  getItemsCount(groupIndex: number, serieIndex: number): number;
  /**
   * Gets the rendered coordinates and values of the valueAxis labels.
   * @param {number} groupIndex. Series group index.
   * @returns {any[]}
   */
  getValueAxisLabels(groupIndex: number): any[];
  /**
   * Gets the rendered rectangle coordinates of the valueAxis of specific serie group.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getValueAxisRect(groupIndex: number): any;
  /**
   * Gets the valueAxis (vertical axis)'s value.
   * @param {number} offset. Vertical offset.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getValueAxisValue(offset: number, groupIndex: number): any;
  /**
   * Gets the rendered coordinates and values of the xAxis labels.
   * @param {number} groupIndex. Series group index.
   * @returns {any[]}
   */
  getXAxisLabels(groupIndex: number): any[];
  /**
   * Gets the rendered rectangle coordinates of the x-Axis of specific serie group.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getXAxisRect(groupIndex: number): any;
  /**
   * Gets the xAxis (horizontal axis)'s value.
   * @param {number} offset. Horizontal offset.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getXAxisValue(offset: number, groupIndex: number): any;
  /**
   * Hides a chart serie. The result of calling this function is same as the user unchecking the legend box of a chart serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
   */
  hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Hides the current tooltip if visible.
   * @param {number} hideDelay?. Hide delay.
   */
  hideToolTip(hideDelay?: number): void;
  /**
   * Prints the chart.
   */
  print(): void;
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
   */
  saveAsJPEG(fileName?: string): void;
  /**
   * Exports the chart's content as PNG image.
   * @param {string} fileName?. File name.
   */
  saveAsPNG(fileName?: string): void;
  /**
   * Exports the chart's content as PDF.
   * @param {string} fileName?. File name.
   * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
   */
  saveAsPDF(fileName?: string, pageOrientation?: string): void;
  /**
   * Shows a hidden chart serie. The result of calling this function is same as the user checking the legend box of a chart serie.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
   */
  showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Shows a the tooltip for a particular data point.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex. Item (data point) index.
   * @param {number} showDelay?. Show delay.
   * @param {number} hideDelay?. Hide delay.
   */
  showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void;
  /**
   * Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values.
   */
  update(): void;
}

/**Localization object containing culture-specific properties required for formatting currencies, numbers and dates. */
export interface ChartLocalization {
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number.
   * Default value: "."
   */
  decimalSeparator: string;
  /**
   * An object containing datetime formatting patterns.
   * Default value: null
   */
  patterns: any;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc.
   * Default value: ""
   */
  thousandsSeparator: string;
}

/**Sets the left, top, right and bottom padding of the Chart. */
export interface ChartPadding {
  /**
   * Bottom padding of the Chart.
   * Default value: 5
   */
  bottom: number;
  /**
   * Left padding of the Chart.
   * Default value: 5
   */
  left: number;
  /**
   * Right padding of the Chart.
   * Default value: 5
   */
  right: number;
  /**
   * Top padding of the Chart.
   * Default value: 5
   */
  top: number;
}

export interface ChartSeriesGroup {
  /**
   * An array of chart annotation objects.
   * Default value: null
   */
  annotations: ChartSeriesGroupAnnotation[];
  /**
   * Percentage gap between columns within the same serie.
   * Default value: 25
   */
  columnsGapPercent: number;
  /**
   * Maximum width of columns in column series.
   * Default value: null
   */
  columnsMaxWidth: number;
  /**
   * Minimum width of columns in column series.
   * Default value: 1
   */
  columnsMinWidth: number;
  /**
   * Columns bottom width (as percentage of the total width).
   * Default value: 100
   */
  columnsBottomWidthPercent: number;
  /**
   * Columns top width (as percentage of the total width).
   * Default value: 100
   */
  columnsTopWidthPercent: number;
  /**
   * Determines the drawing function of the series group. When the property is set, you can draw after the series group has been plotted.
   * Default value: null
   */
  draw: any;
  /**
   * Function for custom drawing before the series group.
   * Default value: null
   */
  drawBefore: any;
  /**
   * Determines whether series are selectable.
   * Default value: true
   */
  enableSelection: boolean;
  /**
   * Determines whether to toggle series visibility after click on a legend's box.
   * Default value: true
   */
  enableSeriesToggle: boolean;
  /**
   * The end angle (in degrees) of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: 360
   */
  endAngle: number;
  /**
   * Callback function used to format series labels.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Object describing the format settings of series labels.
   * Default value: [object Object]
   */
  formatSettings: ChartSeriesGroupFormatSettings;
  /**
   * Horizontal position of the center of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  offsetX: number;
  /**
   * Vertical position of the center of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  offsetY: number;
  /**
   * Specifies the orientation of the series group.
   * Default value: vertical
   */
  orientation: "vertical" | "horizontal";
  /**
   * When polar is set to true, the chart will render in polar coordinates.
   * Default value: false
   */
  polar: boolean;
  /**
   * The radius of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  radius: number;
  /**
   * An array of chart series.
   * Default value: 
   */
  series: ChartSeriesGroupSerie[];
  /**
   * Percentage gap between columns belonging to different series.
   * Default value: 10
   */
  seriesGapPercent: number;
  /**
   * Determines whether to display overlapping data points in column, ohlc and candlestick series.
   * Default value: true
   */
  skipOverlappingPoints: boolean;
  /**
   * When spider is set to true, the chart will render in polar coordinates.
   * Default value: false
   */
  spider: boolean;
  /**
   * The start angle (in degrees) of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: 0
   */
  startAngle: number;
  /**
   * Sets the chart type. smartChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, smartChart supports the following series types:'column' - simple column series'stackedcolumn' - stacked column series'stackedcolumn100' - percentage stacked columns'rangecolumn' - floating column between two values'waterfall' - waterfall series'stackedwaterfall' - stacked waterfall series'line' - simple straight lines connecting the value points'stackedline' - stacked lines'stackedline100' - percentage stacked lines'spline' - smooth lines connecting the value points'stackedspline' - smooth stacked lines'stackedspline100' - percentage stacked smooth lines'stepline' - step line'stackedstepline' - stacked step line'stackedstepline100' - percentage stacked step line'area' - area connecting the value points with straight lines'stackedarea' - stacked area with straight lines between the points'stackedarea100' - percentage stacked area with straight lines between the points'rangearea' - floating area between pairs of value points'splinearea' - smooth area connecting the value points'stackedsplinearea' - stacked smooth area connecting the value points'stackedsplinearea100' - percentage stacked smooth area'splinerangearea' - smooth floating area between pairs of value points'steprangearea' - step area between pairs of value points'stackedsplineara' - smooth stacked area'steparea' - step area connecting the value points'stackedsteparea' - step stacked area'stackedsteparea100' - percentage stacked step area'pie' - circular chart divided into sectors, illustrating proportion'donut' - chart divided into circular sectors with different inner and outer radius'scatter' - data is displayed as a collection of points'stackedscatter' - data is displayed as a collection of points and the values are stacked'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked'bubble' - data is displayed as a collection of bubbles'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked'candlestick' - display candlestick series using open, high, low, close data points'ohlc' - display OHLC series using open, high, low, close data points
   * Default value: null
   */
  type: "column" | "stackedcolumn" | "stackedcolumn100" | "rangecolumn" | "waterfall" | "stackedwaterfall" | "line" | "stackedline" | "stackedline100" | "spline" | "stackedspline" | "stackedspline100" | "stepline" | "stackedstepline" | "stackedstepline100" | "area" | "stackedarea" | "stackedarea100" | "rangearea" | "splinearea" | "stackedsplinearea" | "stackedsplinearea100" | "splinerangearea" | "steprangearea" | "stackedsplineara" | "steparea" | "stackedsteparea" | "stackedsteparea100" | "pie" | "donut" | "scatter" | "stackedscatter" | "stackedscatter100" | "bubble" | "stackedbubble" | "stackedbubble100" | "candlestick" | "ohlc";
  /**
   * Determines whether to use color gradients.
   * Default value: false
   */
  useGradientColors: boolean;
  /**
   * Object describing the valueAxis for this group. smartChart allows you to use a common valueAxis and/or multiple value axes per serie group.
   * Default value: [object Object]
   */
  valueAxis: ChartSeriesGroupValueAxis;
  /**
   * Object describing the xAxis for this group.
   * Default value: [object Object]
   */
  xAxis: ChartSeriesGroupXAxis;
}

export interface ChartSeriesGroupAnnotation {
  /**
   * Fill/background color of the annotation.
   * Default value: null
   */
  fillColor: string | null;
  /**
   * Height of the annotation.
   * Default value: null
   */
  height: number;
  /**
   * Line color of the annotation.
   * Default value: null
   */
  lineColor: string | null;
  /**
   * Custom offset of the annotation relative to xValue & yValue.
   * Default value: [object Object]
   */
  offset: ChartSeriesGroupAnnotationOffset;
  /**
   * Line path command in case the type is 'path', e.g. 'M 10,10 L 20,20 L 50,50'.
   * Default value: null
   */
  path: string | null;
  /**
   * Radius of the annotation in case its type is 'circle'.
   * Default value: null
   */
  radius: number;
  /**
   * Object describing the text of the annotation.
   * Default value: [object Object]
   */
  text: ChartSeriesGroupAnnotationText;
  /**
   * Shape type of the annotation.
   * Default value: null
   */
  type: "rect" | "circle" | "line" | "path";
  /**
   * Width of the annotation.
   * Default value: null
   */
  width: number;
  /**
   * Value to determine the horizontal offset of the annotation.
   * Default value: null
   */
  xValue: number;
  /**
   * Optional 2nd value to determine the horizontal offset of the annotation bottom-right point.
   * Default value: null
   */
  xValue2: number;
  /**
   * Value to determine the vertical offset of the annotation.
   * Default value: null
   */
  yValue: number;
  /**
   * Optional 2nd value to determine the vertical offset of the annotation's bottom-right point.
   * Default value: null
   */
  yValue2: number;
}

/**Custom offset of the annotation relative to <strong>xValue</strong> & <strong>yValue</strong>. */
export interface ChartSeriesGroupAnnotationOffset {
  /**
   * Horizontal offset.
   * Default value: null
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: null
   */
  y: number;
}

/**Object describing the text of the annotation. */
export interface ChartSeriesGroupAnnotationText {
  /**
   * Text rotation angle.
   * Default value: null
   */
  angle: number;
  /**
   * CSS class of the annotation.
   * Default value: null
   */
  class: string | null;
  /**
   * Inner text color (fill).
   * Default value: null
   */
  fillColor: string | null;
  /**
   * Horizontal text alignment.
   * Default value: center
   */
  horizontalAlignment: "center" | "left" | "right";
  /**
   * Outer text color (stroke).
   * Default value: null
   */
  lineColor: string | null;
  /**
   * Offset of the annotation text relative to the base annotation offset.
   * Default value: [object Object]
   */
  offset: ChartSeriesGroupAnnotationTextOffset;
  /**
   * Position to rotate the text around.
   * Default value: centermiddle
   */
  rotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Text of the annotation.
   * Default value: null
   */
  value: string | null;
  /**
   * Vertical text alignment.
   * Default value: center
   */
  verticalAlignment: "center" | "top" | "bottom";
}

/**Offset of the annotation text relative to the base annotation offset. */
export interface ChartSeriesGroupAnnotationTextOffset {
  /**
   * Horizontal offset.
   * Default value: null
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: null
   */
  y: number;
}

/**Object describing the format settings of series labels. */
export interface ChartSeriesGroupFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

export interface ChartSeriesGroupSerie {
  /**
   * Offset from the center point in a pie/donut series.
   * Default value: 0
   */
  centerOffset: any;
  /**
   * A custom function that returns the color of a data point. The function will receive the following parameters: dataValue, itemIndex, serie, group. The implementation of the function can return a single color which will be used as a fillColor and the other colors will be derived or it can return an object containing fillColor, fillColorSelected, etc.
   * Default value: null
   */
  colorFunction: any;
  /**
   * Color palette to use when rendering the serie.
   * Default value: null
   */
  colorScheme: "scheme01" | "scheme02" | "scheme03" | "scheme04" | "scheme05" | "scheme06" | "scheme07" | "scheme08" | "scheme09" | "scheme10" | "scheme11" | "scheme12" | "scheme13" | "scheme14" | "scheme15" | "scheme16" | "scheme17" | "scheme18" | "scheme19" | "scheme20" | "scheme21" | "scheme22" | "scheme23" | "scheme24" | "scheme25" | "scheme25" | "scheme26" | "scheme27" | "scheme28" | "scheme29" | "scheme30" | "scheme31" | "scheme32";
  /**
   * Name of the field in the data source.
   * Default value: "null"
   */
  dataField: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldClose: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldHigh: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldLow: string;
  /**
   * Data field used in candlestcik and ohlc series.
   * Default value: "null"
   */
  dataFieldOpen: string;
  /**
   * Name to display for this serie.
   * Default value: "null"
   */
  displayText: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextClose: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextHigh: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextLow: string;
  /**
   * Name to display for candlestick and ohlc series.
   * Default value: "null"
   */
  displayTextOpen: string;
  /**
   * Determines how to display value gaps in line series.
   * Default value: skip
   */
  emptyPointsDisplay: "connect" | "skip" | "zero";
  /**
   * Determines whether the serie is selectable.
   * Default value: true
   */
  enableSelection: boolean;
  /**
   * Determines whether to toggle the series visibility after click on a legend's box.
   * Default value: true
   */
  enableSeriesToggle: boolean;
  /**
   * Maximum angle in a pie, donut, polar and spider series.
   * Default value: 360
   */
  endAngle: number;
  /**
   * Fill color for the serie.
   * Default value: null
   */
  fillColor: string | null;
  /**
   * Alternating fill color for the serie. Applicable to OHLC series only.
   * Default value: null
   */
  fillColorAlt: string | null;
  /**
   * Alternating fill color for the serie when selected. Applicable to OHLC series only.
   * Default value: null
   */
  fillColorAltSelected: string | null;
  /**
   * Fill color for the serie when selected.
   * Default value: null
   */
  fillColorSelected: string | null;
  /**
   * Fill color for the marker symbols in the serie.
   * Default value: null
   */
  fillColorSymbol: string | null;
  /**
   * Fill color for the the marker symbols in serie when selected.
   * Default value: null
   */
  fillColorSymbolSelected: string | null;
  /**
   * Determines whether to display the serie in grey scale.
   * Default value: null
   */
  greyScale: boolean | null;
  /**
   * Determines whether to hide slices of toggled points in pie and donut series.
   * Default value: false
   */
  hiddenPointsDisplay: boolean;
  /**
   * Initial angle in pie and donut series.
   * Default value: 0
   */
  initialAngle: number;
  /**
   * Inner radius of donut series in pixels or percents.
   * Default value: 0
   */
  innerRadius: any;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels: ChartSeriesGroupSerieLabels;
  /**
   * Fill color of the legend box. The default value is inherited from the serie's color.
   * Default value: null
   */
  legendFillColor: string | null;
  /**
   * Legend data formatting function for the values in the serie.
   * Default value: null
   */
  legendFormatFunction: any;
  /**
   * Legend data formatting settings for the values in the serie.
   * Default value: [object Object]
   */
  legendFormatSettings: ChartSeriesGroupSerieLegendFormatSettings;
  /**
   * Line color of the legend box. The default value is inherited from the serie's color.
   * Default value: null
   */
  legendLineColor: string | null;
  /**
   * Line color for the serie.
   * Default value: null
   */
  lineColor: string | null;
  /**
   * Line color for the serie when selected.
   * Default value: null
   */
  lineColorSelected: string | null;
  /**
   * Line color for the marker symbols in serie.
   * Default value: null
   */
  lineColorSymbol: string | null;
  /**
   * Line color for the marker symbols in the serie when selected.
   * Default value: null
   */
  lineColorSymbolSelected: string | null;
  /**
   * A string sequence of numbers represening line and space lengths, e.g. '2,2'.
   * Default value: null
   */
  lineDashStyle: string | null;
  /**
   * Determines how line and area series are unselected based on mouse and touch events. If the value is set to 'click', once a line or area serie is selected, it will remain selected until the user clicks or moves the cursor outside the chart. In default mode, the serie will be unselected immediatelly after the cursor moves over another serie or outside the chart.
   * Default value: default
   */
  linesUnselectMode: "click" | "default";
  /**
   * Determines the line tickness of the items in this serie.
   * Default value: null
   */
  lineWidth: string | null;
  /**
   * Determines the opacity of the items in this serie.
   * Default value: 1
   */
  opacity: number;
  /**
   * Outer radius of pie and donut series in pixels or percents.
   * Default value: null
   */
  radius: any;
  /**
   * Radius change on selection of pie and donut series in pixels or percents.
   * Default value: null
   */
  selectedRadiusChange: any;
  /**
   * Minimum angle in a pie, donut, polar and spider series.
   * Default value: 0
   */
  startAngle: number;
  /**
   * Determines the size of the symbol element.
   * Default value: null
   */
  symbolSize: number;
  /**
   * Determines the size of the symbol element. This property is applicable to line and area series only.
   * Default value: null
   */
  symbolSizeSelected: number;
  /**
   * Determines the symbol type displayed for the data points in the serie. This parameter is applicable to line, area, scatter and bubble series only.
   * Default value: none
   */
  symbolType: "none" | "circle" | "square" | "diamond" | "triangle_up" | "triangle_down" | "triangle_left" | "triangle_right";
  /**
   * Determines the tooltip's background.
   * Default value: null
   */
  toolTipBackground: string | null;
  /**
   * Determines the tooltip's CSS class name.
   * Default value: null
   */
  toolTipClass: string | null;
  /**
   * Tooltip data formatting function for the values in the serie.
   * Default value: null
   */
  toolTipFormatFunction: any;
  /**
   * Tooltip data formatting settings for the values in the serie.
   * Default value: [object Object]
   */
  toolTipFormatSettings: ChartSeriesGroupSerieToolTipFormatSettings;
  /**
   * Determines the tooltip's border lines color.
   * Default value: null
   */
  toolTipLineColor: string | null;
  /**
   * Determines whether to use color gradients.
   * Default value: false
   */
  useGradientColors: boolean;
}

/**Object describing the labels properties of the axis. */
export interface ChartSeriesGroupSerieLabels {
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle: number;
  /**
   * boolean determining if auto rotation is enabled.
   * Default value: false
   */
  autoRotate: boolean;
  /**
   * Labels background color.
   * Default value: null
   */
  backgroundColor: string | null;
  /**
   * Labels background opacity.
   * Default value: 1
   */
  backgroundOpacity: number | null;
  /**
   * Labels border line color.
   * Default value: null
   */
  borderColor: string | null;
  /**
   * Labels border line opacity.
   * Default value: 1
   */
  borderOpacity: number | null;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings: ChartSeriesGroupSerieLabelsFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Determines whether to use direct lines for the labels in pie/donut series.
   * Default value: true
   */
  linesAngles: boolean;
  /**
   * Determines whether to use lines for the labels in pie/donut series.
   * Default value: true
   */
  linesEnabled: boolean;
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset: ChartSeriesGroupSerieLabelsOffset;
  /**
   * Object describing the padding of the labels.
   * Default value: [object Object]
   */
  padding: ChartSeriesGroupSerieLabelsPadding;
  /**
   * Radius of the labels in pie/donut series.
   * Default value: null
   */
  radius: number | null;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the format settings of the labels. */
export interface ChartSeriesGroupSerieLabelsFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Labels offset. */
export interface ChartSeriesGroupSerieLabelsOffset {
  /**
   * Horizontal offset.
   * Default value: 0
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: 0
   */
  y: number;
}

/**Object describing the padding of the labels. */
export interface ChartSeriesGroupSerieLabelsPadding {
  /**
   * Bottom padding.
   * Default value: 0
   */
  bottom: number;
  /**
   * Left padding.
   * Default value: 0
   */
  left: number;
  /**
   * Right padding.
   * Default value: 0
   */
  right: number;
  /**
   * Top padding.
   * Default value: 0
   */
  top: number;
}

/**Legend data formatting settings for the values in the serie. */
export interface ChartSeriesGroupSerieLegendFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Tooltip data formatting settings for the values in the serie. */
export interface ChartSeriesGroupSerieToolTipFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Object describing the valueAxis for this group. smartChart allows you to use a common valueAxis and/or multiple value axes per serie group. */
export interface ChartSeriesGroupValueAxis {
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity: number;
  /**
   * Sets the size of the axis.
   * Default value: null
   */
  axisSize: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands: ChartSeriesGroupValueAxisBand[];
  /**
   * Sets the baseline value for the axis.
   * Default value: 0
   */
  baselineValue: any;
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw: boolean;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings: ChartSeriesGroupValueAxisFormatSettings;
  /**
   * Object describing the grid lines properties of the valueAxis.
   * Default value: [object Object]
   */
  gridLines: ChartSeriesGroupValueAxisGridLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels: ChartSeriesGroupValueAxisLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line: ChartSeriesGroupValueAxisLine;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase: number;
  /**
   * Sets the maximum value of the valueAxis.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Sets the minimum value of the valueAxis.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding: ChartSeriesGroupValueAxisPadding;
  /**
   * Sets the axis position. The values 'left' and 'right' are available in the default case. If the valueAxis is horizontal, only 'top' and 'bottom' are available.
   * Default value: left
   */
  position: "left" | "right" | "top" | "bottom";
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Object describing the tick marks properties of the valueAxis.
   * Default value: [object Object]
   */
  tickMarks: ChartSeriesGroupValueAxisTickMarks;
  /**
   * Object describing the title of the valueAxis.
   * Default value: [object Object]
   */
  title: ChartSeriesGroupValueAxisTitle;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks: boolean;
  /**
   * Shows or hides the valueAxis.
   * Default value: true
   */
  visible: boolean;
}

export interface ChartSeriesGroupValueAxisBand {
  /**
   * Color used to fill the area between the minValue and the maxValue.
   * Default value: null
   */
  color: string | null;
  /**
   * Dash style of the band lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: null
   */
  dashStyle: string | null;
  /**
   * Band line color.
   * Default value: null
   */
  lineColor: string | null;
  /**
   * Band line width.
   * Default value: null
   */
  lineWidth: string | null;
  /**
   * End value of the color band.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Start value of the color band.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Fraction indicating the fill opacity.
   * Default value: 1
   */
  opacity: number;
}

/**Settings used to format the displayed values along the axis. */
export interface ChartSeriesGroupValueAxisFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Object describing the grid lines properties of the valueAxis. */
export interface ChartSeriesGroupValueAxisGridLines {
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the labels properties of the axis. */
export interface ChartSeriesGroupValueAxisLabels {
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle: number;
  /**
   * boolean determining if auto rotation is enabled. Applicable to polar and spider charts only.
   * Default value: false
   */
  autoRotate: boolean;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings: ChartSeriesGroupValueAxisLabelsFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset: ChartSeriesGroupValueAxisLabelsOffset;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the format settings of the labels. */
export interface ChartSeriesGroupValueAxisLabelsFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Labels offset. */
export interface ChartSeriesGroupValueAxisLabelsOffset {
  /**
   * Horizontal offset.
   * Default value: 0
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: 0
   */
  y: number;
}

/**Object describing the line properties of the axis. */
export interface ChartSeriesGroupValueAxisLine {
  /**
   * Color of axis line.
   * Default value: ""
   */
  color: string;
  /**
   * Line dash style, e.g. '2,2'. The default is inherited from gridLines.dashStyle.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width. The default is inherited from gridLines.lineWidth.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * boolean determining the visibility of the axis line.
   * Default value: true
   */
  visible: any;
}

/**Object describing the padding of the axis. */
export interface ChartSeriesGroupValueAxisPadding {
  /**
   * Bottom padding. Available for horizontal valueAxis.
   * Default value: 0
   */
  bottom: number;
  /**
   * Left padding. Available for vertical valueAxis.
   * Default value: 0
   */
  left: number;
  /**
   * Right padding. Available for vertical valueAxis.
   * Default value: 0
   */
  right: number;
  /**
   * Top padding. Available for horizontal valueAxis.
   * Default value: 0
   */
  top: number;
}

/**Object describing the tick marks properties of the valueAxis. */
export interface ChartSeriesGroupValueAxisTickMarks {
  /**
   * Color of the tick marks.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a tick mark will be displayed. Applicable only if tickMarks.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Tick marks dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the tick marks.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Size (in pixels) of the tick marks.
   * Default value: 4
   */
  size: number;
  /**
   * Interval steps between tick mark placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between tick marks.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of tick marks. When 'custom' is set, displays only custom values/offsets from the tickMarks.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the title of the valueAxis. */
export interface ChartSeriesGroupValueAxisTitle {
  /**
   * CSS class of the title text.
   * Default value: null
   */
  class: string | null;
  /**
   * Horizontal alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Text of the title.
   * Default value: ""
   */
  text: string;
  /**
   * Vertical alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * boolean determining the visibility of the title.
   * Default value: true
   */
  visible: boolean;
}

/**Object describing the xAxis for this group. */
export interface ChartSeriesGroupXAxis {
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity: number;
  /**
   * Sets the size of the xAxis.
   * Default value: null
   */
  axisSize: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands: ChartSeriesGroupXAxisBand[];
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit: "year" | "month" | "day" | "hour" | "minute" | "second" | "millisecond";
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw: boolean;
  /**
   * Points to a data field in the data source.
   * Default value: ""
   */
  dataField: string;
  /**
   * Optional date format for parsing the data from the data source. Applicable when xAxis.type is set to 'date'.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Optional custom xAxis display text.
   * Default value: null
   */
  displayText: string | null;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings: ChartSeriesGroupXAxisFormatSettings;
  /**
   * Object describing the grid lines properties of the xAxis.
   * Default value: [object Object]
   */
  gridLines: ChartSeriesGroupXAxisGridLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels: ChartSeriesGroupXAxisLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line: ChartSeriesGroupXAxisLine;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase: number;
  /**
   * Sets the maximum value of the xAxis.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Sets the minimum value of the xAxis.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding: ChartSeriesGroupXAxisPadding;
  /**
   * Sets the axis position. The values 'bottom' and 'top' are available in the default case. If the xAxis is vertical, only 'left' and 'right' are available.
   * Default value: bottom
   */
  position: "bottom" | "top" | "left" | "right";
  /**
   * Definition of a range selector on the xAxis. The range selector itself is also an instance of smart-chart.
   * Default value: [object Object]
   */
  rangeSelector: ChartSeriesGroupXAxisRangeSelector;
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Object describing the tick marks properties of the xAxis.
   * Default value: [object Object]
   */
  tickMarks: ChartSeriesGroupXAxisTickMarks;
  /**
   * Object describing the title of the xAxis.
   * Default value: [object Object]
   */
  title: ChartSeriesGroupXAxisTitle;
  /**
   * Custom function to format xAxis values in tooltips.
   * Default value: null
   */
  toolTipFormatFunction: any;
  /**
   * Settings used to format xAxis values in tooltips.
   * Default value: [object Object]
   */
  toolTipFormatSettings: ChartSeriesGroupXAxisToolTipFormatSettings;
  /**
   * The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.'date' - when displaying dates.'basic' - displays all data points sequentially.'linear' - linear arrangement by the value of the xAxis data field.
   * Default value: auto
   */
  type: "auto" | "date" | "basic" | "linear";
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks: boolean;
  /**
   * Shows or hides the xAxis.
   * Default value: true
   */
  visible: boolean;
}

export interface ChartSeriesGroupXAxisBand {
  /**
   * Color used to fill the area between the minValue and the maxValue.
   * Default value: null
   */
  color: string | null;
  /**
   * Dash style of the band lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: null
   */
  dashStyle: string | null;
  /**
   * Band line color.
   * Default value: null
   */
  lineColor: string | null;
  /**
   * Band line width.
   * Default value: null
   */
  lineWidth: string | null;
  /**
   * End value of the color band.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Start value of the color band.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Fraction indicating the fill opacity.
   * Default value: 1
   */
  opacity: number;
}

/**Settings used to format the displayed values along the axis. */
export interface ChartSeriesGroupXAxisFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Object describing the grid lines properties of the xAxis. */
export interface ChartSeriesGroupXAxisGridLines {
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the labels properties of the axis. */
export interface ChartSeriesGroupXAxisLabels {
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle: number;
  /**
   * boolean determining if auto rotation is enabled. Applicable to polar and spider charts only.
   * Default value: false
   */
  autoRotate: boolean;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings: ChartSeriesGroupXAxisLabelsFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset: ChartSeriesGroupXAxisLabelsOffset;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the format settings of the labels. */
export interface ChartSeriesGroupXAxisLabelsFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Labels offset. */
export interface ChartSeriesGroupXAxisLabelsOffset {
  /**
   * Horizontal offset.
   * Default value: 0
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: 0
   */
  y: number;
}

/**Object describing the line properties of the axis. */
export interface ChartSeriesGroupXAxisLine {
  /**
   * Color of axis line.
   * Default value: ""
   */
  color: string;
  /**
   * Line dash style, e.g. '2,2'. The default is inherited from gridLines.dashStyle.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width. The default is inherited from gridLines.lineWidth.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * boolean determining the visibility of the axis line.
   * Default value: true
   */
  visible: any;
}

/**Object describing the padding of the axis. */
export interface ChartSeriesGroupXAxisPadding {
  /**
   * Bottom padding. Available for horizontal xAxis.
   * Default value: 0
   */
  bottom: number;
  /**
   * Left padding. Available for vertical xAxis.
   * Default value: 0
   */
  left: number;
  /**
   * Right padding. Available for vertical xAxis.
   * Default value: 0
   */
  right: number;
  /**
   * Top padding. Available for horizontal xAxis.
   * Default value: 0
   */
  top: number;
}

/**Definition of a range selector on the xAxis. The range selector itself is also an instance of smart-chart. */
export interface ChartSeriesGroupXAxisRangeSelector {
  /**
   * Sets the range selector chart's background color.
   * Default value: null
   */
  backgroundColor: string | null;
  /**
   * Sets the range selector chart's background image.
   * Default value: ""
   */
  backgroundImage: string;
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit: "year" | "month" | "day" | "hour" | "minute" | "second" | "millisecond";
  /**
   * Sets the range selector chart's border color.
   * Default value: null
   */
  borderLineColor: string | null;
  /**
   * Sets the range selector chart's border line width.
   * Default value: null
   */
  borderLineWidth: number | null;
  /**
   * Sets the caption (title) of the range selector chart.
   * Default value: ""
   */
  caption: string;
  /**
   * Sets the range selector chart's color pallete. smartChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
   * Default value: null
   */
  colorScheme: "scheme01" | "scheme02" | "scheme03" | "scheme04" | "scheme05" | "scheme06" | "scheme07" | "scheme08" | "scheme09" | "scheme10" | "scheme11" | "scheme12" | "scheme13" | "scheme14" | "scheme15" | "scheme16" | "scheme17" | "scheme18" | "scheme19" | "scheme20" | "scheme21" | "scheme22" | "scheme23" | "scheme24" | "scheme25" | "scheme25" | "scheme26" | "scheme27" | "scheme28" | "scheme29" | "scheme30" | "scheme31" | "scheme32";
  /**
   * Enables or disables overlapping of the column series.
   * Default value: false
   */
  columnSeriesOverlap: boolean;
  /**
   * Percentage gap between columns within the same serie.
   * Default value: 25
   */
  columnsGapPercent: number;
  /**
   * Points to a data field in the data source.
   * Default value: null
   */
  dataField: string | null;
  /**
   * Sets the description text of the range selector chart.
   * Default value: ""
   */
  description: string;
  /**
   * Determines whether to display the range selector chart using greyscale colors.
   * Default value: null
   */
  greyScale: boolean | null;
  /**
   * Object describing the grid lines properties of the range selector chart's xAxis.
   * Default value: [object Object]
   */
  gridLines: ChartSeriesGroupXAxisRangeSelectorGridLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels: ChartSeriesGroupXAxisRangeSelectorLabels;
  /**
   * Sets the maximum value of the range selector chart's xAxis.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Sets the minimum value of the range selector chart's xAxis.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Object describing the padding of the range selector chart.
   * Default value: [object Object]
   */
  padding: ChartSeriesGroupXAxisRangeSelectorPadding;
  /**
   * Sets the range selector chart position.
   * Default value: null
   */
  position: "bottom" | "top" | "left" | "right";
  /**
   * An HTML element outside the chart to render the range selector chart to.
   * Default value: null
   */
  renderTo: HTMLElement;
  /**
   * Sets or gets a value indicating whether the range selector chart's layout is mirrored.
   * Default value: null
   */
  rightToLeft: boolean | null;
  /**
   * Percentage gap between columns belonging to different series.
   * Default value: 10
   */
  seriesGapPercent: number;
  /**
   * (Optional) The seriesGroups property is used to describe all series displayed on the range selector chart.Please refer to the main seriesGroups property entry for more information and a full subproperty list.
   * Default value: null
   */
  seriesGroups: [] | null;
  /**
   * Sets the range selector chart type. smartChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, smartChart supports the following series types:'column' - simple column series'stackedcolumn' - stacked column series'stackedcolumn100' - percentage stacked columns'rangecolumn' - floating column between two values'waterfall' - waterfall series'stackedwaterfall' - stacked waterfall series'line' - simple straight lines connecting the value points'stackedline' - stacked lines'stackedline100' - percentage stacked lines'spline' - smooth lines connecting the value points'stackedspline' - smooth stacked lines'stackedspline100' - percentage stacked smooth lines'stepline' - step line'stackedstepline' - stacked step line'stackedstepline100' - percentage stacked step line'area' - area connecting the value points with straight lines'stackedarea' - stacked area with straight lines between the points'stackedarea100' - percentage stacked area with straight lines between the points'rangearea' - floating area between pairs of value points'splinearea' - smooth area connecting the value points'stackedsplinearea' - stacked smooth area connecting the value points'stackedsplinearea100' - percentage stacked smooth area'splinerangearea' - smooth floating area between pairs of value points'steprangearea' - step area between pairs of value points'stackedsplineara' - smooth stacked area'steparea' - step area connecting the value points'stackedsteparea' - step stacked area'stackedsteparea100' - percentage stacked step area'pie' - circular chart divided into sectors, illustrating proportion'donut' - chart divided into circular sectors with different inner and outer radius'scatter' - data is displayed as a collection of points'stackedscatter' - data is displayed as a collection of points and the values are stacked'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked'bubble' - data is displayed as a collection of bubbles'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked'candlestick' - display candlestick series using open, high, low, close data points'ohlc' - display OHLC series using open, high, low, close data points
   * Default value: area
   */
  serieType: "column" | "stackedcolumn" | "stackedcolumn100" | "rangecolumn" | "waterfall" | "stackedwaterfall" | "line" | "stackedline" | "stackedline100" | "spline" | "stackedspline" | "stackedspline100" | "stepline" | "stackedstepline" | "stackedstepline100" | "area" | "stackedarea" | "stackedarea100" | "rangearea" | "splinearea" | "stackedsplinearea" | "stackedsplinearea100" | "splinerangearea" | "steprangearea" | "stackedsplineara" | "steparea" | "stackedsteparea" | "stackedsteparea100" | "pie" | "donut" | "scatter" | "stackedscatter" | "stackedscatter100" | "bubble" | "stackedbubble" | "stackedbubble100" | "candlestick" | "ohlc";
  /**
   * Determines whether to display the range selector chart's border line.
   * Default value: null
   */
  showBorderLine: boolean | null;
  /**
   * Sets the size of the range selector chart.
   * Default value: null
   */
  size: number | null;
  /**
   * Determines whether to display overlapping data points in column, ohlc and candlestick series.
   * Default value: true
   */
  skipOverlappingPoints: boolean;
  /**
   * Sets the padding of the chart's title (caption).
   * Default value: [object Object]
   */
  titlePadding: ChartSeriesGroupXAxisRangeSelectorTitlePadding;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval: number | null;
  /**
   * An object with settings about the range selector Chart's y-axis (value axis).
   * Default value: [object Object]
   */
  valueAxis: ChartSeriesGroupXAxisRangeSelectorValueAxis;
  /**
   * Shows or hides the range selector.
   * Default value: false
   */
  visible: boolean;
}

/**Object describing the grid lines properties of the range selector chart's xAxis. */
export interface ChartSeriesGroupXAxisRangeSelectorGridLines {
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the labels properties of the axis. */
export interface ChartSeriesGroupXAxisRangeSelectorLabels {
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle: number;
  /**
   * boolean determining if auto rotation is enabled. Applicable to polar and spider charts only.
   * Default value: false
   */
  autoRotate: boolean;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings: ChartSeriesGroupXAxisRangeSelectorLabelsFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset: ChartSeriesGroupXAxisRangeSelectorLabelsOffset;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the format settings of the labels. */
export interface ChartSeriesGroupXAxisRangeSelectorLabelsFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Labels offset. */
export interface ChartSeriesGroupXAxisRangeSelectorLabelsOffset {
  /**
   * Horizontal offset.
   * Default value: 0
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: 0
   */
  y: number;
}

/**Object describing the padding of the range selector chart. */
export interface ChartSeriesGroupXAxisRangeSelectorPadding {
  /**
   * Bottom padding.
   * Default value: 0
   */
  bottom: number;
  /**
   * Left padding.
   * Default value: 0
   */
  left: number;
  /**
   * Right padding.
   * Default value: 0
   */
  right: number;
  /**
   * Top padding.
   * Default value: 0
   */
  top: number;
}

/**Sets the padding of the chart's title (caption). */
export interface ChartSeriesGroupXAxisRangeSelectorTitlePadding {
  /**
   * Bottom padding.
   * Default value: 10
   */
  bottom: number;
  /**
   * Left padding.
   * Default value: 5
   */
  left: number;
  /**
   * Right padding.
   * Default value: 5
   */
  right: number;
  /**
   * Top padding.
   * Default value: 5
   */
  top: number;
}

/**An object with settings about the range selector Chart's y-axis (value axis). */
export interface ChartSeriesGroupXAxisRangeSelectorValueAxis {
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity: number;
  /**
   * Sets the size of the axis.
   * Default value: null
   */
  axisSize: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands: ChartSeriesGroupXAxisRangeSelectorValueAxisBand[];
  /**
   * Sets the baseline value for the axis.
   * Default value: 0
   */
  baselineValue: any;
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw: boolean;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings: ChartSeriesGroupXAxisRangeSelectorValueAxisFormatSettings;
  /**
   * Object describing the grid lines properties of the valueAxis.
   * Default value: [object Object]
   */
  gridLines: ChartSeriesGroupXAxisRangeSelectorValueAxisGridLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels: ChartSeriesGroupXAxisRangeSelectorValueAxisLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line: ChartSeriesGroupXAxisRangeSelectorValueAxisLine;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase: number;
  /**
   * Sets the maximum value of the valueAxis.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Sets the minimum value of the valueAxis.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding: ChartSeriesGroupXAxisRangeSelectorValueAxisPadding;
  /**
   * Sets the axis position. The values 'left' and 'right' are available in the default case. If the valueAxis is horizontal, only 'top' and 'bottom' are available.
   * Default value: left
   */
  position: "left" | "right" | "top" | "bottom";
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Object describing the tick marks properties of the valueAxis.
   * Default value: [object Object]
   */
  tickMarks: ChartSeriesGroupXAxisRangeSelectorValueAxisTickMarks;
  /**
   * Object describing the title of the valueAxis.
   * Default value: [object Object]
   */
  title: ChartSeriesGroupXAxisRangeSelectorValueAxisTitle;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks: boolean;
  /**
   * Shows or hides the valueAxis.
   * Default value: false
   */
  visible: boolean;
}

export interface ChartSeriesGroupXAxisRangeSelectorValueAxisBand {
  /**
   * Color used to fill the area between the minValue and the maxValue.
   * Default value: null
   */
  color: string | null;
  /**
   * Dash style of the band lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: null
   */
  dashStyle: string | null;
  /**
   * Band line color.
   * Default value: null
   */
  lineColor: string | null;
  /**
   * Band line width.
   * Default value: null
   */
  lineWidth: string | null;
  /**
   * End value of the color band.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Start value of the color band.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Fraction indicating the fill opacity.
   * Default value: 1
   */
  opacity: number;
}

/**Settings used to format the displayed values along the axis. */
export interface ChartSeriesGroupXAxisRangeSelectorValueAxisFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Object describing the grid lines properties of the valueAxis. */
export interface ChartSeriesGroupXAxisRangeSelectorValueAxisGridLines {
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the labels properties of the axis. */
export interface ChartSeriesGroupXAxisRangeSelectorValueAxisLabels {
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle: number;
  /**
   * boolean determining if auto rotation is enabled. Applicable to polar and spider charts only.
   * Default value: false
   */
  autoRotate: boolean;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings: ChartSeriesGroupXAxisRangeSelectorValueAxisLabelsFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset: ChartSeriesGroupXAxisRangeSelectorValueAxisLabelsOffset;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the format settings of the labels. */
export interface ChartSeriesGroupXAxisRangeSelectorValueAxisLabelsFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Labels offset. */
export interface ChartSeriesGroupXAxisRangeSelectorValueAxisLabelsOffset {
  /**
   * Horizontal offset.
   * Default value: 0
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: 0
   */
  y: number;
}

/**Object describing the line properties of the axis. */
export interface ChartSeriesGroupXAxisRangeSelectorValueAxisLine {
  /**
   * Color of axis line.
   * Default value: ""
   */
  color: string;
  /**
   * Line dash style, e.g. '2,2'. The default is inherited from gridLines.dashStyle.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width. The default is inherited from gridLines.lineWidth.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * boolean determining the visibility of the axis line.
   * Default value: true
   */
  visible: any;
}

/**Object describing the padding of the axis. */
export interface ChartSeriesGroupXAxisRangeSelectorValueAxisPadding {
  /**
   * Bottom padding. Available for horizontal valueAxis.
   * Default value: 0
   */
  bottom: number;
  /**
   * Left padding. Available for vertical valueAxis.
   * Default value: 0
   */
  left: number;
  /**
   * Right padding. Available for vertical valueAxis.
   * Default value: 0
   */
  right: number;
  /**
   * Top padding. Available for horizontal valueAxis.
   * Default value: 0
   */
  top: number;
}

/**Object describing the tick marks properties of the valueAxis. */
export interface ChartSeriesGroupXAxisRangeSelectorValueAxisTickMarks {
  /**
   * Color of the tick marks.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a tick mark will be displayed. Applicable only if tickMarks.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Tick marks dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the tick marks.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Size (in pixels) of the tick marks.
   * Default value: 4
   */
  size: number;
  /**
   * Interval steps between tick mark placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between tick marks.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of tick marks. When 'custom' is set, displays only custom values/offsets from the tickMarks.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the title of the valueAxis. */
export interface ChartSeriesGroupXAxisRangeSelectorValueAxisTitle {
  /**
   * CSS class of the title text.
   * Default value: null
   */
  class: string | null;
  /**
   * Horizontal alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Text of the title.
   * Default value: ""
   */
  text: string;
  /**
   * Vertical alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * boolean determining the visibility of the title.
   * Default value: true
   */
  visible: boolean;
}

/**Object describing the tick marks properties of the xAxis. */
export interface ChartSeriesGroupXAxisTickMarks {
  /**
   * Color of the tick marks.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a tick mark will be displayed. Applicable only if tickMarks.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Tick marks dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the tick marks.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Size (in pixels) of the tick marks.
   * Default value: 4
   */
  size: number;
  /**
   * Interval steps between tick mark placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between tick marks.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of tick marks. When 'custom' is set, displays only custom values/offsets from the tickMarks.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the title of the xAxis. */
export interface ChartSeriesGroupXAxisTitle {
  /**
   * CSS class of the title text.
   * Default value: null
   */
  class: string | null;
  /**
   * Horizontal alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Text of the title.
   * Default value: ""
   */
  text: string;
  /**
   * Vertical alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * boolean determining the visibility of the title.
   * Default value: true
   */
  visible: boolean;
}

/**Settings used to format xAxis values in tooltips. */
export interface ChartSeriesGroupXAxisToolTipFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Sets the padding of the chart's title (caption). */
export interface ChartTitlePadding {
  /**
   * Bottom padding.
   * Default value: 10
   */
  bottom: number;
  /**
   * Left padding.
   * Default value: 5
   */
  left: number;
  /**
   * Right padding.
   * Default value: 5
   */
  right: number;
  /**
   * Top padding.
   * Default value: 5
   */
  top: number;
}

/**An object with settings about the Chart's y-axis (value axis). */
export interface ChartValueAxis {
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity: number;
  /**
   * Sets the size of the axis.
   * Default value: null
   */
  axisSize: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands: ChartValueAxisBand[];
  /**
   * Sets the baseline value for the axis.
   * Default value: 0
   */
  baselineValue: any;
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw: boolean;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings: ChartValueAxisFormatSettings;
  /**
   * Object describing the grid lines properties of the valueAxis.
   * Default value: [object Object]
   */
  gridLines: ChartValueAxisGridLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels: ChartValueAxisLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line: ChartValueAxisLine;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase: number;
  /**
   * Sets the maximum value of the valueAxis.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Sets the minimum value of the valueAxis.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding: ChartValueAxisPadding;
  /**
   * Sets the axis position. The values 'left' and 'right' are available in the default case. If the valueAxis is horizontal, only 'top' and 'bottom' are available.
   * Default value: left
   */
  position: "left" | "right" | "top" | "bottom";
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Object describing the tick marks properties of the valueAxis.
   * Default value: [object Object]
   */
  tickMarks: ChartValueAxisTickMarks;
  /**
   * Object describing the title of the valueAxis.
   * Default value: [object Object]
   */
  title: ChartValueAxisTitle;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks: boolean;
  /**
   * Shows or hides the valueAxis.
   * Default value: true
   */
  visible: boolean;
}

export interface ChartValueAxisBand {
  /**
   * Color used to fill the area between the minValue and the maxValue.
   * Default value: null
   */
  color: string | null;
  /**
   * Dash style of the band lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: null
   */
  dashStyle: string | null;
  /**
   * Band line color.
   * Default value: null
   */
  lineColor: string | null;
  /**
   * Band line width.
   * Default value: null
   */
  lineWidth: string | null;
  /**
   * End value of the color band.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Start value of the color band.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Fraction indicating the fill opacity.
   * Default value: 1
   */
  opacity: number;
}

/**Settings used to format the displayed values along the axis. */
export interface ChartValueAxisFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Object describing the grid lines properties of the valueAxis. */
export interface ChartValueAxisGridLines {
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the labels properties of the axis. */
export interface ChartValueAxisLabels {
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle: number;
  /**
   * boolean determining if auto rotation is enabled. Applicable to polar and spider charts only.
   * Default value: false
   */
  autoRotate: boolean;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings: ChartValueAxisLabelsFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset: ChartValueAxisLabelsOffset;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the format settings of the labels. */
export interface ChartValueAxisLabelsFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Labels offset. */
export interface ChartValueAxisLabelsOffset {
  /**
   * Horizontal offset.
   * Default value: 0
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: 0
   */
  y: number;
}

/**Object describing the line properties of the axis. */
export interface ChartValueAxisLine {
  /**
   * Color of axis line.
   * Default value: ""
   */
  color: string;
  /**
   * Line dash style, e.g. '2,2'. The default is inherited from gridLines.dashStyle.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width. The default is inherited from gridLines.lineWidth.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * boolean determining the visibility of the axis line.
   * Default value: true
   */
  visible: any;
}

/**Object describing the padding of the axis. */
export interface ChartValueAxisPadding {
  /**
   * Bottom padding. Available for horizontal valueAxis.
   * Default value: 0
   */
  bottom: number;
  /**
   * Left padding. Available for vertical valueAxis.
   * Default value: 0
   */
  left: number;
  /**
   * Right padding. Available for vertical valueAxis.
   * Default value: 0
   */
  right: number;
  /**
   * Top padding. Available for horizontal valueAxis.
   * Default value: 0
   */
  top: number;
}

/**Object describing the tick marks properties of the valueAxis. */
export interface ChartValueAxisTickMarks {
  /**
   * Color of the tick marks.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a tick mark will be displayed. Applicable only if tickMarks.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Tick marks dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the tick marks.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Size (in pixels) of the tick marks.
   * Default value: 4
   */
  size: number;
  /**
   * Interval steps between tick mark placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between tick marks.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of tick marks. When 'custom' is set, displays only custom values/offsets from the tickMarks.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the title of the valueAxis. */
export interface ChartValueAxisTitle {
  /**
   * CSS class of the title text.
   * Default value: null
   */
  class: string | null;
  /**
   * Horizontal alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Text of the title.
   * Default value: ""
   */
  text: string;
  /**
   * Vertical alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * boolean determining the visibility of the title.
   * Default value: true
   */
  visible: boolean;
}

/**Sets the Chart's xAxis. */
export interface ChartXAxis {
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity: number;
  /**
   * Sets the size of the xAxis.
   * Default value: null
   */
  axisSize: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands: ChartXAxisBand[];
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit: "year" | "month" | "day" | "hour" | "minute" | "second" | "millisecond";
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw: boolean;
  /**
   * Points to a data field in the data source.
   * Default value: ""
   */
  dataField: string;
  /**
   * Optional date format for parsing the data from the data source. Applicable when xAxis.type is set to 'date'.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Optional custom xAxis display text.
   * Default value: null
   */
  displayText: string | null;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings: ChartXAxisFormatSettings;
  /**
   * Object describing the grid lines properties of the xAxis.
   * Default value: [object Object]
   */
  gridLines: ChartXAxisGridLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels: ChartXAxisLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line: ChartXAxisLine;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase: number;
  /**
   * Sets the maximum value of the xAxis.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Sets the minimum value of the xAxis.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding: ChartXAxisPadding;
  /**
   * Sets the axis position. The values 'bottom' and 'top' are available in the default case. If the xAxis is vertical, only 'left' and 'right' are available.
   * Default value: bottom
   */
  position: "bottom" | "top" | "left" | "right";
  /**
   * Definition of a range selector on the xAxis. The range selector itself is also an instance of smart-chart.
   * Default value: [object Object]
   */
  rangeSelector: ChartXAxisRangeSelector;
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Object describing the tick marks properties of the xAxis.
   * Default value: [object Object]
   */
  tickMarks: ChartXAxisTickMarks;
  /**
   * Object describing the title of the xAxis.
   * Default value: [object Object]
   */
  title: ChartXAxisTitle;
  /**
   * Custom function to format xAxis values in tooltips.
   * Default value: null
   */
  toolTipFormatFunction: any;
  /**
   * Settings used to format xAxis values in tooltips.
   * Default value: [object Object]
   */
  toolTipFormatSettings: ChartXAxisToolTipFormatSettings;
  /**
   * The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.'date' - when displaying dates.'basic' - displays all data points sequentially.'linear' - linear arrangement by the value of the xAxis data field.
   * Default value: auto
   */
  type: "auto" | "date" | "basic" | "linear";
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks: boolean;
  /**
   * Shows or hides the xAxis.
   * Default value: true
   */
  visible: boolean;
}

export interface ChartXAxisBand {
  /**
   * Color used to fill the area between the minValue and the maxValue.
   * Default value: null
   */
  color: string | null;
  /**
   * Dash style of the band lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: null
   */
  dashStyle: string | null;
  /**
   * Band line color.
   * Default value: null
   */
  lineColor: string | null;
  /**
   * Band line width.
   * Default value: null
   */
  lineWidth: string | null;
  /**
   * End value of the color band.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Start value of the color band.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Fraction indicating the fill opacity.
   * Default value: 1
   */
  opacity: number;
}

/**Settings used to format the displayed values along the axis. */
export interface ChartXAxisFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Object describing the grid lines properties of the xAxis. */
export interface ChartXAxisGridLines {
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the labels properties of the axis. */
export interface ChartXAxisLabels {
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle: number;
  /**
   * boolean determining if auto rotation is enabled. Applicable to polar and spider charts only.
   * Default value: false
   */
  autoRotate: boolean;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings: ChartXAxisLabelsFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset: ChartXAxisLabelsOffset;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the format settings of the labels. */
export interface ChartXAxisLabelsFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Labels offset. */
export interface ChartXAxisLabelsOffset {
  /**
   * Horizontal offset.
   * Default value: 0
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: 0
   */
  y: number;
}

/**Object describing the line properties of the axis. */
export interface ChartXAxisLine {
  /**
   * Color of axis line.
   * Default value: ""
   */
  color: string;
  /**
   * Line dash style, e.g. '2,2'. The default is inherited from gridLines.dashStyle.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width. The default is inherited from gridLines.lineWidth.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * boolean determining the visibility of the axis line.
   * Default value: true
   */
  visible: any;
}

/**Object describing the padding of the axis. */
export interface ChartXAxisPadding {
  /**
   * Bottom padding. Available for horizontal xAxis.
   * Default value: 0
   */
  bottom: number;
  /**
   * Left padding. Available for vertical xAxis.
   * Default value: 0
   */
  left: number;
  /**
   * Right padding. Available for vertical xAxis.
   * Default value: 0
   */
  right: number;
  /**
   * Top padding. Available for horizontal xAxis.
   * Default value: 0
   */
  top: number;
}

/**Definition of a range selector on the xAxis. The range selector itself is also an instance of smart-chart. */
export interface ChartXAxisRangeSelector {
  /**
   * Sets the range selector chart's background color.
   * Default value: null
   */
  backgroundColor: string | null;
  /**
   * Sets the range selector chart's background image.
   * Default value: ""
   */
  backgroundImage: string;
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit: "year" | "month" | "day" | "hour" | "minute" | "second" | "millisecond";
  /**
   * Sets the range selector chart's border color.
   * Default value: null
   */
  borderLineColor: string | null;
  /**
   * Sets the range selector chart's border line width.
   * Default value: null
   */
  borderLineWidth: number | null;
  /**
   * Sets the caption (title) of the range selector chart.
   * Default value: ""
   */
  caption: string;
  /**
   * Sets the range selector chart's color pallete. smartChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
   * Default value: null
   */
  colorScheme: "scheme01" | "scheme02" | "scheme03" | "scheme04" | "scheme05" | "scheme06" | "scheme07" | "scheme08" | "scheme09" | "scheme10" | "scheme11" | "scheme12" | "scheme13" | "scheme14" | "scheme15" | "scheme16" | "scheme17" | "scheme18" | "scheme19" | "scheme20" | "scheme21" | "scheme22" | "scheme23" | "scheme24" | "scheme25" | "scheme25" | "scheme26" | "scheme27" | "scheme28" | "scheme29" | "scheme30" | "scheme31" | "scheme32";
  /**
   * Enables or disables overlapping of the column series.
   * Default value: false
   */
  columnSeriesOverlap: boolean;
  /**
   * Percentage gap between columns within the same serie.
   * Default value: 25
   */
  columnsGapPercent: number;
  /**
   * Points to a data field in the data source.
   * Default value: null
   */
  dataField: string | null;
  /**
   * Sets the description text of the range selector chart.
   * Default value: ""
   */
  description: string;
  /**
   * Determines whether to display the range selector chart using greyscale colors.
   * Default value: null
   */
  greyScale: boolean | null;
  /**
   * Object describing the grid lines properties of the range selector chart's xAxis.
   * Default value: [object Object]
   */
  gridLines: ChartXAxisRangeSelectorGridLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels: ChartXAxisRangeSelectorLabels;
  /**
   * Sets the maximum value of the range selector chart's xAxis.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Sets the minimum value of the range selector chart's xAxis.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Object describing the padding of the range selector chart.
   * Default value: [object Object]
   */
  padding: ChartXAxisRangeSelectorPadding;
  /**
   * Sets the range selector chart position.
   * Default value: null
   */
  position: "bottom" | "top" | "left" | "right";
  /**
   * An HTML element outside the chart to render the range selector chart to.
   * Default value: null
   */
  renderTo: HTMLElement;
  /**
   * Sets or gets a value indicating whether the range selector chart's layout is mirrored.
   * Default value: null
   */
  rightToLeft: boolean | null;
  /**
   * Percentage gap between columns belonging to different series.
   * Default value: 10
   */
  seriesGapPercent: number;
  /**
   * (Optional) The seriesGroups property is used to describe all series displayed on the range selector chart.Please refer to the main seriesGroups property entry for more information and a full subproperty list.
   * Default value: null
   */
  seriesGroups: [] | null;
  /**
   * Sets the range selector chart type. smartChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, smartChart supports the following series types:'column' - simple column series'stackedcolumn' - stacked column series'stackedcolumn100' - percentage stacked columns'rangecolumn' - floating column between two values'waterfall' - waterfall series'stackedwaterfall' - stacked waterfall series'line' - simple straight lines connecting the value points'stackedline' - stacked lines'stackedline100' - percentage stacked lines'spline' - smooth lines connecting the value points'stackedspline' - smooth stacked lines'stackedspline100' - percentage stacked smooth lines'stepline' - step line'stackedstepline' - stacked step line'stackedstepline100' - percentage stacked step line'area' - area connecting the value points with straight lines'stackedarea' - stacked area with straight lines between the points'stackedarea100' - percentage stacked area with straight lines between the points'rangearea' - floating area between pairs of value points'splinearea' - smooth area connecting the value points'stackedsplinearea' - stacked smooth area connecting the value points'stackedsplinearea100' - percentage stacked smooth area'splinerangearea' - smooth floating area between pairs of value points'steprangearea' - step area between pairs of value points'stackedsplineara' - smooth stacked area'steparea' - step area connecting the value points'stackedsteparea' - step stacked area'stackedsteparea100' - percentage stacked step area'pie' - circular chart divided into sectors, illustrating proportion'donut' - chart divided into circular sectors with different inner and outer radius'scatter' - data is displayed as a collection of points'stackedscatter' - data is displayed as a collection of points and the values are stacked'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked'bubble' - data is displayed as a collection of bubbles'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked'candlestick' - display candlestick series using open, high, low, close data points'ohlc' - display OHLC series using open, high, low, close data points
   * Default value: area
   */
  serieType: "column" | "stackedcolumn" | "stackedcolumn100" | "rangecolumn" | "waterfall" | "stackedwaterfall" | "line" | "stackedline" | "stackedline100" | "spline" | "stackedspline" | "stackedspline100" | "stepline" | "stackedstepline" | "stackedstepline100" | "area" | "stackedarea" | "stackedarea100" | "rangearea" | "splinearea" | "stackedsplinearea" | "stackedsplinearea100" | "splinerangearea" | "steprangearea" | "stackedsplineara" | "steparea" | "stackedsteparea" | "stackedsteparea100" | "pie" | "donut" | "scatter" | "stackedscatter" | "stackedscatter100" | "bubble" | "stackedbubble" | "stackedbubble100" | "candlestick" | "ohlc";
  /**
   * Determines whether to display the range selector chart's border line.
   * Default value: null
   */
  showBorderLine: boolean | null;
  /**
   * Sets the size of the range selector chart.
   * Default value: null
   */
  size: number | null;
  /**
   * Determines whether to display overlapping data points in column, ohlc and candlestick series.
   * Default value: true
   */
  skipOverlappingPoints: boolean;
  /**
   * Sets the padding of the chart's title (caption).
   * Default value: [object Object]
   */
  titlePadding: ChartXAxisRangeSelectorTitlePadding;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval: number | null;
  /**
   * An object with settings about the range selector Chart's y-axis (value axis).
   * Default value: [object Object]
   */
  valueAxis: ChartXAxisRangeSelectorValueAxis;
  /**
   * Shows or hides the range selector.
   * Default value: false
   */
  visible: boolean;
}

/**Object describing the grid lines properties of the range selector chart's xAxis. */
export interface ChartXAxisRangeSelectorGridLines {
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the labels properties of the axis. */
export interface ChartXAxisRangeSelectorLabels {
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle: number;
  /**
   * boolean determining if auto rotation is enabled. Applicable to polar and spider charts only.
   * Default value: false
   */
  autoRotate: boolean;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings: ChartXAxisRangeSelectorLabelsFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset: ChartXAxisRangeSelectorLabelsOffset;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the format settings of the labels. */
export interface ChartXAxisRangeSelectorLabelsFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Labels offset. */
export interface ChartXAxisRangeSelectorLabelsOffset {
  /**
   * Horizontal offset.
   * Default value: 0
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: 0
   */
  y: number;
}

/**Object describing the padding of the range selector chart. */
export interface ChartXAxisRangeSelectorPadding {
  /**
   * Bottom padding.
   * Default value: 0
   */
  bottom: number;
  /**
   * Left padding.
   * Default value: 0
   */
  left: number;
  /**
   * Right padding.
   * Default value: 0
   */
  right: number;
  /**
   * Top padding.
   * Default value: 0
   */
  top: number;
}

/**Sets the padding of the chart's title (caption). */
export interface ChartXAxisRangeSelectorTitlePadding {
  /**
   * Bottom padding.
   * Default value: 10
   */
  bottom: number;
  /**
   * Left padding.
   * Default value: 5
   */
  left: number;
  /**
   * Right padding.
   * Default value: 5
   */
  right: number;
  /**
   * Top padding.
   * Default value: 5
   */
  top: number;
}

/**An object with settings about the range selector Chart's y-axis (value axis). */
export interface ChartXAxisRangeSelectorValueAxis {
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity: number;
  /**
   * Sets the size of the axis.
   * Default value: null
   */
  axisSize: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands: ChartXAxisRangeSelectorValueAxisBand[];
  /**
   * Sets the baseline value for the axis.
   * Default value: 0
   */
  baselineValue: any;
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw: boolean;
  /**
   * Specifies whether the values are displayed in reverse order.
   * Default value: false
   */
  flip: boolean;
  /**
   * Custom function to format the displayed values along the axis.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Settings used to format the displayed values along the axis.
   * Default value: [object Object]
   */
  formatSettings: ChartXAxisRangeSelectorValueAxisFormatSettings;
  /**
   * Object describing the grid lines properties of the valueAxis.
   * Default value: [object Object]
   */
  gridLines: ChartXAxisRangeSelectorValueAxisGridLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels: ChartXAxisRangeSelectorValueAxisLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line: ChartXAxisRangeSelectorValueAxisLine;
  /**
   * Determines whether to use logarithmic scale.
   * Default value: false
   */
  logarithmicScale: boolean;
  /**
   * Base for logarithmic scale.
   * Default value: 10
   */
  logarithmicScaleBase: number;
  /**
   * Sets the maximum value of the valueAxis.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Sets the minimum value of the valueAxis.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding: ChartXAxisRangeSelectorValueAxisPadding;
  /**
   * Sets the axis position. The values 'left' and 'right' are available in the default case. If the valueAxis is horizontal, only 'top' and 'bottom' are available.
   * Default value: left
   */
  position: "left" | "right" | "top" | "bottom";
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Object describing the tick marks properties of the valueAxis.
   * Default value: [object Object]
   */
  tickMarks: ChartXAxisRangeSelectorValueAxisTickMarks;
  /**
   * Object describing the title of the valueAxis.
   * Default value: [object Object]
   */
  title: ChartXAxisRangeSelectorValueAxisTitle;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks: boolean;
  /**
   * Shows or hides the valueAxis.
   * Default value: false
   */
  visible: boolean;
}

export interface ChartXAxisRangeSelectorValueAxisBand {
  /**
   * Color used to fill the area between the minValue and the maxValue.
   * Default value: null
   */
  color: string | null;
  /**
   * Dash style of the band lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: null
   */
  dashStyle: string | null;
  /**
   * Band line color.
   * Default value: null
   */
  lineColor: string | null;
  /**
   * Band line width.
   * Default value: null
   */
  lineWidth: string | null;
  /**
   * End value of the color band.
   * Default value: NaN
   */
  maxValue: any;
  /**
   * Start value of the color band.
   * Default value: NaN
   */
  minValue: any;
  /**
   * Fraction indicating the fill opacity.
   * Default value: 1
   */
  opacity: number;
}

/**Settings used to format the displayed values along the axis. */
export interface ChartXAxisRangeSelectorValueAxisFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Object describing the grid lines properties of the valueAxis. */
export interface ChartXAxisRangeSelectorValueAxisGridLines {
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the labels properties of the axis. */
export interface ChartXAxisRangeSelectorValueAxisLabels {
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle: number;
  /**
   * boolean determining if auto rotation is enabled. Applicable to polar and spider charts only.
   * Default value: false
   */
  autoRotate: boolean;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction: any;
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings: ChartXAxisRangeSelectorValueAxisLabelsFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset: ChartXAxisRangeSelectorValueAxisLabelsOffset;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint: "auto" | "left" | "center" | "right" | "topleft" | "topcenter" | "topright" | "bottomleft" | "bottomcenter" | "bottomright" | "centermiddle";
  /**
   * Interval steps between label placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between the labels.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the format settings of the labels. */
export interface ChartXAxisRangeSelectorValueAxisLabelsFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

/**Labels offset. */
export interface ChartXAxisRangeSelectorValueAxisLabelsOffset {
  /**
   * Horizontal offset.
   * Default value: 0
   */
  x: number;
  /**
   * Vertical offset.
   * Default value: 0
   */
  y: number;
}

/**Object describing the line properties of the axis. */
export interface ChartXAxisRangeSelectorValueAxisLine {
  /**
   * Color of axis line.
   * Default value: ""
   */
  color: string;
  /**
   * Line dash style, e.g. '2,2'. The default is inherited from gridLines.dashStyle.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width. The default is inherited from gridLines.lineWidth.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * boolean determining the visibility of the axis line.
   * Default value: true
   */
  visible: any;
}

/**Object describing the padding of the axis. */
export interface ChartXAxisRangeSelectorValueAxisPadding {
  /**
   * Bottom padding. Available for horizontal valueAxis.
   * Default value: 0
   */
  bottom: number;
  /**
   * Left padding. Available for vertical valueAxis.
   * Default value: 0
   */
  left: number;
  /**
   * Right padding. Available for vertical valueAxis.
   * Default value: 0
   */
  right: number;
  /**
   * Top padding. Available for horizontal valueAxis.
   * Default value: 0
   */
  top: number;
}

/**Object describing the tick marks properties of the valueAxis. */
export interface ChartXAxisRangeSelectorValueAxisTickMarks {
  /**
   * Color of the tick marks.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a tick mark will be displayed. Applicable only if tickMarks.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Tick marks dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the tick marks.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Size (in pixels) of the tick marks.
   * Default value: 4
   */
  size: number;
  /**
   * Interval steps between tick mark placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between tick marks.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of tick marks. When 'custom' is set, displays only custom values/offsets from the tickMarks.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the title of the valueAxis. */
export interface ChartXAxisRangeSelectorValueAxisTitle {
  /**
   * CSS class of the title text.
   * Default value: null
   */
  class: string | null;
  /**
   * Horizontal alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Text of the title.
   * Default value: ""
   */
  text: string;
  /**
   * Vertical alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * boolean determining the visibility of the title.
   * Default value: true
   */
  visible: boolean;
}

/**Object describing the tick marks properties of the xAxis. */
export interface ChartXAxisTickMarks {
  /**
   * Color of the tick marks.
   * Default value: ""
   */
  color: string;
  /**
   * An array of custom values/offsets where a tick mark will be displayed. Applicable only if tickMarks.visible is set to 'custom'.
   * Default value: null
   */
  custom: [] | null;
  /**
   * Tick marks dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle: string;
  /**
   * Line width (in pixels) of the tick marks.
   * Default value: 1
   */
  lineWidth: number;
  /**
   * Size (in pixels) of the tick marks.
   * Default value: 4
   */
  size: number;
  /**
   * Interval steps between tick mark placements (multiples of the axis unit interval).
   * Default value: null
   */
  step: number | null;
  /**
   * Sets the interval between tick marks.
   * Default value: null
   */
  unitInterval: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of tick marks. When 'custom' is set, displays only custom values/offsets from the tickMarks.custom array.
   * Default value: true
   */
  visible: any;
}

/**Object describing the title of the xAxis. */
export interface ChartXAxisTitle {
  /**
   * CSS class of the title text.
   * Default value: null
   */
  class: string | null;
  /**
   * Horizontal alignment.
   * Default value: center
   */
  horizontalAlignment: "left" | "center" | "right";
  /**
   * Text of the title.
   * Default value: ""
   */
  text: string;
  /**
   * Vertical alignment.
   * Default value: center
   */
  verticalAlignment: "top" | "center" | "bottom";
  /**
   * boolean determining the visibility of the title.
   * Default value: true
   */
  visible: boolean;
}

/**Settings used to format xAxis values in tooltips. */
export interface ChartXAxisToolTipFormatSettings {
  /**
   * Optional date format string. This property is applicable only when displaying Date objects.
   * Default value: null
   */
  dateFormat: string | null;
  /**
   * Decimal places of numeric values.
   * Default value: null
   */
  decimalPlaces: number | null;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number. The default value is inherited from localization.decimalSeparator.
   * Default value: null
   */
  decimalSeparator: string | null;
  /**
   * A boolean value indicating whether to display negative numbers in brackets.
   * Default value: false
   */
  negativeWithBrackets: boolean;
  /**
   * Text to prepend to the value.
   * Default value: ""
   */
  prefix: string;
  /**
   * Text to append to the value
   * Default value: ""
   */
  sufix: string;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc. The default value is inherited from localization.thousandsSeparator.
   * Default value: null
   */
  thousandsSeparator: string | null;
}

declare global {    
    interface Document {
        createElement(tagName: "smart-chart"): Chart;
    }
}

