import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { ComicsProvider } from '../../providers/comics-provider';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  comicsList: any = [];

  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public comicsProvider: ComicsProvider) {

    this.comicsProvider.getListOfComics().subscribe( results =>{
      let comics: any = results;
      this.comicsList = comics.data.results;
    })
  }

  onOpenMenu(){
    this.menuCtrl.open();
  }

  openDetail(id: any){
    this.navCtrl.push(DetailsPage, {id: id});
  }

  searchComic(value: any){
    this.comicsProvider.getListofComicsbyTitle(value).subscribe( results =>{
      let comics: any = results;
      this.comicsList = comics.data.results;
      console.log(this.comicsList);
    })

  }

}
