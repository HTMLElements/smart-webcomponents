import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { TreeComponent } from 'smart-webcomponents-angular/tree';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
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
		const that = this;

		that.button.addEventListener('click', function () {
			const selectedItem = that.tree.getItem(that.tree.selectedIndexes[0]);
			that.tree.moveUp(selectedItem);
		});
		document.getElementById('moveDown').addEventListener('click', function () {
			const selectedItem = that.tree.getItem(that.tree.selectedIndexes[0]);
			that.tree.moveDown(selectedItem);
		});


	}
}