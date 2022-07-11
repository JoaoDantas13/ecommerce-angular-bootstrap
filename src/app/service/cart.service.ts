import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any[] = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}

  getProdutos() {
    return this.productList.asObservable();
  }

  setProduto(produto: any) {
    this.cartItemList.push(...produto);
    this.productList.next(produto);
  }

  addtoCart(produto: any) {
    this.cartItemList.push(produto);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.price;
    });
    return grandTotal;
  }

  removeCarItem(produto: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (produto.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
  }

  removeAllCartItem() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
