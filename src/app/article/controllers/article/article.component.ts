import {Component, OnInit} from '@angular/core';

import {
  ArticleList,
  ArticleCard
} from '../../components';

import {
  ArticleService
} from '../../services';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articleList: ArticleList;
  searchTouched: boolean = false;

  constructor(private articleService: ArticleService) {

    this.articleList = {
      list: []
    };
  }

  ngOnInit() {
  }

  onSearchChanges(data) {
    console.log('data', data);

    this.searchTouched = true;

    this.articleService
      .findArticles(data)
      .then(response => this.articleList = this.initArticleListFromData(response.data))
      .catch(err => console.error('error', err));
  }

  initArticleListFromData(data): ArticleList {

    return {
      list: data.map(datum => {

        const item: ArticleCard = {
          title: datum.headline,
          subTitle: [
            datum.writer,
            datum.author
          ].join(', '),
          details: `${datum.publisher} ${datum.pubDtPH} ${datum.pubTimePH}`,
          body: datum.body
        };

        return item;
      })
    };
  }
}
