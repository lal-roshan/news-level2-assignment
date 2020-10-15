import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  /// The api key for fetching trending news
  api_key: string = `ae9d31dc385f49428d73cc27ac4dea15`;

  /// The url for trending news server
  trending_news_api_url:string = `https://newsapi.org/v2/top-headlines?country=in&apikey=${this.api_key}&page=1`;
  
  /// url for bookmarked news server
  news_api_url:string = `http://localhost:3000/api/v1/news`

  //inject the required dependencies in constructor
  constructor(private httpClient: HttpClient,
              private authService: AuthenticationService) { }

  /// Method for fetching the trending news
  /// <returns>The response from the news API</returns>
  getTrendingNews(){
    return this.httpClient.get(this.trending_news_api_url);
  }
  
  /// Method for adding the news to read later 
  /// <param name="newsItem">Represents the news to be added to read later</param>
  /// <returns>Returns the News item added</returns>
  public addNews(newsItem: News): Observable<News> {
    return this.httpClient.post<News>(this.news_api_url, newsItem,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getBearerToken()}`)
    });
  }

  /// Method for fetching all bookmarked news
  /// <returns> Returns the array of bookmarked news </return>
  getBookmarkedNews(): Observable<Array<News>> {
    return this.httpClient.get<Array<News>>(this.news_api_url,{
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authService.getBearerToken()}`)
    });
  }

}
