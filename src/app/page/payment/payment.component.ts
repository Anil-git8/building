import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: false,
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  product: any;

  ngOnInit() {
    const data = localStorage.getItem('paymentProduct');
    this.product = data ? JSON.parse(data) : null;
  }
  pay() {
    alert('Payment Successful! Thank you for your purchase.');
    localStorage.removeItem('paymentProduct');
    // Optional: Clear cart or redirect
  }
  cancel() {
    alert('Payment Cancelled!');
    localStorage.removeItem('paymentProduct');
    // Optional: Redirect or clear cart
}
}