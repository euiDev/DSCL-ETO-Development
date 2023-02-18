import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

import { CustomPreloadStrategy } from './core/utils/custom-preload-strategy';
import { LoginComponent } from './core/components/login/login.component';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
    data: {
      preload: true,
    },
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./features/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
    canActivate: [AuthenticationGuard],
    data: {
      preload: true,
    },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      preload: true,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadStrategy }),
  ],
  exports: [RouterModule],
  providers: [CustomPreloadStrategy],
})
export class AppRoutingModule {}
