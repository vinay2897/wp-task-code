import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wp-software-task';

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth
    console.log(this.currentWindowWidth)
  }

  public currentWindowWidth: number;

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
    console.log(this.currentWindowWidth)
  }
}
