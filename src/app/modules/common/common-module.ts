import { NgModule } from '@angular/core';
import { LoginService } from './services/login-service';
import { AuthGuard } from './guards/auth-guard';
import { PanelModule, InputTextModule, PasswordModule, ButtonModule, ToolbarModule
} from 'primeng/primeng';
import { RouterModule } from '@angular/router';

@NgModule({
    providers: [
        LoginService,
        AuthGuard
    ],
    imports : [
        RouterModule,
        PanelModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        ToolbarModule
    ],
    exports : [
        RouterModule,
        PanelModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        ToolbarModule
    ]
})
export class CommonModule {

}
