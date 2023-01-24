import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent, Button } from 'smart-webcomponents-angular/button';
import { GridComponent, GridColumn, DataAdapter, Smart } from 'smart-webcomponents-angular/grid';
import { SplitterComponent } from 'smart-webcomponents-angular/splitter';
import { GetData } from '../../common/data';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('collapseBtn', { read: ButtonComponent, static: false }) collapseBtn!: ButtonComponent;
    @ViewChild('expandBtn', { read: ButtonComponent, static: false }) expandBtn!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
    @ViewChild('button8', { read: ButtonComponent, static: false }) button8!: ButtonComponent;
    @ViewChild('button9', { read: ButtonComponent, static: false }) button9!: ButtonComponent;
    @ViewChild('button10', { read: ButtonComponent, static: false }) button10!: ButtonComponent;
    @ViewChild('button11', { read: ButtonComponent, static: false }) button11!: ButtonComponent;
    @ViewChild('button12', { read: ButtonComponent, static: false }) button12!: ButtonComponent;
    @ViewChild('button13', { read: ButtonComponent, static: false }) button13!: ButtonComponent;
    @ViewChild('button14', { read: ButtonComponent, static: false }) button14!: ButtonComponent;
    @ViewChild('button15', { read: ButtonComponent, static: false }) button15!: ButtonComponent;
    @ViewChild('button16', { read: ButtonComponent, static: false }) button16!: ButtonComponent;
    @ViewChild('button17', { read: ButtonComponent, static: false }) button17!: ButtonComponent;
    @ViewChild('button18', { read: ButtonComponent, static: false }) button18!: ButtonComponent;
    @ViewChild('button19', { read: ButtonComponent, static: false }) button19!: ButtonComponent;
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
    @ViewChild('dashboard', { read: SplitterComponent, static: false }) dashboard!: SplitterComponent;

    layout = {
        rowHeight: 60
    }

    dataSource = new Smart.DataAdapter({
        dataSource: [
            {
                'title': 'Fix mdm encryption cert',
                'author': 'Nancy',
                'buildNum': 10397,
                'status': 'in-progress',
                'branch': 'master',
                'date': new Date()
            },
            {
                'title': 'Add mc cert - use rotatable secret for every iteration',
                'author': 'Andrew',
                'buildNum': 10396,
                'status': 'testing',
                'branch': 'develop',
                'date': new Date(2020, 10, 10)
            },
            {
                'title': 'Cleanup auth handlers. Use handlers from the service',
                'author': 'Laura',
                'buildNum': 10395,
                'status': 'done',
                'branch': 'master',
                'date': new Date(2020, 10, 11)
            },
            {
                'title': 'Make kusto and admin app optional',
                'author': 'Anne',
                'buildNum': 10394,
                'status': 'warning',
                'branch': 'feature/2-factor-auth',
                'date': new Date(2020, 10, 10)
            },
            {
                'title': '[Streaming][Bug] Closing stream before injecting',
                'author': 'Nancy',
                'buildNum': 10392,
                'status': 'done',
                'branch': 'master',
                'date': new Date(2020, 10, 22)
            },
            {
                'title': 'Fix deployment arm param',
                'author': 'Andrew',
                'buildNum': 10391,
                'status': 'done',
                'branch': 'master',
                'date': new Date(2020, 10, 23)
            },
            {
                'title': '[Streaming] Handling oversized payload by finder',
                'author': 'Andrew',
                'buildNum': 10390,
                'status': 'done',
                'branch': 'feature/some-feature',
                'date': new Date(2020, 10, 27)
            },
            {
                'title': 'Fixing RDP bug',
                'author': 'Andrew',
                'buildNum': 10389,
                'status': 'error',
                'branch': 'master',
                'date': new Date(2020, 10, 14)
            },
            {
                'title': 'Fix KV URL resolution',
                'author': 'Laura',
                'buildNum': 10388,
                'status': 'done',
                'branch': 'hotfix/view-perf',
                'date': new Date(2020, 10, 11)
            },
            {
                'title': 'Fix debug console output when running unit tests',
                'author': 'Anne',
                'buildNum': 10387,
                'status': 'done',
                'branch': 'master',
                'date': new Date(2020, 10, 17)
            },
            {
                'title': 'Fix mdn encryption cert',
                'author': 'Nancy',
                'buildNum': 10386,
                'status': 'in-progress',
                'branch': 'master',
                'date': new Date(2020, 10, 18)
            },
            {
                'title': 'KV URL resolution implementation',
                'author': 'Andrew',
                'buildNum': 10385,
                'status': 'error',
                'branch': 'master',
                'date': new Date(2020, 10, 21)
            },
            {
                'title': 'RDP implementation',
                'author': 'Laura',
                'buildNum': 10384,
                'status': 'warning',
                'branch': 'master',
                'date': new Date(2020, 10, 15)
            },
            {
                'title': 'RDP implementation',
                'author': 'Laura',
                'buildNum': 10383,
                'status': 'testing',
                'branch': 'master',
                'date': new Date(2020, 10, 1)
            },
            {
                'title': '[Streaming][Bug] Stream bugfixes',
                'author': 'Nancy',
                'buildNum': 10382,
                'status': 'done',
                'branch': 'master',
                'date': new Date(2020, 10, 12)
            }
        ],
        dataFields: [
            'author: string',
            'title: string',
            'buildNum: string',
            'status: string',
            'branch: string',
            'date: string'
        ]
    })

    columns = [
        {
            label: 'Commit', dataField: 'Photo', width: '5%', cellsVerticalAlign: 'middle', verticalAlign: 'middle', align: 'center', cellsAlign: 'center', allowHide: false, formatFunction(settings) {
                if (settings.row.grid.isInitialized && settings.row.data && settings.row.data.author) {
                    settings.template = '<img style="width: 32px" class="logo" src="./../../../src/images/phonebook/' + settings.row.data.author + '.png"/>';
                }
            }
        },
        {
            label: '', dataField: 'author', width: '45%', formatFunction(settings) {
                settings.template = '<span class="commit-title">' + settings.row.data.title + '</span><span class="author-name">' + settings.row.data.author + '</span>';
            }
        },
        {
            label: '', icon: 'fa-thumb-tack', width: '5%', showIcon: true, cellsAlign: 'right', align: 'right', formatFunction(settings) {
                settings.template = '<span class="custom-icon fa-thumb-tack rotate45deg"></span>';
            }
        },
        {
            label: 'Build #', dataField: 'buildNum', width: '10%', formatFunction(settings) {
                if (settings.row.data.status === 'in-progress') {
                    settings.template = '<div class="normal-circle"></div>' + settings.row.data.buildNum;
                }
                else if (settings.row.data.status === 'done') {
                    settings.template = '<div class="custom-icon fa-check-circle"></div>' + settings.row.data.buildNum;
                }
                else if (settings.row.data.status === 'warning') {
                    settings.template = '<div class="custom-icon fa-exclamation-circle"></div>' + settings.row.data.buildNum;
                }
                else if (settings.row.data.status === 'error') {
                    settings.template = '<div class="custom-icon fa-times-circle"></div>' + settings.row.data.buildNum;
                }
                else if (settings.row.data.status === 'testing') {
                    settings.template = '<div class="dashed-circle"></div>' + settings.row.data.buildNum;
                }
                else {
                    settings.template = settings.row.data.buildNum;
                }
            }
        },
        { label: 'Branch', width: '20%', cellsAlign: 'center', align: 'center', dataField: 'branch' },
        {
            label: 'Date/Time', dataField: 'date', width: '15%', align: 'right', cellsAlign: 'right', formatFunction(settings) {
                const isToday = (someDate) => {
                    const today = new Date();
                    return someDate.getDate() === today.getDate() &&
                        someDate.getMonth() === today.getMonth() &&
                        someDate.getFullYear() === today.getFullYear();
                };
                const calculateDaysDifference = (someDate) => {
                    const date = new Date();
                    return (date.getDate() - someDate.getDate());
                };
                let commitDate = new Date(settings.row.data.date);
                if (isToday(commitDate)) {
                    settings.template = commitDate.getHours() + ':' + commitDate.getMinutes();
                }
                else if (calculateDaysDifference(commitDate) <= 6) {
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    settings.template = days[commitDate.getDay()] + ', ' + commitDate.getHours() + ':' + commitDate.getMinutes();
                }
                else {
                    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    settings.template = commitDate.getDate() + ' ' + months[commitDate.getMonth()] + ', ' + commitDate.getHours() + ':' + commitDate.getMinutes();
                }
            }
        }
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

        that.dashboard.hideBar(0);
        that.expandBtn.addEventListener('click', () => {
            that.dashboard.nativeElement.update(0, { size: 240 });
            that.dashboard.nativeElement.setAttribute('expanded', '');

            (document.querySelector('.company-logo-holder img') as HTMLElement).style.display = 'block';
            let menuTitles = document.querySelectorAll('.menu-title');

            for (let i = 0; i < menuTitles.length; i++) {
                (menuTitles[i] as HTMLElement).style.display = 'block';
            }
        });

        that.collapseBtn.addEventListener('click', () => {
            that.dashboard.nativeElement.update(0, { size: 70 });
            that.dashboard.nativeElement.removeAttribute('expanded');

            (document.querySelector('.company-logo-holder img') as HTMLElement).style.display = 'none';
            let menuTitles = document.querySelectorAll('.menu-title');

            for (let i = 0; i < menuTitles.length; i++) {
                (menuTitles[i] as HTMLElement).style.display = 'none';
            }
        });

        const buttons = document.querySelectorAll('.history-holder smart-button') as NodeListOf<Button>;

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function () {
                (buttons[0].parentNode as HTMLElement).classList.remove('active');
                (buttons[1].parentNode as HTMLElement).classList.remove('active');
                this.parentNode.classList.add('active');
            };
        }
    };

}