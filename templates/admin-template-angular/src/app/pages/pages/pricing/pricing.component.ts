import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ButtonGroupComponent } from 'smart-webcomponents-angular/buttongroup';

@Component({
  selector: 'sm-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PricingComponent {

  @ViewChild('buttongroup', { read: ButtonGroupComponent, static: false }) buttongroup!: ButtonGroupComponent;

  developerPriceOptions = {
    montly: 39,
    annual: 399
  }

  teamPriceOptions = {
    montly: 179,
    annual: 1499
  }

  developerPrice = this.developerPriceOptions.montly;
  teamPrice = this.teamPriceOptions.montly;

  constructor() { }

  setPrice() {

    const selectedPeriod = this.buttongroup.selectedValues[0];

    switch (selectedPeriod) {
      case 'Annual billing':

        this.developerPrice = this.developerPriceOptions.annual;
        this.teamPrice = this.teamPriceOptions.annual;

        break;
      case 'Monthly billing':

        this.developerPrice = this.developerPriceOptions.montly;
        this.teamPrice = this.teamPriceOptions.montly;

        break;
      default:
        break;
    }

  }
}
