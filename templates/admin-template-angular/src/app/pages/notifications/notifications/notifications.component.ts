import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { ToastComponent } from 'smart-webcomponents-angular/toast';

@Component({
  selector: 'sm-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements AfterViewInit {

  @ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;
  @ViewChild('messageInput', { read: InputComponent, static: false }) messageInput!: InputComponent;

  constructor() { }

  ngAfterViewInit(): void {

  }

  messageInputChange() {

    this.toast.value = this.messageInput.value;

  }

  typeInputChange($event: CustomEvent) {

    this.toast.type = $event.detail.value;

  }

  enableAutoCloseChange($event: CustomEvent) {

    this.toast.autoClose = $event.detail.value;

  }

  enableBlinkChange($event: CustomEvent) {

    const toast = document.querySelector('#toast');
    toast!.classList.toggle('blink', $event.detail.value);

  }

  enableCloseButtonChange($event: CustomEvent) {

    this.toast.showCloseButton = $event.detail.value;

  }

  topLeftChange() {

    this.toast.position = 'top-left';

  }

  topRightChange() {

    this.toast.position = 'top-right';

  }

  bottomLeftChange() {

    this.toast.position = 'bottom-left';

  }

  bottomRightChange() {

    this.toast.position = 'bottom-right';

  }

  showToast() {

    this.toast.open();

  }

  clearAllToasts() {

    this.toast.closeAll();

  }
}
