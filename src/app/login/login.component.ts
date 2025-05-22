import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [MatIconModule]
})
export class LoginComponent {
  showPassword: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}