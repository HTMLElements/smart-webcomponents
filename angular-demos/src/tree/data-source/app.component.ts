import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TreeComponent } from 'smart-webcomponents-angular/tree';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.


        const treeDataSource = [{
            label: 'Cats',
            selected: true,
            items: [
                {
                    label: 'Tiger',
                    selected: true
                },
                {
                    label: 'Lion'
                },
                {
                    label: 'Jaguar'
                },
                {
                    label: 'Leopard'
                },
                {
                    label: 'Serval'
                },
                {
                    label: 'Domestic cat'
                }
            ]
        },
        {
            label: 'Dogs',
            items: [
                {
                    label: 'Gray wolf'
                },
                {
                    label: 'Ethiopian wolf',
                    selected: true
                },
                {
                    label: 'Arctic fox',
                    selected: true
                },
                {
                    label: 'Dingo'
                },
                {
                    label: 'Domestic dog',
                    selected: true
                }
            ]
        }];

        this.tree.dataSource = treeDataSource;
    }
}