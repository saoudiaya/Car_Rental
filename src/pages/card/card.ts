import { Component} from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { PersonPage } from '../person/person';
import { Car } from '../../Entities/Car';
import { CarService } from '../../services/CarService';
import { CartService } from '../../services/CartService';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  id:number;
  cars: Car[] = [];
  cartItems: Car[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private alertCtrl: AlertController, private carService: CarService,
              private cartService: CartService) {
                console.log(this.cartService.getCartItems());
    this.id = this.navParams.get('id');
    this.getcars().then(() => {
      // Find car object from cars array
      for (let i = 0; i < this.cars.length; i++) {
        if (this.cars[i].id == this.id) {
          this.cartService.addToCart(this.cars[i]); // Add to cart service
          break;
        }
      }
      this.cartItems=this.cartService.getCartItems();
    });
  }

  async getcars(){
    this.cars = await this.carService.getAllCars();
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
  goOrder() {
    let total = this.getTotalAmount();
    this.navCtrl.push(OrderPage, { total: total });
  }

  increase(item: any) {
    this.changeQty(1, item);
  }

  decrease(item: any) {
    if(item.quantity == 1) this.removeFromCart(item);
    else this.changeQty(-1, item);
  }

  async removeFromCart(item: any) {
    const alert = await this.alertCtrl.create({
      message: 'Are you sure you want to remove this item?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            // Remove the item from the cartItems array
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
            this.cartService.removeFromCart(item); // Remove from cart service
          },
        },
        {
          text: 'No',
        },
      ],
    });
    await alert.present();
  }

  changeQty(quantity: number, item: Car){
    const index = this.cartItems.indexOf(item);
    this.cartItems[index].quantity+=quantity;
    this.cartService.updateQuantity(this.cartItems[index],this.cartItems[index].quantity); 
  }
  

  getTotalAmount(){
    return (this.cartItems )
      .reduce((total, item) => total + item.quantity * (+item.price), 0);
  }
}
