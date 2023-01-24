import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { EditorComponent } from 'smart-webcomponents-angular/editor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log: ElementRef;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
    }

    handleEvent(e: CustomEvent) {
        this.log.nativeElement.innerHTML += e.type + '<br />';
    }
}