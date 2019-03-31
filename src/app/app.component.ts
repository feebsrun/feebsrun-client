import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import * as fromStore from './store';
import { Store } from '@ngrx/store';
import { Login } from './auth/actions/auth.actions';
//import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';

  constructor(
    //updates: SwUpdate,
    public authService: AuthService,
    private store: Store<fromStore.EntityState>
  ){
   // updates.available.subscribe(event => {
    //  updates
   //     .activateUpdate()
   //     .then(()=> document.location.reload());
   // });
  }

  ngOnInit(): void {
    this.store.dispatch(new Login());
  }
}
