import React from "react";
import { ChartProperties } from "./../../index";
import { Animation, ChartColorScheme, ChartRenderEngine, HorizontalAlignment, ChartRotationPoint, VerticalAlignment, ChartAnnotationType, ChartUnselectMode, Orientation, ChartSeriesGroupSerieEmptyPointsDisplay, ChartSymbolType, ChartType, AxisPosition, ChartBaseUnit, ChartXAxisType, ChartLocalization, Padding, ChartSeriesGroup, ChartAnnotation, Offset, ChartAnnotationText, ChartBand, ChartFormatSettings, ChartSeriesGroupSerie, ChartLabels, ChartValueAxis, ChartLines, ChartLine, ChartTitle, ChartXAxis, ChartRangeSelector} from './../../index';
export { ChartProperties } from "./../../index";
export { Animation, ChartColorScheme, ChartRenderEngine, HorizontalAlignment, ChartRotationPoint, VerticalAlignment, ChartAnnotationType, ChartUnselectMode, Orientation, ChartSeriesGroupSerieEmptyPointsDisplay, ChartSymbolType, ChartType, AxisPosition, ChartBaseUnit, ChartXAxisType, ChartLocalization, Padding, ChartSeriesGroup, ChartAnnotation, Offset, ChartAnnotationText, ChartBand, ChartFormatSettings, ChartSeriesGroupSerie, ChartLabels, ChartValueAxis, ChartLines, ChartLine, ChartTitle, ChartXAxis, ChartRangeSelector} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface ChartProps extends ChartProperties {
    className?: string;
    style?: React.CSSProperties;

	onAnnotationClick?: ((event?: Event) => void) | undefined;
	onAnnotationMouseenter?: ((event?: Event) => void) | undefined;
	onAnnotationMouseleave?: ((event?: Event) => void) | undefined;
	onClick?: ((event?: Event) => void) | undefined;
	onMouseout?: ((event?: Event) => void) | undefined;
	onMouseover?: ((event?: Event) => void) | undefined;
	onRangeSelectionChanged?: ((event?: Event) => void) | undefined;
	onRangeSelectionChanging?: ((event?: Event) => void) | undefined;
	onRefreshBegin?: ((event?: Event) => void) | undefined;
	onRefreshEnd?: ((event?: Event) => void) | undefined;
	onToggle?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Chart is a feature-complete interactive graph library that answers the data visualization needs of any modern web app.
*/
export class Chart extends React.Component<React.HTMLAttributes<Element> & ChartProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Chart' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'.
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

	/** Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value.
	*	Property type: number
	*/
	get animationDuration(): number  {
		return this.nativeElement ? this.nativeElement.animationDuration : undefined;
	}
	set animationDuration(value: number) {
		if (this.nativeElement) {
			this.nativeElement.animationDuration = value;
		}
	}

	/** Sets the chart's background color. For example: '#DDFFE8'
	*	Property type: string | null
	*/
	get backgroundColor(): string | null  {
		return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
	}
	set backgroundColor(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.backgroundColor = value;
		}
	}

	/** Sets the chart's background image. For example: 'https://www.htmlelements.com/demos/images/carousel-large-1.jpg'
	*	Property type: string
	*/
	get backgroundImage(): string  {
		return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
	}
	set backgroundImage(value: string) {
		if (this.nativeElement) {
			this.nativeElement.backgroundImage = value;
		}
	}

	/** Sets the chart's border color. For example: '#098700'
	*	Property type: string | null
	*/
	get borderLineColor(): string | null  {
		return this.nativeElement ? this.nativeElement.borderLineColor : undefined;
	}
	set borderLineColor(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.borderLineColor = value;
		}
	}

	/** Sets the chart's border line width.
	*	Property type: number
	*/
	get borderLineWidth(): number  {
		return this.nativeElement ? this.nativeElement.borderLineWidth : undefined;
	}
	set borderLineWidth(value: number) {
		if (this.nativeElement) {
			this.nativeElement.borderLineWidth = value;
		}
	}

	/** Sets the caption (title) of the chart.
	*	Property type: string
	*/
	get caption(): string  {
		return this.nativeElement ? this.nativeElement.caption : undefined;
	}
	set caption(value: string) {
		if (this.nativeElement) {
			this.nativeElement.caption = value;
		}
	}

	/** Determines whether to clip plotted elements that overflow the axis boundaries.
	*	Property type: boolean
	*/
	get clip(): boolean  {
		return this.nativeElement ? this.nativeElement.clip : undefined;
	}
	set clip(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.clip = value;
		}
	}

	/** Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
	*	Property type: ChartColorScheme
	*/
	get colorScheme(): ChartColorScheme  {
		return this.nativeElement ? this.nativeElement.colorScheme : undefined;
	}
	set colorScheme(value: ChartColorScheme) {
		if (this.nativeElement) {
			this.nativeElement.colorScheme = value;
		}
	}

	/** Enables or disables overlapping of the column series.
	*	Property type: boolean
	*/
	get columnSeriesOverlap(): boolean  {
		return this.nativeElement ? this.nativeElement.columnSeriesOverlap : undefined;
	}
	set columnSeriesOverlap(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnSeriesOverlap = value;
		}
	}

	/** Gets or sets the color of the crosshairs lines. The 'enableCrosshairs' property should be 'true'.
	*	Property type: string | null
	*/
	get crosshairsColor(): string | null  {
		return this.nativeElement ? this.nativeElement.crosshairsColor : undefined;
	}
	set crosshairsColor(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.crosshairsColor = value;
		}
	}

	/** Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length. The 'enableCrosshairs' property should be 'true'. For example: '3,3'
	*	Property type: string
	*/
	get crosshairsDashStyle(): string  {
		return this.nativeElement ? this.nativeElement.crosshairsDashStyle : undefined;
	}
	set crosshairsDashStyle(value: string) {
		if (this.nativeElement) {
			this.nativeElement.crosshairsDashStyle = value;
		}
	}

	/** Gets or sets the width of the crosshairs lines. The 'enableCrosshairs' property should be 'true'
	*	Property type: number
	*/
	get crosshairsLineWidth(): number  {
		return this.nativeElement ? this.nativeElement.crosshairsLineWidth : undefined;
	}
	set crosshairsLineWidth(value: number) {
		if (this.nativeElement) {
			this.nativeElement.crosshairsLineWidth = value;
		}
	}

	/** Sets the chart's data source.
	*	Property type: any[]
	*/
	get dataSource(): any[]  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Sets the description text of the chart.
	*	Property type: string
	*/
	get description(): string  {
		return this.nativeElement ? this.nativeElement.description : undefined;
	}
	set description(value: string) {
		if (this.nativeElement) {
			this.nativeElement.description = value;
		}
	}

	/** Enables or disables the chart.
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

	/** Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing.
	*	Property type: any
	*/
	get draw(): any  {
		return this.nativeElement ? this.nativeElement.draw : undefined;
	}
	set draw(value: any) {
		if (this.nativeElement) {
			this.nativeElement.draw = value;
		}
	}

	/** Function for custom drawing before the caption and other chart elements.
	*	Property type: any
	*/
	get drawBefore(): any  {
		return this.nativeElement ? this.nativeElement.drawBefore : undefined;
	}
	set drawBefore(value: any) {
		if (this.nativeElement) {
			this.nativeElement.drawBefore = value;
		}
	}

	/** Determines if the animation of the axes text is enabled.
	*	Property type: boolean
	*/
	get enableAxisTextAnimation(): boolean  {
		return this.nativeElement ? this.nativeElement.enableAxisTextAnimation : undefined;
	}
	set enableAxisTextAnimation(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.enableAxisTextAnimation = value;
		}
	}

	/** Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point.
	*	Property type: boolean
	*/
	get enableCrosshairs(): boolean  {
		return this.nativeElement ? this.nativeElement.enableCrosshairs : undefined;
	}
	set enableCrosshairs(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.enableCrosshairs = value;
		}
	}

	/** Determines whether to display the chart using greyscale colors.
	*	Property type: boolean
	*/
	get greyScale(): boolean  {
		return this.nativeElement ? this.nativeElement.greyScale : undefined;
	}
	set greyScale(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.greyScale = value;
		}
	}

	/** Sets the legend's layout.
	*	Property type: any
	*/
	get legendLayout(): any  {
		return this.nativeElement ? this.nativeElement.legendLayout : undefined;
	}
	set legendLayout(value: any) {
		if (this.nativeElement) {
			this.nativeElement.legendLayout = value;
		}
	}

	/** Sets or gets the locale. Used in conjunction with the property messages.
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

	/** Localization object containing culture-specific properties required for formatting currencies, numbers and dates.
	*	Property type: ChartLocalization
	*/
	get localization(): ChartLocalization  {
		return this.nativeElement ? this.nativeElement.localization : undefined;
	}
	set localization(value: ChartLocalization) {
		if (this.nativeElement) {
			this.nativeElement.localization = value;
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

	/** Sets the left, top, right and bottom padding of the Chart.
	*	Property type: Padding
	*/
	get padding(): Padding  {
		return this.nativeElement ? this.nativeElement.padding : undefined;
	}
	set padding(value: Padding) {
		if (this.nativeElement) {
			this.nativeElement.padding = value;
		}
	}

	/** Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities.
	*	Property type: ChartRenderEngine
	*/
	get renderEngine(): ChartRenderEngine  {
		return this.nativeElement ? this.nativeElement.renderEngine : undefined;
	}
	set renderEngine(value: ChartRenderEngine) {
		if (this.nativeElement) {
			this.nativeElement.renderEngine = value;
		}
	}

	/** Sets or gets a value indicating whether the Chart's layout is mirrored.
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

	/** The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
	*	Property type: ChartSeriesGroup[]
	*/
	get seriesGroups(): ChartSeriesGroup[]  {
		return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
	}
	set seriesGroups(value: ChartSeriesGroup[]) {
		if (this.nativeElement) {
			this.nativeElement.seriesGroups = value;
		}
	}

	/** Determines whether to display the chart's border line.
	*	Property type: boolean
	*/
	get showBorderLine(): boolean  {
		return this.nativeElement ? this.nativeElement.showBorderLine : undefined;
	}
	set showBorderLine(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showBorderLine = value;
		}
	}

	/** Determines whether to show or hide the chart series legend.
	*	Property type: boolean
	*/
	get showLegend(): boolean  {
		return this.nativeElement ? this.nativeElement.showLegend : undefined;
	}
	set showLegend(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showLegend = value;
		}
	}

	/** Enables or disables the chart tooltips.
	*	Property type: boolean
	*/
	get showToolTips(): boolean  {
		return this.nativeElement ? this.nativeElement.showToolTips : undefined;
	}
	set showToolTips(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showToolTips = value;
		}
	}

	/** Determines whether to show a composite tooltip containing information for all series.
	*	Property type: boolean
	*/
	get showToolTipsOnAllSeries(): boolean  {
		return this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries : undefined;
	}
	set showToolTipsOnAllSeries(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.showToolTipsOnAllSeries = value;
		}
	}

	/** Determines the set of default background, line, text and band colors that will be used in the Chart.
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

	/** Sets the padding of the chart's title (caption).
	*	Property type: Padding
	*/
	get titlePadding(): Padding  {
		return this.nativeElement ? this.nativeElement.titlePadding : undefined;
	}
	set titlePadding(value: Padding) {
		if (this.nativeElement) {
			this.nativeElement.titlePadding = value;
		}
	}

	/** Tooltip background color.
	*	Property type: string | null
	*/
	get toolTipBackground(): string | null  {
		return this.nativeElement ? this.nativeElement.toolTipBackground : undefined;
	}
	set toolTipBackground(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.toolTipBackground = value;
		}
	}

	/** Determines the tooltip hide delay in milliseconds.
	*	Property type: {(value?: any, index?: number, series?: any): string}
	*/
	get toolTipFormatFunction(): {(value?: any, index?: number, series?: any): string}  {
		return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
	}
	set toolTipFormatFunction(value: {(value?: any, index?: number, series?: any): string}) {
		if (this.nativeElement) {
			this.nativeElement.toolTipFormatFunction = value;
		}
	}

	/** Tooltip line color.
	*	Property type: number
	*/
	get toolTipHideDelay(): number  {
		return this.nativeElement ? this.nativeElement.toolTipHideDelay : undefined;
	}
	set toolTipHideDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.toolTipHideDelay = value;
		}
	}

	/** Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms].
	*	Property type: string | null
	*/
	get toolTipLineColor(): string | null  {
		return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
	}
	set toolTipLineColor(value: string | null) {
		if (this.nativeElement) {
			this.nativeElement.toolTipLineColor = value;
		}
	}

	/** An object with settings about the Chart's y-axis (value axis).
	*	Property type: number
	*/
	get toolTipShowDelay(): number  {
		return this.nativeElement ? this.nativeElement.toolTipShowDelay : undefined;
	}
	set toolTipShowDelay(value: number) {
		if (this.nativeElement) {
			this.nativeElement.toolTipShowDelay = value;
		}
	}

	/** Sets the Chart's xAxis.
	*	Property type: ChartValueAxis
	*/
	get valueAxis(): ChartValueAxis  {
		return this.nativeElement ? this.nativeElement.valueAxis : undefined;
	}
	set valueAxis(value: ChartValueAxis) {
		if (this.nativeElement) {
			this.nativeElement.valueAxis = value;
		}
	}

	/** undefined
	*	Property type: ChartXAxis
	*/
	get xAxis(): ChartXAxis  {
		return this.nativeElement ? this.nativeElement.xAxis : undefined;
	}
	set xAxis(value: ChartXAxis) {
		if (this.nativeElement) {
			this.nativeElement.xAxis = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","animationDuration","backgroundColor","backgroundImage","borderLineColor","borderLineWidth","caption","clip","colorScheme","columnSeriesOverlap","crosshairsColor","crosshairsDashStyle","crosshairsLineWidth","dataSource","description","disabled","draw","drawBefore","enableAxisTextAnimation","enableCrosshairs","greyScale","legendLayout","locale","localization","messages","padding","renderEngine","rightToLeft","seriesGroups","showBorderLine","showLegend","showToolTips","showToolTipsOnAllSeries","theme","titlePadding","toolTipBackground","toolTipFormatFunction","toolTipHideDelay","toolTipLineColor","toolTipShowDelay","valueAxis","xAxis"];
	}
	/**  The event is raised when the user clicks on a chart annotation.
	*  @param event. The custom event. 	*/
	onAnnotationClick?: ((event?: Event) => void) | undefined
	/**  The event is raised when the user moves the cursor above a chart annotation.
	*  @param event. The custom event. 	*/
	onAnnotationMouseenter?: ((event?: Event) => void) | undefined
	/**  The event is raised when the user moves the cursor out of a chart annotation.
	*  @param event. The custom event. 	*/
	onAnnotationMouseleave?: ((event?: Event) => void) | undefined
	/**  The event is raised when the user clicks on series element.
	*  @param event. The custom event. 	*/
	onClick?: ((event?: Event) => void) | undefined
	/**  The event is raised when the user moves the cursor out of a series element.
	*  @param event. The custom event. 	*/
	onMouseout?: ((event?: Event) => void) | undefined
	/**  The event is raised when the user moves the cursor above a series element.
	*  @param event. The custom event. 	*/
	onMouseover?: ((event?: Event) => void) | undefined
	/**  The event is raised after the chart's range selector position changes and after the chart ends rendering.
	*  @param event. The custom event. 	*/
	onRangeSelectionChanged?: ((event?: Event) => void) | undefined
	/**  The event is raised when the chart's range selector position changes and before the chart starts rendering.
	*  @param event. The custom event. 	*/
	onRangeSelectionChanging?: ((event?: Event) => void) | undefined
	/**  The event is raised when the chart begins rendering.
	*  @param event. The custom event. 	*/
	onRefreshBegin?: ((event?: Event) => void) | undefined
	/**  The event is raised when the chart finishes rendering.
	*  @param event. The custom event. 	*/
	onRefreshEnd?: ((event?: Event) => void) | undefined
	/**  The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
	*  @param event. The custom event. 	*/
	onToggle?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onAnnotationClick","onAnnotationMouseenter","onAnnotationMouseleave","onClick","onMouseout","onMouseover","onRangeSelectionChanged","onRangeSelectionChanging","onRefreshBegin","onRefreshEnd","onToggle","onCreate","onReady"];
	}
	/** Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors. 
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

	/** Returns the colors of a color scheme by name. If the scheme doesn't exist the method returns undefined. 
	* @param {string} schemeName. The name of the color scheme.
	* @returns {any[]}
  */
	public async getColorScheme(schemeName:string) : Promise<any> {
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

	/** Gets the rendered coordinates of a data point element. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @param {number} itemIndex. Item (data point) index.
	* @returns {{ x: number, y: number, width: number, height: number, center: number, centerOffset: number, innerRadius: number, outerRadius: number, selectedRadiusChange: number, fromAngle: number, toAngle: number, radius: number }}
  */
	public async getItemCoord(groupIndex:number, serieIndex:number, itemIndex:number) : Promise<any> {
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

	/** Gets the number of rendered items in a specific serie. 
	* @param {number} groupIndex. Series group index.
	* @param {number} serieIndex. Series index.
	* @returns {number}
  */
	public async getItemsCount(groupIndex:number, serieIndex:number) : Promise<any> {
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

	/** Gets the rendered coordinates and values of the valueAxis labels. 
	* @param {number} groupIndex. Series group index.
	* @returns {any}
  */
	public async getValueAxisLabels(groupIndex:number) : Promise<any> {
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

	/** Gets the rendered rectangle coordinates of the valueAxis of specific serie group. 
	* @param {number} groupIndex. Series group index.
	* @returns {DOMRect}
  */
	public async getValueAxisRect(groupIndex:number) : Promise<any> {
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

	/** Gets the valueAxis (vertical axis)'s value. 
	* @param {number} offset. Vertical offset.
	* @param {number} groupIndex. Series group index.
	* @returns {any}
  */
	public async getValueAxisValue(offset:number, groupIndex:number) : Promise<any> {
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

	/** Gets the rendered coordinates and values of the xAxis labels. 
	* @param {number} groupIndex. Series group index.
	* @returns {any}
  */
	public async getXAxisLabels(groupIndex:number) : Promise<any> {
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

	/** Gets the rendered rectangle coordinates of the x-Axis of specific serie group. 
	* @param {number} groupIndex. Series group index.
	* @returns {DOMRect}
  */
	public async getXAxisRect(groupIndex:number) : Promise<any> {
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

	/** Gets the xAxis (horizontal axis)'s value. 
	* @param {number} offset. Horizontal offset.
	* @param {number} groupIndex. Series group index.
	* @returns {any}
  */
	public async getXAxisValue(offset:number, groupIndex:number) : Promise<any> {
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

	/** Hides a chart serie. The result of calling this function is same as the user unchecking the legend box of a chart serie. 
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

	/** Hides the current tooltip if visible. 
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

	/** Prints the chart. 
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

	/** Refreshes the content of the chart element after a property or data update. 
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

	/** Removes an existing color scheme. If the scheme does not exist, the method has no effect. 
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

	/** Exports the chart's content as JPEG image. 
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

	/** Exports the chart's content as PNG image. 
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

	/** Exports the chart's content as PDF. 
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

	/** Shows a hidden chart serie. The result of calling this function is same as the user checking the legend box of a chart serie. 
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

	/** Shows a the tooltip for a particular data point. 
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

	/** Updates the values of the chart series without full refresh of the entire chart. The method should be used for animation of frequently changing values. 
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
			React.createElement("smart-chart", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Chart;
