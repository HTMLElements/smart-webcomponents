import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { ProgressBarComponent } from 'smart-webcomponents-angular/progressbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
    @ViewChild('loading', { read: ElementRef, static: false }) loading: ElementRef;

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
            table = that.table;
        let data: any;

        fetch('https://randomuser.me/api/?results=50')
            .then(response => response.json())
            .then(json => {
                that.loading.nativeElement.remove();
                data = json.results.map((dataPoint: any) => {
                    const result: any = {
                        name: dataPoint.name.first + ' ' + dataPoint.name.last,
                        country: dataPoint.location.country,
                        countryCode: dataPoint.nat,
                        mobile: dataPoint.cell,
                        landline: dataPoint.phone,
                        address: dataPoint.location.street.number + ' ' + dataPoint.location.street.name + ', ' + dataPoint.location.postcode + ' ' + dataPoint.location.city
                    }, skills = [];

                    result.proficiency = Math.floor(Math.random() * Math.floor(99)) + 1;

                    if (dataPoint.dob.age % 2 === 0) {
                        if (dataPoint.dob.age % 4 === 0) {
                            skills.push('javascript');
                        }
                        skills.push('html-5');
                        skills.push('css3');
                    }
                    else if (dataPoint.registered.age % 2) {
                        skills.push('python');
                    }
                    if (dataPoint.registered.age % 3 === 0) {
                        skills.push('react-native');
                    }
                    if (dataPoint.registered.age % 2 === 0) {
                        skills.push('angularjs');
                    }
                    else {
                        skills.push('android-os');
                    }
                    result.skills = skills.join(',');
                    return result;
                });

                table.dataSource = new window.Smart.DataAdapter({
                    dataSource: data,
                    dataFields: [
                        'name: string',
                        'country: string',
                        'skills: string',
                        'proficiency: number',
                        'mobile: string',
                        'landline: string',
                        'address: string'
                    ]
                });
                table.columnReorder = true;
                table.selection = true;
                table.sortMode = 'one';
                table.columns = [
                    { label: 'Name', dataField: 'name', dataType: 'string' },
                    {
                        label: 'Country', dataField: 'country', dataType: 'string', formatFunction(settings: any) {
                            settings.template =
                                `<div class="country-container">
                                    <img class="flag" style="width: 40px; height: 27px;" src="https://www.htmlelements.com/demos/grid/live-update-countries/flags/${data[settings.row].countryCode}.svg" />
                                    ${settings.value}
                                </div>`;
                        }
                    },
                    {
                        label: 'Skills', dataField: 'skills', dataType: 'string', allowSort: false, formatFunction(settings: any) {
                            const skills = settings.value.split(',');
                            let template = '<div class="skill-container">';
                            skills.forEach((skill: String) => template += `<img src="https://img.icons8.com/color/48/000000/${skill}.png" title="${skill}" />`);
                            settings.template = template + '</div>';
                        }
                    },
                    {
                        label: 'Proficiency', dataField: 'proficiency', dataType: 'number', formatFunction(settings: any) {
                            const value = settings.value;
                            let className;
                            if (settings.value >= 60) {
                                className = 'high';
                            }
                            else if (value >= 20) {
                                className = 'mid';
                            }
                            else {
                                className = 'low';
                            }
                            settings.template = `<smart-progress-bar class="${className}" show-progress-value value="${value}"></smart-progress-bar>`;
                        }
                    },
                    { label: 'Mobile', dataField: 'mobile', dataType: 'string' },
                    { label: 'Landline', dataField: 'landline', dataType: 'string' },
                    { label: 'Address', dataField: 'address', dataType: 'string', width: 300 }
                ];
            });

    }
}