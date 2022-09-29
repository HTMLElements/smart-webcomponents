import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { TreeComponent } from 'smart-webcomponents-angular/tree';
import { SidebarToggleOptions } from 'src/app/services/sidebar.service';

@Component({
  selector: 'sm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SidebarComponent implements AfterViewInit {

  @ViewChild('tree', { read: TreeComponent, static: false }) tree!: TreeComponent;
  @Input('isSidebarExpanded') isExpanded!: boolean;
  @Output() onToggle = new EventEmitter<SidebarToggleOptions>();
  @Output() getTreeComponent = new EventEmitter<TreeComponent>();

  ngAfterViewInit(): void {

    this.getTreeComponent.emit(this.tree);
    
  }

  handleMouseEnter($event: Event) {

    const sidebar = ($event.target as HTMLElement);

    if (!sidebar.classList.contains('sidebar-not-expanded')) {

      sidebar.classList.remove('sidebar-toggle-on-hover');

    } else {

      sidebar.classList.add('sidebar-toggle-on-hover');

    }

  }

  toggleSidebar(sidebarElement: HTMLElement): void {

    if (this.isExpanded) {
      sidebarElement.classList.add('sidebar-not-expanded');
    }

    this.onToggle.emit(
      {
        expansionPreference: !this.isExpanded,
        forMobile: window.innerWidth < 767 ? true : false
      });
  }
}
