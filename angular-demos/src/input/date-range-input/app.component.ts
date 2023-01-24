import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { DateRangeInputComponent } from 'smart-webcomponents-angular/daterangeinput';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('daterangeinput', { read: DateRangeInputComponent, static: false }) daterangeinput!: DateRangeInputComponent;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const input = this.daterangeinput;

        document.querySelector('.options').addEventListener('change', function (event: CustomEvent): void {
            const target = event.target as HTMLElement;
            const targetClassList = target.classList;

            if (targetClassList.contains('readonly')) {
                input.readonly = event.detail.value;
                return;
            }

            if (targetClassList.contains('timepicker')) {
                input.timepicker = event.detail.value;
                return;
            }

            if (targetClassList.contains('icons')) {
                input.icons = event.detail.value;
                return;
            }

            const inputClassList = input.nativeElement.classList;

            if (targetClassList.contains('render-mode')) {
                inputClassList.remove('underlined', 'outlined');

                const textContent = target.textContent.toLowerCase();

                if (textContent.indexOf('underlined') > -1) {
                    inputClassList.add('underlined');
                }
                else if (textContent.indexOf('outlined') > -1) {
                    inputClassList.add('outlined');
                }
            }
        });
    }
}