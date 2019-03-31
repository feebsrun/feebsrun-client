import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page.component';
import { CallbackComponent } from './components/callback.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginPageComponent },
      { path: 'authenticating', component: CallbackComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}