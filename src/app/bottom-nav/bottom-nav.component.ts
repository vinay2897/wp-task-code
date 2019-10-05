import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {

  selected = 1;

  selectedClass = {
    'selected': true
  }

  nav_list = [
    {
      id: 1,
      name: "content store",
      icon: "apps",
      link: "/home"
    },
    {
      id: 2,
      name: "section-1",
      icon: "search",
      link: "/nav-2"
    },
    {
      id: 3,
      name: "section-2",
      icon: "storefront",
      link: "/nav-3"
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

  select(id){
    this.selected = id;
  }

}
