import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles = [
    {
      image: 'https://cdn-images-1.medium.com/max/2600/1*BqyWtlAmAtk9JRO8b0uyNw.png',
      author: 'Siddharth Ajmera',
      date: 'JANUARY 8, 2018',
      title: 'Getting Started with Angular',
      description: 'A step by step guide to setting up and getting started with Angular',
      link: 'https://codeburst.io/getting-started-with-angular-f92236eaed70'
    }, {
      image: 'https://cdn-images-1.medium.com/max/2600/1*4DYuWl0XkQ_JvP_IhXmN2A.png',
      author: 'Siddharth Ajmera',
      date: 'OCTOBER 16, 2017',
      title: 'Leveraging a DialogFlow(API.AI) Agent in an Angular 4 App',
      description: 'A step by step guide to integrating a DialogFlow Agent with an Angular App',
      link: 'https://chatbotslife.com/leveraging-a-dialogflow-api-ai-agent-in-an-angular-4-app-efc7d3cc41dd'
    }, {
      image: 'https://cdn-images-1.medium.com/max/2600/1*NE_bMr-rp4kLlNkZXOj00Q.png',
      author: 'Siddharth Ajmera',
      date: 'MARCH 20, 2018',
      title: 'Let’s Create a Live News Chatbot in 10 Minutes',
      description: 'The scope of this article is to create a Live News Chatbot in around 10 minutes',
      link: 'https://chatbotsmagazine.com/lets-create-a-live-news-api-for-our-chatfuel-bot-in-minutes-7ed67fc67ae6'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
