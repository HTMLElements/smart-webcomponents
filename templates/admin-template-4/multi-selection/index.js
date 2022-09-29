window.initMultiSelection = function () {
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
            this.select([3, 5, 11]);
        },
        paging: true,
        selection: true,
        sortMode: 'one',
        tooltip: true,
        columns: [
            { label: 'id', dataField: 'id', dataType: 'number' },
            { label: 'First Name', dataField: 'firstName', dataType: 'string', responsivePriority: 4 },
            { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
            { label: 'Product Name', dataField: 'productName', dataType: 'string' },
            { label: 'Quantity', dataField: 'quantity', dataType: 'number', responsivePriority: 3 },
            { label: 'Price', dataField: 'price', dataType: 'number', responsivePriority: 3 },
            { label: 'Total', dataField: 'total', dataType: 'number' }
        ]
    });
}