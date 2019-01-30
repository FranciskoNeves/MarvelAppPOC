import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ComicsProvider } from '../../providers/comics-provider';
import { UtilsProvider } from '../../providers/utils-provider';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  id: any;
  comicDetail: any = [];
  inFavorites: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public comicsProvider: ComicsProvider,
              public utilsProvider: UtilsProvider) {

    this.id = this.navParams.data.id;
    this.comicDetail = this.navParams.data.comicDetail;
    this.inFavorites = this.navParams.data.inFavorites;
  }

  addFavorite(){
    this.comicDetail.digitalId = 1;
    this.utilsProvider.createFavorite(this.comicDetail);
}

  removeFavorite(){
    this.comicDetail.digitalId = 0;
    this.utilsProvider.deleteFavorite(this.comicDetail);
}

}