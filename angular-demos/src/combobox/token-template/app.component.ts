import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ComboBoxComponent } from 'smart-webcomponents-angular/combobox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('combobox', { read: ComboBoxComponent, static: false }) combobox!: ComboBoxComponent;

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

        that.combobox.addEventListener('change', function (): void {
            const tokens: HTMLCollection = that.combobox.nativeElement.getElementsByClassName('smart-token');

            for (let i = 0; i < tokens.length; i++) {
                var token: HTMLElement = tokens[i] as HTMLElement;
                var img: HTMLImageElement = token.querySelector('.avatar');

                if (token.textContent.indexOf('Anne Kean') > -1) {
                    img.src = './../../../src/images/phonebook/anne.png';
                }
                else if (token.textContent.indexOf('Andrew Watson') > -1) {
                    img.src = './../../../src/images/phonebook/andrew.png';
                }
                else if (token.textContent.indexOf('Avril Janin') > -1) {
                    img.src = './../../../src/images/phonebook/avril.jpeg';
                }
                else if (token.textContent.indexOf('Janet Pattenson') > -1) {
                    img.src = './../../../src/images/phonebook/janet.png';
                }
                else if (token.textContent.indexOf('Johanna Svensson') > -1) {
                    img.src = './../../../src/images/phonebook/johanna.jpeg';
                }
                else if (token.textContent.indexOf('Johnny Abana') > -1) {
                    img.src = './../../../src/images/phonebook/johnny.jpeg';
                }
                else if (token.textContent.indexOf('Laura Thene') > -1) {
                    img.src = './../../../src/images/phonebook/laura.png';
                }
                else if (token.textContent.indexOf('Margaret Vetton') > -1) {
                    img.src = './../../../src/images/phonebook/margaret.png';
                }
                else if (token.textContent.indexOf('Maria Sevrano') > -1) {
                    img.src = './../../../src/images/phonebook/Maria.jpeg';
                }
                else if (token.textContent.indexOf('Mark Yemen') > -1) {
                    img.src = './../../../src/images/phonebook/mark.jpeg';
                }
                else if (token.textContent.indexOf('Maya Verdara') > -1) {
                    img.src = './../../../src/images/phonebook/maya.jpeg';
                }
                else if (token.textContent.indexOf('Michael Barton') > -1) {
                    img.src = './../../../src/images/phonebook/michael.png';
                }
                else if (token.textContent.indexOf('Monica Oghini') > -1) {
                    img.src = './../../../src/images/phonebook/monica.jpeg';
                }
                else if (token.textContent.indexOf('Nancy Queens') > -1) {
                    img.src = './../../../src/images/phonebook/nancy.png';
                }
                else if (token.textContent.indexOf('Robert Drawny') > -1) {
                    img.src = './../../../src/images/phonebook/robert.png';
                }
                else if (token.textContent.indexOf('Steven Fedrichy') > -1) {
                    img.src = './../../../src/images/phonebook/steven.jpeg';
                }
                else if (token.textContent.indexOf('Toni Versachi') > -1) {
                    img.src = './../../../src/images/phonebook/toni.jpeg';
                }
            }
        });
    }
}