import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { GroupPanelComponent, Smart } from 'smart-webcomponents-angular/grouppanel';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('grouppanel', { read: GroupPanelComponent, static: false }) grouppanel!: GroupPanelComponent;
    @ViewChild('dataContainer', { read: ElementRef, static: false }) dataContainer!: ElementRef;

    dataSource = [
        { label: 'First Name', dataField: 'firstName', dataType: 'string', sortDirection: 'ascending', groupIndex: 2, icon: 'firstname' },
        { label: 'Last Name', dataField: 'lastName', dataType: 'string', sortDirection: 'ascending', groupIndex: 1, icon: 'lastname' },
        { label: 'Quantity', dataField: 'quantity', dataType: 'number', sortDirection: 'ascending', groupIndex: 3, icon: 'quantity' }
    ];

    theme = {
        border: '1px solid black',
        borderCollapse: 'collapse',
        header: {
            height: '90px',
            backgroundColor: '#00137F',
            color: '#FFFFFF',
            border: '1px solid black',
            fontSize: '14px',
            fontWeight: 'bold',
            firstName: {
                width: '300px'
            },
            lastName: {
                width: '300px',
                backgroundColor: '#DDDDDD',
                color: '#555555'
            },
            quantity: {
                textAlign: 'right'
            }
        },
        columns: {
            border: '1px solid black',
            lastName: {
                backgroundColor: '#DDDDDD',
                color: '#555555'
            },
            quantity: {
                textAlign: 'right'
            }
        },
        rows: {
            backgroundColor: '#EEEAEA',
            height: '50px',
            alternationCount: 2,
            alternationIndex0Color: '#FFFFFF',
            alternationIndex0BackgroundColor: '#0078CE'
        }
    };

    sampleData: { firstName: string, lastName: string, quantity: string | number }[] = [{ firstName: 'First name', lastName: 'Last name', quantity: 'Quantity' }];

    groupBy = ['lastName', 'firstName', 'quantity'];

    exportToHTML(): void {
        const dataExporter = new Smart.Utilities.DataExporter({ style: this.theme, exportHeader: true }, this.groupBy);
        dataExporter.exportData(this.sampleData, 'html', 'sampleData');
    }

    exportToPDF(): void {
        const dataExporter = new Smart.Utilities.DataExporter({ style: this.theme, exportHeader: true }, this.groupBy);
        dataExporter.exportData(this.sampleData, 'pdf', 'sampleData');
    }

    exportToXLSX(): void {
        const dataExporter = new Smart.Utilities.DataExporter({ style: this.theme, exportHeader: true }, this.groupBy);
        dataExporter.exportData(this.sampleData, 'xlsx', 'sampleData');
    }

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
            firstNames = ['Samuel', 'Peter', 'Lilly'],
            lastNames = ['Jackson', 'Shelly'],
            quantities = [1, 2, 7, 17];

        for (let i = 1; i < 50; i++) {
            const row = {
                firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
                lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
                quantity: quantities[Math.floor(Math.random() * quantities.length)]
            }
            that.sampleData[i] = row;
        }

        that.dataContainer.nativeElement.innerHTML = JSON.stringify(that.sampleData.slice(0, 5));

        that.grouppanel.addEventListener('apply', function (event: CustomEvent) {
            that.groupBy = event.detail.value.map((column: { label: string; dataField: string; dataType: string; sortDirection: string; groupIndex: number; icon: string; }) => column.dataField);
        });
    }
}