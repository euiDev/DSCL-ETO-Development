import { Component, OnInit } from '@angular/core';
import { User, UserInterface } from './core/models/user.model';
import { AuthenticationService } from './core/services/authentication.service';
import { SessionService } from './core/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private authentication: AuthenticationService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {}
}
