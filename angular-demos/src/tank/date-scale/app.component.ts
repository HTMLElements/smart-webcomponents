import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TankComponent } from 'smart-webcomponents-angular/tank';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;
    @ViewChild('tank2', { read: TankComponent, static: false }) tank2!: TankComponent;
    @ViewChild('tank3', { read: TankComponent, static: false }) tank3!: TankComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
    }

    tank2LabelFormatFunction(value): string {
        if (value.year() === 2018 && value.month() === 5 && value.day() === 17) {
            return '<div id="birthday">' + value.toString('MMM d, yyyy') + '<br/>★Peter\'s birthday★</div>';
        }
        return value.toString('MMM d, yyyy');
    }
}
