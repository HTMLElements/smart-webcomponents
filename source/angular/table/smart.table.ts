import { Table } from './../index';
import { Animation, TableColumnDataType, TableColumnFreeze, TableColumnResponsivePriority, TableConditionalFormattingCondition, TableConditionalFormattingFontFamily, TableConditionalFormattingFontSize, TableColumnSizeMode, TableEditMode, TableLoadColumnStateBehavior, TablePageSize, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting, ElementRenderMode} from './../index';
import { Component, Directive, AfterViewInit, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { BaseElement, Smart } from './smart.element';
export { Animation, TableColumnDataType, TableColumnFreeze, TableColumnResponsivePriority, TableConditionalFormattingCondition, TableConditionalFormattingFontFamily, TableConditionalFormattingFontSize, TableColumnSizeMode, TableEditMode, TableLoadColumnStateBehavior, TablePageSize, TableSelectionMode, TableSortMode, TableColumnGroup, TableColumn, TableConditionalFormatting, ElementRenderMode} from './../index';
export { Smart } from './smart.element';
export { Table } from './../index';


@Directive({
	selector: 'smart-table, [smart-table]'
})

export class TableComponent extends BaseElement implements OnInit, AfterViewInit, OnDestroy, OnChanges {
	constructor(ref: ElementRef<Table>) {
		super(ref);
		this.nativeElement = ref.nativeElement as Table;
	}

	private eventHandlers: any[] = [];

	public nativeElement: Table;
	/** @description Creates the component on demand.
	 * @param properties An optional object of properties, which will be added to the template binded ones.
	 */
	public createComponent(properties = {}): any {
    	this.nativeElement = <Table>document.createElement('smart-table');
		for (let propertyName in properties) { 
 			this.nativeElement[propertyName] = properties[propertyName];
		}
		return this.nativeElement;
	}
	/** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
	@Input()
	get animation(): Animation {
		return this.nativeElement ? this.nativeElement.animation : undefined;
	}
	set animation(value: Animation) {
		this.nativeElement ? this.nativeElement.animation = value : undefined;
	}

	/** @description Enables or disables auto load state from the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property. */
	@Input()
	get autoLoadState(): boolean {
		return this.nativeElement ? this.nativeElement.autoLoadState : undefined;
	}
	set autoLoadState(value: boolean) {
		this.nativeElement ? this.nativeElement.autoLoadState = value : undefined;
	}

	/** @description Enables or disables auto save state to the browser's localStorage. Information about columns, expanded rows, selected rows, applied fitering, grouping, and   sorted columns is saved, based on the value of the stateSettings property. */
	@Input()
	get autoSaveState(): boolean {
		return this.nativeElement ? this.nativeElement.autoSaveState : undefined;
	}
	set autoSaveState(value: boolean) {
		this.nativeElement ? this.nativeElement.autoSaveState = value : undefined;
	}

	/** @description Sets or gets a list of column groups that constitute the column header hierarchy. Note: when column header hierarchy is created, column resizing and auto-sizing is not supported. */
	@Input()
	get columnGroups(): TableColumnGroup[] {
		return this.nativeElement ? this.nativeElement.columnGroups : undefined;
	}
	set columnGroups(value: TableColumnGroup[]) {
		this.nativeElement ? this.nativeElement.columnGroups = value : undefined;
	}

	/** @description Sets or gets the min width of columns when columnSizeMode is 'auto' or when resizing columns. This property has no effect on columns with programmatically set width. */
	@Input()
	get columnMinWidth(): string | number {
		return this.nativeElement ? this.nativeElement.columnMinWidth : undefined;
	}
	set columnMinWidth(value: string | number) {
		this.nativeElement ? this.nativeElement.columnMinWidth = value : undefined;
	}

	/** @description Sets or gets whether the reordering of columns is enabled. */
	@Input()
	get columnReorder(): boolean {
		return this.nativeElement ? this.nativeElement.columnReorder : undefined;
	}
	set columnReorder(value: boolean) {
		this.nativeElement ? this.nativeElement.columnReorder = value : undefined;
	}

	/** @description Sets or gets whether the resizing of columns is enabled. Note: column sizes continue to adhere to the behavior of the standard HTML table element's table-layout: fixed, upon which smart-table is based. */
	@Input()
	get columnResize(): boolean {
		return this.nativeElement ? this.nativeElement.columnResize : undefined;
	}
	set columnResize(value: boolean) {
		this.nativeElement ? this.nativeElement.columnResize = value : undefined;
	}

	/** @description Sets or gets whether when resizing a column, a feedback showing the new column width in px will be displayed. */
	@Input()
	get columnResizeFeedback(): boolean {
		return this.nativeElement ? this.nativeElement.columnResizeFeedback : undefined;
	}
	set columnResizeFeedback(value: boolean) {
		this.nativeElement ? this.nativeElement.columnResizeFeedback = value : undefined;
	}

	/** @description Describes the columns properties. */
	@Input()
	get columns(): TableColumn[] {
		return this.nativeElement ? this.nativeElement.columns : undefined;
	}
	set columns(value: TableColumn[]) {
		this.nativeElement ? this.nativeElement.columns = value : undefined;
	}

	/** @description Sets or gets details about conditional formatting to be applied to the Table's cells. */
	@Input()
	get conditionalFormatting(): TableConditionalFormatting[] {
		return this.nativeElement ? this.nativeElement.conditionalFormatting : undefined;
	}
	set conditionalFormatting(value: TableConditionalFormatting[]) {
		this.nativeElement ? this.nativeElement.conditionalFormatting = value : undefined;
	}

	/** @description Sets or gets the column sizing behavior. */
	@Input()
	get columnSizeMode(): TableColumnSizeMode {
		return this.nativeElement ? this.nativeElement.columnSizeMode : undefined;
	}
	set columnSizeMode(value: TableColumnSizeMode) {
		this.nativeElement ? this.nativeElement.columnSizeMode = value : undefined;
	}

	/** @description Sets or gets whether the "Conditional Formatting" button appears in the Table's header (toolbar). Clicking this button opens a dialog with formatting options. */
	@Input()
	get conditionalFormattingButton(): boolean {
		return this.nativeElement ? this.nativeElement.conditionalFormattingButton : undefined;
	}
	set conditionalFormattingButton(value: boolean) {
		this.nativeElement ? this.nativeElement.conditionalFormattingButton = value : undefined;
	}

	/** @description When binding the dataSource property directly to an array (as opposed to an instance of JQX.DataAdapter), sets or gets the name of the data field in the source array to bind row ids to. */
	@Input()
	get dataRowId(): string {
		return this.nativeElement ? this.nativeElement.dataRowId : undefined;
	}
	set dataRowId(value: string) {
		this.nativeElement ? this.nativeElement.dataRowId = value : undefined;
	}

	/** @description Determines the data source of the table component. */
	@Input()
	get dataSource(): any {
		return this.nativeElement ? this.nativeElement.dataSource : undefined;
	}
	set dataSource(value: any) {
		this.nativeElement ? this.nativeElement.dataSource = value : undefined;
	}

	/** @description A callback function that can be used to transform the initial dataSource records. If implemented, it is called once for each record (which is passed as an argument). */
	@Input()
	get dataTransform(): any {
		return this.nativeElement ? this.nativeElement.dataTransform : undefined;
	}
	set dataTransform(value: any) {
		this.nativeElement ? this.nativeElement.dataTransform = value : undefined;
	}

	/** @description Disables the interaction with the element. */
	@Input()
	get disabled(): boolean {
		return this.nativeElement ? this.nativeElement.disabled : undefined;
	}
	set disabled(value: boolean) {
		this.nativeElement ? this.nativeElement.disabled = value : undefined;
	}

	/** @description Sets or gets whether the Table can be edited. */
	@Input()
	get editing(): boolean {
		return this.nativeElement ? this.nativeElement.editing : undefined;
	}
	set editing(value: boolean) {
		this.nativeElement ? this.nativeElement.editing = value : undefined;
	}

	/** @description Sets or gets the edit mode. */
	@Input()
	get editMode(): TableEditMode {
		return this.nativeElement ? this.nativeElement.editMode : undefined;
	}
	set editMode(value: TableEditMode) {
		this.nativeElement ? this.nativeElement.editMode = value : undefined;
	}

	/** @description Sets or gets whether the Table can be filtered. By default, the Table can be filtered by all string and numeric columns through a filter input in the header. */
	@Input()
	get filtering(): boolean {
		return this.nativeElement ? this.nativeElement.filtering : undefined;
	}
	set filtering(value: boolean) {
		this.nativeElement ? this.nativeElement.filtering = value : undefined;
	}

	/** @description Sets or gets whether the Table can be filtered via a filter row. */
	@Input()
	get filterRow(): boolean {
		return this.nativeElement ? this.nativeElement.filterRow : undefined;
	}
	set filterRow(value: boolean) {
		this.nativeElement ? this.nativeElement.filterRow = value : undefined;
	}

	/** @description Sets or gets the id of an HTML template element to be applied as a custom filter template. */
	@Input()
	get filterTemplate(): string {
		return this.nativeElement ? this.nativeElement.filterTemplate : undefined;
	}
	set filterTemplate(value: string) {
		this.nativeElement ? this.nativeElement.filterTemplate = value : undefined;
	}

	/** @description Sets or gets the id of an HTML template element to be applied as footer row(s). */
	@Input()
	get footerRow(): string {
		return this.nativeElement ? this.nativeElement.footerRow : undefined;
	}
	set footerRow(value: string) {
		this.nativeElement ? this.nativeElement.footerRow = value : undefined;
	}

	/** @description Sets or gets whether Excel-like formulas can be passed as cell values. Formulas are always preceded by the = sign and are re-evaluated when cell values are changed. This feature depends on the third-party free plug-in formula-parser (the file formula-parser.min.js has to be referenced). */
	@Input()
	get formulas(): boolean {
		return this.nativeElement ? this.nativeElement.formulas : undefined;
	}
	set formulas(value: boolean) {
		this.nativeElement ? this.nativeElement.formulas = value : undefined;
	}

	/** @description Sets or gets whether the Table's footer is sticky/frozen. */
	@Input()
	get freezeFooter(): boolean {
		return this.nativeElement ? this.nativeElement.freezeFooter : undefined;
	}
	set freezeFooter(value: boolean) {
		this.nativeElement ? this.nativeElement.freezeFooter = value : undefined;
	}

	/** @description Sets or gets whether the Table's column header is sticky/frozen. */
	@Input()
	get freezeHeader(): boolean {
		return this.nativeElement ? this.nativeElement.freezeHeader : undefined;
	}
	set freezeHeader(value: boolean) {
		this.nativeElement ? this.nativeElement.freezeHeader = value : undefined;
	}

	/** @description Sets or gets whether grouping the Table is enabled. */
	@Input()
	get grouping(): boolean {
		return this.nativeElement ? this.nativeElement.grouping : undefined;
	}
	set grouping(value: boolean) {
		this.nativeElement ? this.nativeElement.grouping = value : undefined;
	}

	/** @description Sets or gets the id of an HTML template element to be applied as additional column header(s). */
	@Input()
	get headerRow(): string {
		return this.nativeElement ? this.nativeElement.headerRow : undefined;
	}
	set headerRow(value: string) {
		this.nativeElement ? this.nativeElement.headerRow = value : undefined;
	}

	/** @description Sets or gets whether navigation with the keyboard is enabled in the Table. */
	@Input()
	get keyboardNavigation(): boolean {
		return this.nativeElement ? this.nativeElement.keyboardNavigation : undefined;
	}
	set keyboardNavigation(value: boolean) {
		this.nativeElement ? this.nativeElement.keyboardNavigation = value : undefined;
	}

	/** @description Sets or gets the behavior when loading column settings either via autoLoadState or loadState. Applicable only when stateSettings contains 'columns'. */
	@Input()
	get loadColumnStateBehavior(): TableLoadColumnStateBehavior {
		return this.nativeElement ? this.nativeElement.loadColumnStateBehavior : undefined;
	}
	set loadColumnStateBehavior(value: TableLoadColumnStateBehavior) {
		this.nativeElement ? this.nativeElement.loadColumnStateBehavior = value : undefined;
	}

	/** @description Sets or gets the language. Used in conjunction with the property messages.  */
	@Input()
	get locale(): string {
		return this.nativeElement ? this.nativeElement.locale : undefined;
	}
	set locale(value: string) {
		this.nativeElement ? this.nativeElement.locale = value : undefined;
	}

	/** @description Sets or gets an object specifying strings used in the element that can be localized. Used in conjunction with the property locale.  */
	@Input()
	get messages(): any {
		return this.nativeElement ? this.nativeElement.messages : undefined;
	}
	set messages(value: any) {
		this.nativeElement ? this.nativeElement.messages = value : undefined;
	}

	/** @description A callback function executed each time a Table cell is rendered. */
	@Input()
	get onCellRender(): any {
		return this.nativeElement ? this.nativeElement.onCellRender : undefined;
	}
	set onCellRender(value: any) {
		this.nativeElement ? this.nativeElement.onCellRender = value : undefined;
	}

	/** @description A callback function executed each time a Table column header cell is rendered. */
	@Input()
	get onColumnRender(): { (dataField: string, headerCell: HTMLTableCellElement): void } {
		return this.nativeElement ? this.nativeElement.onColumnRender : undefined;
	}
	set onColumnRender(value: { (dataField: string, headerCell: HTMLTableCellElement): void }) {
		this.nativeElement ? this.nativeElement.onColumnRender = value : undefined;
	}

	/** @description A callback function executed when the Table is being initialized. */
	@Input()
	get onInit(): { (): void } {
		return this.nativeElement ? this.nativeElement.onInit : undefined;
	}
	set onInit(value: { (): void }) {
		this.nativeElement ? this.nativeElement.onInit = value : undefined;
	}

	/** @description Sets or gets the page size (when paging is enabled). */
	@Input()
	get pageSize(): TablePageSize {
		return this.nativeElement ? this.nativeElement.pageSize : undefined;
	}
	set pageSize(value: TablePageSize) {
		this.nativeElement ? this.nativeElement.pageSize = value : undefined;
	}

	/** @description Sets or gets the current (zero-based) page index (when paging is enabled). */
	@Input()
	get pageIndex(): number {
		return this.nativeElement ? this.nativeElement.pageIndex : undefined;
	}
	set pageIndex(value: number) {
		this.nativeElement ? this.nativeElement.pageIndex = value : undefined;
	}

	/** @description Sets or gets whether paging is enabled. */
	@Input()
	get paging(): boolean {
		return this.nativeElement ? this.nativeElement.paging : undefined;
	}
	set paging(value: boolean) {
		this.nativeElement ? this.nativeElement.paging = value : undefined;
	}

	/** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
	@Input()
	get rightToLeft(): boolean {
		return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
	}
	set rightToLeft(value: boolean) {
		this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
	}

	/** @description Sets or gets a string template to be applied as row detail template. Each cell value in the master row can be placed in the detail row by specifying the cell's data field in double curly brackets (e.g. {{price}}. The details can then be displayed by expanding the row by clicking it. */
	@Input()
	get rowDetailTemplate(): string {
		return this.nativeElement ? this.nativeElement.rowDetailTemplate : undefined;
	}
	set rowDetailTemplate(value: string) {
		this.nativeElement ? this.nativeElement.rowDetailTemplate = value : undefined;
	}

	/** @description Sets or gets an array of the Table's selected row's ids. */
	@Input()
	get selected(): any[] {
		return this.nativeElement ? this.nativeElement.selected : undefined;
	}
	set selected(value: any[]) {
		this.nativeElement ? this.nativeElement.selected = value : undefined;
	}

	/** @description Sets or gets whether row selection (via checkboxes) is enabled. */
	@Input()
	get selection(): boolean {
		return this.nativeElement ? this.nativeElement.selection : undefined;
	}
	set selection(value: boolean) {
		this.nativeElement ? this.nativeElement.selection = value : undefined;
	}

	/** @description Sets or gets the selection mode. Only applicable when selection is enabled. */
	@Input()
	get selectionMode(): TableSelectionMode {
		return this.nativeElement ? this.nativeElement.selectionMode : undefined;
	}
	set selectionMode(value: TableSelectionMode) {
		this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
	}

	/** @description A callback function executed when a column is sorted that can be used to override the default sorting behavior. The function is passed four parameters: dataSource - the Table's data sourcesortColumns - an array of the data fields of columns to be sorted bydirections - an array of sort directions to be sorted by (corresponding to sortColumns)defaultCompareFunctions - an array of default compare functions to be sorted by (corresponding to sortColumns), useful if the sorting of some columns does not have to be overridden */
	@Input()
	get sort(): any {
		return this.nativeElement ? this.nativeElement.sort : undefined;
	}
	set sort(value: any) {
		this.nativeElement ? this.nativeElement.sort = value : undefined;
	}

	/** @description Determines the sorting mode of the Table. */
	@Input()
	get sortMode(): TableSortMode {
		return this.nativeElement ? this.nativeElement.sortMode : undefined;
	}
	set sortMode(value: TableSortMode) {
		this.nativeElement ? this.nativeElement.sortMode = value : undefined;
	}

	/** @description Sets or gets what settings of the Table's state can be saved (by autoSaveState or saveState) or loaded (by autoLoadState or loadState). */
	@Input()
	get stateSettings(): string[] {
		return this.nativeElement ? this.nativeElement.stateSettings : undefined;
	}
	set stateSettings(value: string[]) {
		this.nativeElement ? this.nativeElement.stateSettings = value : undefined;
	}

	/** @description Determines the theme. Theme defines the look of the element */
	@Input()
	get theme(): string {
		return this.nativeElement ? this.nativeElement.theme : undefined;
	}
	set theme(value: string) {
		this.nativeElement ? this.nativeElement.theme = value : undefined;
	}

	/** @description Sets or gets whether when hovering a cell with truncated content, a tooltip with the full content will be shown. */
	@Input()
	get tooltip(): boolean {
		return this.nativeElement ? this.nativeElement.tooltip : undefined;
	}
	set tooltip(value: boolean) {
		this.nativeElement ? this.nativeElement.tooltip = value : undefined;
	}

	/** @description Enables or disables HTML virtualization. This functionality allows for only visible rows to be rendered, resulting in an increased Table performance. */
	@Input()
	get virtualization(): boolean {
		return this.nativeElement ? this.nativeElement.virtualization : undefined;
	}
	set virtualization(value: boolean) {
		this.nativeElement ? this.nativeElement.virtualization = value : undefined;
	}

	/** @description This event is triggered when a cell edit operation has been initiated.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row, 	value)
	*   dataField - The data field of the cell's column.
	*   row - The data of the cell's row.
	*   value - The data value of the cell.
	*/
	@Output() onCellBeginEdit: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	id, 	dataField, 	row, 	value, 	originalEvent)
	*   id - The cell's row id.
	*   dataField - The data field of the cell's column.
	*   row - The data of the cell's row.
	*   value - The data value of the cell.
	*   originalEvent - The 'click' event object.
	*/
	@Output() onCellClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a cell has been edited.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	row, 	value)
	*   dataField - The data field of the cell's column.
	*   row - The new data of the cell's row.
	*   value - The data value of the cell.
	*/
	@Output() onCellEndEdit: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when the selection is changed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	type)
	*   type - The type of action that initiated the selection change. Possible types: 'programmatic', 'interaction', 'remove'.
	*/
	@Output() onChange: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a row has been collapsed.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	record)
	*   record - The data of the collapsed row.
	*/
	@Output() onCollapse: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a row has been expanded.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	record)
	*   record - The (aggregated) data of the expanded row.
	*/
	@Output() onExpand: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField)
	*   dataField - The data field of the cell's column.
	*/
	@Output() onColumnClick: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column has been resized via dragging or double-click.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	dataField, 	headerCellElement, 	width)
	*   dataField - The data field of the column.
	*   headerCellElement - The column's header cell HTML element.
	*   width - The new width of the column.
	*/
	@Output() onColumnResize: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a filtering-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	filters)
	*   action - The filtering action. Possible actions: 'add', 'remove'.
	*   filters - The added filters. Only when action is 'add'.
	*/
	@Output() onFilter: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a grouping-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action, 	dataField, 	label)
	*   action - The grouping action. Possible actions: 'add', 'collapse', 'expand', 'remove'.
	*   dataField - The data field of the column whose grouping is modified.
	*   label - The label of the group (only when collapsing/expanding).
	*/
	@Output() onGroup: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a paging-related action is made.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	action)
	*   action - The paging action. Possible actions: 'pageIndexChange', 'pageSizeChange'.
	*/
	@Output() onPage: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a row edit operation has been initiated (only when editMode is 'row').
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row)
	*   row - The data of the row.
	*/
	@Output() onRowBeginEdit: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a row has been edited (only when editMode is 'row').
	*  @param event. The custom event. 	Custom event was created with: event.detail(	row)
	*   row - The new data of the row.
	*/
	@Output() onRowEndEdit: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description This event is triggered when a column header cell has been clicked.
	*  @param event. The custom event. 	Custom event was created with: event.detail(	columns)
	*   columns - An array with information about the columns the Table has been sorted by.
	*/
	@Output() onSort: EventEmitter<CustomEvent> = new EventEmitter();

	/** @description Adds a filter to a specific column. 
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

	/** @description Groups by a column. 
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

	/** @description Begins an edit operation. 
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

	/** @description Ends the current edit operation and discards changes. 
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

	/** @description Clears applied filters. 
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

	/** @description Clears grouping. 
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

	/** @description Clears selection. 
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

	/** @description Clears the Table sorting. 
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

	/** @description Collapses all rows (in tree mode). 
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

	/** @description Collapses a group. 
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

	/** @description Collapses a row (in tree mode). 
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

	/** @description Ends the current edit operation and saves changes. 
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

	/** @description Expands all rows (in tree mode). 
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

	/** @description Expands a group. 
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

	/** @description Expands a row (in tree mode). 
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

	/** @description Exports the Table's data. 
	* @param {string} dataFormat. The file format to export to. Supported formats: 'csv', 'html', 'json', 'pdf', 'tsv', 'xlsx', 'xml'.
	* @param {string} fileName?. The name of the file to export to
	* @param {boolean} exportFiltered?. If set to true, exports only filtered records
	* @param {Function} callback?. A callback function to pass the exported data to (if fileName is not provided)
	* @returns {any}
  */
	public async exportData(dataFormat, fileName?, exportFiltered?, callback?): Promise<any> {
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

	/** @description Returns an array of selected row ids. 
	* @returns {(string | number)[]}
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

	/** @description Returns the Table's state, containing information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns. It can then be stored or passed to the method loadState. 
	* @returns {any}
  */
	public async getState(): Promise<any> {
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

	/** @description Returns the value of a cell. 
	* @param {string | number} row. The id of the cell's row.
	* @param {string} dataField. The dataField of the cell's column.
	* @returns {any}
  */
	public async getValue(row, dataField): Promise<any> {
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

	/** @description Loads the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is loaded, based on the value of the stateSettings property. 
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

	/** @description Navigates to a page. 
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

	/** @description Refreshes the table. 
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

	/** @description Removes filters applied to a specific column. 
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

	/** @description Removes grouping by a column. 
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

	/** @description Saves the Table's state. Information about columns, expanded rows, selected rows, applied fitering, grouping, and sorted columns is saved, based on the value of the stateSettings property. 
	* @returns {any}
  */
	public async saveState(): Promise<any> {
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

	/** @description Selects one or more rows. 
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

	/** @description Sets the value of a cell. 
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

	/** @description Sorts the Table by a column. 
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

	/** @description Unselects one or more rows. 
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
		that.eventHandlers['cellBeginEditHandler'] = (event: CustomEvent) => { that.onCellBeginEdit.emit(event); }
		that.nativeElement.addEventListener('cellBeginEdit', that.eventHandlers['cellBeginEditHandler']);

		that.eventHandlers['cellClickHandler'] = (event: CustomEvent) => { that.onCellClick.emit(event); }
		that.nativeElement.addEventListener('cellClick', that.eventHandlers['cellClickHandler']);

		that.eventHandlers['cellEndEditHandler'] = (event: CustomEvent) => { that.onCellEndEdit.emit(event); }
		that.nativeElement.addEventListener('cellEndEdit', that.eventHandlers['cellEndEditHandler']);

		that.eventHandlers['changeHandler'] = (event: CustomEvent) => { that.onChange.emit(event); }
		that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);

		that.eventHandlers['collapseHandler'] = (event: CustomEvent) => { that.onCollapse.emit(event); }
		that.nativeElement.addEventListener('collapse', that.eventHandlers['collapseHandler']);

		that.eventHandlers['expandHandler'] = (event: CustomEvent) => { that.onExpand.emit(event); }
		that.nativeElement.addEventListener('expand', that.eventHandlers['expandHandler']);

		that.eventHandlers['columnClickHandler'] = (event: CustomEvent) => { that.onColumnClick.emit(event); }
		that.nativeElement.addEventListener('columnClick', that.eventHandlers['columnClickHandler']);

		that.eventHandlers['columnResizeHandler'] = (event: CustomEvent) => { that.onColumnResize.emit(event); }
		that.nativeElement.addEventListener('columnResize', that.eventHandlers['columnResizeHandler']);

		that.eventHandlers['filterHandler'] = (event: CustomEvent) => { that.onFilter.emit(event); }
		that.nativeElement.addEventListener('filter', that.eventHandlers['filterHandler']);

		that.eventHandlers['groupHandler'] = (event: CustomEvent) => { that.onGroup.emit(event); }
		that.nativeElement.addEventListener('group', that.eventHandlers['groupHandler']);

		that.eventHandlers['pageHandler'] = (event: CustomEvent) => { that.onPage.emit(event); }
		that.nativeElement.addEventListener('page', that.eventHandlers['pageHandler']);

		that.eventHandlers['rowBeginEditHandler'] = (event: CustomEvent) => { that.onRowBeginEdit.emit(event); }
		that.nativeElement.addEventListener('rowBeginEdit', that.eventHandlers['rowBeginEditHandler']);

		that.eventHandlers['rowEndEditHandler'] = (event: CustomEvent) => { that.onRowEndEdit.emit(event); }
		that.nativeElement.addEventListener('rowEndEdit', that.eventHandlers['rowEndEditHandler']);

		that.eventHandlers['sortHandler'] = (event: CustomEvent) => { that.onSort.emit(event); }
		that.nativeElement.addEventListener('sort', that.eventHandlers['sortHandler']);

	}

	/** @description Remove event listeners. */
	private unlisten(): void {
        const that = this;
		if (that.eventHandlers['cellBeginEditHandler']) {
			that.nativeElement.removeEventListener('cellBeginEdit', that.eventHandlers['cellBeginEditHandler']);
		}

		if (that.eventHandlers['cellClickHandler']) {
			that.nativeElement.removeEventListener('cellClick', that.eventHandlers['cellClickHandler']);
		}

		if (that.eventHandlers['cellEndEditHandler']) {
			that.nativeElement.removeEventListener('cellEndEdit', that.eventHandlers['cellEndEditHandler']);
		}

		if (that.eventHandlers['changeHandler']) {
			that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
		}

		if (that.eventHandlers['collapseHandler']) {
			that.nativeElement.removeEventListener('collapse', that.eventHandlers['collapseHandler']);
		}

		if (that.eventHandlers['expandHandler']) {
			that.nativeElement.removeEventListener('expand', that.eventHandlers['expandHandler']);
		}

		if (that.eventHandlers['columnClickHandler']) {
			that.nativeElement.removeEventListener('columnClick', that.eventHandlers['columnClickHandler']);
		}

		if (that.eventHandlers['columnResizeHandler']) {
			that.nativeElement.removeEventListener('columnResize', that.eventHandlers['columnResizeHandler']);
		}

		if (that.eventHandlers['filterHandler']) {
			that.nativeElement.onfilterHandler = null;
		}

		if (that.eventHandlers['groupHandler']) {
			that.nativeElement.removeEventListener('group', that.eventHandlers['groupHandler']);
		}

		if (that.eventHandlers['pageHandler']) {
			that.nativeElement.removeEventListener('page', that.eventHandlers['pageHandler']);
		}

		if (that.eventHandlers['rowBeginEditHandler']) {
			that.nativeElement.removeEventListener('rowBeginEdit', that.eventHandlers['rowBeginEditHandler']);
		}

		if (that.eventHandlers['rowEndEditHandler']) {
			that.nativeElement.removeEventListener('rowEndEdit', that.eventHandlers['rowEndEditHandler']);
		}

		if (that.eventHandlers['sortHandler']) {
			that.nativeElement.removeEventListener('sort', that.eventHandlers['sortHandler']);
		}

	}
}
