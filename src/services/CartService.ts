import { Injectable } from '@angular/core';
import { Car } from '../Entities/Car';

@Injectable()
export class CartService {
  cartItems: Car[] = [];

  constructor() {}

  addToCart(car: Car) {
    const index = this.cartItems.findIndex((item) => item.id === car.id);
    if (index !== -1) {
      this.cartItems[index].quantity += 1;
    } else {
      this.cartItems.push({ ...car, quantity: 1 });
    }
  }

  removeFromCart(car: Car) {
    const index = this.cartItems.findIndex((item) => item.id === car.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  updateQuantity(car: Car, quantity: number) {
    const index = this.cartItems.findIndex((item) => item.id === car.id);
    if (index !== -1) {
      this.cartItems[index].quantity = quantity;
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalAmount() {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity * (+item.price),
      0
    );
  }

  clearCart() {
    this.cartItems = [];
  }
}
