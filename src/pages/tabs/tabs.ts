import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FavoritesPage } from '../favorites/favorites';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritesPage;

  tab1Params: any
  tab2Params: any;

  constructor(public navParams: NavParams) {
      this.tab1Params = navParams.get('email');
      this.tab2Params = navParams.get('email');
  }
}
