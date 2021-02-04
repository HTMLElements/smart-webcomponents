import React from "react";
/**
 Chart is a feature-complete interactive graph library that answers the data visualization needs of any modern web app.
*/
export class Chart extends React.Component {
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
	get animation() {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value) {
		if (this.nativeElement) {
			this.nativeElement.animation = value;
		}
	}

	/** Determines the animation duration in milliseconds. The value must be between 0 and 5000. If it is outside of this range jqxChart will reset it to the default value.
	*	Property type: number
	*/
	get animationDuration() {
		return this.nativeElement ? this.nativeElement.animationDuration : undefined;
	}
	set animationDuration(value) {
		if (this.nativeElement) {
			this.nativeElement.animationDuration = value;
		}
	}

	/** Sets the chart's background color. For example: '#DDFFE8'
	*	Property type: string | null
	*/
	get backgroundColor() {
		return this.nativeElement ? this.nativeElement.backgroundColor : undefined;
	}
	set backgroundColor(value) {
		if (this.nativeElement) {
			this.nativeElement.backgroundColor = value;
		}
	}

	/** Sets the chart's background image. For example: 'https://www.htmlelements.com/demos/images/carousel-large-1.jpg'
	*	Property type: string
	*/
	get backgroundImage() {
		return this.nativeElement ? this.nativeElement.backgroundImage : undefined;
	}
	set backgroundImage(value) {
		if (this.nativeElement) {
			this.nativeElement.backgroundImage = value;
		}
	}

	/** Sets the chart's border color. For example: '#098700'
	*	Property type: string | null
	*/
	get borderLineColor() {
		return this.nativeElement ? this.nativeElement.borderLineColor : undefined;
	}
	set borderLineColor(value) {
		if (this.nativeElement) {
			this.nativeElement.borderLineColor = value;
		}
	}

	/** Sets the chart's border line width.
	*	Property type: number
	*/
	get borderLineWidth() {
		return this.nativeElement ? this.nativeElement.borderLineWidth : undefined;
	}
	set borderLineWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.borderLineWidth = value;
		}
	}

	/** Sets the caption (title) of the chart.
	*	Property type: string
	*/
	get caption() {
		return this.nativeElement ? this.nativeElement.caption : undefined;
	}
	set caption(value) {
		if (this.nativeElement) {
			this.nativeElement.caption = value;
		}
	}

	/** Determines whether to clip plotted elements that overflow the axis boundaries.
	*	Property type: boolean
	*/
	get clip() {
		return this.nativeElement ? this.nativeElement.clip : undefined;
	}
	set clip(value) {
		if (this.nativeElement) {
			this.nativeElement.clip = value;
		}
	}

	/** Sets the chart's color pallete. jqxChart suppports 32 color schemes from 'scheme01' to 'scheme32'.
	*	Property type: ChartColorScheme
	*/
	get colorScheme() {
		return this.nativeElement ? this.nativeElement.colorScheme : undefined;
	}
	set colorScheme(value) {
		if (this.nativeElement) {
			this.nativeElement.colorScheme = value;
		}
	}

	/** Enables or disables overlapping of the column series.
	*	Property type: boolean
	*/
	get columnSeriesOverlap() {
		return this.nativeElement ? this.nativeElement.columnSeriesOverlap : undefined;
	}
	set columnSeriesOverlap(value) {
		if (this.nativeElement) {
			this.nativeElement.columnSeriesOverlap = value;
		}
	}

	/** Gets or sets the color of the crosshairs lines. The 'enableCrosshairs' property should be 'true'.
	*	Property type: string | null
	*/
	get crosshairsColor() {
		return this.nativeElement ? this.nativeElement.crosshairsColor : undefined;
	}
	set crosshairsColor(value) {
		if (this.nativeElement) {
			this.nativeElement.crosshairsColor = value;
		}
	}

	/** Gets or sets the dash style of the crosshairs lines. The style is a series of numbers indicating line length followed by space length. The 'enableCrosshairs' property should be 'true'. For example: '3,3'
	*	Property type: string
	*/
	get crosshairsDashStyle() {
		return this.nativeElement ? this.nativeElement.crosshairsDashStyle : undefined;
	}
	set crosshairsDashStyle(value) {
		if (this.nativeElement) {
			this.nativeElement.crosshairsDashStyle = value;
		}
	}

	/** Gets or sets the width of the crosshairs lines. The 'enableCrosshairs' property should be 'true'
	*	Property type: number
	*/
	get crosshairsLineWidth() {
		return this.nativeElement ? this.nativeElement.crosshairsLineWidth : undefined;
	}
	set crosshairsLineWidth(value) {
		if (this.nativeElement) {
			this.nativeElement.crosshairsLineWidth = value;
		}
	}

	/** Sets the chart's data source.
	*	Property type: any[]
	*/
	get dataSource() {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Sets the description text of the chart.
	*	Property type: string
	*/
	get description() {
		return this.nativeElement ? this.nativeElement.description : undefined;
	}
	set description(value) {
		if (this.nativeElement) {
			this.nativeElement.description = value;
		}
	}

	/** Enables or disables the chart.
	*	Property type: boolean
	*/
	get disabled() {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value) {
		if (this.nativeElement) {
			this.nativeElement.disabled = value;
		}
	}

	/** Determines the drawing function of jqxChart. When the property is set, you can override the jqxChart's drawing.
	*	Property type: any
	*/
	get draw() {
		return this.nativeElement ? this.nativeElement.draw : undefined;
	}
	set draw(value) {
		if (this.nativeElement) {
			this.nativeElement.draw = value;
		}
	}

	/** Function for custom drawing before the caption and other chart elements.
	*	Property type: any
	*/
	get drawBefore() {
		return this.nativeElement ? this.nativeElement.drawBefore : undefined;
	}
	set drawBefore(value) {
		if (this.nativeElement) {
			this.nativeElement.drawBefore = value;
		}
	}

	/** Determines if the animation of the axes text is enabled.
	*	Property type: boolean
	*/
	get enableAxisTextAnimation() {
		return this.nativeElement ? this.nativeElement.enableAxisTextAnimation : undefined;
	}
	set enableAxisTextAnimation(value) {
		if (this.nativeElement) {
			this.nativeElement.enableAxisTextAnimation = value;
		}
	}

	/** Enables or disables the crosshairs lines. The lines are displayed in line and area series when you move over a data point.
	*	Property type: boolean
	*/
	get enableCrosshairs() {
		return this.nativeElement ? this.nativeElement.enableCrosshairs : undefined;
	}
	set enableCrosshairs(value) {
		if (this.nativeElement) {
			this.nativeElement.enableCrosshairs = value;
		}
	}

	/** Determines whether to display the chart using greyscale colors.
	*	Property type: boolean
	*/
	get greyScale() {
		return this.nativeElement ? this.nativeElement.greyScale : undefined;
	}
	set greyScale(value) {
		if (this.nativeElement) {
			this.nativeElement.greyScale = value;
		}
	}

	/** Sets the legend's layout.
	*	Property type: any
	*/
	get legendLayout() {
		return this.nativeElement ? this.nativeElement.legendLayout : undefined;
	}
	set legendLayout(value) {
		if (this.nativeElement) {
			this.nativeElement.legendLayout = value;
		}
	}

	/** Sets or gets the locale. Used in conjunction with the property messages.
	*	Property type: string
	*/
	get locale() {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value) {
		if (this.nativeElement) {
			this.nativeElement.locale = value;
		}
	}

	/** Localization object containing culture-specific properties required for formatting currencies, numbers and dates.
	*	Property type: ChartLocalization
	*/
	get localization() {
		return this.nativeElement ? this.nativeElement.localization : undefined;
	}
	set localization(value) {
		if (this.nativeElement) {
			this.nativeElement.localization = value;
		}
	}

	/** Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.
	*	Property type: any
	*/
	get messages() {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value) {
		if (this.nativeElement) {
			this.nativeElement.messages = value;
		}
	}

	/** Sets the left, top, right and bottom padding of the Chart.
	*	Property type: Padding
	*/
	get padding() {
		return this.nativeElement ? this.nativeElement.padding : undefined;
	}
	set padding(value) {
		if (this.nativeElement) {
			this.nativeElement.padding = value;
		}
	}

	/** Determines the rendering engine used to display the chart. When the property is set to an empty string, jqxChart will automatically select an optimal rendering engine depending on the browser capabilities.
	*	Property type: ChartRenderEngine
	*/
	get renderEngine() {
		return this.nativeElement ? this.nativeElement.renderEngine : undefined;
	}
	set renderEngine(value) {
		if (this.nativeElement) {
			this.nativeElement.renderEngine = value;
		}
	}

	/** Sets or gets a value indicating whether the Chart's layout is mirrored.
	*	Property type: boolean
	*/
	get rightToLeft() {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value) {
		if (this.nativeElement) {
			this.nativeElement.rightToLeft = value;
		}
	}

	/** The seriesGroups property is used to describe all series displayed on the chart. jqxChart supports multiple series of different types and series grouping. Each series group may have its own Value Axis (Y-axis) which allows you to have values with different scales displayed on the same chart at the same time. It also allows you to display multiple series types together on the same chart. For example, you can display all series in one group as lines and the series in a second group as columns. seriesGroups is an array of objects where each object represents one group.
	*	Property type: ChartSeriesGroup[]
	*/
	get seriesGroups() {
		return this.nativeElement ? this.nativeElement.seriesGroups : undefined;
	}
	set seriesGroups(value) {
		if (this.nativeElement) {
			this.nativeElement.seriesGroups = value;
		}
	}

	/** Determines whether to display the chart's border line.
	*	Property type: boolean
	*/
	get showBorderLine() {
		return this.nativeElement ? this.nativeElement.showBorderLine : undefined;
	}
	set showBorderLine(value) {
		if (this.nativeElement) {
			this.nativeElement.showBorderLine = value;
		}
	}

	/** Determines whether to show or hide the chart series legend.
	*	Property type: boolean
	*/
	get showLegend() {
		return this.nativeElement ? this.nativeElement.showLegend : undefined;
	}
	set showLegend(value) {
		if (this.nativeElement) {
			this.nativeElement.showLegend = value;
		}
	}

	/** Enables or disables the chart tooltips.
	*	Property type: boolean
	*/
	get showToolTips() {
		return this.nativeElement ? this.nativeElement.showToolTips : undefined;
	}
	set showToolTips(value) {
		if (this.nativeElement) {
			this.nativeElement.showToolTips = value;
		}
	}

	/** Determines whether to show a composite tooltip containing information for all series.
	*	Property type: boolean
	*/
	get showToolTipsOnAllSeries() {
		return this.nativeElement ? this.nativeElement.showToolTipsOnAllSeries : undefined;
	}
	set showToolTipsOnAllSeries(value) {
		if (this.nativeElement) {
			this.nativeElement.showToolTipsOnAllSeries = value;
		}
	}

	/** Determines the set of default background, line, text and band colors that will be used in the Chart.
	*	Property type: string
	*/
	get theme() {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value) {
		if (this.nativeElement) {
			this.nativeElement.theme = value;
		}
	}

	/** Sets the padding of the chart's title (caption).
	*	Property type: Padding
	*/
	get titlePadding() {
		return this.nativeElement ? this.nativeElement.titlePadding : undefined;
	}
	set titlePadding(value) {
		if (this.nativeElement) {
			this.nativeElement.titlePadding = value;
		}
	}

	/** Tooltip background color.
	*	Property type: string | null
	*/
	get toolTipBackground() {
		return this.nativeElement ? this.nativeElement.toolTipBackground : undefined;
	}
	set toolTipBackground(value) {
		if (this.nativeElement) {
			this.nativeElement.toolTipBackground = value;
		}
	}

	/** Determines the tooltip hide delay in milliseconds.
	*	Property type: {(value?: any, index?: number, series?: any): string}
	*/
	get toolTipFormatFunction() {
		return this.nativeElement ? this.nativeElement.toolTipFormatFunction : undefined;
	}
	set toolTipFormatFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.toolTipFormatFunction = value;
		}
	}

	/** Tooltip line color.
	*	Property type: number
	*/
	get toolTipHideDelay() {
		return this.nativeElement ? this.nativeElement.toolTipHideDelay : undefined;
	}
	set toolTipHideDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.toolTipHideDelay = value;
		}
	}

	/** Determines the tooltip show delay in milliseconds. Values may range from 0 to 10000 [ms].
	*	Property type: string | null
	*/
	get toolTipLineColor() {
		return this.nativeElement ? this.nativeElement.toolTipLineColor : undefined;
	}
	set toolTipLineColor(value) {
		if (this.nativeElement) {
			this.nativeElement.toolTipLineColor = value;
		}
	}

	/** An object with settings about the Chart's y-axis (value axis).
	*	Property type: number
	*/
	get toolTipShowDelay() {
		return this.nativeElement ? this.nativeElement.toolTipShowDelay : undefined;
	}
	set toolTipShowDelay(value) {
		if (this.nativeElement) {
			this.nativeElement.toolTipShowDelay = value;
		}
	}

	/** Sets the Chart's xAxis.
	*	Property type: ChartValueAxis
	*/
	get valueAxis() {
		return this.nativeElement ? this.nativeElement.valueAxis : undefined;
	}
	set valueAxis(value) {
		if (this.nativeElement) {
			this.nativeElement.valueAxis = value;
		}
	}

	/** undefined
	*	Property type: ChartXAxis
	*/
	get xAxis() {
		return this.nativeElement ? this.nativeElement.xAxis : undefined;
	}
	set xAxis(value) {
		if (this.nativeElement) {
			this.nativeElement.xAxis = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","animationDuration","backgroundColor","backgroundImage","borderLineColor","borderLineWidth","caption","clip","colorScheme","columnSeriesOverlap","crosshairsColor","crosshairsDashStyle","crosshairsLineWidth","dataSource","description","disabled","draw","drawBefore","enableAxisTextAnimation","enableCrosshairs","greyScale","legendLayout","locale","localization","messages","padding","renderEngine","rightToLeft","seriesGroups","showBorderLine","showLegend","showToolTips","showToolTipsOnAllSeries","theme","titlePadding","toolTipBackground","toolTipFormatFunction","toolTipHideDelay","toolTipLineColor","toolTipShowDelay","valueAxis","xAxis"];
	}
	/**  The event is raised when the user clicks on a chart annotation.
	*  @param event. The custom event. 	*/
	_onAnnotationClick = null;	get onAnnotationClick() {
		return this._onAnnotationClick;
	}
	set onAnnotationClick(value) {
		this._onAnnotationClick = value;
	}
	/**  The event is raised when the user moves the cursor above a chart annotation.
	*  @param event. The custom event. 	*/
	_onAnnotationMouseenter = null;	get onAnnotationMouseenter() {
		return this._onAnnotationMouseenter;
	}
	set onAnnotationMouseenter(value) {
		this._onAnnotationMouseenter = value;
	}
	/**  The event is raised when the user moves the cursor out of a chart annotation.
	*  @param event. The custom event. 	*/
	_onAnnotationMouseleave = null;	get onAnnotationMouseleave() {
		return this._onAnnotationMouseleave;
	}
	set onAnnotationMouseleave(value) {
		this._onAnnotationMouseleave = value;
	}
	/**  The event is raised when the user clicks on series element.
	*  @param event. The custom event. 	*/
	_onClick = null;	get onClick() {
		return this._onClick;
	}
	set onClick(value) {
		this._onClick = value;
	}
	/**  The event is raised when the user moves the cursor out of a series element.
	*  @param event. The custom event. 	*/
	_onMouseout = null;	get onMouseout() {
		return this._onMouseout;
	}
	set onMouseout(value) {
		this._onMouseout = value;
	}
	/**  The event is raised when the user moves the cursor above a series element.
	*  @param event. The custom event. 	*/
	_onMouseover = null;	get onMouseover() {
		return this._onMouseover;
	}
	set onMouseover(value) {
		this._onMouseover = value;
	}
	/**  The event is raised after the chart's range selector position changes and after the chart ends rendering.
	*  @param event. The custom event. 	*/
	_onRangeSelectionChanged = null;	get onRangeSelectionChanged() {
		return this._onRangeSelectionChanged;
	}
	set onRangeSelectionChanged(value) {
		this._onRangeSelectionChanged = value;
	}
	/**  The event is raised when the chart's range selector position changes and before the chart starts rendering.
	*  @param event. The custom event. 	*/
	_onRangeSelectionChanging = null;	get onRangeSelectionChanging() {
		return this._onRangeSelectionChanging;
	}
	set onRangeSelectionChanging(value) {
		this._onRangeSelectionChanging = value;
	}
	/**  The event is raised when the chart begins rendering.
	*  @param event. The custom event. 	*/
	_onRefreshBegin = null;	get onRefreshBegin() {
		return this._onRefreshBegin;
	}
	set onRefreshBegin(value) {
		this._onRefreshBegin = value;
	}
	/**  The event is raised when the chart finishes rendering.
	*  @param event. The custom event. 	*/
	_onRefreshEnd = null;	get onRefreshEnd() {
		return this._onRefreshEnd;
	}
	set onRefreshEnd(value) {
		this._onRefreshEnd = value;
	}
	/**  The event is raised when a serie is toggled by a user click in the chart's legend or through an API call.
	*  @param event. The custom event. 	*/
	_onToggle = null;	get onToggle() {
		return this._onToggle;
	}
	set onToggle(value) {
		this._onToggle = value;
	}

	// Gets the events of the React component.
	get eventListeners() {
		return ["onAnnotationClick","onAnnotationMouseenter","onAnnotationMouseleave","onClick","onMouseout","onMouseover","onRangeSelectionChanged","onRangeSelectionChanging","onRefreshBegin","onRefreshEnd","onToggle"];
	}
	/** Adds a new color sheme. If a scheme with the same name already exists, the method will update its colors. 
	* @param {string} schemeName. The name of the custom color scheme.
	* @param {any[]} colorsArray. An array of color values.
	*/
    addColorScheme(schemeName, colorsArray){
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
	async getColorScheme(schemeName) {
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
	async getItemCoord(groupIndex, serieIndex, itemIndex) {
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
	async getItemsCount(groupIndex, serieIndex) {
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
	async getValueAxisLabels(groupIndex) {
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
	async getValueAxisRect(groupIndex) {
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
	async getValueAxisValue(offset, groupIndex) {
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
	async getXAxisLabels(groupIndex) {
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
	async getXAxisRect(groupIndex) {
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
	async getXAxisValue(offset, groupIndex) {
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
    hideSerie(groupIndex, serieIndex, itemIndex){
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
    hideToolTip(hideDelay){
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
    print(){
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
    refresh(){
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
    removeColorScheme(schemeName){
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
    saveAsJPEG(fileName){
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
    saveAsPNG(fileName){
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
    saveAsPDF(fileName, pageOrientation){
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
    showSerie(groupIndex, serieIndex, itemIndex){
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
    showToolTip(groupIndex, serieIndex, itemIndex, showDelay, hideDelay){
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
    update(){
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



	constructor(props) {
		super(props);
		this.componentRef = React.createRef();
	}

	componentDidRender(initialize) {
		const that = this;
		const props = {};
		const events = {};
		let styles = null;

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
				const normalizeProp = (str) => {
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
