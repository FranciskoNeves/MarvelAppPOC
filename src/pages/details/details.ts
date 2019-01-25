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
  comic: any = [];
  comicTitle:any;
  comicImage:any;
  comicDate:any;
  comicDescription:any;
  comicCharacters: any = []

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public comicsProvider: ComicsProvider) {

    this.id = this.navParams.data.id;
    this.comicsProvider.getComicbyId(this.id).subscribe( results =>{
      let item: any = results;
      this.comic = item.data.results[0];
      console.log(this.comic);
      this.comicTitle = this.comic.title;
      this.comicDate = this.comic.dates[0].date;
      this.comicImage = this.comic.thumbnail.path + "." + this.comic.thumbnail.extension;
      this.comicDescription = this.comic.description;
    })
    this.comicsProvider.getComicCharactersbyId(this.id).subscribe( results =>{
      let item: any = results;
      this.comicCharacters = item.data.results;
      console.log(this.comicCharacters);
    })
  }


}