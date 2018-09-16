import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
//import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  constructor(
    //updates: SwUpdate,
    public authService: AuthService
  ){
   // updates.available.subscribe(event => {
    //  updates
   //     .activateUpdate()
   //     .then(()=> document.location.reload());
   // });
  }
}
