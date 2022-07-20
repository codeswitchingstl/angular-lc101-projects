import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Look at these!';
  image1 = 'https://www.mediastorehouse.com/p/251/famous-bernina-express-red-train-alp-grum-station-19435473.jpg';
  image2 = 'https://media.cntraveller.com/photos/611be88f042ccafe9a9adbb9/16:9/w_2580,c_limit/paris-cntraveller-1march16-getty_b.jpg';
  image3 = 'https://www.noel.alsace/wp-content/uploads/2019/06/thio-noel-colmar-aaa-nis-for-1600x900.jpg';

  constructor() { }

  ngOnInit() {
  }

}