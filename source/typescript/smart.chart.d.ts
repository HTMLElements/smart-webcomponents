import  {BaseElement, Animation} from "./smart.element"

/**
 Chart is a feature-complete interactive graph library that answers the data visualization needs of any modern web app.
*/
export interface Chart extends BaseElement {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets or gets the animation mode. Animation is disabled when the property is set to 'none'.
   * Default value: advanced
   */
  animation?: Animation;
  /**
   * Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value.
   * Default value: 300
   */
  animationDuration?: number;
  /**
   * Sets the chart's background color.
   * Default value: null
   */
  backgroundColor?: string | null;
  /**
   * Sets the chart's background image.
   * Default value: ""
   */
  backgroundImage?: string;
  /**
   * Sets the chart's border color.
   * Default value: null
   */
  borderLineColor?: string | null;
  /**
   * Sets the chart's border line width.
   * Default value: 1
   */
  borderLineWidth?: number;
  /**
   * Sets the caption (title) of the chart.
   * Default value: "Caption"
   */
  caption?: string;
  /**
   * Determines whether to clip plotted elements that overflow the axis boundaries.
   * Default value: true
   */
  clip?: boolean;
  /**
   * Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
   * Default value: scheme01
   */
  colorScheme?: ChartColorScheme;
  /**
   * Enables or disables overlapping of the column series.
   * Default value: false
   */
  columnSeriesOverlap?: boolean;
  /**
   * Gets or sets the color of the crosshairs lines.
   * Default value: null
   */
  crosshairsColor?: string | null;
  /**
   * Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: "2,2"
   */
  crosshairsDashStyle?: string;
  /**
   * Gets or sets the width of the crosshairs lines.
   * Default value: 1
   */
  crosshairsLineWidth?: number;
  /**
   * Sets the chart's data source.
   * Default value: 
   */
  dataSource?: any;
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
   * Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing.
   * Default value: null
   */
  draw?: any;
  /**
   * Function for custom drawing before the caption and other chart elements.
   * Default value: null
   */
  drawBefore?: any;
  /**
   * Determines if the animation of the axes text is enabled.
   * Default value: false
   */
  enableAxisTextAnimation?: boolean;
  /**
   * Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point.
   * Default value: false
   */
  enableCrosshairs?: boolean;
  /**
   * Determines whether to display the chart using greyscale colors.
   * Default value: false
   */
  greyScale?: boolean;
  /**
   * Sets the legend's layout.
   * Default value: [object Object]
   */
  legendLayout?: any;
  /**
   * Sets or gets the locale. Used in conjunction with the property messages.
   * Default value: "en"
   */
  locale?: string;
  /**
   * Localization object containing culture-specific properties required for formatting currencies, numbers and dates.
   * Default value: [object Object]
   */
  localization?: ChartLocalization;
  /**
   * Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Sets the left, top, right and bottom padding of the Chart.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the legend bar position in the Chart.
   * Default value: [object Object]
   */
  legendPosition?: ChartLegendPosition;
  /**
   * Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities.
   * Default value: 
   */
  renderEngine?: ChartRenderEngine;
  /**
   * Sets or gets a value indicating whether the Chart's layout is mirrored.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
   * Default value: 
   */
  seriesGroups?: ChartSeriesGroup[];
  /**
   * Determines whether to display the chart's border line.
   * Default value: true
   */
  showBorderLine?: boolean;
  /**
   * Determines whether to show or hide the chart series legend.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Enables or disables the chart tooltips.
   * Default value: true
   */
  showToolTips?: boolean;
  /**
   * Determines whether to show a composite tooltip containing information for all series.
   * Default value: false
   */
  showToolTipsOnAllSeries?: boolean;
  /**
   * Determines the set of default background, line, text and band colors that will be used in the Chart.
   * Default value: light
   */
  theme?: ChartTheme;
  /**
   * Sets the padding of the chart's title (caption).
   * Default value: [object Object]
   */
  titlePadding?: Padding;
  /**
   * Tooltip background color.
   * Default value: null
   */
  toolTipBackground?: string | null;
  /**
   * User defined tooltip text formatting callback function.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Determines the tooltip hide delay in milliseconds.
   * Default value: 4000
   */
  toolTipHideDelay?: number;
  /**
   * Tooltip line color.
   * Default value: null
   */
  toolTipLineColor?: string | null;
  /**
   * Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms].
   * Default value: 300
   */
  toolTipShowDelay?: number;
  /**
   * An object with settings about the Chart's y-axis (value axis).
   * Default value: [object Object]
   */
  valueAxis?: ChartValueAxis;
  /**
   * Sets the Chart's xAxis.
   * Default value: [object Object]
   */
  xAxis?: ChartXAxis;
  /** 
   * The event is raised when the user clicks on a chart annotation.
	* @param event. The custom event.    */
  onAnnotationClick?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor above a chart annotation.
	* @param event. The custom event.    */
  onAnnotationMouseenter?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor out of a chart annotation.
	* @param event. The custom event.    */
  onAnnotationMouseleave?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user clicks on series element.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor out of a series element.
	* @param event. The custom event.    */
  onMouseout: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the user moves the cursor above a series element.
	* @param event. The custom event.    */
  onMouseover: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised after the chart's range selector position changes and after the chart ends rendering.
	* @param event. The custom event.    */
  onRangeSelectionChanged?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart's range selector position changes and before the chart starts rendering.
	* @param event. The custom event.    */
  onRangeSelectionChanging?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart begins rendering.
	* @param event. The custom event.    */
  onRefreshBegin?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when the chart finishes rendering.
	* @param event. The custom event.    */
  onRefreshEnd?: ((this: any, ev: Event) => any) | null;
  /** 
   * The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
	* @param event. The custom event.    */
  onToggle: ((this: any, ev: Event) => any) | null;
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
   * @returns 
   */
  getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): { x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number };
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
   * @returns {any}
   */
  getValueAxisLabels(groupIndex: number): any;
  /**
   * Gets the rendered rectangle coordinates of the valueAxis of specific serie group.
   * @param {number} groupIndex. Series group index.
   * @returns {DOMRect}
   */
  getValueAxisRect(groupIndex: number): DOMRect;
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
   * @returns {any}
   */
  getXAxisLabels(groupIndex: number): any;
  /**
   * Gets the rendered rectangle coordinates of the x-Axis of specific serie group.
   * @param {number} groupIndex. Series group index.
   * @returns {DOMRect}
   */
  getXAxisRect(groupIndex: number): DOMRect;
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

  /* Get a member by its name */
  [name: string]: any;
  /**
   * A symbol used to mark the border between the integer and fractional parts of a number.
   * Default value: "."
   */
  decimalSeparator?: string;
  /**
   * An object containing datetime formatting patterns.
   * Default value: null
   */
  patterns?: any;
  /**
   * A symbol used to mark the border between thousands, millions, billions, etc.
   * Default value: ""
   */
  thousandsSeparator?: string;
}

/**Sets the left, top, right and bottom padding of the Chart. */
export interface Padding {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Bottom padding of the Chart.
   * Default value: 5
   */
  bottom?: number;
  /**
   * Left padding of the Chart.
   * Default value: 5
   */
  left?: number;
  /**
   * Right padding of the Chart.
   * Default value: 5
   */
  right?: number;
  /**
   * Top padding of the Chart.
   * Default value: 5
   */
  top?: number;
}

/**Sets the legend bar position in the Chart. */
export interface ChartLegendPosition {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Height of legend in the Chart.
   * Default value: 5
   */
  height?: number;
  /**
   * Left legend position in the Chart.
   * Default value: 5
   */
  left?: number;
  /**
   * Width of legend in the Chart.
   * Default value: 5
   */
  width?: number;
  /**
   * Top legend position in the Chart.
   * Default value: 5
   */
  top?: number;
}

export interface ChartSeriesGroup {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * An array of chart annotation objects.
   * Default value: null
   */
  annotations?: ChartAnnotation[];
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ChartBand[];
  /**
   * Percentage gap between columns within the same serie.
   * Default value: 25
   */
  columnsGapPercent?: number;
  /**
   * Maximum width of columns in column series.
   * Default value: null
   */
  columnsMaxWidth?: number;
  /**
   * Minimum width of columns in column series.
   * Default value: 1
   */
  columnsMinWidth?: number;
  /**
   * Columns bottom width (as percentage of the total width).
   * Default value: 100
   */
  columnsBottomWidthPercent?: number;
  /**
   * Columns top width (as percentage of the total width).
   * Default value: 100
   */
  columnsTopWidthPercent?: number;
  /**
   * Determines the drawing function of the series group. When the property is set, you can draw after the series group has been plotted.
   * Default value: null
   */
  draw?: any;
  /**
   * Determines the data source of the serie
   * Default value: null
   */
  dataSource?: any;
  /**
   * Function for custom drawing before the series group.
   * Default value: null
   */
  drawBefore?: any;
  /**
   * Determines whether series are selectable.
   * Default value: true
   */
  enableSelection?: boolean;
  /**
   * Determines whether to toggle series visibility after click on a legend's box.
   * Default value: true
   */
  enableSeriesToggle?: boolean;
  /**
   * The end angle (in degrees) of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: 360
   */
  endAngle?: number;
  /**
   * Callback function used to format series labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of series labels.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Determines how line and area series are unselected based on mouse and touch events. If the value is set to 'click', once a line or area serie is selected, it will remain selected until the user clicks or moves the cursor outside the chart. In default mode, the serie will be unselected immediatelly after the cursor moves over another serie or outside the chart.
   * Default value: default
   */
  linesUnselectMode?: ChartUnselectMode;
  /**
   * Horizontal position of the center of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  offsetX?: number;
  /**
   * Vertical position of the center of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  offsetY?: number;
  /**
   * Specifies the orientation of the series group.
   * Default value: vertical
   */
  orientation?: Orientation;
  /**
   * Specifies the summary of the series group.
   * Default value: ""
   */
  summary?: string;
  /**
   * When polar is set to true, the chart will render in polar coordinates.
   * Default value: false
   */
  polar?: boolean;
  /**
   * The radius of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: null
   */
  radius?: number;
  /**
   * An array of chart series.
   * Default value: 
   */
  series?: ChartSeriesGroupSerie[];
  /**
   * Percentage gap between columns belonging to different series.
   * Default value: 10
   */
  seriesGapPercent?: number;
  /**
   * Determines whether to display overlapping data points in column, ohlc and candlestick series.
   * Default value: true
   */
  skipOverlappingPoints?: boolean;
  /**
   * When showLabels is set to true, the chart will render pie labels.
   * Default value: true
   */
  showLabels?: boolean;
  /**
   * When spider is set to true, the chart will render in polar coordinates.
   * Default value: false
   */
  spider?: boolean;
  /**
   * The start angle (in degrees) of the polar coordinate system. Applicable to polar and spider charts only.
   * Default value: 0
   */
  startAngle?: number;
  /**
   * Sets the chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series'stackedcolumn' - stacked column series'stackedcolumn100' - percentage stacked columns'rangecolumn' - floating column between two values'waterfall' - waterfall series'stackedwaterfall' - stacked waterfall series'line' - simple straight lines connecting the value points'stackedline' - stacked lines'stackedline100' - percentage stacked lines'spline' - smooth lines connecting the value points'stackedspline' - smooth stacked lines'stackedspline100' - percentage stacked smooth lines'stepline' - step line'stackedstepline' - stacked step line'stackedstepline100' - percentage stacked step line'area' - area connecting the value points with straight lines'stackedarea' - stacked area with straight lines between the points'stackedarea100' - percentage stacked area with straight lines between the points'rangearea' - floating area between pairs of value points'splinearea' - smooth area connecting the value points'stackedsplinearea' - stacked smooth area connecting the value points'stackedsplinearea100' - percentage stacked smooth area'splinerangearea' - smooth floating area between pairs of value points'steprangearea' - step area between pairs of value points'stackedsplineara' - smooth stacked area'steparea' - step area connecting the value points'stackedsteparea' - step stacked area'stackedsteparea100' - percentage stacked step area'pie' - circular chart divided into sectors, illustrating proportion'donut' - chart divided into circular sectors with different inner and outer radius'scatter' - data is displayed as a collection of points'stackedscatter' - data is displayed as a collection of points and the values are stacked'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked'bubble' - data is displayed as a collection of bubbles'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked'candlestick' - display candlestick series using open, high, low, close data points'ohlc' - display OHLC series using open, high, low, close data points
   * Default value: null
   */
  type?: ChartType;
  /**
   * Object describing the format settings of series tooltips.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ChartFormatSettings;
  /**
   * Sets the tooltip format function. The function is used to format the tooltips of the Chart serie
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Determines whether to use color gradients.
   * Default value: false
   */
  useGradientColors?: boolean;
  /**
   * Object describing the valueAxis for this group. jqxChart allows you to use a common valueAxis and/or multiple value axes per serie group.
   * Default value: [object Object]
   */
  valueAxis?: ChartValueAxis;
  /**
   * Object describing the xAxis for this group.
   * Default value: [object Object]
   */
  xAxis?: ChartXAxis;
}

export interface ChartAnnotation {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Fill/background color of the annotation.
   * Default value: null
   */
  fillColor?: string | null;
  /**
   * Height of the annotation.
   * Default value: null
   */
  height?: number;
  /**
   * Line color of the annotation.
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Custom offset of the annotation relative to xValue & yValue.
   * Default value: [object Object]
   */
  offset?: Offset;
  /**
   * Line path command in case the type is 'path', e.g. 'M 10,10 L 20,20 L 50,50'.
   * Default value: null
   */
  path?: string | null;
  /**
   * Radius of the annotation in case its type is 'circle'.
   * Default value: null
   */
  radius?: number;
  /**
   * Object describing the text of the annotation.
   * Default value: [object Object]
   */
  text?: ChartAnnotationText;
  /**
   * Shape type of the annotation.
   * Default value: null
   */
  type?: ChartAnnotationType;
  /**
   * Width of the annotation.
   * Default value: null
   */
  width?: number;
  /**
   * Value to determine the horizontal offset of the annotation.
   * Default value: null
   */
  xValue?: number;
  /**
   * Optional 2nd value to determine the horizontal offset of the annotation bottom-right point.
   * Default value: null
   */
  xValue2?: number;
  /**
   * Value to determine the vertical offset of the annotation.
   * Default value: null
   */
  yValue?: number;
  /**
   * Optional 2nd value to determine the vertical offset of the annotation's bottom-right point.
   * Default value: null
   */
  yValue2?: number;
}

/**Custom offset of the annotation relative to <strong>xValue</strong> & <strong>yValue</strong>. */
export interface Offset {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Horizontal offset.
   * Default value: null
   */
  x?: number | null;
  /**
   * Vertical offset.
   * Default value: null
   */
  y?: number | null;
}

/**Object describing the text of the annotation. */
export interface ChartAnnotationText {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Text rotation angle.
   * Default value: null
   */
  angle?: number;
  /**
   * CSS class of the annotation.
   * Default value: null
   */
  class?: string | null;
  /**
   * Inner text color (fill).
   * Default value: null
   */
  fillColor?: string | null;
  /**
   * Horizontal text alignment.
   * Default value: center
   */
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Outer text color (stroke).
   * Default value: null
   */
  lineColor?: string | null;
  /**
   * Offset of the annotation text relative to the base annotation offset.
   * Default value: [object Object]
   */
  offset?: Offset;
  /**
   * Position to rotate the text around.
   * Default value: centermiddle
   */
  rotationPoint?: ChartRotationPoint;
  /**
   * Text of the annotation.
   * Default value: null
   */
  value?: string | null;
  /**
   * Vertical text alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment;
}

export interface ChartBand {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Color used to fill the area between the minValue and the maxValue.
   * Default value: null
   */
  color?: string | null;
  /**
   * Dash style of the band lines. The style is a series of numbers indicating line length followed by space length.
   * Default value: null
   */
  dashStyle?: string | null;
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
export interface ChartFormatSettings {

  /* Get a member by its name */
  [name: string]: any;
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

export interface ChartSeriesGroupSerie {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Offset from the center point in a pie/donut series.
   * Default value: 0
   */
  centerOffset?: any;
  /**
   * A custom function that returns the color of a data point. The function will receive the following parameters: dataValue, itemIndex, serie, group. The implementation of the function can return a single color which will be used as a fillColor and the other colors will be derived or it can return an object containing fillColor, fillColorSelected, etc.
   * Default value: null
   */
  colorFunction?: any;
  /**
   * Color palette to use when rendering the serie.
   * Default value: null
   */
  colorScheme?: ChartColorScheme;
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
   * Determines how to display value gaps in line series.
   * Default value: skip
   */
  emptyPointsDisplay?: ChartSeriesGroupSerieEmptyPointsDisplay;
  /**
   * Determines whether the serie is selectable.
   * Default value: true
   */
  enableSelection?: boolean;
  /**
   * Determines whether to toggle the series visibility after click on a legend's box.
   * Default value: true
   */
  enableSeriesToggle?: boolean;
  /**
   * Determines the labels rotation radius when the Chart is 'pie' or 'donut'.
   * Default value: 0
   */
  labelRadius?: number;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
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
   * Fill color for the serie.
   * Default value: null
   */
  fillColor?: string | null;
  /**
   * Alternating fill color for the serie. Applicable to OHLC series only.
   * Default value: null
   */
  fillColorAlt?: string | null;
  /**
   * Alternating fill color for the serie when selected. Applicable to OHLC series only.
   * Default value: null
   */
  fillColorAltSelected?: string | null;
  /**
   * Fill color for the serie when selected.
   * Default value: null
   */
  fillColorSelected?: string | null;
  /**
   * Fill color for the marker symbols in the serie.
   * Default value: null
   */
  fillColorSymbol?: string | null;
  /**
   * Fill color for the the marker symbols in serie when selected.
   * Default value: null
   */
  fillColorSymbolSelected?: string | null;
  /**
   * Determines whether to display the serie in grey scale.
   * Default value: null
   */
  greyScale?: boolean | null;
  /**
   * Determines whether to hide slices of toggled points in pie and donut series.
   * Default value: false
   */
  hiddenPointsDisplay?: boolean;
  /**
   * Initial angle in pie and donut series.
   * Default value: 0
   */
  initialAngle?: number;
  /**
   * Inner radius of donut series in pixels or percents.
   * Default value: 0
   */
  innerRadius?: any;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
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
  legendFormatSettings?: ChartFormatSettings;
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
   * Line color for the marker symbols in the serie when selected.
   * Default value: null
   */
  lineColorSymbolSelected?: string | null;
  /**
   * A string sequence of numbers represening line and space lengths, e.g. '2,2'.
   * Default value: null
   */
  lineDashStyle?: string | null;
  /**
   * Determines how line and area series are unselected based on mouse and touch events. If the value is set to 'click', once a line or area serie is selected, it will remain selected until the user clicks or moves the cursor outside the chart. In default mode, the serie will be unselected immediatelly after the cursor moves over another serie or outside the chart.
   * Default value: default
   */
  linesUnselectMode?: ChartUnselectMode;
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
  minRadius?: any;
  /**
   * Max radius of bubble series in pixels or percents.
   * Default value: null
   */
  maxRadius?: any;
  /**
   * Determines the opacity of the items in this serie.
   * Default value: 1
   */
  opacity?: number;
  /**
   * Outer radius of pie and donut series in pixels or percents.
   * Default value: null
   */
  radius?: any;
  /**
   * Radius change on selection of pie and donut series in pixels or percents.
   * Default value: null
   */
  selectedRadiusChange?: any;
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
  symbolType?: ChartSymbolType;
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
  toolTipFormatSettings?: ChartFormatSettings;
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
export interface ChartLabels {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Text rotation angle.
   * Default value: 0
   */
  angle?: number;
  /**
   * boolean determining if auto rotation is enabled.
   * Default value: false
   */
  autoRotate?: boolean;
  /**
   * Labels background color.
   * Default value: null
   */
  backgroundColor?: string | null;
  /**
   * Labels background opacity.
   * Default value: 1
   */
  backgroundOpacity?: number | null;
  /**
   * Labels border line color.
   * Default value: null
   */
  borderColor?: string | null;
  /**
   * Labels border line opacity.
   * Default value: 1
   */
  borderOpacity?: number | null;
  /**
   * CSS class of the labels.
   * Default value: null
   */
  class?: string | null;
  /**
   * An array of custom values/offsets where a label will be displayed. Applicable only if labels.visible is set to 'custom'.
   * Default value: null
   */
  custom?: [] | null;
  /**
   * Callback function used to format the labels.
   * Default value: null
   */
  formatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Object describing the format settings of the labels.
   * Default value: [object Object]
   */
  formatSettings?: ChartFormatSettings;
  /**
   * Horizontal labels alignment.
   * Default value: center
   */
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Determines whether to use direct lines for the labels in pie/donut series.
   * Default value: true
   */
  linesAngles?: boolean;
  /**
   * Determines whether to use lines for the labels in pie/donut series.
   * Default value: true
   */
  linesEnabled?: boolean;
  /**
   * Labels offset.
   * Default value: [object Object]
   */
  offset?: Offset;
  /**
   * Object describing the padding of the labels.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Radius of the labels in pie/donut series.
   * Default value: null
   */
  radius?: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  rotationPoint?: ChartRotationPoint;
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
   * Vertical labels alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible?: any;
}

/**Object describing the valueAxis for this group. jqxChart allows you to use a common valueAxis and/or multiple value axes per serie group. */
export interface ChartValueAxis {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor?: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2?: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity?: number;
  /**
   * Sets the size of the axis.
   * Default value: null
   */
  axisSize?: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ChartBand[];
  /**
   * Sets the baseline value for the axis.
   * Default value: 0
   */
  baselineValue?: any;
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw?: boolean;
  /**
   * Sets the description of the value axis.
   * Default value: ""
   */
  description?: string;
  /**
   * Specifies whether the values axis is displayed.
   * Default value: true
   */
  displayValueAxis?: boolean;
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
  formatSettings?: ChartFormatSettings;
  /**
   * Object describing the grid lines properties of the valueAxis.
   * Default value: [object Object]
   */
  gridLines?: ChartLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line?: ChartLine;
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
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the axis position. The values 'left' and 'right' are available in the default case. If the valueAxis is horizontal, only 'top' and 'bottom' are available.
   * Default value: left
   */
  position?: AxisPosition;
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle?: number | null;
  /**
   * Value Axis Type
   * Default value: ""
   */
  type?: string;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint?: ChartRotationPoint;
  /**
   * Object describing the tick marks properties of the valueAxis.
   * Default value: [object Object]
   */
  tickMarks?: ChartLines;
  /**
   * Object describing the title of the valueAxis.
   * Default value: [object Object]
   */
  title?: ChartTitle;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks?: boolean;
  /**
   * Shows or hides the valueAxis.
   * Default value: true
   */
  visible?: boolean;
}

/**Object describing the grid lines properties of the valueAxis. */
export interface ChartLines {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Color of the grid lines.
   * Default value: ""
   */
  color?: string;
  /**
   * An array of custom values/offsets where a grid line will be displayed. Applicable only if gridLines.visible is set to 'custom'.
   * Default value: null
   */
  custom?: [] | null;
  /**
   * Grid lines dash style, e.g. '2,2'.
   * Default value: ""
   */
  dashStyle?: string;
  /**
   * Line width (in pixels) of the grid lines.
   * Default value: 1
   */
  lineWidth?: string | number | null;
  /**
   * Size (in pixels) of the tick marks.
   * Default value: 4
   */
  size?: string | number | null;
  /**
   * Interval steps between grid line placements (multiples of the axis unit interval).
   * Default value: null
   */
  step?: number | null;
  /**
   * Sets the interval between the grid lines.
   * Default value: null
   */
  unitInterval?: number;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of grid lines. When 'custom' is set, displays only custom values/offsets from the gridLines.custom array.
   * Default value: true
   */
  visible?: any;
}

/**Object describing the line properties of the axis. */
export interface ChartLine {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Color of axis line.
   * Default value: ""
   */
  color?: string;
  /**
   * Line dash style, e.g. '2,2'. The default is inherited from gridLines.dashStyle.
   * Default value: ""
   */
  dashStyle?: string;
  /**
   * Line width. The default is inherited from gridLines.lineWidth.
   * Default value: 1
   */
  lineWidth?: number;
  /**
   * boolean determining the visibility of the axis line.
   * Default value: true
   */
  visible?: any;
}

/**Object describing the title of the valueAxis. */
export interface ChartTitle {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * CSS class of the title text.
   * Default value: null
   */
  class?: string | null;
  /**
   * Horizontal alignment.
   * Default value: center
   */
  horizontalAlignment?: HorizontalAlignment;
  /**
   * Text of the title.
   * Default value: ""
   */
  text?: string;
  /**
   * Vertical alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment;
  /**
   * boolean determining the visibility of the title.
   * Default value: true
   */
  visible?: boolean;
}

/**Object describing the xAxis for this group. */
export interface ChartXAxis {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Alternating background color between grid lines.
   * Default value: ""
   */
  alternatingBackgroundColor?: string;
  /**
   * Second alternating background color.
   * Default value: ""
   */
  alternatingBackgroundColor2?: string;
  /**
   * Opacity of the alternating background.
   * Default value: 1
   */
  alternatingBackgroundOpacity?: number;
  /**
   * Sets the size of the xAxis.
   * Default value: null
   */
  axisSize?: any;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ChartBand[];
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit?: ChartBaseUnit;
  /**
   * boolean determining whether to draw the axis or the user will use APIs to draw it.
   * Default value: false
   */
  customDraw?: boolean;
  /**
   * Points to a data field in the data source.
   * Default value: ""
   */
  dataField?: string;
  /**
   * Optional date format for parsing the data from the data source. Applicable when xAxis.type is set to 'date'.
   * Default value: null
   */
  dateFormat?: string | null;
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
  formatSettings?: ChartFormatSettings;
  /**
   * Object describing the grid lines properties of the xAxis.
   * Default value: [object Object]
   */
  gridLines?: ChartLines;
  /**
   * Object describing the labels properties of the axis.
   * Default value: [object Object]
   */
  labels?: ChartLabels;
  /**
   * Object describing the line properties of the axis.
   * Default value: [object Object]
   */
  line?: ChartLine;
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
   * Object describing the padding of the axis.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the axis position. The values 'bottom' and 'top' are available in the default case. If the xAxis is vertical, only 'left' and 'right' are available.
   * Default value: bottom
   */
  position?: AxisPosition;
  /**
   * Definition of a range selector on the xAxis. The range selector itself is also an instance of smart-chart.
   * Default value: [object Object]
   */
  rangeSelector?: ChartRangeSelector;
  /**
   * xAxis's text value.
   * Default value: ""
   */
  text?: string;
  /**
   * Text rotation angle.
   * Default value: null
   */
  textRotationAngle?: number | null;
  /**
   * Position to rotate the text around.
   * Default value: auto
   */
  textRotationPoint?: ChartRotationPoint;
  /**
   * Object describing the tick marks properties of the xAxis.
   * Default value: [object Object]
   */
  tickMarks?: ChartLines;
  /**
   * Object describing the title of the xAxis.
   * Default value: [object Object]
   */
  title?: ChartTitle;
  /**
   * Custom function to format xAxis values in tooltips.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Settings used to format xAxis values in tooltips.
   * Default value: [object Object]
   */
  toolTipFormatSettings?: ChartFormatSettings;
  /**
   * The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.'date' - when displaying dates.'basic' - displays all data points sequentially.'linear' - linear arrangement by the value of the xAxis data field.
   * Default value: auto
   */
  type?: ChartXAxisType;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * Specifies whether the axis values will be aligned with the tick marks.
   * Default value: true
   */
  valuesOnTicks?: boolean;
  /**
   * Shows or hides the xAxis.
   * Default value: true
   */
  visible?: boolean;
}

/**Definition of a range selector on the xAxis. The range selector itself is also an instance of ${namespace.toLowerCase()}-chart. */
export interface ChartRangeSelector {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * Sets the range selector chart's background color.
   * Default value: null
   */
  backgroundColor?: string | null;
  /**
   * Sets the range selector chart's background image.
   * Default value: ""
   */
  backgroundImage?: string;
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit?: ChartBaseUnit;
  /**
   * Sets the range selector chart's border color.
   * Default value: null
   */
  borderLineColor?: string | null;
  /**
   * Sets the range selector chart's border line width.
   * Default value: null
   */
  borderLineWidth?: number | null;
  /**
   * Sets the caption (title) of the range selector chart.
   * Default value: ""
   */
  caption?: string;
  /**
   * Sets the range selector chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
   * Default value: null
   */
  colorScheme?: ChartColorScheme;
  /**
   * Enables or disables overlapping of the column series.
   * Default value: false
   */
  columnSeriesOverlap?: boolean;
  /**
   * Percentage gap between columns within the same serie.
   * Default value: 25
   */
  columnsGapPercent?: number;
  /**
   * Points to a data field in the data source.
   * Default value: null
   */
  dataField?: string | null;
  /**
   * Sets the description text of the range selector chart.
   * Default value: ""
   */
  description?: string;
  /**
   * Determines whether to display the range selector chart using greyscale colors.
   * Default value: null
   */
  greyScale?: boolean | null;
  /**
   * Object describing the grid lines properties of the range selector chart's xAxis.
   * Default value: [object Object]
   */
  gridLines?: ChartLines;
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
  labels?: ChartLabels;
  /**
   * Sets the maximum value of the range selector chart's xAxis.
   * Default value: NaN
   */
  maxValue?: any;
  /**
   * Sets the minimum value of the range selector chart's xAxis.
   * Default value: NaN
   */
  minValue?: any;
  /**
   * Object describing the padding of the range selector chart.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Sets the range selector chart position.
   * Default value: null
   */
  position?: AxisPosition;
  /**
   * An HTML element outside the chart to render the range selector chart to.
   * Default value: null
   */
  renderTo?: HTMLElement | null;
  /**
   * Sets or gets a value indicating whether the range selector chart's layout is mirrored.
   * Default value: null
   */
  rightToLeft?: boolean | null;
  /**
   * Percentage gap between columns belonging to different series.
   * Default value: 10
   */
  seriesGapPercent?: number;
  /**
   * (Optional) The seriesGroups property is used to describe all series displayed on the range selector chart.Please refer to the main seriesGroups property entry for more information and a full subproperty list.
   * Default value: null
   */
  seriesGroups?: [] | null;
  /**
   * Sets the range selector chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series'stackedcolumn' - stacked column series'stackedcolumn100' - percentage stacked columns'rangecolumn' - floating column between two values'waterfall' - waterfall series'stackedwaterfall' - stacked waterfall series'line' - simple straight lines connecting the value points'stackedline' - stacked lines'stackedline100' - percentage stacked lines'spline' - smooth lines connecting the value points'stackedspline' - smooth stacked lines'stackedspline100' - percentage stacked smooth lines'stepline' - step line'stackedstepline' - stacked step line'stackedstepline100' - percentage stacked step line'area' - area connecting the value points with straight lines'stackedarea' - stacked area with straight lines between the points'stackedarea100' - percentage stacked area with straight lines between the points'rangearea' - floating area between pairs of value points'splinearea' - smooth area connecting the value points'stackedsplinearea' - stacked smooth area connecting the value points'stackedsplinearea100' - percentage stacked smooth area'splinerangearea' - smooth floating area between pairs of value points'steprangearea' - step area between pairs of value points'stackedsplineara' - smooth stacked area'steparea' - step area connecting the value points'stackedsteparea' - step stacked area'stackedsteparea100' - percentage stacked step area'pie' - circular chart divided into sectors, illustrating proportion'donut' - chart divided into circular sectors with different inner and outer radius'scatter' - data is displayed as a collection of points'stackedscatter' - data is displayed as a collection of points and the values are stacked'stackedscatter100' - data is displayed as a collection of points and the values are percentage stacked'bubble' - data is displayed as a collection of bubbles'stackedbubble' - data is displayed as a collection of bubbles and the values are stacked'stackedbubble100' - data is displayed as a collection of bubbles and the values are percentage stacked'candlestick' - display candlestick series using open, high, low, close data points'ohlc' - display OHLC series using open, high, low, close data points
   * Default value: area
   */
  serieType?: ChartType;
  /**
   * Determines whether to display the range selector chart's border line.
   * Default value: null
   */
  showBorderLine?: boolean | null;
  /**
   * Sets the size of the range selector chart.
   * Default value: null
   */
  size?: number | null;
  /**
   * Determines whether to display overlapping data points in column, ohlc and candlestick series.
   * Default value: true
   */
  skipOverlappingPoints?: boolean;
  /**
   * Sets the padding of the chart's title (caption).
   * Default value: [object Object]
   */
  titlePadding?: Padding;
  /**
   * Sets the interval between the units.
   * Default value: null
   */
  unitInterval?: number | null;
  /**
   * An object with settings about the range selector Chart's y-axis (value axis).
   * Default value: [object Object]
   */
  valueAxis?: ChartValueAxis;
  /**
   * Shows or hides the range selector.
   * Default value: false
   */
  visible?: boolean;
}

declare global {    
    interface Document {
			createElement(tagName: "smart-chart"): Chart;
			querySelector(selectors: "smart-chart"): Chart | null;	
			querySelectorAll(selectors: "smart-chart"): NodeListOf<Chart>;
			getElementsByTagName(qualifiedName: "smart-chart"): HTMLCollectionOf<Chart>;
			getElementsByName(elementName: "smart-chart"): NodeListOf<Chart>;	
    }
}

/**Sets the range selector chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
export declare type ChartColorScheme = 'scheme01' | 'scheme02' | 'scheme03' | 'scheme04' | 'scheme05' | 'scheme06' | 'scheme07' | 'scheme08' | 'scheme09' | 'scheme10' | 'scheme11' | 'scheme12' | 'scheme13' | 'scheme14' | 'scheme15' | 'scheme16' | 'scheme17' | 'scheme18' | 'scheme19' | 'scheme20' | 'scheme21' | 'scheme22' | 'scheme23' | 'scheme24' | 'scheme25' | 'scheme26' | 'scheme27' | 'scheme28' | 'scheme29' | 'scheme30' | 'scheme31' | 'scheme32' | 'custom';
/**Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities. */
export declare type ChartRenderEngine = null | 'SVG' | 'HTML5';
/**Horizontal alignment. */
export declare type HorizontalAlignment = 'left' | 'center' | 'right';
/**Position to rotate the text around. */
export declare type ChartRotationPoint = 'auto' | 'left' | 'center' | 'right' | 'topleft' | 'topcenter' | 'topright' | 'bottomleft' | 'bottomcenter' | 'bottomright' | 'centermiddle';
/**Vertical alignment. */
export declare type VerticalAlignment = 'top' | 'center' | 'bottom';
/**Shape type of the annotation. */
export declare type ChartAnnotationType = 'text' | 'rect' | 'circle' | 'line' | 'path' | 'null';
/**Determines how line and area series are unselected based on mouse and touch events. If the value is set to 'click', once a line or area serie is selected, it will remain selected until the user clicks or moves the cursor outside the chart. In default mode, the serie will be unselected immediatelly after the cursor moves over another serie or outside the chart. */
export declare type ChartUnselectMode = 'click' | 'default';
/**Specifies the orientation of the series group. */
export declare type Orientation = 'vertical' | 'horizontal';
/**Determines how to display value gaps in line series. */
export declare type ChartSeriesGroupSerieEmptyPointsDisplay = 'connect' | 'skip' | 'zero';
/**Determines the symbol type displayed for the data points in the serie. This parameter is applicable to line, area, scatter and bubble series only. */
export declare type ChartSymbolType = 'none' | 'circle' | 'square' | 'diamond' | 'triangle_up' | 'triangle_down' | 'triangle_left' | 'triangle_right';
/**Sets the range selector chart type. jqxChart supports several common chart types. You can easily plot series of different types on a common chart. A type must be specified for each series group. Currently, jqxChart supports the following series types:'column' - simple column series
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
export declare type ChartType = 'column' | 'stackedcolumn' | 'stackedcolumn100' | 'rangecolumn' | 'waterfall' | 'stackedwaterfall' | 'line' | 'stackedline' | 'stackedline100' | 'spline' | 'stackedspline' | 'stackedspline100' | 'stepline' | 'stackedstepline' | 'stackedstepline100' | 'area' | 'stackedarea' | 'stackedarea100' | 'rangearea' | 'splinearea' | 'stackedsplinearea' | 'stackedsplinearea100' | 'splinerangearea' | 'steprangearea' | 'stackedsplineara' | 'steparea' | 'stackedsteparea' | 'stackedsteparea100' | 'pie' | 'donut' | 'scatter' | 'stackedscatter' | 'stackedscatter100' | 'bubble' | 'stackedbubble' | 'stackedbubble100' | 'candlestick' | 'ohlc';
/**Sets the range selector chart position. */
export declare type AxisPosition = 'bottom' | 'top' | 'left' | 'right';
/**The base unit when used with 'date' axis. */
export declare type ChartBaseUnit = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';
/**The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.
'date' - when displaying dates.
'basic' - displays all data points sequentially.
'linear' - linear arrangement by the value of the xAxis data field.
 */
export declare type ChartXAxisType = 'auto' | 'date' | 'basic' | 'linear';
/**Determines the set of default background, line, text and band colors that will be used in the Chart. */
export declare type ChartTheme = 'light' | 'dark';
