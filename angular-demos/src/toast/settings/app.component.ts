import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { DropDownListComponent } from 'smart-webcomponents-angular/dropdownlist';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';
import { ToastComponent, ToastType } from 'smart-webcomponents-angular/toast';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('dropdownlist', { read: DropDownListComponent, static: false }) dropdownlist!: DropDownListComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;
    @ViewChild('radiobutton4', { read: RadioButtonComponent, static: false }) radiobutton4!: RadioButtonComponent;
    @ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;

    openButtonClickHandler(event: PointerEvent) {
        const that = this;

        that.toast.open();

        if (that.dropdownlist.selectedValues.length > 0 && that.dropdownlist.selectedValues[0] !== 'null') {
            that.toast.value = that.dropdownlist.selectedValues![0];
        }
        else {
            that.toast.value = 'Toast !';
        }
    }

    closeLastButtonClickHandler(event: PointerEvent) {
        this.toast.closeLast();
    }

    closeAllButtonClickHandler(event: PointerEvent) {
        this.toast.closeAll();
    }

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

        that.radiobutton.addEventListener('change', function () {
            that.toast.position = 'top-left';
        });
        that.radiobutton2.addEventListener('change', function () {
            that.toast.position = 'top-right';
        });
        that.radiobutton3.addEventListener('change', function () {
            that.toast.position = 'bottom-left';
        });
        that.radiobutton4.addEventListener('change', function () {
            that.toast.position = 'bottom-right';
        });
        that.dropdownlist.addEventListener('change', function () {
            that.toast.type = <ToastType>(that.dropdownlist.selectedValues[0] === 'null' ? null : that.dropdownlist.selectedValues[0]);
        });
        that.checkbox.addEventListener('change', function () {
            that.toast.autoClose = that.checkbox.checked;
        });
        that.checkbox2.addEventListener('change', function () {
            that.checkbox2.checked ? that.toast.nativeElement.classList.add('blink') : that.toast.nativeElement.classList.remove('blink');
        });
    }
}