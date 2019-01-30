import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils-provider';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  comicsList: any = [];

  constructor(public navCtrl: NavController,
              public utilsProvider: UtilsProvider) {
  }

  ionViewWillEnter(){
    this.utilsProvider.getAllFavorites()
      .then( response => {
        console.log(response);
        this.comicsList = response;
      })
  }

  openDetail(id: any, index: any){
    console.log(id, index);
    this.navCtrl.push(DetailsPage, {id: id, comicDetail: this.comicsList[index], inFavorites: true});
  }
}