import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dblclickCheckBox', { read: CheckBoxComponent, static: false }) dblclickCheckBox!: CheckBoxComponent;
    @ViewChild('headerSelectionCheckBox', { read: CheckBoxComponent, static: false }) headerSelectionCheckBox!: CheckBoxComponent;
    @ViewChild('colheaderSelectionCheckBox', { read: CheckBoxComponent, static: false }) colheaderSelectionCheckBox!: CheckBoxComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('singleRadioButton', { read: RadioButtonComponent, static: false }) singleRadioButton!: RadioButtonComponent;
    @ViewChild('multipleRadioButton', { read: RadioButtonComponent, static: false }) multipleRadioButton!: RadioButtonComponent;
    @ViewChild('extendedRadioButton', { read: RadioButtonComponent, static: false }) extendedRadioButton!: RadioButtonComponent;

    appearance = {
        showRowHeader: true
    }

    selection = {
        enabled: true,
        mode: 'extended',
        allowCellSelection: true
    }

    dataSource = new Smart.DataAdapter({
        dataSource: GetData(3000),
        dataFields: [
            'id: number',
            'firstName: string',
            'lastName: string',
            'productName: string',
            'quantity: number',
            'price: number',
            'total: number'
        ]
    })

    columns = [
        {
            label: 'First Name', dataField: 'firstName'
        },
        { label: 'Last Name', dataField: 'lastName' },
        { label: 'Product', dataField: 'productName' },
        { label: 'Quantity', dataField: 'quantity', align: 'right', cellsAlign: 'right', },
        { label: 'Unit Price', dataField: 'price', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' },
        { label: 'Total', dataField: 'total', align: 'right', cellsAlign: 'right', cellsFormat: 'c2' }
    ]

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this;

        that.dblclickCheckBox.addEventListener('change', function () {
            that.grid.selection.action = that.dblclickCheckBox.checked ? 'doubleClick' : 'click';
        });
        that.headerSelectionCheckBox.addEventListener('change', function () {
            that.grid.selection.allowRowHeaderSelection = that.headerSelectionCheckBox.checked;
        });
        that.colheaderSelectionCheckBox.addEventListener('change', function () {
            that.grid.selection.allowColumnHeaderSelection = that.colheaderSelectionCheckBox.checked;
        });

        that.singleRadioButton.addEventListener('change', function (event) {
            if (that.singleRadioButton.checked) {
                that.grid.selection.mode = 'one';
            }
        });
        that.multipleRadioButton.addEventListener('change', function (event) {
            if (that.multipleRadioButton.checked) {
                that.grid.selection.mode = 'many';
            }
        });
        that.extendedRadioButton.addEventListener('change', function (event) {
            if (that.extendedRadioButton.checked) {
                that.grid.selection.mode = 'extended';
            }
        });
    }
}