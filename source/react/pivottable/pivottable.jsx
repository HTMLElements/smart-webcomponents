import React from "react";
/**
 PivotTable is a table of statistics that summarizes the data of a more extensive table.
*/
export class PivotTable extends React.Component {
	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'PivotTable' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
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

	/** Sets or gets whether the reordering of columns is enabled.
	*	Property type: boolean
	*/
	get columnReorder() {
		return this.nativeElement ? this.nativeElement.columnReorder : undefined;
	}
	set columnReorder(value) {
		if (this.nativeElement) {
			this.nativeElement.columnReorder = value;
		}
	}

	/** Describes the columns of the PivotTable's original tabular data. Based on these settings and the data source, the actual columns of the PivotTable are dynamically generated.
	*	Property type: PivotTableColumn[]
	*/
	get columns() {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Sets or gets whether to show total columns for each pivot data point. When enabled, all summary columns must have the same summary function set by which total columns are calculated.
	*	Property type: boolean
	*/
	get columnTotals() {
		return this.nativeElement ? this.nativeElement.columnTotals : undefined;
	}
	set columnTotals(value) {
		if (this.nativeElement) {
			this.nativeElement.columnTotals = value;
		}
	}

	/** Sets or gets the position of total columns (shown when columnTotals is enabled).
	*	Property type: PivotTableColumnTotalsPosition
	*/
	get columnTotalsPosition() {
		return this.nativeElement ? this.nativeElement.columnTotalsPosition : undefined;
	}
	set columnTotalsPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.columnTotalsPosition = value;
		}
	}

	/** Sets or gets details about conditional formatting to be applied to the PivotTable's cells.
	*	Property type: PivotTableConditionalFormatting[]
	*/
	get conditionalFormatting() {
		return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
	}
	set conditionalFormatting(value) {
		if (this.nativeElement) {
			this.nativeElement.conditionalFormatting = value;
		}
	}

	/** Determines the original tabular data source of the PivotTable.
	*	Property type: any
	*/
	get dataSource() {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Sets or gets whether to display the PivotTable's designer alongside the table itself. The designer allows for configuring column settings and applying filtering.
	*	Property type: boolean
	*/
	get designer() {
		return this.nativeElement ? this.nativeElement.designer : undefined;
	}
	set designer(value) {
		if (this.nativeElement) {
			this.nativeElement.designer = value;
		}
	}

	/** Sets or gets the position of the PivotTable's designer (shown when designer is enabled).
	*	Property type: PivotTableDesignerPosition
	*/
	get designerPosition() {
		return this.nativeElement ? this.nativeElement.designerPosition : undefined;
	}
	set designerPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.designerPosition = value;
		}
	}

	/** Disables the interaction with the element.
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

	/** If enabled, shows the original tabular data that has been aggregated in a PivotTable summary cell when the cell is double-clicked or F2 is pressed.
	*	Property type: boolean
	*/
	get drillDown() {
		return this.nativeElement ? this.nativeElement.drillDown : undefined;
	}
	set drillDown(value) {
		if (this.nativeElement) {
			this.nativeElement.drillDown = value;
		}
	}

	/** Sets or gets whether the PivotTable's column header is sticky/frozen.
	*	Property type: boolean
	*/
	get freezeHeader() {
		return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
	}
	set freezeHeader(value) {
		if (this.nativeElement) {
			this.nativeElement.freezeHeader = value;
		}
	}

	/** A callback function that returns the default summary function of a summary column when it is dynamically assigned as such (e.g. by drag-drop in the designer).
	*	Property type: { (column: PivotTableColumn): string }
	*/
	get getDefaultSummaryFunction() {
		return this.nativeElement ? this.nativeElement.getDefaultSummaryFunction : undefined;
	}
	set getDefaultSummaryFunction(value) {
		if (this.nativeElement) {
			this.nativeElement.getDefaultSummaryFunction = value;
		}
	}

	/** Sets or gets whether to show a Grand total row aggregating the data of all rows.
	*	Property type: boolean
	*/
	get grandTotal() {
		return this.nativeElement ? this.nativeElement.grandTotal : undefined;
	}
	set grandTotal(value) {
		if (this.nativeElement) {
			this.nativeElement.grandTotal = value;
		}
	}

	/** Sets or gets the way row nesting (based on rowGroup columns) is displayed.
	*	Property type: PivotTableGroupLayout
	*/
	get groupLayout() {
		return this.nativeElement ? this.nativeElement.groupLayout : undefined;
	}
	set groupLayout(value) {
		if (this.nativeElement) {
			this.nativeElement.groupLayout = value;
		}
	}

	/** Sets or gets whether navigation with the keyboard is enabled in the PivotTable.
	*	Property type: boolean
	*/
	get keyboardNavigation() {
		return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
	}
	set keyboardNavigation(value) {
		if (this.nativeElement) {
			this.nativeElement.keyboardNavigation = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
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

	/** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
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

	/** A callback function executed each time a PivotTable cell is rendered.
	*	Property type: any
	*/
	get onCellRender() {
		return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	}
	set onCellRender(value) {
		if (this.nativeElement) {
			this.nativeElement.onCellRender = value;
		}
	}

	/** A callback function executed each time a PivotTable column header cell is rendered.
	*	Property type: any
	*/
	get onColumnRender() {
		return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
	}
	set onColumnRender(value) {
		if (this.nativeElement) {
			this.nativeElement.onColumnRender = value;
		}
	}

	/** A callback function executed when the PivotTable is being initialized.
	*	Property type: { (): void }
	*/
	get onInit() {
		return this.nativeElement ? this.nativeElement.onInit : undefined;
	}
	set onInit(value) {
		if (this.nativeElement) {
			this.nativeElement.onInit = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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

	/** Sets or gets whether to show row total columns for each summary column.
	*	Property type: boolean
	*/
	get rowTotals() {
		return this.nativeElement ? this.nativeElement.rowTotals : undefined;
	}
	set rowTotals(value) {
		if (this.nativeElement) {
			this.nativeElement.rowTotals = value;
		}
	}

	/** Sets or gets the position of row total columns (shown when rowTotals is enabled).
	*	Property type: PivotTableRowTotalsPosition
	*/
	get rowTotalsPosition() {
		return this.nativeElement ? this.nativeElement.rowTotalsPosition : undefined;
	}
	set rowTotalsPosition(value) {
		if (this.nativeElement) {
			this.nativeElement.rowTotalsPosition = value;
		}
	}

	/** Sets or gets whether row selection (via checkboxes) is enabled.
	*	Property type: boolean
	*/
	get selection() {
		return this.nativeElement ? this.nativeElement.selection : undefined;
	}
	set selection(value) {
		if (this.nativeElement) {
			this.nativeElement.selection = value;
		}
	}

	/** Sets or gets the selection mode. Only applicable when selection is enabled.
	*	Property type: PivotTableSelectionMode
	*/
	get selectionMode() {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** Determines the sorting mode of the PivotTable.
	*	Property type: PivotTableSortMode
	*/
	get sortMode() {
		return this.nativeElement ? this.nativeElement.sortMode : undefined;
	}
	set sortMode(value) {
		if (this.nativeElement) {
			this.nativeElement.sortMode = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
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

	/** Sets or gets whether the PivotTable's toolbar is shown. It contains two breadcrumb components that allow the modification of the row group and pivot columns, as well as the "Conditional Formatting" and "Fields" buttons that open a dialog with additional settings.
	*	Property type: boolean
	*/
	get toolbar() {
		return this.nativeElement ? this.nativeElement.toolbar : undefined;
	}
	set toolbar(value) {
		if (this.nativeElement) {
			this.nativeElement.toolbar = value;
		}
	}

	/** Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
	*	Property type: boolean
	*/
	get tooltip() {
		return this.nativeElement ? this.nativeElement.tooltip : undefined;
	}
	set tooltip(value) {
		if (this.nativeElement) {
			this.nativeElement.tooltip = value;
		}
	}


	// Gets the properties of the React component.
	get properties() {
		return ["animation","columnReorder","columns","columnTotals","columnTotalsPosition","conditionalFormatting","dataSource","designer","designerPosition","disabled","drillDown","freezeHeader","getDefaultSummaryFunction","grandTotal","groupLayout","keyboardNavigation","locale","messages","onCellRender","onColumnRender","onInit","rightToLeft","rowTotals","rowTotalsPosition","selection","selectionMode","sortMode","theme","toolbar","tooltip"];
	}
	/**  This event is triggered when a cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row)
	*   dataField - The data field of the cell's dynamic column.
	*   row - The data of the cell's row.
	*/
	_onCellClick = null;	get onCellClick() {
		return this._onCellClick;
	}
	set onCellClick(value) {
		this._onCellClick = value;
	}
	/**  This event is triggered when the selection is changed.
	*  @param event. The custom event. 	*/
	_onChange = null;	get onChange() {
		return this._onChange;
	}
	set onChange(value) {
		this._onChange = value;
	}
	/**  This event is triggered when a summary column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columnDefinition, 	dataField)
	*   columnDefinition - An object detailing the clicked dynamic column.
	*   dataField - The data field of the cell's original column.
	*/
	_onColumnClick = null;	get onColumnClick() {
		return this._onColumnClick;
	}
	set onColumnClick(value) {
		this._onColumnClick = value;
	}
	/**  This event is triggered when a filtering-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
	*   action - The filtering action. Possible actions: 'add', 'remove'.
	*   filters - The added filters. Only when action is 'add'.
	*/
	_onFilter = null;	get onFilter() {
		return this._onFilter;
	}
	set onFilter(value) {
		this._onFilter = value;
	}
	/**  This event is triggered when a column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
	*   columns - An array with information about the dynamic columns the PivotTable has been sorted by.
	*/
	_onSort = null;	get onSort() {
		return this._onSort;
	}
	set onSort(value) {
		this._onSort = value;
	}

	// Gets the events of the React component.
	get events() {
		return ["onCellClick","onChange","onColumnClick","onFilter","onSort"];
	}
	/** Adds a filter to a specific column. 
	* @param {string} dataField. The column's data field.
	* @param {any} filter. FilterGroup object.
	*/
    addFilter(dataField, filter){
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(dataField, filter);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(dataField, filter);
            });
        }
    }

	/** Clears applied filters. 
	*/
    clearFilters(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilters();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearFilters();
            });
        }
    }

	/** Clears selection. 
	*/
    clearSelection(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSelection();
            });
        }
    }

	/** Clears the PivotTable sorting. 
	*/
    clearSort(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSort();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearSort();
            });
        }
    }

	/** Collapses all rows (when multiple row groups are applied). 
	*/
    collapseAllRows(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseAllRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseAllRows();
            });
        }
    }

	/** Collapses a row (when multiple row groups are applied). 
	* @param {string | number} rowId. The id of the row to collapse. Can be retrieved from the <strong>rows</strong> collection.
	*/
    collapseRow(rowId){
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseRow(rowId);
            });
        }
    }

	/** Expands all rows (when multiple row groups are applied). 
	*/
    expandAllRows(){
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandAllRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandAllRows();
            });
        }
    }

	/** Expands a row (when multiple row groups are applied). 
	* @param {string | number} rowId. The id of the row to expand. Can be retrieved from the <strong>rows</strong> collection.
	*/
    expandRow(rowId){
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandRow(rowId);
            });
        }
    }

	/** Exports the PivotTable's data. 
	* @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
	* @param {string} fileName?. The name of the file to export to
	* @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
	* @returns {any}
  */
	async exportData(dataFormat, fileName, callback) {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.exportData(dataFormat, fileName, callback);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns the current dynamic pivot columns. 
	* @returns {any}
  */
	async getDynamicColumns() {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getDynamicColumns();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns an array of selected row ids. 
	* @returns {(string | number)[]}
  */
	async getSelection() {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getSelection();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Refreshes the PivotTable. 
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

	/** Removes filters applied to a specific column. 
	* @param {string} dataField. The column's data field.
	*/
    removeFilter(dataField){
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter(dataField);
            });
        }
    }

	/** Selects a row. 
	* @param {string | number} rowId. The id of the row to select. Can be retrieved from the <strong>rows</strong> collection.
	*/
    select(rowId){
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rowId);
            });
        }
    }

	/** Sorts by a summary or group column. 
	* @param {any} columnDefinition. The dynamic column's definition. Can be retrieved from the method <strong>getDynamicColumns</strong>.
	* @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
	*/
    sortBy(columnDefinition, sortOrder){
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(columnDefinition, sortOrder);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sortBy(columnDefinition, sortOrder);
            });
        }
    }

	/** Unselects a row. 
	* @param {string | number} rowId. The id of the row to unselect. Can be retrieved from the <strong>rows</strong> collection.
	*/
    unselect(rowId){
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(rowId);
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

		for(let i = 0; i < that.events.length; i++){
			const eventName = that.events[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-pivot-table", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default PivotTable;
