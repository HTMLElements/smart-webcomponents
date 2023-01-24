import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { WindowComponent } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('window', { read: WindowComponent, static: false }) smartWindow!: WindowComponent;
    @ViewChild('window2', { read: WindowComponent, static: false }) smartWindow2: WindowComponent;
    @ViewChild('window3', { read: WindowComponent, static: false }) smartWindow3: WindowComponent;


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
        const smartWindow = document.querySelector('smart-window');

        that.button.addEventListener('click', function (): void {
            const windows = [that.smartWindow, that.smartWindow2, that.smartWindow3];

            for (let i = 0; i < windows.length; i++) {
                windows[i].open();
            }
        });

        document.getElementById('addWindow').addEventListener('click', function (): void {
            const newWindow = document.createElement('smart-window'),
                windowCount = document.getElementsByTagName('smart-window').length;

            newWindow.id = newWindow.label = 'Window ' + (windowCount + 1);
            newWindow.content = 'This is the content of Window ' + (windowCount + 1);
            newWindow.opened = true;
            newWindow.resizable = true;
            newWindow.classList.add('animation');
            
            document.body.appendChild(newWindow);
        });


    }
}