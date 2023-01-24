import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GroupPanelComponent } from 'smart-webcomponents-angular/grouppanel';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grouppanel', { read: GroupPanelComponent, static: false }) grouppanel!: GroupPanelComponent;

    dataSource = [
        { label: 'שם', dataField: 'Name', dataType: 'string', sortDirection: 'descending', groupIndex: 1, icon: 'name' },
        { label: 'גיל', dataField: 'Age', dataType: 'number', sortDirection: 'ascending', groupIndex: -1, icon: 'age' },
        { label: 'נשוי', dataField: 'Married', dataType: 'boolean', sortDirection: 'ascending', groupIndex: 2, icon: 'married' },
        { label: 'תאריך הגעה', dataField: 'Arrival', dataType: 'date', sortDirection: 'descending', groupIndex: 3, icon: 'arrival' },
        { label: 'תאריך עזיבה', dataField: 'Departure', dataType: 'date', sortDirection: 'ascending', groupIndex: -1, icon: 'departure' },
        { label: 'מטען', dataField: 'Luggage', dataType: 'string', sortDirection: 'descending', groupIndex: -1, icon: 'luggage' }
    ];
    messages = {
        'en': {
            'collapseAll': 'Collapse all',
            'expandAll': 'Expand all',
            'firstBy': 'Group by',
            'noGrouping': 'No grouping',
            'pickAnother': 'Pick another field to group by',
            'apply': 'Apply',
            'booleanFirst': '☐',
            'booleanLast': '☑',
            'cancel': 'Cancel',
            'dateFirst': '1',
            'dateLast': '9',
            'from': 'from',
            'numberFirst': '1',
            'numberLast': '9',
            'stringFirst': 'A',
            'stringLast': 'Z',
            'thenBy': 'then by'
        },
        'he': {
            'collapseAll': 'למוטט הכל',
            'expandAll': 'הרחב הכל',
            'firstBy': 'קבץ לפי',
            'noGrouping': 'אין קיבוץ',
            'pickAnother': 'בחר שדה אחר לקבוצה לפי',
            'apply': 'להגיש מועמדות',
            'booleanFirst': '☐',
            'booleanLast': '☑',
            'cancel': 'בטל',
            'dateFirst': '1',
            'dateLast': '9',
            'from': 'מ',
            'numberFirst': '1',
            'numberLast': '9',
            'stringFirst': 'א',
            'stringLast': 'עם',
            'thenBy': 'ואז על ידי'
        }
    };

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
    }
}