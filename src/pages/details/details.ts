import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardPage } from '../card/card';
import { Car } from '../../Entities/Car';
import { CarService } from '../../services/CarService';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage{


  id:number;
  car :Car;

constructor(public navCtrl: NavController, public navParams: NavParams, private carService: CarService) {
  this.id = this.navParams.get('id');
  this.carService.getCarById(this.id).then((res)=> {
    this.car = res;
    console.log(this.car)
  })
}


  ionViewDidLoad() {
    console.log('id value:', this.id);
  }
  goBack() {
    this.navCtrl.pop();
  }

  gocard(id: number){
    this.navCtrl.push(CardPage, {id: id});
  }

}
