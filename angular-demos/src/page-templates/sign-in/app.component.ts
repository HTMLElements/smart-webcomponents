import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';
import { TooltipComponent } from 'smart-webcomponents-angular/tooltip';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;
    @ViewChild('textbox2', { read: TextBoxComponent, static: false }) textbox2: TextBoxComponent;
    @ViewChild('tooltip', { read: TooltipComponent, static: false }) tooltip!: TooltipComponent;
    @ViewChild('form', { read: ElementRef, static: false }) form: ElementRef;


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
        const email = that.textbox,
            password = that.textbox2,
            signIn = that.button,
            tooltip = that.tooltip,
            submitForm = that.form.nativeElement;

        submitForm.addEventListener('submit', function (event: CustomEvent): void {
            const hasEmail = !!email.value.length,
                hasPassword = !!password.value.length;

            if (hasEmail && hasPassword) {
                tooltip.selector = null;
                tooltip.disabled = true;
                tooltip.close();
                return;
            }

            event.preventDefault();
            tooltip.disabled = false;

            if (!hasPassword) {
                tooltip.selector = password.nativeElement;
            }

            if (!hasEmail) {
                tooltip.selector = email.nativeElement;
            }

            tooltip.open();
        });

        tooltip.addEventListener('close', function () {
            tooltip.disabled = true;
            tooltip.selector = null;
        });
    }
}