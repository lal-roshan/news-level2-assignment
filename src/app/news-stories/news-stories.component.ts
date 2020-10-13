import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.css']
})
export class NewsStoriesComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    // The code here should fetch the trending news details through NewsService method

    // the code should handle unauthorized, resource not found and internal server error
    // that can be returned as HttpResponse
  }
}
