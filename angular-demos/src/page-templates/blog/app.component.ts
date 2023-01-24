import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { MenuComponent } from 'smart-webcomponents-angular/menu';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('menu', { read: MenuComponent, static: false }) menu2: MenuComponent;
    
    dataSource: Array<object> = [
        {
            label: 'Technology',
            value: 'technology'
        },
        {
            label: 'Design',
            value: 'design'
        },
        {
            label: 'Culture',
            value: 'culture'
        },
        {
            label: 'Business',
            value: 'business'
        },
        {
            label: 'Politics',
            value: 'politics'
        },
        {
            label: 'Opinion',
            value: 'opinion'
        },
        {
            label: 'Science',
            value: 'science'
        },
        {
            label: 'Health',
            value: 'health'
        },
        {
            label: 'Style',
            value: 'style'
        },
        {
            label: 'Travel',
            value: 'travel'
        }
    ];
 
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