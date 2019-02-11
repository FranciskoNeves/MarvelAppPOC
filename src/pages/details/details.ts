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
  email: any;
  charactersList: any;
  alreadyInFavorites: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public comicsProvider: ComicsProvider,
              public utilsProvider: UtilsProvider) {

    this.id = this.navParams.data.id;
    this.comicDetail = this.navParams.data.comicDetail;
    this.charactersList = this.navParams.data.characters;
    this.inFavorites = this.navParams.data.inFavorites;
    this.alreadyInFavorites = this.navParams.data.alreadyInFavorites;
    this.email = this.navParams.data.email;
  }

  addFavorite(){
    this.alreadyInFavorites = true;
    this.utilsProvider.createFavorite(this.comicDetail, this.email);
}

  removeFavorite(){
    this.alreadyInFavorites = false;
    this.utilsProvider.deleteFavorite(this.comicDetail);
}

}