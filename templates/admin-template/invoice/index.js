window.initInvoice = function () {
    const invoiceData = [
        { description: 'Premium support', quantity: 1, amount: 199 },
        { description: 'Custom development hours', quantity: 7, amount: 210 },
        { description: 'Debug session', quantity: 3, amount: 120 },
        { description: '', quantity: 'Subtotal', amount: 529 },
        { description: '', quantity: 'Shipping', amount: 12 },
        { description: '', quantity: 'Discount', amount: '8%' },
        { description: '', quantity: 'Total', amount: 497.72 }
    ];

    new window.Smart.Table('#invoiceTable', {
        dataSource: invoiceData,
        tooltip: true,
        columns: [
            { label: 'Description', dataField: 'description', dataType: 'string' },
            {
                label: 'Quantity', dataField: 'quantity', dataType: 'string', formatFunction(settings) {
                    if (isNaN(settings.value)) {
                        settings.template = `<strong>${settings.value}</strong>`;
                    }
                }
            },
            {
                label: 'Amount', dataField: 'amount', dataType: 'string', formatFunction(settings) {
                    if (settings.value.indexOf('%') === -1) {
                        settings.template = '$' + parseFloat(settings.value).toFixed(2);
                    }
                }
            }
        ]
    });
}