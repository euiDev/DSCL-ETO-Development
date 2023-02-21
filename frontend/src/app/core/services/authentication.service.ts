import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';
import { handleHTTPErrors } from '../utils/http-handler';
import { ArticlesService } from './articles.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private sessionService: SessionService,
    private articlesService: ArticlesService
  ) {}

  login(
    username: string,
    email: string,
    redirectTo: string = '/articles'
  ): Observable<User | null> {
    return this.http
      .post<User>(environment.apiUrl + 'auth/login', {
        username,
        email,
      })
      .pipe(
        catchError(handleHTTPErrors),
        switchMap((user) =>
          this.sessionService
            .setUserSession(user)
            .pipe(tap(() => this.router.navigate([redirectTo])))
        )
      );
  }

  logout(): void {
    this.sessionService.unsetUserSession();
    this.articlesService.unsetAllArticles();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.sessionService.getUserSession().pipe(map((user) => !!user));
  }
}
