import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { UtilsProvider } from '../../providers/utils-provider';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public utilsProvider: UtilsProvider,
              public toastCtrl: ToastController,
              public storage: Storage) {
  }

  onLogin(form: NgForm){
    this.utilsProvider.findLogin(form)
      .then( response => {
        if(response.length == 0){
          let toast = this.toastCtrl.create({message: 'Login Invalid!', duration: 2000})
          toast.present();
        }
        else{
          this.navCtrl.push(TabsPage, {email: response[0].email});
          this.storage.set("isLoggedIn", true);
          this.storage.set("email", response[0].email);
        }
      })
      .catch( error =>{
        console.error(error);
      });
  }

}