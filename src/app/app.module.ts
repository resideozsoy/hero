import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderNavComponent } from './main-header-nav/main-header-nav.component';
import { MainHeaderSideNavComponent } from './main-header-side-nav/main-header-side-nav.component';
import { LoginComponent } from './user/login.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component'

import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderNavComponent,
    MainHeaderSideNavComponent,
    HomeComponent,
    MyAccountComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
