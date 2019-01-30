import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SQLite } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';
import { UtilsProvider } from '../providers/utils-provider';
import { InitialPage } from '../pages/initial/initial';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  rootPage:any = TabsPage;
  isLoggedIn = false;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public menuCtrl: MenuController,
              private sqlite: SQLite,
              private utilsProvider: UtilsProvider,
              public storage: Storage,) {

    /* this.checkIfLoggedIn(); */

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.createDatabase();
    });
  }

  onCloseMenu() {
    this.menuCtrl.close();
  }

  onLogout(){
    this.storage.set("isLoggedIn", false);
    this.menuCtrl.close();
    this.nav.push(InitialPage);
  }

  private createDatabase() {
    this.sqlite.create({
        name: "data.db",
        location: "default"
      })
      .then(db => {
        this.utilsProvider.setDatabase(db);
        this.utilsProvider.createLoginTable();
        this.utilsProvider.createFavoritesTable();
      })
      .catch(error => {
      });
  }

  /* private checkIfLoggedIn(){
    this.storage.get("isLoggedIn")
      .then( data =>{
        if(data){
          this.nav.setRoot(HomePage);
        }
        else{
          this.nav.setRoot(InitialPage);
        }
      })
  } */
}
