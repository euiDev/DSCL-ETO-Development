import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../models/articles.model';
import { User } from '../models/user.model';
import {
  getLocalStorageData,
  setLocalStorageData,
} from '../utils/local-storage';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private userBehaviorSubject = new BehaviorSubject<User | null>(null);

  constructor() {
    this.userBehaviorSubject.next(getLocalStorageData<User>('userData'));
  }

  getUserSession(): Observable<User | null> {
    return this.userBehaviorSubject.asObservable();
  }

  setUserSession(user: User): Observable<User | null> {
    const { id, username, email } = user;
    const newUser = new User(id, username, email);
    this.userBehaviorSubject.next(newUser);
    setLocalStorageData('userData', { id, username, email });
    return this.getUserSession();
  }

  unsetUserSession(): void {
    this.userBehaviorSubject.next(null);
    localStorage.removeItem('userData');
  }
}
