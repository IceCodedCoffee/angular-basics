import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  products: any = [
    { favourite: false, title: 'HTML book' },
    { favourite: false, title: 'Angular book' },
    { favourite: false, title: 'React book' },
  ];

  onClick(product: any) {
    let productIndex = this.products.indexOf(product);
    this.products[productIndex].favourite = !this.products[productIndex].favourite;
  }

  fontSize: number = 16;
  readonly fontSizeMax: number = 20;
  readonly fontSizeMin: number = 12;
  isMaxFontSize: boolean = false;
  isMinFontSize: boolean = false;

  getFontSize(): number {
    return this.fontSize;
  }

  incrementFontSize(): number {
    if (this.fontSize < this.fontSizeMax) {
      this.isMaxFontSize = false;
      this.isMinFontSize = false;
      return this.fontSize += 1;
    }
    else {
      this.isMaxFontSize = true;
      return this.fontSize;
    }
  }
  decrementFontSize(): number {
    if (this.fontSize > this.fontSizeMin) {
      this.isMinFontSize = false;
      this.isMaxFontSize = false;
      return this.fontSize -= 1;
    }
    else {
      this.isMinFontSize = true;
      return this.fontSize;
    }
  }
}