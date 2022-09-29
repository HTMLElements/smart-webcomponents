import { AfterViewChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { TableComponent } from 'smart-webcomponents-angular/table';
import ResultCallbackFunction from 'src/app/interfaces/VirtualDataSourceResultCallback';

interface TableFields {
  name: string,
  country: string,
  countryCode: string,
  mobile: string,
  landline: string,
  address: string,
  proficiency: number,
  skills: string
}

interface RandomUserDataPoint {
  cell: string,
  dob: {
    age: number,
    date: string
  },
  email: string,
  id: {
    name: string,
    value: string
  },
  location: {
    city: string,
    coordinates: {
      latitude: string,
      longitude: string
    },
    country: string,
    postcode: string,
    state: string,
    street: {
      name: string,
      number: number
    }
    timezone: {
      description: string,
      offset: string
    }
  },
  login: {
    md: string,
    password: string,
    salt: string,
    sha1: string,
    sha256: string,
    username: string,
    uuid: string
  },
  name: {
    title: string,
    first: string,
    last: string
  },
  nat: string,
  phone: string,
  picture: {
    thumbnail: string,
    medium: string,
    large: string
  },
  registered: {
    age: 4,
    date: string
  }
}

@Component({
  selector: 'sm-ajax-data',
  templateUrl: './ajax-data.component.html',
  styleUrls: ['./ajax-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AjaxDataComponent implements AfterViewChecked {

  @ViewChild('ajaxTable', { read: TableComponent, static: false }) ajaxTable!: TableComponent;

  ajaxDataSettings = {
    dataSource: new window.Smart.DataAdapter({
      virtualDataSource: function (
        resultCallbackFunction: ResultCallbackFunction
      ) {

        fetch('https://randomuser.me/api/?results=10')
          .then(response => response.json())
          .then(json => {

            const loadingElemenet = document.getElementById('loading');

            loadingElemenet
              ? loadingElemenet.remove()
              : {}

            const data: TableFields[] = json.results.map((dataPoint: RandomUserDataPoint) => {

              const result: TableFields = {
                name: dataPoint.name.first + ' ' + dataPoint.name.last,
                country: dataPoint.location.country,
                countryCode: dataPoint.nat,
                mobile: dataPoint.cell,
                landline: dataPoint.phone,
                address: dataPoint.location.street.number + ' ' + dataPoint.location.street.name + ', ' + dataPoint.location.postcode + ' ' + dataPoint.location.city,
                proficiency: 0,
                skills: ''
              }

              const skills: string[] = [];

              result.proficiency = Math.floor(Math.random() * Math.floor(99)) + 1;

              if (dataPoint.dob.age % 2 === 0) {
                if (dataPoint.dob.age % 4 === 0) {
                  skills.push('javascript');
                }
                skills.push('html-5');
                skills.push('css3');
              }
              else if (dataPoint.registered.age % 2) {
                skills.push('python');
              }
              if (dataPoint.registered.age % 3 === 0) {
                skills.push('react-native');
              }
              if (dataPoint.registered.age % 2 === 0) {
                skills.push('angularjs');
              }
              else {
                skills.push('android-os');
              }
              result.skills = skills.join(',');
              return result;
            });

            resultCallbackFunction({
              dataSource: data
            });
          });

      },
      dataFields: [
        'name: string',
        'country: string',
        'countryCode: string',
        'skills: string',
        'proficiency: number',
        'mobile: string',
        'landline: string',
        'address: string'
      ]
    }),
    columnReorder: true,
    onInit: () => {



    },
    sortMode: 'one',
    columns: [
      { label: 'Name', dataField: 'name', dataType: 'string' },
      {
        label: 'Country', dataField: 'country', dataType: 'string', formatFunction: (settings: any) => {

          settings.template =
            `<div class="country-container">
                    <img class="flag" style="width: 40px; height: 27px;" src="../../../../assets/images/flags/${settings.data.countryCode.toLowerCase()}.svg" />
                    ${settings.value}
                </div>`;
        }
      },
      {
        label: 'Skills', dataField: 'skills', dataType: 'string', allowSort: false, formatFunction(settings: any) {

          const skills = settings.value.split(',');
          let template = '<div class="skill-container">';
          skills.forEach((skill: string) => template += `<img src="https://img.icons8.com/color/48/000000/${skill}.png" title="${skill}" />`);
          settings.template = template + '</div>';
        }
      },
      {
        label: 'Proficiency', dataField: 'proficiency', dataType: 'number', formatFunction(settings: any) {

          const value = settings.value;
          let className;
          if (settings.value >= 60) {
            className = 'high';
          }
          else if (value >= 20) {
            className = 'mid';
          }
          else {
            className = 'low';
          }
          settings.template = `<smart-progress-bar class="${className}" show-progress-value value="${value}"></smart-progress-bar>`;
        }
      }
    ]
  }

  constructor() { }

  ngAfterViewChecked(): void {

    document.querySelector('smart-pager')?.remove();

  }
}
