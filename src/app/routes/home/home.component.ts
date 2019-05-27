import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    public title: Title,
  ) {
    this.title.setTitle('Sousage Auction');
  }
}
