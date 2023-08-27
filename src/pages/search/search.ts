import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CardPage } from '../card/card';
import { PersonPage } from '../person/person';
import { DetailsPage } from '../details/details';
import { Car } from '../../Entities/Car';
import { CarService } from '../../services/CarService';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  cars1: Car[] = [];
  cars: Car[] = [];
  favorites: Car[] = [];

   constructor(public navCtrl: NavController, private carService : CarService) {

      this.getcars();

  }
  async getcars(){
    this.cars1 = await this.carService.getAllCars();
    console.log(this.cars1);
    for (let i = 0; i < this.cars1.length; i++) {
      if (this.cars1[i].price != 180) {
          this.cars.push(this.cars1[i]);
        }else{
          this.favorites.push(this.cars1[i]);
        }
    }

  }

  filterTerm: string;
  
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

  goToDetail(id: number){
    this.navCtrl.push(DetailsPage, {id: id});
  }

}