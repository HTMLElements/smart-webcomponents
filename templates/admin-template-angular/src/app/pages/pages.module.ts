import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dashboard1Component } from './applications/dashboard1/dashboard1.component';
import { SmartImportsModule } from '../smart-imports/smart-imports.module';
import { AppRoutingModule } from '../routing/app-routing.module';
import { StylingService } from '../services/styling.service';
import { DashboardComponent } from './applications/dashboard/dashboard.component';
import { Dashboard2Component } from './applications/dashboard2/dashboard2.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FourOFourComponent } from './pages/four-o-four/four-o-four.component';
import { FiveOOComponent } from './pages/five-o-o/five-o-o.component';
import { KnowledgeBaseComponent } from './pages/knowledge-base/knowledge-base.component';
import { BlankPageComponent } from './pages/blank-page/blank-page.component';
import { IntroductionComponent } from './documentation/introduction/introduction.component';
import { GettingStartedComponent } from './documentation/getting-started/getting-started.component';
import { PluginsComponent } from './documentation/plugins/plugins.component';
import { ChangelogComponent } from './documentation/changelog/changelog.component';
import { ToastsComponent } from './ui-elements/toasts/toasts.component';
import { ButtonsComponent } from './ui-elements/buttons/buttons.component';
import { CardsComponent } from './ui-elements/cards/cards.component';
import { CarouselComponent } from './ui-elements/carousel/carousel.component';
import { EmbedVideoComponent } from './ui-elements/embed-video/embed-video.component';
import { GeneralComponent } from './ui-elements/general/general.component';
import { GridLayoutComponent } from './ui-elements/grid-layout/grid-layout.component';
import { ModalsComponent } from './ui-elements/modals/modals.component';
import { TabsComponent } from './ui-elements/tabs/tabs.component';
import { TypographyComponent } from './ui-elements/typography/typography.component';
import { FeatherComponent } from './icons/feather/feather.component';
import { FontAwesomeComponent } from './icons/font-awesome/font-awesome.component';
import { LayoutsComponent } from './forms/layouts/layouts.component';
import { BasicInputsComponent } from './forms/basic-inputs/basic-inputs.component';
import { InputGroupsComponent } from './forms/input-groups/input-groups.component';
import { TablesComponent } from './tables/tables.component';
import { EditorPageComponent } from './form-plugins/editor/editor.component';
import { ValidationComponent } from './form-plugins/validation/validation.component';
import { WizardComponent } from './form-plugins/wizard/wizard.component';
import { ResponsiveTableComponent } from './data-tables/responsive-table/responsive-table.component';
import { TableWithButtonsComponent } from './data-tables/table-with-buttons/table-with-buttons.component';
import { ColumnSearchComponent } from './data-tables/column-search/column-search.component';
import { MultiSelectionComponent } from './data-tables/multi-selection/multi-selection.component';
import { AjaxDataComponent } from './data-tables/ajax-data/ajax-data.component';
import { ChartsComponent } from './charts/charts/charts.component';
import { NotificationsComponent } from './notifications/notifications/notifications.component';
import { GoogleMapsComponent } from './maps/google-maps/google-maps.component';
import { SchedulerPageComponent } from './scheduler/scheduler/scheduler.component';
import { Dashboard3Component } from './applications/dashboard3/dashboard3.component';
import { EcommerceDashboardComponent } from './applications/e-commerce/ecommerce-dashboard/ecommerce-dashboard.component';
import { ClientsComponent } from './applications/e-commerce/clients/clients.component';
import { DetailsComponent } from './applications/e-commerce/details/details.component';
import { ListComponent } from './applications/e-commerce/list/list.component';
import { CheckoutComponent } from './applications/e-commerce/checkout/checkout.component';
import { AnalyticsComponent } from './applications/analytics/analytics.component';
import { List1Component } from './applications/projects/list1/list1.component';
import { List2Component } from './applications/projects/list2/list2.component';
import { DetailComponent } from './applications/projects/detail/detail.component';
import { CryptodashboardComponent } from './applications/crypto/cryptodashboard/cryptodashboard.component';
import { Overview1Component } from './applications/profile/overview1/overview1.component';
import { Overview2Component } from './applications/profile/overview2/overview2.component';
import { UsersComponent } from './applications/profile/users/users.component';
import { SocialPageComponent } from './applications/profile/social-page/social-page.component';
import { AccountSettingsComponent } from './applications/profile/account-settings/account-settings.component';
import { Tasks1Component } from './applications/kanban/tasks1/tasks1.component';
import { Tasks2Component } from './applications/kanban/tasks2/tasks2.component';
import { ChatComponent } from './applications/chat/chat.component';
import { InboxComponent } from './applications/inbox/inbox.component';

@NgModule({
  declarations: [
    Dashboard1Component,
    DashboardComponent,
    Dashboard2Component,
    SignInComponent,
    SignUpComponent,
    ResetPasswordComponent,
    InvoiceComponent,
    PricingComponent,
    FourOFourComponent,
    FiveOOComponent,
    KnowledgeBaseComponent,
    BlankPageComponent,
    IntroductionComponent,
    GettingStartedComponent,
    PluginsComponent,
    ChangelogComponent,
    ToastsComponent,
    ButtonsComponent,
    CardsComponent,
    CarouselComponent,
    EmbedVideoComponent,
    GeneralComponent,
    GridLayoutComponent,
    ModalsComponent,
    TabsComponent,
    TypographyComponent,
    FeatherComponent,
    FontAwesomeComponent,
    LayoutsComponent,
    BasicInputsComponent,
    InputGroupsComponent,
    TablesComponent,
    EditorPageComponent,
    ValidationComponent,
    WizardComponent,
    ResponsiveTableComponent,
    TableWithButtonsComponent,
    ColumnSearchComponent,
    MultiSelectionComponent,
    AjaxDataComponent,
    ChartsComponent,
    NotificationsComponent,
    GoogleMapsComponent,
    SchedulerPageComponent,
    Dashboard3Component,
    EcommerceDashboardComponent,
    ClientsComponent,
    DetailsComponent,
    ListComponent,
    CheckoutComponent,
    AnalyticsComponent,
    List1Component,
    List2Component,
    DetailComponent,
    CryptodashboardComponent,
    Overview1Component,
    Overview2Component,
    UsersComponent,
    SocialPageComponent,
    AccountSettingsComponent,
    Tasks1Component,
    Tasks2Component,
    ChatComponent,
    InboxComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SmartImportsModule
  ],
  providers: [{
    provide: StylingService,
    useClass: StylingService
  }]
})
export class PagesModule { }
