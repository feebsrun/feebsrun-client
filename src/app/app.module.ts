import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunComponent } from './run/run.component';
import { RunDetailsComponent } from './run/run-details/run-details.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

import {ServiceWorkerModule} from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RunCardComponent } from './run/run-card/run-card.component';
import { reducers, effects, CustomSerializer } from './store';
import { from } from 'rxjs';
import { ModalComponent } from './modal/components/modal.component';
import { AuthModule } from './auth/auth.module';
import { TimespanInputComponent } from './controls/timespan/timespan.component';

@NgModule({
  declarations: [
    AppComponent,
    RunComponent,
    BlogComponent,
    HomeComponent,
    RunCardComponent,
    RunDetailsComponent,
    ModalComponent,
    TimespanInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    FontAwesomeModule,
    AuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    // StoreModule.forFeature('entities', reducers),
    // EffectsModule.forFeature(effects),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule
    //ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer }
  ],
  entryComponents: [
    ModalComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
