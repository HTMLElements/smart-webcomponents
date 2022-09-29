import './Invoice.scss';
import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, Table } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function Invoice() {

    const invoiceData = [
        { description: 'Premium support', quantity: 1, amount: 199 },
        { description: 'Custom development hours', quantity: 7, amount: 210 },
        { description: 'Debug session', quantity: 3, amount: 120 },
        { description: '', quantity: 'Subtotal', amount: 529 },
        { description: '', quantity: 'Shipping', amount: 12 },
        { description: '', quantity: 'Discount', amount: '8%' },
        { description: '', quantity: 'Total', amount: 497.72 }
    ];

    useEffect(() => { document.title = `Invoice - ${defaultTitle}` }, []);

    const invoiceTableData = {
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
                    
                    if (settings.value.toString().indexOf('%') === -1) {
                        settings.template = '$' + parseFloat(settings.value).toFixed(2);
                    }
                }
            }
        ]
    }

    return (
        <div className="container invoice-page">
            <div className="row">
                <div className="col-12 mb-3"><h4>Invoice Preview</h4></div>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="invoice">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-between">
                                    <h5 className="">Invoice #0000045</h5>
                                    <h6>Order #56</h6>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-6">
                                        <address>
                                            <strong>Billed To:</strong><br />
                                            John Smith<br />
                                            1234 Main<br />
                                            Apt. 4B<br />
                                            Springfield, ST 54321
                                        </address>
                                    </div>
                                    <div className="col-6 text-right">
                                        <address>
                                            <strong>Shipped To:</strong><br />
                                            Jane Smith<br />
                                            1234 Main<br />
                                            Apt. 4B<br />
                                            Springfield, ST 54321
                                        </address>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <address>
                                            <strong>Payment Method:</strong><br />
                                            Visa ending **** 4242<br />
                                            jsmith@email.com
                                        </address>
                                    </div>
                                    <div className="col-6 text-right">
                                        <address>
                                            <strong>Order Date:</strong><br />
                                            March 7, 2014<br /><br />
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-md-12">
                                <h5 className="">Order summary</h5>

                                <div className="table-responsive">
                                    <Table
                                        id="invoiceTable"
                                        className="table table-condensed no-border"
                                        {...invoiceTableData}
                                    ></Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="printContainer" className="mt-3">
                <Button className="primary">Print invoice</Button>
            </div>
        </div>
    )
}

export default withAnimation(Invoice)