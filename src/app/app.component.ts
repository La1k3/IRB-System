import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IRB System';

  constructor(private authService: AuthService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  get userRole(): "user" | "admin" | null {
    return this.authService.getUserRole();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  toggleChatbot(): void {
    const chatbot = document.getElementById("chatbot");
    if (chatbot) {
        if (chatbot.classList.contains('hide-chatbot')) {
            chatbot.classList.remove('hide-chatbot');
            chatbot.classList.add('show-chatbot');
        } else {
            chatbot.classList.add('hide-chatbot');
            chatbot.classList.remove('show-chatbot');
        }
    }
}
}
