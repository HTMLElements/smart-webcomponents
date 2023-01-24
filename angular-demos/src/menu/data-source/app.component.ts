import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MenuComponent } from 'smart-webcomponents-angular/menu';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('menu', { read: MenuComponent, static: false }) menu2: MenuComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const menuDataSource = [
            {
                label: 'File',
                items: [
                    {
                        label: 'New',
                        shortcut: 'Ctrl+N'
                    },
                    {
                        label: 'Open',
                        shortcut: 'Ctrl+0'
                    },
                    {
                        label: 'Open Containing Folder',
                        items: [
                            {
                                label: 'Explorer'
                            },
                            {
                                label: 'cmd'
                            }
                        ]
                    },
                    {
                        label: 'Save',
                        shortcut: 'Ctrl+S',
                        disabled: true,
                        separator: true
                    },
                    {
                        label: 'Exit',
                        shortcut: 'Alt+F4'
                    }
                ]
            },
            {
                label: '<img id="helpIcon" src="./../../../src/images/help-icon.png" title="Help" />'
            },
            {
                label: '<div class="planetIcon" title="Planet"></div>'
            },
            {
                label: 'About',
                value: 'customValue'
            }
        ];

        this.menu.dataSource = menuDataSource;
    }
}