import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CarService} from "../../services/CarService";
import {Car} from "../../Entities/Car";

/**
 * Generated class for the ShowCarsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-cars',
  templateUrl: 'show-cars.html',
})
export class ShowCarsPage {
  cars: Car[];
  goBack() {
    this.navCtrl.pop();
  }
  constructor(private carService: CarService,public navCtrl: NavController) {}

  async ionViewWillEnter() {
    this.cars = await this.carService.getAllCars();
  }

}
