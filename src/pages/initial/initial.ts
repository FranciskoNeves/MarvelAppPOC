import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html'
})
export class InitialPage {

  constructor(public navCtrl: NavController) {

  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  goToRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

}