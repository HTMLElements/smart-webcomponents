import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ColorPickerComponent } from 'smart-webcomponents-angular/colorpicker';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('colorpicker', { read: ColorPickerComponent, static: false }) colorpicker!: ColorPickerComponent;
	@ViewChild('colorpicker2', { read: ColorPickerComponent, static: false }) colorpicker2!: ColorPickerComponent;
	@ViewChild('colorpicker3', { read: ColorPickerComponent, static: false }) colorpicker3!: ColorPickerComponent;
	@ViewChild('colorpicker4', { read: ColorPickerComponent, static: false }) colorpicker4!: ColorPickerComponent;
	@ViewChild('colorpicker5', { read: ColorPickerComponent, static: false }) colorpicker5!: ColorPickerComponent;
	@ViewChild('frame', { read: ElementRef, static: false }) frame!: ElementRef;
	@ViewChild('frameHeader', { read: ElementRef, static: false }) frameHeader!: ElementRef;
	@ViewChild('frameContent', { read: ElementRef, static: false }) frameContent!: ElementRef;


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
			frame: HTMLDivElement = that.frame.nativeElement as HTMLDivElement,
			frameHeader: HTMLDivElement = that.frameHeader.nativeElement as HTMLDivElement,
			frameContent: HTMLDivElement = that.frameContent.nativeElement as HTMLDivElement,
			headerBackground: ColorPickerComponent = that.colorpicker as ColorPickerComponent,
			headerColor: ColorPickerComponent = that.colorpicker2 as ColorPickerComponent,
			background: ColorPickerComponent = that.colorpicker3 as ColorPickerComponent,
			borderColor: ColorPickerComponent = that.colorpicker4 as ColorPickerComponent,
			color: ColorPickerComponent = that.colorpicker5 as ColorPickerComponent;

		headerBackground.addEventListener('change', function (event: CustomEvent): void {
			frameHeader.style.backgroundColor = event.detail.value;
		});

		headerColor.addEventListener('change', function (event: CustomEvent): void {
			frameHeader.style.color = event.detail.value;
		});

		background.addEventListener('change', function (event: CustomEvent): void {
			frameContent.style.backgroundColor = event.detail.value;
		});

		color.addEventListener('change', function (event: CustomEvent): void {
			frameContent.style.color = event.detail.value;
		});

		borderColor.addEventListener('change', function (event: CustomEvent): void {
			frame.style.borderColor = event.detail.value;
		});
	}
}