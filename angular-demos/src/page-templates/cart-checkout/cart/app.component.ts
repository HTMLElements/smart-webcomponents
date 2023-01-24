import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { MenuItemComponent } from 'smart-webcomponents-angular/menu';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { WindowComponent } from 'smart-webcomponents-angular/window';
import { GridComponent, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('smartWindow', { read: WindowComponent, static: false }) smartWindow: WindowComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('total', { read: ElementRef, static: false }) total: ElementRef;

    private productImages: Array<string> = [
        './../../../../src/images/tablet-184888_960_720.jpg',
        './../../../../src/images/quadrocopter-1658967_960_720.png',
        './../../../../src/images/battery-1049664_960_720.jpg',
    ];

    layout: object = {
        rowHeight: 100
    };

    dataSource: DataAdapter = new Smart.DataAdapter(
        {
            dataSource: [
                {
                    image: this.productImages[0],
                    title: 'Amazon - Case for Amazon Fire 7" Tablets - Black',
                    description: 'Protect your Amazon Fire 7" tablet from scratches and bumps on the go with this slim Amazon B00ZGUYN1Q case, which features a full-coverage design with polyurethane and microfiber materials for durability. The built-in stand enables hands-free viewing.',
                    price: 24.99,
                    quantity: 1,
                    total: '',
                },
                {
                    image: this.productImages[1],
                    title: '3DR - Propellers for 3DR Solo Drones (2-Pack) - Black',
                    description: '3D Robotics Propellers for Solo Drones: Buy this set of replacement propellers before you need them so you can get back to flying as soon as you damage or lose a propeller. The 1-piece design of these propellers keeps them secure during flight, self-tightening so you can install them in an instant and return to in-air fun.',
                    price: 14.95,
                    quantity: 1,
                    total: '',
                },
                {
                    image: this.productImages[2],
                    title: '3DR - Solo Smart Rechargeable Battery - Black',
                    description: '3D Robotics Battery for Solo Drones: Instead of waiting for your lone battery to recharge, get back to flying right away with this rechargeable battery for Solo drones. The battery can power your drone for up to 25 minutes with no camera attached, or 20 minutes carrying a camera.',
                    price: 149.95,
                    quantity: 2,
                    total: '',
                },
                {
                    image: this.productImages[0],
                    title: 'Amazon - Case for Amazon Fire HD 8 Tablets - Black',
                    description: 'Take your Amazon Fire HD 8 tablet on the go with this Amazon B00XM5W2WE case, which features a folio cover that guards your device\'s display and automatically wakes up your device when opened.The built-in stand offers comfortable hands-free viewing.',
                    price: 39.99,
                    quantity: 3,
                    total: '',
                },
            ],

            dataFields:
                [
                    'image: string',
                    'title: string',
                    'description: string',
                    'price: string',
                    'quantity: string',
                    'total: string',
                ]
        });

    columns: Array<object> = [
        {
            label: '', dataField: 'image', cellsAlign: 'center', align: 'center', width: '10%',
            template: function (formatObject: any) {
                if (!formatObject.template) {
                    formatObject.template = '<i class="material-icons delete-product-icon" id="' + formatObject.row.visibleIndex + '">close</i><img class="product-image" src = "' + formatObject.value + '" />';
                }
            }
        },
        {
            label: 'Name', dataField: 'title', width: '40%', formatFunction(settings) {
                settings.template = '<span class="product-title">' + settings.row.data.title + '</span><span class="product-description">' + settings.row.data.description + '</span>';
            }
        },
        {
            label: 'Price', dataField: 'price', cellsAlign: 'center', align: 'center', width: '20%', template: function (formatObject) {
                if (!formatObject.template) {
                    formatObject.template = '$' + formatObject.value;
                }
            }
        },
        {
            label: 'Quantity', dataField: 'quantity', width: '10%', cellsAlign: 'center', align: 'center', formatFunction(settings) {
                settings.template = '<jqx-input placeholder="Quantity" value=' + settings.row.data.quantity + '></jqx-input>';
            }
        },
        {
            label: 'Total', dataField: 'total', cellsAlign: 'center', align: 'center', width: '20%', formatFunction(settings) {
                settings.template = '$' + parseFloat(settings.row.data.price) * parseFloat(settings.row.data.quantity);
            }
        }
    ];

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.

        this.init();
    }

    init(): void {
        // init code.

        const that = this,
            grid = that.grid,
            smartWindow = that.smartWindow,
            total = that.total.nativeElement;
        let gridIdToRemove = 0;

        const closeDeleteModal = (confirmDelete = 0) => {
            if (confirmDelete === 1) {
                grid.rows.splice(gridIdToRemove, 1);
            }

            smartWindow.close();
        }

        grid.addEventListener('click', function (e: CustomEvent): void {
            const target: HTMLElement = e.target as HTMLElement;

            if (target.classList.contains('delete-product-icon')) {
                gridIdToRemove = parseInt(target.id);
                smartWindow.open();
            }
        });

        smartWindow.addEventListener('click', function (e: CustomEvent): void {
            const target: HTMLElement = e.target as HTMLElement;

            if (target.textContent === 'YES') {
                let totalSelector = total;
                let totalContent = totalSelector.innerText;

                totalContent = totalContent.replace(',', '.');
                totalContent = totalContent.split(': $')[1];
                totalContent = parseFloat(totalContent).toFixed(2);

                const col = grid.rows[gridIdToRemove]._cells[4].row.data;

                let deleteProdPrice: number = (parseFloat(parseFloat(col.price).toFixed(2)) * parseInt(col.quantity));

                totalContent = totalContent - deleteProdPrice;
                totalContent = parseFloat(totalContent.toFixed(2));

                totalSelector.innerText = 'Total: $' + totalContent;

                closeDeleteModal(1);
            }

            if (target.textContent === 'NO') {
                closeDeleteModal();
            }
        });
    }
}