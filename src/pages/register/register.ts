import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { UtilsProvider } from '../../providers/utils-provider';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public utilsProvider: UtilsProvider) {

  }

  onRegister(form: NgForm){
      this.utilsProvider.createLogin(form)
      this.navCtrl.push(LoginPage);
  }

}