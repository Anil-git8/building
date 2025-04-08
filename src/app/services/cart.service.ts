import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private items: any[] = [];
  checkoutProduct: any;

  addItem(item: any) { this.items.push(item); }
  getItems() { return this.items; }
  setCheckoutProduct(product: any) { this.checkoutProduct = product; }
}

