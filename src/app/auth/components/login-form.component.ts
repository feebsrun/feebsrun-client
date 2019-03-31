import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'auth-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<any>();

  loginForm = new FormGroup({});

  ngOnInit() {}

  submit() {
    this.submitted.emit();
  }
}