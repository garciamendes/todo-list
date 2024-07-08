import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(private authService: AuthService, private route: Router) {}

  login() {
    this.authService.login();

    if (this.authService.isLoggedIn()) {
      this.route.navigate(['/home']);
    }
  }
}
