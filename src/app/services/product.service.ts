// src/app/services/product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return [
      { id: 1, name: 'iPhone 14', description: 'Latest Apple iPhone', price: 79900, image: '/assets/images/iphone1.png' },
      { id: 2, name: 'Samsung Galaxy S23', description: 'High-end Android phone', price: 74900, image: '/assets/images/iphone1.png' },
      { id: 3, name: 'iPhone 13', description: 'Previous-gen iPhone', price: 69900, image: '/assets/images/iphone2.png' },
      { id: 4, name: 'Samsung Galaxy S24', description: 'Latest Android flagship', price: 84900, image: '/assets/images/iphone1.png' },
      { id: 5, name: 'OnePlus 11', description: 'Flagship killer phone', price: 59900, image: '/assets/images/iphone2.png' },
      { id: 6, name: 'Google Pixel 7', description: 'Pure Android with top camera', price: 62900, image: '/assets/images/iphone1.png' },
      { id: 7, name: 'iPhone SE', description: 'Affordable iPhone option', price: 43900, image: '/assets/images/iphone2.png' },
      { id: 8, name: 'Redmi Note 12', description: 'Budget Android phone', price: 14999, image: '/assets/images/iphone1.png' },
      { id: 9, name: 'Realme GT Neo 3', description: 'Gaming phone', price: 34999, image: '/assets/images/iphone1.png' },
      { id: 10, name: 'Asus ROG Phone 6', description: 'Gaming-focused hardware', price: 69999, image: '/assets/images/iphone2.png' },
      { id: 11, name: 'Vivo X80', description: 'Camera-centric phone', price: 54999, image: '/assets/images/iphone1.png' },
      { id: 12, name: 'Motorola Edge 40', description: 'Sleek design', price: 29999, image: '/assets/images/iphone1.png' },
      { id: 13, name: 'Nokia X30', description: 'Simple and strong', price: 27999, image: '/assets/images/iphone2.png' },
      { id: 14, name: 'Infinix Zero 5G', description: '5G on a budget', price: 17999, image: '/assets/images/iphone1.png' },
      { id: 15, name: 'iQOO Neo 7', description: 'Performance beast', price: 31999, image: '/assets/images/iphone2.png' }
    ];
  }
}
