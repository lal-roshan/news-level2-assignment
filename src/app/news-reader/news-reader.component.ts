import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-reader',
  templateUrl: './news-reader.component.html',
  styleUrls: ['./news-reader.component.css']
})
export class NewsReaderComponent implements OnInit {

  // inject the required dependency for news service here
  constructor() { }

  ngOnInit() {
    
    // The code here should fetch the bookmarked (read later) news details through NewsService method

    // the code should handle unauthorized, resource not found and internal server error
    // that can be returned as HttpResponse
  }

}
