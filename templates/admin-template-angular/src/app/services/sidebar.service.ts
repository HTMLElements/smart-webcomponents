import { Injectable } from '@angular/core';

export interface SidebarState {
  isExpanded: boolean,
  isExpandedPrefered: boolean,
  isExpandedMobile: boolean
}

export interface SidebarToggleOptions {
  expansionPreference: boolean,
  forMobile: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public state: SidebarState = {
    isExpanded: true,
    isExpandedPrefered: true,
    isExpandedMobile: false
  };

  constructor() {

    if (window.innerWidth < 992) {

      this.state.isExpanded = false;

    }

    this.listenForWindowResizing();
  }

  getExpansionState() {

    return this.state.isExpanded;

  }

  toggleSidebar(options: SidebarToggleOptions) {

    if (options.forMobile) {

      this.state.isExpanded = options.expansionPreference;
      this.state.isExpandedMobile = options.expansionPreference;

      return;
    }

    this.state.isExpandedPrefered = options.expansionPreference;

    if (window.innerWidth < 992) {

      this.state.isExpanded = false;

    } else {

      this.state.isExpanded = options.expansionPreference;
      
    }

  }

  private listenForWindowResizing() {
    window.addEventListener('resize', () => {

      if (window.innerWidth < 992) {

        this.state.isExpanded = false;

      } else if (this.state.isExpandedPrefered) {

        this.state.isExpanded = true;

      }

      if (window.innerWidth < 767) {

        this.state.isExpanded = this.state.isExpandedMobile;

      }

    });
  }
}
