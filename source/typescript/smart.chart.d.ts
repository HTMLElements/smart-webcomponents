import  {BaseElement, Animation} from "./smart.element"

export interface ChartProperties {
  /**
   * Specifies or retrieves the current animation mode. When the property is set to 'none', all animations are disabled and no animation effects will be applied. For other supported values, the property enables the corresponding animation behavior.
   * Default value: advanced
   */
  animation?: Animation | string;
  /**
   * Specifies the duration of the animation, in milliseconds. Acceptable values range from 0 to 5000 inclusive. If a value outside this range is provided, jqxChart will automatically revert the animation duration to its default setting.
   * Default value: 300
   */
  animationDuration?: number;
  /**
   * Specifies the color used for the chart’s background. Accepts any valid CSS color format, such as hexadecimal (e.g., '#DDFFE8'), RGB (e.g., 'rgb(221,255,232)'), or color names (e.g., 'lightgreen'). This property controls the area behind all chart elements, providing visual distinction or branding.
   * Default value: null
   */
  backgroundColor?: string | null;
  /**
   * Specifies the URL of an image to be used as the chart’s background. For example, setting this property to 'https://www.htmlelements.com/demos/images/carousel-large-1.jpg' will display that image as the backdrop behind the chart elements. This allows you to customize the chart’s appearance with any image of your choice.
   * Default value: ""
   */
  backgroundImage?: string;
  /**
   * Defines the color of the chart's border. Accepts any valid CSS color value, such as a hexadecimal code (e.g., "#098700"), RGB, RGBA, HSL, or named color. This property allows you to customize the appearance of the chart's outline to match your application's design.
   * Default value: null
   */
  borderLineColor?: string | null;
  /**
   * Specifies the thickness, in pixels, of the chart’s border line. A higher value results in a thicker border around the chart area.
   * Default value: 1
   */
  borderLineWidth?: number;
  /**
   * Defines the main title displayed at the top of the chart, providing a concise summary or description of the chart's data or purpose.
   * Default value: "Caption"
   */
  caption?: string;
  /**
   * Specifies whether plotted elements that extend beyond the axis boundaries should be visually clipped (hidden) rather than drawn outside the plotting area. When enabled, any portion of the elements that overflows the axis limits will not be displayed.
   * Default value: true
   */
  clip?: boolean;
  /**
   * Defines the color palette used for rendering the chart elements. jqxChart supports 32 built-in color schemes, which can be specified by setting this property to a string value from 'scheme01' to 'scheme32'. Each scheme applies a predefined set of colors to series, data points, and chart backgrounds, allowing you to easily customize the chart's appearance.
   * Default value: scheme01
   */
  colorScheme?: ChartColorScheme | string;
  /**
   * Controls whether the columns in the series are displayed overlapping each other or spaced apart. When enabled, columns from different series will overlap along the category axis. When disabled, columns will be shown side by side without overlapping.
   * Default value: false
   */
  columnSeriesOverlap?: boolean;
  /**
   * Specifies the color of the crosshairs lines displayed on the chart. This property is only effective when the 'enableCrosshairs' option is set to 'true'. Use a valid CSS color value (e.g., hex, RGB, or color name) to customize the appearance of the crosshairs.
   * Default value: null
   */
  crosshairsColor?: string | null;
  /**
   * Specifies the dash pattern for the crosshairs lines by accepting a comma-separated sequence of numbers. Each number represents the length (in pixels) of dashes and gaps, alternating between line segments and spaces. For example, a value of "3,3" will create a dashed line with 3 pixels of line followed by 3 pixels of space, repeating along the length of the crosshair. This property is only effective when the "enableCrosshairs" property is set to true.
   * Default value: "2,2"
   */
  crosshairsDashStyle?: string;
  /**
   * Sets or retrieves the thickness (in pixels) of the crosshair lines displayed on the chart. This property is only effective when 'enableCrosshairs' is set to 'true'; otherwise, the crosshair lines will not be shown regardless of this value.
   * Default value: 1
   */
  crosshairsLineWidth?: number;
  /**
   * Specifies the data set to be used as the source for the chart, determining which values and categories will be displayed. This property should be assigned an array or object containing the chart’s data points.
   * Default value: 
   */
  dataSource?: any[];
  /**
   * Specifies the descriptive text that appears on the chart, providing context or additional information to help users understand the chart’s content and purpose.
   * Default value: "Description"
   */
  description?: string;
  /**
   * Determines whether the chart is visible and interactive. Set to true to display and activate the chart; set to false to deactivate it.
   * Default value: false
   */
  disabled?: boolean;
  /**
   * Specifies the custom drawing function for jqxChart. By setting this property, you can override the default rendering behavior of jqxChart and implement your own drawing logic. This allows you to customize how chart elements are displayed according to your specific requirements.
   * Default value: null
   */
  draw?: any;
  /**
   * Allows you to draw custom graphics on the chart canvas before rendering the caption and all other standard chart elements. Use this function to add background visuals, watermarks, or any additional graphics that should appear beneath the main chart components.
   * Default value: null
   */
  drawBefore?: any;
  /**
   * Specifies whether the animation effect for the axis labels (text displayed along the axes) is enabled or disabled. When set to true, the axis labels will animate during rendering or updates; when set to false, the labels will remain static.
   * Default value: false
   */
  enableAxisTextAnimation?: boolean;
  /**
   * Controls the visibility of crosshair lines on the chart. When enabled, vertical and/or horizontal lines appear as you hover over data points in line and area series, helping to highlight the precise location of your cursor in relation to the data. Disabling this option will hide these crosshair indicators.
   * Default value: false
   */
  enableCrosshairs?: boolean;
  /**
   * Specifies whether the chart should be rendered using greyscale colors instead of the default color palette. When enabled, all chart elements (such as bars, lines, or areas) will appear in shades of grey rather than in color.
   * Default value: false
   */
  greyScale?: boolean;
  /**
   * Specifies the arrangement of items within the legend, such as displaying them in a vertical stack, a horizontal row, or a custom configuration. This property determines how legend entries are organized and presented in the chart.
   * Default value: [object Object]
   */
  legendLayout?: any;
  /**
   * Sets or retrieves the unlockKey, a unique code or token required to unlock and access the full features of the product. Use this property to assign an unlock key for activation or to obtain the current key that allows authorized access.
   * Default value: ""
   */
  unlockKey?: string;
  /**
   * Specifies or retrieves the current locale setting, which determines the language and regional formatting used by the component. This property works together with the messages property to display localized text and content based on the selected locale.
   * Default value: "en"
   */
  locale?: string;
  /**
   * A comprehensive localization object that includes culture-specific properties necessary for accurately formatting currencies, numbers, dates, and other locale-dependent values according to regional conventions.
   * Default value: [object Object]
   */
  localization?: ChartLocalization;
  /**
   * Configures or retrieves an object containing all user-facing text strings displayed by the widget, enabling localization into different languages. This property is used together with the locale option to provide translated text based on the selected language, ensuring the widget’s interface adapts to users’ regional preferences.
   * Default value:    * [object Object]
   */
  messages?: any;
  /**
   * Specifies the amount of padding to apply to the left, top, right, and bottom sides of the Chart, creating space between the chart's content and its outer edges. This padding can be used to adjust the position of the chart elements and prevent them from overlapping with the chart's border or surrounding elements.
   * Default value: [object Object]
   */
  padding?: Padding;
  /**
   * Specifies the rendering engine responsible for displaying the chart. If this property is left as an empty string, jqxChart will automatically detect and select the most suitable rendering engine based on the browser’s capabilities (such as SVG, Canvas, or VML). This ensures optimal performance and compatibility across different browsers.
   * Default value: 
   */
  renderEngine?: ChartRenderEngine | string;
  /**
   * Gets or sets a boolean value that determines whether the chart's layout is displayed in a mirrored (reversed) orientation. When set to true, all chart elements, such as axes and data series, are rendered as a mirror image of the default layout.
   * Default value: false
   */
  rightToLeft?: boolean;
  /**
   * The 'seriesGroups' property defines the configuration for all data series displayed within the chart. jqxChart supports visualizing multiple series, even of different chart types, by organizing them into groups called "series groups." Each series group is an object within the 'seriesGroups' array, and allows you to configure a set of series that will share common settings, such as the chart type, value axis (Y-axis), and appearance options.Importantly, each series group can have its own independently configured value axis (Y-axis). This flexibility enables you to plot data series with different value ranges or units on the same chart, as each group’s Y-axis can be scaled and labeled differently. Additionally, you can mix different visualization types (such as 'line', 'area', or 'column')—for instance, displaying one group as lines while representing another as columns—providing richer and more informative data presentations.In summary, the 'seriesGroups' property is an array where:- Each element is an object defining a series group.- Each group specifies its chart type and contains its own array of series, along with settings for axes, styling, and more.- Multiple series groups enable the chart to display series of different types and with different Y-axis scales simultaneously.This property is essential for building complex and customizable charts that present heterogeneous data in a clear and visually compelling way.
   * Default value: 
   */
  seriesGroups?: ChartSeriesGroup[];
  /**
   * Specifies whether a visible border line should be rendered around the chart area. Set this option to true to display the border, or false to hide it.
   * Default value: true
   */
  showBorderLine?: boolean;
  /**
   * Specifies whether the chart series legend should be displayed or hidden. When set to true, the legend appears on the chart, providing information about each data series. When set to false, the legend is not shown, resulting in a cleaner chart without series labels.
   * Default value: true
   */
  showLegend?: boolean;
  /**
   * Controls the visibility of chart tooltips by enabling or disabling them. When enabled, informational tooltips appear when users hover over or interact with chart elements; when disabled, tooltips are hidden and no additional information is displayed on interaction.
   * Default value: true
   */
  showToolTips?: boolean;
  /**
   * Specifies whether to display a single, combined tooltip that presents information for all data series at the hovered data point, instead of individual tooltips for each series.
   * Default value: false
   */
  showToolTipsOnAllSeries?: boolean;
  /**
   * Specifies the default set of colors to be applied to various chart elements, including the background, lines, text, and bands. These colors will be automatically used for the corresponding components in the chart unless individually overridden, ensuring a consistent visual theme throughout the chart.
   * Default value: "light"
   */
  theme?: string;
  /**
   * Specifies the amount of space (padding) applied around the chart’s title (caption), controlling the distance between the title text and the edges of its container. This affects the overall appearance and readability of the chart title.
   * Default value: [object Object]
   */
  titlePadding?: Padding;
  /**
   * Specifies the background color of the tooltip element, which appears when a user hovers over or focuses on a target component. This setting determines the visual background behind the tooltip text.
   * Default value: null
   */
  toolTipBackground?: string | null;
  /**
   * Callback function that allows users to customize the formatting of tooltip text. This function receives relevant data and returns a formatted string or HTML to be displayed as the tooltip content.
   * Default value: null
   */
  toolTipFormatFunction?: {(value?: any, index?: number, series?: any): string};
  /**
   * Specifies the duration, in milliseconds, to wait before hiding the tooltip after a user interaction (such as mouseleave or blur) occurs. This delay allows the tooltip to remain visible for a short period before disappearing, improving the user experience.
   * Default value: 4000
   */
  toolTipHideDelay?: number;
  /**
   * Specifies the color of the lines (borders or dividers) displayed within the tooltip, such as axis markers or grid lines, enhancing tooltip visibility and aesthetics. Accepts any valid CSS color value (e.g., hexadecimal, RGB, or color name).
   * Default value: null
   */
  toolTipLineColor?: string | null;
  /**
   * Specifies the delay, in milliseconds, before a tooltip appears after a triggering event (such as mouse hover or focus). Acceptable values range from 0 to 10,000 milliseconds (ms), where 0 shows the tooltip immediately and 10,000 sets a maximum delay of 10 seconds.
   * Default value: 300
   */
  toolTipShowDelay?: number;
  /**
   * An object containing configuration settings for the chart's y-axis (also known as the value axis). This includes options for labels, scaling, grid lines, tick marks, axis titles, formatting, and other properties that control the appearance and behavior of the y-axis.
   * Default value: [object Object]
   */
  valueAxis?: ChartValueAxis;
  /**
   * Configures the x-axis properties of the chart, including its scale, labels, formatting, and appearance. This determines how data is displayed horizontally on the chart.
   * Default value: [object Object]
   */
  xAxis?: ChartXAxis;
}
/**
 Chart is a feature-complete interactive graph library that answers the data visualization needs of any modern web app.
*/
export interface Chart extends BaseElement, ChartProperties {

  /* Get a member by its name */
  [name: string]: any;
  /**
   * This event is triggered whenever a user clicks on an annotation element within the chart. It allows developers to respond to user interactions with chart annotations, such as displaying additional information, modifying the annotation, or performing custom actions based on the selected annotation.
	* @param event. The custom event.    */
  onAnnotationClick?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is triggered when the user positions the cursor over a chart annotation, such as a label, marker, or highlighted region, within the chart area. This event can be used to implement interactive features like displaying tooltips, highlighting the annotation, or providing additional contextual information related to the annotation being hovered.
	* @param event. The custom event.    */
  onAnnotationMouseenter?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the user's cursor moves outside the boundaries of a chart annotation. It allows developers to detect when the cursor leaves an annotation area, enabling actions such as hiding tooltips, resetting highlight effects, or performing cleanup tasks related to annotation interactions.
	* @param event. The custom event.    */
  onAnnotationMouseleave?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is triggered when the user clicks on a series element within the chart. This allows developers to respond to user interactions with individual data points, such as displaying details, highlighting the selected element, or performing custom actions based on the clicked series element.
	* @param event. The custom event.    */
  onClick: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered when the user's cursor leaves or exits a specific series element within the chart. It can be used to detect when a user stops hovering over a particular data series, allowing you to perform actions such as hiding tooltips, resetting styles, or updating related interface elements.
	* @param event. The custom event.    */
  onMouseout: ((this: any, ev: Event) => any) | null;
  /**
   * The event is triggered when the user's cursor hovers over a series element, such as a bar, line, or data point, within the chart. This event typically occurs as soon as the cursor enters the boundary of a specific series element, allowing you to respond to user interactions like highlighting the element, displaying tooltips, or updating related UI components.
	* @param event. The custom event.    */
  onMouseover: ((this: any, ev: Event) => any) | null;
  /**
   * This event is triggered after the position of the chart's range selector has changed and the chart has finished rendering. It allows you to perform additional actions or updates in response to user interactions with the range selector, ensuring that any changes occur only after the chart rendering is complete.
	* @param event. The custom event.    */
  onRangeSelectionChanged?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is triggered whenever the position of the chart's range selector is modified, occurring just before the chart begins its rendering process. This allows you to intercept and handle any changes to the range selector position prior to the chart's visual update.
	* @param event. The custom event.    */
  onRangeSelectionChanging?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * The event is triggered when the chart rendering process starts, indicating that the chart is about to be displayed but has not yet completed drawing. This event can be used to execute custom code or display a loading indicator at the beginning of the chart rendering sequence.
	* @param event. The custom event.    */
  onRefreshBegin?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered when the chart has completed rendering all of its visual elements and is fully displayed in the browser. At this point, the chart is ready for user interaction or for further manipulation through scripts.
	* @param event. The custom event.    */
  onRefreshEnd?: ((this: any, ev: Event) => any) | ((this: any, ev: CustomEvent<any>) => any) | null;
  /**
   * This event is triggered whenever a series in the chart is shown or hidden, either by a user clicking on the series label in the chart's legend or programmatically via an API call. The event allows you to respond to visibility changes of chart series, enabling custom behaviors or updates when users interact with the legend or when series visibility is modified through code.
	* @param event. The custom event.    */
  onToggle: ((this: any, ev: Event) => any) | null;
  /**
   * Enhances the application's color scheme functionality by allowing you to add a new color scheme. If a color scheme with the specified name already exists, this method updates its color values instead of creating a duplicate. This ensures seamless management and updating of color schemes within the application.
   * @param {string} schemeName. The name of the custom color scheme.
   * @param {any[]} colorsArray. An array of color values.
   */
  addColorScheme(schemeName: string, colorsArray: any[]): void;
  /**
   * Returns the list of colors associated with the specified color scheme name. If the specified scheme does not exist, the method returns undefined.
   * @param {string} schemeName. The name of the color scheme.
   * @returns {any[]}
   */
  getColorScheme(schemeName: string): any[];
  /**
   * Retrieves the on-screen (pixel) coordinates where a specific data point element is rendered within the visualization. This allows you to determine the exact position of the data point as displayed to the user.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex. Item (data point) index.
   * @returns 
   */
  getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): { x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number };
  /**
   * Retrieves the total count of items that have been rendered within a specified series. This includes only those items currently visible or present in the rendered output for the given series.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @returns {number}
   */
  getItemsCount(groupIndex: number, serieIndex: number): number;
  /**
   * Retrieves the computed coordinates (positions) and corresponding values of the labels displayed along the valueAxis after rendering. This includes the exact pixel positions and the label values as they appear on the axis within the rendered chart, allowing for precise placement and manipulation of these labels in the UI.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getValueAxisLabels(groupIndex: number): any;
  /**
   * Retrieves the pixel coordinates and dimensions (as a rectangle) of the value axis associated with a specified series group after rendering. This includes the axis's position (x, y) and size (width, height) within the chart area, enabling precise alignment, customization, or interaction with the value axis for the targeted series group.
   * @param {number} groupIndex. Series group index.
   * @returns {DOMRect}
   */
  getValueAxisRect(groupIndex: number): DOMRect;
  /**
   * Retrieves the current value of the vertical axis (valueAxis), which represents the data values plotted along the y-axis of the chart.
   * @param {number} offset. Vertical offset.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getValueAxisValue(offset: number, groupIndex: number): any;
  /**
   * Retrieves the calculated screen coordinates and corresponding values for each label displayed on the xAxis after rendering. This includes both the label text/value and its precise position within the rendered chart, enabling advanced positioning or custom interactions with the xAxis labels.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getXAxisLabels(groupIndex: number): any;
  /**
   * Retrieves the rendered bounding rectangle coordinates (position and dimensions) of the x-axis associated with a specified series group. This includes properties such as top, left, width, and height, allowing precise placement and measurement of the x-axis within the chart layout.
   * @param {number} groupIndex. Series group index.
   * @returns {DOMRect}
   */
  getXAxisRect(groupIndex: number): DOMRect;
  /**
   * Retrieves the current value or position of the xAxis (horizontal axis), representing the horizontal coordinate in the relevant context (such as a chart, graph, or UI component). This value typically corresponds to the data point's horizontal placement or the current state of the axis.
   * @param {number} offset. Horizontal offset.
   * @param {number} groupIndex. Series group index.
   * @returns {any}
   */
  getXAxisValue(offset: number, groupIndex: number): any;
  /**
   * Programmatically hides a chart series from view. This function produces the same effect as if the user manually unchecked the corresponding series in the chart's legend, making the series invisible on the chart without deleting its data.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
   */
  hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Hides the currently displayed tooltip, if one is visible, by removing it from view and ensuring it is no longer accessible to the user.
   * @param {number} hideDelay?. Hide delay.
   */
  hideToolTip(hideDelay?: number): void;
  /**
   * Generates a printer-friendly version of the current chart and sends it to the print dialog, allowing the user to print a physical copy or save it as a PDF.
   */
  print(): void;
  /**
   * Automatically updates and redraws the chart element to reflect the latest changes made to its properties or data, ensuring the displayed information is current and accurate.
   */
  refresh(): void;
  /**
   * Removes a specified color scheme from the system. If the color scheme with the given identifier does not exist, this method performs no action and does not produce an error.
   * @param {string} schemeName. The name of the custom color scheme.
   */
  removeColorScheme(schemeName: string): void;
  /**
   * Exports the current chart as a JPEG image file, capturing all visible chart elements and data in the image for easy sharing or saving.
   * @param {string} fileName?. File name.
   */
  saveAsJPEG(fileName?: string): void;
  /**
   * Exports the current chart, including all visual elements and data, as a PNG image file. This allows users to save or download a snapshot of the chart in a widely supported image format for sharing, reporting, or offline use.
   * @param {string} fileName?. File name.
   */
  saveAsPNG(fileName?: string): void;
  /**
   * Generates and exports the current chart content as a PDF file, preserving the chart’s layout, styles, and data for easy sharing or printing.
   * @param {string} fileName?. File name.
   * @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
   */
  saveAsPDF(fileName?: string, pageOrientation?: string): void;
  /**
   * Reveals a previously hidden chart series, making it visible on the chart. Calling this function programmatically has the same effect as a user manually selecting (checking) the corresponding legend item to display the series.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
   */
  showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
  /**
   * Displays a tooltip containing detailed information for a specific data point, typically when the user hovers over or selects that point on a chart or graph.
   * @param {number} groupIndex. Series group index.
   * @param {number} serieIndex. Series index.
   * @param {number} itemIndex. Item (data point) index.
   * @param {number} showDelay?. Show delay.
   * @param {number} hideDelay?. Hide delay.
   */
  showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void;
  /**
   * Efficiently updates the values of the chart series in real-time without requiring a complete chart re-render. This method is ideal for animating and reflecting rapidly changing data, ensuring smooth visual transitions and better performance during frequent updates.
   */
  update(): void;
}

/**A comprehensive localization object that includes culture-specific properties necessary for accurately formatting currencies, numbers, dates, and other locale-dependent values according to regional conventions. */
export interface ChartLocalization {
  /**
   * A character used as a decimal separator to clearly distinguish the integer part from the fractional part of a numerical value, such as a period (“.”) in 3.14 or a comma (“,”) in 3,14, depending on locale.
   * Default value: "."
   */
  decimalSeparator?: string;
  /**
   * An object that defines various datetime formatting patterns, where each key represents a specific format type (e.g., ISO, short date, long date, time), and each value is the corresponding string pattern used to format or parse datetime values. These patterns can be utilized for consistent date and time representation throughout an application.
   * Default value: null
   */
  patterns?: any;
  /**
   * A symbol that serves as a separator to group digits in large numbers, distinguishing thousands, millions, billions, and higher orders of magnitude for improved readability (e.g., the comma in "1,000,000" or the space in "1 000 000").
   * Default value: ""
   */
  thousandsSeparator?: string;
}

/**Specifies the amount of padding to apply to the left, top, right, and bottom sides of the Chart, creating space between the chart's content and its outer edges. This padding can be used to adjust the position of the chart elements and prevent them from overlapping with the chart's border or surrounding elements. */
export interface Padding {
  /**
   * Specifies the amount of space (padding) added to the bottom edge of the chart, creating distance between the chart content and the lower boundary of the chart area. Adjusting this value can help prevent labels, data points, or other chart elements from overlapping with the bottom of the chart.
   * Default value: 5
   */
  bottom?: number;
  /**
   * Specifies the amount of space, in pixels, between the left edge of the chart and its content. This padding can help prevent chart elements from being cut off or overlapping with the chart's border.
   * Default value: 5
   */
  left?: number;
  /**
   * Specifies the amount of space added to the right side of the chart area, creating padding between the chart content and the chart’s right edge. This helps control the layout and prevents elements from being clipped or overlapping with the chart boundary.
   * Default value: 5
   */
  right?: number;
  /**
   * Specifies the amount of space (in pixels) added to the top of the chart, creating padding between the chart’s upper edge and its content or border. This helps control the visual separation and overall layout of the chart within its container.
   * Default value: 5
   */
  top?: number;
}

export interface ChartSeriesGroup {
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
  columnsMaxWidth?: number | null;
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
  linesUnselectMode?: ChartUnselectMode | string;
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
  orientation?: Orientation | string;
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
   * Default value: column
   */
  type?: ChartType | string;
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
  type?: ChartAnnotationType | string;
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
  horizontalAlignment?: HorizontalAlignment | string;
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
  rotationPoint?: ChartRotationPoint | string;
  /**
   * Text of the annotation.
   * Default value: null
   */
  value?: string | null;
  /**
   * Vertical text alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment | string;
}

export interface ChartBand {
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
  /**
   * Offset from the center point in a pie/donut series.
   * Default value: 0
   */
  centerOffset?: number;
  /**
   * A custom function that returns the color of a data point. The function will receive the following parameters: dataValue, itemIndex, serie, group. The implementation of the function can return a single color which will be used as a fillColor and the other colors will be derived or it can return an object containing fillColor, fillColorSelected, etc.
   * Default value: null
   */
  colorFunction?: any;
  /**
   * Color palette to use when rendering the serie.
   * Default value: scheme01
   */
  colorScheme?: ChartColorScheme | string;
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
  emptyPointsDisplay?: ChartSeriesGroupSerieEmptyPointsDisplay | string;
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
   * Default value: false
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
  innerRadius?: number;
  /**
   * Object describing the labels properties of the axis.
   * Default value: undefined
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
  linesUnselectMode?: ChartUnselectMode | string;
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
  symbolType?: ChartSymbolType | string;
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
  horizontalAlignment?: HorizontalAlignment | string;
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
  rotationPoint?: ChartRotationPoint | string;
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
  verticalAlignment?: VerticalAlignment | string;
  /**
   * Possible values: true, false, 'custom'.Determines the visibility of labels. When 'custom' is set, displays only custom values/offsets from the labels.custom array.
   * Default value: true
   */
  visible?: boolean | string;
}

/**Object describing the valueAxis for this group. jqxChart allows you to use a common valueAxis and/or multiple value axes per serie group. */
export interface ChartValueAxis {
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
  axisSize?: number | string | null;
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
  position?: AxisPosition | string;
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
  textRotationPoint?: ChartRotationPoint | string;
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
   * Color of tick marks.
   * Default value: ""
   */
  tickMarksColor?: string;
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
  visible?: boolean | string;
}

/**Object describing the line properties of the axis. */
export interface ChartLine {
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
  visible?: boolean;
}

/**Object describing the title of the valueAxis. */
export interface ChartTitle {
  /**
   * CSS class of the title text.
   * Default value: null
   */
  class?: string | null;
  /**
   * Horizontal alignment.
   * Default value: center
   */
  horizontalAlignment?: HorizontalAlignment | string;
  /**
   * Text of the title.
   * Default value: ""
   */
  text?: string;
  /**
   * Vertical alignment.
   * Default value: center
   */
  verticalAlignment?: VerticalAlignment | string;
  /**
   * boolean determining the visibility of the title.
   * Default value: true
   */
  visible?: boolean;
}

/**Object describing the xAxis for this group. */
export interface ChartXAxis {
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
  axisSize?: number | string | null;
  /**
   * Optional color bands dislayed in the chart's plot area.
   * Default value: null
   */
  bands?: ChartBand[];
  /**
   * The base unit when used with 'date' axis.
   * Default value: null
   */
  baseUnit?: ChartBaseUnit | null | string;
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
  position?: AxisPosition | string;
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
  textRotationPoint?: ChartRotationPoint | string;
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
  type?: ChartXAxisType | string;
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
  baseUnit?: ChartBaseUnit | null | string;
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
   * Default value: scheme01
   */
  colorScheme?: ChartColorScheme | string;
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
   * Default value: false
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
   * Default value: left
   */
  position?: AxisPosition | string;
  /**
   * An HTML element outside the chart to render the range selector chart to.
   * Default value: null
   */
  renderTo?: HTMLElement | null;
  /**
   * Sets or gets a value indicating whether the range selector chart's layout is mirrored.
   * Default value: false
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
  serieType?: ChartType | string;
  /**
   * Determines whether to display the range selector chart's border line.
   * Default value: false
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
/**Specifies the rendering engine responsible for displaying the chart. If this property is left as an empty string, jqxChart will automatically detect and select the most suitable rendering engine based on the browser’s capabilities (such as SVG, Canvas, or VML). This ensures optimal performance and compatibility across different browsers. */
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
export declare type ChartBaseUnit = null | 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';
/**The type of the axis. 'auto' - automatically detects and switches to 'basic', 'linear' or 'date'.
'date' - when displaying dates.
'basic' - displays all data points sequentially.
'linear' - linear arrangement by the value of the xAxis data field.
 */
export declare type ChartXAxisType = 'auto' | 'date' | 'basic' | 'linear';
