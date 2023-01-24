import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { TankComponent, Tank, Smart } from 'smart-webcomponents-angular/tank';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const tank = document.createElement("smart-tank");

        tank.value = "50";
        tank.orientation = 'vertical';
        document.body.appendChild(tank);
        tank.focus();

        Smart.Render();
    }
}