import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FileUploadComponent } from 'smart-webcomponents-angular/fileupload';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('fileupload', { read: FileUploadComponent, static: false }) fileupload!: FileUploadComponent;
    @ViewChild('eventContainer', { read: ElementRef, static: false }) eventContainer!: ElementRef;


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

        that.fileupload.addEventListener('fileSelected', (event: CustomEvent) => printEventName(event));
        that.fileupload.addEventListener('uploadCanceled', (event: CustomEvent) => printEventName(event));
        that.fileupload.addEventListener('uploadCompleted', (event: CustomEvent) => printEventName(event));
        that.fileupload.addEventListener('uploadError', (event: CustomEvent) => printEventName(event));
        that.fileupload.addEventListener('uploadPaused', (event: CustomEvent) => printEventName(event));
        that.fileupload.addEventListener('uploadStarted', (event: CustomEvent) => printEventName(event));
        that.fileupload.addEventListener('validationError', (event: CustomEvent) => printEventName(event));
        function printEventName(event: CustomEvent) {
            const item = document.createElement('div');
            item.innerHTML = item.innerHTML + event.type + '<br />';
            that.eventContainer.nativeElement.appendChild(item);
        }
    }
}