import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

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
