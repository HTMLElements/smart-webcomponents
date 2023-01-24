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
        const that = this;

        that.fileupload.messages = {
            'en': {
                'browse': 'Browse',
                'uploadFile': 'Upload File',
                'cancelFile': 'Cancel File',
                'pauseFile': 'Pause File',
                'uploadAll': 'Upload All',
                'cancelAll': 'Cancel All',
                'pauseAll': 'Pause All',
                'totalFiles': 'Total files: ',
                'connectionError': '{{elementType}}: File Upload requires connection to the server.',
                'wrongItemIndex': '{{elementType}}: There is no file with such an index in the list of uploaded files.',
                'tooLongFileName': '{{elementType}}: File name is too long.'
            },
            'de': {
                'browse': 'Durchsuche',
                'uploadFile': 'Hochladen',
                'cancelFile': 'Absagen',
                'pauseFile': 'Abbrechen',
                'uploadAll': 'Alle Hochladen',
                'cancelAll': 'Alle Absagen',
                'pauseAll': 'Abbrechen',
                'totalFiles': 'Gesamtzahl der Dateien: ',
                'connectionError': '{{elementType}}: Der Datei-Upload erfordert eine Verbindung zum Server.',
                'wrongItemIndex': '{{elementType}}: Es gibt keine Datei mit einem solchen Index in der Liste der hochgeladenen Dateien.',
                'tooLongFileName': '{{elementType}}: Dateiname ist zu lang.'
            }
        };
        that.fileupload.locale = 'de';
    }
}