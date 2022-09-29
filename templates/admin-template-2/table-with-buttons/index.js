window.initTableWithButtons = function () {
    new window.Smart.Table('#table', {
        dataSource: new window.Smart.DataAdapter({
            dataSource: window.generateData(50),
            dataFields: [
                'id: number',
                'firstName: string',
                'lastName: string',
                'productName: string',
                'quantity: number',
                'price: number'
            ]
        }),
        onCompleted() {
            this.sortBy('lastName', 'asc');
        },
        filtering: true,
        paging: true,
        sortMode: 'one',
        tooltip: true,
        columns: [
            { label: 'id', dataField: 'id', dataType: 'number', responsivePriority: 3 },
            { label: 'First Name', dataField: 'firstName', dataType: 'string', responsivePriority: 4 },
            { label: 'Last Name', dataField: 'lastName', dataType: 'string' },
            { label: 'Product Name', dataField: 'productName', dataType: 'string' },
            { label: 'Quantity', dataField: 'quantity', dataType: 'number', responsivePriority: 3 },
            { label: 'Price', dataField: 'price', dataType: 'number', responsivePriority: 3 },
            {
                label: '', dataField: '', width: 155, formatFunction: function (settings) {
                    settings.template = '<div class="actions-container"><smart-button class="small-button outlined primary">Copy</smart-button><smart-button class="small-button outlined error">Remove</smart-button></div>';
                }
            }
        ]
    });
}