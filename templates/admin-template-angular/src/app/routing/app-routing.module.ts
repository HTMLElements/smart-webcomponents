import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from '../pages/applications/analytics/analytics.component';
import { ChatComponent } from '../pages/applications/chat/chat.component';
import { CryptodashboardComponent } from '../pages/applications/crypto/cryptodashboard/cryptodashboard.component';
import { DashboardComponent } from '../pages/applications/dashboard/dashboard.component';
import { Dashboard1Component } from '../pages/applications/dashboard1/dashboard1.component';
import { Dashboard2Component } from '../pages/applications/dashboard2/dashboard2.component';
import { Dashboard3Component } from '../pages/applications/dashboard3/dashboard3.component';
import { CheckoutComponent } from '../pages/applications/e-commerce/checkout/checkout.component';
import { ClientsComponent } from '../pages/applications/e-commerce/clients/clients.component';
import { DetailsComponent } from '../pages/applications/e-commerce/details/details.component';
import { EcommerceDashboardComponent } from '../pages/applications/e-commerce/ecommerce-dashboard/ecommerce-dashboard.component';
import { ListComponent } from '../pages/applications/e-commerce/list/list.component';
import { InboxComponent } from '../pages/applications/inbox/inbox.component';
import { Tasks1Component } from '../pages/applications/kanban/tasks1/tasks1.component';
import { Tasks2Component } from '../pages/applications/kanban/tasks2/tasks2.component';
import { AccountSettingsComponent } from '../pages/applications/profile/account-settings/account-settings.component';
import { Overview1Component } from '../pages/applications/profile/overview1/overview1.component';
import { Overview2Component } from '../pages/applications/profile/overview2/overview2.component';
import { SocialPageComponent } from '../pages/applications/profile/social-page/social-page.component';
import { UsersComponent } from '../pages/applications/profile/users/users.component';
import { DetailComponent } from '../pages/applications/projects/detail/detail.component';
import { List1Component } from '../pages/applications/projects/list1/list1.component';
import { List2Component } from '../pages/applications/projects/list2/list2.component';
import { ChartsComponent } from '../pages/charts/charts/charts.component';
import { AjaxDataComponent } from '../pages/data-tables/ajax-data/ajax-data.component';
import { ColumnSearchComponent } from '../pages/data-tables/column-search/column-search.component';
import { MultiSelectionComponent } from '../pages/data-tables/multi-selection/multi-selection.component';
import { ResponsiveTableComponent } from '../pages/data-tables/responsive-table/responsive-table.component';
import { TableWithButtonsComponent } from '../pages/data-tables/table-with-buttons/table-with-buttons.component';
import { ChangelogComponent } from '../pages/documentation/changelog/changelog.component';
import { GettingStartedComponent } from '../pages/documentation/getting-started/getting-started.component';
import { IntroductionComponent } from '../pages/documentation/introduction/introduction.component';
import { PluginsComponent } from '../pages/documentation/plugins/plugins.component';
import { EditorPageComponent } from '../pages/form-plugins/editor/editor.component';
import { ValidationComponent } from '../pages/form-plugins/validation/validation.component';
import { WizardComponent } from '../pages/form-plugins/wizard/wizard.component';
import { BasicInputsComponent } from '../pages/forms/basic-inputs/basic-inputs.component';
import { InputGroupsComponent } from '../pages/forms/input-groups/input-groups.component';
import { LayoutsComponent } from '../pages/forms/layouts/layouts.component';
import { FeatherComponent } from '../pages/icons/feather/feather.component';
import { FontAwesomeComponent } from '../pages/icons/font-awesome/font-awesome.component';
import { GoogleMapsComponent } from '../pages/maps/google-maps/google-maps.component';
import { NotificationsComponent } from '../pages/notifications/notifications/notifications.component';
import { BlankPageComponent } from '../pages/pages/blank-page/blank-page.component';
import { FiveOOComponent } from '../pages/pages/five-o-o/five-o-o.component';
import { FourOFourComponent } from '../pages/pages/four-o-four/four-o-four.component';
import { InvoiceComponent } from '../pages/pages/invoice/invoice.component';
import { KnowledgeBaseComponent } from '../pages/pages/knowledge-base/knowledge-base.component';
import { PricingComponent } from '../pages/pages/pricing/pricing.component';
import { ResetPasswordComponent } from '../pages/pages/reset-password/reset-password.component';
import { SignInComponent } from '../pages/pages/sign-in/sign-in.component';
import { SignUpComponent } from '../pages/pages/sign-up/sign-up.component';
import { SchedulerPageComponent } from '../pages/scheduler/scheduler/scheduler.component';
import { TablesComponent } from '../pages/tables/tables.component';
import { ButtonsComponent } from '../pages/ui-elements/buttons/buttons.component';
import { CardsComponent } from '../pages/ui-elements/cards/cards.component';
import { CarouselComponent } from '../pages/ui-elements/carousel/carousel.component';
import { EmbedVideoComponent } from '../pages/ui-elements/embed-video/embed-video.component';
import { GeneralComponent } from '../pages/ui-elements/general/general.component';
import { GridLayoutComponent } from '../pages/ui-elements/grid-layout/grid-layout.component';
import { ModalsComponent } from '../pages/ui-elements/modals/modals.component';
import { TabsComponent } from '../pages/ui-elements/tabs/tabs.component';
import { ToastsComponent } from '../pages/ui-elements/toasts/toasts.component';
import { TypographyComponent } from '../pages/ui-elements/typography/typography.component';

const defaultTitle = 'Smart HTML Elements | Admin & Dashboard Template With Bootstrap';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    data: { animation: 'DashboardPage' },
    title: `${defaultTitle}`
  },
  {
    path: 'dashboard-1', component: Dashboard1Component,
    data: { animation: 'Dashboard1Page' },
    title: `Dashboard 1 - ${defaultTitle}`
  },
  {
    path: 'dashboard-2', component: Dashboard2Component,
    data: { animation: 'Dashboard2Page' },
    title: `Dashboard 2 - ${defaultTitle}`
  },
  {
    path: 'dashboard-3', component: Dashboard3Component,
    data: { animation: 'Dashboard3Page' },
    title: `Dashboard 3 - ${defaultTitle}`
  },
  {
    path: 'sign-in', component: SignInComponent,
    data: { animation: 'SignInPage' },
    title: `Sign In - ${defaultTitle}`
  },
  {
    path: 'sign-up', component: SignUpComponent,
    data: { animation: 'SignUpPage' },
    title: `Sign Up - ${defaultTitle}`
  },
  {
    path: 'reset-password', component: ResetPasswordComponent,
    data: { animation: 'ResetPasdswordPage' },
    title: `Reset Password - ${defaultTitle}`
  },
  {
    path: 'invoice', component: InvoiceComponent,
    data: { animation: 'InvoicePage' },
    title: `Invoice - ${defaultTitle}`
  },
  {
    path: 'pricing', component: PricingComponent,
    data: { animation: 'PricingPage' },
    title: `Pricing - ${defaultTitle}`
  },
  {
    path: '404', component: FourOFourComponent,
    data: { animation: '404Page' },
    title: `Error 404 - ${defaultTitle}`
  },
  {
    path: '500', component: FiveOOComponent,
    data: { animation: '500Page' },
    title: `Error 500 - ${defaultTitle}`
  },
  {
    path: 'knowledge-base', component: KnowledgeBaseComponent,
    data: { animation: 'KnowledgeBasePage' },
    title: `Knowledge Base - ${defaultTitle}`
  },
  {
    path: 'blank', component: BlankPageComponent,
    data: { animation: 'BlankPage' },
    title: `Blank Page - ${defaultTitle}`
  },
  {
    path: 'introduction', component: IntroductionComponent,
    data: { animation: 'IntroductionPage' },
    title: `Introduction - ${defaultTitle}`
  },
  {
    path: 'getting-started', component: GettingStartedComponent,
    data: { animation: 'GettingStartedPage' },
    title: `Getting Started - ${defaultTitle}`
  },
  {
    path: 'plugins', component: PluginsComponent,
    data: { animation: 'PluginsPage' },
    title: `Plugins - ${defaultTitle}`
  },
  {
    path: 'changelog', component: ChangelogComponent,
    data: { animation: 'ChangelogPage' },
    title: `Changelog - ${defaultTitle}`
  },
  {
    path: 'toasts', component: ToastsComponent,
    data: { animation: 'ToastsPage' },
    title: `Toasts - ${defaultTitle}`
  },
  {
    path: 'buttons', component: ButtonsComponent,
    data: { animation: 'ButtonsPage' },
    title: `Buttons - ${defaultTitle}`
  },
  {
    path: 'cards', component: CardsComponent,
    data: { animation: 'CardsPage' },
    title: `Cards - ${defaultTitle}`
  },
  {
    path: 'carousel', component: CarouselComponent,
    data: { animation: 'CarouselPage' },
    title: `Carousel - ${defaultTitle}`
  },
  {
    path: 'embed-video', component: EmbedVideoComponent,
    data: { animation: 'EmbedVideoPage' },
    title: `Embed Video - ${defaultTitle}`
  },
  {
    path: 'general', component: GeneralComponent,
    data: { animation: 'GeneralPage' },
    title: `General-Use Components - ${defaultTitle}`
  },
  {
    path: 'grid-layout', component: GridLayoutComponent,
    data: { animation: 'GridLayoutPage' },
    title: `Grid Layout - ${defaultTitle}`
  },
  {
    path: 'modals', component: ModalsComponent,
    data: { animation: 'ModalsPage' },
    title: `Modals - ${defaultTitle}`
  },
  {
    path: 'tabs', component: TabsComponent,
    data: { animation: 'TabsPage' },
    title: `Tabs - ${defaultTitle}`
  },
  {
    path: 'typography', component: TypographyComponent,
    data: { animation: 'FeatherPage' },
    title: `Typography Components - ${defaultTitle}`
  },
  {
    path: 'feather', component: FeatherComponent,
    data: { animation: 'TypographyPage' },
    title: `Feather - ${defaultTitle}`
  },
  {
    path: 'font-awesome', component: FontAwesomeComponent,
    data: { animation: 'FontAwesomePage' },
    title: `Font Awesome - ${defaultTitle}`
  },
  {
    path: 'layouts', component: LayoutsComponent,
    data: { animation: 'LayoutsPage' },
    title: `Form Layouts - ${defaultTitle}`
  },
  {
    path: 'basic-inputs', component: BasicInputsComponent,
    data: { animation: 'BasicInputsPage' },
    title: `Basic Inputs - ${defaultTitle}`
  },
  {
    path: 'input-groups', component: InputGroupsComponent,
    data: { animation: 'InputGroupsPage' },
    title: `Input Groups - ${defaultTitle}`
  },
  {
    path: 'tables', component: TablesComponent,
    data: { animation: 'TablesPage' },
    title: `Tables - ${defaultTitle}`
  },
  {
    path: 'editor', component: EditorPageComponent,
    data: { animation: 'EditorPage' },
    title: `Editor - ${defaultTitle}`
  },
  {
    path: 'validation', component: ValidationComponent,
    data: { animation: 'ValidationPage' },
    title: `Form Validation - ${defaultTitle}`
  },
  {
    path: 'wizard', component: WizardComponent,
    data: { animation: 'WizardPage' },
    title: `Wizard - ${defaultTitle}`
  },
  {
    path: 'responsive-table', component: ResponsiveTableComponent,
    data: { animation: 'ResponsiveTablePage' },
    title: `Responsive Table - ${defaultTitle}`
  },
  {
    path: 'table-with-buttons', component: TableWithButtonsComponent,
    data: { animation: 'TableWithButtonsPage' },
    title: `Table With Buttons - ${defaultTitle}`
  },
  {
    path: 'column-search', component: ColumnSearchComponent,
    data: { animation: 'ColumnSearchPage' },
    title: `Columns Search - ${defaultTitle}`
  },
  {
    path: 'multi-selection', component: MultiSelectionComponent,
    data: { animation: 'MultiSelectionPage' },
    title: `Table With Multi Selection - ${defaultTitle}`
  },
  {
    path: 'ajax-data', component: AjaxDataComponent,
    data: { animation: 'AjaxDataPage' },
    title: `Table With Data From Ajax - ${defaultTitle}`
  },
  {
    path: 'charts', component: ChartsComponent,
    data: { animation: 'ChartsPage' },
    title: `Charts - ${defaultTitle}`
  },
  {
    path: 'notifications', component: NotificationsComponent,
    data: { animation: 'NotificationsPage' },
    title: `Notifications - ${defaultTitle}`
  },
  {
    path: 'google-maps', component: GoogleMapsComponent,
    data: { animation: 'GoogleMapsPage' },
    title: `Google Maps - ${defaultTitle}`
  },
  {
    path: 'scheduler', component: SchedulerPageComponent,
    data: { animation: 'SchedulerPage' },
    title: `Scheduler - ${defaultTitle}`
  },
  {
    path: 'e-commerce', component: EcommerceDashboardComponent,
    data: { animation: 'EcommerceDashboardPage' },
    title: `E-commerce - ${defaultTitle}`
  },
  {
    path: 'clients', component: ClientsComponent,
    data: { animation: 'EcommerceClientsPage' },
    title: `Clients - ${defaultTitle}`
  },
  {
    path: 'e-commerce-details', component: DetailsComponent,
    data: { animation: 'EcommerceDetailsPage' },
    title: `E-commerce Details - ${defaultTitle}`
  },
  {
    path: 'e-commerce-list', component: ListComponent,
    data: { animation: 'EcommerceListPage' },
    title: `E-commerce List - ${defaultTitle}`
  },
  {
    path: 'e-commerce-checkout', component: CheckoutComponent,
    data: { animation: 'EcommerceCheckoutPage' },
    title: `E-commerce Checkout - ${defaultTitle}`
  },
  {
    path: 'analytics', component: AnalyticsComponent,
    data: { animation: 'AnalyticsPage' },
    title: `Analytics - ${defaultTitle}`
  },
  {
    path: 'projects-list-1', component: List1Component,
    data: { animation: 'AnalyticsPage' },
    title: `Projects List 1 - ${defaultTitle}`
  },
  {
    path: 'projects-list-2', component: List2Component,
    data: { animation: 'AnalyticsPage' },
    title: `Projects List 2 - ${defaultTitle}`
  },
  {
    path: 'detail', component: DetailComponent,
    data: { animation: 'AnalyticsPage' },
    title: `Projects Detail - ${defaultTitle}`
  },
  {
    path: 'crypto', component: CryptodashboardComponent,
    data: { animation: 'CryptoPage' },
    title: `Crypto - ${defaultTitle}`
  },
  {
    path: 'profile-1', component: Overview1Component,
    data: { animation: 'ProfileOverview1Page' },
    title: `Profile 1 - ${defaultTitle}`
  },
  {
    path: 'profile-2', component: Overview2Component,
    data: { animation: 'ProfileOverview2Page' },
    title: `Profile 2 - ${defaultTitle}`
  },
  {
    path: 'users-list', component: UsersComponent,
    data: { animation: 'UsersListPage' },
    title: `Users List - ${defaultTitle}`
  },
  {
    path: 'social', component: SocialPageComponent,
    data: { animation: 'SocialPage' },
    title: `Social - ${defaultTitle}`
  },
  {
    path: 'settings', component: AccountSettingsComponent,
    data: { animation: 'AccountSettingsPage' },
    title: `Settings - ${defaultTitle}`
  },
  {
    path: 'tasks', component: Tasks1Component,
    data: { animation: 'KanbanTasks1Page' },
    title: `Tasks - ${defaultTitle}`
  },
  {
    path: 'tasks-2', component: Tasks2Component,
    data: { animation: 'KanbanTasks2Page' },
    title: `Tasks 2 - ${defaultTitle}`
  },
  {
    path: 'chat', component: ChatComponent,
    data: { animation: 'ChatPage' },
    title: `Chat - ${defaultTitle}`
  },
  {
    path: 'inbox', component: InboxComponent,
    data: { animation: 'InboxPage' },
    title: `Inbox - ${defaultTitle}`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
