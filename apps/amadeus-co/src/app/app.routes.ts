import { Route } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginPageComponent },
  { path: 'search', component: SearchPageComponent }
];
