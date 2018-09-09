import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '../common/common-module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations : [
        LoginComponent,
        ForgotPasswordComponent
    ]
})
export class LoginModule {

}
