import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id?: string; // Changed to string since Firebase uses string keys
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-firebase',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './firebase.component.html',
  styleUrl: './firebase.component.css'
})
export class FirebaseComponent implements OnInit {
  products: Product[] = [];
  isLoading = false;
  error: string | null = null;
  product: Product = this.getEmptyProduct();
  selectedProduct: Product | null = null;
  viewMode: 'grid' | 'list' = 'grid';

  private apiUrl = 'https://pats-7902a-default-rtdb.firebaseio.com/users';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchProducts();
  }

  private getEmptyProduct(): Product {
    return {
      name: '',
      price: '',
      description: '',
      image: '',
      category: ''
    };
  }

  fetchProducts() {
    this.isLoading = true;
    this.http.get<{ [key: string]: Product }>(`${this.apiUrl}.json`)
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response) {
            this.products = Object.keys(response).map(key => ({
              id: key,
              ...response[key]
            }));
          } else {
            this.products = [];
          }
        },
        error: (error) => {
          this.isLoading = false;
          this.error = 'Error fetching products: ' + error.message;
        }
      });
  }

  onSubmit() {
    if (!this.validateProduct(this.product)) {
      return;
    }

    this.isLoading = true;
    if (this.product.id) {
      // Update existing product
      const productId = this.product.id;
      const productData = { ...this.product };
      delete productData.id; // Remove id before sending to Firebase
      
      this.http.patch(`${this.apiUrl}/${productId}.json`, productData)
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.fetchProducts();
            this.resetForm();
            alert('Product updated successfully');
          },
          error: (error) => {
            this.isLoading = false;
            alert('Error updating product: ' + error.message);
          }
        });
    } else {
      // Add new product
      this.http.post(`${this.apiUrl}.json`, this.product)
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.fetchProducts();
            this.resetForm();
            alert('Product added successfully');
          },
          error: (error) => {
            this.isLoading = false;
            alert('Error adding product: ' + error.message);
          }
        });
    }
  }

  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.isLoading = true;
      this.http.delete(`${this.apiUrl}/${id}.json`)
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.fetchProducts();
            alert('Product deleted successfully');
          },
          error: (error) => {
            this.isLoading = false;
            alert('Error deleting product: ' + error.message);
          }
        });
    }
  }

  setSelectedProduct(product: Product) {
    this.selectedProduct = { ...product };
  }

  editProduct(product: Product) {
    this.product = { ...product };
    // navigate to the form
    

  }

  resetForm() {
    this.product = this.getEmptyProduct();
  }

  private validateProduct(product: Product): boolean {
    if (!product.name || !product.price || !product.description || 
        !product.image || !product.category) {
      alert('Please fill all fields');
      return false;
    }
    return true;
  }
}