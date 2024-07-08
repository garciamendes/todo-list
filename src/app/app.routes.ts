import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app.component';
import { authGuardGuard } from './guards/auth-guard.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '**', redirectTo: 'login' },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: AuthComponent },
  { path: 'home', component: HomeComponent, canMatch: [authGuardGuard] },
];
