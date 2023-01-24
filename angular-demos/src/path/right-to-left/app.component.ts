import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PathComponent } from 'smart-webcomponents-angular/path';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('path', { read: PathComponent, static: false }) path!: PathComponent;
	@ViewChild('path2', { read: PathComponent, static: false }) path2!: PathComponent;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.


		const paths: Array<PathComponent> = [this.path, this.path2],
			messages = Object.assign({}, paths[0].messages);

		messages['he'] = {
			'notAPath': 'הגדר לא לנתיב',
			'validPath': 'הגדר לנתיב תקף'
		};

		for (let p = 0; p < paths.length; p++) {
			paths[p].messages = messages;
		}
	}
}