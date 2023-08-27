import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {CarService} from "../../services/CarService";
import {Car} from "../../Entities/Car";

/**
 * Generated class for the RemoveCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remove-car',
  templateUrl: 'remove-car.html',
})
export class RemoveCarPage {


  public cars: Car[];
  goBack() {
    this.navCtrl.pop();
  }

  constructor(private carService: CarService, public alertCtrl: AlertController,public navCtrl: NavController) {}

  ionViewDidEnter() {
    this.loadCars();
  }

  async loadCars() {
    try {
      this.cars = await this.carService.getAllCars();
    } catch (error) {
      console.error(error);
    }
  }

  async deleteCar(car: Car) {
    let confirmAlert = this.alertCtrl.create({
      title: 'Confirm Deletion',
      message: `Are you sure you want to delete ${car.name}?`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.carService.deleteCar(car).then(() => {
              this.loadCars(); // Refresh car list after delete
            }).catch((error) => {
              console.error(error);
            });
          }
        }
      ]
    });
    confirmAlert.present();
  }


}
