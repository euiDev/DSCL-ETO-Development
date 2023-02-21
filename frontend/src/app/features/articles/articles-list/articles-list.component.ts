import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/models/articles.model';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  articles$: Observable<Article[] | null> =
    this.articlesService.fetchAllArticles();

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {}
}
