import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { LoginComplete } from '../actions/auth.actions';

@Component({
  selector: 'auth-callback',
  template: `
    <p>
      Loading...
    </p>
  `,
  styles: []
})
export class CallbackComponent implements OnInit {
  constructor(private store: Store<fromStore.EntityState>) {}

  ngOnInit() {
    this.store.dispatch(new LoginComplete());
  }
}