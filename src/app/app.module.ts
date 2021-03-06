import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login-module';
import { HomeModule } from './modules/home/home-module';
import { CommonModule } from './modules/common/common-module';
import { PageNotFoundModule } from './modules/page-not-found/page-not-found-module';
import { UsersModule } from './modules/users/users-module';
import { MynavbarComponent } from './mynavbar/mynavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MynavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    LoginModule,
    HomeModule,
    PageNotFoundModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
