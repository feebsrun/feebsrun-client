import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Login } from '../actions/auth.actions';

@Component({
  selector: 'auth-login-page',
  template: `
    <auth-login-form
      (submitted)="onLogin($event)">
    </auth-login-form>
  `
})
export class LoginPageComponent implements OnInit {
  constructor(private store: Store<fromStore.EntityState>) {}

  ngOnInit() {}

  onLogin() {
    this.store.dispatch(new Login());
  }
}