import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleSaveComponent } from './article-save/article-save.component';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesListComponent,
  },
  {
    path: 'add',
    component: ArticleSaveComponent,
  },
  {
    path: 'edit/:articleId',
    component: ArticleSaveComponent,
  },
  { path: 'search', component: ArticleSearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
