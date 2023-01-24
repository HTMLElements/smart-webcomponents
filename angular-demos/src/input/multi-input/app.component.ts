import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { MultiInputComponent } from 'smart-webcomponents-angular/multiinput';
import { RadioButtonComponent } from 'smart-webcomponents-angular/radiobutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('multiinput', { read: MultiInputComponent, static: false }) multiinput: MultiInputComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;

    dataSource = [
        { value: "Austria", label: "Austria" },
        { value: "Belarus", label: "Belarus" },
        { value: "Belgium", label: "Belgium" },
        { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
        { value: "Bulgaria", label: "Bulgaria" },
        { value: "Croatia", label: "Croatia" },
        { value: "Cyprus", label: "Cyprus" },
        { value: "Czech Republic", label: "Czech Republic" },
        { value: "Denmark", label: "Denmark" },
        { value: "Estonia", label: "Estonia" },
        { value: "Finland", label: "Finland" },
        { value: "France", label: "France" },
        { value: "Georgia", label: "Georgia" },
        { value: "Germany", label: "Germany" },
        { value: "Greece", label: "Greece" },
        { value: "Hungary", label: "Hungary" },
        { value: "Iceland", label: "Iceland" },
        { value: "Ireland", label: "Ireland" },
        { value: "Italy", label: "Italy" },
        { value: "Latvia", label: "Latvia" },
        { value: "Liechtenstein", label: "Liechtenstein" },
        { value: "Lithuania", label: "Lithuania" },
        { value: "Luxembourg", label: "Luxembourg" },
        { value: "Macedonia, The Former Yugoslav Republic of", label: "Macedonia" },
        { value: "Malta", label: "Malta" },
        { value: "Moldova, Republic of", label: "Moldova, Republic of" },
        { value: "Netherlands", label: "Netherlands" },
        { value: "Norway", label: "Norway" },
        { value: "Poland", label: "Poland" },
        { value: "Portugal", label: "Portugal" },
        { value: "Romania", label: "Romania" },
        { value: "Russian Federation", label: "Russian Federation" },
        { value: "Serbia", label: "Serbia" },
        { value: "Montenegro", label: "Montenegro" },
        { value: "Slovakia", label: "Slovakia" },
        { value: "Slovenia", label: "Slovenia" },
        { value: "Spain", label: "Spain" },
        { value: "Sweden", label: "Sweden" },
        { value: "Switzerland", label: "Switzerland" },
        { value: "Turkey", label: "Turkey" },
        { value: "Ukraine", label: "Ukraine" },
        { value: "United Kingdom", label: "United Kingdom" }
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
        let input = this.multiinput

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