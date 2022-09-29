import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sm-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeneralComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {

    setTimeout(() => {
      const breadcrumbItems = document.querySelectorAll('.general-breadcrumb-item');

      breadcrumbItems.forEach(item => {

        const path = `#${item.textContent?.replace(' ', '_')?.toLocaleLowerCase()}`;

        item.addEventListener('click', (e) => {
          e.preventDefault();

          const hashtagIndex = window.location.href.indexOf('#');

          if (hashtagIndex === -1) {

            window.location.href += path;

          } else {
            
            const basePath = window.location.href.substring(0, hashtagIndex);
            window.location.href = `${basePath}${path}`;

          }
        })

      })

    }, 1000) //Workaround, because after view init the breadcrumbs are not initialized

  }

}
