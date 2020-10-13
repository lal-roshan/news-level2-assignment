import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-story-card',
  templateUrl: './news-story-card.component.html',
  styleUrls: ['./news-story-card.component.css']
})
export class NewsStoryCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addNews(){
    // this method should add the news item marked for read later 
    // and save it to db.json file at server through NewsService

    //  the method should handle unauthorized, not found and any other server error 
    // that may be returned as Http Response
  }

}
