import {Injectable} from '@angular/core';
import {HttpService} from '../../shared';

@Injectable()
export class ArticleService {

  constructor(private httpService: HttpService) {

  }

  findArticles(data: { search: string }) {

    return this.httpService
      .get('articles', {
        query: data.search
      })
      .toPromise();
  }
}
