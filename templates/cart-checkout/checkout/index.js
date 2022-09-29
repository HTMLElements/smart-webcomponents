new Smart.Grid('#productCheckout', {
    layout: {
        rowHeight: 50
    },
    dataSource: new Smart.DataAdapter(
        {
            dataSource: [
                {
                    title: 'Amazon - Case for Amazon Fire 7" Tablets - Black',
                    price: 24.99,
                    quantity: 1,
                },
                {
                    title: '3DR - Propellers for 3DR Solo Drones (2-Pack) - Black',
                    price: 14.95,
                    quantity: 1,
                },
                {
                    title: '3DR - Solo Smart Rechargeable Battery - Black',
                    price: 149.95,
                    quantity: 2,
                },
                {
                    title: 'Amazon - Case for Amazon Fire HD 8 Tablets - Black',
                    price: 39.99,
                    quantity: 3,
                },
                {
                    title: '<b>Total</b>',
                    price: 459.81,
                    quantity: 0,
                },

            ],
            dataFields:
                [
                    'title: string',
                    'price: string',
                    'quantity: string',
                ]
        }),
    columns: [
        {
            label: 'Product', dataField: 'title', width: '70%', formatFunction(settings) {
                settings.template = settings.row.data.title + (settings.row.data.quantity > 0 ? ' x ' + settings.row.data.quantity : '');
            }
        },
        {
            label: 'Total', dataField: 'quantity', width: '30%', cellsAlign: 'right', align: 'right', formatFunction(settings) {
                settings.template = (settings.row.data.quantity > 0 ? '$' + (parseFloat(settings.row.data.price) * parseFloat(settings.row.data.quantity)) : '<b>$' + settings.row.data.price + '</b>');
            }
        },
    ]

});