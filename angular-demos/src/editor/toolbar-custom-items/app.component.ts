import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { EditorComponent, ToolbarItem } from 'smart-webcomponents-angular/editor';
import { DropDownList } from 'smart-webcomponents-angular/dropdownlist';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;
	
    toolbarItems: any = [
        {
            name: 'BackgroundColor',
            disabled: true
        },
        {
            name: 'FontSize',
            dataSource: ['10', '20', '30', '40']
        },
        {
            name: 'ddl',
            value: '2',
            width: 100,
            template: (element: HTMLElement, item: ToolbarItem) => {
                if (item.name === 'ddl') {
                    const dropDownList = document.createElement('smart-drop-down-list') as DropDownList;
                    
                    dropDownList.dataSource = ['1', '2', '3'];
                    dropDownList.dropDownAppendTo = 'body';
                    dropDownList.placeholder = 'Enter...';
                    dropDownList.classList.add('custom-drop-down-toolbar-item');

                    element.appendChild(dropDownList);
                }
            }
        },
        {
            name: 'customButton',
            width: 100,
            template: '<smart-button>Button</smart-button>'
        }, {
            name: 'hyperlink',
            inlineToolbarItems: [{
                    width: 100,
                    template: '<smart-button>Button</smart-button>'
                }],
            editor: {
                address: 'http://www.',
                target: 'ala'
            }
        }, 'removeLink'
    ]
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
    }

}