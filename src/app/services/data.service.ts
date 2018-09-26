import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../interfaces/product';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material';
import { map } from 'rxjs/operators';
import {forEach} from '@angular/router/src/utils/collection';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    public url: string;
    public products: Array<Product>;
    public dataSource;

  constructor(private http: HttpClient) {
      this.url = 'https://scrap-api.herokuapp.com';
      this.dataSource = new MatTableDataSource();

  }

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url + '/products').pipe(map((data: Product[]) => {
            data.map((el: Product) => {
                el.price = el.pln + el.gr / 100;
                return el;
            });
            return data;
        }));
    }


}
