import { Component, OnInit } from '@angular/core';
import {DataService} from './services/data.service';
import {Product} from './interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private ds: DataService) {}

  ngOnInit() {
      this.ds.getProducts().subscribe((data: Array<Product>) => this.ds.products = data);
  }
}
