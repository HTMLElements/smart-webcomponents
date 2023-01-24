import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'crisis', outlet: 'crisis',
    loadChildren: () => import('./crisis/crisis.module').then(m => m.CrisisModule)
  },
  { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', redirectTo: '/superheroes' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
