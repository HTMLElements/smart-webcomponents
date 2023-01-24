import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';
import { TabsComponent } from 'smart-webcomponents-angular/tabs';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
	@ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
	@ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
	@ViewChild('button8', { read: ButtonComponent, static: false }) button8: ButtonComponent;
	@ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;
	@ViewChild('listbox2', { read: ListBoxComponent, static: false }) listbox2: ListBoxComponent;
	@ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;
	@ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;
	@ViewChild('window2', { read: WindowComponent, static: false }) window2!: WindowComponent;
	@ViewChild('window3', { read: WindowComponent, static: false }) window3!: WindowComponent;
	@ViewChild('window4', { read: WindowComponent, static: false }) window4!: WindowComponent;
	@ViewChild('window5', { read: WindowComponent, static: false }) window5!: WindowComponent;
	@ViewChild('window6', { read: WindowComponent, static: false }) window6!: WindowComponent;
	@ViewChild('window7', { read: WindowComponent, static: false }) window7!: WindowComponent;
	@ViewChild('window8', { read: WindowComponent, static: false }) window8!: WindowComponent;
	@ViewChild('window9', { read: WindowComponent, static: false }) window9!: WindowComponent;
	@ViewChild('window10', { read: WindowComponent, static: false }) window10!: WindowComponent;
	@ViewChild('window11', { read: WindowComponent, static: false }) window11!: WindowComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        let buttons = document.getElementsByClassName('open-window-button'), cancelButtons = document.getElementsByClassName('flat'), i, progressWindows = document.getElementsByTagName('smart-progress-window');
        for (i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (event) {
                event.target.nextElementSibling.open();
            });
        }
        for (i = 0; i < cancelButtons.length; i++) {
            cancelButtons[i].addEventListener('click', function (event) {
                const that = event.target;
                if (that.ownerElement && (that.textContent.toLowerCase() === 'cancel' || that.textContent.toLowerCase() === 'disagree')) {
                    that.ownerElement.close();
                }
            });
        }
        for (i = 0; i < progressWindows.length; i++) {
            progressWindows[i].addEventListener('click', function (event) {
                const that = event.target;
                if (!event.target.closest('.smart-complete-button') || !that.opened) {
                    return;
                }
                that.innerHTML = 'Loading...';
                that.value = 0;
                var interval = setInterval(function () {
                    if (that.value >= that.max) {
                        that.innerHTML = 'Finished';
                        clearInterval(interval);
                    }
                    that.value += Math.random() * 10;
                }, 500);
            });
        }
    

	}	
}