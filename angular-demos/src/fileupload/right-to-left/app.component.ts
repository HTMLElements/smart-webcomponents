import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { FileUploadComponent } from 'smart-webcomponents-angular/fileupload';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('fileupload', { read: FileUploadComponent, static: false }) fileupload!: FileUploadComponent;


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
            messages = Object.assign({}, that.fileupload.messages);

        messages['he'] = {
            'browse': 'דפדף',
            'uploadFile': 'העלה קובץ',
            'cancelFile': 'בטל קובץ',
            'pauseFile': 'השהה קובץ',
            'uploadAll': 'העלה הכל',
            'cancelAll': 'בטל הכל',
            'pauseAll': 'השהה הכל',
            'totalFiles': 'סך הקבצים: ',
            'connectionError': '{{elementType}}: העלאת קובץ דורשת חיבור לשרת.',
            'wrongItemIndex': '{{elementType}}: אין קובץ עם אינדקס כזה ברשימת הקבצים שהועלה.',
            'tooLongFileName': '{{elementType}}: שם הקובץ ארוך מדי.'
        };
        that.fileupload.messages = messages;
    }
}