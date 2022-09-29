import { AfterViewInit, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubHeaderComponent implements AfterViewInit {

  @Input('isSidebarExpanded') isSidebarExpanded!: boolean;
  
  ngAfterViewInit(): void {

    window.addEventListener('click', (e) => {

      document.querySelectorAll('.dropdown-menu-show')
        .forEach(menu => {
          menu.classList.remove('dropdown-menu-show')
        });

      document.querySelectorAll('.dropdown-button-active')
        .forEach(menu => {
          menu.classList.remove('dropdown-button-active')
        });

    });

  }

  toggleMenu($event: Event, property: string) {

    $event.stopPropagation();

    const menu = document.querySelector(`.${property}`);
    const toggleButton = document.querySelector(`.${property}Button`);

    const isExpanded = menu?.classList.contains('dropdown-menu-show');

    document.querySelectorAll('.dropdown-menu')
      .forEach(menu => menu.classList.remove('dropdown-menu-show'));

    document.querySelectorAll('.dropdown-button')
      .forEach(menu => menu.classList.remove('dropdown-button-active'));

    if (!isExpanded) {
      menu?.classList.toggle('dropdown-menu-show');
      toggleButton?.classList.toggle('dropdown-button-active');
    }
  }
}
