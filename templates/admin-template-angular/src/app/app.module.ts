import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PagesModule } from './pages/pages.module';
import { SidebarService } from './services/sidebar.service';
import { SharedModule } from './shared/shared.module';

import { SmartImportsModule } from './smart-imports/smart-imports.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './services/data.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SmartImportsModule,
    PagesModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: SidebarService,
      useClass: SidebarService
    }, {
      provide: DataService,
      useClass: DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
