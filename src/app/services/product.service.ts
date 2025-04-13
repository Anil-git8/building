// // src/app/services/product.service.ts
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   getProducts() {
//     return [
//       { id: 1, name: 'BHAGAVAD GITA AS IT IS', description: 'The translator provides a blend of literal accuracy and religious insight on the "Bhagavad-Gita".', price:350, image: '/assets/images/gita.png'},
//       { id: 2, name: 'Radha krishna idol', description: 'Umi Brass Krishna Radha idol for Home Decor Temple Mandir', price: 8450, image: '/assets/images/radhakrishna.png' },
//       { id: 3, name: 'Tulsi Kanthi Mala', description: 'Tulsi Kanthi Mala Authentic Tulsi Kanthi Mala A beautiful and sacred prayer bead necklace made from the revered Tulsi wood.', price: 40, image: '/assets/images/kantimala.png' },
//       { id: 4, name: 'Gaura Nitai Chanting Bag with Japa Mala ', description: 'This Bag is Made of Very High Quality Cotton Cloth & has the image of Radha Krishna & Gour Nitai', price: 200, image: '/assets/images/chantting.png' },
//       { id: 5, name: 'Natural Gopi Chandan Tilak', description: 'This tilak has a cooling effect on the forehead and this can assist in concentration and meditation.Gopi Chandan Tilaka has been traditionally interpreted as a good luck charm ...', price: 150, image: '/assets/images/chandan.png' },
//       { id: 6, name: 'Krishna Story In Hindi', description: 'Lord Sri Krishna Story In Hindi, balaram and krishna childhood stories and leela Language', price:350, image: '/assets/images/bookkrishna.png' },
//       { id: 7, name: 'Science of Self-Realization', description: 'This collection of articles by Srila Prabhupada from Back to Godhead magazine covers knowledge of the soul and the practice of bhakti-yoga.', price: 250, image: '/assets/images/sor.png' },
//       { id: 8, name: 'Krishna Book - English', description: 'The Supreme Personality of Godhead (Krsna) (Hardcover) in English For millions upon millions of readers, the Vedic literature of India has been a treasure trove of delight and ...', price: 450, image: '/assets/images/krishnaEng.png' },
//       { id: 9, name: 'Perfect Questions & Perfect Answers- (English)', description: 'Bob Cohen, A Science Teacher In The Peace Corps, Began A Search For Spiritual Enlightenment That Took Him The Length And Breadth Of ...', price: 50, image: '/assets/images/gita.png' },
//       { id: 10, name: 'Beyond Birth & Death', description: 'This book presents startling evidence of the soul’s incredible journey after death, how the soul travels from body to body ...', price: 40, image: '/assets/images/beyondb.jpg' },
//       { id: 11, name: 'Vivo X80', description: 'Camera-centric phone', price: 54999, image: '/assets/images/iphone1.png' },
//       { id: 12, name: 'Motorola Edge 40', description: 'Sleek design', price: 29999, image: '/assets/images/iphone1.png' },
//       { id: 13, name: 'Nokia X30', description: 'Simple and strong', price: 27999, image: '/assets/images/iphone2.png' },
//       { id: 14, name: 'Infinix Zero 5G', description: '5G on a budget', price: 17999, image: '/assets/images/iphone1.png' },
//       { id: 15, name: 'iQOO Neo 7', description: 'Performance beast', price: 31999, image: '/assets/images/iphone2.png' }
//     ];
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private storageKey = 'products';
  private products: any[] = [];

  constructor() {
    const saved = localStorage.getItem(this.storageKey);
    this.products = saved ? JSON.parse(saved) : [];
  }

  getProducts(): any[] {
    return this.products;
  }

  addProduct(product: any): void {
    this.products.push(product);
    this.saveToStorage();
  }

  updateProducts(updatedProducts: any[]): void {
    this.products = updatedProducts;
    this.saveToStorage();
  }

  getProductsFromStorage(): any[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  getTotalPrice(): number {
    return this.products.reduce((total, product) => {
      return total + (product.price || 0);
    }, 0);
  }

  private saveToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.products));
  }
}
