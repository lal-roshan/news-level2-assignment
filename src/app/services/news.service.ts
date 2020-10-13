import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  

  api_key:string = `<your-api-key>`;

  trending_news_api_url:string = `https://newsapi.org/v2/top-headlines?country=in&apikey=${this.api_key}&page=1`;
  
  news_api_url:string = `http://localhost:3000/api/v1/news`

  //inject the required dependencies in constructor
  constructor() { }


  getTrendingNews(){
    //this function should make a get request to fetch trending news provided by newsapi.org
  }
  
  addNews(){
    //this function should make a post request to save news item to db.json in server
  }

  getBookmarkedNews() {
     //this function should make a get request to fetch bookmarked news item from db.json in server

  }

}
