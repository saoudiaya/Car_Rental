import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {CarService} from "../../services/CarService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../Entities/Car";


@IonicPage()
@Component({
  selector: 'page-update-car',
  templateUrl: 'update-car.html',
})
export class UpdateCarPage  {
  cars: Car[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public carService: CarService) {
    this.loadCars();
  }

  loadCars() {
    this.carService.getAllCars().then(cars => {
      this.cars = cars;
    });
  }

  updateCar(car: Car) {
    let prompt = this.alertCtrl.create({
      title: 'Update Car',
      cssClass: 'scrollable-prompt',
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            let updatedCar: Car = {
              id: car.id,
              name: data.name,
              date: data.date,
              price: parseInt(data.price),
              categorie: data.categorie,
              boite: car.boite,
              clim: car.clim,
              nbplace: parseInt(data.nbplace),
              nbporte: parseInt(data.nbporte),
              capacitebg: parseInt(data.capacitebg),
              age: parseInt(data.age),
              permis: parseInt(data.permis),
              image: data.image,
              bg: car.bg,
              description: data.description,
              quantity: parseInt(data.quantity)
            };
            this.carService.updateCar(updatedCar).then(() => {
              this.loadCars();
            });
          }
        }
      ],
      inputs: [
        {
          name: 'name',
          value: car.name ? car.name : ''
        },
        {
          name: 'date',
          value: car.date ? car.date : ''
        },
        {
          name: 'price',
          value: car.price ? car.price.toString() : ''
        },
        {
          name: 'categorie',
          value: car.categorie ? car.categorie : ''
        },
        {
          name: 'nbplace',
          value: car.nbplace ? car.nbplace.toString() : ''
        },
        {
          name: 'nbporte',
          value: car.nbporte ? car.nbporte.toString() : ''
        },
        {
          name: 'capacitebg',
          value: car.capacitebg ? car.capacitebg.toString() : ''
        },
        {
          name: 'age',
          value: car.age ? car.age.toString() : ''
        },
        {
          name: 'permis',
          value: car.permis ? car.permis.toString() : ''
        },
        {
          name: 'image',
          value: car.image ? car.image : ''
        },
        {
          name: 'description',
          value: car.description ? car.description : ''
        },
        {
          name: 'quantity',
          value: car.quantity ? car.quantity.toString() : ''
        }
      ],


    });
    prompt.present();

  }

}
