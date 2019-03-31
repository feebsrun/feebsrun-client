import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthEffects } from './effects/auth.effects';
import { LoginPageComponent } from './components/login-page.component';
import { LoginFormComponent } from './components/login-form.component';
import { CallbackComponent } from './components/callback.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    MDBBootstrapModulesPro.forRoot(),
  ],
  declarations: [ 
    LoginPageComponent, 
    LoginFormComponent, 
    CallbackComponent 
  ],
  entryComponents: []
})
export class AuthModule {}