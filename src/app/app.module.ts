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
import { HttpClientModule } from '@angular/common/http';
//mat video module
import { MatVideoModule } from 'mat-video';

//This didn't wotk clean up later
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderNavComponent,
    MainHeaderSideNavComponent,
    HomeComponent,
    MyAccountComponent,
    LoginComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    //we need this animation for video as well
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    AngularMaterialModule,
    FlexLayoutModule,
    MatVideoModule,
    HttpClientModule,
    //remove them if mat video works
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
