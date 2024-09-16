import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, DoCheck, OnInit } from '@angular/core';
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
export class ChildComponent implements OnChanges, OnInit, DoCheck {
  @Input('book') book!: Book;
  @Input('cart') cart!: number;
  @Input('available') inStock!: boolean;
  @Input('notAvailable') outOfStock!: boolean;
  @Input('remainingStock') getRemainingStock!: number;
  @Output() readonly addToCartEvent: EventEmitter<Book> = new EventEmitter();
  @Output() readonly removeFromCartEvent: EventEmitter<Book> = new EventEmitter();

  private oldValue: number = 0;

  emitAddEvent(): void {
    this.addToCartEvent.emit(this.book);
  }

  emitRemoveEvent(): void {
    this.removeFromCartEvent.emit(this.book);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges: ", changes)
    console.log("ngOnChanges previousValue: ", changes['getRemainingStock'].previousValue);
    console.log("ngOnChanges currentValue: ", changes['getRemainingStock'].currentValue);
  }

  ngOnInit() {
    console.log("ngOnInit : ", this.getRemainingStock);
  }

  ngDoCheck() {
    console.log("ngDoCheck : (old value)", this.oldValue);
    console.log("ngDoCheck : (new value)", this.getRemainingStock);
    this.oldValue = this.getRemainingStock;
  }
}