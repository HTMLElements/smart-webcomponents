import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { GetData } from '../../common/data';
import { App } from 'smart-webcomponents-angular/source/smart.core';
import { smartGrid } from 'smart-webcomponents-angular/source/modules/smart.grid';
import { smartDropDownList } from 'smart-webcomponents-angular/source/modules/smart.dropDownList';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const app = new App({
            selector: "#app",
            components: [smartGrid, smartDropDownList],
            template: {
                "#grid": {
                    properties: {
                        columns: [
                            {
                                label: 'First Name', dataField: 'firstName'
                            },
                            { label: 'Last Name', dataField: 'lastName' },
                            { label: 'Product', dataField: 'productName' },
                            { label: 'Available', dataField: 'available', template: 'checkBox', editor: 'checkBox' },
                            { label: 'Quantity', dataField: 'quantity', editor: 'numberInput' },
                            { label: 'Unit Price', dataField: 'price', editor: 'numberInput', cellsFormat: 'c2' }
                        ]
                    },
                    bind: {
                        dataSource: 'data',
                        computed: function (propertyObject) {
                            const item = propertyObject.item;
                            const value = propertyObject.value;
                            if (propertyObject.name === 'data') {
                                propertyObject.value = new Smart.DataAdapter({
                                    dataSource: propertyObject.value,
                                    dataFields: [
                                        'id: number',
                                        'firstName: string',
                                        'lastName: string',
                                        'productName: string',
                                        'available: bool',
                                        'quantity: number',
                                        'price: number',
                                        'total: number'
                                    ]
                                });
                            }
                        }
                    }
                },
                "#dropDownList": {
                    properties: {
                        displayMember: 'firstName'
                    },
                    bind: {
                        dataSource: 'data',
                        selectedIndexes: 'index'
                    }
                }
            },
            data: {
                index: [1],
                data: GetData(100),
                message: "Hello Smart World"
            },
            render: function () {
                return `
    	       <smartGrid id="grid"></smartGrid>
    		    <br/><br/>
    	        <span>
    			    {{message}}
    	        </span>
    	       <br/><br/>
    	       <smartDropDownList id="dropDownList"></smartDropDownList>
             `
            }
        });

        Smart.Render();
    }
}