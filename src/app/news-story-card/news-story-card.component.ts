import { Component, Input, OnInit } from '@angular/core';
import { News } from '../models/news';
import { AuthenticationService } from '../services/authentication.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-story-card',
  templateUrl: './news-story-card.component.html',
  styleUrls: ['./news-story-card.component.css']
})
export class NewsStoryCardComponent implements OnInit {


  /// newsItem object representing the news details of the current card component
  @Input() public newsItem: News;

  /// Confirmation message representing the message on news addition to read later
  public confirmationMessage = '';

  /// Error message representing the message on error
  public errorMessage = '';

  /// Constructor injecting news service
  constructor(private newsService: NewsService,
              private authService: AuthenticationService) { }

  ngOnInit() {
  }

  /// Method for adding the news to read later
  addNewsToReadLater(newsItem) {
    this.newsService.addNews(newsItem, this.authService.getBearerToken())
      .subscribe(response => {
        if (response) {
          this.confirmationMessage = 'This News Article is Bookmarked';
        }
      },
        error => {
          if (error.status === 404) {
            this.errorMessage = 'Unable to access news server to add this news item';
          } else if (error.status === 403) {
            this.errorMessage = 'Unauthorized Access !!!';
          } else {
            this.errorMessage = 'Internal Server Error, Please Try Again Later';
          }
        });
  }

}
