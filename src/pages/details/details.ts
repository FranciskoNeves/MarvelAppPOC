import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ComicsProvider } from '../../providers/comics-provider';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  id: any;
  comicDetail: any = [];
  comicCharacters: any = [];
  comicDate:any;
  comicImage:any;
  /* comicDetail: {
    id: any;
    title:any;
    image:any;
    date:any;
    description:any;
    characters: any[];
  }; */

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public comicsProvider: ComicsProvider) {

    this.id = this.navParams.data.id;
    this.comicsProvider.getComicbyId(this.id).subscribe( results =>{
      let item: any = results;
      this.comicDetail = item.data.results[0];
      this.comicCharacters = this.comicDetail.characters.items;
      this.comicDate = this.comicDetail.dates[0].date;
      this.comicImage = this.comicDetail.thumbnail.path + "." + this.comicDetail.thumbnail.extension;
      //this.setComicDetail(comic.id, comic.title, comic.thumbnail.path + "." + comic.thumbnail.extension, comic.dates[0].date, comic.description, comic.characters.items);
      //this.comicDetail = {id: comic.id, title: comic.title, image: comic.thumbnail.path + "." + comic.thumbnail.extension, date: comic.dates[0].date, description: comic.description, characters: comic.characters.items};
      /* this.comicsProvider.getComicCharactersbyId(this.id).subscribe( results =>{
        let item2: any = results; */
        //this.setComicDetail(comic.title, comic.thumbnail.path + "." + comic.thumbnail.extension, comic.dates[0].date, comic.description, comic.characters.items);
        /* this.comicDetail.characters = item2.data.results; */
      /* }) */
      /* this.comicDetail.date = comic.dates[0].date;
      this.comicDetail.image = comic.thumbnail.path + "." + comic.thumbnail.extension;
      this.comicDetail.description = comic.description; */
      /* }) */
    })
  }

 /*  setComicDetail(id: any, title: any, image: any, date: any, description: any, characters: any){
    this.comicDetail = {id, title, image, date, description, characters};
  } */


}