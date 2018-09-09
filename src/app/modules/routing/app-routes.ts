import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../common/guards/auth-guard';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from '../login/forgot-password/forgot-password.component';
import { NewUserComponent } from '../users/new-user/new-user.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    }, {
        path: 'register',
        component: NewUserComponent
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];
