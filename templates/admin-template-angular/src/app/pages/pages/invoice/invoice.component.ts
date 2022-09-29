import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InvoiceComponent {

  invoiceData = [
    { description: 'Premium support', quantity: 1, amount: 199 },
    { description: 'Custom development hours', quantity: 7, amount: 210 },
    { description: 'Debug session', quantity: 3, amount: 120 },
    { description: '', quantity: 'Subtotal', amount: 529 },
    { description: '', quantity: 'Shipping', amount: 12 },
    { description: '', quantity: 'Discount', amount: '8%' },
    { description: '', quantity: 'Total', amount: 497.72 }
  ];

  invoiceTableData = {
    dataSource: this.invoiceData,
    columns: [
      { label: 'Description', dataField: 'description', dataType: 'string' },
      {
        label: 'Quantity', dataField: 'quantity', dataType: 'string', formatFunction(settings: any) {
          if (isNaN(settings.value)) {
            settings.template = `<strong>${settings.value}</strong>`;
          }
        }
      },
      {
        label: 'Amount', dataField: 'amount', dataType: 'string', formatFunction(settings: any) {
          if (settings.value.indexOf('%') === -1) {
            settings.template = '$' + parseFloat(settings.value).toFixed(2);
          }
        }
      }
    ]
  }
  constructor() { }

}
