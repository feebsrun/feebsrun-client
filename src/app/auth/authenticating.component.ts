import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './authenticating.component.html',
  styleUrls: ['./authenticating.component.scss']
})
export class AuthenticatingComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.handleLoginCallback();
  }

}
