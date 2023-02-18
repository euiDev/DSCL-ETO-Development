import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicField } from '../../models/dynamic-field.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormFields: DynamicField[] = [
    {
      key: 'email',
      element: 'input',
      type: 'email',
      value: '',
      placeholder: 'Email',
      validators: ['required', 'email'],
    },
    {
      key: 'username',
      element: 'input',
      type: 'text',
      value: '',
      placeholder: 'Username',
      validators: ['required'],
    },
  ];

  loginFormGroup!: FormGroup;

  constructor(private authentication: AuthenticationService) {}

  ngOnInit(): void {}

  goLogin(isSubmitted: boolean) {
    if (isSubmitted) {
      const { email, username } = this.loginFormGroup.value;
      this.loginFormGroup.reset();
      this.authentication.login(username, email, '/articles').subscribe();
    }
  }
}
