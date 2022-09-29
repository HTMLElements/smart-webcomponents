import { Component } from '@angular/core';

@Component({
  selector: 'sm-initial-notification',
  templateUrl: './initial-notification.component.html',
  styleUrls: ['./initial-notification.component.scss']
})
export class InitialNotificationComponent {

  visible: boolean = true;

  hide() {
    this.visible = false;
  }
}
