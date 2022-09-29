window.initColumnSearch = function () {
    new window.Smart.Table('#table', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: window.generateData(50),
            dataFields: [
                'id: number',
                'firstName: string',
                'lastName: string',
                'productName: string',
                'quantity: number',
                'price: number',
                'total: number'
            ]
        }),
        onCompleted() {
            this.sortBy('lastName', 'asc');
        },
        filtering: true,
        filterRow: true,
        paging: true,
        sortMode: 'one',
        tooltip: true,
        columns: [
            { label: 'id', dataField: 'id', dataType: 'number', responsivePriority: 3 },
            { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
            { label: 'Product Name', dataField: 'productName', dataType: 'string', responsivePriority: 4 },
            { label: 'Quantity', dataField: 'quantity', dataType: 'number', responsivePriority: 5 },
            { label: 'Price', dataField: 'price', dataType: 'number', responsivePriority: 5 },
            { label: 'Total', dataField: 'total', dataType: 'number' }
        ]
    });
}