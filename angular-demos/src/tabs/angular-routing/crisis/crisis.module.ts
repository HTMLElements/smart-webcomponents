import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { CrisisListComponent }       from './crisis-list/crisis-list.component';
import { CrisisDetailComponent }     from './crisis-detail/crisis-detail.component';

import { ButtonModule } from 'smart-webcomponents-angular/button';
import { TextBoxModule } from 'smart-webcomponents-angular/textbox';

import { CrisisRoutingModule } from './crisis-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TextBoxModule,
    CrisisRoutingModule
  ],
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent
  ]
})
export class CrisisModule {}
