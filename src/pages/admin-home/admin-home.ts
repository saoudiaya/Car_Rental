import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddCarPage} from "../add-car/add-car";
import {ShowCarsPage} from "../show-cars/show-cars";
import {RemoveCarPage} from "../remove-car/remove-car";
import {UpdateCarPage} from "../update-car/update-car";
import {UsersStatsPage} from "../users-stats/users-stats";
import {CarChartPage} from "../car-chart/car-chart";

/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addCar() {
     this.navCtrl.push(AddCarPage);
  }

  showCars() {
     this.navCtrl.push(ShowCarsPage);
  }

  updateCar() {
     this.navCtrl.push(UpdateCarPage);
  }

  deleteCar() {
     this.navCtrl.push(RemoveCarPage);
  }

  showUsers() {
    this.navCtrl.push(UsersStatsPage)
  }

  showCarsStats() {
    this.navCtrl.push(CarChartPage)
  }
}
