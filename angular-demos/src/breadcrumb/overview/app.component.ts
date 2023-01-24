import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { BreadcrumbComponent } from 'smart-webcomponents-angular/breadcrumb';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('breadcrumb', { read: BreadcrumbComponent, static: false }) breadcrumb!: BreadcrumbComponent;
	@ViewChild('breadcrumb2', { read: BreadcrumbComponent, static: false }) breadcrumb2!: BreadcrumbComponent;
	@ViewChild('breadcrumb3', { read: BreadcrumbComponent, static: false }) breadcrumb3!: BreadcrumbComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		
    }
}