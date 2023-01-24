import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TextAreaComponent } from 'smart-webcomponents-angular/textarea';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('input', { read: TextAreaComponent, static: false }) input!: TextAreaComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code
        const input = this.input;

        document.querySelector('.options').addEventListener('change', function (event) {
            const target = event.target as HTMLElement,
                inputClassList = input.nativeElement.classList;

            if (target.classList.contains('render-mode')) {
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