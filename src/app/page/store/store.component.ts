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
  //cartHasItems: boolean = false;
  selectedCategory: string = '';
  categories = ['Puja Items', 'Books', 'Decor', 'Clothing','Prasadam'];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    const cart = localStorage.getItem('cart');
    this.cartHasItems = !!(cart && JSON.parse(cart).length); 
    
    const stored = localStorage.getItem('products');
  this.products = stored ? JSON.parse(stored) : [];
  }

  filteredProducts() {
    return this.products.filter(product => {
      const matchesSearch = this.searchTerm
        ? product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;
  
      const matchesCategory = this.selectedCategory
        ? product.category?.toLowerCase().trim() === this.selectedCategory.toLowerCase().trim()
        : true;
  
      return matchesSearch && matchesCategory;
    });
  }
  
  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  addToCart(product: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    const found = this.cart.find(item => item.id === product.id);
    if (!found) {
      this.cart.push({ ...product, quantity: 1 }); 


      let cart = JSON.parse(localStorage.getItem('cart') || '[]');

  const existingItem = cart.find((item: any) => item.name === product.name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });  // set quantity = 1 for new product
  }

  localStorage.setItem('cart', JSON.stringify(cart));
    }


    this.cartHasItems = true;
  }
  
  // goToProfile() {
  //   if (!localStorage.getItem('isLoggedIn')) {
  //     alert('Please log in to view your profile.');
  //     return;
  //   }
  //   alert("Profile page to be developed."); // Placeholder
  // }

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

goToOwnerLogin() {
  this.router.navigate(['/owner-login']);
}

}
