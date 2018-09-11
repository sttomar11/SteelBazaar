import { NgModule } from '@angular/core';
import { LoginService } from './services/login-service';
import { AuthGuard } from './guards/auth-guard';
import { PanelModule, InputTextModule, PasswordModule, ButtonModule, ToolbarModule, FileUploadModule
} from 'primeng/primeng';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
        FileUploadModule,
        ToolbarModule,
        FormsModule
    ],
    exports : [
        RouterModule,
        PanelModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        FileUploadModule,
        ToolbarModule,
        FormsModule
    ]
})
export class CommonModule {

}
