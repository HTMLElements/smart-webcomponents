import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylingService {

  constructor() { }

  getTheme() {
    return document.body.getAttribute('theme');
  }

  getComputedStyleVars(variable: string) {
    const computedVar = getComputedStyle(document.body).getPropertyValue('--' + variable).trim();
    return computedVar;
  }
}
