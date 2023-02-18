import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private sessionService: SessionService
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
        catchError(this.handleHTTPErrors),
        switchMap((user) =>
          this.sessionService
            .setUserSession(user)
            .pipe(tap(() => this.router.navigate([redirectTo])))
        )
      );
  }

  logout(): void {
    this.sessionService.unsetUserSession();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): Observable<boolean> {
    return this.sessionService.getUserSession().pipe(map((user) => !!user));
  }

  private handleHTTPErrors(
    errorResponse: HttpErrorResponse
  ): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.message) {
      return throwError(errorMessage);
    }
    errorMessage = errorResponse.error.message ?? errorMessage;
    return throwError(errorMessage);
  }
}
