import { NgModule } from '@angular/core';
import { LoginService } from './services/login-service';
import { AuthGuard } from './guards/auth-guard';
import { PanelModule, InputTextModule, PasswordModule, ButtonModule, ToolbarModule
} from 'primeng/primeng';

@NgModule({
    providers: [
        LoginService,
        AuthGuard
    ],
    imports : [
        PanelModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        ToolbarModule
    ],
    exports : [
        PanelModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        ToolbarModule
    ]
})
export class CommonModule {

}
