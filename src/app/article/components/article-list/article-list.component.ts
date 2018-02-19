import {Component, Input, OnInit} from '@angular/core';
import {ArticleCard} from '../article-card/article-card.component';

export interface ArticleList {
  list: ArticleCard[];
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  @Input() data: ArticleList;

  constructor() {
  }

  ngOnInit() {
  }

  onButtonClicked(item) {

  }
}
