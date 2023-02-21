import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { Article } from 'src/app/core/models/articles.model';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.scss'],
})
export class ArticleSearchComponent {
  searchForm: FormGroup = new FormGroup({
    term: new FormControl(''),
    property: new FormControl('id'),
  });

  articles$: Observable<Article[] | null> =
    this.articlesService.fetchAllArticles();

  filters$: Observable<{
    term: string;
    property: string;
  }> = this.searchForm.valueChanges.pipe(
    startWith({
      term: '',
      property: 'id',
    }),
    distinctUntilChanged(
      (previous, current) =>
        previous.term === current.term && previous.property === current.property
    ),
    debounceTime(500)
  );
  filteredArticles$!: Observable<Article[] | undefined>;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.filteredArticles$ = combineLatest(this.articles$, this.filters$).pipe(
      map(([articles, filters]) => {
        if (!articles) {
          return [];
        }

        return articles.filter((article) => {
          const selectedArticle = article[
            filters.property as keyof Article
          ] as string;
          return selectedArticle.includes(filters.term);
        });
      })
    );
  }
}
