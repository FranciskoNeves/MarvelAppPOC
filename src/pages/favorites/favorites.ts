import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils-provider';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  comicsList: any = [];
  email:any;

  constructor(public navCtrl: NavController,
              public utilsProvider: UtilsProvider,
              public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.email = this.navParams.data;
    this.utilsProvider.getAllFavoritesbyLogin(this.email)
      .then( response => {
        this.comicsList = response;
      })
      .catch(error=>{
        console.log(error);
      })
  }

  openDetail(id: any, index: any){
    let charactersList = [];
    charactersList.push(this.comicsList[index].characters.split(","));
    this.navCtrl.push(DetailsPage, {id: id, comicDetail: this.comicsList[index], characters: charactersList[0], inFavorites: true, alreadyInFavorites: true});
  }
}