import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MaskedTextBoxComponent } from 'smart-webcomponents-angular/maskedtextbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('maskedtextbox', { read: MaskedTextBoxComponent, static: false }) maskedtextbox!: MaskedTextBoxComponent;
    @ViewChild('validationStatus', { read: ElementRef, static: false }) validationStatus: ElementRef;

    validation = function (value: string): boolean {
        if (value.length === 5) {
            return true;
        }
        return false;
    };

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

        that.maskedtextbox.addEventListener('validation', function (event: CustomEvent) {
            const details = event.detail;
            console.log('Validation success : ' + details.success);
            if (details.success) {
                that.validationStatus.nativeElement.innerHTML = 'Validation successful!';
            }
            else {
                that.validationStatus.nativeElement.innerHTML = 'Please, fill the mask...';
            }
        });
    }
}