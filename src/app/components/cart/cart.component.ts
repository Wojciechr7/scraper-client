import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public ds: DataService) { }

    public getStorage() {
        return JSON.parse(localStorage.getItem('cart'));
    }

    public calculateTotalPrice() {
      return Math.round(this.getStorage().reduce((a, b) => a + b.price, 0) * 100) / 100;
    }

  ngOnInit() {
  }



}
