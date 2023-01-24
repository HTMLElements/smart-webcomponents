import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { ToastComponent } from 'smart-webcomponents-angular/toast';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;
    @ViewChild('log', { read: ElementRef, static: false }) log: ElementRef;

    buttonClickHandler(event: PointerEvent) {
        this.toast.open();
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
        const that = this;

        that.toast.addEventListener('close', function () {
            that.log.nativeElement.innerHTML = '"close"<br />' + that.log.nativeElement.innerHTML;
        });
        that.toast.addEventListener('click', function () {
            that.log.nativeElement.innerHTML = '"click"<br />' + that.log.nativeElement.innerHTML;
        });
        that.toast.addEventListener('open', function () {
            that.log.nativeElement.innerHTML = '"open"<br />' + that.log.nativeElement.innerHTML;
        });
        that.toast.addEventListener('swipebottom', function () {
            that.log.nativeElement.innerHTML = '"swipebottom"<br />' + that.log.nativeElement.innerHTML;
        });
        that.toast.addEventListener('swipeleft', function () {
            that.log.nativeElement.innerHTML = '"swipeleft"<br />' + that.log.nativeElement.innerHTML;
        });
        that.toast.addEventListener('swiperight', function () {
            that.log.nativeElement.innerHTML = '"swiperight"<br />' + that.log.nativeElement.innerHTML;
        });
        that.toast.addEventListener('swipetop', function () {
            that.log.nativeElement.innerHTML = '"swipetop"<br />' + that.log.nativeElement.innerHTML;
        });
    }
}