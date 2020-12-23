import React from "react";
import { TableProperties } from "./../../index";
import { Animation, TableColumnDataType, TableColumnFreeze, TableColumnResponsivePriority, TableConditionalFormattingCondition, TableConditionalFormattingFontFamily, TableConditionalFormattingFontSize, TableColumnSizeMode, TableEditMode, TableLoadColumnStateBehavior, TablePageSize, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting} from './../../index';
export { TableProperties } from "./../../index";
export { Animation, TableColumnDataType, TableColumnFreeze, TableColumnResponsivePriority, TableConditionalFormattingCondition, TableConditionalFormattingFontFamily, TableConditionalFormattingFontSize, TableColumnSizeMode, TableEditMode, TableLoadColumnStateBehavior, TablePageSize, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting} from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface TableProps extends TableProperties {
    className?: string;
    style?: React.CSSProperties;

	onCellBeginEdit?: ((event?: Event) => void) | undefined;
	onCellClick?: ((event?: Event) => void) | undefined;
	onCellEndEdit?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onCollapse?: ((event?: Event) => void) | undefined;
	onExpand?: ((event?: Event) => void) | undefined;
	onColumnClick?: ((event?: Event) => void) | undefined;
	onColumnResize?: ((event?: Event) => void) | undefined;
	onFilter?: ((event?: Event) => void) | undefined;
	onGroup?: ((event?: Event) => void) | undefined;
	onPage?: ((event?: Event) => void) | undefined;
	onRowBeginEdit?: ((event?: Event) => void) | undefined;
	onRowEndEdit?: ((event?: Event) => void) | undefined;
	onSort?: ((event?: Event) => void) | undefined;
	onCreate?: ((event?: Event) => void) | undefined;
	onReady?: ((event?: Event) => void) | undefined;

}
/**
 Table is an alternative of the HTMLTableElement.
*/
export class Table extends React.Component<React.HTMLAttributes<Element> & TableProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Table' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** Sets or gets the animation mode. Animation is disabled when the property is set to 'none'
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

	/** Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property.
	*	Property type: boolean
	*/
	get autoLoadState(): boolean  {
		return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
	}
	set autoLoadState(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoLoadState = value;
		}
	}

	/** Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property.
	*	Property type: boolean
	*/
	get autoSaveState(): boolean  {
		return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
	}
	set autoSaveState(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.autoSaveState = value;
		}
	}

	/** Sets or gets a list of column groups that constitute the column header hierarchy. Note: when column header hierarchy is created, column resizing and auto-sizing is not supported.
	*	Property type: TableColumnGroup[]
	*/
	get columnGroups(): TableColumnGroup[]  {
		return this.nativeElement ? this.nativeElement.columnGroups : undefined;
	}
	set columnGroups(value: TableColumnGroup[]) {
		if (this.nativeElement) {
			this.nativeElement.columnGroups = value;
		}
	}

	/** Sets or gets the min width of columns when columnSizeMode is 'auto' or when resizing columns. This property has no effect on columns with programmatically set width.
	*	Property type: string | number
	*/
	get columnMinWidth(): string | number  {
		return this.nativeElement ? this.nativeElement.columnMinWidth : undefined;
	}
	set columnMinWidth(value: string | number) {
		if (this.nativeElement) {
			this.nativeElement.columnMinWidth = value;
		}
	}

	/** Sets or gets whether the reordering of columns is enabled.
	*	Property type: boolean
	*/
	get columnReorder(): boolean  {
		return this.nativeElement ? this.nativeElement.columnReorder : undefined;
	}
	set columnReorder(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnReorder = value;
		}
	}

	/** Sets or gets whether the resizing of columns is enabled. Note: column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based.
	*	Property type: boolean
	*/
	get columnResize(): boolean  {
		return this.nativeElement ? this.nativeElement.columnResize : undefined;
	}
	set columnResize(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnResize = value;
		}
	}

	/** Sets or gets whether when resizing a column, a feedback showing the new column width in px will be displayed.
	*	Property type: boolean
	*/
	get columnResizeFeedback(): boolean  {
		return this.nativeElement ? this.nativeElement.columnResizeFeedback : undefined;
	}
	set columnResizeFeedback(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.columnResizeFeedback = value;
		}
	}

	/** Describes the columns properties.
	*	Property type: TableColumn[]
	*/
	get columns(): TableColumn[]  {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: TableColumn[]) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Sets or gets details about conditional formatting to be applied to the Table's cells.
	*	Property type: TableConditionalFormatting[]
	*/
	get conditionalFormatting(): TableConditionalFormatting[]  {
		return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
	}
	set conditionalFormatting(value: TableConditionalFormatting[]) {
		if (this.nativeElement) {
			this.nativeElement.conditionalFormatting = value;
		}
	}

	/** Sets or gets the column sizing behavior.
	*	Property type: TableColumnSizeMode
	*/
	get columnSizeMode(): TableColumnSizeMode  {
		return this.nativeElement ? this.nativeElement.columnSizeMode : undefined;
	}
	set columnSizeMode(value: TableColumnSizeMode) {
		if (this.nativeElement) {
			this.nativeElement.columnSizeMode = value;
		}
	}

	/** Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options.
	*	Property type: boolean
	*/
	get conditionalFormattingButton(): boolean  {
		return this.nativeElement ? this.nativeElement.conditionalFormattingButton : undefined;
	}
	set conditionalFormattingButton(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.conditionalFormattingButton = value;
		}
	}

	/** When binding the dataSource property directly to an array (as opposed to an instance of JQX.DataAdapter), sets or gets the name of the data field in the source array to bind row ids to.
	*	Property type: string
	*/
	get dataRowId(): string  {
		return this.nativeElement ? this.nativeElement.dataRowId : undefined;
	}
	set dataRowId(value: string) {
		if (this.nativeElement) {
			this.nativeElement.dataRowId = value;
		}
	}

	/** Determines the data source of the table component.
	*	Property type: any
	*/
	get dataSource(): any  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** A callback function that can be used to transform the initial dataSource records. If implemented, it is called once for each record (which is passed as an argument).
	*	Property type: any
	*/
	get dataTransform(): any  {
		return this.nativeElement ? this.nativeElement.dataTransform : undefined;
	}
	set dataTransform(value: any) {
		if (this.nativeElement) {
			this.nativeElement.dataTransform = value;
		}
	}

	/** Disables the interaction with the element.
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

	/** Sets or gets whether the Table can be edited.
	*	Property type: boolean
	*/
	get editing(): boolean  {
		return this.nativeElement ? this.nativeElement.editing : undefined;
	}
	set editing(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.editing = value;
		}
	}

	/** Sets or gets the edit mode.
	*	Property type: TableEditMode
	*/
	get editMode(): TableEditMode  {
		return this.nativeElement ? this.nativeElement.editMode : undefined;
	}
	set editMode(value: TableEditMode) {
		if (this.nativeElement) {
			this.nativeElement.editMode = value;
		}
	}

	/** Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header.
	*	Property type: boolean
	*/
	get filtering(): boolean  {
		return this.nativeElement ? this.nativeElement.filtering : undefined;
	}
	set filtering(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.filtering = value;
		}
	}

	/** Sets or gets whether the Table can be filtered via a filter row.
	*	Property type: boolean
	*/
	get filterRow(): boolean  {
		return this.nativeElement ? this.nativeElement.filterRow : undefined;
	}
	set filterRow(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.filterRow = value;
		}
	}

	/** Sets or gets the id of an HTML template element to be applied as a custom filter template.
	*	Property type: string
	*/
	get filterTemplate(): string  {
		return this.nativeElement ? this.nativeElement.filterTemplate : undefined;
	}
	set filterTemplate(value: string) {
		if (this.nativeElement) {
			this.nativeElement.filterTemplate = value;
		}
	}

	/** Sets or gets the id of an HTML template element to be applied as footer row(s).
	*	Property type: string
	*/
	get footerRow(): string  {
		return this.nativeElement ? this.nativeElement.footerRow : undefined;
	}
	set footerRow(value: string) {
		if (this.nativeElement) {
			this.nativeElement.footerRow = value;
		}
	}

	/** Sets or gets whether Excel-like formulas can be passed as cell values. Formulas are always preceded by the = sign and are re-evaluated when cell values are changed. This feature depends on the third-party free plug-in formula-parser (the file formula-parser.min.js has to be referenced).
	*	Property type: boolean
	*/
	get formulas(): boolean  {
		return this.nativeElement ? this.nativeElement.formulas : undefined;
	}
	set formulas(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.formulas = value;
		}
	}

	/** Sets or gets whether the Table's footer is sticky/frozen.
	*	Property type: boolean
	*/
	get freezeFooter(): boolean  {
		return this.nativeElement ? this.nativeElement.freezeFooter : undefined;
	}
	set freezeFooter(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.freezeFooter = value;
		}
	}

	/** Sets or gets whether the Table's column header is sticky/frozen.
	*	Property type: boolean
	*/
	get freezeHeader(): boolean  {
		return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
	}
	set freezeHeader(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.freezeHeader = value;
		}
	}

	/** Sets or gets whether grouping the Table is enabled.
	*	Property type: boolean
	*/
	get grouping(): boolean  {
		return this.nativeElement ? this.nativeElement.grouping : undefined;
	}
	set grouping(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.grouping = value;
		}
	}

	/** Sets or gets the id of an HTML template element to be applied as additional column header(s).
	*	Property type: string
	*/
	get headerRow(): string  {
		return this.nativeElement ? this.nativeElement.headerRow : undefined;
	}
	set headerRow(value: string) {
		if (this.nativeElement) {
			this.nativeElement.headerRow = value;
		}
	}

	/** Sets or gets whether navigation with the keyboard is enabled in the Table.
	*	Property type: boolean
	*/
	get keyboardNavigation(): boolean  {
		return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
	}
	set keyboardNavigation(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.keyboardNavigation = value;
		}
	}

	/** Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'.
	*	Property type: TableLoadColumnStateBehavior
	*/
	get loadColumnStateBehavior(): TableLoadColumnStateBehavior  {
		return this.nativeElement ? this.nativeElement.loadColumnStateBehavior : undefined;
	}
	set loadColumnStateBehavior(value: TableLoadColumnStateBehavior) {
		if (this.nativeElement) {
			this.nativeElement.loadColumnStateBehavior = value;
		}
	}

	/** Sets or gets the language. Used in conjunction with the property messages. 
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

	/** Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale. 
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

	/** A callback function executed each time a Table cell is rendered.
	*	Property type: any
	*/
	get onCellRender(): any  {
		return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	}
	set onCellRender(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onCellRender = value;
		}
	}

	/** A callback function executed each time a Table column header cell is rendered.
	*	Property type: { (dataField: string, headerCell: HTMLTableCellElement): void }
	*/
	get onColumnRender(): { (dataField: string, headerCell: HTMLTableCellElement): void }  {
		return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
	}
	set onColumnRender(value: { (dataField: string, headerCell: HTMLTableCellElement): void }) {
		if (this.nativeElement) {
			this.nativeElement.onColumnRender = value;
		}
	}

	/** A callback function executed when the Table is being initialized.
	*	Property type: { (): void }
	*/
	get onInit(): { (): void }  {
		return this.nativeElement ? this.nativeElement.onInit : undefined;
	}
	set onInit(value: { (): void }) {
		if (this.nativeElement) {
			this.nativeElement.onInit = value;
		}
	}

	/** Sets or gets the page size (when paging is enabled).
	*	Property type: TablePageSize
	*/
	get pageSize(): TablePageSize  {
		return this.nativeElement ? this.nativeElement.pageSize : undefined;
	}
	set pageSize(value: TablePageSize) {
		if (this.nativeElement) {
			this.nativeElement.pageSize = value;
		}
	}

	/** Sets or gets the current (zero-based) page index (when paging is enabled).
	*	Property type: number
	*/
	get pageIndex(): number  {
		return this.nativeElement ? this.nativeElement.pageIndex : undefined;
	}
	set pageIndex(value: number) {
		if (this.nativeElement) {
			this.nativeElement.pageIndex = value;
		}
	}

	/** Sets or gets whether paging is enabled.
	*	Property type: boolean
	*/
	get paging(): boolean  {
		return this.nativeElement ? this.nativeElement.paging : undefined;
	}
	set paging(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.paging = value;
		}
	}

	/** Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts.
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

	/** Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it.
	*	Property type: string
	*/
	get rowDetailTemplate(): string  {
		return this.nativeElement ? this.nativeElement.rowDetailTemplate : undefined;
	}
	set rowDetailTemplate(value: string) {
		if (this.nativeElement) {
			this.nativeElement.rowDetailTemplate = value;
		}
	}

	/** Sets or gets an array of the Table's selected row's ids.
	*	Property type: any[]
	*/
	get selected(): any[]  {
		return this.nativeElement ? this.nativeElement.selected : undefined;
	}
	set selected(value: any[]) {
		if (this.nativeElement) {
			this.nativeElement.selected = value;
		}
	}

	/** Sets or gets whether row selection (via checkboxes) is enabled.
	*	Property type: boolean
	*/
	get selection(): boolean  {
		return this.nativeElement ? this.nativeElement.selection : undefined;
	}
	set selection(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.selection = value;
		}
	}

	/** Sets or gets the selection mode. Only applicable when selection is enabled.
	*	Property type: TableSelectionMode
	*/
	get selectionMode(): TableSelectionMode  {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: TableSelectionMode) {
		if (this.nativeElement) {
			this.nativeElement.selectionMode = value;
		}
	}

	/** A callback function executed when a column is sorted that can be used to override the default sorting behavior. The function is passed four parameters: dataSource - the Table's data sourcesortColumns - an array of the data fields of columns to be sorted bydirections - an array of sort directions to be sorted by (corresponding to sortColumns)defaultCompareFunctions - an array of default compare functions to be sorted by (corresponding to sortColumns), useful if the sorting of some columns does not have to be overridden
	*	Property type: any
	*/
	get sort(): any  {
		return this.nativeElement ? this.nativeElement.sort : undefined;
	}
	set sort(value: any) {
		if (this.nativeElement) {
			this.nativeElement.sort = value;
		}
	}

	/** Determines the sorting mode of the Table.
	*	Property type: TableSortMode
	*/
	get sortMode(): TableSortMode  {
		return this.nativeElement ? this.nativeElement.sortMode : undefined;
	}
	set sortMode(value: TableSortMode) {
		if (this.nativeElement) {
			this.nativeElement.sortMode = value;
		}
	}

	/** Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState).
	*	Property type: string[]
	*/
	get stateSettings(): string[]  {
		return this.nativeElement ? this.nativeElement.stateSettings : undefined;
	}
	set stateSettings(value: string[]) {
		if (this.nativeElement) {
			this.nativeElement.stateSettings = value;
		}
	}

	/** Determines the theme. Theme defines the look of the element
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

	/** Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown.
	*	Property type: boolean
	*/
	get tooltip(): boolean  {
		return this.nativeElement ? this.nativeElement.tooltip : undefined;
	}
	set tooltip(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.tooltip = value;
		}
	}

	/** Enables or disables HTML virtualization. This functionality allows for only visible rows to be rendered, resulting in an increased Table performance.
	*	Property type: boolean
	*/
	get virtualization(): boolean  {
		return this.nativeElement ? this.nativeElement.virtualization : undefined;
	}
	set virtualization(value: boolean) {
		if (this.nativeElement) {
			this.nativeElement.virtualization = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["animation","autoLoadState","autoSaveState","columnGroups","columnMinWidth","columnReorder","columnResize","columnResizeFeedback","columns","conditionalFormatting","columnSizeMode","conditionalFormattingButton","dataRowId","dataSource","dataTransform","disabled","editing","editMode","filtering","filterRow","filterTemplate","footerRow","formulas","freezeFooter","freezeHeader","grouping","headerRow","keyboardNavigation","loadColumnStateBehavior","locale","messages","onCellRender","onColumnRender","onInit","pageSize","pageIndex","paging","rightToLeft","rowDetailTemplate","selected","selection","selectionMode","sort","sortMode","stateSettings","theme","tooltip","virtualization"];
	}
	/**  This event is triggered when a cell edit operation has been initiated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row, 	value)
	*   dataField - The data field of the cell's column.
	*   row - The data of the cell's row.
	*   value - The data value of the cell.
	*/
	onCellBeginEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value, 	originalEvent)
	*   id - The cell's row id.
	*   dataField - The data field of the cell's column.
	*   row - The data of the cell's row.
	*   value - The data value of the cell.
	*   originalEvent - The 'click' event object.
	*/
	onCellClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a cell has been edited.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row, 	value)
	*   dataField - The data field of the cell's column.
	*   row - The new data of the cell's row.
	*   value - The data value of the cell.
	*/
	onCellEndEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type)
	*   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a row has been collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	record)
	*   record - The data of the collapsed row.
	*/
	onCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a row has been expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	record)
	*   record - The (aggregated) data of the expanded row.
	*/
	onExpand?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
	*   dataField - The data field of the cell's column.
	*/
	onColumnClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column has been resized via dragging or double-click.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	width)
	*   dataField - The data field of the column.
	*   headerCellElement - The column's header cell HTML element.
	*   width - The new width of the column.
	*/
	onColumnResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a filtering-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
	*   action - The filtering action. Possible actions: 'add', 'remove'.
	*   filters - The added filters. Only when action is 'add'.
	*/
	onFilter?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a grouping-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label)
	*   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
	*   dataField - The data field of the column whose grouping is modified.
	*   label - The label of the group (only when collapsing/expanding).
	*/
	onGroup?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a paging-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action)
	*   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
	*/
	onPage?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a row edit operation has been initiated (only when editMode is 'row').
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row)
	*   row - The data of the row.
	*/
	onRowBeginEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a row has been edited (only when editMode is 'row').
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row)
	*   row - The new data of the row.
	*/
	onRowEndEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered when a column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
	*   columns - An array with information about the columns the Table has been sorted by.
	*/
	onSort?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get eventListeners(): string[] {
		return ["onCellBeginEdit","onCellClick","onCellEndEdit","onChange","onCollapse","onExpand","onColumnClick","onColumnResize","onFilter","onGroup","onPage","onRowBeginEdit","onRowEndEdit","onSort","onCreate","onReady"];
	}
	/** Adds a filter to a specific column. 
	* @param {string} dataField. The column's data field.
	* @param {any} filter. FilterGroup object.
	*/
    public addFilter(dataField: string, filter: any): void {
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

	/** Groups by a column. 
	* @param {string} dataField. The column's data field.
	*/
    public addGroup(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addGroup(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addGroup(dataField);
            });
        }
    }

	/** Begins an edit operation. 
	* @param {string | number} row. The id of the row to edit.
	* @param {string} dataField?. The dataField of the cell's column. May be omitted when <strong>editMode</strong> is <em>'row'</em>.
	*/
    public beginEdit(row: string | number, dataField?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginEdit(row, dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginEdit(row, dataField);
            });
        }
    }

	/** Ends the current edit operation and discards changes. 
	*/
    public cancelEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.cancelEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.cancelEdit();
            });
        }
    }

	/** Clears applied filters. 
	*/
    public clearFilters(): void {
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

	/** Clears grouping. 
	*/
    public clearGrouping(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearGrouping();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearGrouping();
            });
        }
    }

	/** Clears selection. 
	*/
    public clearSelection(): void {
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

	/** Clears the Table sorting. 
	*/
    public clearSort(): void {
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

	/** Collapses all rows (in tree mode). 
	*/
    public collapseAllRows(): void {
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

	/** Collapses a group. 
	* @param {string} index. The group's hierarchical index.
	*/
    public collapseGroup(index: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.collapseGroup(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.collapseGroup(index);
            });
        }
    }

	/** Collapses a row (in tree mode). 
	* @param {string | number} rowId. The id of the row to collapse.
	*/
    public collapseRow(rowId: string | number): void {
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

	/** Ends the current edit operation and saves changes. 
	*/
    public endEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endEdit();
            });
        }
    }

	/** Expands all rows (in tree mode). 
	*/
    public expandAllRows(): void {
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

	/** Expands a group. 
	* @param {string} index. The group's hierarchical index.
	*/
    public expandGroup(index: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.expandGroup(index);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.expandGroup(index);
            });
        }
    }

	/** Expands a row (in tree mode). 
	* @param {string | number} rowId. The id of the row to expand.
	*/
    public expandRow(rowId: string | number): void {
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

	/** Exports the Table's data. 
	* @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
	* @param {string} fileName?. The name of the file to export to
	* @param {boolean} exportFiltered?. If set to true, exports only filtered records
	* @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
	* @returns {any}
  */
	public async exportData(dataFormat:string, fileName?:string, exportFiltered?:boolean, callback?:Function) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.exportData(dataFormat, fileName, exportFiltered, callback);
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
	public async getSelection() : Promise<any> {
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

	/** Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState. 
	* @returns {any}
  */
	public async getState() : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getState();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Returns the value of a cell. 
	* @param {string | number} row. The id of the cell's row.
	* @param {string} dataField. The dataField of the cell's column.
	* @returns {any}
  */
	public async getValue(row:string | number, dataField:string) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getValue(row, dataField);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property. 
	* @param {any} state?. An object returned by one of the methods <strong>getState</strong> or <strong>saveState</strong>. If a state is not passed, the method tries to load the state from the browser's localStorage.
	*/
    public loadState(state?: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.loadState(state);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.loadState(state);
            });
        }
    }

	/** Navigates to a page. 
	* @param {number} pageIndex. The zero-based page index to navigate to.
	*/
    public navigateTo(pageIndex: number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.navigateTo(pageIndex);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.navigateTo(pageIndex);
            });
        }
    }

	/** Refreshes the table. 
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

	/** Removes filters applied to a specific column. 
	* @param {string} dataField. The column's data field.
	*/
    public removeFilter(dataField: string): void {
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

	/** Removes grouping by a column. 
	* @param {string} dataField. The column's data field.
	*/
    public removeGroup(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeGroup(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeGroup(dataField);
            });
        }
    }

	/** Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the stateSettings property. 
	* @returns {any}
  */
	public async saveState() : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.saveState();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Selects one or more rows. 
	* @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to select.
	*/
    public select(rowId: string | number | (string | number)[]): void {
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

	/** Sets the value of a cell. 
	* @param {string | number} row. The id of the cell's row.
	* @param {string} dataField. The dataField of the cell's column.
	* @param {any} value. The new value of the cell.
	*/
    public setValue(row: string | number, dataField: string, value: any): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.setValue(row, dataField, value);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.setValue(row, dataField, value);
            });
        }
    }

	/** Sorts the Table by a column. 
	* @param {string} columnDataField. Column field name.
	* @param {string} sortOrder?. Sort order. Possible values: 'asc' (ascending), 'desc' (descending), and null (removes sorting by column). If not provided, toggles the sorting.
	*/
    public sortBy(columnDataField: string, sortOrder?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.sortBy(columnDataField, sortOrder);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.sortBy(columnDataField, sortOrder);
            });
        }
    }

	/** Unselects one or more rows. 
	* @param {string | number | (string | number)[]} rowId. The id of the row (or an array of row ids) to unselect.
	*/
    public unselect(rowId: string | number | (string | number)[]): void {
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
			React.createElement("smart-table", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Table;
