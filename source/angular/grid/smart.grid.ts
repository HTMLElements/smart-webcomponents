import { Grid } from './../index';
import { GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnSortOrder, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridFilteringFilterRowApplyMode, GridGroupingExpandMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridColumnMenu, GridColumnMenuDataSource, GridCommand, GridColumnGroup, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingGroupPanel, GridGroupingSummaryRow, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting, ElementRenderMode} from './../index';
import { DataAdapter, Chart } from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { GridResizeMode, GridClipboardAutoFillMode, HorizontalAlignment, VerticalAlignment, Position, GridColumnSortOrder, GridEditingAction, LayoutPosition, GridCommandDisplayMode, GridEditingMode, GridFilteringFilterRowApplyMode, GridGroupingExpandMode, GridPagerAutoEllipsis, Scrolling, GridSelectionMode, GridSelectionAction, GridSelectionCheckBoxesSelectAllMode, GridSortingMode, GridAppearance, GridBehavior, GridLayout, GridClipboard, GridColumn, GridColumnMenu, GridColumnMenuDataSource, GridCommand, GridColumnGroup, GridCharting, Dialog, GridCheckBoxes, GridDataExport, GridEditing, GridEditingCommandKeys, GridCommandKey, GridEditingCommandBar, GridEditingCommandBarDataSource, GridEditingCommandColumn, GridEditingCommandColumnDataSource, GridEditingAddNewRow, GridFiltering, GridFilteringFilterRow, GridFilteringFilterMenu, GridFilteringFilterBuilder, GridGrouping, GridGroupingGroupBar, GridGroupingGroupPanel, GridGroupingSummaryRow, GridPaging, GridPagingSpinner, GridPager, GridPagerPageSizeSelector, GridPagerSummary, GridPagerNavigationButtons, GridPagerNavigationButtonsPrevNextButtons, GridPagerNavigationButtonsFirstLastButtons, GridPagerNavigationButtonsLabels, GridPagerNavigationInput, GridPagerPageIndexSelectors, GridRowDetail, GridColumnHeader, GridGroupHeader, GridHeader, GridFooter, GridRow, GridCell, GridSelection, GridSelectionCheckBoxes, GridSorting, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Grid } from './../index';
export { DataAdapter, Chart } from './../index';


@Directive({
	selector: 'smart-grid, [smart-grid]'
})

export class GridComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Grid>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Grid;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Grid;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Grid>document.createElement('smart-grid');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description An object containing settings related to the grid's appearance. */
	@Input()
	get appearance(): GridAppearance {
		return this.nativeElement ? this.nativeElement.appearance : undefined;
	}
	set appearance(value: GridAppearance) {
		this.nativeElement ? this.nativeElement.appearance = value : undefined;
	}

	/** @description An object containing settings related to the grid's behavior. */
	@Input()
	get behavior(): GridBehavior {
		return this.nativeElement ? this.nativeElement.behavior : undefined;
	}
	set behavior(value: GridBehavior) {
		this.nativeElement ? this.nativeElement.behavior = value : undefined;
	}

	/** @description An object containing settings related to the grid's layout. */
	@Input()
	get layout(): GridLayout {
		return this.nativeElement ? this.nativeElement.layout : undefined;
	}
	set layout(value: GridLayout) {
		this.nativeElement ? this.nativeElement.layout = value : undefined;
	}

	/** @description The clipboard property is used to enable/disable clipboard operations with Ctrl+C, Ctrl+X and Ctrl+V keyboard navigations.. */
	@Input()
	get clipboard(): GridClipboard {
		return this.nativeElement ? this.nativeElement.clipboard : undefined;
	}
	set clipboard(value: GridClipboard) {
		this.nativeElement ? this.nativeElement.clipboard = value : undefined;
	}

	/** @description The columns property is used to describe all columns displayed in the grid.  */
	@Input()
	get columns(): {label: string, dataField: string}[] | string[] | number | GridColumn[] {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: {label: string, dataField: string}[] | string[] | number | GridColumn[]) {
		this.nativeElement ? this.nativeElement.columns = value : undefined;
	}

	/** @description Column Menu is the drop-down menu displayed after clicking the column header's drop-down button, which is displayed when you hover the column header. It allows you to customize column settings. For example: Sort, Filter or Group the Grid by the current column. */
	@Input()
	get columnMenu(): GridColumnMenu {
		return this.nativeElement ? this.nativeElement.columnMenu : undefined;
	}
	set columnMenu(value: GridColumnMenu) {
		this.nativeElement ? this.nativeElement.columnMenu = value : undefined;
	}

	/** @description Describes the settings of the column groups. */
	@Input()
	get columnGroups(): GridColumnGroup[] {
		return this.nativeElement ? this.nativeElement.columnGroups : undefined;
	}
	set columnGroups(value: GridColumnGroup[]) {
		this.nativeElement ? this.nativeElement.columnGroups = value : undefined;
	}

	/** @description Sets the Grid Charting Data Visualization. */
	@Input()
	get charting(): GridCharting {
		return this.nativeElement ? this.nativeElement.charting : undefined;
	}
	set charting(value: GridCharting) {
		this.nativeElement ? this.nativeElement.charting = value : undefined;
	}

	/** @description Sets the TreeGrid checkboxes. */
	@Input()
	get checkBoxes(): GridCheckBoxes {
		return this.nativeElement ? this.nativeElement.checkBoxes : undefined;
	}
	set checkBoxes(value: GridCheckBoxes) {
		this.nativeElement ? this.nativeElement.checkBoxes = value : undefined;
	}

	/** @description Sets the Grid Data Export options. */
	@Input()
	get dataExport(): GridDataExport {
		return this.nativeElement ? this.nativeElement.dataExport : undefined;
	}
	set dataExport(value: GridDataExport) {
		this.nativeElement ? this.nativeElement.dataExport = value : undefined;
	}

	/** @description Sets the grid's data source. The value of dataSource can be an instance of JQX.DataAdapter. */
	@Input()
	get dataSource(): DataAdapter {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: DataAdapter) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description Describes the grid's editing settings. */
	@Input()
	get editing(): GridEditing {
		return this.nativeElement ? this.nativeElement.editing : undefined;
	}
	set editing(value: GridEditing) {
		this.nativeElement ? this.nativeElement.editing = value : undefined;
	}

	/** @description Describes the grid's filtering settings. */
	@Input()
	get filtering(): GridFiltering {
		return this.nativeElement ? this.nativeElement.filtering : undefined;
	}
	set filtering(value: GridFiltering) {
		this.nativeElement ? this.nativeElement.filtering = value : undefined;
	}

	/** @description Describes the grid's grouping settings. */
	@Input()
	get grouping(): GridGrouping {
		return this.nativeElement ? this.nativeElement.grouping : undefined;
	}
	set grouping(value: GridGrouping) {
		this.nativeElement ? this.nativeElement.grouping = value : undefined;
	}

	/** @description Sets the messages values. */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description Callback function(chart: JQX.Chart) called when the chart has been initialized. You can use this function to customize the Chart element settings. */
	@Input()
	get onCellValue(): {(cell: GridCell): void} {
		return this.nativeElement ? this.nativeElement.onCellValue : undefined;
	}
	set onCellValue(value: {(cell: GridCell): void}) {
		this.nativeElement ? this.nativeElement.onCellValue = value : undefined;
	}

	/** @description Describes the paging settings. */
	@Input()
	get onCellUpdate(): {(cell: GridCell, oldValue: any, value: any, confirm: {(commit: boolean): void}): void} {
		return this.nativeElement ? this.nativeElement.onCellUpdate : undefined;
	}
	set onCellUpdate(value: {(cell: GridCell, oldValue: any, value: any, confirm: {(commit: boolean): void}): void}) {
		this.nativeElement ? this.nativeElement.onCellUpdate = value : undefined;
	}

	/** @description Describes the pager settings. */
	@Input()
	get onCellRender(): {(cell: GridCell): void} {
		return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	}
	set onCellRender(value: {(cell: GridCell): void}) {
		this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
	}

	/** @description Sets the row details. */
	@Input()
	get onBeforeInit(): {(): void} {
		return this.nativeElement ? this.nativeElement.onBeforeInit : undefined;
	}
	set onBeforeInit(value: {(): void}) {
		this.nativeElement ? this.nativeElement.onBeforeInit = value : undefined;
	}

	/** @description Sets the scroll mode settings. */
	@Input()
	get onInit(): {(): void} {
		return this.nativeElement ? this.nativeElement.onInit : undefined;
	}
	set onInit(value: {(): void}) {
		this.nativeElement ? this.nativeElement.onInit = value : undefined;
	}

	/** @description Describes the column header settings. */
	@Input()
	get onAfterInit(): {(): void} {
		return this.nativeElement ? this.nativeElement.onAfterInit : undefined;
	}
	set onAfterInit(value: {(): void}) {
		this.nativeElement ? this.nativeElement.onAfterInit = value : undefined;
	}

	/** @description Describes the settings for the group header. */
	@Input()
	get onChartInit(): any {
		return this.nativeElement ? this.nativeElement.onChartInit : undefined;
	}
	set onChartInit(value: any) {
		this.nativeElement ? this.nativeElement.onChartInit = value : undefined;
	}

	/** @description Describes the header settings of the grid. */
	@Input()
	get onRender(): {(): void} {
		return this.nativeElement ? this.nativeElement.onRender : undefined;
	}
	set onRender(value: {(): void}) {
		this.nativeElement ? this.nativeElement.onRender = value : undefined;
	}

	/** @description Describes the footer settings of the grid. */
	@Input()
	get onKey(): {(event: KeyboardEvent): void} {
		return this.nativeElement ? this.nativeElement.onKey : undefined;
	}
	set onKey(value: {(event: KeyboardEvent): void}) {
		this.nativeElement ? this.nativeElement.onKey = value : undefined;
	}

	/** @description The rows property is used to describe all rows displayed in the grid. */
	@Input()
	get onRowInit(): {(index: number, row: GridRow): void} {
		return this.nativeElement ? this.nativeElement.onRowInit : undefined;
	}
	set onRowInit(value: {(index: number, row: GridRow): void}) {
		this.nativeElement ? this.nativeElement.onRowInit = value : undefined;
	}

	/** @description Describes the selection settings. */
	@Input()
	get onRowDetailInit(): {(index: number, row: GridRow, details: HTMLElement): void} {
		return this.nativeElement ? this.nativeElement.onRowDetailInit : undefined;
	}
	set onRowDetailInit(value: {(index: number, row: GridRow, details: HTMLElement): void}) {
		this.nativeElement ? this.nativeElement.onRowDetailInit = value : undefined;
	}

	/** @description Describes sorting settings. */
	@Input()
	get onRowDetailUpdated(): {(index: number, row: GridRow, details: HTMLElement): void} {
		return this.nativeElement ? this.nativeElement.onRowDetailUpdated : undefined;
	}
	set onRowDetailUpdated(value: {(index: number, row: GridRow, details: HTMLElement): void}) {
		this.nativeElement ? this.nativeElement.onRowDetailUpdated = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onRowInserted(): {(index: number, row: GridRow): void} {
		return this.nativeElement ? this.nativeElement.onRowInserted : undefined;
	}
	set onRowInserted(value: {(index: number, row: GridRow): void}) {
		this.nativeElement ? this.nativeElement.onRowInserted = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onRowRemoved(): {(index: number, row: GridRow): void} {
		return this.nativeElement ? this.nativeElement.onRowRemoved : undefined;
	}
	set onRowRemoved(value: {(index: number, row: GridRow): void}) {
		this.nativeElement ? this.nativeElement.onRowRemoved = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onRowUpdate(): {(index: number, row: GridRow, oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void} {
		return this.nativeElement ? this.nativeElement.onRowUpdate : undefined;
	}
	set onRowUpdate(value: {(index: number, row: GridRow, oldValues: any[], values: any[], confirm: {(commit: boolean): void}): void}) {
		this.nativeElement ? this.nativeElement.onRowUpdate = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onRowUpdated(): {(index: number, row: GridRow): void} {
		return this.nativeElement ? this.nativeElement.onRowUpdated : undefined;
	}
	set onRowUpdated(value: {(index: number, row: GridRow): void}) {
		this.nativeElement ? this.nativeElement.onRowUpdated = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onColumnInit(): {(index: number, column: GridColumn): void} {
		return this.nativeElement ? this.nativeElement.onColumnInit : undefined;
	}
	set onColumnInit(value: {(index: number, column: GridColumn): void}) {
		this.nativeElement ? this.nativeElement.onColumnInit = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onColumnInserted(): {(index: number, column: GridColumn): void} {
		return this.nativeElement ? this.nativeElement.onColumnInserted : undefined;
	}
	set onColumnInserted(value: {(index: number, column: GridColumn): void}) {
		this.nativeElement ? this.nativeElement.onColumnInserted = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onColumnRemoved(): {(index: number, column: GridColumn): void} {
		return this.nativeElement ? this.nativeElement.onColumnRemoved : undefined;
	}
	set onColumnRemoved(value: {(index: number, column: GridColumn): void}) {
		this.nativeElement ? this.nativeElement.onColumnRemoved = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onColumnUpdated(): {(index: number, column: GridColumn): void} {
		return this.nativeElement ? this.nativeElement.onColumnUpdated : undefined;
	}
	set onColumnUpdated(value: {(index: number, column: GridColumn): void}) {
		this.nativeElement ? this.nativeElement.onColumnUpdated = value : undefined;
	}

	/** @description undefined */
	@Input()
	get onCommand(): {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void} {
		return this.nativeElement ? this.nativeElement.onCommand : undefined;
	}
	set onCommand(value: {(name: string, command: any, details: GridCell, event: Event | KeyboardEvent | PointerEvent, handled: boolean): void}) {
		this.nativeElement ? this.nativeElement.onCommand = value : undefined;
	}

	/** @description undefined */
	@Input()
	get paging(): GridPaging {
		return this.nativeElement ? this.nativeElement.paging : undefined;
	}
	set paging(value: GridPaging) {
		this.nativeElement ? this.nativeElement.paging = value : undefined;
	}

	/** @description undefined */
	@Input()
	get pager(): GridPager {
		return this.nativeElement ? this.nativeElement.pager : undefined;
	}
	set pager(value: GridPager) {
		this.nativeElement ? this.nativeElement.pager = value : undefined;
	}

	/** @description undefined */
	@Input()
	get rowDetail(): GridRowDetail {
		return this.nativeElement ? this.nativeElement.rowDetail : undefined;
	}
	set rowDetail(value: GridRowDetail) {
		this.nativeElement ? this.nativeElement.rowDetail = value : undefined;
	}

	/** @description undefined */
	@Input()
	get scrolling(): Scrolling {
		return this.nativeElement ? this.nativeElement.scrolling : undefined;
	}
	set scrolling(value: Scrolling) {
		this.nativeElement ? this.nativeElement.scrolling = value : undefined;
	}

	/** @description undefined */
	@Input()
	get columnHeader(): GridColumnHeader {
		return this.nativeElement ? this.nativeElement.columnHeader : undefined;
	}
	set columnHeader(value: GridColumnHeader) {
		this.nativeElement ? this.nativeElement.columnHeader = value : undefined;
	}

	/** @description undefined */
	@Input()
	get groupHeader(): GridGroupHeader {
		return this.nativeElement ? this.nativeElement.groupHeader : undefined;
	}
	set groupHeader(value: GridGroupHeader) {
		this.nativeElement ? this.nativeElement.groupHeader = value : undefined;
	}

	/** @description undefined */
	@Input()
	get header(): GridHeader {
		return this.nativeElement ? this.nativeElement.header : undefined;
	}
	set header(value: GridHeader) {
		this.nativeElement ? this.nativeElement.header = value : undefined;
	}

	/** @description undefined */
	@Input()
	get footer(): GridFooter {
		return this.nativeElement ? this.nativeElement.footer : undefined;
	}
	set footer(value: GridFooter) {
		this.nativeElement ? this.nativeElement.footer = value : undefined;
	}

	/** @description undefined */
	@Input()
	get rows(): GridRow[] {
		return this.nativeElement ? this.nativeElement.rows : undefined;
	}
	set rows(value: GridRow[]) {
		this.nativeElement ? this.nativeElement.rows = value : undefined;
	}

	/** @description undefined */
	@Input()
	get selection(): GridSelection {
		return this.nativeElement ? this.nativeElement.selection : undefined;
	}
	set selection(value: GridSelection) {
		this.nativeElement ? this.nativeElement.selection = value : undefined;
	}

	/** @description undefined */
	@Input()
	get sorting(): GridSorting {
		return this.nativeElement ? this.nativeElement.sorting : undefined;
	}
	set sorting(value: GridSorting) {
		this.nativeElement ? this.nativeElement.sorting = value : undefined;
	}

	/** @description This event is triggered, when the edit begins.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
	*   row - The edited row.
	*   column - The edited column.
	*   cell - The edited cell.
	*/
	@Output() onBeginEdit: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the selection is changed. When you select with a drag, the event is triggered when the drag starts and ends. 
	*  @param event. The custom event. 	Custom event was created with: event.detail(	started, 	finished, 	originalEvent)
	*   started - The flag is <em>true</em>, when the selection starts. The flag is <em>false</em>, when the selection ends and when the user changes the selection by dragging.
	*   finished - The flag is <em>true</em>, when the selection ends. The flag is <em>false</em>, when the selection starts and when the user changes the selection by dragging.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user clicks on the header of a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	originalEvent)
	*   column - The clicked column.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onColumnClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user double clicks on the header of a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	originalEvent)
	*   column - The double-clicked column.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onColumnDoubleClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user resized a column.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	column, 	oldWidth, 	width)
	*   column - The resized column.
	*   oldWidth - The old width of the column.
	*   width - The new width of the column.
	*/
	@Output() onColumnResize: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user expands a row of the grid. The Grid is in TreeGrid/Grouping mode.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The expanded row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onRowExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user collapsed a row of the grid. The Grid is in TreeGrid/Grouping mode.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The collapsed row. 
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onRowCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user clicks on a row of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The clicked row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onRowClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user double clicks on a row of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The double-clicked row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onRowDoubleClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user resized a row.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	oldHeight, 	height)
	*   row - The resized row.
	*   oldHeight - The old height of the row.
	*   height - The new height of the row.
	*/
	@Output() onRowResize: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user clicks on a cell of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
	*   cell - The clicked cell.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onCellClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user double clicks on a cell of the grid.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
	*   cell - The double-clicked cell. 
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onCellDoubleClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the edit ends.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	column, 	cell)
	*   row - The edited row.
	*   column - The edited column.
	*   cell - The edited cell.
	*/
	@Output() onEndEdit: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when a filter is added or removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
	*   columns - Array of columns.
	*   data - Array of {dataField: string, filter: string}. <em>dataField</em> is the column's data field. <em>filter</em> is a filter expression like 'startsWith B'
	*/
	@Output() onFilter: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the grid is resized.
	*  @param event. The custom event. 	*/
	@Output() onResize: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user touches and holds on the row for at least 300ms.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row, 	originalEvent)
	*   row - The tapped row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onRowTap: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the user touches and holds on the cell for at least 300ms.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	cell, 	originalEvent)
	*   cell - The tapped row.
	*   originalEvent - The original event object, which is 'pointer', 'touch' or 'mouse' Event object, depending on the device type and web browser
	*/
	@Output() onCellTap: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user changes the pages.
	*  @param event. The custom event. 	*/
	@Output() onPage: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when a sorting column is added or removed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns, 	data)
	*   columns - Array of columns.
	*   data - Array of {dataField: string, sortOrder: string, sortIndex: number}. <em>dataField</em> is the column's data field. <em>sortOrder</em> is 'asc' or 'desc', <em>sortIndex</em> is the index of the column in multi column sorting.
	*/
	@Output() onSort: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user reaches the bottom of the grid.
	*  @param event. The custom event. 	*/
	@Output() onScrollBottomReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered, when the user reaches the top of the grid.
	*  @param event. The custom event. 	*/
	@Output() onScrollTopReached: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds a new row and puts it into edit mode. When batch editing is enabled, the row is not saved until the batch edit is saved. 
	* @param {string} position?. 'near' or 'far'
	* @returns {boolean}
  */
	public async addNewRow(position?): Promise<any> {
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

	/** @description Adds a new unbound row to the top or bottom. Unbound rows are not part of the Grid's dataSource. They become part of the dataSource, after an unbound row is edited. 
	* @param {number} count. The count of unbound rows.
	* @param {string} position?. 'near' or 'far'
	* @returns {boolean}
  */
	public async addUnboundRow(count, position?): Promise<any> {
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

	/** @description Adds a filter to a column. This method will apply a filter to the Grid data. 
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

	/** @description Auto-sizes grid rows. This method will update the height of all Grid rows. 
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

	/** @description Auto-sizes grid columns. This method will update the width of all Grid columns. 
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

	/** @description Starts an update operation. This is appropriate when calling multiple methods or set multiple properties at once. 
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

	/** @description Begins row, cell or column. This method allows you to programmatically start a cell, row or column editing. After calling it, an editor HTMLElement will be created and displayed in the Grid. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field
	* @returns {boolean}
  */
	public async beginEdit(rowId, dataField?): Promise<any> {
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

	/** @description Clears all filters. Refreshes the view and updates all filter input components. 
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

	/** @description Clears the selection that user have made. All row, cell and column selection highlights will be removed. 
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

	/** @description Cancels the editing. This method closes the cell editor and cancels the changes. 
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

	/** @description Checks a TreeGrid row. This method updates the row's check-box. 
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

	/** @description Checks all TreeGrid or Grouping rows. This method updates all check-boxes in the TreeGrid or Grouping rows. 
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

	/** @description Clears the user selection and empties the data source. The Grid will display 'No Rows' in the view. 
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

	/** @description Closes the column drop-down menu. 
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

	/** @description Collapses a TreeGrid or Grouping row. 
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

	/** @description Collapses all TreeGrid or Grouping rows. 
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

	/** @description Creates a Chart, when charting is enabled. 
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

	/** @description Delete a row. When batch editing is enabled, the row is not saved until the batch edit is saved. 
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

	/** @description Scrolls to a row or cell. This method scrolls to a row or cell, when scrolling is necessary. If pagination is enabled, it will automatically change the page. 
	* @param {string | number} rowId. row bound id
	* @param {string} dataField?. column bound data field
	* @returns {boolean}
  */
	public async ensureVisible(rowId, dataField?): Promise<any> {
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

	/** @description Ends the editing. This method confirms all changes and closes the opened cell editor(s). 
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

	/** @description Ends the update operation. This method will resume the rendering and will refresh the Grid. 
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

	/** @description Expands a TreeGrid or Grouping row. 
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

	/** @description Expands all TreeGrid or Grouping rows. 
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

	/** @description Exports the Grid data to .XLSX, .PDF, .JSON, .XML, .CSV, .TSV, .HTML, .JPEG or .PNG. The method uses the options of the dataExport property. 
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

	/** @description Gets an array of columns with applied sorting. 
	* @returns {{[dataField: string]: { sortOrder: string, sortIndex: number }}}
  */
	public async getSortedColumns(): Promise<any> {
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

	/** @description Gets the selection. 
	* @returns {any}
  */
	public async getSelection(): Promise<any> {
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

	/** @description Gets an array of columns with applied filters. 
	* @returns {any}
  */
	public async getFilteredColumns(): Promise<any> {
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

	/** @description Gets an array of rows, which are visible and match the applied filter. 
	* @returns {any}
  */
	public async getVisibleRows(): Promise<any> {
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

	/** @description Gets the result of the getVisibleRows or the rows hierarchy, when the Grid is in TreeGrid/Grouping mode. 
	* @returns {any}
  */
	public async getViewRows(): Promise<any> {
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

	/** @description Gets the changes from the batch edit. 
	* @returns {{ upDated: [{ id: string, dataField: string, oldValue: Object, newValue: Object }], deleted: [{id: string, data: Object}], added: [{id: string, data: Object}] }}
  */
	public async getBatchEditChanges(): Promise<any> {
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

	/** @description Gets whether a column's drop-down menu is opened. 
	* @returns {boolean}
  */
	public async hasMenu(): Promise<any> {
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

	/** @description Hides the Details of a Row, when row details are enabled. 
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

	/** @description Opens a column drop-down menu. 
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

	/** @description Prints the Grid data. The method uses the options of the dataExport property. When printed, the Grid will not display any scrollbars so all rows and columns will be displayed. The grid will auto resize width and height to fit all contents. To customize the printing options, you can use  the dataExport property. 
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

	/** @description Renders the grid. This method will make a full-refresh like in the initial Grid creation. It will create Rows, Columns and Cells HTML Elements and then refresh the Grid layout. 
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

	/** @description Refreshes the grid with the current property values. This method will refresh the Grid layout. 
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

	/** @description Refreshes the grid cells in view. The method is useful for live-updates of cell values. 
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

	/** @description Removes a column filter.  
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

	/** @description Reverts the batch edit changes. This method cancels all changes made by the end-user. 
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

	/** @description Saves the batch edit changes. This method confirms the editing changes made by the end-user. 
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

	/** @description Selects a row, cell or column. 
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

	/** @description Selects a range of rows, cells or columns. The result of the method depends on the selection configuration of the Grid. 
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

	/** @description Shows the Details of a Row, when row details are enabled. 
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

	/** @description Unselects a row, cell or column. 
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

	/** @description Unchecks a TreeGrid row. Sets its check-box to false. 
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

	/** @description Unchecks all TreeGrid or Grouping rows. Sets all check-boxes to false. 
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
		that.eventHandlers['beginEditHandler'] = (event: CustomEvent) => { that.onBeginEdit.emit(event); }
		that.nativeElement.addEventListener('beginEdit', that.eventHandlers['beginEditHandler']);

		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['columnClickHandler'] = (event: CustomEvent) => { that.onColumnClick.emit(event); }
		that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);

		that.eventHandlers['columnDoubleClickHandler'] = (event: CustomEvent) => { that.onColumnDoubleClick.emit(event); }
		that.nativeElement.addEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);

		that.eventHandlers['columnResizeHandler'] = (event: CustomEvent) => { that.onColumnResize.emit(event); }
		that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);

		that.eventHandlers['rowExpandHandler'] = (event: CustomEvent) => { that.onRowExpand.emit(event); }
		that.nativeElement.addEventListener('rowExpand', that.eventHandlers['rowExpandHandler']);

		that.eventHandlers['rowCollapseHandler'] = (event: CustomEvent) => { that.onRowCollapse.emit(event); }
		that.nativeElement.addEventListener('rowCollapse', that.eventHandlers['rowCollapseHandler']);

		that.eventHandlers['rowClickHandler'] = (event: CustomEvent) => { that.onRowClick.emit(event); }
		that.nativeElement.addEventListener('rowClick', that.eventHandlers['rowClickHandler']);

		that.eventHandlers['rowDoubleClickHandler'] = (event: CustomEvent) => { that.onRowDoubleClick.emit(event); }
		that.nativeElement.addEventListener('rowDoubleClick', that.eventHandlers['rowDoubleClickHandler']);

		that.eventHandlers['rowResizeHandler'] = (event: CustomEvent) => { that.onRowResize.emit(event); }
		that.nativeElement.addEventListener('rowResize', that.eventHandlers['rowResizeHandler']);

		that.eventHandlers['cellClickHandler'] = (event: CustomEvent) => { that.onCellClick.emit(event); }
		that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);

		that.eventHandlers['cellDoubleClickHandler'] = (event: CustomEvent) => { that.onCellDoubleClick.emit(event); }
		that.nativeElement.addEventListener('cellDoubleClick', that.eventHandlers['cellDoubleClickHandler']);

		that.eventHandlers['endEditHandler'] = (event: CustomEvent) => { that.onEndEdit.emit(event); }
		that.nativeElement.addEventListener('endEdit', that.eventHandlers['endEditHandler']);

		that.eventHandlers['filterHandler'] = (event: CustomEvent) => { that.onFilter.emit(event); }
		that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);

		that.eventHandlers['resizeHandler'] = (event: CustomEvent) => { that.onResize.emit(event); }
		that.nativeElement.addEventListener('resize', that.eventHandlers['resizeHandler']);

		that.eventHandlers['rowTapHandler'] = (event: CustomEvent) => { that.onRowTap.emit(event); }
		that.nativeElement.addEventListener('rowTap', that.eventHandlers['rowTapHandler']);

		that.eventHandlers['cellTapHandler'] = (event: CustomEvent) => { that.onCellTap.emit(event); }
		that.nativeElement.addEventListener('cellTap', that.eventHandlers['cellTapHandler']);

		that.eventHandlers['pageHandler'] = (event: CustomEvent) => { that.onPage.emit(event); }
		that.nativeElement.addEventListener('page', that.eventHandlers['pageHandler']);

		that.eventHandlers['sortHandler'] = (event: CustomEvent) => { that.onSort.emit(event); }
		that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);

		that.eventHandlers['scrollBottomReachedHandler'] = (event: CustomEvent) => { that.onScrollBottomReached.emit(event); }
		that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);

		that.eventHandlers['scrollTopReachedHandler'] = (event: CustomEvent) => { that.onScrollTopReached.emit(event); }
		that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['beginEditHandler']) {
			that.nativeElement.removeEventListener('beginEdit', that.eventHandlers['beginEditHandler']);
		}

		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['columnClickHandler']) {
			that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
		}

		if (that.eventHandlers['columnDoubleClickHandler']) {
			that.nativeElement.removeEventListener('columnDoubleClick', that.eventHandlers['columnDoubleClickHandler']);
		}

		if (that.eventHandlers['columnResizeHandler']) {
			that.nativeElement.removeEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
		}

		if (that.eventHandlers['rowExpandHandler']) {
			that.nativeElement.removeEventListener('rowExpand', that.eventHandlers['rowExpandHandler']);
		}

		if (that.eventHandlers['rowCollapseHandler']) {
			that.nativeElement.removeEventListener('rowCollapse', that.eventHandlers['rowCollapseHandler']);
		}

		if (that.eventHandlers['rowClickHandler']) {
			that.nativeElement.removeEventListener('rowClick', that.eventHandlers['rowClickHandler']);
		}

		if (that.eventHandlers['rowDoubleClickHandler']) {
			that.nativeElement.removeEventListener('rowDoubleClick', that.eventHandlers['rowDoubleClickHandler']);
		}

		if (that.eventHandlers['rowResizeHandler']) {
			that.nativeElement.removeEventListener('rowResize', that.eventHandlers['rowResizeHandler']);
		}

		if (that.eventHandlers['cellClickHandler']) {
			that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
		}

		if (that.eventHandlers['cellDoubleClickHandler']) {
			that.nativeElement.removeEventListener('cellDoubleClick', that.eventHandlers['cellDoubleClickHandler']);
		}

		if (that.eventHandlers['endEditHandler']) {
			that.nativeElement.removeEventListener('endEdit', that.eventHandlers['endEditHandler']);
		}

		if (that.eventHandlers['filterHandler']) {
			that.nativeElement.onfilterHandler = null;
		}

		if (that.eventHandlers['resizeHandler']) {
			that.nativeElement.removeEventListener('resize', that.eventHandlers['resizeHandler']);
		}

		if (that.eventHandlers['rowTapHandler']) {
			that.nativeElement.removeEventListener('rowTap', that.eventHandlers['rowTapHandler']);
		}

		if (that.eventHandlers['cellTapHandler']) {
			that.nativeElement.removeEventListener('cellTap', that.eventHandlers['cellTapHandler']);
		}

		if (that.eventHandlers['pageHandler']) {
			that.nativeElement.removeEventListener('page', that.eventHandlers['pageHandler']);
		}

		if (that.eventHandlers['sortHandler']) {
			that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
		}

		if (that.eventHandlers['scrollBottomReachedHandler']) {
			that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
		}

		if (that.eventHandlers['scrollTopReachedHandler']) {
			that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
		}

	}
}
