import { Table, TableColumn } from 'smart-webcomponents-angular/table';
import { InputEditor } from 'smart-webcomponents-angular/input';
import { GetData } from '../../common/data';
import { QueryBuilder } from 'smart-webcomponents-angular/querybuilder';
import { Tree } from 'smart-webcomponents-angular/tree';

declare global {
    interface Window { JQX: any, Smart: any }
}

interface EventOptions {
    [property: string]: any;
}

interface TableDataFields {
    [property: string]: any;
}

export interface TableGroupingFormatFuncion {
    value: any;
    row: string | number;
    column: string;
    template!: any;
}

export class TestHarness {

    protected libName: string;

    protected element: HTMLElement | Document;

    protected options: EventOptions;

    constructor(element!: HTMLElement | Document, options!: EventOptions) {
        const that = this,
            lib = window.JQX || window.Smart;

        that.libName = window.JQX ? 'jqx' : 'smart';
        that.element = element || document;
        that.options = options || {
            bubbles: true,
            cancelable: true
        };
    }

    private _dispatchPointerEvent(eventName: string, target: HTMLElement, options: EventOptions) {
        const that = this;

        target = target || that.element as HTMLElement;
        options = options || options;

        if (target) {
            target.dispatchEvent(new PointerEvent(eventName, options || that.options));
        }
    }

    private _dispatchKeyboardEvent(eventName: string, target: HTMLElement, options: EventOptions) {
        const that = this;

        target = target || that.element as HTMLElement;
        options = options || options;

        if (target) {
            target.dispatchEvent(new KeyboardEvent(eventName, options || that.options));
        }
    }

    private _dispatchWheelEvent(eventName: string, target: HTMLElement, options: EventOptions) {
        const that = this;

        target = target || that.element as HTMLElement;

        options = options || that.options;

        if (options.deltaX === undefined) {
            options.deltaX = 0;
        }
        else if (options.deltaY === undefined) {
            options.deltaY = 0;
        }

        if (target) {
            target.dispatchEvent(new WheelEvent(eventName, options));
        }
    }

    private _dispatchMouseEvent(eventName: string, target: HTMLElement, options: EventOptions) {
        const that = this;

        target = target || that.element as HTMLElement;
        options = options || options;

        if (target) {
            target.dispatchEvent(new MouseEvent(eventName, options || that.options));
        }
    }

    private _dispatchTransitionEvent(eventName: string, target: HTMLElement, options: EventOptions) {
        const that = this;

        target = target || that.element as HTMLElement;
        options = options || options;

        if (target) {
            target.dispatchEvent(new TransitionEvent(eventName, options || that.options));
        }
    }

    private _dispatchFocusEvent(eventName: string, target: HTMLElement, options: EventOptions) {
        const that = this;

        target = target || that.element as HTMLElement;
        options = options || options;

        if (target) {
            target.dispatchEvent(new FocusEvent(eventName, options || that.options));
        }
    }

    public static down(element: HTMLElement, options!: EventOptions) {
        if (element) {
            element.dispatchEvent(new PointerEvent('pointerdown', options));
        }
    }

    public static move(element: HTMLElement, options!: EventOptions) {
        if (element) {
            element.dispatchEvent(new PointerEvent('pointermove', options));
        }
    }

    public static up(element: HTMLElement, options!: EventOptions) {
        if (element) {
            element.dispatchEvent(new PointerEvent('pointerup', options));
        }
    }

    public static click(element: HTMLElement) {
        if (element) {
            element.click();
        }
    }

    public static wheel(element: HTMLElement, options!: EventOptions) {
        if (element) {
            element.dispatchEvent(new WheelEvent('wheel', options));
        }
    }

    public static transitionend(element: HTMLElement, options!: EventOptions) {
        if (element) {
            element.dispatchEvent(new TransitionEvent('transitionend', options));
        }
    }

    public static mouseenter(element: HTMLElement, options!: EventOptions) {
        if (element) {
            element.dispatchEvent(new MouseEvent('mouseenter', options));
        }
    }

    public static blur(element: HTMLElement, options!: EventOptions) {
        if (element) {
            element.dispatchEvent(new FocusEvent('blur', options));
        }
    }

    public static focus(element: HTMLElement, options!: EventOptions) {
        if (element) {
            element.dispatchEvent(new FocusEvent('focus', options));
        }
    }

    public down(element: HTMLElement, options!: EventOptions) {
        this._dispatchPointerEvent('pointerdown', element, options);
    }

    public move(element: HTMLElement, options!: EventOptions) {
        this._dispatchPointerEvent('pointermove', element, options);
    }

    public up(element: HTMLElement, options!: EventOptions) {
        this._dispatchPointerEvent('pointerup', element, options);
    }

    public downUp(element: HTMLElement, options!: EventOptions) {
        this._dispatchPointerEvent('pointerdown', element, options);
        this._dispatchPointerEvent('pointerup', element, options);
    }

    public keyDown(element: HTMLElement, options!: EventOptions) {
        this._dispatchKeyboardEvent('keydown', element, options);
    }

    public keyUp(element: HTMLElement, options!: EventOptions) {
        this._dispatchKeyboardEvent('keyup', element, options);
    }

    public keyDownUp(element: HTMLElement, options!: EventOptions) {
        this._dispatchKeyboardEvent('keydown', element, options);
        this._dispatchKeyboardEvent('keyup', element, options);
    }

    public click(element: HTMLElement) {
        (element || this.element as HTMLElement).click();
    }

    public wheel(element: HTMLElement, options!: EventOptions) {
        this._dispatchWheelEvent('wheel', element, options);
    }

    public transitionend(element: HTMLElement, options!: EventOptions) {
        this._dispatchTransitionEvent('transitionend', element, options);
    }

    public mouseenter(element: HTMLElement, options!: EventOptions) {
        this._dispatchMouseEvent('mouseenter', element, options);
    }

    public blur(element: HTMLElement, options!: EventOptions) {
        this._dispatchFocusEvent('blur', element, options);
    }

    public focus(element: HTMLElement, options!: EventOptions) {
        this._dispatchFocusEvent('focus', element, options);
    }
}

export class TableTestHarness extends TestHarness {
    protected element: Table;

    constructor(element: Table) {
        super(element);
    }

    resizeColumn(column: HTMLElement | number, side: string = 'left', size: string | number = 0) {
        const that = this;

        if (!(column instanceof HTMLElement)) {
            column = this.element.querySelectorAll(`.${this.libName}-table th`)[column] as HTMLElement;
        }

        if (!column) {
            return
        }

        const columnRect = column.getBoundingClientRect(),
            options = that.options,
            startX = columnRect.left + (side === 'left' ? 0 : columnRect.width),
            startY = columnRect.top;

        options.clientX = startX;
        options.clientY = startY;
        options.pageX = startX - window.pageXOffset;
        options.pageY = startY - window.pageYOffset;

        that.down(column, options);

        options.clientX += size;
        options.clientY += size;
        options.pageX += size;
        options.pageY += size;

        that.move(column, options);
        that.up(column, options);
    }

    clickSelectAllBox() {
        const that = this,
            selectAllButton = that.element.querySelector(`thead tr th.${that.libName}-table-select-all`) as HTMLElement;

        if (selectAllButton) {
            selectAllButton.click();
        }
    }

    clickRowSelectionBox(row: HTMLElement | string) {
        const that = this;

        if (typeof row === 'string') {
            row = that.element.querySelector(`tbody tr[row-id="${row}"]:not([unused])`) as HTMLElement;
        }

        if (row) {
            const checkBox = row.querySelector('.selection-checkbox') as HTMLElement;

            if (checkBox) {
                checkBox.click();
            }
        }
    }

    clickRowArrowByIndex(index: number) {
        const that = this;
        const libName = that.libName,
            row = that.element.querySelectorAll(`tbody tr[row-id]:not([unused]):not(.${libName}-hidden)`)[index];

        if (!row) {
            return
        }

        that.click(row.querySelector(`.${libName}-arrow.${libName}-arrow-down`));

        return row
    }

    clickRowArrowById(rowId: string | number) {
        const that = this;
        const libName = that.libName,
            row = that.element.querySelector(`tbody tr[row-id="${rowId}"]:not([unused])`);

        if (!row) {
            return
        }

        that.click(row.querySelector(`.${libName}-arrow.${libName}-arrow-down`));
    }

    setTableGrouping(groupingFields: string[], expandGroups: boolean = true): void {
        const that = this;

        that.element.beginUpdate();
        that.element.clearGrouping();

        groupingFields.forEach(groupingField => that.element.addGroup(groupingField));

        if (expandGroups && groupingFields.length) {
            that.element.expandAllGroups();
        }

        that.element.endUpdate();
    }

    expandRow(index: number | HTMLElement) {
        const that = this,
            row = index instanceof HTMLElement ? index :
                that.element.querySelectorAll(`tbody tr:not(.last-visible):not(.${that.libName}-hidden)`)[index];

        if (!row || row.classList.contains('expanded')) {
            return
        }

        const arrow = row.querySelector(`.${that.libName}-arrow-down.hierarchy-arrow`) as HTMLElement;

        if (arrow) {
            that.click(arrow);
        }
    }

    collapseRow(index: number) {
        const that = this,
            row = that.element.querySelectorAll(`tbody tr:not(.last-visible)`)[index];

        if (!row || !row.classList.contains('expanded')) {
            return
        }

        const arrow = row.querySelector(`.${this.libName}-arrow-down.hierarchy-arrow`) as HTMLElement;

        if (arrow) {
            that.click(arrow);
        }
    }

    isRowExpandable(index: number | string) {
        const that = this;
        let row: HTMLElement;

        if (typeof index === 'string') {
            row = that.element.querySelector(`tbody tr[row-id="${index}"]:not(.last-visible):not([unused])`) as HTMLElement;
        }
        else {
            row = that.element.querySelectorAll(`tbody tr:not(.last-visible):not(.${that.libName}-hidden)`)[index] as HTMLElement;
        }

        return row && row.querySelector('.hierarchy-arrow') !== null
    }

    isRowExpanded(index: number | string) {
        const that = this;
        let row: HTMLElement;

        if (typeof index === 'string') {
            row = that.element.querySelector(`tbody tr[row-id="${index}"]:not(.last-visible):not([unused])`) as HTMLElement;
        }
        else {
            row = that.element.querySelectorAll(`tbody tr:not(.last-visible):not(.${that.libName}-hidden)`)[index] as HTMLElement;
        }

        return row && row.classList.contains('expanded')
    }

    areGroupChildrenExpanded(groupIndex: number): boolean {
        const that = this,
            element = that.element,
            groupChildren = Array.from(element.dataSource.boundHierarchy[groupIndex].children);

        return !groupChildren.some((i: any) => !that.getRowById(i.id))

    }

    getDataSourceFromColumns(columns: TableDataFields, count: number = 15) {
        return new window.Smart.DataAdapter({
            dataSource: GetData(count),
            dataFields: columns.map((i: any) => `${i.dataField}: ${i.dataType}`)
        });
    }

    getVirtualDataSourceFromColumns(columns: TableDataFields, count: number = 100) {
        let data = GetData(count);

        return new (window.Smart || window.JQX).DataAdapter({
            virtualDataSourceLength: count,
            virtualDataSourceCache: true,
            virtualDataSource: function (resultCallbackFunction: Function, details: any) {
                resultCallbackFunction({
                    dataSource: data.slice(details.first, details.last)
                });
            },
            dataFields: columns.map((i: any) => `${i.dataField}: ${i.dataType}`)
        });
    }

    getDataSourceSettings(settings: any) {
        return {
            dataSource: GetData(settings.count),
            dataSourceType: 'array',
            dataFields: settings.dataFields,
            keyDataField: settings.keyDataField,
            parentDataField: settings.parentDataField,
            groupBy: settings.groupBy
        }
    }

    getTreeDataSourceAdapter(settings: any) {
        return new window.Smart.DataAdapter({
            dataSource: GetData(settings.count).map((item, index) => {
                if (index % 2 === 0) {
                    item[settings.parentDataField] = -1;
                }

                return item
            }),
            dataFields: settings.dataFields.map((i: any) => `${i.dataField}: ${i.dataType}`),
            keyDataField: settings.keyDataField,
            parentDataField: settings.parentDataField,
            id: settings.id,
        });
    }

    getColumnWidthByDataField(dataField) {
        const column = this.element.querySelector(`thead th[data-field="${dataField}"]`) as HTMLElement;
        return column ? column.style.width : ''
    }

    getColumns(): NodeListOf<Element> {
        return this.element.querySelectorAll(`thead th`);
    }

    getRows(): NodeListOf<HTMLElement> {
        const that = this;

        if (that.element.virtualization) {
            return this.element.querySelectorAll(`tbody tr:not(.last-visible):not([unused]):not(.${that.libName}-hidden)`);
        }
        else {
            //'last-visible' is implementation specific for Table component
            return this.element.querySelectorAll(`tbody tr:not(.last-visible)`);
        }
    }

    getFirstExpandableRow(): HTMLElement {
        const that = this,
            hierarchyArrow = this.element.querySelector(`tbody tr:not(.last-visible):not(.expanded):not([unused]) .hierarchy-arrow.${this.libName}-arrow`);

        if (hierarchyArrow) {
            return hierarchyArrow.closest('tr[row-id]');
        }
    }

    getExpandedRows(): NodeListOf<Element> {
        //'unused' rows are implementation specific for Table virtualization
        return this.element.querySelectorAll(`.${this.libName}-table tbody tr.expanded:not([unused])`);
    }

    getCell(rowIndex: number | HTMLElement, columnIndex: number | string): HTMLElement | undefined {
        const row = rowIndex instanceof HTMLElement ? rowIndex : this.getRow(rowIndex);

        if (!row) {
            return;
        }

        let cell;

        if (typeof columnIndex === 'string') {
            cell = row.querySelector(`td[data-field="${columnIndex}"]`);
        }
        else {
            cell = row.querySelectorAll('td')[columnIndex];
        }

        return cell
    }

    getCellText(rowIndex: number | HTMLElement, columnIndex: number | string): string {
        const row = rowIndex instanceof HTMLElement ? rowIndex : this.getRow(rowIndex);

        if (!row) {
            return ''
        }

        let cell: HTMLElement;

        if (typeof columnIndex === 'string') {
            cell = row.querySelector(`td[data-field="${columnIndex}"]`);
        }
        else {
            cell = row.querySelectorAll('td')[columnIndex];
        }

        return cell ? cell.textContent : ''
    }

    getRow(rowIndex: number): HTMLElement {
        return this.getRows()[rowIndex] as HTMLElement;
    }

    getRowById(rowId: string | number): HTMLElement {
        return this.element.querySelector(`tbody tr[row-id="${rowId}"]:not(.last-visible):not([unused])`);
    }

    getColumn(value: number | string): HTMLTableHeaderCellElement {
        let header: HTMLTableHeaderCellElement;

        if (typeof value === 'string') {
            header = this.element.querySelector(`thead th[data-field="${value}"]`) as HTMLTableHeaderCellElement;
        }
        else if (typeof value === 'number') {
            header = this.element.querySelectorAll(`thead th`)[value] as HTMLTableHeaderCellElement;
        }

        return header
    }

    getColumnWidth(columnIndex: number): number {
        return this.getColumn(columnIndex).clientWidth;
    }

    getHeaderText(columnIndex: number): string {
        const headers = this.element.querySelectorAll(`thead th`);
        return headers[columnIndex]?.textContent;
    }

    getScrollViewer() {
        const that = this;

        if (!that.element.virtualization) {
            return null
        }

        return that.element.querySelector(`${that.libName}-scroll-viewer`);
    }

    clickHeader(value: number | string): void {
        let header: HTMLElement = this.getColumn(value);

        if (header) {
            header.click();
        }
    }

    clickCell(rowIndex: number, columnIndex: number): void {
        const row = this.getRow(rowIndex);
        row.querySelectorAll('td')[columnIndex].click();
    }

    getAllHeadersText(): string[] {
        const headersText = [];
        const headers = this.element.querySelectorAll(`thead th`);
        headers.forEach(header => {
            if (header.textContent) {
                headersText.push(header.textContent);
            }
        });
        return headersText;
    }

    getGroupExpandButton(groupIndex: number): HTMLElement {
        return this.element.querySelectorAll(`.${this.libName}-arrow-down`)[groupIndex] as HTMLElement;
    }

    clickGroupExpandButton(groupIndex: number): void {
        (this.element.querySelectorAll(`.${this.libName}-arrow-down`)[groupIndex] as HTMLElement).click();
    }

    getGroupHeader(groupIndex: number): string {
        const groupHeaderName = this.element.querySelectorAll('.group-header .group-label-name')[groupIndex].textContent,
            groupHeaderValue = this.element.querySelectorAll('.group-header .group-label-value')[groupIndex].textContent,
            groupHeaderCount = this.element.querySelectorAll('.group-header .group-label-count')[groupIndex].textContent;

        return `${groupHeaderName}${groupHeaderValue}${groupHeaderCount}`;
    }

    getGroupRowDetails(groupElement: HTMLElement | number) {
        const that = this;
        let groupHeaderName, groupHeaderValue, groupHeaderCount;

        if (groupElement instanceof HTMLElement) {
            groupHeaderName = groupElement.querySelector('.group-label-name');
            groupHeaderValue = groupElement.querySelector('.group-label-value');
            groupHeaderCount = groupElement.querySelector('.group-label-count');
        }
        else {
            groupHeaderName = that.element.querySelectorAll('.group-header .group-label-name')[groupElement];
            groupHeaderValue = that.element.querySelectorAll('.group-header .group-label-value')[groupElement];
            groupHeaderCount = that.element.querySelectorAll('.group-header .group-label-count')[groupElement];
        }

        return {
            name: groupHeaderName ? groupHeaderName.textContent : null,
            value: groupHeaderValue ? groupHeaderValue.textContent : null,
            count: groupHeaderCount ? groupHeaderCount.textContent : null
        }
    }

    getRowGroups(): HTMLElement[] {
        const groupHeaders = Array.from(this.element.querySelectorAll('.group-header')) as HTMLElement[];
        let groupRows = [];

        for (let i = 0, max = groupHeaders.length; i < max; i += 1) {
            const row = groupHeaders[i].parentElement;

            if (!row.classList.contains(`${this.libName}-hidden`) && !row.hasAttribute('unused')) {
                groupRows.push(row);
            }
        }

        return groupRows
    }

    getTreeGroupRows() {
        const treeCells = Array.from(this.element.querySelectorAll('tbody td.tree-cell')) as HTMLElement[];
        let treeRows = [];

        for (let i = 0, max = treeCells.length; i < max; i += 1) {
            const row = treeCells[i].parentElement;

            if (!row.classList.contains(`${this.libName}-hidden`) && !row.hasAttribute('unused')) {
                treeRows.push(row);
            }
        }

        return treeRows
    }

    getNestedRowGroupsByLevel(index: number): HTMLElement[] {
        const that = this;

        //outline-level
        return Array.from(that.element.querySelectorAll(`tr:not(.${that.libName}-hidden) .group-header.outline-level-${index}`)) as HTMLElement[];
    }

    isGrouped() {
        const that = this,
            element = that.element,
            rows = Array.from(element.querySelectorAll('tbody tr[row-id]'));

        return !rows.some(row => !row.querySelector('.group-header'))
    }

    isTableGrouped() {
        return this.element.querySelector('.group-header') !== null
    }

    isGroupExpanded(groupIndex: number | HTMLElement): boolean {
        if (typeof groupIndex === 'number') {
            const groupHeader = this.element.querySelectorAll('.group-header:not([unused])')[groupIndex] as HTMLElement;

            if (groupHeader) {
                const groupHeaderRow = groupHeader.parentElement;
                return groupHeaderRow && groupHeaderRow.classList.contains('expanded');
            }
        }
        else if (groupIndex && groupIndex.classList) {
            return groupIndex.classList.contains('expanded');
        }
    }

    isTreeTable() {
        const that = this;

        return that.element.querySelector('td.tree-cell') !== null
    }

    isTreeNodeExpanded(rowIndex: number | HTMLElement): boolean {
        if (typeof rowIndex === 'number') {
            return this.getRow(rowIndex).classList.contains('expanded');
        }
        else if (rowIndex && rowIndex.classList) {
            return rowIndex.classList.contains('expanded');
        }
    }

    isRowSelected(row: HTMLElement) {
        const that = this,
            selectionBox = row.querySelector(`.${this.libName}-table-select-row`);

        return selectionBox ? selectionBox.classList.contains('selected') : false
    }

    areGroupsExpanded() {
        const that = this,
            rowGroups = that.getRowGroups();
        let flag = true;

        if (!rowGroups.length) {
            return false
        }

        for (let i = 0, max = rowGroups.length; i < max; i += 1) {
            const row = rowGroups[i];

            flag = flag && that.isGroupExpanded(row);
        }

        return flag
    }

    areTreeGroupsExpanded() {
        const that = this,
            treeGroups = that.getTreeGroupRows();
        let flag = true;

        if (!treeGroups.length) {
            return false
        }

        for (let i = 0, max = treeGroups.length; i < max; i += 1) {
            const row = treeGroups[i];

            flag = flag && that.isTreeNodeExpanded(row);
        }

        return flag
    }

    getTreeRows(id!: string | number) {
        const that = this;
        let treeRows = [], rows;

        if (typeof id === 'string') {
            rows = [that.getRowById(id)];
        }
        else if (typeof id === 'string') {
            rows = [that.getRow(id)];
        }
        else {
            rows = that.getRows();
        }

        for (let i = 0, max = rows.length; i < max; i += 1) {
            const row = rows[i];

            if (row.querySelector('td.tree-cell')) {
                treeRows.push(row);
            }
        }

        return treeRows
    }

    getTotalSelectionState() {
        const that = this,
            selectAllth = that.element.querySelector(`thead th.${that.libName}-table-select-all`);

        if (selectAllth) {
            if (selectAllth.classList.contains('selected')) {
                return 'selected'
            }
            else if (selectAllth.classList.contains('indeterminate')) {
                return 'indeterminate'
            }

            return
        }
    }

    isFilterInputVisible() {
        const that = this;

        return !!that.element.querySelector(`.${that.libName}-table-header ${that.libName}-input`)
    }

    setFilterInputValue(value = '') {
        const that = this,
            filterInput = this.element.querySelector(`.${that.libName}-table-header ${that.libName}-input`) as InputEditor;

        if (filterInput) {
            filterInput.value = value;
            that.keyUp(filterInput);
        }
    }
}

export class QueryBuilderTestHarness extends TestHarness {
    protected element: QueryBuilder;

    constructor(element!: QueryBuilder) {
        super(element);
    }

    addFilter(): void {
        const addBtn = this.element.querySelector('.smart-filter-add-condition-btn');
        this.down(addBtn as HTMLElement);


        const filtergroups = this.element.querySelectorAll('.smart-filter-group-condition');
        const lastgroup = filtergroups[filtergroups.length - 1];
        const filterItems = lastgroup.querySelectorAll('.filter-builder-item');
        filterItems.forEach(item => {
            this.down(item as HTMLElement);
            this.up(item as HTMLElement);
        });

        this.down(lastgroup as HTMLElement);
        this.up(lastgroup as HTMLElement);
    }

    addFilterGroup(): void {
        const addBtn = this.element.querySelector('.smart-filter-add-btn');
        this.down(addBtn as HTMLElement);

        const menuItemAnd = this.element.querySelector('smart-menu-item[value="and"]') as HTMLElement;
        menuItemAnd.click();

        const menuContainer = this.element.querySelector('smart-menu .smart-container') as HTMLElement;
        //menuContainer.click();
        //this.down(menuItemAnd as HTMLElement);
        //this.up(menuItemAnd as HTMLElement);

        const filtergroups = this.element.querySelectorAll('.smart-filter-group-condition');
        const lastgroup = filtergroups[filtergroups.length - 1];
        const filterItems = lastgroup.querySelectorAll('.filter-builder-item');
        filterItems.forEach(item => this.down(item as HTMLElement));

        this.down(lastgroup as HTMLElement);
        this.up(lastgroup as HTMLElement);
    }

    removeField(): void {
        const removeBtn = this.element.querySelector('.smart-filter-delete-btn');

        this.downUp(removeBtn as HTMLElement);
    }

    openConditionDropDown(): void {
        const filterFields = this.element.querySelectorAll('.smart-filter-group-condition .filter-builder-item');
        this.down(filterFields[1] as HTMLElement);
    }

    getMenuItems(): NodeListOf<Element> {
        const menuItems = this.element.querySelectorAll('.smart-input-drop-down-menu');

        for (let i = 0; i < menuItems.length; i++) {
            if ((menuItems[i] as any).ownerElement.hasAttribute('opened')) {
                return menuItems[i].querySelectorAll('li');
            }
        }
    }

    startDragging(): void {
        const that = this;

        const filterConditions = this.element.querySelectorAll('.smart-filter-group-condition');
        const dragTarget = filterConditions[0];

        const dragTargetRect = dragTarget.getBoundingClientRect();
        const options = that.options;
        options.clientX = dragTargetRect.left - 1;
        options.clientY = dragTargetRect.top;
        options.pageX = dragTargetRect.left - 1;
        options.pageY = dragTargetRect.top;

        this.down(dragTarget as HTMLElement, options);

        options.clientX = dragTargetRect.left - 10;
        options.clientY = dragTargetRect.top;
        options.pageX = dragTargetRect.left - 10;
        options.pageY = dragTargetRect.top;
        this.move(document.body as HTMLElement, options);
    }

    dragToDropTarget(): void {
        const that = this;

        const filterConditions = this.element.querySelectorAll('.smart-filter-group-condition');
        const dragTarget = filterConditions[0];

        const dragTargetRect = dragTarget.getBoundingClientRect();
        const options = that.options;
        options.clientX = dragTargetRect.left - 1;
        options.clientY = dragTargetRect.top;
        options.pageX = dragTargetRect.left - 1;
        options.pageY = dragTargetRect.top;

        this.down(dragTarget as HTMLElement, options);

        const dropTarget = filterConditions[1];

        const dropTargetRect = dropTarget.getBoundingClientRect();
        options.clientX = dropTargetRect.left + 5;
        options.clientY = dropTargetRect.top + (dropTargetRect.height / 2) + 1; // bottom part of target
        options.pageX = dropTargetRect.left + 5;
        options.pageY = dropTargetRect.top + (dropTargetRect.height / 2) + 1; // bottom part of target

        this.move(dropTarget as HTMLElement, options);
    }

    dragField(): void {
        this.dragToDropTarget();
        this._triggerUp();
    }

    _triggerUp(): void {
        const queryBuilder = this.element.querySelector('smart-query-builder');
        this.up(queryBuilder as HTMLElement);
    }
}

export class TreeTestHarness extends TestHarness {
    protected element: Tree;

    constructor(element!: Tree) {
        super(element);
    }

    expandItemsGroup(): void {
        const firstItemGroupArrow = this.element.querySelector('smart-tree-items-group .smart-tree-items-group-arrow.down');

        this.downUp(firstItemGroupArrow as HTMLElement);
    }

    collapseItemsGroup(): void {
        const firstItemGroupArrow = this.element.querySelector('.smart-tree-items-group-expanded .smart-tree-items-group-arrow');

        this.downUp(firstItemGroupArrow as HTMLElement)
    }

    clickItemsGroup(): void {
        const firstItemGroup = this.element.querySelector('smart-tree-items-group');

        this.downUp(firstItemGroup as HTMLElement)
    }

    dblClickItemsGroup(): void {
        const firstItemGroup = this.element.querySelector('smart-tree-items-group');

        this.down(firstItemGroup as HTMLElement);
        this.down(firstItemGroup as HTMLElement);
    }

    dragItem(): void {
        this._dragToDropTarget();
        this._triggerUp();
    }

    dragItemIntoGroup(): void {
        this._dragToGroupDropTarget();
        this._triggerUp();
    }

    enterFilterValue(filterValue): void {
        const filterInput = this.element.querySelector('.smart-filter-input') as HTMLInputElement;
        filterInput.value = filterValue;

        this.keyDownUp(filterInput as HTMLElement);
    }

    selectItem(index): void {
        const items = this.element.querySelectorAll('smart-tree-items-group');

        this.downUp(items[index] as HTMLElement)
    }

    selectItems(): void {
        const items = this.element.querySelectorAll('smart-tree-items-group');

        this.downUp(items[1] as HTMLElement);
        this.downUp(items[2] as HTMLElement)
    }

    triggerF2(): void {
        const tree = this.element.querySelector('smart-tree');
        const items = tree.querySelectorAll('smart-tree-items-group');

        (tree as HTMLElement).focus();
        items[0].setAttribute('focus', 'true');

        const options = this.options;
        options.key = 'F2';

        this.keyDownUp(items[0] as HTMLElement as HTMLElement);
    }

    updateValue(): void {
        const tree = this.element.querySelector('smart-tree');
        const items = tree.querySelectorAll('smart-tree-items-group');

        (tree as HTMLElement).focus();
        items[0].setAttribute('focus', 'true');

        const options = this.options;
        options.key = 'F2';

        this.keyDownUp(items[0] as HTMLElement, options);

        const editInput = tree.querySelector('.smart-tree-edit-input') as HTMLInputElement;
        editInput.value = 'Updated value';

        this.downUp(items[1] as HTMLElement)
    }

    _dragToDropTarget(): void {
        const that = this;

        const itemsGroups = this.element.querySelectorAll('smart-tree-items-group');
        const dragTarget = itemsGroups[0];

        const dragTargetRect = dragTarget.getBoundingClientRect();
        const options = that.options;
        options.clientX = dragTargetRect.left - 1;
        options.clientY = dragTargetRect.top;
        options.pageX = dragTargetRect.left - 1;
        options.pageY = dragTargetRect.top;

        this.down(dragTarget as HTMLElement, options);

        const dropTarget = itemsGroups[1];

        const dropTargetRect = dropTarget.getBoundingClientRect();
        options.clientX = dropTargetRect.left + 5;
        options.clientY = dropTargetRect.top + dropTargetRect.height - 1; // bottom part of target
        options.pageX = dropTargetRect.left + 5;
        options.pageY = dropTargetRect.top + dropTargetRect.height - 1; // bottom part of target

        this.move(dropTarget as HTMLElement, options);
    }

    _dragToGroupDropTarget(): void {
        const that = this;

        const itemsGroups = this.element.querySelectorAll('smart-tree-items-group');
        const dragTarget = itemsGroups[0];

        const dragTargetRect = dragTarget.getBoundingClientRect();
        const options = that.options;
        options.clientX = dragTargetRect.left - 1;
        options.clientY = dragTargetRect.top;
        options.pageX = dragTargetRect.left - 1;
        options.pageY = dragTargetRect.top;

        this.down(dragTarget as HTMLElement, options);

        const dropTarget = itemsGroups[1];

        const dropTargetRect = dropTarget.getBoundingClientRect();
        options.clientX = dropTargetRect.left + 5;
        options.clientY = dropTargetRect.top + (dropTargetRect.height / 2);
        options.pageX = dropTargetRect.left + 5;
        options.pageY = dropTargetRect.top + (dropTargetRect.height / 2);

        this.move(dropTarget as HTMLElement, options);
    }

    _triggerUp(): void {
        const tree = this.element.querySelector('smart-tree');
        this.up(tree as HTMLElement);
    }
}