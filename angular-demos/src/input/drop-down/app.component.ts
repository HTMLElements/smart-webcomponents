import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('input', { read: InputComponent, static: false }) input!: InputComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;

    dataSource = [
        { label: "Andrew Watson" },
        { label: "Anne Kean" },
        { label: "Avril Janin" },
        { label: "Janet Pattenson" },
        { label: "Johanna Svensson" },
        { label: "Johnny Abana" },
        { label: "Laura Thene" },
        { label: "Margaret Vetton" },
        { label: "Maria Sevrano" },
        { label: "Mark Yemen" },
        { label: "Maya Verdara" },
        { label: "Michael Barton" },
        { label: "Monica Oghini" },
        { label: "Nancy Queens" },
        { label: "Robert Drawny" },
        { label: "Steven Fedrichy" },
        { label: "Toni Versachi" }
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
        let input = this.input;

        document.querySelector('.options').addEventListener('change', function (event: CustomEvent): void {
            const target = event.target as HTMLElement;
            const targetClassList = target.classList;

            if (targetClassList.contains('readonly')) {
                input.readonly = event.detail.value;
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