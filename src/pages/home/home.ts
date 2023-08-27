import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { CardPage } from '../card/card';
import { PersonPage } from '../person/person';
import { DetailsPage } from '../details/details';
import { CarService } from '../../services/CarService';
import { Car } from '../../Entities/Car';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cars1: Car[] = [];
  cars: Car[] = [];
  packages: Car[] = [];

  constructor(public navCtrl: NavController, private carService : CarService) {

    this.getcars();

  }
  async getcars(){
    this.cars1 = await this.carService.getAllCars();
    console.log(this.cars1);
    for (let i = 0; i < this.cars1.length; i++) {
      if (this.cars1[i].price < 52) {
          this.cars.push(this.cars1[i]);
        }else{
          this.packages.push(this.cars1[i]);
        }
    }

  }

  goHome(){
    this.navCtrl.push(HomePage).then( );
  }

  goSearch(){
    this.navCtrl.push(SearchPage).then();
  }
  goCard(){
    this.navCtrl.push(CardPage).then( );
  }


  goPerson(){
    this.navCtrl.push(PersonPage).then( );
  }


  goToDetail(id: number){
    this.navCtrl.push(DetailsPage, {id: id});
  }


}
