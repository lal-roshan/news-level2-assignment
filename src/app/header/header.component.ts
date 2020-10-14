import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { AuthenticationService } from '../services/authentication.service';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /// Property holding the title name
  @Input() public title: string;

  ///Property representing the count of favorites items
  @Input() public favoriteCount: number;

  // @Input() public isUserLoggedIn: boolean;

  // @Output() isUserLoggedInChange = new EventEmitter();

  // isUserLoggedIn: boolean;

  constructor(private routeService: RouteService,
              private authService: AuthenticationService) { }

  ngOnInit() {    
    let paths = window.location.pathname.split('/');
    let header = document.getElementById('header');
    let navItems = header.getElementsByClassName('nav-item');
    let navItemsDOM = Array.from(navItems);
    navItemsDOM.forEach(item => {
      item.addEventListener("click", this.menuItemClick);
      if (item.innerHTML.toLowerCase().indexOf(paths[paths.length - 1]) > -1){
        item.classList.add('active');
      }
    });
  }

  logout(){
    // this.isUserLoggedIn = false;
    // this.isUserLoggedInChange.emit(this.isUserLoggedIn.toString());
    let header = document.getElementById('header');
    let navItems = header.getElementsByClassName('nav-item');
    let navItemsDOM = Array.from(navItems);
    navItemsDOM.forEach(item => item.classList.remove('active'));
    console.log('logout');
    this.authService.removeBearerToken();
    // this.isUserLoggedIn = false;
    this.routeService.toLogin();
  }

  menuItemClick(event){
    console.log('click');
    let header = document.getElementById('header');
    let navItems = header.getElementsByClassName('nav-item');
    let navItemsDOM = Array.from(navItems);
    navItemsDOM.forEach(item => item.classList.remove('active'));
    let parent = event.target.parentElement;
    while(parent != undefined && parent.nodeName != 'LI'){
      parent = parent.parentElement;
    }
    if(parent != undefined){
      parent.classList.add('active');
    }
  }

  isUserLoggedIn():boolean{
    let loggedIn = false;
    this.authService.isUserAuthenticated(this.authService.getBearerToken())
      .then(data => {
        loggedIn = data;
      })
      .catch(err => {
        console.log(err);
        loggedIn = false;
      });
    return loggedIn;
  }

}
