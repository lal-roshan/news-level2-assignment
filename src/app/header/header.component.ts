import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /// Property holding the title name
  @Input() public title: string;

  constructor() { }

  ngOnInit() {
  }

}
