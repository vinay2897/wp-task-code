import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-store-item',
  templateUrl: './content-store-item.component.html',
  styleUrls: ['./content-store-item.component.css']
})
export class ContentStoreItemComponent implements OnInit {


  @Input() id;
  @Input() image;
  @Input() title;
  @Input() price;
  @Input() content;

  constructor() { }

  ngOnInit() {
  }

}
