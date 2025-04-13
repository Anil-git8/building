import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

declare var bootstrap: any;

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  products: any[] = [];
  editableProduct: any = {};
  editIndex = -1;
  router: any;
  searchTerm: string = '';

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  openEditModal(index: number) {
    this.editIndex = index;
    this.editableProduct = { ...this.products[index] };
    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  }

  saveEdit() {
    this.products[this.editIndex] = this.editableProduct;
    this.productService.updateProducts(this.products);
    bootstrap.Modal.getInstance(document.getElementById('editModal'))?.hide();
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
    this.productService.updateProducts(this.products);
  }


  onEditImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.editableProduct.image = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  logout() {
    localStorage.removeItem('isOwnerLoggedIn');
    this.router.navigate(['/store']);
  }

  filteredProducts() {
    if (!this.searchTerm) {
      return this.products;
    }
  
    const term = this.searchTerm.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term)
    );
  }
  
}
