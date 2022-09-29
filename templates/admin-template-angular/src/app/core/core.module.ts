import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { FooterComponent } from './footer/footer.component';
import { TreeModule } from 'smart-webcomponents-angular/tree';
import { InitialNotificationComponent } from './initial-notification/initial-notification.component';
import { SmartImportsModule } from '../smart-imports/smart-imports.module';
import { AppRoutingModule } from '../routing/app-routing.module';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    InitialNotificationComponent
  ],
  imports: [
    CommonModule,
    TreeModule,
    SmartImportsModule,
    AppRoutingModule
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    InitialNotificationComponent
  ]
})
export class CoreModule { }
