import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonDirective } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { InputPassword } from 'primeng/inputpassword';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ButtonDirective,
    InputText,
    InputPassword
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = '';
  password = '';
  rememberMe = false;

  showPassword = false;
}