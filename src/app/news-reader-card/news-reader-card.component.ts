import { Component, OnInit, Input } from '@angular/core'; 
import { News } from '../models/news';

@Component({
  selector: 'app-news-reader-card',
  templateUrl: './news-reader-card.component.html',
  styleUrls: ['./news-reader-card.component.css']
})
export class NewsReaderCardComponent implements OnInit {
  /// newsItem object representing the news details of the current card component
  @Input() public newsItem: News;

  /// Confirmation message representing the message on news addition to read later
  public confirmationMessage = '';

  /// Error message representing the message on error
  public errorMessage = '';

  constructor() { }

  ngOnInit() {
  }
}
