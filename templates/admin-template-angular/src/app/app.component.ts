import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GitHubButtonProps, render } from 'github-buttons';
import { SidebarService, SidebarState } from './services/sidebar.service';
import * as bootstrap from 'bootstrap';
import { NavigationEnd, Router, Event, ChildrenOutletContexts } from '@angular/router';
import { TreeComponent } from 'smart-webcomponents-angular/tree';
import { fadeWithOpacity } from './routing/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [fadeWithOpacity]
})
export class AppComponent implements AfterViewInit {

  title = 'admin-template-4-angular';

  isBoxedLayoutEnabled: boolean = false;

  sidebarState: SidebarState;

  sideBarTree!: TreeComponent;

  customTheme!: HTMLElement;

  themeColor: string = '';
  themeIsDark: boolean = false;

  constructor(public sidebarService: SidebarService, private router: Router, private contexts: ChildrenOutletContexts) {

    this.sidebarState = sidebarService.state;

  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngAfterViewInit() {

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {

        this.selectItemForRoute(this.router.url);

        this.generateBreadcrumb(this.sideBarTree);

        this.enableTooltip();
      }

    });

    this.addGithubStarButtonToInitialNotification();

    this.enableTooltip();

    setTimeout(function () {
      document.body.classList.add('page-loaded');
    }, 900);

  }

  private enableTooltip() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {

      return new bootstrap.Tooltip(tooltipTriggerEl)
    });

  }

  private addGithubStarButtonToInitialNotification() {
    const githubButtonOptions: GitHubButtonProps = {
      href: 'https://github.com/HTMLElements/smart-webcomponents',
      "data-show-count": true,
      "aria-label": 'Star HTMLElements/smart-webcomponents on GitHub',
      "data-text": 'Star'
    }

    render(githubButtonOptions, function (el) {
      document.querySelector('.github-initial-notification-button')!.appendChild(el)
    })
  }

  async generateBreadcrumb(tree: TreeComponent) {

    const state = await tree.getState();

    const expandedGroupsElements = await (async () => {

      const expandedGroupsPromises: Promise<any>[] = [];

      state.expanded.forEach((itemSelector: string) => {

        expandedGroupsPromises.push(tree.getItem(itemSelector));

      });

      return await Promise.all(expandedGroupsPromises)

    })();

    let breadcrumbGroupsHTML = '';

    if (expandedGroupsElements) {
      expandedGroupsElements.forEach(expandedGroupName => {

        let group: any = expandedGroupName
          .querySelector(".smart-tree-item-label-container .smart-tree-item-label-element")!
          .cloneNode(true);

        if (group.querySelector('.material-icons')) {
          group.querySelector('.material-icons')!.remove();
        }

        breadcrumbGroupsHTML +=
          '<li class="breadcrumb-item"><a href="javascript:;" class="text-muted">'
          + group.textContent!.trim()
          + '</a></li>';

      });
    }

    const selectedItemElement = (await tree.getItem(state.selected[0]));

    const selectedItemText = selectedItemElement.querySelector('a').textContent;
    const selectedItemHref = selectedItemElement.getAttribute('routerLink');

    if (selectedItemText && selectedItemHref) {

      document.body.querySelector("#breadcrumb-title")!.textContent = selectedItemText;

      breadcrumbGroupsHTML += `
        <li class="breadcrumb-item"><a routerLink="${selectedItemHref}" class="text-muted">${selectedItemText}</a></li>`;

      if (breadcrumbGroupsHTML) {
        document.body.querySelector("#breadcrumb-list")!.innerHTML = breadcrumbGroupsHTML;
      }

    }

  }

  setSideBarTree(tree: TreeComponent) {

    this.sideBarTree = tree;

  }

  selectItemForRoute(route: string) {

    const smartItem = document.querySelector(`#tree smart-tree-item[routerLink="${route}"]`)! as HTMLElement;

    this.sideBarTree.select(smartItem);

    this.sideBarTree.ensureVisible(smartItem);

  }

  toggleSettingsPanel() {

    document.body.classList.toggle('settings-panel-shown');

  }

  toggleBoxedLayout() {

    this.isBoxedLayoutEnabled = !this.isBoxedLayoutEnabled;
    document.body.classList.toggle('boxed', this.isBoxedLayoutEnabled);

  }

  setThemeColor(theme: string) {

    this.themeColor = theme;

  }

  setIsThemeDark(isDark: boolean) {

    this.themeIsDark = isDark;

    if (isDark) {

      document.body.setAttribute('theme', 'dark');

      Array.from(document.querySelectorAll('smart-chart')).forEach(chart => chart.theme = 'dark');

    } else {

      document.body.setAttribute('theme', 'light');
      Array.from(document.querySelectorAll('smart-chart')).forEach(chart => chart.theme = 'light');

    }

  }

  setTheme() {

    if (this.customTheme) {
      this.customTheme.remove();
    }

    const link = document.createElement("link");

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = `assets/css/bootstrap/${this.themeIsDark ? 'dark' : 'light'}/smart.bootstrap`
      + `${this.themeColor ? `.${this.themeColor}` : ''}`
      + '.css';

    this.customTheme = link;
    document.body.appendChild(link);

  }
}
