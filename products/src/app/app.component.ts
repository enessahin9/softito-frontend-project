import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { Category, Product, ProductRate } from './entities/entities';
import { ProductViewDto } from './entities/dtos';
import "./extensions/strings"
// import { UserPermissionViewDto } from './entities/dtos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MenuComponent,
    FormsModule,
    CommonModule,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'products';
  searchText: string = ""

  categories: Category[] = [
    {
      id: 1,
      name: "Giyim"
    },
    {
      id: 2,
      name: "Aksesuar"
    },
    {
      id: 3,
      name: "Ayakkabı"
    },
    {
      id: 4,
      name: "Çanta"
    }

  ]
  products: Product[] = [
    {
      id: 1,
      categoryId: 2,
      name: "Swarovski Orbita",
      price: 16000
    }, {
      id: 2,
      categoryId: 1,
      name: "LV T-shirt",
      price: 8500
    }, {
      id: 3,
      categoryId: 3,
      name: "Air Jordan",
      price: 8000
    }, {
      id: 4,
      categoryId: 4,
      name: "Chanel Bag",
      price: 22000
    }, {
      id: 5,
      categoryId: 3,
      name: "Balenciaga Runner",
      price: 32000
    }, {
      id: 6,
      categoryId: 4,
      name: "Hermes Bag",
      price: 18000
    },
  ]

  productRates: ProductRate[] = [
    {
      id: 1,
      productId: 1,
      rate: 9
    }, {
      id: 2,
      productId: 2,
      rate: 8
    }, {
      id: 3,
      productId: 3,
      rate: 7.5
    }, {
      id: 4,
      productId: 4,
      rate: 10
    }, {
      id: 5,
      productId: 5,
      rate: 8
    }, {
      id: 6,
      productId: 6,
      rate: 7
    },
  ]
  view: any;


  getProductWithRateList(): ProductViewDto[] {
    let productViewList: ProductViewDto[] = this.products.map(product => {
      let productRates = this.productRates.filter(rate => rate.productId == product.id);
      return {
        id: product.id,
        name: product.name,
        categoryId: product.categoryId,
        price: product.price,
        categoryName: this.categories.find(category => category.id == product.categoryId)?.name,
        rate: productRates.map(productRate => productRate.rate).reduce((numb1, num2) => numb1 + num2, 0) / productRates.length,
        rateCount: productRates.length
      };
    })
    productViewList = productViewList.filter(view =>
      this.searchText == "" ||
      (
        view.categoryId.toString() == this.searchText ||
        view.id.toString() == this.searchText ||
        view.name?.toSearchText().includes(this.searchText.toSearchText()) ||
        view.categoryName?.toSearchText().includes(this.searchText.toSearchText()) ||
        view.price.toString().toSearchText().includes(this.searchText.toSearchText()) ||
        view.rate?.toString().toSearchText().includes(this.searchText.toSearchText()) ||
        view.rateCount?.toString() == this.searchText
      )
    )
    console.log(productViewList)
    return productViewList;
  }

}
