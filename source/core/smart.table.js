
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
* Table custom element.
*/
Smart('smart-table', class Table extends Smart.ContentElement {
    /** 
    * Table's properties 
    */
    static get properties() {
        return {
            'columns': {
                value: null,
                type: 'any?',
                reflectToAttribute: false
            },
            'dataSource': {
                value: null,
                type: 'any?',
                reflectToAttribute: false
            },
            'sortMode': {
                value: 'none',
                type: 'string',
                allowedValues: ['none', 'one', 'many']
            }
        }
    }


    /**
     * ListBox's event listeners.
     */
    static get listeners() {
        return {
            'tableContainer.down': 'downHandler'
        };
    }

    template() {
        return `<div id="container" class="smart-container">
					   <table id="tableContainer" inner-h-t-m-l=\'[[innerHTML]]\' class ="smart-table-container">
							<content></content>
                       </table>              
                </div>`;
    }

    ready() {
        const that = this;

        that.dataBind();
    }

    _initColumns() {
        const that = this;

        that._columns = [];
        that.columnByDataField = [];

        for (let i = 0; i < that.columns.length; i++) {
            let boundColumn = that.columns[i];

            if (typeof boundColumn === 'string') {
                if (that.dataSource.dataFields) {
                    const field = that.dataSource.dataFields.find(field => {
                        if (field.name === boundColumn) {
                            return field;
                        }
                    });

                    boundColumn = { label: boundColumn, dataField: boundColumn, dataType: field ? field.dataType || 'string' : 'string' };
                }
            }

            that._columns.push(boundColumn);
            that.columnByDataField[boundColumn.dataField] = boundColumn;
        }
    }

    _initRows() {
        const that = this;

        that.rows = [];
        that.rowById = [];

        const addNewRow = function (data, index) {
            const row = { data: data, boundIndex: index };

            that.rowById[row.uid] = row;
            that.rows.push(row);
        }

        const removeLastRow = function () {
            const lastRow = that.rows[that.rows.length - 1];
            delete that.rowById[lastRow.uid];

            that.rows.pop();
        }

        const removeAt = function (index) {
            const lastRow = that.rows[that.rows.length - 1];
            delete that.rowById[lastRow.uid];

            that.rows.splice(index, 1);
        }

        for (let i = 0; i < that.dataSource.length; i++) {
            const data = that.dataSource[i];

            addNewRow(data, i);
        }

        that.dataSource.notify(function (changes) {
            if (that.dataSource._updating) {
                return;
            }

            const data = changes.data;

            that.rows.canNotify = false;

            switch (changes.action) {
                case 'add':
                    if (data.length) {
                        for (let i = 0; i < data.length; i++) {
                            addNewRow(data[i], that.dataSource.length - data.length + i);
                        }
                    }
                    else {
                        addNewRow(data, that.dataSource.length - 1);
                    }

                    break;
                case 'update':
                    if (data.length) {
                        for (let i = 0; i < data.length; i++) {
                            const index = changes.index[i];

                            that.rows[index].data = data[i];
                        }
                    }
                    else {
                        const index = changes.index;
                        that.rows[index].data = data;
                    }

                    break;
                case 'insert':
                    addNewRow(data, changes.index);

                    for (let i = 0; i < that.rows.length; i++) {
                        const row = that.rows[i];

                        row.dataIndex = i;
                    }
                    break;
                case 'remove':
                    removeAt(changes.index);
                    break;
                case 'removeLast':
                    removeLastRow();
                    break;
            }

            that.rows.canNotify = true;

            that.refresh();
        });


        that.rows = new Smart.ObservableArray(that.rows)

        for (let i = 0; i < that.rows.length; i++) {
            const row = that.rows[i];

            row.propertyChanged = function (propertyName, oldValue, newValue) {
            }
        }
        that.rows.notify(function (changes) {
            if (!that.rows.canNotify) {
                return;
            }

            if (changes.path) {
                return;
            }

            that.rows.canNotify = false;

            const changeType = changes.action;

            if (!that.dataSource) {
                return;
            }

            that.dataSource.canNotify = false;

            switch (changeType) {
                case 'add':
                    that.dataSource.add(that.rows[changes.index])
                    break;
                case 'update':
                    that.dataSource.update(changes.index, that.rows[changes.index]);
                    break;
                case 'remove':
                    that.dataSource.remove(changes.index);
                    break;
            }

            that.dataSource.canNotify = true;
            that.rows.canNotify = true;
            that.refresh();
        });

    }

    downHandler(event) {
    }


    refresh() {
        const that = this;

        let columns = '<thead><tr>';
        let rows = '<tbody>';

        for (let i = 0; i < that._columns.length; i++) {
            const column = that._columns[i];

            columns += '<th scope="col">' + column.label + '</th>';
        }

        columns += '</tr></thead>'

        for (let i = 0; i < that.rows.length; i++) {
            const row = that.rows[i];

            rows += '<tr>';

            for (let j = 0; j < that._columns.length; j++) {
                const column = that._columns[j];

                rows += '<td>' + row.data[column.dataField] + '</td>';
            }

            rows += '</tr>';

        }

        rows += '</tbody>';

        that.innerHTML = columns + rows;

        const headerCellElements = that.querySelectorAll('th');

        for (let i = 0; i < that._columns.length; i++) {
            const column = that._columns[i];

            column.headerCellElement = headerCellElements[i];

            column.headerCellElement.onclick = function () {
                if (that.sortMode === 'none') {
                    return;
                }

                if (!this.headerCellElement.sortIconContainerElement) {
                    this.headerCellElement.innerHTML += '<span class="sort-by"></span>';
                    this.headerCellElement.sortIconContainerElement = this.headerCellElement.lastChild;
                }

                if (this.headerCellElement.sortIconContainerElement.classList.contains('asc')) {
                    that.sortBy(this.dataField, 'desc');
                }
                else if (this.headerCellElement.sortIconContainerElement.classList.contains('desc')) {
                    that.sortBy(this.dataField, null);
                }
                else {
                    that.sortBy(this.dataField, 'asc');
                }

            }.bind(column);
        }

        if (that._sortColumns && that._sortColumns.length > 0) {
            for (let i = 0; i < that._sortColumns.length; i++) {
                const sortColumn = that._sortColumns[i];
                const column = that.columnByDataField[sortColumn.dataField];

                if (!column.headerCellElement.sortIconContainerElement) {
                    column.headerCellElement.innerHTML += '<span class="sort-by ' + sortColumn.direction + '"></span>';
                    column.headerCellElement.sortIconContainerElement = column.headerCellElement.lastChild;
                }
            }
        }
    }

    dataBind() {
        const that = this;

        if (!that.dataSource) {
            if (!that.columns) {
                that.columns = [];
                that.dataFields = [];

                const th = document.querySelectorAll('th');

                for (let i = 0; i < th.length; i++) {
                    const label = th[i].innerHTML.trim();
                    let boundColumn = { label: label, dataField: label, dataType: 'string' };

                    that.columns.push(boundColumn);
                    that.dataFields.push(label);
                }
            }

            let rows = [];

            if (!that.rows) {
                const tr = document.querySelectorAll('tr');

                for (let i = 0; i < tr.length; i++) {
                    const row = tr[i];
                    const newRow = {};
                    const td = row.querySelectorAll('td');

                    if (td.length > 0) {
                        for (let j = 0; j < that.columns.length; j++) {
                            const column = that.columns[j];

                            newRow[column.dataField] = td[j].innerHTML.trim();
                        }

                        rows.push(newRow);
                    }
                }

                that.dataSource = new Smart.DataAdapter(
                    {
                        dataSource: rows,
                        dataFields: that.dataFields
                    });
            }

            const tables = that.querySelectorAll('table');

            if (tables.length > 1) {
                tables[tables.length - 1].parentNode.removeChild(tables[tables.length - 1]);
            }
        }

        that._initColumns();
        that._initRows();
        that.refresh();
    }


    sortBy(columnDataField, sortOrder) {
        const that = this;
        const column = that.columnByDataField[columnDataField];
        const sortDataFields = [];
        const sortOrders = [];
        const sortDataTypes = [];

        const addSortIconContainer = function (column) {
            if (!column.headerCellElement.sortIconContainerElement) {
                column.headerCellElement.innerHTML += '<span class="sort-by"></span>';
                column.headerCellElement.sortIconContainerElement = column.headerCellElement.lastChild;
            }
        }

        const clearSortColumn = function (column) {
            addSortIconContainer(column);

            column.headerCellElement.sortIconContainerElement.classList.remove('desc');
            column.headerCellElement.sortIconContainerElement.classList.remove('asc');
            column.sortOrder = null;
        }

        const clearSortColumns = function () {
            if (that._sortColumns && that._sortColumns.length > 0) {
                for (let i = 0; i < that._sortColumns.length; i++) {
                    const sortColumn = that._sortColumns[i];
                    const column = that.columnByDataField[sortColumn.dataField];

                    clearSortColumn(column);
                }
            }

            that._sortColumns = [];
        }

        const sort = function () {
            that.dataSource._sort(that.dataSource.boundSource, sortDataFields, sortOrders, sortDataTypes);

            for (let i = 0; i < that.dataSource.length; i++) {
                const row = that.rows[i];
                const data = that.dataSource[i];

                row.data = data;
                row.boundIndex = data.boundIndex;
            }

            that.refresh();
        }

        if (column === null || column === undefined) {
            if (that._sortColumns && that._sortColumns.length > 0) {
                clearSortColumns();
                sort();
            }

            return;
        }

        if (that.sortMode === 'none' || !that.dataSource) {
            return;
        }

        if (sortOrder && column.sortOrder === sortOrder) {
            return;
        }

        let sortColumnDirection = sortOrder || 'asc';

        clearSortColumn(column);

        if (!that._sortColumns) {
            that._sortColumns = [];
        }

        let dataType = 'string';

        for (let i = 0; i < that.dataSource.dataFields.length; i++) {
            const field = that.dataSource.dataFields[i];

            if (field.name === columnDataField) {
                dataType = field.dataType;
                break;
            }
        }

        let addNewSortColumn = true;

        for (let i = 0; i < that._sortColumns.length; i++) {
            const sortColumn = that._sortColumns[i];

            if (sortColumn.dataField === columnDataField) {
                addNewSortColumn = false;

                if (sortColumn.direction === 'asc') {
                    sortColumn.direction = 'desc';
                    sortColumnDirection = 'desc';
                }
                else if (sortColumn.direction === 'desc') {
                    that._sortColumns.splice(i, 1);
                    clearSortColumn(column);
                    sortColumnDirection = null;
                    break;
                }
            }
        }

        if (addNewSortColumn) {
            if (that.sortMode === 'one') {
                clearSortColumns();
            }

            that._sortColumns.push({ dataField: columnDataField, direction: sortColumnDirection, dataType: dataType });
        }

        addSortIconContainer(column);

        if (sortColumnDirection !== null) {
            column.headerCellElement.sortIconContainerElement.classList.remove('asc');
            column.headerCellElement.sortIconContainerElement.classList.remove('desc');
            column.sortOrder = sortColumnDirection;

            if (sortColumnDirection === 'desc') {
                column.headerCellElement.sortIconContainerElement.classList.add('desc');
            }
            else {
                column.headerCellElement.sortIconContainerElement.classList.add('asc');
            }
        }
        else {
            column.headerCellElement.sortIconContainerElement.classList.remove('asc');
            column.headerCellElement.sortIconContainerElement.classList.remove('desc');
        }

        for (let i = 0; i < that._sortColumns.length; i++) {
            const sortColumn = that._sortColumns[i];

            sortDataFields.push(sortColumn.dataField);
            sortOrders.push(sortColumn.direction);
            sortDataTypes.push(sortColumn.dataType);
        }

        sort();
    }

    /**
     * Clears the sorting of all columns
     */
    clearSort() {
        this.sortBy(null);
    }
});