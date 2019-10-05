import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-content-store',
  templateUrl: './content-store.component.html',
  styleUrls: ['./content-store.component.css']
})
export class ContentStoreComponent implements OnInit {

  data:any;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }

}
