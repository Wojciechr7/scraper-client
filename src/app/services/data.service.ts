import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../interfaces/product';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material';


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
        return this.http.get<Product[]>(this.url + '/products');
    }


}
