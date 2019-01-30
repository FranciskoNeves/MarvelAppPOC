import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ComicsProvider } from '../../providers/comics-provider';
import { DetailsPage } from '../details/details';
import { UtilsProvider } from '../../providers/utils-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  comicsList: any = [];

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public comicsProvider: ComicsProvider,
              public utilsProvider: UtilsProvider) {

    this.comicsProvider.getListOfComics().subscribe( results =>{
      let comics: any = results;
      this.comicsList = comics.data.results;
    })
  }

  onOpenMenu(){
    this.menuCtrl.open();
  }

  openDetail(id: any, index: any){
    this.navCtrl.push(DetailsPage, {id: id, comicDetail: this.comicsList[index]});
  }

  searchComic(value: any){
    this.comicsProvider.getListofComicsbyTitle(value).subscribe( results =>{
      let comics: any = results;
      this.comicsList = comics.data.results;
    })
  }

  /* addFavorite(index: any){
      this.utilsProvider.createFavorite(this.comicsList[index]);
  }

  removeFavorite(id: any){
      this.utilsProvider.deleteFavorite(id);
  } */
}
