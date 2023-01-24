import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { DropDownListComponent, ListItem } from 'smart-webcomponents-angular/dropdownlist';
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
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('dialogWindow', { read: WindowComponent, static: false }) dialogWindow!: WindowComponent;
    @ViewChild('dialogWindow2', { read: WindowComponent, static: false }) dialogWindow2!: WindowComponent;
    @ViewChild('alertWindow', { read: WindowComponent, static: false }) alertWindow!: WindowComponent;
    @ViewChild('progressWindow', { read: WindowComponent, static: false }) progressWindow!: WindowComponent;
    @ViewChild('waitWindow', { read: WindowComponent, static: false }) waitWindow!: WindowComponent;
    @ViewChild('promptWindow', { read: WindowComponent, static: false }) promptWindow!: WindowComponent;
    @ViewChild('multilinePromptWindow', { read: WindowComponent, static: false }) multilinePromptWindow!: WindowComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log!: ElementRef;


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
        const dialogWindow = that.dialogWindow,
            alertWindow = that.alertWindow,
            progressWindow = that.progressWindow,
            waitWindow = that.waitWindow,
            promptWindow = that.promptWindow,
            multilinePromptWindow = that.multilinePromptWindow,
            iconDialogWindow = that.dialogWindow,
            dropDownList = that.dropDownList
        const log = that.log.nativeElement;

        function dialogButtonsHandler(event: CustomEvent): void {
            const target: HTMLElement = event.target as HTMLElement;

            if (target.closest('.smart-cancel-button')) {
                log.textContent = 'Canceled';
                (<Window>target.closest('.smart-window')).close();
            }
            else if (target.closest('.smart-confirm-button')) {
                log.textContent = 'Confirmed';
                (<Window>target.closest('.smart-window')).close();
            }
        }

        that.button2.addEventListener('click', function (): void {
            dialogWindow.opened ? dialogWindow.close() : dialogWindow.open();
        });

        that.button.addEventListener('click', function (): void {
            alertWindow.opened ? alertWindow.close() : alertWindow.open();
        });

        dialogWindow.addEventListener('click', dialogButtonsHandler);

        alertWindow.addEventListener('click', function (event: CustomEvent): void {
            const target: HTMLElement = event.target as HTMLElement;

            if (target.closest('.smart-confirm-button')) {
                log.textContent = 'Confirmed';
                alertWindow.close();
            }
        });

        that.button3.addEventListener('click', function (): void {
            if (progressWindow.opened) {
                return;
            }

            progressWindow.nativeElement.innerHTML = 'Loading...';
            progressWindow.open();

            let interval = setInterval(function (): void {
                if (progressWindow.nativeElement.value >= progressWindow.max) {
                    progressWindow.nativeElement.innerHTML = 'Finished';
                    clearInterval(interval);
                }
                
                progressWindow.nativeElement.value += (Math.random() * 10).toString();
            }, 500);
        });

        progressWindow.addEventListener('click', function (event: CustomEvent): void {
            const target = event.target as HTMLElement;

            if (target.closest('.smart-complete-button')) {
                progressWindow.close();
                progressWindow.nativeElement.value = 0;
            }
        });

        that.button4.addEventListener('click', function (): void {
            if (waitWindow.opened) {
                return;
            }

            waitWindow.open();

            setTimeout(function (): void {
                waitWindow.close();
            }, 2500);
        });

        that.button5.addEventListener('click', function (): void {
            promptWindow.opened ? promptWindow.close() : promptWindow.open();
        });

        promptWindow.addEventListener('click', dialogButtonsHandler);

        that.button6.addEventListener('click', function (): void {
            multilinePromptWindow.opened ? multilinePromptWindow.close() : multilinePromptWindow.open();
        });

        multilinePromptWindow.addEventListener('click', dialogButtonsHandler);

        that.button7.addEventListener('click', function (): void {
            const selectedItem: any = dropDownList.getItem(dropDownList.selectedValues[0]);

            document.getElementsByClassName('smart-icon-dialog-icon')[0].innerHTML = '<span class="glyphicon glyphicon-' + selectedItem.value + '"></span>';
            document.getElementsByClassName('smart-icon-dialog-content')[0].innerHTML = selectedItem.label;

            const icondDialogWindowClassList = iconDialogWindow.nativeElement.classList;

            for (let i = 0; i < icondDialogWindowClassList.length; i++) {
                if (icondDialogWindowClassList[i].indexOf('smart-theme-') > -1) {
                    icondDialogWindowClassList.remove(icondDialogWindowClassList[i]);
                }
            }

            icondDialogWindowClassList.add('smart-theme-' + selectedItem.label.toLowerCase());
            iconDialogWindow.opened ? iconDialogWindow.close() : iconDialogWindow.open();
        });

        iconDialogWindow.addEventListener('click', dialogButtonsHandler);

        document.addEventListener('click', function (event) {
            if (that.checkbox.checked) {
                dialogWindow.closeOnMaskClick = alertWindow.closeOnMaskClick = progressWindow.closeOnMaskClick =
                    waitWindow.closeOnMaskClick = promptWindow.closeOnMaskClick = multilinePromptWindow.closeOnMaskClick =
                    iconDialogWindow.closeOnMaskClick = true;
            }
            else {
                dialogWindow.closeOnMaskClick = alertWindow.closeOnMaskClick = progressWindow.closeOnMaskClick =
                    waitWindow.closeOnMaskClick = promptWindow.closeOnMaskClick = multilinePromptWindow.closeOnMaskClick =
                    iconDialogWindow.closeOnMaskClick = false;
            }
        });
    }
}