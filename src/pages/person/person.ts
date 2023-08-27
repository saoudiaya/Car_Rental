import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import {LoginPage} from "../login/login";

/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

  goLogin(){
    this.navCtrl.push(LoginPage);

  }
  goHome(){
    this.navCtrl.push(HomePage);
  }

  goSearch(){
    this.navCtrl.push(SearchPage);
  }
  goCard(){
    this.navCtrl.push(CardPage);
  }


  goPerson(){
    this.navCtrl.push(PersonPage);
  }

}
