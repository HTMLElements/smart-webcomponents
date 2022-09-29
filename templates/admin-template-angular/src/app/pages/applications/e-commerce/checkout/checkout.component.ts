import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Tabs } from 'smart-webcomponents-angular/tabs';

@Component({
  selector: 'sm-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CheckoutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {

    new window.Smart.Form('#checkoutForm', {
      controlType: 'group',
      label: 'Shipping Address',
      dataField: 'address',
      columns: 2,
      labelPosition: 'top',
      controls: [
        {
          dataField: 'firstName',
          controlType: 'input',
          label: 'First name',
          required: true,
          placeholder: 'First name'
        },
        {
          dataField: 'lastName',
          controlType: 'input',
          label: 'Last name',
          placeholder: 'Last name',
          required: true
        },
        {
          dataField: 'address1',
          controlType: 'input',
          columnSpan: 2,
          label: 'Address line 1',
          placeholder: 'Address line 1',
          required: true
        },
        {
          dataField: 'address2',
          controlType: 'input',
          columnSpan: 2,
          label: 'Address line 2',
          placeholder: 'Address line 2'
        },
        {
          dataField: 'city',
          controlType: 'input',
          label: 'City',
          placeholder: 'City',
          required: true
        },
        {
          dataField: 'region',
          controlType: 'input',
          label: 'State/Province/Region',
          placeholder: 'State'
        },
        {
          dataField: 'zip',
          controlType: 'input',
          placeholder: 'Zip / Postal code',
          columnSpan: 2,
          label: 'Zip / Postal code',
          required: true
        },
        {
          dataField: 'country',
          controlType: 'dropdownlist',
          placeholder: 'Country',
          label: 'Country',
          columnSpan: 2,
          controlOptions: {
            dataSource: [
              'Brazil',
              'Bulgaria',
              'Chile',
              'China',
              'Denmark',
              'Finland',
              'France',
              'India',
              'Maldives',
              'Nigeria',
              'Singapore',
              'Turkey',
              'United Kingdom of Great Britain and Northern Ireland (the)',
              'United States of America (the)',
              'Uruguay',
            ]
          },
          required: true
        },
        {
          dataField: 'useThisAddress',
          label: 'Use this address for payment details',
          controlType: 'boolean',
          columnSpan: 2
        },
        {
          controlType: 'button',
          action: 'button',
          label: 'Use this Address',
          cssClass: 'primary next',
          columnSpan: 2
        }
      ]
    });

    setTimeout(() => {

      Array.from(
        document.querySelectorAll('smart-tabs .smart-tab-label-container:not(:first-child)')
      )
        .forEach(element => {
          console.log(element);
          
          element.classList.add('unreached')
        });

    }, 500);

  }

  onTabsChange(tab: Tabs, $event: CustomEvent) {

    const index = $event.detail.index;

    tab.querySelector(`.smart-tab-label-container:nth-child(${index + 1})`)!
      .classList
      .remove('unreached');

  }

  onTabClick(tab: Tabs, $event: Event) {

    const target = $event.target as HTMLElement;

    if (target.closest('.next')) {
      tab.select(tab.selectedIndex! + 1);
    } else if (target.closest('.prev')) {
      tab.select(tab.selectedIndex! - 1);
    }

  }
}
