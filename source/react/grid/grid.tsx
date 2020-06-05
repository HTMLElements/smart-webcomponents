import React from "react";
import { GridProperties } from "./../../index";
import { GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnSortOrder, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridFilteringFilterRowApplyMode, GridGroupingExpandMode, GridGroupingRenderMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridColumnMenu, GridColumnMenuDataSource, GridCommand, GridColumnGroup, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridSummaryRow, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting} from './../../index';
import { DataAdapter, Chart } from './../../index';
export { GridProperties } from "./../../index";
export { GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnSortOrder, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridFilteringFilterRowApplyMode, GridGroupingExpandMode, GridGroupingRenderMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridColumnMenu, GridColumnMenuDataSource, GridCommand, GridColumnGroup, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingSummaryRow, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridSummaryRow, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting} from './../../index';
export { DataAdapter, Chart } from './../../index';

interface IWindow { Smart: any; }
declare const window: IWindow;
export const Smart = window.Smart;
export interface GridProps extends GridProperties {
    className?: string;
    style?: React.CSSProperties;

	onBeginEdit?: ((event?: Event) => void) | undefined;
	onChange?: ((event?: Event) => void) | undefined;
	onColumnClick?: ((event?: Event) => void) | undefined;
	onColumnDoubleClick?: ((event?: Event) => void) | undefined;
	onColumnResize?: ((event?: Event) => void) | undefined;
	onColumnDragStart?: ((event?: Event) => void) | undefined;
	onColumnDragging?: ((event?: Event) => void) | undefined;
	onColumnDragEnd?: ((event?: Event) => void) | undefined;
	onRowDragStart?: ((event?: Event) => void) | undefined;
	onRowDragging?: ((event?: Event) => void) | undefined;
	onRowDragEnd?: ((event?: Event) => void) | undefined;
	onRowExpand?: ((event?: Event) => void) | undefined;
	onRowCollapse?: ((event?: Event) => void) | undefined;
	onRowClick?: ((event?: Event) => void) | undefined;
	onRowDoubleClick?: ((event?: Event) => void) | undefined;
	onRowResize?: ((event?: Event) => void) | undefined;
	onCellClick?: ((event?: Event) => void) | undefined;
	onCellDoubleClick?: ((event?: Event) => void) | undefined;
	onEndEdit?: ((event?: Event) => void) | undefined;
	onFilter?: ((event?: Event) => void) | undefined;
	onResize?: ((event?: Event) => void) | undefined;
	onRowTap?: ((event?: Event) => void) | undefined;
	onCellTap?: ((event?: Event) => void) | undefined;
	onPage?: ((event?: Event) => void) | undefined;
	onSort?: ((event?: Event) => void) | undefined;
	onScrollBottomReached?: ((event?: Event) => void) | undefined;
	onScrollTopReached?: ((event?: Event) => void) | undefined;

}
/**
 Data Grid UI Component that covers everything from paging, sorting, grouping, filtering, and editing to row and column virtualization, right-to-left layout, export to Excel and PDF and Accessibility.
*/
export class Grid extends React.Component<React.HTMLProps<Element> & GridProps, any> {   
	private _id: string;
	private nativeElement: any;
	private componentRef: any;

	// Gets the id of the React component.
	get id() {
		if (!this._id) {
			this._id =  'Grid' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}

		return this._id;
	}
	/** An object containing settings related to the grid's appearance.
	*	Property type: GridAppearance
	*/
	get appearance(): GridAppearance  {
		return this.nativeElement ? this.nativeElement.appearance : undefined;
	}
	set appearance(value: GridAppearance) {
		if (this.nativeElement) {
			this.nativeElement.appearance = value;
		}
	}

	/** An object containing settings related to the grid's behavior.
	*	Property type: GridBehavior
	*/
	get behavior(): GridBehavior  {
		return this.nativeElement ? this.nativeElement.behavior : undefined;
	}
	set behavior(value: GridBehavior) {
		if (this.nativeElement) {
			this.nativeElement.behavior = value;
		}
	}

	/** An object containing settings related to the grid's layout.
	*	Property type: GridLayout
	*/
	get layout(): GridLayout  {
		return this.nativeElement ? this.nativeElement.layout : undefined;
	}
	set layout(value: GridLayout) {
		if (this.nativeElement) {
			this.nativeElement.layout = value;
		}
	}

	/** The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations..
	*	Property type: GridClipboard
	*/
	get clipboard(): GridClipboard  {
		return this.nativeElement ? this.nativeElement.clipboard : undefined;
	}
	set clipboard(value: GridClipboard) {
		if (this.nativeElement) {
			this.nativeElement.clipboard = value;
		}
	}

	/** The columns property is used to describe all columns displayed in the grid. 
	*	Property type: {label: string, dataField: string}[] | string[] | number | GridColumn[]
	*/
	get columns(): {label: string, dataField: string}[] | string[] | number | GridColumn[]  {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: {label: string, dataField: string}[] | string[] | number | GridColumn[]) {
		if (this.nativeElement) {
			this.nativeElement.columns = value;
		}
	}

	/** Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column.
	*	Property type: GridColumnMenu
	*/
	get columnMenu(): GridColumnMenu  {
		return this.nativeElement ? this.nativeElement.columnMenu : undefined;
	}
	set columnMenu(value: GridColumnMenu) {
		if (this.nativeElement) {
			this.nativeElement.columnMenu = value;
		}
	}

	/** Describes the settings of the column groups.
	*	Property type: GridColumnGroup[]
	*/
	get columnGroups(): GridColumnGroup[]  {
		return this.nativeElement ? this.nativeElement.columnGroups : undefined;
	}
	set columnGroups(value: GridColumnGroup[]) {
		if (this.nativeElement) {
			this.nativeElement.columnGroups = value;
		}
	}

	/** Sets the Grid Charting Data Visualization.
	*	Property type: GridCharting
	*/
	get charting(): GridCharting  {
		return this.nativeElement ? this.nativeElement.charting : undefined;
	}
	set charting(value: GridCharting) {
		if (this.nativeElement) {
			this.nativeElement.charting = value;
		}
	}

	/** Sets the TreeGrid checkboxes.
	*	Property type: GridCheckBoxes
	*/
	get checkBoxes(): GridCheckBoxes  {
		return this.nativeElement ? this.nativeElement.checkBoxes : undefined;
	}
	set checkBoxes(value: GridCheckBoxes) {
		if (this.nativeElement) {
			this.nativeElement.checkBoxes = value;
		}
	}

	/** Sets the Grid Data Export options.
	*	Property type: GridDataExport
	*/
	get dataExport(): GridDataExport  {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value: GridDataExport) {
		if (this.nativeElement) {
			this.nativeElement.dataExport = value;
		}
	}

	/** Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter.
	*	Property type: DataAdapter
	*/
	get dataSource(): DataAdapter  {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: DataAdapter) {
		if (this.nativeElement) {
			this.nativeElement.dataSource = value;
		}
	}

	/** Describes the grid's editing settings.
	*	Property type: GridEditing
	*/
	get editing(): GridEditing  {
		return this.nativeElement ? this.nativeElement.editing : undefined;
	}
	set editing(value: GridEditing) {
		if (this.nativeElement) {
			this.nativeElement.editing = value;
		}
	}

	/** Describes the grid's filtering settings.
	*	Property type: GridFiltering
	*/
	get filtering(): GridFiltering  {
		return this.nativeElement ? this.nativeElement.filtering : undefined;
	}
	set filtering(value: GridFiltering) {
		if (this.nativeElement) {
			this.nativeElement.filtering = value;
		}
	}

	/** Describes the grid's grouping settings.
	*	Property type: GridGrouping
	*/
	get grouping(): GridGrouping  {
		return this.nativeElement ? this.nativeElement.grouping : undefined;
	}
	set grouping(value: GridGrouping) {
		if (this.nativeElement) {
			this.nativeElement.grouping = value;
		}
	}

	/** Sets the messages values.
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

	/** Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings.
	*	Property type: {(cell: GridCell): void}
	*/
	get onCellValue(): {(cell: GridCell): void}  {
		return this.nativeElement ? this.nativeElement.onCellValue : undefined;
	}
	set onCellValue(value: {(cell: GridCell): void}) {
		if (this.nativeElement) {
			this.nativeElement.onCellValue = value;
		}
	}

	/** Callback function() called when the grid has been rendered.
	*	Property type: {(cell: GridCell, oldValue: any, value: any, confirm: {(commit: boolean): void}): void}
	*/
	get onCellUpdate(): {(cell: GridCell, oldValue: any, value: any, confirm: {(commit: boolean): void}): void}  {
		return this.nativeElement ? this.nativeElement.onCellUpdate : undefined;
	}
	set onCellUpdate(value: {(cell: GridCell, oldValue: any, value: any, confirm: {(commit: boolean): void}): void}) {
		if (this.nativeElement) {
			this.nativeElement.onCellUpdate = value;
		}
	}

	/** Describes the paging settings.
	*	Property type: {(cell: GridCell): void}
	*/
	get onCellRender(): {(cell: GridCell): void}  {
		return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	}
	set onCellRender(value: {(cell: GridCell): void}) {
		if (this.nativeElement) {
			this.nativeElement.onCellRender = value;
		}
	}

	/** Describes the pager settings.
	*	Property type: {(): void}
	*/
	get onBeforeInit(): {(): void}  {
		return this.nativeElement ? this.nativeElement.onBeforeInit : undefined;
	}
	set onBeforeInit(value: {(): void}) {
		if (this.nativeElement) {
			this.nativeElement.onBeforeInit = value;
		}
	}

	/** Sets the row details.
	*	Property type: {(): void}
	*/
	get onInit(): {(): void}  {
		return this.nativeElement ? this.nativeElement.onInit : undefined;
	}
	set onInit(value: {(): void}) {
		if (this.nativeElement) {
			this.nativeElement.onInit = value;
		}
	}

	/** Sets the scroll mode settings.
	*	Property type: {(): void}
	*/
	get onAfterInit(): {(): void}  {
		return this.nativeElement ? this.nativeElement.onAfterInit : undefined;
	}
	set onAfterInit(value: {(): void}) {
		if (this.nativeElement) {
			this.nativeElement.onAfterInit = value;
		}
	}

	/** Describes the column header settings.
	*	Property type: any
	*/
	get onChartInit(): any  {
		return this.nativeElement ? this.nativeElement.onChartInit : undefined;
	}
	set onChartInit(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onChartInit = value;
		}
	}

	/** Describes the summary row settings.
	*	Property type: any
	*/
	get onRender(): any  {
		return this.nativeElement ? this.nativeElement.onRender : undefined;
	}
	set onRender(value: any) {
		if (this.nativeElement) {
			this.nativeElement.onRender = value;
		}
	}

	/** Describes the settings for the group header.
	*	Property type: {(event: KeyboardEvent): void}
	*/
	get onKey(): {(event: KeyboardEvent): void}  {
		return this.nativeElement ? this.nativeElement.onKey : undefined;
	}
	set onKey(value: {(event: KeyboardEvent): void}) {
		if (this.nativeElement) {
			this.nativeElement.onKey = value;
		}
	}

	/** Describes the header settings of the grid.
	*	Property type: {(index: number, row: GridRow): void}
	*/
	get onRowInit(): {(index: number, row: GridRow): void}  {
		return this.nativeElement ? this.nativeElement.onRowInit : undefined;
	}
	set onRowInit(value: {(index: number, row: GridRow): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowInit = value;
		}
	}

	/** Describes the footer settings of the grid.
	*	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
	*/
	get onRowDetailInit(): {(index: number, row: GridRow, details: HTMLElement): void}  {
		return this.nativeElement ? this.nativeElement.onRowDetailInit : undefined;
	}
	set onRowDetailInit(value: {(index: number, row: GridRow, details: HTMLElement): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowDetailInit = value;
		}
	}

	/** The rows property is used to describe all rows displayed in the grid.
	*	Property type: {(index: number, row: GridRow, details: HTMLElement): void}
	*/
	get onRowDetailUpdated(): {(index: number, row: GridRow, details: HTMLElement): void}  {
		return this.nativeElement ? this.nativeElement.onRowDetailUpdated : undefined;
	}
	set onRowDetailUpdated(value: {(index: number, row: GridRow, details: HTMLElement): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowDetailUpdated = value;
		}
	}

	/** Describes the selection settings.
	*	Property type: {(index: number, row: GridRow): void}
	*/
	get onRowInserted(): {(index: number, row: GridRow): void}  {
		return this.nativeElement ? this.nativeElement.onRowInserted : undefined;
	}
	set onRowInserted(value: {(index: number, row: GridRow): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowInserted = value;
		}
	}

	/** Describes sorting settings.
	*	Property type: {(index: number, row: GridRow): void}
	*/
	get onRowRemoved(): {(index: number, row: GridRow): void}  {
		return this.nativeElement ? this.nativeElement.onRowRemoved : undefined;
	}
	set onRowRemoved(value: {(index: number, row: GridRow): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowRemoved = value;
		}
	}

	/** undefined
	*	Property type: {(index: number, row: GridRow, oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}
	*/
	get onRowUpdate(): {(index: number, row: GridRow, oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}  {
		return this.nativeElement ? this.nativeElement.onRowUpdate : undefined;
	}
	set onRowUpdate(value: {(index: number, row: GridRow, oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowUpdate = value;
		}
	}

	/** undefined
	*	Property type: {(index: number, row: GridRow): void}
	*/
	get onRowUpdated(): {(index: number, row: GridRow): void}  {
		return this.nativeElement ? this.nativeElement.onRowUpdated : undefined;
	}
	set onRowUpdated(value: {(index: number, row: GridRow): void}) {
		if (this.nativeElement) {
			this.nativeElement.onRowUpdated = value;
		}
	}

	/** undefined
	*	Property type: {(index: number, column: GridColumn): void}
	*/
	get onColumnInit(): {(index: number, column: GridColumn): void}  {
		return this.nativeElement ? this.nativeElement.onColumnInit : undefined;
	}
	set onColumnInit(value: {(index: number, column: GridColumn): void}) {
		if (this.nativeElement) {
			this.nativeElement.onColumnInit = value;
		}
	}

	/** undefined
	*	Property type: {(index: number, column: GridColumn): void}
	*/
	get onColumnInserted(): {(index: number, column: GridColumn): void}  {
		return this.nativeElement ? this.nativeElement.onColumnInserted : undefined;
	}
	set onColumnInserted(value: {(index: number, column: GridColumn): void}) {
		if (this.nativeElement) {
			this.nativeElement.onColumnInserted = value;
		}
	}

	/** undefined
	*	Property type: {(index: number, column: GridColumn): void}
	*/
	get onColumnRemoved(): {(index: number, column: GridColumn): void}  {
		return this.nativeElement ? this.nativeElement.onColumnRemoved : undefined;
	}
	set onColumnRemoved(value: {(index: number, column: GridColumn): void}) {
		if (this.nativeElement) {
			this.nativeElement.onColumnRemoved = value;
		}
	}

	/** undefined
	*	Property type: {(index: number, column: GridColumn): void}
	*/
	get onColumnUpdated(): {(index: number, column: GridColumn): void}  {
		return this.nativeElement ? this.nativeElement.onColumnUpdated : undefined;
	}
	set onColumnUpdated(value: {(index: number, column: GridColumn): void}) {
		if (this.nativeElement) {
			this.nativeElement.onColumnUpdated = value;
		}
	}

	/** undefined
	*	Property type: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void}
	*/
	get onCommand(): {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void}  {
		return this.nativeElement ? this.nativeElement.onCommand : undefined;
	}
	set onCommand(value: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void}) {
		if (this.nativeElement) {
			this.nativeElement.onCommand = value;
		}
	}

	/** undefined
	*	Property type: GridPaging
	*/
	get paging(): GridPaging  {
		return this.nativeElement ? this.nativeElement.paging : undefined;
	}
	set paging(value: GridPaging) {
		if (this.nativeElement) {
			this.nativeElement.paging = value;
		}
	}

	/** undefined
	*	Property type: GridPager
	*/
	get pager(): GridPager  {
		return this.nativeElement ? this.nativeElement.pager : undefined;
	}
	set pager(value: GridPager) {
		if (this.nativeElement) {
			this.nativeElement.pager = value;
		}
	}

	/** undefined
	*	Property type: GridRowDetail
	*/
	get rowDetail(): GridRowDetail  {
		return this.nativeElement ? this.nativeElement.rowDetail : undefined;
	}
	set rowDetail(value: GridRowDetail) {
		if (this.nativeElement) {
			this.nativeElement.rowDetail = value;
		}
	}

	/** undefined
	*	Property type: Scrolling
	*/
	get scrolling(): Scrolling  {
		return this.nativeElement ? this.nativeElement.scrolling : undefined;
	}
	set scrolling(value: Scrolling) {
		if (this.nativeElement) {
			this.nativeElement.scrolling = value;
		}
	}

	/** undefined
	*	Property type: GridColumnHeader
	*/
	get columnHeader(): GridColumnHeader  {
		return this.nativeElement ? this.nativeElement.columnHeader : undefined;
	}
	set columnHeader(value: GridColumnHeader) {
		if (this.nativeElement) {
			this.nativeElement.columnHeader = value;
		}
	}

	/** undefined
	*	Property type: GridSummaryRow
	*/
	get summaryRow(): GridSummaryRow  {
		return this.nativeElement ? this.nativeElement.summaryRow : undefined;
	}
	set summaryRow(value: GridSummaryRow) {
		if (this.nativeElement) {
			this.nativeElement.summaryRow = value;
		}
	}

	/** undefined
	*	Property type: GridGroupHeader
	*/
	get groupHeader(): GridGroupHeader  {
		return this.nativeElement ? this.nativeElement.groupHeader : undefined;
	}
	set groupHeader(value: GridGroupHeader) {
		if (this.nativeElement) {
			this.nativeElement.groupHeader = value;
		}
	}

	/** undefined
	*	Property type: GridHeader
	*/
	get header(): GridHeader  {
		return this.nativeElement ? this.nativeElement.header : undefined;
	}
	set header(value: GridHeader) {
		if (this.nativeElement) {
			this.nativeElement.header = value;
		}
	}

	/** undefined
	*	Property type: GridFooter
	*/
	get footer(): GridFooter  {
		return this.nativeElement ? this.nativeElement.footer : undefined;
	}
	set footer(value: GridFooter) {
		if (this.nativeElement) {
			this.nativeElement.footer = value;
		}
	}

	/** undefined
	*	Property type: GridRow[]
	*/
	get rows(): GridRow[]  {
		return this.nativeElement ? this.nativeElement.rows : undefined;
	}
	set rows(value: GridRow[]) {
		if (this.nativeElement) {
			this.nativeElement.rows = value;
		}
	}

	/** undefined
	*	Property type: GridSelection
	*/
	get selection(): GridSelection  {
		return this.nativeElement ? this.nativeElement.selection : undefined;
	}
	set selection(value: GridSelection) {
		if (this.nativeElement) {
			this.nativeElement.selection = value;
		}
	}

	/** undefined
	*	Property type: GridSorting
	*/
	get sorting(): GridSorting  {
		return this.nativeElement ? this.nativeElement.sorting : undefined;
	}
	set sorting(value: GridSorting) {
		if (this.nativeElement) {
			this.nativeElement.sorting = value;
		}
	}


	// Gets the properties of the React component.
	get properties(): string[] {
		return ["appearance","behavior","layout","clipboard","columns","columnMenu","columnGroups","charting","checkBoxes","dataExport","dataSource","editing","filtering","grouping","messages","onCellValue","onCellUpdate","onCellRender","onBeforeInit","onInit","onAfterInit","onChartInit","onRender","onKey","onRowInit","onRowDetailInit","onRowDetailUpdated","onRowInserted","onRowRemoved","onRowUpdate","onRowUpdated","onColumnInit","onColumnInserted","onColumnRemoved","onColumnUpdated","onCommand","paging","pager","rowDetail","scrolling","columnHeader","summaryRow","groupHeader","header","footer","rows","selection","sorting"];
	}
	/**  This event is triggered, when the edit begins.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
	*   row - The edited row.
	*   column - The edited column.
	*   cell - The edited cell.
	*/
	onBeginEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends. 
	*  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
	*   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
	*   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onChange?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user clicks on the header of a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	originalEvent)
	*   column - The clicked column.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onColumnClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user double clicks on the header of a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	originalEvent)
	*   column - The double-clicked column.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onColumnDoubleClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user resized a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	oldWidth, 	width)
	*   column - The resized column.
	*   oldWidth - The old width of the column.
	*   width - The new width of the column.
	*/
	onColumnResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user starts a column drag.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	index, 	originalEvent)
	*   column - The column.
	*   index - The column's index
	*   originalEvent - The origianl Event object.
	*/
	onColumnDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user drags a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	index, 	data, 	originalEvent)
	*   column - The column.
	*   index - The column's index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	onColumnDragging?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user drags a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	index, 	newIndex, 	data, 	originalEvent)
	*   column - The column.
	*   index - The column's index
	*   newIndex - The column's new index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	onColumnDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user starts a row drag.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	index, 	originalEvent)
	*   row - The row.
	*   index - The row's index
	*   originalEvent - The origianl Event object.
	*/
	onRowDragStart?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user drags a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	index, 	data, 	originalEvent)
	*   row - The row.
	*   index - The row's index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	onRowDragging?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user drags a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	index, 	newIndex, 	data, 	originalEvent)
	*   row - The row.
	*   index - The row's index
	*   newIndex - The row's new index
	*   data - The dragging object. data.feedback and data.feedbackLine are HTML Elements which are displayed while the user drags. The object has error(), success() and data() methods which you can call to set the feedback state.
	*   originalEvent - The origianl Event object.
	*/
	onRowDragEnd?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The expanded row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onRowExpand?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The collapsed row. 
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onRowCollapse?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user clicks on a row of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The clicked row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onRowClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user double clicks on a row of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The double-clicked row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onRowDoubleClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user resized a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	oldHeight, 	height)
	*   row - The resized row.
	*   oldHeight - The old height of the row.
	*   height - The new height of the row.
	*/
	onRowResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user clicks on a cell of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
	*   cell - The clicked cell.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onCellClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user double clicks on a cell of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
	*   cell - The double-clicked cell. 
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onCellDoubleClick?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the edit ends.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
	*   row - The edited row.
	*   column - The edited column.
	*   cell - The edited cell.
	*/
	onEndEdit?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when a filter is added or removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
	*   columns - Array of columns.
	*   data - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'
	*/
	onFilter?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the grid is resized.
	*  @param event. The custom event. 	*/
	onResize?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user touches and holds on the row for at least 300ms.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The tapped row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onRowTap?: ((event?: Event) => void) | undefined
	/**  This event is triggered when the user touches and holds on the cell for at least 300ms.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
	*   cell - The tapped row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	onCellTap?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user changes the pages.
	*  @param event. The custom event. 	*/
	onPage?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when a sorting column is added or removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
	*   columns - Array of columns.
	*   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
	*/
	onSort?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user reaches the bottom of the grid.
	*  @param event. The custom event. 	*/
	onScrollBottomReached?: ((event?: Event) => void) | undefined
	/**  This event is triggered, when the user reaches the top of the grid.
	*  @param event. The custom event. 	*/
	onScrollTopReached?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is created.
	*  @param event. The custom event. 	*/
	onCreate?: ((event?: Event) => void) | undefined
	/**  This event occurs, when the React component is completely rendered.
	*  @param event. The custom event. 	*/
	onReady?: ((event?: Event) => void) | undefined

	// Gets the events of the React component.
	get events(): string[] {
		return ["onBeginEdit","onChange","onColumnClick","onColumnDoubleClick","onColumnResize","onColumnDragStart","onColumnDragging","onColumnDragEnd","onRowDragStart","onRowDragging","onRowDragEnd","onRowExpand","onRowCollapse","onRowClick","onRowDoubleClick","onRowResize","onCellClick","onCellDoubleClick","onEndEdit","onFilter","onResize","onRowTap","onCellTap","onPage","onSort","onScrollBottomReached","onScrollTopReached","onCreate","onReady"];
	}
	/** Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved. 
	* @param {string} position?. 'near' or 'far'
	* @returns {boolean}
  */
	public async addNewRow(position?:string) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.addNewRow(position);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited. 
	* @param {number} count. The count of unbound rows.
	* @param {string} position?. 'near' or 'far'
	* @returns {boolean}
  */
	public async addUnboundRow(count:number, position?:string) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.addUnboundRow(count, position);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Adds a filter to a column. This method will apply a filter to the Grid data. 
	* @param {string} dataField. column bound data field
	* @param {string} filter. Filter expression like: 'startsWith B'
	* @param {boolean} refreshFilters?. 
	*/
    public addFilter(dataField: string, filter: string, refreshFilters?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.addFilter(dataField, filter, refreshFilters);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.addFilter(dataField, filter, refreshFilters);
            });
        }
    }

	/** Auto-sizes grid rows. This method will update the height of all Grid rows. 
	*/
    public autoSizeRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoSizeRows();
            });
        }
    }

	/** Auto-sizes grid columns. This method will update the width of all Grid columns. 
	*/
    public autoSizeColumns(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.autoSizeColumns();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.autoSizeColumns();
            });
        }
    }

	/** Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once. 
	*/
    public beginUpdate(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.beginUpdate();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.beginUpdate();
            });
        }
    }

	/** Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field
	* @returns {boolean}
  */
	public async beginEdit(rowId:string | number, dataField?:string) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.beginEdit(rowId, dataField);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Clears all filters. Refreshes the view and updates all filter input components. 
	*/
    public clearFilter(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearFilter();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearFilter();
            });
        }
    }

	/** Clears the selection that user have made. All row, cell and column selection highlights will be removed. 
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

	/** Cancels the editing. This method closes the cell editor and cancels the changes. 
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

	/** Checks a TreeGrid row. This method updates the row's check-box. 
	* @param {string | number} rowId. row bound id
	*/
    public checkRow(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.checkRow(rowId);
            });
        }
    }

	/** Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows. 
	*/
    public checkAllRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.checkAllRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.checkAllRows();
            });
        }
    }

	/** Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view. 
	*/
    public clearRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.clearRows();
            });
        }
    }

	/** Closes the column drop-down menu. 
	*/
    public closeMenu(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.closeMenu();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.closeMenu();
            });
        }
    }

	/** Collapses a TreeGrid or Grouping row. 
	* @param {string | number} rowId. row bound id
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

	/** Collapses all TreeGrid or Grouping rows. 
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

	/** Creates a Chart, when charting is enabled. 
	* @param {string} type. Chart's type
	* @param {any[]} dataSource?. Chart's data source
	*/
    public createChart(type: string, dataSource?: any[]): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.createChart(type, dataSource);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.createChart(type, dataSource);
            });
        }
    }

	/** Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved. 
	* @param {string | number} rowId. row bound id
	*/
    public deleteRow(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.deleteRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.deleteRow(rowId);
            });
        }
    }

	/** Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field
	* @returns {boolean}
  */
	public async ensureVisible(rowId:string | number, dataField?:string) : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.ensureVisible(rowId, dataField);
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Ends the editing. This method confirms all changes and closes the opened cell editor(s). 
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

	/** Ends the update operation. This method will resume the rendering and will refresh the Grid. 
	* @param {boolean} refresh?. The flag that control the calls of the refresh method.
	*/
    public endUpdate(refresh?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.endUpdate(refresh);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.endUpdate(refresh);
            });
        }
    }

	/** Expands a TreeGrid or Grouping row. 
	* @param {string | number} rowId. row bound id
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

	/** Expands all TreeGrid or Grouping rows. 
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

	/** Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property. 
	* @param {string} Dataformat. 'xlsx', 'pdf', 'json', 'xml', 'csv', 'tsv', 'html', 'png', 'jpeg'.
	*/
    public exportData(Dataformat: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.exportData(Dataformat);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.exportData(Dataformat);
            });
        }
    }

	/** Gets an array of columns with applied sorting. 
	* @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
	public async getSortedColumns() : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getSortedColumns();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Gets the selection. 
	* @returns {any}
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

	/** Gets an array of columns with applied filters. 
	* @returns {any}
  */
	public async getFilteredColumns() : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getFilteredColumns();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Gets an array of rows, which are visible and match the applied filter. 
	* @returns {any}
  */
	public async getVisibleRows() : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getVisibleRows();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode. 
	* @returns {any}
  */
	public async getViewRows() : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getViewRows();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Gets the changes from the batch edit. 
	* @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
	public async getBatchEditChanges() : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.getBatchEditChanges();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Gets whether a column's drop-down menu is opened. 
	* @returns {boolean}
  */
	public async hasMenu() : Promise<any> {
		const getResultOnRender = () => {
            return new Promise(resolve => {
                this.nativeElement.whenRendered(() => {
                    const result = this.nativeElement.hasMenu();
                    resolve(result)
                });
            });
        };
        const result = await getResultOnRender();

        return result;
    }

	/** Hides the Details of a Row, when row details are enabled. 
	* @param {string | number} rowId. row bound id
	*/
    public hideDetail(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.hideDetail(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.hideDetail(rowId);
            });
        }
    }

	/** Opens a column drop-down menu. 
	* @param {string} dataField. column bound data field
	*/
    public openMenu(dataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.openMenu(dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.openMenu(dataField);
            });
        }
    }

	/** Prints the Grid data. The method uses the options of the dataExport property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the dataExport property. 
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

	/** Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout. 
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

	/** Refreshes the grid with the current property values. This method will refresh the Grid layout. 
	*/
    public refreshView(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.refreshView();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.refreshView();
            });
        }
    }

	/** Refreshes the grid cells in view. The method is useful for live-updates of cell values. 
	* @param {string} dataField. column bound data field
	* @param {boolean} refreshFilters?. 
	*/
    public removeFilter(dataField: string, refreshFilters?: boolean): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeFilter(dataField, refreshFilters);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.removeFilter(dataField, refreshFilters);
            });
        }
    }

	/** Removes a column filter.  
	*/
    public revertBatchEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.revertBatchEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.revertBatchEdit();
            });
        }
    }

	/** Reverts the batch edit changes. This method cancels all changes made by the end-user. 
	*/
    public saveBatchEdit(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.saveBatchEdit();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.saveBatchEdit();
            });
        }
    }

	/** Saves the batch edit changes. This method confirms the editing changes made by the end-user. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field
	*/
    public select(rowId: string | number, dataField?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(rowId, dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.select(rowId, dataField);
            });
        }
    }

	/** Selects a row, cell or column. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField. column bound data field
	* @param {string | number} endRowId. row bound id
	* @param {string} endDataField. column bound data field
	*/
    public selectRange(rowId: string | number, dataField: string, endRowId: string | number, endDataField: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.selectRange(rowId, dataField, endRowId, endDataField);
            });
        }
    }

	/** Selects a range of rows, cells or columns. The result of the method depends on the selection configuration of the Grid. 
	* @param {string | number} rowId. row bound id
	*/
    public showDetail(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.showDetail(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.showDetail(rowId);
            });
        }
    }

	/** Shows the Details of a Row, when row details are enabled. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field
	*/
    public unselect(rowId: string | number, dataField?: string): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(rowId, dataField);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.unselect(rowId, dataField);
            });
        }
    }

	/** Unselects a row, cell or column. 
	* @param {string | number} rowId. row bound id
	*/
    public uncheckRow(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uncheckRow(rowId);
            });
        }
    }

	/** Unchecks a TreeGrid row. Sets its check-box to false. 
	*/
    public uncheckAllRows(): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.uncheckAllRows();
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.uncheckAllRows();
            });
        }
    }

	/** Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false. 
	* @param {string | number} rowId. row bound id
	*/
    public toggleRow(rowId: string | number): void {
        if (this.nativeElement.isRendered) {
            this.nativeElement.toggleRow(rowId);
        }
        else
        {
            this.nativeElement.whenRendered(() => {
                this.nativeElement.toggleRow(rowId);
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

		for(let i = 0; i < that.events.length; i++){
			const eventName = that.events[i];

			that.nativeElement.removeEventListener(eventName.substring(2).toLowerCase(), that[eventName]);
		}
	}

	render() {
		return (
			React.createElement("smart-grid", { ref: this.componentRef }, this.props.children)
		)
	}
}

export default Grid;
