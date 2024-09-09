import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  styles: [
    `
    h2 {
      color: blue;
    }
    `
  ]
})
export class ChildComponent {
    @Input('book') book!: Book;
    @Input('cart') cart!: number;
    @Input('available') inStock!: boolean;
    @Input('notAvailable') outOfStock!: boolean;
    @Input('remainingStock') getRemainingStock!: number;
    @Output() readonly addToCartEvent: EventEmitter<Book> = new EventEmitter();
    @Output() readonly removeFromCartEvent: EventEmitter<Book> = new EventEmitter();

    emitAddEvent(): void {
      this.addToCartEvent.emit(this.book);
    }

    emitRemoveEvent(): void {
      this.removeFromCartEvent.emit(this.book);
    }
}