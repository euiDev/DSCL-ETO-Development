import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ArticlesService } from 'src/app/core/services/articles.service';

import { ArticleSaveComponent } from './article-save.component';

describe('ArticleSaveComponent', () => {
  let component: ArticleSaveComponent;
  let fixture: ComponentFixture<ArticleSaveComponent>;
  let articlesServiceSpy = jasmine.createSpyObj({
    getArticles: of([{ a: 1 }, { b: 2 }, { c: 2 }]),
  });

  const activatedRouteSpy = {
    paramMap: of({}),
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ArticleSaveComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: ArticlesService, useValue: articlesServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleSaveComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
