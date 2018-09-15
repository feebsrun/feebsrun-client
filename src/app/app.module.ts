import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule, MDBBootstrapModulePro } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunComponent } from './run/run.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

import {ServiceWorkerModule} from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RunCardComponent } from './run/run-card/run-card.component';
import { AuthenticatingComponent } from './auth/authenticating.component';

@NgModule({
  declarations: [
    AppComponent,
    RunComponent,
    BlogComponent,
    HomeComponent,
    RunCardComponent,
    AuthenticatingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    //ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
