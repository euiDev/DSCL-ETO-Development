import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { Article } from 'src/app/core/models/articles.model';
import { DynamicField } from 'src/app/core/models/dynamic-field.model';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-article-save',
  templateUrl: './article-save.component.html',
  styleUrls: ['./article-save.component.scss'],
})
export class ArticleSaveComponent {
  articleId: string | null = null;
  article$!: Observable<Article | boolean>;

  articleSaveFormFields: DynamicField[] = [
    new DynamicField('title', 'input', 'text', '', 'Title', ['required']),
    new DynamicField(
      'date',
      'datepicker',
      'datepicker',
      new Date(),
      'Datepicker',
      ['required']
    ),
    new DynamicField('body', 'textarea', 'text', '', 'Body', ['required']),
  ];

  articleSaveFormGroup!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.article$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.articlesService.getArticle(params.get('articleId'));
      }),
      tap((article) => {
        if (typeof article !== 'boolean') {
          const title = article.title || '';
          const body = article.body || '';
          const date = new Date(article.date) || '';
          this.articleSaveFormFields = [
            new DynamicField('title', 'input', 'text', title, 'Title', [
              'required',
            ]),
            new DynamicField(
              'date',
              'datepicker',
              'datepicker',
              date,
              'Datepicker',
              ['required']
            ),
            new DynamicField('body', 'textarea', 'text', body, 'Body', [
              'required',
            ]),
          ];
          this.articleId = article.id;
          return article;
        }
        return true;
      })
    );
  }

  goSaveArticle(isSubmitted: boolean) {
    if (isSubmitted) {
      const { title, body } = this.articleSaveFormGroup.value;
      this.articleSaveFormGroup.reset();
      this.articlesService
        .saveArticle(title, body, this.articleId)
        .subscribe(() => this.router.navigate(['/articles']));
    }
  }
}
