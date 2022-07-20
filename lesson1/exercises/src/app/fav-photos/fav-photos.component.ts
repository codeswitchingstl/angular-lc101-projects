import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Look at me!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://media.cntraveller.com/photos/611be88f042ccafe9a9adbb9/16:9/w_2580,c_limit/paris-cntraveller-1march16-getty_b.jpg';
  image3 = 'https://www.noel.alsace/wp-content/uploads/2019/06/thio-noel-colmar-aaa-nis-for-1600x900.jpg';

  constructor() { }

  ngOnInit() {
  }

}