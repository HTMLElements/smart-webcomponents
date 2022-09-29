import { AfterViewInit, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Menu } from 'smart-webcomponents-angular/menu';
import { SidebarToggleOptions } from 'src/app/services/sidebar.service';

@Component({
  selector: 'sm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements AfterViewInit {

  @Input('isSidebarExpanded') isSidebarExpanded!: boolean;
  @Output() onToggle = new EventEmitter<SidebarToggleOptions>();

  isLeftNavigationOpenedOnMobile: boolean = false;
  isRightNavigationOpenedOnMobile: boolean = false;

  toggleSidebar(): void {
    this.onToggle.emit({
      expansionPreference: !this.isSidebarExpanded,
      forMobile: window.innerWidth < 767 ? true : false
    });
  }

  stopPropagation($event: Event) {

    $event.stopPropagation();

  }

  closeMenu($event: any, menu: Menu) {

    if ($event!.target!.closest('[template-applied]')) {

      menu.close();

    }

  }

  ngAfterViewInit(): void {
      
  }

  toggleMenu(button: HTMLElement, menu: Menu) {

    const rect = button.getBoundingClientRect();

    Array.from(document.getElementsByTagName('smart-menu'))
      .filter(currentMenu => currentMenu !== menu)
      .forEach(menu => menu.close());

    document.querySelectorAll('.dropdown-menu-show').forEach(e => {
      e.classList.remove('dropdown-menu-show');
    });

    document.querySelectorAll('.dropdown-button')
      .forEach(menu => menu.classList.remove('dropdown-button-active'));

    if (!menu.opened) {

      menu.open(rect.right - menu.offsetWidth, rect.bottom + window.scrollY + 0.5);

    } else {

      menu.close();

    }
  }

  toggleNavigationOnMobile(navigation: string, navigationElement: HTMLElement) {

    if (navigation == 'left') {

      navigationElement.classList.toggle('navigation-left-visible')

    } else if (navigation == 'right') {

      navigationElement.classList.toggle('navigation-right-visible')

    }

  }

  animate() {
    
  }
}
