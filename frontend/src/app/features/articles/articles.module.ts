import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleSaveComponent } from './article-save/article-save.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleSaveComponent,
    ArticleSearchComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class ArticlesModule {}
