import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { WindowComponent } from 'smart-webcomponents-angular/window';

@Component({
  selector: 'sm-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalsComponent implements AfterViewInit {

  @ViewChild('alertModal', { read: WindowComponent, static: false }) alertModal!: WindowComponent;
  @ViewChild('dialogModal', { read: WindowComponent, static: false }) dialogModal!: WindowComponent;

  ngAfterViewInit(): void {

    this.alertModal.addEventListener('click', (event: any): void => {

      if (event.target.closest('.smart-confirm-button')) {
        this.alertModal.close();
      }

    });

    this.dialogModal.addEventListener('click', (event: any): void => {

      if (
        event.target.closest('.smart-cancel-button') ||
        event.target.closest('.smart-confirm-button')
      ) {

        this.dialogModal.close();

      }
    });

  }
  openModal(modal: any) {

    modal.open();

  }

  closeModal(modal: any) {

    modal.close();

  }
}
