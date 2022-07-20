import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.twitch.tv/aquacheese', 'https://www.tiktok.com/@aquacheeseplz', 'http://belarr.com/bakercat/'];

  constructor() { }

  ngOnInit() {
  }

}
