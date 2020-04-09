import { Chart } from './../index';
import { Animation, ChartColorScheme, ChartRenderEngine, HorizontalAlignment, ChartRotationPoint, VerticalAlignment, ChartAnnotationType, ChartUnselectMode, Orientation, ChartSeriesGroupSerieEmptyPointsDisplay, ChartSymbolType, ChartType, AxisPosition, ChartBaseUnit, ChartXAxisType, ChartTheme, ChartLocalization, Padding, ChartLegendPosition, ChartSeriesGroup, ChartAnnotation, Offset, ChartAnnotationText, ChartBand, ChartFormatSettings, ChartSeriesGroupSerie, ChartLabels, ChartValueAxis, ChartLines, ChartLine, ChartTitle, ChartXAxis, ChartRangeSelector, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, ChartColorScheme, ChartRenderEngine, HorizontalAlignment, ChartRotationPoint, VerticalAlignment, ChartAnnotationType, ChartUnselectMode, Orientation, ChartSeriesGroupSerieEmptyPointsDisplay, ChartSymbolType, ChartType, AxisPosition, ChartBaseUnit, ChartXAxisType, ChartTheme, ChartLocalization, Padding, ChartLegendPosition, ChartSeriesGroup, ChartAnnotation, Offset, ChartAnnotationText, ChartBand, ChartFormatSettings, ChartSeriesGroupSerie, ChartLabels, ChartValueAxis, ChartLines, ChartLine, ChartTitle, ChartXAxis, ChartRangeSelector, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Chart } from './../index';


@Directive({
	selector: 'smart-chart, [smart-chart]'
})

export class ChartComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Chart>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Chart;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Chart;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Chart>document.createElement('smart-chart');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none'. */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value. */
	@Input()
	get animationDuration(): number {
		return this.nativeElement ? this.nativeElement.animationDuration : undefined;
	}
	set animationDuration(value: number) {
		this.nativeElement ? this.nativeElement.animationDuration = value : undefined;
	}

	/** @description Sets the chart's background color. */
	@Input()
	get backgroundColor(): string | null {
		return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
	}
	set backgroundColor(value: string | null) {
		this.nativeElement ? this.nativeElement.backgroundColor = value : undefined;
	}

	/** @description Sets the chart's background image. */
	@Input()
	get backgroundImage(): string {
		return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
	}
	set backgroundImage(value: string) {
		this.nativeElement ? this.nativeElement.backgroundImage = value : undefined;
	}

	/** @description Sets the chart's border color. */
	@Input()
	get borderLineColor(): string | null {
		return this.nativeElement ? this.nativeElement.borderLineColor : undefined;
	}
	set borderLineColor(value: string | null) {
		this.nativeElement ? this.nativeElement.borderLineColor = value : undefined;
	}

	/** @description Sets the chart's border line width. */
	@Input()
	get borderLineWidth(): number {
		return this.nativeElement ? this.nativeElement.borderLineWidth : undefined;
	}
	set borderLineWidth(value: number) {
		this.nativeElement ? this.nativeElement.borderLineWidth = value : undefined;
	}

	/** @description Sets the caption (title) of the chart. */
	@Input()
	get caption(): string {
		return this.nativeElement ? this.nativeElement.caption : undefined;
	}
	set caption(value: string) {
		this.nativeElement ? this.nativeElement.caption = value : undefined;
	}

	/** @description Determines whether to clip plotted elements that overflow the axis boundaries. */
	@Input()
	get clip(): boolean {
		return this.nativeElement ? this.nativeElement.clip : undefined;
	}
	set clip(value: boolean) {
		this.nativeElement ? this.nativeElement.clip = value : undefined;
	}

	/** @description Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'. */
	@Input()
	get colorScheme(): ChartColorScheme {
		return this.nativeElement ? this.nativeElement.colorScheme : undefined;
	}
	set colorScheme(value: ChartColorScheme) {
		this.nativeElement ? this.nativeElement.colorScheme = value : undefined;
	}

	/** @description Enables or disables overlapping of the column series. */
	@Input()
	get columnSeriesOverlap(): boolean {
		return this.nativeElement ? this.nativeElement.columnSeriesOverlap : undefined;
	}
	set columnSeriesOverlap(value: boolean) {
		this.nativeElement ? this.nativeElement.columnSeriesOverlap = value : undefined;
	}

	/** @description Gets or sets the color of the crosshairs lines. */
	@Input()
	get crosshairsColor(): string | null {
		return this.nativeElement ? this.nativeElement.crosshairsColor : undefined;
	}
	set crosshairsColor(value: string | null) {
		this.nativeElement ? this.nativeElement.crosshairsColor = value : undefined;
	}

	/** @description Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length. */
	@Input()
	get crosshairsDashStyle(): string {
		return this.nativeElement ? this.nativeElement.crosshairsDashStyle : undefined;
	}
	set crosshairsDashStyle(value: string) {
		this.nativeElement ? this.nativeElement.crosshairsDashStyle = value : undefined;
	}

	/** @description Gets or sets the width of the crosshairs lines. */
	@Input()
	get crosshairsLineWidth(): number {
		return this.nativeElement ? this.nativeElement.crosshairsLineWidth : undefined;
	}
	set crosshairsLineWidth(value: number) {
		this.nativeElement ? this.nativeElement.crosshairsLineWidth = value : undefined;
	}

	/** @description Sets the chart's data source. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Sets the description text of the chart. */
	@Input()
	get description(): string {
		return this.nativeElement ? this.nativeElement.description : undefined;
	}
	set description(value: string) {
		this.nativeElement ? this.nativeElement.description = value : undefined;
	}

	/** @description Enables or disables the chart. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing. */
	@Input()
	get draw(): any {
		return this.nativeElement ? this.nativeElement.draw : undefined;
	}
	set draw(value: any) {
		this.nativeElement ? this.nativeElement.draw = value : undefined;
	}

	/** @description Function for custom drawing before the caption and other chart elements. */
	@Input()
	get drawBefore(): any {
		return this.nativeElement ? this.nativeElement.drawBefore : undefined;
	}
	set drawBefore(value: any) {
		this.nativeElement ? this.nativeElement.drawBefore = value : undefined;
	}

	/** @description Determines if the animation of the axes text is enabled. */
	@Input()
	get enableAxisTextAnimation(): boolean {
		return this.nativeElement ? this.nativeElement.enableAxisTextAnimation : undefined;
	}
	set enableAxisTextAnimation(value: boolean) {
		this.nativeElement ? this.nativeElement.enableAxisTextAnimation = value : undefined;
	}

	/** @description Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point. */
	@Input()
	get enableCrosshairs(): boolean {
		return this.nativeElement ? this.nativeElement.enableCrosshairs : undefined;
	}
	set enableCrosshairs(value: boolean) {
		this.nativeElement ? this.nativeElement.enableCrosshairs = value : undefined;
	}

	/** @description Determines whether to display the chart using greyscale colors. */
	@Input()
	get greyScale(): boolean {
		return this.nativeElement ? this.nativeElement.greyScale : undefined;
	}
	set greyScale(value: boolean) {
		this.nativeElement ? this.nativeElement.greyScale = value : undefined;
	}

	/** @description Sets the legend's layout. */
	@Input()
	get legendLayout(): any {
		return this.nativeElement ? this.nativeElement.legendLayout : undefined;
	}
	set legendLayout(value: any) {
		this.nativeElement ? this.nativeElement.legendLayout = value : undefined;
	}

	/** @description Sets or gets the locale. Used in conjunction with the property messages. */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Localization object containing culture-specific properties required for formatting currencies, numbers and dates. */
	@Input()
	get localization(): ChartLocalization {
		return this.nativeElement ? this.nativeElement.localization : undefined;
	}
	set localization(value: ChartLocalization) {
		this.nativeElement ? this.nativeElement.localization = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Sets the left, top, right and bottom padding of the Chart. */
	@Input()
	get padding(): Padding {
		return this.nativeElement ? this.nativeElement.padding : undefined;
	}
	set padding(value: Padding) {
		this.nativeElement ? this.nativeElement.padding = value : undefined;
	}

	/** @description Sets the legend bar position in the Chart. */
	@Input()
	get legendPosition(): ChartLegendPosition {
		return this.nativeElement ? this.nativeElement.legendPosition : undefined;
	}
	set legendPosition(value: ChartLegendPosition) {
		this.nativeElement ? this.nativeElement.legendPosition = value : undefined;
	}

	/** @description Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities. */
	@Input()
	get renderEngine(): ChartRenderEngine {
		return this.nativeElement ? this.nativeElement.renderEngine : undefined;
	}
	set renderEngine(value: ChartRenderEngine) {
		this.nativeElement ? this.nativeElement.renderEngine = value : undefined;
	}

	/** @description Sets or gets a value indicating whether the Chart's layout is mirrored. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group. */
	@Input()
	get seriesGroups(): ChartSeriesGroup[] {
		return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
	}
	set seriesGroups(value: ChartSeriesGroup[]) {
		this.nativeElement ? this.nativeElement.seriesGroups = value : undefined;
	}

	/** @description Determines whether to display the chart's border line. */
	@Input()
	get showBorderLine(): boolean {
		return this.nativeElement ? this.nativeElement.showBorderLine : undefined;
	}
	set showBorderLine(value: boolean) {
		this.nativeElement ? this.nativeElement.showBorderLine = value : undefined;
	}

	/** @description Determines whether to show or hide the chart series legend. */
	@Input()
	get showLegend(): boolean {
		return this.nativeElement ? this.nativeElement.showLegend : undefined;
	}
	set showLegend(value: boolean) {
		this.nativeElement ? this.nativeElement.showLegend = value : undefined;
	}

	/** @description Enables or disables the chart tooltips. */
	@Input()
	get showToolTips(): boolean {
		return this.nativeElement ? this.nativeElement.showToolTips : undefined;
	}
	set showToolTips(value: boolean) {
		this.nativeElement ? this.nativeElement.showToolTips = value : undefined;
	}

	/** @description Determines whether to show a composite tooltip containing information for all series. */
	@Input()
	get showToolTipsOnAllSeries(): boolean {
		return this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries : undefined;
	}
	set showToolTipsOnAllSeries(value: boolean) {
		this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries = value : undefined;
	}

	/** @description Determines the set of default background, line, text and band colors that will be used in the Chart. */
	@Input()
	get theme(): ChartTheme {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: ChartTheme) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets the padding of the chart's title (caption). */
	@Input()
	get titlePadding(): Padding {
		return this.nativeElement ? this.nativeElement.titlePadding : undefined;
	}
	set titlePadding(value: Padding) {
		this.nativeElement ? this.nativeElement.titlePadding = value : undefined;
	}

	/** @description Tooltip background color. */
	@Input()
	get toolTipBackground(): string | null {
		return this.nativeElement ? this.nativeElement.toolTipBackground : undefined;
	}
	set toolTipBackground(value: string | null) {
		this.nativeElement ? this.nativeElement.toolTipBackground = value : undefined;
	}

	/** @description Determines the tooltip hide delay in milliseconds. */
	@Input()
	get toolTipFormatFunction(): {(value?: any, index?: number, series?: any): string} {
		return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
	}
	set toolTipFormatFunction(value: {(value?: any, index?: number, series?: any): string}) {
		this.nativeElement ? this.nativeElement.toolTipFormatFunction = value : undefined;
	}

	/** @description Tooltip line color. */
	@Input()
	get toolTipHideDelay(): number {
		return this.nativeElement ? this.nativeElement.toolTipHideDelay : undefined;
	}
	set toolTipHideDelay(value: number) {
		this.nativeElement ? this.nativeElement.toolTipHideDelay = value : undefined;
	}

	/** @description Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms]. */
	@Input()
	get toolTipLineColor(): string | null {
		return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
	}
	set toolTipLineColor(value: string | null) {
		this.nativeElement ? this.nativeElement.toolTipLineColor = value : undefined;
	}

	/** @description An object with settings about the Chart's y-axis (value axis). */
	@Input()
	get toolTipShowDelay(): number {
		return this.nativeElement ? this.nativeElement.toolTipShowDelay : undefined;
	}
	set toolTipShowDelay(value: number) {
		this.nativeElement ? this.nativeElement.toolTipShowDelay = value : undefined;
	}

	/** @description Sets the Chart's xAxis. */
	@Input()
	get valueAxis(): ChartValueAxis {
		return this.nativeElement ? this.nativeElement.valueAxis : undefined;
	}
	set valueAxis(value: ChartValueAxis) {
		this.nativeElement ? this.nativeElement.valueAxis = value : undefined;
	}

	/** @description undefined */
	@Input()
	get xAxis(): ChartXAxis {
		return this.nativeElement ? this.nativeElement.xAxis : undefined;
	}
	set xAxis(value: ChartXAxis) {
		this.nativeElement ? this.nativeElement.xAxis = value : undefined;
	}

	/** @description The event is raised when the user clicks on a chart annotation.
	*  @param event. The custom event. 	*/
	@Output() onAnnotationClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the user moves the cursor above a chart annotation.
	*  @param event. The custom event. 	*/
	@Output() onAnnotationMouseenter: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the user moves the cursor out of a chart annotation.
	*  @param event. The custom event. 	*/
	@Output() onAnnotationMouseleave: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the user clicks on series element.
	*  @param event. The custom event. 	*/
	@Output() onClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the user moves the cursor out of a series element.
	*  @param event. The custom event. 	*/
	@Output() onMouseout: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the user moves the cursor above a series element.
	*  @param event. The custom event. 	*/
	@Output() onMouseover: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised after the chart's range selector position changes and after the chart ends rendering.
	*  @param event. The custom event. 	*/
	@Output() onRangeSelectionChanged: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the chart's range selector position changes and before the chart starts rendering.
	*  @param event. The custom event. 	*/
	@Output() onRangeSelectionChanging: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the chart begins rendering.
	*  @param event. The custom event. 	*/
	@Output() onRefreshBegin: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when the chart finishes rendering.
	*  @param event. The custom event. 	*/
	@Output() onRefreshEnd: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
	*  @param event. The custom event. 	*/
	@Output() onToggle: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors. 
	* @param {string} schemeName. The name of the custom color scheme.
	* @param {any[]} colorsArray. An array of color values.
	*/
    public addColorScheme(schemeName: string, colorsArray: any[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addColorScheme(schemeName, colorsArray);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addColorScheme(schemeName, colorsArray);
            });
        }
    }

	/** @description Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined. 
	* @param {string} schemeName. The name of the color scheme.
	* @returns {any[]}
  */
	public async getColorScheme(schemeName): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getColorScheme(schemeName);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the rendered coordinates of a data point element. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @param {number} itemIndex. Item (data point) index.
	* @returns {{ x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number }}
  */
	public async getItemCoord(groupIndex, serieIndex, itemIndex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItemCoord(groupIndex, serieIndex, itemIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the number of rendered items in a specific serie. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @returns {number}
  */
	public async getItemsCount(groupIndex, serieIndex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getItemsCount(groupIndex, serieIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the rendered coordinates and values of the valueAxis labels. 
	* @param {number} groupIndex. Series group index.
	* @returns {any}
  */
	public async getValueAxisLabels(groupIndex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getValueAxisLabels(groupIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the rendered rectangle coordinates of the valueAxis of specific serie group. 
	* @param {number} groupIndex. Series group index.
	* @returns {DOMRect}
  */
	public async getValueAxisRect(groupIndex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getValueAxisRect(groupIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the valueAxis (vertical axis)'s value. 
	* @param {number} offset. Vertical offset.
	* @param {number} groupIndex. Series group index.
	* @returns {any}
  */
	public async getValueAxisValue(offset, groupIndex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getValueAxisValue(offset, groupIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the rendered coordinates and values of the xAxis labels. 
	* @param {number} groupIndex. Series group index.
	* @returns {any}
  */
	public async getXAxisLabels(groupIndex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getXAxisLabels(groupIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the rendered rectangle coordinates of the x-Axis of specific serie group. 
	* @param {number} groupIndex. Series group index.
	* @returns {DOMRect}
  */
	public async getXAxisRect(groupIndex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getXAxisRect(groupIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Gets the xAxis (horizontal axis)'s value. 
	* @param {number} offset. Horizontal offset.
	* @param {number} groupIndex. Series group index.
	* @returns {any}
  */
	public async getXAxisValue(offset, groupIndex): Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getXAxisValue(offset, groupIndex);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** @description Hides a chart serie. The result of calling this function is same as the user unchecking the legend box of a chart serie. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
	*/
    public hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideSerie(groupIndex, serieIndex, itemIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideSerie(groupIndex, serieIndex, itemIndex);
            });
        }
    }

	/** @description Hides the current tooltip if visible. 
	* @param {number} hideDelay?. Hide delay.
	*/
    public hideToolTip(hideDelay?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideToolTip(hideDelay);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideToolTip(hideDelay);
            });
        }
    }

	/** @description Prints the chart. 
	*/
    public print(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.print();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.print();
            });
        }
    }

	/** @description Refreshes the content of the chart element after a property or data update. 
	*/
    public refresh(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refresh();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refresh();
            });
        }
    }

	/** @description Removes an existing color scheme. If the scheme does not exist, the method has no effect. 
	* @param {string} schemeName. The name of the custom color scheme.
	*/
    public removeColorScheme(schemeName: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeColorScheme(schemeName);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeColorScheme(schemeName);
            });
        }
    }

	/** @description Exports the chart's content as JPEG image. 
	* @param {string} fileName?. File name.
	*/
    public saveAsJPEG(fileName?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsJPEG(fileName);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsJPEG(fileName);
            });
        }
    }

	/** @description Exports the chart's content as PNG image. 
	* @param {string} fileName?. File name.
	*/
    public saveAsPNG(fileName?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPNG(fileName);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPNG(fileName);
            });
        }
    }

	/** @description Exports the chart's content as PDF. 
	* @param {string} fileName?. File name.
	* @param {string} pageOrientation?. PDF page orientation. <strong>Possible values:</strong> 'portrait' (default), 'landscape'.
	*/
    public saveAsPDF(fileName?: string, pageOrientation?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveAsPDF(fileName, pageOrientation);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveAsPDF(fileName, pageOrientation);
            });
        }
    }

	/** @description Shows a hidden chart serie. The result of calling this function is same as the user checking the legend box of a chart serie. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @param {number} itemIndex?. Item (data point) index. Applicable to pie and donut series only.
	*/
    public showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showSerie(groupIndex, serieIndex, itemIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showSerie(groupIndex, serieIndex, itemIndex);
            });
        }
    }

	/** @description Shows a the tooltip for a particular data point. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @param {number} itemIndex. Item (data point) index.
	* @param {number} showDelay?. Show delay.
	* @param {number} hideDelay?. Hide delay.
	*/
    public showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay);
            });
        }
    }

	/** @description Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values. 
	*/
    public update(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.update();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.update();
            });
        }
    }


	get isRendered(): boolean {
		return this.nativeElement ? this.nativeElement.isRendered : false;
	}    
	
	ngOnInit() {
	}
	
    ngAfterViewInit() {
      const that = this;

      that.onCreate.emit(that.nativeElement);

		Smart.Render();

		this.nativeElement.whenRendered(() => { that.onReady.emit(that.nativeElement); });
		this.listen();
	}
	
	ngOnDestroy() {
		this.unlisten();
	}

	ngOnChanges(changes: SimpleChanges) {
		if (this.nativeElement && this.nativeElement.isRendered) {
			for (const propName in changes) {
				if (changes.hasOwnProperty(propName)) {
					this.nativeElement[propName] = changes[propName].currentValue;
				}
			}
		}
	}

	/** @description Add event listeners. */
	private listen(): void {
        const that = this;
		that.eventHandlers['annotationClickHandler'] = (event: CustomEvent) => { that.onAnnotationClick.emit(event); }
		that.nativeElement.addEventListener('annotationClick', that.eventHandlers['annotationClickHandler']);

		that.eventHandlers['annotationMouseenterHandler'] = (event: CustomEvent) => { that.onAnnotationMouseenter.emit(event); }
		that.nativeElement.addEventListener('annotationMouseenter', that.eventHandlers['annotationMouseenterHandler']);

		that.eventHandlers['annotationMouseleaveHandler'] = (event: CustomEvent) => { that.onAnnotationMouseleave.emit(event); }
		that.nativeElement.addEventListener('annotationMouseleave', that.eventHandlers['annotationMouseleaveHandler']);

		that.eventHandlers['clickHandler'] = (event: CustomEvent) => { that.onClick.emit(event); }
		that.nativeElement.addEventListener('click', that.eventHandlers['clickHandler']);

		that.eventHandlers['mouseoutHandler'] = (event: CustomEvent) => { that.onMouseout.emit(event); }
		that.nativeElement.addEventListener('mouseout', that.eventHandlers['mouseoutHandler']);

		that.eventHandlers['mouseoverHandler'] = (event: CustomEvent) => { that.onMouseover.emit(event); }
		that.nativeElement.addEventListener('mouseover', that.eventHandlers['mouseoverHandler']);

		that.eventHandlers['rangeSelectionChangedHandler'] = (event: CustomEvent) => { that.onRangeSelectionChanged.emit(event); }
		that.nativeElement.addEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);

		that.eventHandlers['rangeSelectionChangingHandler'] = (event: CustomEvent) => { that.onRangeSelectionChanging.emit(event); }
		that.nativeElement.addEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);

		that.eventHandlers['refreshBeginHandler'] = (event: CustomEvent) => { that.onRefreshBegin.emit(event); }
		that.nativeElement.addEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);

		that.eventHandlers['refreshEndHandler'] = (event: CustomEvent) => { that.onRefreshEnd.emit(event); }
		that.nativeElement.addEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);

		that.eventHandlers['toggleHandler'] = (event: CustomEvent) => { that.onToggle.emit(event); }
		that.nativeElement.addEventListener('toggle', that.eventHandlers['toggleHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['annotationClickHandler']) {
			that.nativeElement.removeEventListener('annotationClick', that.eventHandlers['annotationClickHandler']);
		}

		if (that.eventHandlers['annotationMouseenterHandler']) {
			that.nativeElement.removeEventListener('annotationMouseenter', that.eventHandlers['annotationMouseenterHandler']);
		}

		if (that.eventHandlers['annotationMouseleaveHandler']) {
			that.nativeElement.removeEventListener('annotationMouseleave', that.eventHandlers['annotationMouseleaveHandler']);
		}

		if (that.eventHandlers['clickHandler']) {
			that.nativeElement.removeEventListener('click', that.eventHandlers['clickHandler']);
		}

		if (that.eventHandlers['mouseoutHandler']) {
			that.nativeElement.removeEventListener('mouseout', that.eventHandlers['mouseoutHandler']);
		}

		if (that.eventHandlers['mouseoverHandler']) {
			that.nativeElement.removeEventListener('mouseover', that.eventHandlers['mouseoverHandler']);
		}

		if (that.eventHandlers['rangeSelectionChangedHandler']) {
			that.nativeElement.removeEventListener('rangeSelectionChanged', that.eventHandlers['rangeSelectionChangedHandler']);
		}

		if (that.eventHandlers['rangeSelectionChangingHandler']) {
			that.nativeElement.removeEventListener('rangeSelectionChanging', that.eventHandlers['rangeSelectionChangingHandler']);
		}

		if (that.eventHandlers['refreshBeginHandler']) {
			that.nativeElement.removeEventListener('refreshBegin', that.eventHandlers['refreshBeginHandler']);
		}

		if (that.eventHandlers['refreshEndHandler']) {
			that.nativeElement.removeEventListener('refreshEnd', that.eventHandlers['refreshEndHandler']);
		}

		if (that.eventHandlers['toggleHandler']) {
			that.nativeElement.removeEventListener('toggle', that.eventHandlers['toggleHandler']);
		}

	}
}
