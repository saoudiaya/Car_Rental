import { Component } from '@angular/core';
import {  AlertController, NavController, NavParams } from 'ionic-angular';
import { CartService } from '../../services/CartService';
import { Order } from '../../Entities/Order';
import { OrderService } from '../../services/OrderService';
import * as moment from 'moment';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  total1: number = 0;

  order: Order = {
    id: Math.floor(Math.random() * 1000),
    cartItems:this.cartService.getCartItems(),
    starttime: new Date(),
    endtime: new Date(),
    placepickup: "",
    total:this.total1,
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartService : CartService,private orderService: OrderService,private alertCtrl: AlertController) {
    this.total1 = navParams.get('total');
    console.log(this.total1);
    console.log(this.cartService.getCartItems());
  }

  goBack() {
    this.navCtrl.pop();
  }
 
  calculateTotal() {
    
    const start = moment(this.order.starttime);
    const end = moment(this.order.endtime);
    const diffInDays = end.diff(start,'days');
    this.order.total = this.total1* diffInDays;
  }

  async orders() {
    this.calculateTotal();
    this.orderService.addOrder(this.order);
    console.log(this.orderService.getAllOrders());
    const alert = await this.alertCtrl.create({
      message: 'Order Successfully',
    });
    await alert.present();
  }

}