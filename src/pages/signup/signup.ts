import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {User} from "../../Entities/User";
import {UserService} from "../../services/UserService";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: User = {
    name: "",
    password: "",
    phoneNumber: null,
    email: "",
    adress: ""
  };

  constructor(public userService: UserService, public navCtrl: NavController, public navParams: NavParams) {
  }

  signUp() {
    this.userService.addUser(this.user);
    console.log(this.userService.getAllUsers())
    this.navCtrl.push(LoginPage);
  }

  goLogin() {

    this.navCtrl.push(LoginPage);
  }
}