import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

import { CrisisDetailResolverService } from './crisis-detail-resolver.service';

const crisisRoutes: Routes = [
  { path: 'crisis', component: CrisisListComponent, outlet: 'crisis', data: { animation: 'heroes' } },
  {
    path: 'crisis/:id', component: CrisisDetailComponent, outlet: 'crisis', data: { animation: 'hero' },
    resolve: {
      crisis: CrisisDetailResolverService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisRoutingModule { }
