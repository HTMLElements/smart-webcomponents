import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PasswordTextBoxComponent } from 'smart-webcomponents-angular/passwordtextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('passwordtextbox', { read: PasswordTextBoxComponent, static: false }) passwordtextbox!: PasswordTextBoxComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this,
            messages = Object.assign({}, that.passwordtextbox.messages);

        messages['he'] = {
            'passwordStrength': 'חוזק סיסמה',
            'short': 'קצר',
            'weak': 'חלש',
            'far': 'הוגן',
            'good': 'טוב',
            'strong': 'חזק',
            'showPassword': 'הראה סיסמה'
        };
        that.passwordtextbox.messages = messages;
    }
}