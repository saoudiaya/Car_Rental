import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserService} from "../../services/UserService";
import {HomePage} from "../home/home";
import {AdminHomePage} from "../admin-home/admin-home";

/**
 * Generated class for the AdminLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-login',
  templateUrl: 'admin-login.html',
})
export class AdminLoginPage {
mail :string;
password:string;
showError = false;
  constructor(public userService:UserService,public navCtrl: NavController, public navParams: NavParams) {
  }
  login() {
    this.userService.getUserByEmail(this.mail).then((admin)=> {

      if (this.password != admin.password) this.showError = true;
      else {
        this.navCtrl.push(AdminHomePage);
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminLoginPage');
  }

}
