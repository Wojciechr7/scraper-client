import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../interfaces/product';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

    public url: string;
    public products: Array<Product>;

  constructor(private http: HttpClient) {
      this.url = 'https://scrap-api.herokuapp.com';
  }

    public getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url + '/products');
    }


}
