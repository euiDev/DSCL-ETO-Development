import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private userBehaviorSubject = new BehaviorSubject<User | null>(
    this.getUserData()
  );

  getUserData(): User | null {
    if (!localStorage.getItem('userData')) {
      return null;
    }

    return JSON.parse(localStorage.getItem('userData') as string);
  }

  getUserSession(): Observable<User | null> {
    return this.userBehaviorSubject.asObservable();
  }

  setUserSession(user: User): Observable<User | null> {
    const { id, username, email } = user;
    const newUser = new User(id, username, email);
    this.userBehaviorSubject.next(newUser);
    localStorage.setItem('userData', JSON.stringify({ username, email }));
    return this.getUserSession();
  }

  unsetUserSession(): void {
    this.userBehaviorSubject.next(null);
    localStorage.removeItem('userData');
  }
}
