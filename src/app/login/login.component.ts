import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  userRole: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      const role = this.authService.getUserRole();
      if (role === 'user') {
        this.router.navigate(['user']);
      } else if (role === 'admin') {
        this.router.navigate(['admin']);
      }
    } else {
      alert('Nieprawidłowe dane logowania!');
    }
  }

}
