import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isAuthenticated: Observable<boolean> = this.authentication.isAuthenticated();
  constructor(private authentication: AuthenticationService) {}

  logout(): void {
    this.authentication.logout();
  }
}
