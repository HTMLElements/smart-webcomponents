import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PasswordTextBoxComponent } from 'smart-webcomponents-angular/passwordtextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('passwordtextbox', { read: PasswordTextBoxComponent, static: false }) passwordtextbox!: PasswordTextBoxComponent;

    passwordStrength(password: string, allowedSymbols: string) {
        const passwordLength = password.length;
        if (passwordLength < 3) {
            return 'short';
        }
        else if (passwordLength < 10) {
            return 'weak';
        }
        else {
            return 'strong';
        }
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
    }
}