import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/articles.model';
import { handleHTTPErrors } from '../utils/http-handler';
import { getLocalStorageData } from '../utils/local-storage';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private articlesBehaviorSubject = new BehaviorSubject<Article[] | null>(null);

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {
    this.articlesBehaviorSubject.next(
      getLocalStorageData<Article[]>('articles')
    );
  }

  fetchAllArticles(): Observable<Article[] | null> {
    return this.http.get<Article[]>(environment.apiUrl + 'articles').pipe(
      catchError(handleHTTPErrors),
      map((articles) =>
        articles.sort(
          (article1, article2) =>
            new Date(article2.date).getTime() -
            new Date(article1.date).getTime()
        )
      ),
      switchMap((articles) => this.setAllArticles(articles))
    );
  }

  getAllArticles(): Observable<Article[] | null> {
    return this.articlesBehaviorSubject.asObservable().pipe(
      map((articles) => {
        if (!articles) {
          return [];
        }

        return articles.map((article) => {
          article.date = new Date(article.date);
          return article;
        });
      })
    );
  }

  setAllArticles(articles: Article[]): Observable<Article[] | null> {
    this.articlesBehaviorSubject.next(articles);
    return this.getAllArticles();
  }

  unsetAllArticles(): void {
    this.articlesBehaviorSubject.next(null);
  }

  saveArticle(
    title: string,
    body: string,
    articleId: string | null = null
  ): Observable<Article[] | null> {
    return this.sessionService.getUserSession().pipe(
      switchMap((user) => {
        const userId = user?.id;
        if (!!articleId) {
          return this.http.put<Article>(
            environment.apiUrl + `articles/${articleId}`,
            {
              title,
              body,
            }
          );
        }

        return this.http.post<Article>(environment.apiUrl + 'articles', {
          userId,
          title,
          body,
        });
      }),
      catchError(handleHTTPErrors),
      switchMap((article) => this.addArticle(article))
    );
  }

  addArticle(article: Article): Observable<Article[] | null> {
    article.date = new Date(article.date);
    return this.getAllArticles().pipe(
      map((articles) => {
        articles?.push(article);
        return articles;
      })
    );
  }

  getArticle(articleId: string | null): Observable<Article | boolean> {
    if (!articleId) {
      return of(true);
    }
    return this.http.get<Article>(environment.apiUrl + `articles/${articleId}`);
  }
}
