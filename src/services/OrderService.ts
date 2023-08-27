import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import { Order } from '../Entities/Order';

@Injectable()
export class OrderService {
  constructor(private storage: Storage) {

  }

  async addOrder(order: Order) {
    let orders = await this.getAllOrders();
    let index = orders.findIndex((u: Order) => u.id === order.id);
    if (index === -1) {
      orders.push(order);
      await this.storage.set('orders', JSON.stringify(orders));
    }
  }


  async getAllOrders() {
    let orders = await this.storage.get('orders');
    if (!orders) {
      return [];
    }
    return JSON.parse(orders);
  }
}