import { Component } from '@angular/core';
import { Book } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
})
export class AppComponent {
  cart: number = 0;
  readonly STOCK: number = 20;
  books: Book[] = [
    {
      title: 'HTML and CSS Book',
      imagePath: 'book.jpg'
    }
  ]

  inStock(): boolean {
    return this.cart < this.STOCK;
  }

  outOfStock(): boolean {
    return this.cart >= this.STOCK;
  }

  getRemainingStock(): number {
    return this.STOCK - this.cart;
  }

  addToCart(): void {
    this.cart++;
  }

  removeFromCart(): void {
    this.cart > 0 ? this.cart-- : null;
  }
}
