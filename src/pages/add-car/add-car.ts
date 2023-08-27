import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Car} from "../../Entities/Car";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../services/CarService";

/**
 * Generated class for the AddCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-car',
  templateUrl: 'add-car.html',
})
export class AddCarPage {
  errorMessage = ""
  carForm: FormGroup;
  showError = false;

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService, public navCtrl: NavController
  ) {
    this.carForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      date: ['', Validators.required],
      price: ['', Validators.required],
      categorie: ['', Validators.required],
      boite: ['', Validators.required],
      clim: ['', Validators.required],
      nbplace: ['', Validators.required],
      nbporte: ['', Validators.required],
      capacitebg: ['', Validators.required],
      age: ['', Validators.required],
      permis: ['', Validators.required],
      image: ['', Validators.required],
      bg: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

  async onSubmit() {
    try {
    const car: Car = {
      id: this.carForm.get('id').value,
      name: this.carForm.get('name').value,
      date: this.carForm.get('date').value,
      price: this.carForm.get('price').value,
      categorie: this.carForm.get('categorie').value,
      boite: this.carForm.get('boite').value,
      clim: this.carForm.get('clim').value,
      nbplace: this.carForm.get('nbplace').value,
      nbporte: this.carForm.get('nbporte').value,
      capacitebg: this.carForm.get('capacitebg').value,
      age: this.carForm.get('age').value,
      permis: this.carForm.get('permis').value,
      image: this.carForm.get('image').value,
      bg: this.carForm.get('bg').value,
      description: this.carForm.get('description').value,
      quantity: this.carForm.get('quantity').value,
    };

      await this.carService.addCar(car);
      this.carForm.reset()
    } catch (error) {
      this.showError = true;
      this.errorMessage = error.message;
    }

  }

}
