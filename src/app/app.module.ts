import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FavoritesPage } from '../pages/favorites/favorites';
import { DetailsPage } from '../pages/details/details';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UtilsProvider } from '../providers/utils-provider';
import { InitialPage } from '../pages/initial/initial';
import { ComicsProvider } from '../providers/comics-provider';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavoritesPage,
    DetailsPage,
    LoginPage,
    RegisterPage,
    InitialPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritesPage,
    DetailsPage,
    LoginPage,
    RegisterPage,
    InitialPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    HttpClient,
    ComicsProvider,
    UtilsProvider
  ]
})
export class AppModule {}
