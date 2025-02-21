import { Routes } from '@angular/router';
// import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardWrapperComponent } from './components/dashboardWrapperComponent/dashboard-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },


  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardWrapperComponent,
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./components/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./components/settings/settings.component').then(
            (m) => m.SettingsComponent
          ),
      },
    ],
  },
];