import { NgModule } from '@angular/core';
import { NewUserComponent } from './new-user/new-user.component';
import { CommonModule } from '../common/common-module';
import {FileUploadModule} from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TabViewModule} from 'primeng/tabview';


@NgModule({
    declarations: [NewUserComponent],
    imports : [CommonModule, FileUploadModule, RadioButtonModule, TabViewModule]
})
export class UsersModule {}
