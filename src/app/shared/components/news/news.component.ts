import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles = [
    {
      image: 'assets/images/blog/blog1.jpg',
      author: 'ADMIN',
      date: 'OCTOBER 8, 2018',
      title: 'Check upcoming Events',
      description: 'How you transform your business asap technology, consumer,'
    }, {
      image: 'assets/images/blog/blog2.jpg',
      author: 'ADMIN',
      date: 'OCTOBER 8, 2018',
      title: 'Adding a New Digital',
      description: 'How you transform your business asap technology, consumer,'
    }, {
      image: 'assets/images/blog/blog3.jpg',
      author: 'ADMIN',
      date: 'OCTOBER 8, 2018',
      title: 'West Elm At Evantor',
      description: 'How you transform your business asap technology, consumer,'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
