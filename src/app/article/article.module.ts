import {NgModule} from '@angular/core';
import {SharedModule} from '../shared';

import {
  ArticleComponent
} from './controllers';

import {
  SearchFormComponent,
  ArticleListComponent,
  ArticleCardComponent
} from './components';

import {
  ArticleService
} from './services'

import {
  ArticleRoutingModule
} from './article-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleComponent,
    SearchFormComponent,
    ArticleListComponent,
    ArticleCardComponent
  ],
  exports: [
    ArticleRoutingModule,
    ArticleComponent
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule {
}
