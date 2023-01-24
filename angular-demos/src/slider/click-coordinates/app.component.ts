import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { SliderComponent } from 'smart-webcomponents-angular/slider';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('x', { read: ElementRef, static: false }) x!: ElementRef;
    @ViewChild('y', { read: ElementRef, static: false }) y!: ElementRef;

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

        that.slider.addEventListener('click', function (event: PointerEvent) {
            that.x.nativeElement.innerHTML = '' + event.pageX;
            that.y.nativeElement.innerHTML = '' + event.pageY;
        });
    }
}