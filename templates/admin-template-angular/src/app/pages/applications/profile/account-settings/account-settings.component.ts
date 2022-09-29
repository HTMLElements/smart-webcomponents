import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Menu } from 'smart-webcomponents-angular';

@Component({
  selector: 'sm-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountSettingsComponent implements AfterViewInit {

  @ViewChild('accountTemplate') accountTemplateRef!: ElementRef;
  @ViewChild('passwordTemplate') passwordTemplateRef!: ElementRef;
  @ViewChild('mainCol') mainColRef!: ElementRef;

  currentView = 'accountTemplate';

  constructor() { }

  ngAfterViewInit(): void {

    const mainCol: HTMLElement = this.mainColRef.nativeElement;

    mainCol.addEventListener('transitionend', () => {

      const accountTemplate: HTMLElement = this.accountTemplateRef.nativeElement;
      const passwordTemplate: HTMLElement = this.passwordTemplateRef.nativeElement;

      if (this.currentView === 'accountTemplate') {
        passwordTemplate.style.display = 'none';
        accountTemplate.style.display = 'block';
      } else if (this.currentView === 'passwordTemplate') {
        passwordTemplate.style.display = 'block';
        accountTemplate.style.display = 'none';
      }

      mainCol.classList.remove('changing');

    })
  }

  onListBoxChange(event: CustomEvent) {

    const mainCol: HTMLElement = this.mainColRef.nativeElement;

    if (event.detail.selected && event.detail.index < 2) {

      mainCol.classList.add('changing');

      if (event.detail.index === 0) {

        this.currentView = 'accountTemplate';

      }

      else if (event.detail.index === 1) {

        this.currentView = 'passwordTemplate'

      }

    }
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  toggleMenu(button: HTMLElement) {

    const todayMenu = document.querySelector('#todayMenu') as Menu;
    const rect = button.getBoundingClientRect();

    Array.from(document.getElementsByTagName('smart-menu'))
      .filter(currentMenu => currentMenu !== todayMenu)
      .forEach(currentMenu => currentMenu.close());

    document.querySelectorAll('.dropdown-menu-show').forEach(e => {
      e.classList.remove('dropdown-menu-show');
    })

    document.querySelectorAll('.dropdown-button')
      .forEach(menu => menu.classList.remove('dropdown-button-active'));

    if (!todayMenu.opened) {

      todayMenu.open(rect.right - todayMenu.offsetWidth, rect.bottom + window.scrollY);

    } else {

      todayMenu.close();

    }

  }
}
