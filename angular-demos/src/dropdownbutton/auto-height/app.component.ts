import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DropDownButtonComponent } from 'smart-webcomponents-angular/dropdownbutton';
import { TreeComponent, TreeItem } from 'smart-webcomponents-angular/tree';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('dropdownbutton', { read: DropDownButtonComponent, static: false }) dropdownbutton!: DropDownButtonComponent;
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

		const dropDownButton = this.dropdownbutton,
			tree = this.tree;

		window.onload = function () {
			//Get the label of the selected tree item
			dropDownButton.placeholder = (<TreeItem>tree.nativeElement.querySelector('smart-tree-item[selected], smart-tree-items-group[selected]')).label;
			dropDownButton.addEventListener('change', function (event: any): void {
				dropDownButton.placeholder = event.detail.item.label;
				console.log(event);
			});
		}

	}
}