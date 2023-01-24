import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ListBoxComponent } from 'smart-webcomponents-angular/listbox';
import { Slider } from 'smart-webcomponents-angular/slider';
import { SwitchButton } from 'smart-webcomponents-angular/switchbutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;

    itemTemplate: string = 'multiLineTemplate';

    onReady(event: any): void {
        let switchVibration: SwitchButton = document.createElement('smart-switch-button'),
            switchRingtone: SwitchButton = document.createElement('smart-switch-button'),
            switchNotificationLight: SwitchButton = document.createElement('smart-switch-button'),
            switchNotificationLightDark: SwitchButton = document.createElement('smart-switch-button'),
            switchNotificationsLockScreen: SwitchButton = document.createElement('smart-switch-button'),
            ringSlider: Slider = document.createElement('smart-slider'),
            mediaSlider: Slider = document.createElement('smart-slider'),
            alarmSlider: Slider = document.createElement('smart-slider');
        let listBoxLightSecondaryAction: HTMLCollection = this.listbox.nativeElement.getElementsByClassName('secondLine');

        const sliderControl = function (event: any) {
            const slider: Slider = event.target;

            switch (slider) {
                case mediaSlider:
                    slider.previousElementSibling.textContent = mediaSlider.value === mediaSlider.min ? 'volume_off' : 'volume_up';
                    break;
                case alarmSlider:
                    slider.previousElementSibling.textContent = alarmSlider.value === alarmSlider.min ? 'alarm_off' : 'alarm';
                    break;
                case ringSlider:
                    slider.previousElementSibling.textContent = ringSlider.value === ringSlider.min ? 'notifications_off' : 'notifications';
                    break;
            }
        };

        mediaSlider.value = mediaSlider.max / 2;
        ringSlider.value = ringSlider.max / 1.5;
        alarmSlider.value = alarmSlider.max;
        switchVibration.checked = switchNotificationLight.checked = switchNotificationLightDark.checked = true;

        // Light themed list box
        listBoxLightSecondaryAction[2].innerHTML = '<i class="material-icons">&#xE050;</i>';
        listBoxLightSecondaryAction[2].appendChild(mediaSlider);
        listBoxLightSecondaryAction[3].innerHTML = '<i class="material-icons">&#xE855;</i>';
        listBoxLightSecondaryAction[3].appendChild(alarmSlider);
        listBoxLightSecondaryAction[4].innerHTML = '<i class="material-icons">&#xE7F4;</i>';
        listBoxLightSecondaryAction[4].appendChild(ringSlider);
        listBoxLightSecondaryAction[5].parentElement.classList.add('single-line');
        listBoxLightSecondaryAction[5].appendChild(switchVibration);
        listBoxLightSecondaryAction[8].parentElement.classList.add('single-line');
        listBoxLightSecondaryAction[8].appendChild(switchRingtone);
        listBoxLightSecondaryAction[11].parentElement.classList.add('single-line');
        listBoxLightSecondaryAction[11].appendChild(switchNotificationLight);
        listBoxLightSecondaryAction[14].parentElement.classList.add('single-line');
        listBoxLightSecondaryAction[14].appendChild(switchNotificationsLockScreen);

        //Additional text
        listBoxLightSecondaryAction[7].textContent = 'Breeze';
        listBoxLightSecondaryAction[9].textContent = 'Notification';
        listBoxLightSecondaryAction[15].textContent = 'No apps can read notifications';

        mediaSlider.addEventListener('change', sliderControl);
        alarmSlider.addEventListener('change', sliderControl);
        ringSlider.addEventListener('change', sliderControl);
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

    }
}