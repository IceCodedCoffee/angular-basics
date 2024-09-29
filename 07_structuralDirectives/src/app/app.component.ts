import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  articles: string[] = [
    // 'HTML book',
    // 'Angular book',
    // 'React book'
  ];

  hasArticles(): boolean {
    return (this.articles.length) ? true : false;
  }

  fruits: string[] = ['Apple', 'Banana', 'Orange'];
  chosenFruit: string = this.fruits[2];

  shoppingList: string[] = ['Apple', 'Banana', 'Orange'];

  message: string = '';

  onAddItem(value: string) {
    if (!this.shoppingList.includes(value)) {
      this.shoppingList.push(value);
    }
    else {
      this.message = value + " is already in the list!"
    }
  }

  onRemoveItem(item: string) {
    let indexToRemove: number = this.shoppingList.indexOf(item)

    this.shoppingList.splice(indexToRemove, 1);
  }

  products: any = null;

  onUpdate() {
    this.products = [
      { key: 1, title: 'HTML book' },
      { key: 2, title: 'Angular book' },
      { key: 3, title: 'React book' },
    ];
  }

  products2: any = null;

  onUpdate2() {
    this.products2 = [
      { key: 1, title: 'HTML book' },
      { key: 2, title: 'Angular book' },
      { key: 3, title: 'React book' },
    ];
    console.log("Data refreshed!")
  }

  trackProductId(item: any) {
    return item ? item.key : undefined;
  }
}