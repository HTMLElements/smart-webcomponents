import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { WindowComponent, Window } from 'smart-webcomponents-angular/window';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('modalWindow', { read: WindowComponent, static: false }) modalWindow: WindowComponent;
    @ViewChild('formWindow', { read: WindowComponent, static: false }) formWindow: WindowComponent;

    onButtonClick(event: any): void {
        this.formWindow.opened ? this.formWindow.close() : this.formWindow.open();
    }

    onWindowReady(event: any): void {
        this.init();
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.

    }

    init(): void {
        // init code.

        const that = this,
            modal = that.modalWindow;

        function cancelHandler(event: CustomEvent): void {
            const target: HTMLElement = event.target as HTMLElement,
                formWindow = that.formWindow,
                modal = that.modalWindow.nativeElement;

            target.closest('smart-window') === modal ? modal.close() : formWindow.close();
        }

        function agreeHandler(event: CustomEvent): void {
            const target: HTMLElement = event.target as HTMLElement,
                formWindow = that.formWindow,
                modal = that.modalWindow.nativeElement;

            if (target.closest('smart-window') as Window === modal) {
                formWindow.close();
                modal.close();
            }
            else {
                modal.open();
            }
        }

        document.getElementsByClassName('cancel')[0].addEventListener('click', cancelHandler);
        document.getElementsByClassName('cancel')[1].addEventListener('click', cancelHandler);
        document.getElementsByClassName('agree')[0].addEventListener('click', agreeHandler);
        document.getElementsByClassName('agree')[1].addEventListener('click', agreeHandler);

        modal.nativeElement.querySelector('.cancel').innerHTML = 'No';
        modal.nativeElement.querySelector('.agree').innerHTML = 'Yes';
    }
}