import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';



declare var bootstrap: any;

@Component({
  selector: 'app-owner-dashboard',
  standalone: false,
  templateUrl: './owner-dashboard.component.html',
  styleUrl: './owner-dashboard.component.css'
})
export class OwnerDashboardComponent implements OnInit {
@ViewChild('fileInput') fileInput: any;
//product = { name: '', description: '', price: 0, quantity: 0, image: '' };
product = {
  name: '',
  description: '',
  price: 0,
  quantity: 0,
  category: '', // added category
  image: ''
};

allProducts: any[] = [];
uploadedProducts: any[] = [];
selectedImage: string = '';




constructor(private router: Router, private productService: ProductService) {}

ngOnInit() {
  this.loadProducts();
}

uploadProduct(form: NgForm) {
  if (!form.valid || !this.selectedImage) {
    alert('Please fill all fields and upload an image.');
    return;
  }
  const formData = new FormData();
  formData.append('name', this.product.name);
  formData.append('description', this.product.description);
  formData.append('price', this.product.price.toString());
formData.append('quantity', this.product.quantity.toString());
  formData.append('category', this.product.category); // ✅ Add category
  formData.append('image', this.product.image);


  // this.productService.addProduct(formData){
  //   next: (res: any) => {
  //     this.toastMessage = '✅ Product uploaded successfully!';
  //     this.showToast();
  //     form.resetForm();
  //   },
  //   error: () => {
  //     this.toastMessage = '❌ Failed to upload product.';
  //     this.showToast();
  //   }
  // });
  
  const newProduct = {
    name: this.product.name.trim(),
    description: this.product.description.trim(),
    price: this.product.price,
    quantity: this.product.quantity,
    category: this.product.category.trim(), // added category
    image: this.selectedImage
  };
  
  Swal.fire({
    icon: 'success',
    title: 'Product Added!',
    text: `✅ ${newProduct.name} has been added to Inventory.`,
    showConfirmButton: false,
    timer: 2500
  });

  if (!newProduct.name || !newProduct.description || newProduct.price <= 0 || newProduct.quantity <= 0 || !newProduct.category) {
    alert('Please provide valid product details.');
    return;
  }

  this.productService.addProduct(newProduct);
  this.uploadedProducts = this.productService.getProducts();

  // Reset form and image input
  form.resetForm();
  this.fileInput.nativeElement.value = '';
  this.selectedImage = '';
  this.product = { name: '', description: '', price: 0, quantity: 0,category: '', image: '' };

  this.showToast(`✅ Added "${newProduct.name}" to Inventory`);
  
  //alert("Added: "+ newProduct.name + " to Inventory.");
}

onImageSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

loadProducts() {
  this.allProducts = JSON.parse(localStorage.getItem('products') || '[]');
}

deleteProduct(index: number) {
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  this.loadProducts();
}



toastMessage = '';

showToast(message: string) {
  this.toastMessage = message;
  const toastEl = document.querySelector('.toast') as HTMLElement;
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}




}






// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProductService } from '../../services/product.service';

// @Component({
//   selector: 'app-owner-dashboard',
//   standalone: false,
//   templateUrl: './owner-dashboard.component.html'
// })
// export class OwnerDashboardComponent implements OnInit {
//   product: any = { name: '', description: '', price: 0, image: '' };
//   uploadedProducts: any[] = [];

//   constructor(private router: Router, private productService: ProductService) {}

//   ngOnInit() {
//     const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
//     if (!isLoggedIn) {
//       this.router.navigate(['/owner-dashboard']);
//     }

//     this.uploadedProducts = this.productService.getProducts();
//   }

//   onImageSelected(event: any) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.product.image = reader.result;
//     };
//     reader.readAsDataURL(file);
//   }

//   uploadProduct() {
//     this.productService.addProduct({ ...this.product });
//     this.uploadedProducts = this.productService.getProducts();
//     this.product = { name: '', description: '', price: 0, image: '' };
//   }

//   logout() {
//     localStorage.removeItem('adminLoggedIn');
//     this.router.navigate(['/store']);
//   }
// }
