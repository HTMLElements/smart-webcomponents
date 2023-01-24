import { Injectable } from '@angular/core';
import { ToastComponent } from 'smart-webcomponents-angular/toast';

@Injectable()

export class ToastService {
    public toastComponent: ToastComponent;
    constructor() { }

    //Prepares the toast component for the service
    setToast: Function = (element: ToastComponent): void => {
        this.toastComponent = element;
    };

    //Shows a toast item
    openToast: Function = (value: string): void => {
        const that = this;

        that.toastComponent.open();

        if (value !== undefined) {
            that.toastComponent.value = value.toString();
        }
    }

    // Closes the last toast item
    closeToastLast: Function = (): void => {
        this.toastComponent.closeLast();
    }

    //Closes all toast items
    closeToastAll: Function = (): void => {
        this.toastComponent.closeAll();
    }
}