import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { CarouselComponent } from 'smart-webcomponents-angular/carousel';
import { CheckBoxComponent } from 'smart-webcomponents-angular/checkbox';
import { TextBoxComponent } from 'smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('carousel', { read: CarouselComponent, static: false }) carousel!: CarouselComponent;
    @ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;
    @ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2!: CheckBoxComponent;
    @ViewChild('checkbox3', { read: CheckBoxComponent, static: false }) checkbox3!: CheckBoxComponent;
    @ViewChild('checkbox4', { read: CheckBoxComponent, static: false }) checkbox4!: CheckBoxComponent;
    @ViewChild('checkbox5', { read: CheckBoxComponent, static: false }) checkbox5!: CheckBoxComponent;
    @ViewChild('checkbox6', { read: CheckBoxComponent, static: false }) checkbox6!: CheckBoxComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;


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
            basePath = './../../../src/images/';

        that.carousel.dataSource = generateDataSource(6);

        function generateDataSource(items: number) {
            const dataSource = Array(items).fill({});
            dataSource.forEach((element, index) => dataSource[index] = {
                image: `${basePath}carousel-medium-${index + 1}.jpg`,
                label: 'Slide ' + index,
                content: 'Content ' + index
            });
            return dataSource;
        }

        that.checkbox.addEventListener('change', () => that.carousel.hideArrows = !that.checkbox.checked);
        that.checkbox2.addEventListener('change', () => that.carousel.hideIndicators = !that.checkbox2.checked);
        that.checkbox3.addEventListener('change', () => that.carousel.wheel = that.checkbox3.checked);
        that.checkbox4.addEventListener('change', () => that.carousel.swipe = that.checkbox4.checked);
        that.checkbox5.addEventListener('change', () => that.carousel.slideShow = that.checkbox5.checked);
        that.checkbox6.addEventListener('change', () => that.carousel.loop = that.checkbox6.checked);
        that.button.addEventListener('click', () => that.carousel.play());
        that.button2.addEventListener('click', () => that.carousel.pause());
        that.button3.addEventListener('click', () => that.carousel.prev());
        that.button4.addEventListener('click', () => that.carousel.next());
        if (that.textbox) {
            const value = parseInt('' + that.textbox.value) || 0;
            that.button5.addEventListener('click', () => that.carousel.slideTo(value));
        }
    }
}