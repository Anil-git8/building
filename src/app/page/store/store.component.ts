import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-store',
  standalone: false,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  cart: any[] = [];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    const cart = localStorage.getItem('cart');
    this.cartHasItems = !!(cart && JSON.parse(cart).length);  
  }
  
  addToCart(product: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    const found = this.cart.find(item => item.id === product.id);
    if (!found) {
      this.cart.push({ ...product, quantity: 1 });
    }


    this.cartHasItems = true;
  }
  
  goToProfile() {
    if (!localStorage.getItem('isLoggedIn')) {
      alert('Please log in to view your profile.');
      return;
    }
    alert("Profile page to be developed."); // Placeholder
  }

  buyNow(product: any) {
    if (!localStorage.getItem('isLoggedIn')) {
      alert('Please log in to proceed with the purchase.');
      return;
    }
    localStorage.setItem('paymentProduct', JSON.stringify(product));
    this.router.navigate(['/payment']);
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }

  // searchTerm: string = '';
cartHasItems: boolean = false;

logout() {
  localStorage.removeItem('isLoggedIn');
  // localStorage.removeItem('cart');
 alert('Logged out successfully!');
}


}
