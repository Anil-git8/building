import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;
  router: any;

  ngOnInit(): void {
    const data = localStorage.getItem('cart');
    this.cartItems = data ? JSON.parse(data) : [];
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.calculateTotal();
  }
  goToStore() {
    this.router.navigate(['/store']);
  }
  makePayment() {
    if (!localStorage.getItem('isLoggedIn')) {
      alert('Please log in to proceed with the payment.');
      return;
    }
    if (this.cartItems.length > 0) {
      localStorage.setItem('paymentProduct', JSON.stringify(this.cartItems));
      this.router.navigate(['/payment']);
    } else {
      alert('Your cart is empty.');
    }
  }

  


  
}
