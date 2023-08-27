import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import {UserService} from "../../services/UserService";
import {User} from "../../Entities/User";
import { CarService } from '../../services/CarService';
import { Car } from '../../Entities/Car';
import {AdminLoginPage} from "../admin-login/admin-login";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private userService:UserService,public navCtrl: NavController, public navParams: NavParams) {
  this.userService.getAllUsers().then((r)=> {
    console.log(r)});
  }
  showError = false;
  email: string;
  password: string;
  async Login() {
    try{
    let user:User = await this.userService.getUserByEmail(this.email);
    if(user.password === this.password)
      this.goHome();
    }catch(e) {
        this.showError = true;
    }

  }
  /*goAdmin(){
    this.navCtrl.push(AdminLoginPage);
  }*/

  goSignUp(){
    this.navCtrl.push(SignupPage);
  }
  goAdmin() {
    this.navCtrl.push(AdminLoginPage)
  }
  goHome(){
    this.navCtrl.push(HomePage);
  }

}
