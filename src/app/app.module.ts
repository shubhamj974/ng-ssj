import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DialogBoxComponent } from './shared/components/dialog-box/dialog-box.component';
import { DialogLogoutComponent } from './shared/components/dialog-logout/dialog-logout.component';
import { NavBarToggleDirective } from './shared/directive/nav-bar-toggle.directive';
import { AuthComponent } from './shared/components/auth/auth.component';
import { NoPastePasswordDirective } from './shared/directive/no-paste-password.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/auth.intercepter.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    NoPastePasswordDirective,
    AuthComponent,
    NavBarToggleDirective,
    DialogBoxComponent,
    DialogLogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
